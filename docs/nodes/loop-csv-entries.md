---
sidebar_position: 50
---

# Loop Csv Entries Node

The Loop Csv Entries node iterates over rows in CSV data.

![Loop Csv Entries Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Loop Csv Entries node iterates over rows in parsed CSV data, executing the loop body for each row.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin to start the loop
- **Continue** (execution): The execution flow returns here after each iteration

## Variable Inputs

- **CSV** (any): The CSV data to iterate over (must be parsed CSV structure with rows)

## Execution Outputs

- **Do** (execution): Execution path for the loop body
- **Continue** (execution): Execution returns here to continue to the next row

## Variable Outputs

- **Row** (any): The current row data (array of cell values)
- **Index** (integer): The current row index

## Special Notes

- Input must be parsed CSV data structure
- Iterates over rows in the CSV data
- Each row is an array of cell values
- Connect loop body to "Do" and connect end back to "Continue"
- Use for processing CSV data row by row

## Example Usage

Process each row in a CSV file. For example, iterate over user records and process each user's data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

