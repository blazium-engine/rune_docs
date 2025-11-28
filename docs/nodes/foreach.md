---
sidebar_position: 26
---

# Foreach Node

The Foreach node iterates over a collection (array or object) and executes a loop body for each item.

![Foreach Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Foreach node is a loop control node that iterates over a collection. For each item in the collection, it executes the loop body (connected to the "Do" output) and provides the current item's key and value.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration to continue the loop

## Variable Inputs

- **Collection** (any): The collection to iterate over (must be a JSON array or object string)

## Execution Outputs

- **Do** (execution): Execution path for the loop body - executed once per item
- **Continue** (execution): Execution returns here after the loop body to continue to the next item

## Variable Outputs

- **Key** (string): The current item's key (for objects) or index (for arrays)
- **Value** (string): The current item's value

## Special Notes

- The Collection input must be a valid JSON array or object string
- For arrays, Key is the index (0-based or 1-based depending on implementation)
- For objects, Key is the property name
- The loop continues until all items are processed
- Connect the loop body to "Do" and connect the end of the loop body back to "Continue"

## Example Usage

Process each item in an array, or iterate over object properties. For example, process each user in a users array, or iterate over configuration properties.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

