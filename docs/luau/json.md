---
sidebar_position: 10
---

# JSON System

The JSON system provides functions for parsing JSON strings and files into Lua tables.

## Overview

JSON (JavaScript Object Notation) is a widely-used data format. The JSON system allows you to parse JSON content and work with it as Lua tables, making it easy to work with APIs and configuration files.

## Available Functions

- **[parseJsonString()](/docs/luau/functions/parse-json-string)** - Parse a JSON string into a Lua table
- **[parseJsonFile()](/docs/luau/functions/parse-json-file)** - Parse a JSON file into a Lua table

## Common Use Cases

### Parsing JSON String

```lua
local jsonContent = '{"name": "John", "age": 30, "city": "New York"}'
local data = parseJsonString(jsonContent)
Logger.info("Name: " .. data.name)
Logger.info("Age: " .. data.age)
```

### Reading JSON File

```lua
local config = parseJsonFile("config.json")
if config then
    SessionState.set("apiKey", config.apiKey)
    SessionState.set("endpoint", config.endpoint)
end
```

### Working with Arrays

```lua
local jsonContent = '{"users": ["Alice", "Bob", "Charlie"]}'
local data = parseJsonString(jsonContent)
for i, user in ipairs(data.users) do
    Logger.info("User " .. i .. ": " .. user)
end
```

### Nested Objects

```lua
local jsonContent = [[
{
  "user": {
    "name": "John",
    "address": {
      "street": "123 Main St",
      "city": "New York"
    }
  }
}
]]
local data = parseJsonString(jsonContent)
Logger.info("Street: " .. data.user.address.street)
```

### Error Handling

```lua
local data, error = parseJsonString(invalidJson)
if not data then
    Logger.error("JSON parse error: " .. error)
end
```

## Return Values

Both functions return:
- On success: A Lua table representing the JSON data
- On error: `nil` and an error message string

## Related Nodes

- [LoadJsonString Node](/docs/nodes/load-json-string)
- [LoadJsonFile Node](/docs/nodes/load-json-file)
- [TextToJson Node](/docs/nodes/text-to-json)
- [JsonToString Node](/docs/nodes/json-to-string)
- [IsTextValidJson Node](/docs/nodes/is-text-valid-json)
- [LoopJsonArray Node](/docs/nodes/loop-json-array)
- [LoopJsonObject Node](/docs/nodes/loop-json-object)

