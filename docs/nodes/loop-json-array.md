---
sidebar_position: 54
---

# Loop Json Array Node

The Loop Json Array node iterates over a JSON array.

![Loop Json Array Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Json Array node iterates over a JSON array, executing the loop body for each item in the array.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **Array** (any): The JSON array to iterate over (must be a JSON array string or parsed array)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next item

## Variable Outputs

- **Index** (integer): The current item's index
- **Value** (any): The current item's value

## Special Notes

- Input must be a valid JSON array
- Loop continues until all items are processed
- Connect loop body to "Do" and connect end back to "Continue"
- Use for processing JSON array data

## Example Usage

Process each item in a JSON array. For example, iterate over a list of users, products, or any array data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

