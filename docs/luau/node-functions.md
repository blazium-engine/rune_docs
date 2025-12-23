# Node Functions

The Luau scripting integration provides access to all specialty node functionality as callable functions. This allows you to use node capabilities either through visual nodes in the flow editor or through function calls in Luau scripts, giving you flexibility to choose the best approach for your workflow.

## Overview

All node functions are automatically registered and organized by category. Functions are available in the global namespace using the pattern:

```lua
Category.functionName(...)
```

For example:
- `Math.add(5, 3)` - Adds two numbers
- `String.concat("Hello", " World")` - Concatenates two strings
- `Git.clone(url, path)` - Clones a git repository

## Function Organization

Functions are organized by node category:

- **[Math Functions](math.md)** - Mathematical operations (add, subtract, multiply, etc.)
- **[String Functions](string.md)** - String manipulation (concat, substring, etc.)
- **[Conversion Functions](conversion.md)** - Type conversions (stringToInteger, etc.)
- **[Cryptography Functions](crypto.md)** - Cryptographic operations (hash, hmac, sign)
- **[File Operations](file-operations.md)** - File system operations (exists, getFiles, etc.)
- **[Git Functions](git.md)** - Git operations (clone, pull, commit, etc.)
- **[YAML Functions](yaml.md)** - YAML parsing and generation
- **[JSON Functions](json.md)** - JSON parsing and validation
- **[CSV Functions](csv.md)** - CSV parsing and generation
- **[INI Functions](ini.md)** - INI file parsing and generation
- **[Semver Functions](semver.md)** - Semantic versioning operations
- **[OpenAI Functions](openai.md)** - OpenAI API integration
- **[Comparison Functions](comparison.md)** - Comparison operations

## Parameter Passing

Functions support two parameter passing styles:

### Positional Parameters

```lua
local result = Math.add(5, 3)
```

### Named Parameters (via table)

```lua
local result = Math.add({A = 5, B = 3})
```

## Return Values

- **Single output**: Returns the value directly
  ```lua
  local sum = Math.add(5, 3)  -- Returns 8
  ```

- **Multiple outputs**: Returns a table with named keys
  ```lua
  local result = Git.clone(url, path)
  -- result.Success = true/false
  -- result.RepositoryPath = "/path/to/repo"
  ```

## Type Conversion

The system automatically converts between Lua types and node pin types:

- Lua `string` → node `string` pin
- Lua `number` → node `number`/`integer`/`float` pin (auto-detected)
- Lua `boolean` → node `boolean` pin
- Lua `table` → JSON string for complex types

Outputs are converted back to appropriate Lua types:
- `boolean` pins → Lua boolean
- `number`/`integer`/`float` pins → Lua number
- `string` pins → Lua string

## Error Handling

Functions use Lua's standard error handling. If a function fails, it will raise an error that can be caught with `pcall`:

```lua
local success, result = pcall(function()
    return Math.add(5, 3)
end)

if not success then
    print("Error: " .. result)
end
```

## Nodes Not Available as Functions

The following node types are not exposed as functions (they are flow control mechanisms):

- **Event nodes**: ButtonEvent, CronEvent, MCPTriggered, OpenAITriggered
- **Control flow nodes**: Branch, Sequence, Foreach, DoN
- **Flow terminators**: Success, Failed
- **Workflow trigger**: TriggerFlow (use `triggerWorkflow()` function instead)

## Examples

### Math Operations

```lua
local sum = Math.add(10, 20)
local product = Math.mul(5, 6)
local power = Math.pow(2, 8)
```

### String Operations

```lua
local combined = String.concat("Hello", " World")
local left = String.left("Hello World", 5)  -- Returns "Hello"
local right = String.right("Hello World", 5)  -- Returns "World"
```

### File Operations

```lua
if File.exists("config.json") then
    local content = File.loadText("config.json")
    print(content)
end
```

### Git Operations

```lua
local result = Git.clone("https://github.com/user/repo.git", "./repo")
if result.Success then
    print("Cloned to: " .. result.RepositoryPath)
end
```

## Compatibility with Existing APIs

Some functionality is available through both node functions and existing Luau APIs:

- **File operations**: `FlowFile.read/write/exists/list` vs `File.*` functions
- **YAML**: `parseYamlString/parseYamlFile` vs `YAML.*` functions
- **JSON**: `parseJsonString/parseJsonFile` vs `JSON.*` functions
- **CSV**: `parseCsvString/parseCsvFile` vs `CSV.*` functions
- **INI**: `parseIniString/parseIniFile` vs `INI.*` functions

Both APIs are maintained for backward compatibility. Node functions are recommended for consistency with the visual node system.

## See Also

- [Math Functions](math.md)
- [String Functions](string.md)
- [Cryptography Functions](crypto.md)
- [Git Functions](git.md)
- [File Operations](file-operations.md)
- [Conversion Functions](conversion.md)
- [Semver Functions](semver.md)
- [OpenAI Functions](openai.md)
- [Comparison Functions](comparison.md)

