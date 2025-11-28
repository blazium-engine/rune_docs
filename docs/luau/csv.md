---
sidebar_position: 9
---

# CSV System

The CSV system provides functions for parsing CSV (Comma-Separated Values) strings and files.

## Overview

CSV files are a common format for tabular data. The CSV system allows you to parse CSV content and work with it as structured Lua tables with rows and headers.

## Available Functions

- **[parseCsvString()](/docs/luau/functions/parse-csv-string)** - Parse a CSV string into a Lua table
- **[parseCsvFile()](/docs/luau/functions/parse-csv-file)** - Parse a CSV file into a Lua table

## Common Use Cases

### Parsing CSV String

```lua
local csvContent = [[
name,age,email
John,30,john@example.com
Jane,25,jane@example.com
]]
local data = parseCsvString(csvContent)
for i, row in ipairs(data.rows) do
    Logger.info("Row " .. i .. ": " .. row[1] .. ", " .. row[2])
end
```

### Reading CSV File

```lua
local data = parseCsvFile("users.csv")
if data then
    Logger.info("Headers: " .. table.concat(data.headers, ", "))
    for i, row in ipairs(data.rows) do
        Logger.info("User " .. i .. ": " .. row[1])
    end
end
```

### Working with Headers

```lua
local data = parseCsvFile("data.csv")
if data.headers then
    for i, header in ipairs(data.headers) do
        Logger.info("Column " .. i .. ": " .. header)
    end
end
```

### Processing Rows

```lua
local data = parseCsvFile("sales.csv")
for i, row in ipairs(data.rows) do
    local name = row[1]
    local amount = tonumber(row[2])
    SessionState.set("lastSale", name .. ": " .. amount)
end
```

## Return Values

Both functions return a table with:
- `rows`: Array of rows, where each row is an array of cell values
- `headers`: Array of column header names (if available)

On error, returns `nil` and an error message string.

## CSV Format

CSV files use commas to separate values:
```
header1,header2,header3
value1,value2,value3
value4,value5,value6
```

## Related Nodes

- [LoadCsvString Node](/docs/nodes/load-csv-string)
- [LoadCsvFile Node](/docs/nodes/load-csv-file)
- [StringToCsv Node](/docs/nodes/string-to-csv)
- [CsvToString Node](/docs/nodes/csv-to-string)
- [LoopCsvEntries Node](/docs/nodes/loop-csv-entries)

