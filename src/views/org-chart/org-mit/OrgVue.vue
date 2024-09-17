<template>
  <div id="chart-container">
    <h3>Organization Chart</h3>
    <organization-chart :datasource="ds">
      <template v-slot:default="{ nodeData }">
        <div class="custom-node">
          <div class="node-name">{{ nodeData.name }}</div>
          <!-- <div v-if="nodeData.shareholding">{{ nodeData.shareholding }}</div> -->
        </div>
      </template>
    </organization-chart>
  </div>
  <div>
    <button @click="handleClickHome">Go to Org Chart</button>
    <button @click="downloadChart">Download PDF</button>
  </div>
</template>

<script setup>
import OrganizationChart from "vue3-organization-chart";
import "vue3-organization-chart/dist/orgchart.css";
import { useRouter } from "vue-router";
import html2canvas from "html2canvas";
import jsPDF from "jsPDF";

const router = useRouter();

const ds = {
  id: "1",
  name: "Mesa",
  shareholding: "50%",
  children: [
    {
      id: "2",
      name: "Mesa Company",
      shareholding: "50%",
    },
    {
      id: "3",
      name: "April Summer",
      shareholding: "30%",
      children: [
        {
          id: "4",
          name: "Mesa Land",
          shareholding: "20%",
        },
        {
          id: "5",
          name: "Mesa Pizzalie",
          shareholding: "10%",
          children: [
            {
              id: "6",
              name: "Pang Pang",
              shareholding: "5%",
            },
            {
              id: "7",
              name: "Xiang Xiang",
              shareholding: "15%",
            },
          ],
        },
      ],
    },
  ],
};

// Navigate to org chart
function handleClickHome() {
  router.push("/org-chart");
}

// Download organization chart as PDF
function downloadChart() {
  const chartElement = document.getElementById("chart-container");
  if (chartElement) {
    html2canvas(chartElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a3");
      pdf.addImage(imgData, "PNG", 0, 0, 420, 297);
      pdf.save("organization-chart.pdf");
    });
  } else {
    console.error("Chart container not found");
  }
}
</script>

<style scoped>
/* Custom styles for nodes */
.custom-node {
  background-color: #f4f4f4; /* Background color for nodes */
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  
}

.chartNode {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    margin: 0 1px 2px 1px;
    max-width: 20px;
    text-align: center;
  }

.node-name {
  font-size: 16px;
  font-weight: bold;
}

.node-title {
  font-size: 14px;
  margin-top: 5px;
}

.node-shareholding {
  font-size: 12px;
  margin-top: 5px;
  color: #888;
}
.chartLeftLine {
    border: 1px solid ;
}
</style>
