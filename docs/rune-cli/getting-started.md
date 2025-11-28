---
sidebar_position: 1
---

# RUNE CLI - Getting Started

RUNE CLI is the command-line tool for executing R.U.N.E. – Routing & Utility Node Editor flows without the graphical interface.

## Installation

1. Download RUNE CLI from [itch.io](https://blaziumengine.itch.io/rune-interface)
2. Extract the archive
3. Add the executable to your PATH (optional, but recommended)

## Basic Usage

Execute a flow by providing a direct path to the flow file:

```bash
runecli path/to/flow/flow.json
```

Or execute a flow by ID from the flows directory:

```bash
runecli --run-flow myflow
```

## Command Line Options

```bash
runecli [options] <flow-path>
runecli [options] --run-flow <flow-id>
```

### Options

- `--cache-dir <path>`: Specify the cache directory (overrides config)
- `--flows-dir <path>`: Specify the flows directory (overrides config)
- `--output <format>`: Set output format (`json`, `text`, `none`). Default: `text`
- `--log-level <level>`: Set log level (`debug`, `info`, `warn`, `error`)
- `--flow-log-mode <mode>`: Set flow log mode (`perflow`, `global`, `none`)
- `--run-flow <flow-id>`: Run flow by ID from flows directory
- `--help` or `-h`: Show help message

### Output Formats

- `json`: Output execution results as JSON (useful for automation)
- `text`: Output human-readable text summary (default)
- `none`: No output (silent mode)

## Environment Variables

RUNE CLI supports environment variables through `.env` files and the system environment. Variables can be accessed in flows using the `getEnv()` function.

### Environment File Loading

RUNE CLI automatically loads environment variables from `.env` files in the following order:

1. **Executable directory**: First checks for environment-specific file, then default
   - `{rune_env}.env` (if `RUNE_ENV` is set)
   - `.env`

2. **Flow directory**: Then checks flow-specific directory (overrides executable directory)
   - `{rune_env}.env` (if `RUNE_ENV` is set)
   - `.env`

Flow directory variables **override** executable directory variables when the same key exists.

### RUNE_ENV Variable

The `RUNE_ENV` system environment variable controls which environment-specific `.env` file is loaded. Valid values:

- `prod` or `production`: Loads `prod.env`
- `dev`, `develop`, or `development`: Loads `dev.env`
- `stage` or `staging`: Loads `stage.env`

If `RUNE_ENV` is not set or invalid, only `.env` files are loaded.

### Variable Substitution

Environment files support variable substitution using `${VAR}` or `$VAR` syntax:

```bash
# .env file
API_URL=https://api.example.com
API_KEY=secret123
FULL_URL=${API_URL}/v1?key=${API_KEY}
```

Variables are resolved first from previously loaded variables, then from system environment variables.

### Accessing Variables in Flows

Use the `getEnv()` function in Luau scripts:

```lua
local apiKey = getEnv("API_KEY")
local apiUrl = getEnv("API_URL", "https://default.example.com")  -- with default value
```

### Example Environment Setup

```bash
# Set environment
export RUNE_ENV=production

# .env file in executable directory
DATABASE_URL=postgres://prod-db.example.com
API_KEY=prod-key-123

# prod.env file in flow directory (overrides executable directory)
API_KEY=flow-specific-prod-key-456
```

## Exit Codes

- `0`: Flow executed successfully
- `1`: Flow execution failed
- `2`: Invalid arguments or configuration error

## Examples

### Execute a Flow by Path

```bash
runecli /path/to/myflow/flow.json
```

### Execute a Flow by ID

```bash
runecli --run-flow myflow
```

### Execute with Custom Directories

```bash
runecli --cache-dir /tmp/rune-cache --flows-dir /home/user/flows --run-flow myflow
```

### Get JSON Output

```bash
runecli --output json --run-flow myflow
```

### Silent Execution (No Output)

```bash
runecli --output none --run-flow myflow
```

### Set Log Level

```bash
runecli --log-level debug --run-flow myflow
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
  run: runecli --output json --run-flow deploy
  
- name: Execute with Environment
  env:
    RUNE_ENV: production
  run: runecli --output json --run-flow deploy
```

## Next Steps

- Learn about [flow structure](#) (coming soon)
- Explore [Luau API](/docs/luau/session-state) for scripting
- Check [node reference](/docs/nodes/branch) for available nodes

