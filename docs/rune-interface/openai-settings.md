---
sidebar_position: 7
---

# OpenAI Settings

RUNE Interface includes comprehensive settings for configuring OpenAI integration. This guide explains how to configure API keys, select models, manage workflow functions, and troubleshoot common issues.

## Accessing OpenAI Settings

To open the OpenAI Settings dialog:

1. Click **Settings** in the menu bar
2. Select **OpenAI Settings** from the menu

Alternatively, you can access it through:
- **Settings** → **AI Provided** → **OpenAI Settings** (if using the AI Platform Manager)

The settings dialog contains two main tabs:
- **Settings**: API configuration and model selection
- **Workflow Functions**: Register workflows as OpenAI functions

## Settings Tab

The Settings tab allows you to configure your OpenAI API connection and preferences.

### Enable/Disable OpenAI

At the top of the Settings tab, you'll find the **Enable OpenAI** checkbox:

- **Checked**: OpenAI features are enabled and available
- **Unchecked**: OpenAI features are disabled (chat and workflow functions won't work)

Changes take effect immediately. When disabled, the chat interface will show a message indicating OpenAI is not enabled.

### API Key Configuration

You can configure your OpenAI API key in two ways:

#### Direct Input

1. Select **Direct Input** radio button
2. Enter your API key in the **API Key** field
3. The field is masked (password-style) for security
4. Changes are saved automatically

> **Security Note**: API keys are stored in the `rune.ini` configuration file. Keep this file secure and don't share it.

#### Environment Variable

1. Select **Environment Variable** radio button
2. Enter the name of your environment variable (default: `OPENAI_API_KEY`)
3. The application will read the API key from that environment variable
4. Changes are saved automatically

**Benefits of using environment variables:**
- API keys aren't stored in configuration files
- Easier to manage across multiple applications
- Better security for shared systems

**Setting up an environment variable:**

**Windows (PowerShell):**
```powershell
$env:OPENAI_API_KEY = "your-api-key-here"
```

**Windows (Command Prompt):**
```cmd
set OPENAI_API_KEY=your-api-key-here
```

**macOS/Linux:**
```bash
export OPENAI_API_KEY="your-api-key-here"
```

To make it permanent, add it to your shell profile (`.bashrc`, `.zshrc`, etc.).

### Organization ID (Optional)

If you're part of an OpenAI organization, you can specify your Organization ID:

1. Enter your Organization ID in the **Organization ID** field
2. This is optional - leave it blank if you don't have an organization
3. Changes are saved automatically

The Organization ID is used for billing and usage tracking when making API calls.

### Model Selection

You can specify which OpenAI model to use:

1. Enter the model name in the **Model** field
2. Common models include:
   - `gpt-3.5-turbo` - Fast and cost-effective
   - `gpt-4` - More capable but slower and more expensive
   - `gpt-4-turbo` - Enhanced version of GPT-4
   - `gpt-4o` - Latest GPT-4 variant

3. The default is `gpt-3.5-turbo`
4. Changes are saved automatically

> **Note**: Model availability depends on your OpenAI API access level. Some models may require special access or have usage limits.

### Status Display

The Settings tab shows the current OpenAI connection status:

- **Disabled** (gray): OpenAI is disabled
- **Initializing** (yellow): OpenAI is starting up
- **Ready** (green): OpenAI is ready to use
- **Error** (red): An error occurred (see error message below)

If there's an error, a red error message will appear below the status, explaining what went wrong. Common issues include:

- Invalid API key
- Network connection problems
- API rate limits exceeded
- Insufficient API credits

## Workflow Functions Tab

The Workflow Functions tab allows you to register your RUNE workflows as OpenAI functions. This enables the AI to call your workflows during conversations.

### Understanding Workflow Functions

When you register a workflow as a function:

1. The workflow becomes available to the AI during chat conversations
2. The AI can automatically call the workflow when appropriate
3. Workflow results are returned to the conversation context
4. The AI can use workflow outputs to provide better responses

**Requirements:**
- The workflow must contain an `OpenAITriggered` event node
- The workflow must be saved in your flows directory
- The workflow must have input/output pins defined

### Available Workflows

The Workflow Functions tab shows a list of all workflows that contain `OpenAITriggered` nodes:

- **Workflow ID**: The folder name of the workflow (e.g., `my-workflow`)
- **Enable Checkbox**: Toggle to enable/disable the workflow as a function
- **Function Name**: The name the AI will use to call this function
- **Description**: A description of what the function does (used by the AI)

### Refreshing Workflows

To update the list of available workflows:

1. Click the **Refresh Workflows** button
2. The application scans your flows directory for workflows with `OpenAITriggered` nodes
3. New workflows appear in the list
4. Workflow configurations are reloaded

Use this when you've added new workflows or modified existing ones.

### Configuring a Workflow Function

For each workflow, you can configure:

#### Enable/Disable

- Check the box to enable the workflow as a function
- Uncheck to disable it (the AI won't be able to call it)
- Changes require clicking **Save All** to take effect

#### Function Name

- The name the AI will use when calling this function
- Should be descriptive and follow function naming conventions
- Defaults to a sanitized version of the workflow ID
- Can be customized to be more meaningful

**Example:**
- Workflow ID: `process-text`
- Function Name: `process_text` or `processText` or `processTextFile`

#### Description

- A clear description of what the function does
- This is critical - the AI uses this to decide when to call the function
- Should explain:
  - What the function does
  - What inputs it expects
  - What outputs it provides

**Example:**
```
Processes a text file and extracts key information. 
Takes a file path as input and returns extracted data as JSON.
```

#### Input/Output Pins

The tab automatically displays:
- **Inputs**: List of input pin names and their types from the `OpenAITriggered` node
- **Outputs**: List of output pin names and their types

This information is read-only and helps you understand what data the function accepts and returns.

### Analyze Button

For each workflow, there's an **Analyze** button:

1. Click **Analyze** to automatically analyze the workflow
2. The application examines the workflow structure
3. It generates a suggested function name and description
4. The suggestions are based on:
   - Workflow name/ID
   - Node types in the workflow
   - Input/output pin names and types

You can then refine the suggestions before saving.

### Saving Configuration

After configuring your workflow functions:

1. Make sure all desired workflows are enabled
2. Review function names and descriptions
3. Click **Save All** to save all configurations
4. The configurations are persisted and loaded on next startup

> **Important**: You must click **Save All** for your changes to take effect. The AI won't see your workflows until they're saved.

## Configuration Storage

All OpenAI settings are stored in the `rune.ini` file in the executable directory:

- **API Key**: Stored in `[OpenAI]` section as `ApiKey` (if using direct input)
- **Environment Variable**: Stored as `ApiKeyEnv` (if using environment variable)
- **Organization**: Stored as `Organization`
- **Model**: Stored as `Model`
- **Enabled**: Stored as `Enabled` (boolean)
- **Workflow Configs**: Stored separately in workflow configuration files

Settings are automatically saved when you make changes in the Settings tab. Workflow function configurations are saved when you click **Save All**.

## Troubleshooting

### API Key Issues

**"Invalid API Key" error:**
- Verify your API key is correct (no extra spaces)
- Check that the API key hasn't expired
- Ensure you have API access enabled on your OpenAI account

**"API Key not found" (environment variable):**
- Verify the environment variable name is correct
- Check that the environment variable is set in your current session
- Restart RUNE Interface after setting the environment variable

### Connection Issues

**"Network error" or timeout:**
- Check your internet connection
- Verify OpenAI API is accessible from your network
- Check firewall settings
- Try using a different network

**"Rate limit exceeded":**
- You've hit OpenAI's rate limits
- Wait a few minutes and try again
- Consider upgrading your OpenAI plan

### Model Issues

**"Model not found" error:**
- Verify the model name is correct
- Check that you have access to that model
- Some models require special API access

**Slow responses:**
- Some models are slower than others (`gpt-4` is slower than `gpt-3.5-turbo`)
- Check your internet connection speed
- Consider using a faster model for testing

### Workflow Function Issues

**Workflow not appearing in list:**
- Ensure the workflow contains an `OpenAITriggered` node
- Verify the workflow is saved in your flows directory
- Click **Refresh Workflows** to rescan

**Workflow not being called by AI:**
- Verify the workflow is enabled
- Check that you clicked **Save All** after enabling
- Ensure the function name and description are clear
- The AI may not call it if it doesn't seem relevant to the conversation

**"OpenAITriggered node not found" error:**
- The workflow must have exactly one `OpenAITriggered` node
- Verify the node is properly placed in the workflow
- Re-save the workflow file

## Related Documentation

- [OpenAI Chat](/docs/rune-interface/openai-chat) - Using the chat interface
- [OpenAI Workflows](/docs/rune-interface/openai-workflows) - Detailed workflow function guide
- [OpenAI Nodes](/docs/nodes/openai-set-api-key) - Using OpenAI nodes in flows

