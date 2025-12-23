---
sidebar_position: 12
---

# Get Last Response Node

The Get Last Response node retrieves the last response from a conversation, including information about function calls if present.

![Get Last Response Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Last Response node retrieves the most recent assistant response from a conversation. It provides the response text and, if the response was a function call, information about the function call including the function name and arguments.

## Execution Inputs

- **Execute** (execution): Triggers retrieving the last response

## Variable Inputs

- **ConversationId** (string): The conversation ID from Create Conversation node

## Execution Outputs

- **Success** (execution): Execution continues here if response was successfully retrieved
- **Failed** (execution): Execution continues here if retrieval failed

## Variable Outputs

- **LastResponse** (string): The last assistant response text
- **IsFunctionCall** (boolean): "true" if the response was a function call, "false" otherwise
- **FunctionCallName** (string): The name of the function if it was a function call, empty otherwise
- **FunctionCallArguments** (string): JSON string of function call arguments if it was a function call, empty otherwise

## Special Notes

- The conversation must exist and have at least one response
- Function call information is only available if the last response was a function call
- FunctionCallArguments is a JSON string that needs to be parsed if you want to access individual arguments
- Use IsFunctionCall to determine if you need to process function call information

## Example Usage

Get the last response and check for function calls:
1. Connect ConversationId from Create Conversation node
2. Connect Execute to retrieve the response
3. Check IsFunctionCall output
4. If true, use FunctionCallName and FunctionCallArguments to process the function call
5. If false, use LastResponse as the assistant's text response

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

