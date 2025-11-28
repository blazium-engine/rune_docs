---
sidebar_position: 1
---

# SessionState.set()

Stores a value in session state with automatic type detection.

## Function Signature

```lua
SessionState.set(key: string, value: string)
```

## Parameters

- **key** (string): The key to store the value under
- **value** (string): The value to store (will be automatically converted to appropriate type)

## Return Value

None

## Description

`SessionState.set()` stores a value in session state. The function automatically detects the type of the value:
- JSON objects/arrays are stored as JSON
- Boolean strings ("true"/"false") are stored as booleans
- Numeric strings are stored as numbers
- Everything else is stored as a string

## Example

```lua
-- Store a string
SessionState.set("username", "john_doe")

-- Store a number (will be auto-detected)
SessionState.set("count", "42")

-- Store a boolean (will be auto-detected)
SessionState.set("isActive", "true")

-- Store JSON (will be auto-detected)
SessionState.set("userData", '{"name": "John", "age": 30}')

-- Later, retrieve the value
local username = SessionState.get("username")
Logger.info("Username: " .. username)
```

## Node Structure Example

When used in a node script, this function corresponds to the SessionStateSet node:

```
[SessionStateSet Node]
Inputs:
  - Key: "username"
  - Value: "john_doe"
Execution:
  - In → Out
```

## Notes

- Keys are case-sensitive
- Setting a value overwrites any existing value for that key
- Execution flow types cannot be set as values
- Empty keys will cause an error

## Related

- [SessionState System](/docs/luau/session-state)
- [SessionState.get()](/docs/luau/functions/session-state-get)
- [SessionStateSet Node](/docs/nodes/session-state-set)

