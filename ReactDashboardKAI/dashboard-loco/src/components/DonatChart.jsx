import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Card, CardHeader, Heading } from "@chakra-ui/react";
import useLocoData from "../apis/LocoApi";

ChartJS.register(DoughnutController, ArcElement, Legend, Tooltip);

export const DonutChart = () => {
  const { locoData } = useLocoData();

  // Membuat objek untuk menyimpan jumlah status
  const locoCounts = locoData.reduce((acc, entry) => {
    acc[entry.locoName] = (acc[entry.locoName] || 0) + 1;
    return acc;
  }, {});

  // Mengambil label dari status yang unik
  const labels = Object.keys(locoCounts);

  // Mengambil data dari jumlah status sesuai dengan urutan label yang sudah diurutkan
  const dataValues = labels.map((name) => locoCounts[name] || 0);

  // Menentukan warna untuk setiap status
  const backgroundColors = labels.map((name) => {
    let color = "";
    // Tambahkan logika untuk menentukan warna berdasarkan status
    if (name === "B2503") {
      color = "rgba(66, 70, 50, 0.8)";
    } else if (name === "D1410") {
      color = "rgba(2, 86, 105, 0.8)";
    } else if (name === "E1060") {
      color = "rgba(244, 169, 0, 0.8)";
    } else if (name === "D52099") {
      color = "rgba(71, 74, 81, 0.8)";
    } else if (name === "B5112") {
      color = "rgba(220, 156, 0, 0.8)";
    } else if (name === "C1218") {
      color = "rgba(153, 153, 80, 0.8)";
    } else if (name === "B2502") {
      color = "rgba(138, 149, 151, 0.8)";
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
        display: false, // Menyembunyikan sumbu y (y-axis)
      },
    },
  };

  return (
    <div>
      <Card minH="150px" borderRadius="12px">
        <CardHeader>
          <Heading size="lg">Count of Loco Name</Heading>
        </CardHeader>
        <Doughnut height="120px" data={data} options={options} />
      </Card>
    </div>
  );
};
