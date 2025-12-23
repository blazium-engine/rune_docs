---
sidebar_position: 2
---

# String Functions

The String category provides string manipulation operations that mirror the functionality of String nodes.

## Available Functions

- **`String.concat(a, b)`** - Concatenates two strings
- **`String.left(str, count)`** - Returns the leftmost count characters
- **`String.right(str, count)`** - Returns the rightmost count characters
- **`String.substring(str, start, length)`** - Returns a substring starting at start with specified length
- **`String.charAt(str, index)`** - Returns the character at the specified index
- **`String.compare(a, b, operator)`** - Compares two strings using the specified operator

## Examples

### Concatenation

```lua
local result = String.concat("Hello", " World")  -- Returns "Hello World"
```

### Extracting Substrings

```lua
local left = String.left("Hello World", 5)      -- Returns "Hello"
local right = String.right("Hello World", 5)    -- Returns "World"
local substring = String.substring("Hello World", 0, 5)  -- Returns "Hello"
```

### Character Access

```lua
local char = String.charAt("Hello", 0)  -- Returns "H"
local char = String.charAt("Hello", 4)  -- Returns "o"
```

### String Comparison

```lua
local isEqual = String.compare("Hello", "Hello", "==")     -- Returns true
local isLess = String.compare("Apple", "Banana", "<")     -- Returns true
local isGreater = String.compare("Zebra", "Apple", ">")   -- Returns true
```

## Parameters

- **`str`** - The input string
- **`count`** - Number of characters to extract
- **`start`** - Starting index (0-based)
- **`length`** - Length of substring to extract
- **`index`** - Character index (0-based)
- **`operator`** - Comparison operator: `"=="`, `"!="`, `"<"`, `">"`, `"<="`, `">="`

## Return Values

- `concat`, `left`, `right`, `substring`, `charAt` return strings
- `compare` returns a boolean

## Related Nodes

- [StringConcat Node](/docs/nodes/string-concat)
- [StringLeft Node](/docs/nodes/string-left)
- [StringRight Node](/docs/nodes/string-right)
- [StringSubstring Node](/docs/nodes/string-substring)
- [StringSpecificChar Node](/docs/nodes/string-specific-char)
- [StringCompare Node](/docs/nodes/string-compare)

