---
sidebar_position: 15
---

# Array Compare Node

The Array Compare node compares array values and checks array properties.

![Array Compare Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Array Compare node performs operations on arrays such as checking if an array contains a value, checking array length, or comparing arrays.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Array** (any): The array to check (must be a JSON array string)
- **Value** (any, optional): The value to search for in the array

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (boolean): `true` if the comparison succeeds, `false` otherwise

## Special Notes

- The Array input must be a valid JSON array string
- Comparison modes are set in the node properties
- Can check for array length, contains value, is empty, etc.

## Example Usage

Check if an array contains a specific value, or verify that an array is not empty before processing. Connect the Result to a Branch node for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

