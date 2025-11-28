---
sidebar_position: 6
---

# FlowFile.read()

Reads the contents of a file in the flow directory.

## Function Signature

```lua
FlowFile.read(path: string): string
```

## Parameters

- **path** (string): Relative path to the file from the flow directory

## Return Value

- **string**: The file contents, or raises an error if the file cannot be read

## Description

`FlowFile.read()` reads a file from the flow directory. The path is relative to the flow directory and is sandboxed for security.

## Example

```lua
-- Read a text file
local content = FlowFile.read("data.txt")
Logger.info("File content: " .. content)

-- Read a JSON configuration file
local configJson = FlowFile.read("config.json")
local config = parseJsonString(configJson)
SessionState.set("apiKey", config.apiKey)

-- Read with error handling
local success, content = pcall(function()
    return FlowFile.read("important.txt")
end)
if success then
    outputs.data = content
else
    Logger.error("Failed to read file: " .. content)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadTextFile node:

```
[LoadTextFile Node]
Inputs:
  - Path: "data.txt"
Outputs:
  - Content: "file contents here"
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Absolute paths are rejected (unless sandboxing is disabled)
- Raises an error if the file doesn't exist or cannot be read
- Use `FlowFile.exists()` to check before reading

## Related

- [FlowFile System](/docs/luau/flow-file)
- [FlowFile.write()](/docs/luau/functions/flow-file-write)
- [FlowFile.exists()](/docs/luau/functions/flow-file-exists)
- [LoadTextFile Node](/docs/nodes/load-text-file)

