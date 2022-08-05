const intitialState = {
  query: "",
  searchResults: [],
};

const recursiveSearch = (state: any, results: any, query: string) => {
  query = query.toLowerCase();
  const stName = state.name.toLowerCase();
  if (query && query !== "" && stName.includes(query)) {
    results.push(state);
  }
  for (let iterator in state?.children) {
    recursiveSearch(state.children[iterator], results, query);
  }
};

const searchResultReducer = (state = intitialState, action: any) => {
  switch (action.type) {
    case "SET_QUERY":
      const results = [] as any;
      if (action.payload.query === "") {
        const newState = {
          ...state,
          query: "",
          searchResults: [],
        };

        
      }
      recursiveSearch(
        action.payload?.globalState,
        results,
        action.payload?.query
      );
      const newState = {
        ...state,
        query: action.payload.query,
        searchResults: results,
      };
      
      return newState;

    default:
      return state;
  }
};


export default searchResultReducer;
