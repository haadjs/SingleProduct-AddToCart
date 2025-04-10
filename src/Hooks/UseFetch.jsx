import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
    return [ data, loading, error ];
};

export default UseFetch;
