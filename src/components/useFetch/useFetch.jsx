import { ProductsContext } from "../../providers/ProductsContext";
import { useEffect, useState, useContext } from "react";

const useFetch = (url) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const [isPending, setIsPending] = useState(true);
  const abortCont = new AbortController();

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

    const importData = async () => {
      await import("../../data.json").then((res) => dataHandler(res.default.database));
      setIsPending(false);
    }
    importData();
  },[]);
    
    return {data,isPending}
};

export default useFetch;
