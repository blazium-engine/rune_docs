---
sidebar_position: 6
---

# OpenAI Chat

RUNE Interface includes a built-in OpenAI chat interface that allows you to have conversations with AI models directly within the application. This guide explains how to use the chat interface, manage conversations, and interact with AI-powered features.

## What is the OpenAI Chat?

The OpenAI Chat is an integrated chat interface that provides direct access to OpenAI's language models. You can use it to:

- Have conversations with AI assistants
- Get help with workflow design
- Ask questions about RUNE Interface features
- Use registered workflows as AI functions during conversations

The chat interface runs locally in RUNE Interface and communicates with OpenAI's API using your configured API key.

## Accessing the Chat

The OpenAI Chat is accessible through the **AI Chat** tab in the main RUNE Interface window:

1. Launch RUNE Interface
2. Look for the **AI Chat** tab in the main window
3. Click on the tab to open the chat interface

> **Note**: The chat interface requires OpenAI to be enabled and configured. If you haven't set up OpenAI yet, see [OpenAI Settings](/docs/rune-interface/openai-settings) for configuration instructions.

## Chat Interface Overview

The chat interface consists of several key components:

### Conversation Tabs

The chat supports multiple conversation tabs, allowing you to maintain separate conversations simultaneously:

- **Tab Bar**: Shows all active conversations at the top
- **New Tab Button**: Click the **+** button to create a new conversation
- **Tab Titles**: Automatically generated from the first user message (truncated to 30 characters)
- **Closing Tabs**: Click the **×** on a tab to close it (you cannot close the last tab)

### Chat Area

The main chat area displays the conversation history:

- **Message Display**: Shows all messages in the current conversation
- **Role Indicators**: Messages are labeled as `[User]`, `[Assistant]`, or `[System]`
- **Auto-scrolling**: Automatically scrolls to the bottom when new messages arrive
- **Message Wrapping**: Long messages wrap to fit the available width

### Input Area

The input area at the bottom allows you to send messages:

- **Multi-line Input**: Type your message in the text area
- **Send Button**: Click **Send** to send your message
- **Clear Button**: Click **Clear** to start a new conversation (clears all messages)

## Using the Chat

### Sending Messages

To send a message:

1. Click in the input area at the bottom of the chat
2. Type your message (supports multi-line text)
3. Press **Enter** to send, or click the **Send** button

**Keyboard Shortcuts:**
- **Enter**: Send the message
- **Shift + Enter**: Insert a new line (does not send)

### Managing Conversations

**Creating a New Conversation:**
- Click the **+** button in the tab bar to create a new conversation tab
- Each tab maintains its own conversation history

**Switching Between Conversations:**
- Click on any tab to switch to that conversation
- Each conversation maintains its own context and history

**Clearing a Conversation:**
- Click the **Clear** button to delete all messages in the current conversation
- This creates a fresh conversation while keeping the tab open

**Closing a Tab:**
- Click the **×** button on a tab to close it
- If it's the last tab, closing it will clear the conversation instead

### Conversation History

Conversations are automatically saved to your session storage:

- **Location**: Stored in the session storage directory
- **Format**: Each conversation is saved as a JSON file
- **Persistence**: Conversations persist across application restarts
- **Auto-save**: Messages are saved automatically as they are sent

## Status Indicators

The chat interface shows the current status of the OpenAI connection:

- **"OpenAI is not enabled"**: OpenAI is disabled in settings
- **"Processing..."**: A message is being sent or a response is being received
- **No indicator**: Ready to send messages

If OpenAI is not enabled or not ready, you'll see a message at the top of the chat area explaining the issue.

## Workflow Function Integration

When workflows are registered as OpenAI functions (see [OpenAI Workflows](/docs/rune-interface/openai-workflows)), the AI can call these workflows during conversations:

1. **Automatic Detection**: The AI automatically detects when to use registered workflows
2. **Function Calls**: When appropriate, the AI will call your registered workflows
3. **Results**: Workflow results are returned to the conversation context
4. **Seamless Integration**: Function calls happen automatically - you don't need to do anything special

For example, if you have a workflow registered that processes text, the AI might call it automatically when you ask it to process some text.

## Best Practices

### Organizing Conversations

- Use separate tabs for different topics or projects
- Clear conversations when starting a new task to avoid context confusion
- Keep related conversations in the same tab

### Effective Communication

- Be clear and specific in your questions
- Provide context when asking about workflows or features
- Use multi-line messages for complex questions or instructions

### Performance Tips

- Close unused conversation tabs to reduce memory usage
- Clear old conversations periodically if you have many tabs
- Wait for responses to complete before sending new messages

## Troubleshooting

### Chat Not Appearing

If you don't see the AI Chat tab:

1. Verify OpenAI is enabled in Settings → OpenAI Settings
2. Check that your API key is configured correctly
3. Ensure the OpenAI status shows "Ready" in settings
4. Restart RUNE Interface if needed

### Messages Not Sending

If messages aren't sending:

1. Check the status indicator - if it shows "Processing...", wait for it to complete
2. Verify your API key is valid and has sufficient credits
3. Check your internet connection
4. Look for error messages in the chat area

### Conversations Not Saving

If conversations aren't persisting:

1. Check that you have write permissions in the session storage directory
2. Verify the session storage path is accessible
3. Check application logs for file system errors

### Slow Responses

If responses are slow:

1. Check your internet connection speed
2. Verify the selected model (some models are faster than others)
3. Check OpenAI API status for any service issues
4. Consider using a faster model (e.g., `gpt-3.5-turbo` instead of `gpt-4`)

## Related Documentation

- [OpenAI Settings](/docs/rune-interface/openai-settings) - Configure API keys and models
- [OpenAI Workflows](/docs/rune-interface/openai-workflows) - Register workflows as AI functions
- [OpenAI Nodes](/docs/nodes/openai-set-api-key) - Use OpenAI nodes in your flows

