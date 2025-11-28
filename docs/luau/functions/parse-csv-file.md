---
sidebar_position: 22
---

# parseCsvFile()

Parses a CSV file into a Lua table.

## Function Signature

```lua
parseCsvFile(path: string): table, string?
```

## Parameters

- **path** (string): Relative path to the CSV file from the flow directory

## Return Value

- On success: Table with `rows` (array of row arrays) and `headers` (array of header names)
- On error: `nil` and error message string

## Description

`parseCsvFile()` reads and parses a CSV file from the flow directory, converting it to a structured Lua table.

## Example

```lua
-- Parse CSV file
local data, error = parseCsvFile("users.csv")
if data then
    Logger.info("Found " .. #data.rows .. " rows")
    
    -- Process each row
    for i, row in ipairs(data.rows) do
        local name = row[1]
        local age = tonumber(row[2])
        Logger.info("User " .. i .. ": " .. name .. " (" .. age .. ")")
    end
else
    Logger.error("Failed to parse CSV: " .. error)
end

-- Work with headers
local data = parseCsvFile("sales.csv")
if data and data.headers then
    for i, header in ipairs(data.headers) do
        Logger.info("Column " .. i .. ": " .. header)
    end
end
```

## Node Structure Example

When used in a node script, this function corresponds to the LoadCsvFile node:

```
[LoadCsvFile Node]
Inputs:
  - Path: "users.csv"
Outputs:
  - Data: (Lua table with rows and headers)
Execution:
  - In → Out
```

## Notes

- Paths are relative to the flow directory
- Returns `nil` and error message if file doesn't exist or cannot be parsed
- Always check for errors before using the result
- File must be valid CSV format

## Related

- [CSV System](/docs/luau/csv)
- [parseCsvString()](/docs/luau/functions/parse-csv-string)
- [LoadCsvFile Node](/docs/nodes/load-csv-file)

