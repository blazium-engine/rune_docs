---
sidebar_position: 23
---

# parseJsonString()

Parses a JSON string into a Lua table.

## Function Signature

```lua
parseJsonString(jsonString: string): table, string?
```

## Parameters

- **jsonString** (string): The JSON string to parse

## Return Value

- On success: Lua table representing the JSON data
- On error: `nil` and error message string

## Description

`parseJsonString()` parses a JSON string and converts it to a Lua table. JSON objects become tables, arrays become Lua arrays, and values are converted to appropriate Lua types.

## Example

```lua
-- Parse simple JSON
local jsonContent = '{"name": "John", "age": 30, "city": "New York"}'
local data, error = parseJsonString(jsonContent)
if data then
    Logger.info("Name: " .. data.name)
    Logger.info("Age: " .. data.age)
else
    Logger.error("Parse error: " .. error)
end

-- Parse JSON array
local jsonContent = '{"users": ["Alice", "Bob", "Charlie"]}'
local data = parseJsonString(jsonContent)
if data then
    for i, user in ipairs(data.users) do
        Logger.info("User " .. i .. ": " .. user)
    end
end

-- Parse nested JSON
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
if data then
    SessionState.set("userStreet", data.user.address.street)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadJsonString node:

```
[LoadJsonString Node]
Inputs:
  - JSON: '{"name": "John"}'
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Returns `nil` and error message on parse failure
- Always check for errors before using the result
- JSON arrays become Lua arrays (indexed from 1)
- JSON objects become Lua tables with string keys
- JSON `null` becomes `nil`

## Related

- [JSON System](/docs/luau/json)
- [parseJsonFile()](/docs/luau/functions/parse-json-file)
- [LoadJsonString Node](/docs/nodes/load-json-string)

