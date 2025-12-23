---
sidebar_position: 8
---

# OpenAI Workflows

RUNE Interface allows you to register your workflows as OpenAI functions, enabling the AI to automatically call your workflows during chat conversations. This guide explains how workflow function registration works, how to set it up, and best practices for creating AI-callable workflows.

## What are OpenAI Workflows?

OpenAI Workflows are RUNE workflows that have been registered as functions that the AI can call during conversations. When you register a workflow:

1. The workflow becomes available to the AI as a callable function
2. The AI can automatically detect when to use your workflow
3. The workflow executes with parameters provided by the AI
4. Results are returned to the conversation context
5. The AI can use those results to provide better responses

This creates a powerful integration where the AI can leverage your custom workflows to perform tasks, process data, and interact with external systems.

## How It Works

### The OpenAITriggered Node

To make a workflow callable by the AI, it must contain an **OpenAITriggered** event node:

1. **Event Node**: The `OpenAITriggered` node serves as the entry point when the AI calls your workflow
2. **Input Pins**: The node receives parameters from the AI function call
3. **Output Pins**: The node provides results back to the AI
4. **Execution Flow**: Normal workflow execution continues from this node

### Function Registration Process

When you register a workflow:

1. **Discovery**: RUNE Interface scans your flows directory for workflows containing `OpenAITriggered` nodes
2. **Analysis**: Each workflow is analyzed to extract:
   - Input pin names and types
   - Output pin names and types
   - Suggested function name and description
3. **Registration**: The workflow is registered with OpenAI as a function
4. **Availability**: The function becomes available to the AI during conversations

### Function Calling Flow

When the AI decides to call your workflow:

1. **Detection**: The AI identifies that your workflow would be useful
2. **Function Call**: The AI makes a function call with appropriate parameters
3. **Workflow Execution**: Your workflow runs with the provided parameters
4. **Result Return**: Workflow outputs are returned to the AI
5. **Response**: The AI uses the results to provide a better response

## Creating an AI-Callable Workflow

### Step 1: Add the OpenAITriggered Node

1. Open or create a workflow in RUNE Interface
2. From the **Events** category, drag an **OpenAI Triggered** node onto the canvas
3. This node will be the entry point when the AI calls your workflow

### Step 2: Define Input Pins

The `OpenAITriggered` node has three input pins by default:

- **Input** (string): General text input from the AI
- **Data** (json): Structured data input
- **Parameters** (json): Function call parameters

You can use these pins to receive data from the AI. Connect them to other nodes in your workflow to process the input.

**Example:**
- If your workflow processes a file path, connect the **Input** pin to a file reading node
- If your workflow needs structured data, use the **Parameters** pin and parse the JSON

### Step 3: Build Your Workflow Logic

Connect nodes to process the input and produce results:

1. Connect nodes from the `OpenAITriggered` node's **Trigger** execution pin
2. Process the input data through your workflow logic
3. Produce outputs that will be returned to the AI

**Example Workflow:**
```
OpenAITriggered → Parse JSON → Process Data → Format Result → Output
```

### Step 4: Define Output Pins

The `OpenAITriggered` node has two output pins:

- **Output** (string): Text result to return to the AI
- **Result** (json): Structured data result

Connect your workflow results to these pins so they're returned to the AI.

**Example:**
- If your workflow extracts text, connect to **Output**
- If your workflow produces structured data, connect to **Result**

### Step 5: Register the Workflow

1. Open **Settings** → **OpenAI Settings**
2. Go to the **Workflow Functions** tab
3. Click **Refresh Workflows** to find your new workflow
4. Enable the workflow by checking its checkbox
5. Configure the function name and description
6. Click **Save All**

## Configuring Workflow Functions

### Function Name

The function name is how the AI identifies your workflow:

- **Naming Convention**: Use lowercase with underscores (e.g., `process_text_file`)
- **Descriptive**: Make it clear what the function does
- **Unique**: Each function name must be unique

**Good Examples:**
- `process_text_file`
- `get_weather_data`
- `send_email_notification`
- `analyze_code_syntax`

**Bad Examples:**
- `workflow1` (not descriptive)
- `my-function` (use underscores, not hyphens)
- `ProcessText` (use lowercase)

### Function Description

The description is critical - the AI uses it to decide when to call your function:

- **Clear Purpose**: Explain what the function does
- **Input Description**: Describe what inputs it expects
- **Output Description**: Describe what it returns
- **Use Cases**: Mention when it should be used

**Example Description:**
```
Processes a text file and extracts key information. 
Takes a file path as input and returns extracted data as JSON.
Use this when you need to analyze or extract information from text files.
```

### Using the Analyze Feature

The **Analyze** button automatically generates suggestions:

1. Click **Analyze** for your workflow
2. The system examines your workflow structure
3. It generates:
   - A suggested function name (based on workflow ID and structure)
   - A suggested description (based on node types and pin names)

