import axios from "axios";
import React from "react";
import Header from "./Components/Header";

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
      <Header />
      {data.data.map((item, index) => (
        <section key={index} className='container'>
        <img src={item.images.jpg.image_url} alt={item.duration}/>
        <h1>{item.title}</h1>
        <p>{item.synopsis}</p>
        </section>
      ))}
        <h1></h1>
    </div>
  );
};

export default App;
