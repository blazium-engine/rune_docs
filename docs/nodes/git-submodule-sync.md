---
sidebar_position: 11
---

# Git Submodule Sync Node

The Git Submodule Sync node synchronizes submodule URLs with the parent repository configuration.

![Git Submodule Sync Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Submodule Sync node updates the submodule's remote URL to match the URL stored in the parent repository's .gitmodules file. This is useful when submodule URLs have changed.

## Execution Inputs

- **In** (execution): Triggers syncing the submodules

## Variable Inputs

- **RepoPath** (string): Path to the parent Git repository
- **SubmodulePath** (string, optional): Path to a specific submodule to sync. If empty, syncs all submodules

## Execution Outputs

- **Out** (execution): Execution continues here after syncing completes

## Variable Outputs

- **Success** (boolean): "true" if the sync succeeded, "false" otherwise
- **SyncedCount** (integer): Number of submodules successfully synced

## Special Notes

- SubmodulePath is relative to the repository root
- If SubmodulePath is empty, all submodules are synced
- This updates the submodule's remote URL configuration
- SyncedCount indicates how many submodules were synced
- RepoPath must point to a valid Git repository

## Example Usage

Sync all submodules:
1. Set RepoPath to the parent repository path
2. Leave SubmodulePath empty
3. Connect In to sync
4. Check Success and SyncedCount outputs

Sync a specific submodule:
1. Set RepoPath to the parent repository path
2. Set SubmodulePath to "vendor/submodule"
3. Connect In to sync
4. Check Success output

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