You can then refine these suggestions before saving.

## Best Practices

### Workflow Design

**Keep It Focused:**
- Each workflow should do one thing well
- Avoid overly complex workflows that try to do everything
- Break complex tasks into multiple focused workflows

**Clear Inputs/Outputs:**
- Use descriptive pin names
- Document what each input expects
- Make outputs predictable and well-structured

**Error Handling:**
- Handle missing or invalid inputs gracefully
- Return meaningful error messages in outputs
- Use the workflow's error handling capabilities

### Function Naming and Description

**Be Specific:**
- Use specific, descriptive function names
- Avoid generic names like `process` or `handle`
- Include the domain or context (e.g., `process_email_text` not just `process_text`)

**Write Clear Descriptions:**
- Explain the function's purpose clearly
- Mention key inputs and outputs
- Include examples if helpful
- Note any special requirements or limitations

**Update Descriptions:**
- Keep descriptions up to date as workflows evolve
- Reflect actual behavior, not intended behavior
- Mention breaking changes if you modify workflows

### Testing Your Workflows

**Test Before Registering:**
- Test workflows manually before registering them
- Verify inputs and outputs work as expected
- Test with various input scenarios

**Test After Registration:**
- Register the workflow
- Try calling it from the chat interface
- Verify the AI can use it correctly
- Check that results are returned properly

## Example Workflows

### Text Processing Workflow

**Purpose**: Extract keywords from text

**Setup:**
1. `OpenAITriggered` node with **Input** pin
2. Connect to text processing nodes
3. Extract keywords
4. Connect results to **Output** pin

**Function Name**: `extract_keywords`

**Description**: 
```
Extracts key terms and keywords from a text string. 
Takes a text input and returns a comma-separated list of extracted keywords.
Use this when you need to identify important terms in text.
```

### Data Retrieval Workflow

**Purpose**: Get data from an external API

**Setup:**
1. `OpenAITriggered` node with **Parameters** pin
2. Parse JSON parameters to get API query
3. Make HTTP request to external API
4. Process response
5. Return structured data via **Result** pin

**Function Name**: `get_weather_data`

**Description**:
```
Retrieves current weather data for a location. 
Takes a location parameter (city name or coordinates) and returns weather information as JSON.
Use this when you need current weather information.
```

### File Processing Workflow

**Purpose**: Process files and return results

**Setup:**
1. `OpenAITriggered` node with **Input** pin (file path)
2. Read file using file operation nodes
3. Process file contents
4. Return processed data via **Output** or **Result** pin

**Function Name**: `process_text_file`

**Description**:
```
Processes a text file and performs analysis. 
Takes a file path as input and returns processed results.
Use this when you need to analyze or process text files.
```

## Troubleshooting

### Workflow Not Appearing

**Issue**: Your workflow doesn't appear in the Workflow Functions list

**Solutions:**
- Verify the workflow contains an `OpenAITriggered` node
- Ensure the workflow is saved in your flows directory
- Click **Refresh Workflows** to rescan
- Check that the workflow file is valid JSON

### Workflow Not Being Called

**Issue**: The AI doesn't call your workflow even when it seems relevant

**Solutions:**
- Verify the workflow is enabled in settings
- Check that you clicked **Save All** after enabling
- Improve the function description to be more specific
- Make the function name more descriptive
- Test by explicitly asking the AI to use the function

### Incorrect Parameters

**Issue**: The AI calls your workflow with wrong or missing parameters

**Solutions:**
- Improve the function description to clearly specify required parameters
- Use descriptive input pin names
- Consider adding validation in your workflow
- Test with various parameter combinations

### Workflow Errors

**Issue**: Your workflow errors when called by the AI

**Solutions:**
- Test the workflow manually first
- Add error handling in your workflow
- Check workflow logs for error details
- Verify all required inputs are provided
- Handle missing or invalid inputs gracefully

## Advanced Topics

### Multiple Workflows

You can register multiple workflows as functions:

- Each workflow becomes a separate function
- The AI can choose which one to use based on context
- Functions are independent - one can call another if needed
- Organize workflows by domain or purpose

### Workflow Dependencies

Workflows can depend on other workflows:

- One workflow can trigger another
- Use this for complex multi-step processes
- Keep dependencies clear in descriptions
- Avoid circular dependencies

### Dynamic Function Registration

Workflows are registered when you save them:

- New workflows appear after clicking **Refresh Workflows**
- Disabled workflows are removed from AI availability
- Function configurations persist across restarts
- Update configurations when workflows change

## Related Documentation

- [OpenAI Chat](/docs/rune-interface/openai-chat) - Using the chat interface
- [OpenAI Settings](/docs/rune-interface/openai-settings) - Configuration guide
- [OpenAI Nodes](/docs/nodes/openai-set-api-key) - OpenAI nodes reference
- [Events Nodes](/docs/nodes/button-event) - Event nodes including OpenAITriggered

