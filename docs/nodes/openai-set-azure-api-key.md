---
sidebar_position: 5
---

# Set Azure OpenAI API Key Node

The Set Azure OpenAI API Key node configures the Azure OpenAI API key for authentication when using Azure's OpenAI service.

![Set Azure OpenAI API Key Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Azure OpenAI API Key node is used to configure authentication for Azure OpenAI API calls. It works similarly to the standard Set API Key node but is specifically for Azure OpenAI endpoints.

The API key can be provided directly, from an environment variable, or from a file.

## Execution Inputs

- **Execute** (execution): Triggers the API key configuration

## Variable Inputs

- **ApiKey** (string, optional): The Azure API key value (required if Source is "direct")
- **Source** (string): The source of the API key. Must be one of: "direct", "env", or "file" (default: "direct")
- **EnvVarName** (string, optional): The name of the environment variable containing the API key (required if Source is "env")
- **FilePath** (string, optional): The path to the file containing the API key (required if Source is "file")

## Execution Outputs

- **Success** (execution): Execution continues here if the API key was successfully configured
- **Failed** (execution): Execution continues here if configuration failed

## Variable Outputs

- **Success** (boolean): "true" if the API key was successfully configured, "false" otherwise
- **ErrorMessage** (string): Error message if configuration failed, empty string otherwise

## Special Notes

- The Azure API key is stored in session state with the key "openai_azure_api_key"
- This node is specifically for Azure OpenAI endpoints
- Use the standard Set API Key node for regular OpenAI endpoints
- The Source field is case-sensitive and must be exactly "direct", "env", or "file"
- API key validation ensures the key is not empty and meets length requirements
- Maximum API key length is 512 characters

## Example Usage

Configure the Azure API key from an environment variable:
1. Set Source to "env"
2. Set EnvVarName to "AZURE_OPENAI_API_KEY"
3. Connect Execute to start the flow
4. Connect Success output to your Azure OpenAI API nodes

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

