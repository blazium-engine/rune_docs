---
sidebar_position: 6
---

# HTTP System

The HTTP system provides functionality for making HTTP requests to web services and APIs.

## Overview

The `httpRequest` function allows you to make HTTP requests (GET, POST, PUT, DELETE, PATCH, OPTIONS) with custom headers, body, and timeout settings. This is essential for integrating with REST APIs and web services.

## Available Functions

- **[httpRequest()](/docs/luau/functions/http-request)** - Make an HTTP request

## Common Use Cases

### GET Request

```lua
local result = httpRequest("GET", "https://api.example.com/data")
if result.success then
    local data = parseJsonString(result.body)
    Logger.info("Received data: " .. result.body)
end
```

### POST Request with JSON

```lua
local options = {
    headers = {
        ["Content-Type"] = "application/json"
    },
    body = '{"name": "John", "age": 30}'
}
local result = httpRequest("POST", "https://api.example.com/users", options)
```

### Request with Authentication

```lua
local options = {
    headers = {
        ["Authorization"] = "Bearer " .. SessionState.get("apiToken")
    }
}
local result = httpRequest("GET", "https://api.example.com/protected", options)
```

### Error Handling

```lua
local result = httpRequest("GET", "https://api.example.com/data")
if result.success then
    Logger.info("Status: " .. result.status)
else
    Logger.error("Request failed: " .. result.error)
end
```

## Supported Methods

- GET
- POST
- PUT
- DELETE
- PATCH
- OPTIONS

## Response Structure

The function returns a table with:
- `success`: Boolean indicating if the request was successful
- `status`: HTTP status code
- `body`: Response body as a string
- `headers`: Table of response headers
- `error`: Error message if the request failed

## Notes

- HTTPS requires OpenSSL support (may not be available in all builds)
- Default timeout is 30 seconds (configurable)
- Headers are case-sensitive

