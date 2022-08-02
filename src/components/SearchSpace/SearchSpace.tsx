import React from "react";
import { useSelector } from "react-redux";
import DashboardItems from "../dashboardItems/dashboardItems";


import "./searchSpace.css";


const SearchComponent = () => {
  const searchResults = useSelector((state: any) => state.search.searchResults);

  if (searchResults.length === 0) {
    return (
      <div className="sc910NotFoundContainer">
        <h2>No results found</h2>
      </div>
    );
  }
  return <DashboardItems items={searchResults} />;
};

export default SearchComponent;
