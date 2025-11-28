---
sidebar_position: 3
---

# SessionState.del()

Deletes a value from session state.

## Function Signature

```lua
SessionState.del(key: string)
```

## Parameters

- **key** (string): The key to delete

## Return Value

None

## Description

`SessionState.del()` removes a key-value pair from session state. If the key doesn't exist, the function does nothing (no error).

## Example

```lua
-- Set a value
SessionState.set("tempData", "some value")

-- Use the value
local data = SessionState.get("tempData")

-- Delete when no longer needed
SessionState.del("tempData")

-- Verify it's gone
if not SessionState.has("tempData") then
    Logger.info("Key deleted successfully")
end
```

## Node Structure Example

When used in a node script, this function corresponds to the SessionStateDel node:

```
[SessionStateDel Node]
Inputs:
  - Key: "tempData"
Execution:
  - In → Out
```

## Notes

- Deleting a non-existent key is safe (no error)
- Use this to clean up temporary data
- Keys are case-sensitive

## Related

- [SessionState System](/docs/luau/session-state)
- [SessionState.set()](/docs/luau/functions/session-state-set)
- [SessionStateDel Node](/docs/nodes/session-state-del)

