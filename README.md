# Main Flow - Workflow Automation Platform

A powerful workflow automation platform that integrates LangFlow and N8N to create, manage, and execute automated workflows with AI agents.

## 🚀 Features

- **Multiple Agent Types**
  - Email Agent: Process and analyze email content
  - PDF Agent: Extract and process information from PDF documents
  - JSON Agent: Handle and transform JSON data
  - Custom Agent: Create and manage custom workflows

- **Workflow Management**
  - Create and edit workflows using LangFlow's visual interface
  - Monitor workflow executions in real-time
  - View execution history and results
  - Export and import workflows

- **Integration Capabilities**
  - Seamless integration with LangFlow for AI-powered workflows
  - N8N integration for advanced automation
  - API endpoints for programmatic access

## 🛠️ Technology Stack

- **Frontend**
  - Next.js 14
  - React
  - Tailwind CSS
  - Shadcn UI Components
  - TypeScript

- **Backend**
  - Node.js
  - Express
  - LangFlow API
  - N8N API

- **Infrastructure**
  - Docker
  - Docker Compose
  - SQLite Database

## 🏗️ Architecture

The project follows a modern microservices architecture:

1. **Frontend Application**
   - Next.js application serving the user interface
   - Real-time updates using Server-Sent Events
   - Responsive design for all device sizes

2. **Backend Services**
   - LangFlow service for AI workflow execution
   - N8N service for automation workflows
   - API routes for data management

3. **Data Storage**
   - SQLite database for persistent storage
   - Volume mounts for data persistence

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/main_flow.git
   cd main_flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the services:
   ```bash
   docker-compose up -d
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - LangFlow: http://localhost:7860
   - N8N: http://localhost:5678

## 📁 Project Structure

```
main_flow/
├── app/                    # Next.js application
│   ├── agent/             # Agent-specific pages
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   └── lib/               # Utility functions
├── public/                # Static assets
├── docker-compose.yml     # Docker configuration
└── package.json          # Project dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# LangFlow Configuration
LANGFLOW_BASE_URL=http://localhost:7860
LANGFLOW_API_KEY=your_api_key

# N8N Configuration
N8N_BASE_URL=http://localhost:5678
N8N_API_KEY=your_api_key
```

## 📝 API Documentation

### Agent Endpoints

- `POST /api/trigger`: Trigger a workflow execution
- `GET /api/executions`: Get execution history
- `GET /api/executions/{id}`: Get specific execution details

### Workflow Management

- `GET /api/workflows`: List available workflows
- `POST /api/workflows`: Create a new workflow
- `PUT /api/workflows/{id}`: Update a workflow
- `DELETE /api/workflows/{id}`: Delete a workflow

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LangFlow](https://github.com/logspace-ai/langflow) for the workflow engine
- [N8N](https://n8n.io/) for automation capabilities
- [Next.js](https://nextjs.org/) for the frontend framework
- [Shadcn UI](https://ui.shadcn.com/) for the component library 