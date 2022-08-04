import { useSelector } from "react-redux";
import DashboardItems from "../DashboardElements/DashboardElements";
import noResultsFound from "../../assets/noResultsFound.svg";

import "./searchSpace.css";


const SearchSpace = () => {
  const searchResults = useSelector((state: any) => state.search.searchResults);

  if (searchResults.length === 0) {
    return (
      <div className="ss40CouldntFindContainer">
        <img src={noResultsFound} alt="no result" className="ss40CouldntFoundImage" />
        <h2>Oops...! No results found</h2>
      </div>
    );
  }
  return <DashboardItems items={searchResults} />;
};

export default SearchSpace;
