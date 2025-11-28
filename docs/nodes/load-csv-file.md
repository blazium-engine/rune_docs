---
sidebar_position: 49
---

# Load Csv File Node

The Load Csv File node reads and parses a CSV file from the flow directory.

![Load Csv File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Csv File node reads a CSV file from the flow directory, parses it, and makes the data available as structured output with rows and headers.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the CSV file from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the file is loaded and parsed

## Variable Outputs

- **Data** (any): The parsed CSV data

## Special Notes

- Paths are relative to the flow directory
- File must be valid CSV format
- Raises an error if the file doesn't exist, cannot be read, or contains invalid CSV
- Use for loading CSV data files

## Example Usage

Load CSV data files, spreadsheets, or tabular data. Connect the Data output to LoopCsvEntries to process each row.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

