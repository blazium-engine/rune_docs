---
sidebar_position: 9
---

# FlowFile.list()

Lists files in a directory within the flow directory.

## Function Signature

```lua
FlowFile.list(path?: string): table
```

## Parameters

- **path** (string, optional): Relative path to the directory. If omitted, lists the flow directory root.

## Return Value

- **table**: Array of file and directory names

## Description

`FlowFile.list()` returns a list of files and directories in the specified directory. If no path is provided, it lists the flow directory root.

## Example

```lua
-- List files in flow root
local files = FlowFile.list()
for i, filename in ipairs(files) do
    Logger.info("File: " .. filename)
end

-- List files in a subdirectory
local dataFiles = FlowFile.list("data")
for i, filename in ipairs(dataFiles) do
    Logger.info("Data file: " .. filename)
end

-- Process all JSON files
local files = FlowFile.list("config")
for i, filename in ipairs(files) do
    if filename:match("%.json$") then
        local content = FlowFile.read("config/" .. filename)
        Logger.info("Loaded: " .. filename)
    end
end
```

## Node Structure Example

This function is typically used in node scripts for directory operations:

```lua
-- In a node script
local files = FlowFile.list(inputs.directory or "")
outputs.fileCount = tostring(#files)
outputs.files = table.concat(files, ", ")
```

## Notes

- Returns an array of strings (file/directory names)
- Paths are relative to the flow directory
- Returns empty array if directory doesn't exist or is invalid
- Includes both files and directories in the result

## Related

- [FlowFile System](/docs/luau/flow-file)
- [FlowFile.exists()](/docs/luau/functions/flow-file-exists)

