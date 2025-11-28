---
sidebar_position: 4
---

# Workflow System

The Workflow system allows you to trigger other flows from within a flow, enabling flow composition and reusability.

## Overview

The `triggerWorkflow` function loads and executes another flow from the flows directory. This allows you to:
- Break complex flows into smaller, reusable components
- Create modular workflows
- Chain flows together

## Available Functions

- **[triggerWorkflow()](/docs/luau/functions/trigger-workflow)** - Execute another flow by name

## Common Use Cases

### Modular Flow Design

```lua
-- Trigger a sub-flow for data validation
local success = triggerWorkflow("validate-data")
if success then
    Logger.info("Validation passed")
else
    Logger.error("Validation failed")
end
```

### Flow Composition

```lua
-- Execute multiple flows in sequence
triggerWorkflow("prepare-data")
triggerWorkflow("process-data")
triggerWorkflow("save-results")
```

### Conditional Flow Execution

```lua
if SessionState.get("userType") == "admin" then
    triggerWorkflow("admin-workflow")
else
    triggerWorkflow("user-workflow")
end
```

## Important Notes

- Triggered flows execute in the same session context
- SessionState is shared between the parent and child flows
- The function returns `true` if the flow executed successfully, `false` otherwise
- Flow names should match the directory name in the flows directory

## Related Nodes

- [TriggerFlow Node](/docs/nodes/trigger-flow)

