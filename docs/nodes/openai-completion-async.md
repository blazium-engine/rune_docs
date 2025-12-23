---
sidebar_position: 16
---

# Create Completion (Async) Node

The Create Completion (Async) node initiates an asynchronous completion request. The response is handled in the background and can be retrieved later.

![Create Completion (Async) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Create Completion (Async) node starts an asynchronous completion request. Unlike the synchronous version, this node returns immediately with a future response ID that can be used to retrieve the result later.

This is useful for long-running requests that might take significant time to complete.

## Execution Inputs

- **Execute** (execution): Triggers the async completion request

## Variable Inputs

- **Model** (string): The model to use (e.g., "text-davinci-003")
- **Prompt** (string): The text prompt to complete

## Execution Outputs

- **Success** (execution): Execution continues here if the request was successfully initiated
- **Failed** (execution): Execution continues here if the request failed to start

## Variable Outputs

- **FutureResponseId** (string): ID to use for retrieving the response later
- **ErrorMessage** (string): Error message if request failed

## Special Notes

- The request is processed asynchronously in the background
- Use the FutureResponseId to retrieve the result when ready
- The response must be retrieved using appropriate async result retrieval mechanisms
- This node returns immediately without waiting for the API response

## Example Usage

Start an async completion:
1. Set Model to "text-davinci-003"
2. Set Prompt to your completion prompt
3. Connect Execute to start the async request
4. Store FutureResponseId for later retrieval

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

