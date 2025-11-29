---
sidebar_position: 10
---

# Boolean Node

The Boolean node provides a boolean (true/false) value that can be used as input to other nodes.

![Boolean Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Boolean node is a data node that outputs a boolean value. You can either set a static boolean value in the node properties or connect another node's output to provide the boolean dynamically.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (boolean, optional): If connected, uses the value from the connected node. If not connected, uses the value from node properties. Accepts "true", "false", "1", "0", "True", "False", or any string that evaluates to a boolean.

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (boolean): The boolean value to use, normalized to "true" or "false"

## Special Notes

- If the Input pin is not connected, the node uses the "Input" or "value" property (defaults to "false" if not set)
- If the Input pin is connected, it uses the value from the connected node
- Values like "true", "1", "True", "yes" are considered `true`, while "false", "0", "False", empty strings, or other values are considered `false`
- The output is always normalized to "true" or "false" strings
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Provide boolean values for conditional logic, comparisons, or flags. Connect the Output to nodes that need boolean input, such as Branch nodes or BooleanCompare nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

