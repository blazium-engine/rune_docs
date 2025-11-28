---
sidebar_position: 14
---

# Boolean Compare Node

The Boolean Compare node compares boolean values.

![Boolean Compare Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Boolean Compare node performs boolean comparisons. It can check if a value is true, false, or compare two boolean values.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (boolean): The boolean value to check
- **CompareTo** (boolean, optional): The boolean value to compare against (for some modes)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (boolean): `true` if the comparison succeeds, `false` otherwise

## Special Notes

- Comparison modes are set in the node properties
- Values are evaluated as booleans ("true", "1", "True" = true; "false", "0", "False" = false)

## Example Usage

Check if a flag is set to true, or compare two boolean conditions. Connect the Result to a Branch node for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

