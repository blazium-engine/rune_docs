---
sidebar_position: 48
---

# Load Csv String Node

The Load Csv String node parses a CSV string into structured data.

![Load Csv String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Csv String node takes a CSV-formatted string and parses it into structured data with rows and headers.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **CSV** (string): The CSV string to parse

## Execution Outputs

- **Out** (execution): Execution continues after parsing

## Variable Outputs

- **Data** (any): The parsed CSV data (table with rows array and headers array)

## Special Notes

- Input must be valid CSV format
- Raises an error if CSV is invalid
- Output includes rows (array of row arrays) and headers (array of column names)
- Rows are indexed arrays where each row is an array of cell values

## Example Usage

Parse CSV data strings, convert CSV to other formats, or process CSV data from external sources.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

