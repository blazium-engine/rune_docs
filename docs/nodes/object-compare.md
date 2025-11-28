---
sidebar_position: 16
---

# Object Compare Node

The Object Compare node compares object values and checks object properties.

![Object Compare Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Object Compare node performs operations on JSON objects such as checking if an object has a key, checking if a value exists, or comparing object properties.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Object** (any): The object to check (must be a JSON object string)
- **Key** (string, optional): The key to check for in the object
- **Value** (any, optional): The value to search for in the object

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (boolean): `true` if the comparison succeeds, `false` otherwise

## Special Notes

- The Object input must be a valid JSON object string
- Comparison modes are set in the node properties
- Can check for key existence, value existence, object emptiness, etc.

## Example Usage

Check if a JSON object has a specific key, or verify that a required property exists. Connect the Result to a Branch node for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

