---
sidebar_position: 15
---

# Create Completion Node

The Create Completion node generates a text completion using OpenAI's completion models (like text-davinci-003).

![Create Completion Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Create Completion node sends a completion request to OpenAI's API using completion models. Unlike chat completions, this uses a simple prompt-based approach without conversation context.

This node supports all standard completion parameters including temperature, top-p, max tokens, and more.

## Execution Inputs

- **Execute** (execution): Triggers the completion request

## Variable Inputs

- **Model** (string): The model to use (e.g., "text-davinci-003", "text-davinci-002")
- **Prompt** (string): The text prompt to complete
- **Suffix** (string, optional): Text to append after the completion
- **MaxTokens** (integer, optional): Maximum tokens to generate
- **Temperature** (float, optional): Sampling temperature between 0 and 2
- **TopP** (float, optional): Nucleus sampling parameter
- **N** (integer, optional): Number of completions to generate
- **Stream** (boolean, optional): Whether to stream the response
- **Logprobs** (integer, optional): Number of log probabilities to return
- **Echo** (boolean, optional): Whether to echo the prompt in the response
- **Stop** (string, optional): Stop sequences (comma-separated)
- **PresencePenalty** (float, optional): Penalty for token presence (-2.0 to 2.0)
- **FrequencyPenalty** (float, optional): Penalty for token frequency (-2.0 to 2.0)
- **BestOf** (integer, optional): Generate best_of completions and return the best
- **LogitBias** (string, optional): JSON object mapping token IDs to bias values
- **User** (string, optional): User identifier for tracking

## Execution Outputs

- **Success** (execution): Execution continues here if the request succeeded
- **Failed** (execution): Execution continues here if the request failed

## Variable Outputs

- **Response** (string): Full JSON response from the API
- **Text** (string): The completion text
- **FinishReason** (string): Reason for completion (e.g., "stop", "length")
- **Usage** (string): Token usage information as JSON
- **ErrorMessage** (string): Error message if request failed

## Special Notes

- Requires a valid API key configured via Set API Key node
- Completion models are different from chat models
- The Prompt input is the text to complete
- Temperature and TopP should not both be set (use one or the other)
- MaxTokens must be within the model's limits
- Completion models don't maintain conversation context

## Example Usage

Create a simple text completion:
1. Set Model to "text-davinci-003"
2. Set Prompt to "The capital of France is"
3. Connect Execute to start the request
4. Use Text output to get the completion result

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

