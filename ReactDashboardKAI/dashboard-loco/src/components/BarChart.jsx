import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Card, CardHeader, Heading } from "@chakra-ui/react";
import useLocoData from "../apis/LocoApi";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export const BarChart = () => {
  const { locoData } = useLocoData();

  // Membuat objek untuk menyimpan jumlah status
  const statusCounts = locoData.reduce((acc, entry) => {
    acc[entry.locoStatus] = (acc[entry.locoStatus] || 0) + 1;
    return acc;
  }, {});

  // Mengambil label dari status yang unik dan mengurutkannya berdasarkan count
  const labels = Object.keys(statusCounts).sort(
    (a, b) => statusCounts[a] - statusCounts[b]
  );

  // Mengambil data dari jumlah status sesuai dengan urutan label yang sudah diurutkan
  const dataValues = labels.map((status) => statusCounts[status] || 0);

  // Menentukan warna untuk setiap status
  const backgroundColors = labels.map((status) => {
    let color = "";
    // Tambahkan logika untuk menentukan warna berdasarkan status
    if (status === "Good") {
      color = "rgba(0, 128, 0, 0.8)";
    } else if (status === "Poor") {
      color = "rgba(255, 0, 0, 0.8)";
    } else if (status === "Excellent") {
      color = "rgba(255, 215, 0, 0.8)";
    } else {
      color = "rgba(169, 169, 169, 0.8)";
    }
    return color;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Status",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";
          if (label) {
            label += ": ";
          }
          label += "Count " + Math.round(tooltipItem.yLabel * 100) / 100;
          return label;
        },
      },
    },
  };

  return (
    <div>
      <Card minH="150px" borderRadius="12px">
        <CardHeader>
          <Heading size="lg">Count of Status</Heading>
        </CardHeader>
        <Bar height="150px" data={data} options={options} />
      </Card>
    </div>
  );
};
