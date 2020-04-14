import React from "react";

const Cities = ({ cities }) => {
  const renderCities = cities.map((city, i) => {
    return (
      <li key={i}>
        <a href={`https://en.wikipedia.org/wiki/${city}`}>{city}</a>
      </li>
    );
  });
  return <ul>{renderCities}</ul>;
};

export default Cities;
