import { ProductsContext } from "../../providers/ProductsContext";
import { useEffect, useState, useContext } from "react";

const useFetch = (url) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const [isPending, setIsPending] = useState(true);
  const abortCont = new AbortController();

  useEffect(() => {
    fetch(url,{signal: abortCont.signal})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dataHandler(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          alert("Something Worng");
        }
      });
      return () => abortCont.abort();
  }, [url]);

  return isPending;
};

export default useFetch;
