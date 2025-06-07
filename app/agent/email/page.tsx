"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailAgentPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRun = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/trigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workflowId: "93bfcc92-5f7a-4468-bcbb-a4b398a3c2e4",
          engine: "langflow",
          triggerType: "manual",
          inputPayload: {
            text: input,
          },
        }),
      })
      const data = await response.json()
      setOutput(JSON.stringify(data, null, 2))
    } catch (error) {
      setOutput("Error: " + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your email content here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px]"
          />
          <Button onClick={handleRun} disabled={loading}>
            {loading ? "Running..." : "Run Agent"}
          </Button>
          {output && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Output:</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-auto">
                {output}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 