---
sidebar_position: 4
---

# Custom Nodes

Custom nodes allow you to extend RUNE Interface with your own functionality. You can create reusable nodes that perform specific tasks using Luau scripts. This guide explains how to create custom nodes using YAML definitions and Luau scripts.

> **Looking for native C/C++ plugins?**  
> This page covers Luau-based custom nodes. For compiled plugins that register nodes via the C API, see [Creating Native Plugins with the RUNE Plugin SDK](/docs/rune-interface/plugins).

## Overview

A custom node consists of two files:

1. **YAML Definition File** (`.yaml` or `.yml`) - Defines the node's structure, inputs, outputs, and metadata
2. **Luau Script File** (`.luau`) - Contains the execution logic that runs when the node executes

The YAML file tells RUNE Interface what the node looks like and how it connects to other nodes. The Luau script contains the actual code that runs when the node executes.

## File Locations

Custom nodes can be placed in two locations:

### Global Nodes

Place nodes in the **global nodes directory** to make them available to all flows:

```
flows/
  nodes/
    MyNode.yaml
    lua/
      MyNode.luau
```

### Per-Flow Nodes

Place nodes in a **flow-specific directory** to make them available only to that flow:

```
flows/
  my-flow/
    nodes/
      MyNode.yaml
      lua/
        MyNode.luau
```

**Note**: The script path in the YAML file is relative to the `nodes/` directory. If your script is in `nodes/lua/MyNode.luau`, the YAML should reference it as `lua/MyNode.luau`.

## YAML Definition File

The YAML file defines your node's structure. Here's the complete structure:

### Required Fields

- **`type`** (string): Unique identifier for your node type. Must be unique across all nodes.
- **`name`** (string): Display name shown in the node menu and on the canvas.
- **`category`** (string): Category for organizing nodes in the menu (e.g., "Output", "Flow Control", "Utilities").
- **`script`** (string): Path to the Luau script file, relative to the `nodes/` directory.

### Optional Fields

- **`inputs`** (array): Data input pins that accept values from other nodes.
- **`outputs`** (array): Data output pins that provide values to other nodes.
- **`executionInputs`** (array): Execution input pins that control flow execution.
- **`executionOutputs`** (array): Execution output pins that continue flow execution.
- **`color`** (array): RGB color values `[R, G, B]` for node visualization (0-255).

### Input/Output Pin Structure

Each pin in the `inputs`, `outputs`, `executionInputs`, or `executionOutputs` arrays has:

- **`name`** (string): Pin identifier (used in scripts and connections).
- **`type`** (string): Data type (e.g., `"string"`, `"number"`, `"boolean"`) or `"execution"` for execution pins.

### Example YAML File

Here's the complete YAML file for the CustomLogger node:

```yaml
type: CustomLogger
name: Custom Logger
category: Output

inputs:
  - name: Message
    type: string
  - name: Level
    type: string

executionInputs:
  - name: In
    type: execution

executionOutputs:
  - name: Out
    type: execution

script: lua/CustomLogger.luau
color: [255, 200, 100]
```

## Luau Script File

The Luau script contains the execution logic for your node. When the node executes, RUNE Interface:

1. Loads the script file
2. Creates an `inputs` table with all input values
3. Creates an empty `outputs` table
4. Executes your script
5. Reads values from the `outputs` table

### Accessing Inputs

All input pins are available in the `inputs` table by their pin name:

```lua
local message = inputs.Message or ""
local level = inputs.Level or "info"
```

### Setting Outputs

Write output values to the `outputs` table:

```lua
outputs.Result = "some value"
outputs.Status = "success"
```

### Full Luau API Access

Your script has access to the full Luau API, including:

- Session state functions (`session-state-get`, `session-state-set`, etc.)
- Logger functions (`logger-info`, `logger-warn`, `logger-error`, `logger-debug`)
- File operations (`flow-file-read`, `flow-file-write`, etc.)
- HTTP requests (`http-request`)
- And more...

See the [Luau API documentation](/docs/luau/session-state) for complete details.

### Example Luau Script

Here's the complete Luau script for the CustomLogger node:

