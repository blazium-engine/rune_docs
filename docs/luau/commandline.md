---
sidebar_position: 5
---

# Commandline System

The Commandline system allows you to execute shell commands and capture their output.

## Overview

The `executeCommand` function runs a command in the system shell and returns the exit code, stdout, stderr, and success status. This is useful for integrating with external tools and system commands.

## Available Functions

- **[executeCommand()](/docs/luau/functions/execute-command)** - Execute a shell command and get results

## Common Use Cases

### Running System Commands

```lua
local result = executeCommand("ls -la")
if result.success then
    Logger.info("Command output: " .. result.stdout)
else
    Logger.error("Command failed: " .. result.stderr)
end
```

### Processing Command Output

```lua
local result = executeCommand("git rev-parse HEAD")
if result.success then
    local commitHash = result.stdout:match("^%s*(.-)%s*$") -- trim whitespace
    SessionState.set("commitHash", commitHash)
end
```

### Error Handling

```lua
local result = executeCommand("some-command")
if not result.success then
    Logger.error("Exit code: " .. result.exitCode)
    Logger.error("Error: " .. result.stderr)
end
```

## Security Considerations

- Commands run with the same permissions as the RUNE process
- Be careful with user-provided input in commands
- Consider sanitizing inputs before passing to commands

## Platform Differences

- **Windows**: Commands are executed via `cmd.exe /C`
- **Linux/Mac**: Commands are executed via the shell

## Related Nodes

- [Commandline Node](/docs/nodes/commandline)

