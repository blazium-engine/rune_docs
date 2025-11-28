---
sidebar_position: 39
---

# Loop Yaml Array Node

The Loop Yaml Array node iterates over a YAML array.

![Loop Yaml Array Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Yaml Array node iterates over a YAML array, executing the loop body for each item. Similar to Foreach but specifically designed for YAML arrays.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **Array** (any): The YAML array to iterate over (must be a YAML array string)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next item

## Variable Outputs

- **Index** (integer): The current item's index
- **Value** (any): The current item's value

## Special Notes

- Input must be a valid YAML array
- Loop continues until all items are processed
- Connect loop body to "Do" and connect end back to "Continue"
- Use for processing YAML array data

## Example Usage

Process each item in a YAML array. For example, iterate over a list of users or configuration items in YAML format.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

