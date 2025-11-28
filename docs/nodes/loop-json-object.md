---
sidebar_position: 55
---

# Loop Json Object Node

The Loop Json Object node iterates over a JSON object's properties.

![Loop Json Object Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Json Object node iterates over the properties (key-value pairs) in a JSON object, executing the loop body for each property.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **Object** (any): The JSON object to iterate over (must be a JSON object string or parsed object)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next property

## Variable Outputs

- **Key** (string): The current property's key name
- **Value** (any): The current property's value

## Special Notes

- Input must be a valid JSON object
- Iterates over all properties in the object
- Connect loop body to "Do" and connect end back to "Continue"
- Use for processing JSON object properties

## Example Usage

Process each property in a JSON object. For example, iterate over configuration settings or user profile data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

