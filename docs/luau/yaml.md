---
sidebar_position: 7
---

# YAML System

The YAML system provides functions for parsing YAML strings and files into Lua tables.

## Overview

YAML (YAML Ain't Markup Language) is a human-readable data serialization format. The YAML system allows you to parse YAML content and work with it as Lua tables.

## Available Functions

- **[parseYamlString()](/docs/luau/functions/parse-yaml-string)** - Parse a YAML string into a Lua table
- **[parseYamlFile()](/docs/luau/functions/parse-yaml-file)** - Parse a YAML file into a Lua table

## Common Use Cases

### Parsing YAML String

```lua
local yamlContent = [[
name: John Doe
age: 30
email: john@example.com
]]
local data = parseYamlString(yamlContent)
Logger.info("Name: " .. data.name)
```

### Reading YAML Configuration

```lua
local config = parseYamlFile("config.yaml")
if config then
    Logger.info("Server: " .. config.server)
    Logger.info("Port: " .. config.port)
end
```

### Working with Nested Data

```lua
local yamlContent = [[
database:
  host: localhost
  port: 5432
  credentials:
    username: admin
    password: secret
]]
local data = parseYamlString(yamlContent)
Logger.info("DB Host: " .. data.database.host)
```

### Error Handling

```lua
local data, error = parseYamlString(invalidYaml)
if not data then
    Logger.error("YAML parse error: " .. error)
end
```

## Return Values

Both functions return:
- On success: A Lua table representing the YAML data
- On error: `nil` and an error message string

## Related Nodes

- [LoadYamlString Node](/docs/nodes/load-yaml-string)
- [LoadYamlFile Node](/docs/nodes/load-yaml-file)
- [StringToYaml Node](/docs/nodes/string-to-yaml)
- [YamlToString Node](/docs/nodes/yaml-to-string)
- [LoopYamlArray Node](/docs/nodes/loop-yaml-array)

