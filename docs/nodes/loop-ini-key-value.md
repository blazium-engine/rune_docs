---
sidebar_position: 45
---

# Loop Ini Key Value Node

The Loop Ini Key Value node iterates over key-value pairs in an INI section.

![Loop Ini Key Value Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Ini Key Value node iterates over key-value pairs within a specific INI section, executing the loop body for each pair.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **Section** (any): The INI section data to iterate over (key-value pairs)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next key-value pair

## Variable Outputs

- **Key** (string): The current key name
- **Value** (string): The current value

## Special Notes

- Input must be a section's key-value pairs from parsed INI data
- Iterates over keys and values within a section
- Connect loop body to "Do" and connect end back to "Continue"
- Use after LoopIniCategories to process keys within each section

## Example Usage

Process each key-value pair in an INI section. For example, iterate over settings in a configuration section.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

