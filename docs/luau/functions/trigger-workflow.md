---
sidebar_position: 14
---

# triggerWorkflow()

Executes another flow by name.

## Function Signature

```lua
triggerWorkflow(flowName: string): boolean
```

## Parameters

- **flowName** (string): The name of the flow to execute (directory name in flows directory)

## Return Value

- **boolean**: `true` if the flow executed successfully, `false` otherwise

## Description

`triggerWorkflow()` loads and executes another flow from the flows directory. The triggered flow runs in the same session context, sharing SessionState with the parent flow.

## Example

```lua
-- Execute a sub-flow
local success = triggerWorkflow("validate-data")
if success then
    Logger.info("Validation passed")
else
    Logger.error("Validation failed")
end

-- Execute multiple flows in sequence
triggerWorkflow("prepare-data")
triggerWorkflow("process-data")
triggerWorkflow("save-results")

-- Conditional flow execution
if SessionState.get("userType") == "admin" then
    triggerWorkflow("admin-workflow")
else
    triggerWorkflow("user-workflow")
end
```

## Node Structure Example

When used in a node script, this function corresponds to the TriggerFlow node:

```
[TriggerFlow Node]
Inputs:
  - FlowName: "validate-data"
Outputs:
  - Success: "true" or "false"
Execution:
  - In → Out
```

## Notes

- Flow name should match the directory name in the flows directory
- Triggered flows share SessionState with the parent flow
- Returns `false` if the flow cannot be loaded or executed
- Flow execution is synchronous (waits for completion)

## Related

- [Workflow System](/docs/luau/workflow)
- [TriggerFlow Node](/docs/nodes/trigger-flow)

