---
sidebar_position: 18
---

# Generate Image (Async) Node

The Generate Image (Async) node initiates an asynchronous image generation request. The response is handled in the background and can be retrieved later.

![Generate Image (Async) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Generate Image (Async) node starts an asynchronous image generation request. Unlike the synchronous version, this node returns immediately with a future response ID that can be used to retrieve the result later.

This is useful for long-running image generation requests.

## Execution Inputs

- **Execute** (execution): Triggers the async image generation request

## Variable Inputs

- **Prompt** (string): Text description of the image to generate

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

Start an async image generation:
1. Set Prompt to your image description
2. Connect Execute to start the async request
3. Store FutureResponseId for later retrieval

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

