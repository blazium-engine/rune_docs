---
sidebar_position: 4
---

# SessionState.has()

Checks if a key exists in session state.

## Function Signature

```lua
SessionState.has(key: string): boolean
```

## Parameters

- **key** (string): The key to check

## Return Value

- **boolean**: `true` if the key exists, `false` otherwise

## Description

`SessionState.has()` checks whether a key exists in session state. This is useful before retrieving values to avoid working with empty strings.

## Example

```lua
-- Check if key exists before using
if SessionState.has("userAuthenticated") then
    local status = SessionState.get("userAuthenticated")
    Logger.info("Auth status: " .. status)
else
    Logger.warn("User not authenticated")
end

-- Conditional logic based on state
if SessionState.has("processedData") then
    -- Process the data
    local data = SessionState.get("processedData")
    outputs.result = data
else
    -- Initialize default data
    SessionState.set("processedData", "default")
end
```

## Node Structure Example

This function is typically used in node scripts for conditional logic:

```lua
-- In a node script
if SessionState.has(inputs.key) then
    outputs.exists = "true"
else
    outputs.exists = "false"
end
```

## Notes

- Returns `false` for non-existent keys
- Keys are case-sensitive
- Always use this before `SessionState.get()` if you need to distinguish between empty values and missing keys

## Related

- [SessionState System](/docs/luau/session-state)
- [SessionState.get()](/docs/luau/functions/session-state-get)

