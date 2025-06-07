# Use the official Langflow backend image
FROM langflowai/langflow-backend:latest

# Create a directory for flows
RUN mkdir /app/flows

# Copy flow files
COPY flows/*.json /app/flows/

# Copy .env file
COPY .env /app/.env

# Set environment variable so Langflow loads your flows
ENV LANGFLOW_LOAD_FLOWS_PATH=/app/flows

# Expose the default port
EXPOSE 7860

# Start Langflow (remove --backend-only for full UI)
CMD ["langflow", "run", "--backend-only", "--host", "0.0.0.0", "--port", "7860"]
