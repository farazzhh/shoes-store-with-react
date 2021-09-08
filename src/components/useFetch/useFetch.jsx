import { ProductsContext } from "../../providers/ProductsContext";
import { useEffect, useState, useContext } from "react";

const useFetch = (url) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dataHandler(data);
        setIsPending(false);
      })
      .catch((err) => {
        alert("Something Worng");
      });
  }, [url]);
    
    return isPending
};

export default useFetch;
