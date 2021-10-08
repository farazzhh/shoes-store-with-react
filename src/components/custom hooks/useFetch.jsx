import { DataContext } from "../../providers/DataContext";
import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../../providers/LoadingContext";

const useFetch = (url) => {
  const [data, dataHandler, requestData, requestDataHandler] = useContext(DataContext);
   const { loading, setLoading } = useContext(LoadingContext);
  // const abortCont = new AbortController();

  useEffect(() => {
    // fetch(url,{signal: abortCont.signal})
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     dataHandler(data);
    // })
    // .catch((err) => {
    //     if (err.name === "AbortError") {
    //         console.log("fetch aborted");
            
    //     }
    // });

    const importData = () => {
      setLoading(true);
      import("../../data.json").then((res) => dataHandler(res.default.database));
      setLoading(false);
    }
    importData();


  },[]);
    
    return {data}
};

export default useFetch;
