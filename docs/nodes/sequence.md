---
sidebar_position: 2
---

# Sequence Node

The Sequence node executes multiple execution paths in order, one after another.

![Sequence Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Sequence node allows you to execute multiple execution paths sequentially. When execution enters the Sequence node, it triggers all connected execution outputs in order, allowing you to run multiple operations in sequence without complex wiring.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

None

## Execution Outputs

- **Out1** (execution): First execution path
- **Out2** (execution): Second execution path
- **Out3** (execution): Third execution path
- (Additional outputs may be available depending on configuration)

## Variable Outputs

None

## Special Notes

- All execution outputs are triggered in order (Out1, then Out2, then Out3, etc.)
- Execution continues to all connected outputs sequentially
- Useful for running multiple independent operations that need to happen in a specific order
- If you need parallel execution, use multiple execution outputs from a single node instead

## Example Usage

Use a Sequence node when you need to perform multiple operations in order, such as: 1) Load data, 2) Process data, 3) Save results. Connect each step to a different Sequence output.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

