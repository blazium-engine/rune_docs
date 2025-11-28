---
sidebar_position: 25
---

# getEnv()

Gets an environment variable value.

## Function Signature

```lua
getEnv(varName: string): string?
```

## Parameters

- **varName** (string): The name of the environment variable

## Return Value

- **string**: The value of the environment variable, or `nil` if not found or env_access is disabled

## Description

`getEnv()` retrieves an environment variable value. It first checks in-memory environment variables, then system environment variables. Returns `nil` if the variable doesn't exist or if environment variable access is disabled.

## Example

```lua
-- Get system environment variable
local homeDir = getEnv("HOME")
if homeDir then
    Logger.info("Home directory: " .. homeDir)
else
    Logger.warn("HOME not set")
end

-- Get API key from environment
local apiKey = getEnv("API_KEY")
if apiKey then
    SessionState.set("apiKey", apiKey)
else
    Logger.error("API_KEY environment variable not set")
end

-- Use with default value
local port = getEnv("PORT") or "8080"
Logger.info("Using port: " .. port)

-- Platform detection
local os = getEnv("OS") or getEnv("OSTYPE")
if os then
    Logger.info("Operating system: " .. os)
end
```

## Node Structure Example

When used in a node script, this function corresponds to the GetEnvironmentVariable node:

```
[GetEnvironmentVariable Node]
Inputs:
  - VariableName: "API_KEY"
Outputs:
  - Value: "secret-key-123" or empty if not found
Execution:
  - In → Out
```

## Notes

- Returns `nil` if environment variable access is disabled in configuration
- Checks in-memory environment variables first, then system environment
- Variable names are case-sensitive on most systems
- Use `or` operator to provide default values

## Related

- [Environment System](/docs/luau/environment)
- [GetEnvironmentVariable Node](/docs/nodes/get-environment-variable)

