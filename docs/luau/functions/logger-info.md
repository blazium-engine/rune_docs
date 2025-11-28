---
sidebar_position: 10
---

# Logger.info()

Logs an informational message.

## Function Signature

```lua
Logger.info(message: string)
```

## Parameters

- **message** (string): The message to log

## Return Value

None

## Description

`Logger.info()` logs an informational message at the INFO level. Use this for general flow progress and important state changes.

## Example

```lua
-- Log flow progress
Logger.info("Starting data processing...")
-- ... processing code ...
Logger.info("Data processing complete")

-- Log state information
Logger.info("User authenticated: " .. SessionState.get("username"))

-- Log with context
Logger.info("Processing item " .. inputs.itemId .. " of " .. inputs.totalItems)
```

## Node Structure Example

When used in a node script, this function corresponds to the Console node with info level:

```
[Console Node]
Inputs:
  - Message: "Processing complete"
  - Level: "info"
Execution:
  - In → Out
```

## Notes

- Messages appear in the execution history
- Use for normal flow progress and important events
- Avoid logging in tight loops (performance impact)

## Related

- [Logger System](/docs/luau/logger)
- [Logger.warn()](/docs/luau/functions/logger-warn)
- [Logger.error()](/docs/luau/functions/logger-error)
- [Console Node](/docs/nodes/console)

