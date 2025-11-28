---
sidebar_position: 8
---

# FlowFile.exists()

Checks if a file exists in the flow directory.

## Function Signature

```lua
FlowFile.exists(path: string): boolean
```

## Parameters

- **path** (string): Relative path to the file from the flow directory

## Return Value

- **boolean**: `true` if the file exists, `false` otherwise

## Description

`FlowFile.exists()` checks whether a file exists in the flow directory. This is useful before attempting to read a file.

## Example

```lua
-- Check before reading
if FlowFile.exists("config.json") then
    local config = FlowFile.read("config.json")
    Logger.info("Config loaded")
else
    Logger.warn("Config file not found, using defaults")
end

-- Conditional file operations
if FlowFile.exists("data/processed.txt") then
    Logger.info("File already processed")
else
    -- Process and create the file
    FlowFile.write("data/processed.txt", "processed")
end
```

## Node Structure Example

When used in a node script, this function corresponds to the FileExists node:

```
[FileExists Node]
Inputs:
  - Path: "config.json"
Outputs:
  - Exists: "true" or "false"
Execution:
  - In → Out
```

## Notes

- Returns `false` for invalid paths (outside flow directory)
- Paths are relative to the flow directory
- Works for both files and directories

## Related

- [FlowFile System](/docs/luau/flow-file)
- [FlowFile.read()](/docs/luau/functions/flow-file-read)
- [FileExists Node](/docs/nodes/file-exists)

