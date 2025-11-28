---
sidebar_position: 4
---

# Cron Event Node

The Cron Event node triggers flow execution on a schedule using cron syntax.

![Cron Event Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Cron Event node allows you to schedule flow execution at specific times or intervals using cron expression syntax. The flow will automatically execute when the cron schedule matches the current time.

## Execution Inputs

None (this is an entry point node)

## Variable Inputs

- **CronExpression** (string): A cron expression defining when to trigger (e.g., "0 * * * *" for every hour)

## Execution Outputs

- **Out** (execution): Execution begins here when the cron schedule matches

## Variable Outputs

None

## Special Notes

- Cron expressions use standard cron syntax: `minute hour day month weekday`
- Example: "0 9 * * *" triggers at 9:00 AM every day
- The cron scheduler runs continuously while RUNE Interface is open
- Multiple Cron Event nodes can exist in a flow with different schedules
- Cron events are only active when the flow is loaded in RUNE Interface

## Example Usage

Use a Cron Event node to create scheduled tasks, such as daily reports or periodic data synchronization. Set the cron expression to define the schedule, then connect execution outputs to your processing nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

