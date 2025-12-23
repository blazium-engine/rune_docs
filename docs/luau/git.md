---
sidebar_position: 6
---

# Git Functions

The Git category provides Git repository operations that mirror the functionality of Git nodes.

## Available Functions

### Repository Operations

- **`Git.init(path)`** - Initializes a new Git repository
- **`Git.clone(url, path, options)`** - Clones a repository from a URL
- **`Git.pull(path, remote, branch)`** - Pulls changes from remote repository

### Staging Operations

- **`Git.addFile(path, filePath)`** - Adds a single file to staging
- **`Git.addFiles(path, filePaths)`** - Adds multiple files to staging
- **`Git.addFolder(path, folderPath)`** - Adds a folder to staging

### Commit and Push

- **`Git.commit(path, message, author, email)`** - Creates a commit
- **`Git.push(path, remote, branch)`** - Pushes commits to remote repository

### Submodule Operations

- **`Git.submoduleAdd(path, url, submodulePath)`** - Adds a submodule
- **`Git.submoduleUpdate(path, submodulePath)`** - Updates a submodule
- **`Git.submoduleSync(path, submodulePath)`** - Syncs submodule URL
- **`Git.submoduleInit(path, submodulePath)`** - Initializes a submodule
- **`Git.submoduleDeinit(path, submodulePath)`** - Deinitializes a submodule

## Examples

### Repository Setup

```lua
-- Initialize repository
local result = Git.init("./my-repo")
if result.Success then
    Logger.info("Repository initialized")
end

-- Clone repository
local result = Git.clone("https://github.com/user/repo.git", "./repo", {
    Branch = "main",
    Depth = 1,
    IsBare = false,
    CheckoutBranch = true
})
if result.Success then
    Logger.info("Cloned to: " .. result.RepositoryPath)
end
```

### Working with Files

```lua
-- Add files
Git.addFile("./repo", "file.txt")
Git.addFiles("./repo", {"file1.txt", "file2.txt"})
Git.addFolder("./repo", "src/")

-- Commit
local result = Git.commit("./repo", "Initial commit", "John Doe", "john@example.com")
if result.Success then
    Logger.info("Committed: " .. result.CommitHash)
end

-- Push
local result = Git.push("./repo", "origin", "main")
if result.Success then
    Logger.info("Pushed successfully")
end
```

### Submodules

```lua
-- Add submodule
Git.submoduleAdd("./repo", "https://github.com/user/submodule.git", "submodules/lib")

-- Update submodule
Git.submoduleUpdate("./repo", "submodules/lib")

-- Initialize submodule
Git.submoduleInit("./repo", "submodules/lib")
```

## Parameters

- **`path`** - Path to the Git repository
- **`url`** - Repository URL
- **`filePath`** - Path to file (relative to repository)
- **`filePaths`** - Array of file paths
- **`folderPath`** - Path to folder (relative to repository)
- **`message`** - Commit message
- **`author`** - Author name
- **`email`** - Author email
- **`remote`** - Remote name (e.g., "origin")
- **`branch`** - Branch name
- **`options`** - Table with options (Branch, Depth, IsBare, CheckoutBranch)

## Return Values

Most functions return a table with:
- **`Success`** - Boolean indicating success
- **`RepositoryPath`** - Path to the repository (for clone)
- **`CommitHash`** - Commit hash (for commit operations)

## Related Nodes

- [GitInit Node](/docs/nodes/git-init)
- [GitClone Node](/docs/nodes/git-clone)
- [GitPull Node](/docs/nodes/git-pull)
- [GitAddFile Node](/docs/nodes/git-add-file)
- [GitAddFiles Node](/docs/nodes/git-add-files)
- [GitAddFolder Node](/docs/nodes/git-add-folder)
- [GitCommit Node](/docs/nodes/git-commit)
- [GitPush Node](/docs/nodes/git-push)
- [GitSubmoduleAdd Node](/docs/nodes/git-submodule-add)
- And other Git nodes...

