import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  //console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <article>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </article>
    </section>
  );
};

export default Tours;
