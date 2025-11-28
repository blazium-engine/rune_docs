---
sidebar_position: 1
---

# RUNE CLI - Getting Started

RUNE CLI is the command-line tool for executing RUNE flows without the graphical interface.

## Installation

1. Download RUNE CLI from [itch.io](https://blaziumengine.itch.io/rune-interface)
2. Extract the archive
3. Add the executable to your PATH (optional, but recommended)

## Basic Usage

Execute a flow with:

```bash
runecli path/to/flow/flow.json
```

## Command Line Options

```bash
runecli [options] <flow-path>
```

### Options

- `--cache-dir <path>`: Specify the cache directory
- `--flows-dir <path>`: Specify the flows directory
- `--output <format>`: Set output format (json, text, none)
- `--help`: Show help message

## Environment Variables

RUNE CLI respects environment variables that can be accessed in flows using the `getEnv()` function.

## Exit Codes

- `0`: Flow executed successfully
- `1`: Flow execution failed
- `2`: Invalid arguments or configuration error

## Examples

### Execute a Flow

```bash
runecli /path/to/myflow/flow.json
```

### Execute with Custom Directories

```bash
runecli --cache-dir /tmp/rune-cache --flows-dir /home/user/flows /path/to/myflow/flow.json
```

### Get JSON Output

```bash
runecli --output json /path/to/myflow/flow.json
```

## Integration Examples

### Shell Script

```bash
#!/bin/bash
if runecli /path/to/flow/flow.json; then
    echo "Flow executed successfully"
else
    echo "Flow execution failed"
    exit 1
fi
```

### CI/CD Pipeline

```yaml
- name: Execute RUNE Flow
  run: runecli --output json ./flows/deploy/flow.json
```

## Next Steps

- Learn about [flow structure](#) (coming soon)
- Explore [Luau API](/docs/luau/session-state) for scripting
- Check [node reference](/docs/nodes/branch) for available nodes

