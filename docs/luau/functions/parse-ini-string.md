---
sidebar_position: 19
---

# parseIniString()

Parses an INI string into a Lua table.

## Function Signature

```lua
parseIniString(iniString: string): table, string?
```

## Parameters

- **iniString** (string): The INI string to parse

## Return Value

- On success: Lua table with sections as keys and key-value pairs as nested tables
- On error: `nil` and error message string

## Description

`parseIniString()` parses an INI-formatted string and converts it to a nested Lua table structure where sections are top-level keys.

## Example

```lua
-- Parse INI string
local iniContent = [[
[database]
host=localhost
port=5432

[server]
name=MyServer
timeout=30
]]
local data, error = parseIniString(iniContent)
if data then
    Logger.info("DB Host: " .. data.database.host)
    Logger.info("Server Name: " .. data.server.name)
else
    Logger.error("Parse error: " .. error)
end

-- Access nested values
local config = parseIniString(iniContent)
if config and config.database then
    SessionState.set("dbHost", config.database.host)
    SessionState.set("dbPort", config.database.port)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadIniString node:

```
[LoadIniString Node]
Inputs:
  - INI: "[section]\nkey=value"
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Returns `nil` and error message on parse failure
- Sections become top-level table keys
- Key-value pairs within sections become nested tables
- Empty sections are still included in the result

## Related

- [INI System](/docs/luau/ini)
- [parseIniFile()](/docs/luau/functions/parse-ini-file)
- [LoadIniString Node](/docs/nodes/load-ini-string)

