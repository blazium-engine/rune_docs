---
sidebar_position: 31
---

# Commandline Node

The Commandline node executes a shell command and captures the output.

![Commandline Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Commandline node runs a command in the system shell and captures its output, exit code, and error messages. This allows integration with external tools and system commands.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Command** (string): The shell command to execute

## Execution Outputs

- **Out** (execution): Execution continues after the command completes

## Variable Outputs

- **ExitCode** (integer): The command's exit code (0 = success)
- **Stdout** (string): Standard output from the command
- **Stderr** (string): Standard error output from the command
- **Success** (boolean): `true` if exit code is 0, `false` otherwise

## Special Notes

- Commands run with the same permissions as the RUNE process
- On Windows, commands are executed via `cmd.exe /C`
- On Linux/Mac, commands are executed via the shell
- Command execution is synchronous (waits for completion)
- Be careful with user-provided input (security risk)
- Use Success output to check if command succeeded

## Example Usage

Execute system commands, run scripts, or call external tools. For example, run `git rev-parse HEAD` to get the current commit hash, or execute build scripts.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

