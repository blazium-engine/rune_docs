---
sidebar_position: 3
---

# MCP Server

RUNE Interface includes a built-in MCP (Model Context Protocol) Server that allows external tools like Cursor to trigger and interact with your workflows. This guide explains how the MCP Server works, how to configure it, and how to integrate it with MCP-compatible clients.

## What is the MCP Server?

The MCP Server is an HTTP-based server that exposes RUNE workflows through the Model Context Protocol. It enables AI-powered tools and other applications to:

- Trigger workflows remotely
- Execute workflows by ID
- Integrate RUNE workflows into external automation systems

The server runs locally on your machine and provides a standard MCP interface for connecting clients.

## Current MCP Server System

RUNE Interface implements a lightweight MCP Server that follows the MCP Tools specification. The server runs in a separate thread and provides a RESTful HTTP endpoint for MCP communication.

### Server Configuration

The MCP Server uses the following default configuration:

- **Host**: `127.0.0.1` (localhost only, for security)
- **Default Port**: `42000`
- **Endpoint**: `/mcp`
- **Full URL**: `http://127.0.0.1:42000/mcp`
- **Server Name**: `RUNE MCP Server`
- **Version**: `1.0.0`

The server is designed to run locally and bind only to localhost to ensure security. All communication stays within your local machine.

### Enabling the MCP Server

The MCP Server is controlled through the application settings:

1. Open **Application Settings** (from the menu bar)
2. Navigate to the **MCP Settings** section
3. Configure the port (default: 42000)
4. Click **Start** to launch the server

The server status is displayed in real-time, showing whether it's running, stopped, starting, or if there's an error.

## Configuration

### Port Configuration

The MCP Server port can be configured to any available port between 1 and 65535:

1. Open **Application Settings**
2. Go to **MCP Settings**
3. Enter your desired port number in the **Port** field
4. The port is validated before the server starts

If a port is already in use or invalid, an error message will be displayed. The port setting is automatically saved to your configuration file (`rune.ini`).

### Server Controls

The MCP Settings dialog provides three control buttons:

- **Start**: Starts the MCP Server on the configured port
- **Stop**: Stops the running server
- **Restart**: Stops and then starts the server (useful after changing settings)

### Viewing Server Information

To view detailed server information:

1. Open **Application Settings**
2. Click **MCP Information** (or access from the menu bar)
3. The dialog shows:
   - Current MCP URL (click **Copy** to copy to clipboard)
   - Port number
   - Server status
   - List of available MCP tools

## Available Tools

The MCP Server currently provides two tools for interacting with workflows:

### trigger_workflow

Triggers the currently active workflow's MCP Triggered event node.

**Description**: Trigger the currently active workflow's MCP Triggered event node

**Parameters**: None

**Returns**: Success or error message

**Requirements**: 
- A workflow must be currently open in RUNE Interface
- The workflow must contain an `MCPTriggered` event node

### trigger_workflow_by_id

Triggers a workflow by its ID if it has an MCP Triggered event node.

**Description**: Trigger a workflow by ID if it has an MCP Triggered event node

**Parameters**:
- `workflow_id` (string, required): The ID of the workflow to trigger (corresponds to the folder name in your flows directory)

**Returns**: Success or error message

**Requirements**: 
- The workflow ID must exist in your flows directory
- The workflow must contain an `MCPTriggered` event node

## Using with Cursor

Cursor is a popular AI-powered code editor that supports MCP servers. You can configure RUNE Interface as an MCP server in Cursor to trigger workflows directly from the editor.

### Step 1: Start the MCP Server

1. Launch RUNE Interface
2. Open **Application Settings**
3. Navigate to **MCP Settings**
4. Ensure the port is set to `42000` (or note your custom port)
5. Click **Start** to launch the server
6. Verify the status shows "Running"

### Step 2: Configure Cursor

1. Open Cursor
2. Navigate to your Cursor configuration directory:
   - edit your MCP settings file directly: `~/.cursor/mcp.json` (or `%USERPROFILE%\.cursor\mcp.json` on Windows)

3. Add the RUNE Interface MCP server configuration:

```json
{
  "mcpServers": {
    "rune-interface": {
      "url": "http://127.0.0.1:42000/mcp"
    }
  }
}
```

If you're using a custom port, replace `42000` with your configured port number.

4. Save the configuration file
5. Restart Cursor to load the new MCP server configuration

### Step 3: Verify Connection

Once configured, you can verify the connection works:

1. In Cursor, the MCP server should appear in your available tools
2. You should see `trigger_workflow` and `trigger_workflow_by_id` in the list of available tools
3. Try triggering a workflow to test the connection

### Using MCP Tools in Cursor

Once configured, you can use the MCP tools in Cursor:

**To trigger the active workflow:**
- The `trigger_workflow` tool will trigger whatever workflow is currently open in RUNE Interface

