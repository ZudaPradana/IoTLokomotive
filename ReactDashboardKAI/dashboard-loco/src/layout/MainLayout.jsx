import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { Dashboard } from "../components/Dashboard";

const MainLayout = () => {
  return (
    <div>
      <Grid templateColumns={"repeat(5,1fr)"}>
        <GridItem
          as="aside"
          colSpan={{ base: 0, lg: 1, xl: 1 }} // Ubah menjadi 1 untuk menunjukkan bahwa sidebar akan menempati 1 kolom pada layar besar
          bg="blue.400"
          minHeight="100vh"
          p={{ base: "20px", lg: "30px" }}
          display={{ base: "none", lg: "block" }} // Tambahkan properti display untuk menyembunyikan sidebar pada layar kecil
        >
          <SideBar />
        </GridItem>
        <GridItem as="main" colSpan={{ base: 5, lg: 4, xl: 4 }}>
          <Navbar />
          <Dashboard />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MainLayout;
