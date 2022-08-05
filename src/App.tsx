import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideBar from "./components/SideBar/SideBar";
import SearchSpace from "./components/SearchSpace/SearchSpace";
import HomeView from "./views/HomeView/HomeView";
import FileView from "./views/FileView/FileView";
import FolderView from "./views/FolderView/FolderView";
import CreationModal from "./components/CreationModal/CreationModal";


import "./App.css";


import { GlobalTypes } from "./types/CustomInterfaces";
import { changeFolder } from "./redux/actionCreators/currentFolderActionCreator";

const App = () => {

  const data = useSelector((state: any) => state.fileFolder);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state?.search?.query);
  const { rootFolderDetails } = useSelector((state: GlobalTypes) => ({
    rootFolderDetails: state.fileFolder,
  }));
  const navigatge = useNavigate();
  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(changeFolder("root"));
      navigatge("/");
    }
  }, [searchQuery]);
  
  return (
    <div className="app10AppComponent">
      {open && <CreationModal setIsOpen={setOpen} />}
      <div className="app10Sidebar">
        <SideBar data={data} />
      </div>
      <div className="app10Dashboard">
        <NavigationBar setIsOpen={setOpen} isOpen={open} />

        <Routes>
          {searchQuery?.length > 0 ? (
            <Route path="/" element={<SearchSpace />} />
          ) : (
            <Route
              path="/"
              element={<HomeView children={rootFolderDetails.children} />}
            />
          )}

          <Route path="/:folderId" element={<FolderView />} />
          <Route path="/file/:query/:fileId" element={<FileView />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
