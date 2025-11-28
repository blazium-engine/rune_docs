---
sidebar_position: 5
---

# SessionState.contains()

Checks if a value in session state contains a specific item.

## Function Signature

```lua
SessionState.contains(key: string, searchValue: any): boolean
```

## Parameters

- **key** (string): The key to check
- **searchValue** (any): The value to search for (string, number, or boolean)

## Return Value

- **boolean**: `true` if the value contains the search value, `false` otherwise

## Description

`SessionState.contains()` checks if a stored value contains a specific item. It works with:
- Arrays: searches for the item in the array
- Objects: searches for the value in object values
- Strings: checks for exact match
- Numbers/Booleans: checks for exact match

## Example

```lua
-- Store an array
SessionState.set("tags", '["red", "blue", "green"]')

-- Check if array contains a value
if SessionState.contains("tags", "blue") then
    Logger.info("Tag 'blue' found in array")
end

-- Store an object
SessionState.set("user", '{"name": "John", "role": "admin"}')

-- Check if object contains a value
if SessionState.contains("user", "admin") then
    Logger.info("User has admin role")
end

-- Check string value
SessionState.set("status", "active")
if SessionState.contains("status", "active") then
    Logger.info("Status is active")
end
```

## Node Structure Example

This function is typically used in node scripts for searching:

```lua
-- In a node script
local found = SessionState.contains(inputs.key, inputs.searchValue)
if found then
    outputs.found = "true"
else
    outputs.found = "false"
end
```

## Notes

- Returns `false` if the key doesn't exist
- Works with JSON arrays and objects stored in session state
- Search is case-sensitive for strings
- For numbers and booleans, performs exact match

## Related

- [SessionState System](/docs/luau/session-state)
- [SessionState.has()](/docs/luau/functions/session-state-has)

