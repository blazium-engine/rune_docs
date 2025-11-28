---
sidebar_position: 21
---

# parseCsvString()

Parses a CSV string into a Lua table.

## Function Signature

```lua
parseCsvString(csvString: string): table, string?
```

## Parameters

- **csvString** (string): The CSV string to parse

## Return Value

- On success: Table with `rows` (array of row arrays) and `headers` (array of header names)
- On error: `nil` and error message string

## Description

`parseCsvString()` parses a CSV string and converts it to a structured Lua table with rows and headers.

## Example

```lua
-- Parse CSV string
local csvContent = [[
name,age,email
John,30,john@example.com
Jane,25,jane@example.com
]]
local data, error = parseCsvString(csvContent)
if data then
    -- Access headers
    Logger.info("Headers: " .. table.concat(data.headers, ", "))
    
    -- Process rows
    for i, row in ipairs(data.rows) do
        Logger.info("Row " .. i .. ": " .. row[1] .. ", " .. row[2])
    end
else
    Logger.error("Parse error: " .. error)
end

-- Access specific cells
local data = parseCsvString(csvContent)
if data and data.rows[1] then
    local name = data.rows[1][1]
    local age = data.rows[1][2]
    SessionState.set("firstName", name)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadCsvString node:

```
[LoadCsvString Node]
Inputs:
  - CSV: "name,age\nJohn,30"
Outputs:
  - Data: (Lua table with rows and headers)
Execution:
  - In → Out
```

## Notes

- Returns `nil` and error message on parse failure
- `rows` is an array where each row is an array of cell values
- `headers` is an array of column names (if available)
- Rows are indexed from 1 (Lua convention)

## Related

- [CSV System](/docs/luau/csv)
- [parseCsvFile()](/docs/luau/functions/parse-csv-file)
- [LoadCsvString Node](/docs/nodes/load-csv-string)

