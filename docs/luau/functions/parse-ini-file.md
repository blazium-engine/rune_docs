---
sidebar_position: 20
---

# parseIniFile()

Parses an INI file into a Lua table.

## Function Signature

```lua
parseIniFile(path: string): table, string?
```

## Parameters

- **path** (string): Relative path to the INI file from the flow directory

## Return Value

- On success: Lua table with sections as keys and key-value pairs as nested tables
- On error: `nil` and error message string

## Description

`parseIniFile()` reads and parses an INI file from the flow directory, converting it to a nested Lua table structure.

## Example

```lua
-- Parse configuration file
local config, error = parseIniFile("settings.ini")
if config then
    SessionState.set("dbHost", config.database.host)
    SessionState.set("dbPort", config.database.port)
else
    Logger.error("Failed to parse INI: " .. error)
end

-- Iterate over sections
local config = parseIniFile("app.ini")
if config then
    for sectionName, sectionData in pairs(config) do
        Logger.info("Section: " .. sectionName)
        for key, value in pairs(sectionData) do
            Logger.info("  " .. key .. " = " .. value)
        end
    end
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadIniFile node:

```
[LoadIniFile Node]
Inputs:
  - Path: "settings.ini"
Outputs:
  - Data: (Lua table)
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Returns `nil` and error message if file doesn't exist or cannot be parsed
- Always check for errors before using the result
- File must be valid INI format

## Related

- [INI System](/docs/luau/ini)
- [parseIniString()](/docs/luau/functions/parse-ini-string)
- [LoadIniFile Node](/docs/nodes/load-ini-file)

