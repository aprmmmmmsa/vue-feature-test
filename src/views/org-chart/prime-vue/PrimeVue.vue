<!-- <template>
  <div>
    <h1>Organization Chart</h1>
    <div class="card overflow-x-auto" id="chart-container">
      <OrganizationChart :value="data" class="custom-org-chart">
        <template #default="{ node }">
          <div class="custom-node">
            <span>{{ node.label }}</span>
          </div>
        </template>
      </OrganizationChart>
    </div>

    <div btn-group>
      <button @click="downloadChart">Export as PDF</button>
      <button type="button" @click="handleClickHome">Back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import OrganizationChart from "primevue/organizationchart";
import html2canvas from "html2canvas";
import jsPDF from "jsPDF";

const data = ref({
  label: "Argentina",
  connectionText: "50%",
  children: [
    {
      label: "Argentina",
      connectionText: "50%",
      children: [
        {
          label: "Argentina",
        },
        {
          label: "Croatia",
        },
      ],
    },
    {
      label: "France",
      connectionText: "50%",
      children: [
        {
          label: "France",
        },
        {
          label: "Morocco",
        },
      ],
    },
  ],
});

const router = useRouter(); // Initialize useRouter within setup

function handleClickHome() {
  router.push("/org-chart"); // Navigate to home
}

function downloadChart() {
  const chartElement = document.getElementById("chart-container");
  html2canvas(chartElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a3");
    pdf.addImage(imgData, "PNG", 0, 0, 420, 297);
    pdf.save("organization-chart.pdf");
  });
}
</script>

<style scoped>
.custom-node {
  border: 1px solid #333;
  padding: 15px;
  border-radius: 10px;
  background-color: #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5px;
}

/* Additional styles for node text */
.custom-node span {
  font-size: 14px;
  color: #333;
}

.organization-chart-wrapper {
  position: relative;
}

.custom-node {
  text-align: center;
  position: relative;
}

/* Customize the lines connecting the nodes */
.p-organizationchart .p-organizationchart-node-connector {
    border-color: #ff6347; /* Example: Set the line color to tomato */
    border-width: 2px;     /* Example: Set the line thickness */
}

.p-organizationchart .p-organizationchart-node-connector::before {
    background-color: #ff6347; /* Example: Customize the line's vertical segment */
}

.p-organizationchart-connector-down{
  stroke: #ff6347;
  stroke-width: 1px;
}

</style> -->


<template>
  <div class="organization-chart-wrapper">
    <OrganizationChart :value="data" :node-template="nodeTemplate" />
  </div>
</template>

<script>
import OrganizationChart from 'primevue/organizationchart';

export default {
  components: { OrganizationChart },
  data() {
    return {
      data: [
        {
          label: 'CEO',
          expanded: true,
          children: [
            {
              label: 'CTO',
              connectionText: 'Oversees',
              children: [
                { label: 'Dev Team 1' },
                { label: 'Dev Team 2' }
              ]
            },
            {
              label: 'CFO',
              connectionText: 'Manages',
              children: [{ label: 'Finance Team' }]
            }
          ]
        }
      ]
    };
  },
  methods: {
    nodeTemplate(node) {
      return (
        <div class="custom-node">
          <div class="node-label">{{ node.label }}</div>
          <div v-if="node.connectionText" class="connection-text">{{ node.connectionText }}</div>
        </div>
      );
    }
  }
};
</script>

<style scoped>
.organization-chart-wrapper {
  position: relative;
}

.custom-node {
  text-align: center;
  position: relative;
}

.connection-text {
  position: absolute;
  top: 50%; /* Adjust as necessary /
  left: 50%; / Adjust the position between the parent and child /
  transform: translate(-50%, -50%);
  background-color: white; / So it appears over the line /
  padding: 0 5px;
  font-size: 12px;
  color: #333;
  z-index: 1; / Ensure it's above the lines */
}

.p-organizationchart .p-organizationchart-node-content {
  position: relative;
}
</style>