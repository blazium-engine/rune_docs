---
sidebar_position: 15
---

# executeCommand()

Executes a shell command and returns the result.

## Function Signature

```lua
executeCommand(command: string): table
```

## Parameters

- **command** (string): The shell command to execute

## Return Value

Returns a table with:
- **exitCode** (number): The exit code of the command (0 = success)
- **stdout** (string): Standard output from the command
- **stderr** (string): Standard error output from the command
- **success** (boolean): `true` if exit code is 0, `false` otherwise

## Description

`executeCommand()` runs a command in the system shell and captures its output. This allows integration with external tools and system commands.

## Example

```lua
-- Execute a simple command
local result = executeCommand("ls -la")
if result.success then
    Logger.info("Files: " .. result.stdout)
else
    Logger.error("Command failed: " .. result.stderr)
end

-- Get git commit hash
local result = executeCommand("git rev-parse HEAD")
if result.success then
    local commitHash = result.stdout:match("^%s*(.-)%s*$") -- trim
    SessionState.set("commitHash", commitHash)
end

-- Process command output
local result = executeCommand("date")
if result.success then
    outputs.currentDate = result.stdout
end
```

## Node Structure Example

When used in a node script, this function corresponds to the Commandline node:

```
[Commandline Node]
Inputs:
  - Command: "ls -la"
Outputs:
  - ExitCode: "0"
  - Stdout: "file listing..."
  - Stderr: ""
  - Success: "true"
Execution:
  - In → Out
```

## Notes

- Commands run with the same permissions as the RUNE process
- On Windows, commands are executed via `cmd.exe /C`
- On Linux/Mac, commands are executed via the shell
- Be careful with user-provided input (security risk)
- Command execution is synchronous (waits for completion)

## Related

- [Commandline System](/docs/luau/commandline)
- [Commandline Node](/docs/nodes/commandline)

