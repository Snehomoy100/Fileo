import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./search.css";

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
    >
      <g id="surface152943375">
        <path
          style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: "rgb(0%,0%,0%)",
            fillOpacity: 1,
          }}
          d="M 13.601562 6.601562 C 9.742188 6.601562 6.601562 9.742188 6.601562 13.601562 C 6.601562 17.457031 9.742188 20.601562 13.601562 20.601562 C 15.277344 20.601562 16.816406 20.003906 18.027344 19.015625 L 22.203125 23.195312 C 22.378906 23.378906 22.640625 23.453125 22.886719 23.386719 C 23.132812 23.324219 23.324219 23.132812 23.386719 22.886719 C 23.453125 22.640625 23.378906 22.378906 23.195312 22.203125 L 19.015625 18.027344 C 20.003906 16.816406 20.601562 15.277344 20.601562 13.601562 C 20.601562 9.742188 17.457031 6.601562 13.601562 6.601562 Z M 13.601562 8 C 16.699219 8 19.199219 10.5 19.199219 13.601562 C 19.199219 16.699219 16.699219 19.199219 13.601562 19.199219 C 10.5 19.199219 8 16.699219 8 13.601562 C 8 10.5 10.5 8 13.601562 8 Z M 13.601562 8 "
        />
      </g>
    </svg>
  );
};

const SearchResult = ({ name, url }: routeData) => {
  return (
    <div className="search-result-parent">
      <div className="search-result-name">{name}</div>
      <div className="search-result-path">{url}</div>
    </div>
  );
};

const Search = (props: AppProps) => {
  const [searchArray, setSearchArray] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchQueryArray, setSearchQueryArray] = useState<any>([]);
  const timeout = useRef<any>();

  useEffect(() => {
    const newSearchArray = props.routes.filter((data: routeData) =>
      data.url.includes(props.parentUrl)
    );
    setSearchArray([...newSearchArray]);
  }, [props.routes]);

  const handleSearchQuery = (event: any) => {
    clearTimeout(timeout.current);
    setSearchQuery(event.target.value);
    timeout.current = setTimeout(() => {
      try {
        const newSearchQueryArray = searchArray.filter((data: routeData) => {
          const name = data.name.toLowerCase();
          return name.includes(searchQuery.toLowerCase());
        });
        setSearchQueryArray([...newSearchQueryArray]);
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  return (
    <div className="search-parent">
      <span className="img">
        <SearchIcon />
      </span>
      <input
        className="search-input"
        value={searchQuery}
        placeholder="Search for anything"
        onChange={(e) => handleSearchQuery(e)}
      />
      <div className="search-result-list">
        {searchQuery.length > 0 &&
          searchQueryArray.map((data: routeData) => {
            return (
              <div key={data.url}>
                <Link to={data.url}>
                  <SearchResult {...data} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

type routeData = {
  id: string;
  name: string;
  url: string;
};

type AppProps = {
  routes: any;
  parentUrl: string;
};

const mapStateToProps = (state: any) => {
  return {
    routes: state.routes,
  };
};

export default connect(mapStateToProps)(Search);
