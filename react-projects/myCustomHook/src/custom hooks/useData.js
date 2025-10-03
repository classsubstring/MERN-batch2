import React, { useEffect, useState } from "react";

function useData(url) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setResponse(data));
  }, []);
  return response;
}

export default useData;
