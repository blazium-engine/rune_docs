---
sidebar_position: 3
---

# Conversion Functions

The Convert category provides type conversion operations that mirror the functionality of conversion nodes.

## Available Functions

### String Conversions

- **`Convert.stringToInteger(str)`** - Converts a string to an integer
- **`Convert.stringToFloat(str)`** - Converts a string to a float
- **`Convert.stringToBoolean(str)`** - Converts a string to a boolean

### Number Conversions

- **`Convert.integerToString(value)`** - Converts an integer to a string
- **`Convert.floatToString(value)`** - Converts a float to a string

### Type Conversions

- **`Convert.integerToFloat(value)`** - Converts an integer to a float
- **`Convert.floatToInteger(value)`** - Converts a float to an integer
- **`Convert.booleanToString(value)`** - Converts a boolean to a string

## Examples

### String to Number

```lua
local num = Convert.stringToInteger("42")    -- Returns 42
local float = Convert.stringToFloat("3.14")  -- Returns 3.14
local bool = Convert.stringToBoolean("true")  -- Returns true
```

### Number to String

```lua
local str = Convert.integerToString(42)       -- Returns "42"
local str = Convert.floatToString(3.14)       -- Returns "3.14"
```

### Type Conversions

```lua
local float = Convert.integerToFloat(42)      -- Returns 42.0
local int = Convert.floatToInteger(3.14)     -- Returns 3
local str = Convert.booleanToString(true)     -- Returns "true"
```

## Return Values

Functions return the converted value in the target type:
- String conversions return numbers or booleans
- Number conversions return strings
- Type conversions return the converted type

## Related Nodes

- [StringToInteger Node](/docs/nodes/string-to-integer)
- [StringToFloat Node](/docs/nodes/string-to-float)
- [StringToBoolean Node](/docs/nodes/string-to-boolean)
- [IntegerToString Node](/docs/nodes/integer-to-string)
- [FloatToString Node](/docs/nodes/float-to-string)
- [BooleanToString Node](/docs/nodes/boolean-to-string)
- [IntegerToFloat Node](/docs/nodes/integer-to-float)
- [FloatToInteger Node](/docs/nodes/float-to-integer)

