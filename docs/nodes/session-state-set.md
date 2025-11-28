---
sidebar_position: 5
---

# SessionStateSet Node

The SessionStateSet node stores a value in session state for use by other nodes in the flow.

![SessionStateSet Node](https://placehold.co/600x400/EEE/31343C)

## Description

The SessionStateSet node allows you to store data in session state, making it available to all other nodes in the current flow execution. Values are automatically detected and stored with appropriate types (string, number, boolean, or JSON object/array).

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Key** (string): The key name to store the value under (required)
- **Value** (any): The value to store. Can be a string, number, boolean, or JSON string

## Execution Outputs

- **Out** (execution): Execution continues after the value is stored

## Variable Outputs

None

## Special Notes

- The Key input is required - empty keys will cause an error
- Value types are automatically detected:
  - JSON objects/arrays are stored as JSON
  - "true"/"false" strings are stored as booleans
  - Numeric strings are stored as numbers
  - Everything else is stored as a string
- Execution flow types cannot be set as values
- Setting a value overwrites any existing value for that key
- Keys are case-sensitive

## Example Usage

Store user input or processed data for later use. For example, after a user enters their name, use SessionStateSet to store it with key "username", then other nodes can retrieve it using SessionStateGet.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

