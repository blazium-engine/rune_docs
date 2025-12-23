---
sidebar_position: 5
---

# File Operations

The File category provides file system operations that mirror the functionality of File nodes.

## Available Functions

- **`File.exists(path, useCache)`** - Checks if a file or directory exists
- **`File.getFilesInFolder(folder, useCache)`** - Gets list of files in a folder
- **`File.getFoldersInFolder(folder, useCache)`** - Gets list of folders in a folder
- **`File.getChecksum(path, algorithm, useCache)`** - Calculates file checksum
- **`File.saveText(path, content, useCache)`** - Saves text content to a file
- **`File.saveJson(path, data, useCache)`** - Saves data as JSON to a file
- **`File.loadText(path, useCache)`** - Loads text content from a file
- **`File.loadJson(path, useCache)`** - Loads JSON data from a file

## Examples

### Checking File Existence

```lua
if File.exists("config.json") then
    Logger.info("Config file exists")
end
```

### Listing Files and Folders

```lua
local files = File.getFilesInFolder("./data")
for i, file in ipairs(files) do
    Logger.info("File: " .. file)
end

local folders = File.getFoldersInFolder("./data")
for i, folder in ipairs(folders) do
    Logger.info("Folder: " .. folder)
end
```

### File Checksum

```lua
local checksum = File.getChecksum("important.txt", "SHA256")
Logger.info("Checksum: " .. checksum)
```

### Reading and Writing Files

```lua
-- Save text file
File.saveText("output.txt", "Hello World")

-- Load text file
local content = File.loadText("output.txt")
Logger.info("Content: " .. content)

-- Save JSON file
local data = {name = "John", age = 30}
File.saveJson("data.json", data)

-- Load JSON file
local loaded = File.loadJson("data.json")
Logger.info("Name: " .. loaded.name)
```

## Parameters

- **`path`** - File or directory path (relative to flow directory)
- **`folder`** - Folder path to list
- **`content`** - Text content to save
- **`data`** - Data table to save as JSON
- **`algorithm`** - Checksum algorithm (e.g., "SHA256", "MD5")
- **`useCache`** - Boolean, if true uses cache directory instead of flow directory

## Return Values

- `exists` returns a boolean
- `getFilesInFolder`, `getFoldersInFolder` return arrays of strings
- `getChecksum` returns a string (hexadecimal)
- `loadText` returns a string
- `loadJson` returns a table
- `saveText`, `saveJson` return boolean indicating success

## Related Nodes

- [FileExists Node](/docs/nodes/file-exists)
- [GetFilesInFolder Node](/docs/nodes/get-files-in-folder)
- [GetFoldersInFolder Node](/docs/nodes/get-folders-in-folder)
- [GetFileChecksum Node](/docs/nodes/get-file-checksum)
- [SaveToTextFile Node](/docs/nodes/save-to-text-file)
- [SaveToJsonFile Node](/docs/nodes/save-to-json-file)
- [LoadTextFile Node](/docs/nodes/load-text-file)
- [LoadJsonFile Node](/docs/nodes/load-json-file)

## Note

These functions work alongside the existing `FlowFile` API. Both are available for backward compatibility.

