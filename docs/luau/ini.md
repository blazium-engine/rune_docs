---
sidebar_position: 8
---

# INI System

The INI system provides functions for parsing INI (Initialization) configuration files and strings.

## Overview

INI files are a simple configuration file format with sections and key-value pairs. The INI system allows you to parse INI content and work with it as nested Lua tables.

## Available Functions

- **[parseIniString()](/docs/luau/functions/parse-ini-string)** - Parse an INI string into a Lua table
- **[parseIniFile()](/docs/luau/functions/parse-ini-file)** - Parse an INI file into a Lua table

## Common Use Cases

### Parsing INI String

```lua
local iniContent = [[
[database]
host=localhost
port=5432

[server]
name=MyServer
timeout=30
]]
local data = parseIniString(iniContent)
Logger.info("DB Host: " .. data.database.host)
Logger.info("Server Name: " .. data.server.name)
```

### Reading Configuration File

```lua
local config = parseIniFile("settings.ini")
if config then
    SessionState.set("dbHost", config.database.host)
    SessionState.set("dbPort", config.database.port)
end
```

### Working with Sections

```lua
local config = parseIniFile("app.ini")
for sectionName, sectionData in pairs(config) do
    Logger.info("Section: " .. sectionName)
    for key, value in pairs(sectionData) do
        Logger.info("  " .. key .. " = " .. value)
    end
end
```

### Error Handling

```lua
local data, error = parseIniString(invalidIni)
if not data then
    Logger.error("INI parse error: " .. error)
end
```

## Return Values

Both functions return:
- On success: A Lua table with sections as keys and key-value pairs as nested tables
- On error: `nil` and an error message string

## INI Format

INI files use this structure:
```
[SectionName]
key=value
another_key=another_value

[AnotherSection]
key=value
```

## Related Nodes

- [LoadIniString Node](/docs/nodes/load-ini-string)
- [LoadIniFile Node](/docs/nodes/load-ini-file)
- [StringToIni Node](/docs/nodes/string-to-ini)
- [IniToString Node](/docs/nodes/ini-to-string)
- [LoopIniCategories Node](/docs/nodes/loop-ini-categories)
- [LoopIniKeyValue Node](/docs/nodes/loop-ini-key-value)

