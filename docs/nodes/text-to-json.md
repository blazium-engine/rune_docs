---
sidebar_position: 24
---

# Text To Json Node

The Text To Json node converts a text string to JSON format, validating it in the process.

![Text To Json Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Text To Json node takes a text string and attempts to parse it as JSON. If successful, it outputs the validated JSON string. This is useful for converting user input or text data into structured JSON.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Text** (string): The text string to convert to JSON

## Execution Outputs

- **Out** (execution): Execution continues after conversion

## Variable Outputs

- **Json** (string): The validated JSON string, or empty if conversion failed

## Special Notes

- The input text must be valid JSON format
- If the text is not valid JSON, the Json output will be empty
- Use IsTextValidJson node to check validity before conversion
- The output is a JSON string that can be used with other JSON nodes

## Example Usage

Convert user input or text data into JSON format for processing. Connect the Json output to nodes that work with JSON data, such as LoopJsonArray or JsonToString nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

