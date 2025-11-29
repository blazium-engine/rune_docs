---
sidebar_position: 5
---

# MCP Triggered Event Node

The MCP Triggered Event node serves as an entry point for flow execution, triggered by external MCP clients (such as Cursor) via the MCP server.

![MCP Triggered Event Node](https://placehold.co/600x400/EEE/31343C)

## Description

The MCP Triggered Event node is a special event node that starts a flow when an MCP client calls the appropriate MCP tool (for example, `trigger_workflow` or `trigger_workflow_by_id`).  
It works similarly to the Button Event and Cron Event nodes, but is specifically designed to be triggered programmatically by external tools rather than by user interaction or a time schedule.

To use this node, your workflow must contain at least one MCP Triggered Event node. When the MCP server receives a trigger request for that workflow, execution begins from this node and continues along the connected execution links.

## Execution Inputs

None (this is an entry point node)

## Variable Inputs

None

## Execution Outputs

- **Trigger** (execution): Execution begins here when the workflow is triggered via MCP

## Variable Outputs

None

## Special Notes

- This node is only used when workflows are triggered via the MCP server
- The workflow must contain an MCP Triggered Event node in order to be triggered by MCP
- Execution starts from this node and then follows the normal execution links in the flow
- Works alongside other event nodes:
  - **Button Event**: Triggered manually via the UI
  - **Cron Event**: Triggered on a schedule
  - **MCP Triggered Event**: Triggered by external MCP clients

## Example Usage

Create a workflow that you want to trigger from an MCP client (such as Cursor).  
Add an MCP Triggered Event node from the **Events** category, connect its **Trigger** output to the first node in your logic, and save the workflow.  
From your MCP client, call the appropriate tool (like `trigger_workflow_by_id`) with the workflow ID; the flow will execute starting from this node.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*