```lua
-- CustomLogger node: Logs a message with a custom log level
-- Inputs: Message (string), Level (string: "info", "warn", "error", "debug")
-- This demonstrates how custom nodes can extend functionality

local message = inputs.Message or ""
local level = inputs.Level or "info"

-- In a real implementation, this would call the logging system
-- For now, this is a placeholder that shows the concept
print("[" .. string.upper(level) .. "] " .. message)
```

## Complete Example: CustomLogger

Let's walk through the CustomLogger example to see how everything works together.

### Step 1: Create the YAML Definition

Create `flows/nodes/CustomLogger.yaml`:

```yaml
type: CustomLogger
name: Custom Logger
category: Output

inputs:
  - name: Message
    type: string
  - name: Level
    type: string

executionInputs:
  - name: In
    type: execution

executionOutputs:
  - name: Out
    type: execution

script: lua/CustomLogger.luau
color: [255, 200, 100]
```

### Step 2: Create the Luau Script

Create `flows/nodes/lua/CustomLogger.luau`:

```lua
-- CustomLogger node: Logs a message with a custom log level
local message = inputs.Message or ""
local level = inputs.Level or "info"

print("[" .. string.upper(level) .. "] " .. message)
```

### Step 3: Use the Node

1. Restart RUNE Interface (or reload custom nodes)
2. The "Custom Logger" node appears in the "Output" category
3. Drag it onto your canvas
4. Connect it to other nodes
5. Set the `Message` and `Level` inputs
6. When executed, it prints the formatted log message

## Execution Flow

When a custom node executes:

1. **Input Collection**: RUNE Interface collects values from connected nodes or node properties and populates the `inputs` table
2. **Script Execution**: Your Luau script runs with access to the `inputs` table
3. **Output Extraction**: Values written to the `outputs` table are stored and made available to connected nodes
4. **Execution Continuation**: Execution continues through `executionOutputs` pins

## Best Practices

### Naming Conventions

- **Type**: Use PascalCase (e.g., `CustomLogger`, `DataProcessor`)
- **Name**: Use clear, descriptive names (e.g., "Custom Logger", "Data Processor")
- **Category**: Use existing categories when possible, or create new ones for related nodes
- **Pin Names**: Use PascalCase for pin names (e.g., `Message`, `Result`, `Status`)

### File Organization

- Keep related nodes together in the same category
- Use descriptive file names that match the node type
- Place scripts in the `lua/` subdirectory for organization

### Script Development

- Always provide default values for inputs: `local value = inputs.Value or ""`
- Validate input types and ranges when necessary
- Use the logger functions for debugging: `logger-info("Debug message")`
- Handle errors gracefully

### Testing

1. Create a simple test flow with your custom node
2. Test with various input values
3. Verify outputs are set correctly
4. Check execution flow through execution pins
5. Test edge cases (empty strings, null values, etc.)

## Common Pitfalls

### Script Path Issues

**Problem**: Script file not found

**Solution**: Ensure the script path in YAML is relative to the `nodes/` directory. If your file is at `flows/nodes/lua/MyNode.luau`, use `lua/MyNode.luau` in the YAML.

### Input/Output Mismatch

**Problem**: Inputs or outputs not working

**Solution**: Ensure pin names in the YAML match the names used in your Luau script. Pin names are case-sensitive.

### Missing Default Values

**Problem**: Script errors when inputs are not connected

**Solution**: Always provide default values: `local value = inputs.Value or ""`

### Execution Flow Issues

**Problem**: Node doesn't continue execution

**Solution**: Ensure you have `executionOutputs` defined in your YAML if the node should continue the flow.

## Debugging Tips

1. **Use Logger Functions**: Add logging to see what's happening:
   ```lua
   logger-info("Input Message: " .. tostring(inputs.Message))
   ```

2. **Check Session State**: Outputs are stored in session state with keys like `node_{id}_{pinName}`

3. **Test Incrementally**: Start with a simple script that just sets outputs, then add logic gradually

4. **Verify File Locations**: Ensure both YAML and Luau files are in the correct directories

5. **Check Node Registry**: Look at the application logs to see if your node was loaded successfully

## Next Steps

- Explore the [Luau API documentation](/docs/luau/session-state) to see what functions are available
- Review existing [node documentation](/docs/nodes/branch) to understand node patterns
- Check out other custom node examples in your flows directory


