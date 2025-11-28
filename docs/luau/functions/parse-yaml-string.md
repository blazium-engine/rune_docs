---
sidebar_position: 17
---

# parseYamlString()

Parses a YAML string into a Lua table.

## Function Signature

```lua
parseYamlString(yamlString: string): table, string?
```

## Parameters

- **yamlString** (string): The YAML string to parse

## Return Value

- On success: Lua table representing the YAML data
- On error: `nil` and error message string

## Description

`parseYamlString()` parses a YAML string and converts it to a Lua table. YAML objects become tables, arrays become Lua arrays, and scalars become appropriate Lua types.

## Example

```lua
-- Parse simple YAML
local yamlContent = [[
name: John Doe
age: 30
email: john@example.com
]]
local data, error = parseYamlString(yamlContent)
if data then
    Logger.info("Name: " .. data.name)
    Logger.info("Age: " .. data.age)
else
    Logger.error("Parse error: " .. error)
end

-- Parse nested YAML
local yamlContent = [[
database:
  host: localhost
  port: 5432
  credentials:
    username: admin
    password: secret
]]
local config = parseYamlString(yamlContent)
if config then
    SessionState.set("dbHost", config.database.host)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadYamlString node:

```
[LoadYamlString Node]
Inputs:
  - YAML: "name: John\nage: 30"
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Returns `nil` and error message on parse failure
- Always check for errors before using the result
- YAML arrays become Lua arrays (indexed from 1)
- YAML objects become Lua tables with string keys

## Related

- [YAML System](/docs/luau/yaml)
- [parseYamlFile()](/docs/luau/functions/parse-yaml-file)
- [LoadYamlString Node](/docs/nodes/load-yaml-string)

