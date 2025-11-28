---
sidebar_position: 24
---

# parseJsonFile()

Parses a JSON file into a Lua table.

## Function Signature

```lua
parseJsonFile(path: string): table, string?
```

## Parameters

- **path** (string): Relative path to the JSON file from the flow directory

## Return Value

- On success: Lua table representing the JSON data
- On error: `nil` and error message string

## Description

`parseJsonFile()` reads and parses a JSON file from the flow directory, converting it to a Lua table.

## Example

```lua
-- Parse configuration file
local config, error = parseJsonFile("config.json")
if config then
    SessionState.set("apiKey", config.apiKey)
    SessionState.set("endpoint", config.endpoint)
else
    Logger.error("Failed to parse JSON: " .. error)
end

-- Parse and iterate
local data = parseJsonFile("users.json")
if data then
    for key, value in pairs(data) do
        Logger.info(key .. ": " .. tostring(value))
    end
end

-- Parse nested structure
local config = parseJsonFile("app.json")
if config and config.database then
    SessionState.set("dbHost", config.database.host)
    SessionState.set("dbPort", tostring(config.database.port))
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadJsonFile node:

```
[LoadJsonFile Node]
Inputs:
  - Path: "config.json"
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Returns `nil` and error message if file doesn't exist or cannot be parsed
- Always check for errors before using the result
- File must be valid JSON format

## Related

- [JSON System](/docs/luau/json)
- [parseJsonString()](/docs/luau/functions/parse-json-string)
- [LoadJsonFile Node](/docs/nodes/load-json-file)

