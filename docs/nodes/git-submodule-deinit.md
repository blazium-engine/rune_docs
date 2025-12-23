---
sidebar_position: 13
---

# Git Submodule Deinit Node

The Git Submodule Deinit node deinitializes submodules in the repository.

![Git Submodule Deinit Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Submodule Deinit node removes submodule configuration from the repository. This removes the submodule from Git's configuration but doesn't delete the submodule files.

## Execution Inputs

- **In** (execution): Triggers deinitializing the submodules

## Variable Inputs

- **RepoPath** (string): Path to the parent Git repository
- **SubmodulePath** (string, optional): Path to a specific submodule to deinitialize. If empty, deinitializes all submodules
- **Force** (boolean, optional): Whether to force deinitialization even if there are local changes (default: false)

## Execution Outputs

- **Out** (execution): Execution continues here after deinitialization completes

## Variable Outputs

- **Success** (boolean): "true" if the deinitialization succeeded, "false" otherwise
- **DeinitializedCount** (integer): Number of submodules successfully deinitialized

## Special Notes

- SubmodulePath is relative to the repository root
- If SubmodulePath is empty, all submodules are deinitialized
- Deinitialization removes submodule configuration from .git/config
- The submodule files remain on disk unless manually deleted
- Force allows deinitialization even with local changes
- DeinitializedCount indicates how many submodules were deinitialized
- RepoPath must point to a valid Git repository

## Example Usage

Deinitialize all submodules:
1. Set RepoPath to the parent repository path
2. Leave SubmodulePath empty
3. Set Force to true if needed
4. Connect In to deinitialize
5. Check Success and DeinitializedCount outputs

Deinitialize a specific submodule:
1. Set RepoPath to the parent repository path
2. Set SubmodulePath to "vendor/submodule"
3. Connect In to deinitialize
4. Check Success output

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

