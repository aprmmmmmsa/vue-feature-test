<template>
    <li>
      <div class="node-container">
        <!-- Display the node content -->
        <div class="node-content">{{ node.name }}</div>
        
        <!-- Line label for shareholding if available -->
        <div v-if="node.shareholding" class="line-label">{{ node.shareholding }}</div>
      </div>
  
      <!-- Display child nodes if available -->
      <ul v-if="node.children" class="child-nodes">
        <tree-node
          v-for="(child, index) in node.children"
          :key="index"
          :node="child"
        />
      </ul>
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface TreeNode {
    name: string;
    shareholding?: string;
    children?: TreeNode[];
  }
  
  export default defineComponent({
    name: 'TreeNode',
    props: {
      node: {
        type: Object as () => TreeNode,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    padding-top: 20px;
    display: flex;
    flex-direction: row; /* Make the children align horizontally */
    position: relative;
  }
  
  li {
    display: flex;
    flex-direction: column; /* Stack nodes vertically within a column */
    align-items: center;
    margin-right: 40px;
  }
  
  /* Node styling */
  .node-content {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    font-weight: bold;
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  
  /* Line label styling (shareholding percentages) */
  .line-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid #ddd;
  }
  
  /* Horizontal line between nodes */
  li::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    width: 40px;
    height: 1px;
    background: #000;
  }
  
  /* Vertical line connecting the parent node to the children */
  li::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    height: 40px;
    width: 1px;
    background: #000;
  }
  
  .child-nodes {
    display: flex;
    flex-direction: row;
  }
  </style>
  