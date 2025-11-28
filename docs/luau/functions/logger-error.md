---
sidebar_position: 12
---

# Logger.error()

Logs an error message.

## Function Signature

```lua
Logger.error(message: string)
```

## Parameters

- **message** (string): The error message to log

## Return Value

None

## Description

`Logger.error()` logs an error message at the ERROR level. Use this for failures and error conditions.

## Example

```lua
-- Log errors
local success, result = pcall(someFunction)
if not success then
    Logger.error("Function failed: " .. tostring(result))
end

-- Log validation errors
if inputs.email == "" then
    Logger.error("Email is required")
    return
end

-- Log with context
Logger.error("Failed to process user " .. inputs.userId .. ": " .. errorMessage)
```

## Node Structure Example

When used in a node script, this function corresponds to the Console node with error level:

```
[Console Node]
Inputs:
  - Message: "Processing failed"
  - Level: "error"
Execution:
  - In → Out
```

## Notes

- Messages appear in the execution history with error indicator
- Use for actual failures, not warnings
- Helps with debugging and error tracking

## Related

- [Logger System](/docs/luau/logger)
- [Logger.warn()](/docs/luau/functions/logger-warn)
- [Logger.debug()](/docs/luau/functions/logger-debug)
- [Console Node](/docs/nodes/console)

