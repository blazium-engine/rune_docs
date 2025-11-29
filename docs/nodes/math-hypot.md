---
sidebar_position: 19
---

# Hypot Node

The Hypot node calculates the hypotenuse of a right triangle given two sides.

![Hypot Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Hypot node calculates the length of the hypotenuse of a right triangle using the Pythagorean theorem: √(A² + B²). This function helps avoid overflow when A and B are large numbers.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The length of the first side of the right triangle
- **B** (number): The length of the second side of the right triangle

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The length of the hypotenuse

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- The node works with both integer and floating-point numbers
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate distances, such as the distance between two points in 2D space, or determine diagonal lengths. Connect number outputs from Integer or Float nodes to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

