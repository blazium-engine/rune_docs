---
sidebar_position: 3
---

# Button Event Node

The Button Event node serves as an entry point for flow execution, triggered by a button press in the interface.

![Button Event Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Button Event node is a special event node that acts as the starting point for a flow. When you click the button associated with this node in the RUNE Interface, execution begins and flows through the connected execution output.

## Execution Inputs

None (this is an entry point node)

## Variable Inputs

None

## Execution Outputs

- **Out** (execution): Execution begins here when the button is clicked

## Variable Outputs

None

## Special Notes

- A flow typically starts with a Button Event node (or Cron Event node)
- Multiple Button Event nodes can exist in a flow, each with its own button
- The button appears in the RUNE Interface when the flow is loaded
- This node cannot be triggered programmatically - it requires user interaction

## Example Usage

Place a Button Event node at the start of your flow. Connect its execution output to the first processing node. When you click the button in the interface, the flow will execute from this point.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

