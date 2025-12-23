---
sidebar_position: 12
---

# Git Submodule Init Node

The Git Submodule Init node initializes submodules in the repository.

![Git Submodule Init Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Submodule Init node initializes one or all submodules in the repository. This sets up the submodule configuration and prepares them for use, but doesn't clone the submodule content.

## Execution Inputs

- **In** (execution): Triggers initializing the submodules

## Variable Inputs

- **RepoPath** (string): Path to the parent Git repository
- **SubmodulePath** (string, optional): Path to a specific submodule to initialize. If empty, initializes all submodules

## Execution Outputs

- **Out** (execution): Execution continues here after initialization completes

## Variable Outputs

- **Success** (boolean): "true" if the initialization succeeded, "false" otherwise
- **InitializedCount** (integer): Number of submodules successfully initialized

## Special Notes

- SubmodulePath is relative to the repository root
- If SubmodulePath is empty, all submodules are initialized
- Initialization sets up the submodule configuration but doesn't clone content
- Use Git Submodule Update to actually fetch and checkout submodule content
- InitializedCount indicates how many submodules were initialized
- RepoPath must point to a valid Git repository

## Example Usage

Initialize all submodules:
1. Set RepoPath to the parent repository path
2. Leave SubmodulePath empty
3. Connect In to initialize
4. Check Success and InitializedCount outputs

Initialize a specific submodule:
1. Set RepoPath to the parent repository path
2. Set SubmodulePath to "vendor/submodule"
3. Connect In to initialize
4. Check Success output

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

