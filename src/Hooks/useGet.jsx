import React, {useState, useEffect} from "react";
import axios from "axios"

export function useGet(token) {
    console.log(token)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    let config = {
        method: "get",
        url: "http://localhost:4000/api/user/details",
        headers: {
            "Authorization": "Bearer " + token
        }
    }
  
    useEffect(() => {
      axios(config)
        .then(res => res.json())
        .then(res => {
          console.log(res, "RES")
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        });
    }, [token]);
  
    return {
      loading,
      data,
      error
    };
  }