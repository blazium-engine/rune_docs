---
sidebar_position: 30
---

# Failed Node

The Failed node marks the flow execution as failed.

![Failed Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Failed node is a terminal node that marks the flow execution as failed. It's typically used in error handling paths to clearly indicate failure.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

None

## Execution Outputs

None (terminal node)

## Variable Outputs

None

## Special Notes

- This is a terminal node - execution stops here
- Use this to clearly mark failure/error paths
- Often paired with Success node for error handling
- The flow execution is marked as failed when this node is reached

## Example Usage

Place in error handling paths. For example, if validation fails or an operation errors, route execution to a Failed node to mark the flow as failed.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

