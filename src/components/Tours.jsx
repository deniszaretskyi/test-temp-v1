import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../css/tours.css";
import loading from "../assets/bouncing-circles.svg";

const Tours = () => {
  const url = "https://www.course-api.com/react-tours-project";

  const [tours, setTours] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) return <h1>There is an error</h1>;
        const data = await resp.json();
        setTours(data);
        setOriginalData(data);
        setIsLoading(false);
      } catch (error) {}
    };
    getData();
  }, []);

  if (isLoading)
    return (
      <img
        style={{
          width: "40rem",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          margin: "auto",
        }}
        src={loading}
      ></img>
    );
  if (tours.length === 0)
    return (
      <>
        <Header title={"No more tours"} />
        <button
          onClick={() => setTours(originalData)}
          style={{
            fontSize: "4rem",
            width: "20rem",
            height: "10rem",
            margin: "auto",
            textAlign: "center",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            color: "#000",
          }}
          type="button"
        >
          Refresh
        </button>
      </>
    );
  return (
    <>
      <Header title={"Our Tours"} />
      <div className="toursContainer">
        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;

          const trimedInfo = () => {
            if (info.length > 200) {
              return info.slice(0, 200) + "...";
            }
            return info;
          };

          return (
            <div className="tourCard" key={id}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p id="info">{trimedInfo()}</p>

              <p id="price">${price}</p>
              <button
                onClick={() => setTours(tours.filter((tour) => tour.id !== id))}
                className="btn"
                type="button"
              >
                Not Intrested
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tours;
