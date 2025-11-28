---
sidebar_position: 3
---

# Logger System

The Logger system provides logging functionality for debugging and monitoring flow execution.

## Overview

Logger functions allow you to output messages at different severity levels. These messages appear in the execution history and can help you debug issues or track flow progress.

## Log Levels

- **Info**: General informational messages
- **Warn**: Warning messages for potential issues
- **Error**: Error messages for failures
- **Debug**: Detailed debugging information

## Available Functions

- **[Logger.info()](/docs/luau/functions/logger-info)** - Log an informational message
- **[Logger.warn()](/docs/luau/functions/logger-warn)** - Log a warning message
- **[Logger.error()](/docs/luau/functions/logger-error)** - Log an error message
- **[Logger.debug()](/docs/luau/functions/logger-debug)** - Log a debug message

## Common Use Cases

### Progress Tracking

```lua
Logger.info("Starting data processing...")
-- ... processing code ...
Logger.info("Data processing complete")
```

### Error Handling

```lua
local success, result = pcall(someFunction)
if not success then
    Logger.error("Failed to process data: " .. tostring(result))
end
```

### Debugging

```lua
Logger.debug("Current state: " .. SessionState.get("currentStep"))
Logger.debug("Input value: " .. inputs.value)
```

### Warnings

```lua
if tonumber(inputs.count) > 1000 then
    Logger.warn("Large count detected: " .. inputs.count)
end
```

## Best Practices

1. **Use Appropriate Levels**: Use `info` for normal flow, `warn` for potential issues, `error` for failures
2. **Include Context**: Add relevant information to log messages
3. **Don't Over-Log**: Avoid logging in tight loops or high-frequency operations
4. **Use Debug Sparingly**: Debug logs are verbose - use them when troubleshooting

## Related Nodes

- [Console Node](/docs/nodes/console)

