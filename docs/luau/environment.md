---
sidebar_position: 11
---

# Environment System

The Environment system provides access to environment variables from the system or in-memory environment.

## Overview

The `getEnv` function allows you to read environment variables. This is useful for accessing system configuration, API keys stored as environment variables, or configuration passed from the CLI.

## Available Functions

- **[getEnv()](/docs/luau/functions/get-env)** - Get an environment variable value

## Common Use Cases

### Reading System Environment Variables

```lua
local homeDir = getEnv("HOME")
if homeDir then
    Logger.info("Home directory: " .. homeDir)
end
```

### Accessing API Keys

```lua
local apiKey = getEnv("API_KEY")
if apiKey then
    SessionState.set("apiKey", apiKey)
else
    Logger.warn("API_KEY environment variable not set")
end
```

### Platform-Specific Configuration

```lua
local os = getEnv("OS") or getEnv("OSTYPE")
if os then
    Logger.info("Operating system: " .. os)
end
```

### Using Default Values

```lua
local port = getEnv("PORT") or "8080"
Logger.info("Using port: " .. port)
```

## Important Notes

- Environment variable access must be enabled in the configuration (`env_access` setting)
- If `env_access` is disabled, the function returns `nil`
- The function checks in-memory environment variables first, then system environment variables
- Variable names are case-sensitive on most systems

## Security Considerations

- Be careful when logging environment variable values (they may contain sensitive data)
- Don't expose environment variables in error messages or logs
- Use environment variables for configuration, not for user input

## Related Nodes

- [GetEnvironmentVariable Node](/docs/nodes/get-environment-variable)

