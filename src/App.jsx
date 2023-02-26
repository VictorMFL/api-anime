import axios from "axios";
import React from "react";

const App = () => {
  const [data, setData] = React.useState(null);

  const get = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime", {
        headers: "Content-Type: application/json",
      });
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  React.useEffect(() => {
    get();
  }, []);

  if (data === null) return null;
  return (
    <div>
      {data.data.map((item) => (
        <img src={item.images.jpg.image_url} alt={item.duration} key={item.duration} />
      ))}
        <h1></h1>
    </div>
  );
};

export default App;
