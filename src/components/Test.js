import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://172.16.18.152:5000/";

function Test() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL, {
        params: { word: "ab" },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  console.log(post);
  return <div></div>;
}

export default Test;
