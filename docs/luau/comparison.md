---
sidebar_position: 9
---

# Comparison Functions

The Compare category provides comparison operations that mirror the functionality of comparison nodes.

## Available Functions

- **`Compare.string(a, b, operator)`** - Compares two strings
- **`Compare.number(a, b, operator)`** - Compares two numbers
- **`Compare.boolean(a, b, operator)`** - Compares two booleans
- **`Compare.array(a, b, operator)`** - Compares two arrays
- **`Compare.object(a, b, operator)`** - Compares two objects
- **`Compare.datetimeUnix(a, b, operator)`** - Compares Unix timestamps
- **`Compare.datetimeISO(a, b, operator)`** - Compares ISO 8601 datetime strings

## Examples

### String Comparison

```lua
local isEqual = Compare.string("Hello", "Hello", "==")     -- Returns true
local isLess = Compare.string("Apple", "Banana", "<")       -- Returns true
```

### Number Comparison

```lua
local isGreater = Compare.number(10, 5, ">")               -- Returns true
local isEqual = Compare.number(5.0, 5, "==")              -- Returns true
```

### Boolean Comparison

```lua
local isEqual = Compare.boolean(true, true, "==")           -- Returns true
local isNotEqual = Compare.boolean(true, false, "!=")       -- Returns true
```

### Array Comparison

```lua
local arr1 = {1, 2, 3}
local arr2 = {1, 2, 3}
local isEqual = Compare.array(arr1, arr2, "==")            -- Returns true
```

### Object Comparison

```lua
local obj1 = {name = "John", age = 30}
local obj2 = {name = "John", age = 30}
local isEqual = Compare.object(obj1, obj2, "==")           -- Returns true
```

### DateTime Comparison

```lua
-- Unix timestamp comparison
local isNewer = Compare.datetimeUnix(1609459200, 1577836800, ">")  -- Returns true

-- ISO 8601 comparison
local isNewer = Compare.datetimeISO("2021-01-01T00:00:00Z", "2020-01-01T00:00:00Z", ">")  -- Returns true
```

## Parameters

- **`a`** - First value to compare
- **`b`** - Second value to compare
- **`operator`** - Comparison operator:
  - `"=="` - Equal
  - `"!="` - Not equal
  - `"<"` - Less than
  - `">"` - Greater than
  - `"<="` - Less than or equal
  - `">="` - Greater than or equal

## Return Values

All comparison functions return a boolean value indicating the result of the comparison.

## Related Nodes

- [StringCompare Node](/docs/nodes/string-compare)
- [NumberCompare Node](/docs/nodes/number-compare)
- [BooleanCompare Node](/docs/nodes/boolean-compare)
- [ArrayCompare Node](/docs/nodes/array-compare)
- [ObjectCompare Node](/docs/nodes/object-compare)
- [DateTimeCompareUnix Node](/docs/nodes/date-time-compare-unix)
- [DateTimeCompareISO Node](/docs/nodes/date-time-compare-iso)

