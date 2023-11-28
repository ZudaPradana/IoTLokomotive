import { Box, Grid, GridItem } from "@chakra-ui/react";
import useLocoData from "../apis/LocoApi";
import { CardLoco } from "./CardLoco";
import { BarChart } from "./BarChart";
import { DonutChart } from "./DonatChart";

export const Dashboard = () => {
  // Gunakan useLocoData dengan statusFilter yang berbeda untuk setiap kartu
  const { totalData: totalDataGood } = useLocoData("Good");
  const { totalData: totalDataPoor } = useLocoData("Poor");
  const { totalData: totalDataExcellent } = useLocoData("Excellent");
  const { totalData: totalDataAll } = useLocoData();

  // Format angka ke dalam format '1.0k' jika lebih dari seribu
  const formatCount = (count) =>
    count >= 1000 ? (count / 1000).toFixed(2) + "k" : count.toString();

  return (
    <div>
      <Grid
        templateColumns={"repeat(4,1fr)"}
        sx={{ gap: "10px", mt: "20px", px: "10px" }}
      >
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Box>
            <CardLoco
              title={"Total Loco"}
              statusFilter={formatCount(totalDataAll)}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Box>
            <CardLoco
              title={"Status Good"}
              statusFilter={formatCount(totalDataGood)}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Box>
            <CardLoco
              title={"Status Poor"}
              statusFilter={formatCount(totalDataPoor)}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Box>
            <CardLoco
              title={"Status Excellent"}
              statusFilter={formatCount(totalDataExcellent)}
            />
          </Box>
        </GridItem>
      </Grid>
      <Grid mt="20px" px="10px" gap="10px" templateColumns={"repeat(12,1fr)"}>
        <GridItem colSpan={{ base: 12, xl: 6 }}>
          <BarChart />
        </GridItem>
        <GridItem colSpan={{ base: 12, xl: 6 }}>
          <DonutChart />
        </GridItem>
      </Grid>
    </div>
  );
};
