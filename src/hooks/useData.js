import { useState, useEffect } from "react";
import axios from "axios";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(url);
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  if (isFetch) {
    return "Data is Loading ...";
  }

  return data;
};

export default useData;
