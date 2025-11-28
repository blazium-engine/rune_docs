---
sidebar_position: 1
---

# SessionState System

The SessionState system provides persistent storage for data throughout a flow execution. Think of it as a key-value store that persists for the entire duration of a flow run.

## Overview

SessionState allows nodes to share data with each other. When you set a value in one node, other nodes can read it later in the execution. This is essential for building complex workflows where data needs to flow between multiple steps.

## Key Concepts

- **Keys**: String identifiers for stored values
- **Values**: Can be strings, numbers, booleans, or JSON objects/arrays
- **Scope**: SessionState persists for the entire flow execution
- **Type Detection**: Values are automatically detected and stored with appropriate types

## Available Functions

- **[SessionState.set()](/docs/luau/functions/session-state-set)** - Store a value in session state
- **[SessionState.get()](/docs/luau/functions/session-state-get)** - Retrieve a value from session state
- **[SessionState.del()](/docs/luau/functions/session-state-del)** - Delete a value from session state
- **[SessionState.has()](/docs/luau/functions/session-state-has)** - Check if a key exists
- **[SessionState.contains()](/docs/luau/functions/session-state-contains)** - Check if a value contains a specific item

## Common Use Cases

### Storing User Input

```lua
-- Store a value from user input
SessionState.set("username", inputs.username)
```

### Passing Data Between Nodes

```lua
-- Node 1: Set a value
SessionState.set("processedData", "some result")

-- Node 2: Get the value
local data = SessionState.get("processedData")
```

### Conditional Logic Based on State

```lua
if SessionState.has("userAuthenticated") then
    -- User is authenticated, proceed
end
```

### Working with Complex Data

```lua
-- Store a JSON object
SessionState.set("userProfile", '{"name": "John", "age": 30}')

-- Later, retrieve and use it
local profile = SessionState.get("userProfile")
```

## Best Practices

1. **Use Descriptive Keys**: Choose clear, descriptive key names like `userEmail` instead of `data1`
2. **Check Before Use**: Use `SessionState.has()` to verify a key exists before retrieving it
3. **Clean Up**: Use `SessionState.del()` to remove temporary data when no longer needed
4. **Type Consistency**: Be aware that values are stored with their detected types

## Related Nodes

- [SessionStateSet Node](/docs/nodes/session-state-set)
- [SessionStateGet Node](/docs/nodes/session-state-get)
- [SessionStateDel Node](/docs/nodes/session-state-del)

