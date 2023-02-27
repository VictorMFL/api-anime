import axios from "axios";
import React from "react";
import Header from "./Components/Header";
import { AiFillStar } from "react-icons/ai";

const App = () => {
  const [data, setData] = React.useState(null);
  const [star, setStar] = React.useState(false);

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

  function starClick() {
    setStar((star) => !star);
  }

  if (data === null) return null;
  return (
    <>
      <Header />
      <div className="container">
        {data.data.map((item, index) => (
          <section key={index} className="dadosAnimes">
            <div className="imgAnime">
              <img src={item.images.jpg.image_url} alt={item.duration} />
              <div className="star">
                <AiFillStar
                  size={24}
                  className={star ? "favorito" : "naoFavorito"}
                  onClick={starClick}
                />
                <p>{item.favorites}</p>
              </div>
            </div>
            <div className="detalhesAnimes">
              <h1>{item.title}</h1>
              <p>{item.synopsis}</p>
            </div>
          </section>
        ))}
      </div>
      <h1></h1>
    </>
  );
};

export default App;
