---
sidebar_position: 9
---

# Integer Node

The Integer node provides an integer (whole number) value that can be used as input to other nodes.

![Integer Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Integer node is a data node that outputs an integer value. You can either set a static integer value in the node properties or connect another node's output to provide the integer dynamically.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (integer, optional): If connected, uses the value from the connected node. If not connected, uses the value from node properties.

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (integer): The integer value to use

## Special Notes

- If the Input pin is not connected, the node uses the "value" property (defaults to 0 if not set)
- If the Input pin is connected, it uses the value from the connected node
- Invalid values default to 0
- This node doesn't have execution pins - it's a pure data node
- Values are validated to ensure they are valid integers

## Example Usage

Provide numeric values for calculations, comparisons, or counting. Connect the Output to nodes that need integer input, such as NumberCompare nodes or nodes that require numeric parameters.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

