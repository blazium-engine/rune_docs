---
sidebar_position: 11
---

# Logger.warn()

Logs a warning message.

## Function Signature

```lua
Logger.warn(message: string)
```

## Parameters

- **message** (string): The warning message to log

## Return Value

None

## Description

`Logger.warn()` logs a warning message at the WARN level. Use this for potential issues that don't stop execution but should be noted.

## Example

```lua
-- Warn about potential issues
if tonumber(inputs.count) > 1000 then
    Logger.warn("Large count detected: " .. inputs.count)
end

-- Warn about missing optional data
if not SessionState.has("optionalConfig") then
    Logger.warn("Optional configuration not set, using defaults")
end

-- Warn about deprecated usage
Logger.warn("This flow uses deprecated features")
```

## Node Structure Example

When used in a node script, this function corresponds to the Console node with warn level:

```
[Console Node]
Inputs:
  - Message: "Large count detected"
  - Level: "warn"
Execution:
  - In → Out
```

## Notes

- Messages appear in the execution history with warning indicator
- Use for potential issues that don't cause failures
- Helps with debugging and monitoring

## Related

- [Logger System](/docs/luau/logger)
- [Logger.info()](/docs/luau/functions/logger-info)
- [Logger.error()](/docs/luau/functions/logger-error)
- [Console Node](/docs/nodes/console)

