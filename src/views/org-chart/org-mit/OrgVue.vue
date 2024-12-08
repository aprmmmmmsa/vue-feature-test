<template>
  <div id="chart-container" class="chart-container">
    <h3>Organization Chart</h3>
    <organization-chart :datasource="ds">
      <template v-slot:default="{ nodeData }">
        <div class="custom-node">
          <div class="node-name">{{ nodeData.name }}</div>
          <div v-if="nodeData.shareholding" class="label-shareholding">
            {{ nodeData.shareholding }}
          </div>

          <div v-if="nodeData.shareholders" class="shareholders">
            <div
              v-for="(shareholder, index) in nodeData.shareholders"
              :key="index"
              class="shareholder-row"
            >
              <div class="shareholder-name">{{ shareholder.name }}</div>
              <div class="shareholder-shareholding">
                {{ shareholder.shareholding }}
              </div>
            </div>
          </div>
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
  id: 1,
  name: "Mesa Company",
  children: [
    {
      id: 2,
      name: "Mini Mesa Mart",
      shareholding: "70%",
      children: [
        {
          id: 3,
          name: "Mesa",
          shareholding: "50%",
        },
        {
          id: 4,
          name: "Moji",
          shareholding: "50%",
        },
      ],
    },
    {
      id: 5,
      name: "April Hotel",
      shareholding: "30%",
      children: [
        {
          id: 6,
          name: "Mesa Land",
          shareholding: "90%",
        },
        {
          id: 7,
          name: "Mesa Bekery",
          shareholding: "10%",
          children: [
            {
              id: 8,
              name: "Pang Pang",
              shareholding: "51%",
            },
            {
              id: 9,
              name: "Xiang Xiang",
              shareholding: "49%",
            },
          ],
        },
        {
          id: 10,
          name: "Mesa1",
          shareholders: [
            { name: "Mesa 1", shareholding: "99%" },
            { name: "Moji 1", shareholding: "99%" },
            { name: "Moji 2", shareholding: "99%" },
            { name: "Moji 2", shareholding: "99%" },
          ],
        },
        {
          id: 11,
          name: "Mesa2",
          shareholders: [
            { name: "Khamint", shareholding: "99%" },
            { name: "Tufu", shareholding: "99%" },
            { name: "K.M 2", shareholding: "99%" },
            { name: "T.H 2", shareholding: "99%" },
          ],
        },
      ],
    },
  ],
};

function handleClickHome() {
  router.push("/org-chart");
}

function downloadChart() {
  const chartElement = document.getElementById("chart-container");
  if (chartElement) {
    html2canvas(chartElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a3");
      // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
      pdf.addImage(imgData, "PNG", 30, 50, 350, 200);
      pdf.save("organization-chart.pdf");
    });
  } else {
    console.error("Chart container not found");
  }
}
</script>

<style scoped>
.chart-area {
  border: none;
}

.custom-node {
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  
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

.label-shareholding {
  position: absolute;
  left: 35%;
  top: -20px;
  transform: translateX(-50%);
  font-size: 12px;
  color: #555;
}

.shareholders {
  display: flex;
  flex-direction: column;
}

.shareholder-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0;
}

.shareholder-name {
  text-align: left;
  flex-grow: 1;
}

.shareholder-shareholding {
  text-align: right;
  flex-shrink: 0;
}
</style>
