"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PDFAgentPage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleRun = async () => {
    setLoading(true)
    try {
      let response
      if (file) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("input", input)
        response = await fetch("/api/trigger", {
          method: "POST",
          body: formData,
        })
      } else {
        response = await fetch("/api/trigger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workflowId: "pdf-agent-id", // Replace with actual ID
            engine: "langflow",
            triggerType: "manual",
            inputPayload: {
              text: input,
            },
          }),
        })
      }
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
          <CardTitle>PDF Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your PDF content or instructions here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px]"
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block mb-2"
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