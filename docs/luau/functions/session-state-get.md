---
sidebar_position: 2
---

# SessionState.get()

Retrieves a value from session state.

## Function Signature

```lua
SessionState.get(key: string): string
```

## Parameters

- **key** (string): The key to retrieve

## Return Value

- **string**: The value stored under the key, or empty string if not found

## Description

`SessionState.get()` retrieves a value from session state. If the key doesn't exist, it returns an empty string.

## Example

```lua
-- Set a value
SessionState.set("username", "john_doe")

-- Get the value
local username = SessionState.get("username")
Logger.info("Username: " .. username)

-- Get a non-existent key (returns empty string)
local missing = SessionState.get("nonexistent")
if missing == "" then
    Logger.warn("Key not found")
end

-- Check before getting
if SessionState.has("username") then
    local username = SessionState.get("username")
    outputs.result = username
end
```

## Node Structure Example

When used in a node script, this function corresponds to the SessionStateGet node:

```
[SessionStateGet Node]
Inputs:
  - Key: "username"
Outputs:
  - Value: "john_doe"
Execution:
  - In → Out
```

## Notes

- Returns empty string if key doesn't exist (use `SessionState.has()` to check)
- Values are returned as strings regardless of their stored type
- Keys are case-sensitive

## Related

- [SessionState System](/docs/luau/session-state)
- [SessionState.set()](/docs/luau/functions/session-state-set)
- [SessionState.has()](/docs/luau/functions/session-state-has)
- [SessionStateGet Node](/docs/nodes/session-state-get)

