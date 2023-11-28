// LocoApi.js
import { useState, useEffect } from "react";

const useLocoData = (statusFilter) => {
  const [locoData, setLocoData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = statusFilter
      ? `http://localhost:8080/api/getDataRaw?status=${statusFilter}`
      : "http://localhost:8080/api/getDataRaw";

    fetch(apiUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setLocoData(data);
        setTotalData(data.length);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [statusFilter, locoData, totalData]);

  return { locoData, totalData, isLoading };
};

export default useLocoData;
