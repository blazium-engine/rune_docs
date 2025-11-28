---
sidebar_position: 16
---

# httpRequest()

Makes an HTTP request to a web service.

## Function Signature

```lua
httpRequest(method: string, url: string, options?: table): table
```

## Parameters

- **method** (string): HTTP method (GET, POST, PUT, DELETE, PATCH, OPTIONS)
- **url** (string): The URL to request
- **options** (table, optional): Request options
  - **headers** (table): Custom headers as key-value pairs
  - **body** (string): Request body
  - **timeout** (number): Timeout in seconds (default: 30)

## Return Value

Returns a table with:
- **success** (boolean): `true` if request was successful (status 200-299)
- **status** (number): HTTP status code
- **body** (string): Response body
- **headers** (table): Response headers as key-value pairs
- **error** (string): Error message if request failed

## Description

`httpRequest()` makes HTTP requests to web services and APIs. Supports GET, POST, PUT, DELETE, PATCH, and OPTIONS methods.

## Example

```lua
-- Simple GET request
local result = httpRequest("GET", "https://api.example.com/data")
if result.success then
    Logger.info("Status: " .. result.status)
    Logger.info("Response: " .. result.body)
end

-- POST request with JSON
local options = {
    headers = {
        ["Content-Type"] = "application/json"
    },
    body = '{"name": "John", "age": 30}'
}
local result = httpRequest("POST", "https://api.example.com/users", options)

-- Request with authentication
local options = {
    headers = {
        ["Authorization"] = "Bearer " .. SessionState.get("apiToken")
    }
}
local result = httpRequest("GET", "https://api.example.com/protected", options)

-- Request with timeout
local options = {
    timeout = 10
}
local result = httpRequest("GET", "https://api.example.com/data", options)
```

## Node Structure Example

This function is typically used in node scripts for API integration:

```lua
-- In a node script
local options = {
    headers = inputs.headers or {},
    body = inputs.body or ""
}
local result = httpRequest(inputs.method, inputs.url, options)
outputs.status = tostring(result.status)
outputs.body = result.body
outputs.success = result.success and "true" or "false"
```

## Notes

- HTTPS requires OpenSSL support (may not be available in all builds)
- Default timeout is 30 seconds
- Headers are case-sensitive
- Status codes 200-299 are considered successful

## Related

- [HTTP System](/docs/luau/http)

