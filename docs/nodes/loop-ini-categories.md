---
sidebar_position: 44
---

# Loop Ini Categories Node

The Loop Ini Categories node iterates over INI sections (categories).

![Loop Ini Categories Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Ini Categories node iterates over the sections (categories) in an INI structure, executing the loop body for each section.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **INI** (any): The INI data to iterate over (must be parsed INI structure)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next section

## Variable Outputs

- **Category** (string): The current section name
- **Data** (any): The key-value pairs for the current section

## Special Notes

- Input must be parsed INI data structure
- Iterates over sections (categories) in the INI file
- Each iteration provides the section name and its key-value pairs
- Connect loop body to "Do" and connect end back to "Continue"

## Example Usage

Process each section in an INI file. For example, iterate over configuration sections and process their settings.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

