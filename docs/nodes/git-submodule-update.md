---
sidebar_position: 10
---

# Git Submodule Update Node

The Git Submodule Update node updates submodules to their configured commit.

![Git Submodule Update Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Submodule Update node updates one or all submodules in the repository to the commit specified in the parent repository. This fetches and checks out the correct commit for each submodule.

## Execution Inputs

- **In** (execution): Triggers updating the submodules

## Variable Inputs

- **RepoPath** (string): Path to the parent Git repository
- **SubmodulePath** (string, optional): Path to a specific submodule to update. If empty, updates all submodules
- **InitIfNeeded** (boolean, optional): Whether to initialize submodules if they haven't been initialized (default: false)
- **Recursive** (boolean, optional): Whether to recursively update nested submodules (default: false)

## Execution Outputs

- **Out** (execution): Execution continues here after updating completes

## Variable Outputs

- **Success** (boolean): "true" if the update succeeded, "false" otherwise
- **UpdatedCount** (integer): Number of submodules successfully updated

## Special Notes

- SubmodulePath is relative to the repository root
- If SubmodulePath is empty, all submodules are updated
- InitIfNeeded will initialize submodules before updating if they haven't been initialized
- Recursive updates nested submodules within submodules
- UpdatedCount indicates how many submodules were updated
- RepoPath must point to a valid Git repository

## Example Usage

Update all submodules:
1. Set RepoPath to the parent repository path
2. Leave SubmodulePath empty
3. Set InitIfNeeded to true if needed
4. Set Recursive to true for nested submodules
5. Connect In to update
6. Check Success and UpdatedCount outputs

Update a specific submodule:
1. Set RepoPath to the parent repository path
2. Set SubmodulePath to "vendor/submodule"
3. Connect In to update
4. Check Success output

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

