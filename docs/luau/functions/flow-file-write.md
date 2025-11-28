---
sidebar_position: 7
---

# FlowFile.write()

Writes content to a file in the flow directory.

## Function Signature

```lua
FlowFile.write(path: string, content: string): boolean
```

## Parameters

- **path** (string): Relative path to the file from the flow directory
- **content** (string): The content to write to the file

## Return Value

- **boolean**: `true` if successful, raises an error on failure

## Description

`FlowFile.write()` writes content to a file in the flow directory. The file is created if it doesn't exist, or overwritten if it does. Parent directories are created automatically if needed.

## Example

```lua
-- Write a simple text file
FlowFile.write("output.txt", "Hello, World!")
Logger.info("File written successfully")

-- Write JSON data
local data = {
    name = "John",
    age = 30
}
local jsonData = jsonToString(data) -- hypothetical function
FlowFile.write("user.json", jsonData)

-- Write to a subdirectory
FlowFile.write("logs/execution.log", "Flow executed at " .. os.date())

-- Write with error handling
local success, result = pcall(function()
    return FlowFile.write("important.txt", content)
end)
if not success then
    Logger.error("Failed to write file: " .. result)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the SaveToTextFile node:

```
[SaveToTextFile Node]
Inputs:
  - Path: "output.txt"
  - Content: "Hello, World!"
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Parent directories are created automatically
- Existing files are overwritten
- Absolute paths are rejected (unless sandboxing is disabled)

## Related

- [FlowFile System](/docs/luau/flow-file)
- [FlowFile.read()](/docs/luau/functions/flow-file-read)
- [SaveToTextFile Node](/docs/nodes/save-to-text-file)

