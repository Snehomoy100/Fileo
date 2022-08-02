import { useSelector } from "react-redux";

const intitialState = {
  query: "",
  searchResults: [],
};

const searchRecursive = (state: any, results: any, query: string) => {
  query = query.toLowerCase();
  const stName = state.name.toLowerCase();
  if (query && query !== "" && stName.includes(query)) {
    results.push(state);
  }
  for (let k in state?.children) {
    searchRecursive(state.children[k], results, query);
  }
};

const searchReducer = (state = intitialState, action: any) => {
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
      searchRecursive(
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
export default searchReducer;
