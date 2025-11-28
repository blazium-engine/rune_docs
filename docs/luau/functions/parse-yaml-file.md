---
sidebar_position: 18
---

# parseYamlFile()

Parses a YAML file into a Lua table.

## Function Signature

```lua
parseYamlFile(path: string): table, string?
```

## Parameters

- **path** (string): Relative path to the YAML file from the flow directory

## Return Value

- On success: Lua table representing the YAML data
- On error: `nil` and error message string

## Description

`parseYamlFile()` reads and parses a YAML file from the flow directory, converting it to a Lua table.

## Example

```lua
-- Parse configuration file
local config, error = parseYamlFile("config.yaml")
if config then
    SessionState.set("apiKey", config.apiKey)
    SessionState.set("endpoint", config.endpoint)
else
    Logger.error("Failed to parse YAML: " .. error)
end

-- Parse with error handling
local data = parseYamlFile("data.yaml")
if data then
    for key, value in pairs(data) do
        Logger.info(key .. ": " .. tostring(value))
    end
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadYamlFile node:

```
[LoadYamlFile Node]
Inputs:
  - Path: "config.yaml"
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Returns `nil` and error message if file doesn't exist or cannot be parsed
- Always check for errors before using the result
- File must be valid YAML format

## Related

- [YAML System](/docs/luau/yaml)
- [parseYamlString()](/docs/luau/functions/parse-yaml-string)
- [LoadYamlFile Node](/docs/nodes/load-yaml-file)

