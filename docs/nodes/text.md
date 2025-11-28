---
sidebar_position: 8
---

# Text Node

The Text node provides a string value that can be used as input to other nodes.

![Text Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Text node is a data node that outputs a string value. You can either set a static text value in the node properties or connect another node's output to provide the text dynamically.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string, optional): If connected, uses the value from the connected node. If not connected, uses the value from node properties.

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (string): The text value to use

## Special Notes

- If the Input pin is not connected, the node uses the "text" property value
- If the Input pin is connected, it uses the value from the connected node
- This node doesn't have execution pins - it's a pure data node
- Use this node to provide constant string values or pass string data between nodes

## Example Usage

Provide static text values like "Hello, World!" or configuration strings. Connect the Output to nodes that need string input, such as SessionStateSet (for the Key or Value) or StringCompare nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