**To trigger a specific workflow:**
- Use `trigger_workflow_by_id` with the workflow ID parameter
- The workflow ID is the folder name in your flows directory (e.g., if your workflow is at `flows/my-workflow/flow.json`, the ID is `my-workflow`)

## MCPTriggered Event Node

The MCPTriggered node is a special event node that serves as the entry point for MCP-triggered workflow executions. It works similarly to the ButtonEvent and CronEvent nodes, but is specifically designed to be triggered by external MCP clients.

### Adding an MCPTriggered Node

To create a workflow that can be triggered via MCP:

1. Open or create a workflow in RUNE Interface
2. Add an **MCPTriggered** event node from the Events category in the node menu
3. Connect your workflow logic to the output of the MCPTriggered node
4. Save your workflow

### How It Works

When an MCP client (like Cursor) calls `trigger_workflow` or `trigger_workflow_by_id`:

1. RUNE Interface locates the MCPTriggered node in the specified workflow
2. Execution begins from that node
3. The workflow runs normally, following the connections from the MCPTriggered node
4. Results are logged and available in the execution history

### Relationship to Other Event Nodes

The MCPTriggered node is one of three event node types in RUNE Interface:

- **ButtonEvent**: Triggered manually by clicking a button in the UI
- **CronEvent**: Triggered on a schedule (cron expression)
- **MCPTriggered**: Triggered by external MCP clients

A workflow can have multiple event nodes, but only one will be used as the entry point during execution. The execution order priority is:
1. MCPTriggered (when triggered via MCP)
2. CronEvent (when scheduled)
3. ButtonEvent (when manually triggered)

## Server Status

### Status Indicators

The MCP Server can be in one of several states:

- **Stopped**: The server is not running
- **Starting**: The server is in the process of starting
- **Running**: The server is active and accepting connections
- **Stopping**: The server is in the process of shutting down
- **Error**: An error occurred (see error details below)

### Error Handling

If the server fails to start, common issues include:

- **Port Already in Use**: Another application is using the configured port
  - **Solution**: Change to a different port number or stop the conflicting application

- **Invalid Port Number**: The port is outside the valid range (1-65535)
  - **Solution**: Use a port number between 1 and 65535

- **Permission Denied**: Insufficient permissions to bind to the port (rare on Windows, more common on Linux)
  - **Solution**: Use a port above 1024 (non-privileged ports), or run with appropriate permissions

- **Bind Failed**: The server couldn't bind to the network interface
  - **Solution**: Check firewall settings or network configuration

### Troubleshooting

**Server won't start:**

1. Check the port number is valid (1-65535)
2. Verify no other application is using the port:
   - Windows: `netstat -ano | findstr :42000`
   - macOS/Linux: `lsof -i :42000` or `netstat -an | grep 42000`
3. Try a different port number
4. Check the error message in the MCP Settings dialog for specific details

**Connection refused in Cursor:**

1. Verify RUNE Interface is running
2. Confirm the MCP Server status shows "Running"
3. Check the URL in your Cursor configuration matches the server URL
4. Verify the port number matches between RUNE Interface and Cursor config
5. Ensure Cursor was restarted after configuration changes

**Workflow not triggering:**

1. Verify the workflow contains an MCPTriggered node
2. For `trigger_workflow_by_id`, ensure the workflow ID is correct (check the folder name in your flows directory)
3. Check the execution history in RUNE Interface for error messages
4. Verify the workflow is saved and accessible

**Tools not appearing in Cursor:**

1. Restart Cursor after configuring the MCP server
2. Verify the JSON configuration is valid (check for syntax errors)
3. Check that the server URL is correct and accessible
4. Look for error messages in Cursor's developer console or logs

## Security Considerations

The MCP Server is designed with security in mind:

- **Localhost Only**: The server binds only to `127.0.0.1`, preventing external network access
- **No Authentication**: Since it's localhost-only, no authentication is required (trusted local connections)
- **Workflow Isolation**: Each workflow execution runs in its own session state
- **Error Handling**: Errors are logged but don't expose sensitive information to clients

For production or multi-user scenarios, consider:
- Using a reverse proxy with authentication
- Implementing network-level firewall rules
- Running in a restricted network environment

## Current Status

The MCP Server implementation includes:

- HTTP-based MCP transport (Streamable HTTP)
- Two workflow trigger tools (`trigger_workflow`, `trigger_workflow_by_id`)
- Real-time status monitoring
- Port configuration and validation
- Error handling and reporting
- Integration with RUNE Interface's workflow execution system

The server follows the MCP Tools specification (2025-11-25) and is compatible with standard MCP clients.

## Questions or Issues?

If you encounter any issues with the MCP Server or have questions about integration, please post in the [itch.io discussion board](https://blaziumengine.itch.io/rune-interface).

For more information about the Model Context Protocol specification, visit: [modelcontextprotocol.io](https://modelcontextprotocol.io)

