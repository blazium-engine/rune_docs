---
sidebar_position: 28
---

# Trigger Flow Node

The Trigger Flow node executes another flow by name.

![Trigger Flow Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Trigger Flow node loads and executes another flow from the flows directory. The triggered flow runs in the same session context, sharing SessionState with the parent flow.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **FlowName** (string): The name of the flow to execute (directory name in flows directory)

## Execution Outputs

- **Out** (execution): Execution continues after the triggered flow completes

## Variable Outputs

- **Success** (boolean): `true` if the flow executed successfully, `false` otherwise

## Special Notes

- Flow name should match the directory name in the flows directory
- Triggered flows share SessionState with the parent flow
- Returns `false` in Success if the flow cannot be loaded or executed
- Flow execution is synchronous (waits for completion)
- Use this for modular flow design and flow composition

## Example Usage

Break complex flows into smaller, reusable components. For example, trigger a "validate-data" flow before processing, or trigger different flows based on conditions.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

