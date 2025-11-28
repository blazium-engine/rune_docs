---
sidebar_position: 25
---

# Is Text Valid Json Node

The Is Text Valid Json node checks if a text string is valid JSON format.

![Is Text Valid Json Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Is Text Valid Json node validates whether a text string is properly formatted JSON. The result is a boolean that can be used for conditional logic.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Text** (string): The text string to validate

## Execution Outputs

- **Out** (execution): Execution continues after validation

## Variable Outputs

- **IsValid** (boolean): `true` if the text is valid JSON, `false` otherwise

## Special Notes

- Validates JSON syntax only, not JSON schema
- Returns `false` for empty strings or invalid JSON
- Use this before attempting to parse JSON to avoid errors
- Connect the IsValid output to a Branch node for conditional processing

## Example Usage

Validate user input or data from external sources before processing as JSON. Connect the IsValid output to a Branch node to route valid JSON to processing nodes and invalid JSON to error handling.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

