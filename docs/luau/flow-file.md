---
sidebar_position: 2
---

# FlowFile System

The FlowFile system provides file operations within the flow's directory. All file operations are sandboxed to the flow directory for security.

## Overview

FlowFile functions allow you to read, write, check existence, and list files within your flow's directory. This is useful for storing configuration files, data files, or any other files your flow needs.

## Key Concepts

- **Sandboxed**: All file operations are restricted to the flow directory
- **Relative Paths**: Paths are relative to the flow directory
- **Security**: Cannot access files outside the flow directory (unless sandboxing is disabled in config)

## Available Functions

- **[FlowFile.read()](/docs/luau/functions/flow-file-read)** - Read the contents of a file
- **[FlowFile.write()](/docs/luau/functions/flow-file-write)** - Write content to a file
- **[FlowFile.exists()](/docs/luau/functions/flow-file-exists)** - Check if a file exists
- **[FlowFile.list()](/docs/luau/functions/flow-file-list)** - List files in a directory

## Common Use Cases

### Reading Configuration Files

```lua
local config = FlowFile.read("config.json")
local configData = parseJsonString(config)
```

### Saving Results

```lua
local result = "Processing complete"
FlowFile.write("results.txt", result)
```

### Checking for Required Files

```lua
if FlowFile.exists("required-data.json") then
    -- Process the file
else
    Logger.error("Required file not found")
end
```

### Listing Directory Contents

```lua
local files = FlowFile.list("data")
for i, filename in ipairs(files) do
    Logger.info("Found file: " .. filename)
end
```

## Security Notes

- File operations are sandboxed to the flow directory by default
- Absolute paths are rejected unless directory sandboxing is disabled
- Parent directory traversal (`../`) is prevented

## Related Nodes

- [LoadTextFile Node](/docs/nodes/load-text-file)
- [SaveToTextFile Node](/docs/nodes/save-to-text-file)
- [LoadJsonFile Node](/docs/nodes/load-json-file)
- [SaveToJsonFile Node](/docs/nodes/save-to-json-file)
- [FileExists Node](/docs/nodes/file-exists)

