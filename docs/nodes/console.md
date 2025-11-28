---
sidebar_position: 11
---

# Console Node

The Console node outputs a message to the execution log.

![Console Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Console node logs a message to the execution history. This is useful for debugging, tracking flow progress, or displaying information during execution.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Message** (string): The message to log
- **Level** (string, optional): The log level - "info", "warn", "error", or "debug" (default: "info")

## Execution Outputs

- **Out** (execution): Execution continues after the message is logged

## Variable Outputs

None

## Special Notes

- Messages appear in the execution history panel
- Log levels: "info" (normal), "warn" (warnings), "error" (errors), "debug" (detailed debugging)
- Use appropriate log levels to filter and organize your logs
- Avoid logging in tight loops as it can impact performance

## Example Usage

Log important flow milestones, debug information, or error messages. For example, log "Processing started" at the beginning of a flow, or log error messages when validation fails.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

