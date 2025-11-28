---
sidebar_position: 13
---

# Logger.debug()

Logs a debug message.

## Function Signature

```lua
Logger.debug(message: string)
```

## Parameters

- **message** (string): The debug message to log

## Return Value

None

## Description

`Logger.debug()` logs a debug message at the DEBUG level. Use this for detailed debugging information that's only needed during development.

## Example

```lua
-- Debug state information
Logger.debug("Current session state keys: " .. table.concat(getStateKeys(), ", "))

-- Debug input values
Logger.debug("Input received - key: " .. inputs.key .. ", value: " .. inputs.value)

-- Debug flow progress
Logger.debug("Processing step " .. stepNumber .. " of " .. totalSteps)

-- Debug complex data
Logger.debug("Processing data: " .. jsonToString(complexData))
```

## Node Structure Example

When used in a node script, this function corresponds to the Console node with debug level:

```
[Console Node]
Inputs:
  - Message: "Debug information"
  - Level: "debug"
Execution:
  - In → Out
```

## Notes

- Messages appear in the execution history
- Use sparingly - debug logs can be verbose
- Helpful for troubleshooting during development
- Consider removing or reducing debug logs in production flows

## Related

- [Logger System](/docs/luau/logger)
- [Logger.info()](/docs/luau/functions/logger-info)
- [Console Node](/docs/nodes/console)

