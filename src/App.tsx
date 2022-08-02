import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import FileComponent from "./pages/fileComponent/fileComponent";
import HomePage from "./pages/homePage/homePage";
import FolderComponent from "./pages/folderComponent/folderComponent";
import Sidebar from "./components/SideBar/SideBar";
import Modal from "./components/CreationModal/CreationModal";
import Navbar from "./components/NavigationBar/NavigationBar";
import SearchComponent from "./components/SearchSpace/SearchSpace";

import "./App.css";
import { globalType } from "./types/interfaces";
import { changeFolder } from "./redux/actionCreators/currentFolderActionCreator";

const App = (props: any) => {

  const data = useSelector((state: any) => state.fileFolder);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state?.search?.query);
  const { rootFolderDetails } = useSelector((state: globalType) => ({
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
      {open && <Modal setIsOpen={setOpen} />}
      <div className="app11Sidebar">
        <Sidebar data={data} />
      </div>
      <div className="app12Dashboard">
        <Navbar setIsOpen={setOpen} isOpen={open} />

        <Routes>
          {searchQuery?.length > 0 ? (
            <Route path="/" element={<SearchComponent />} />
          ) : (
            <Route
              path="/"
              element={<HomePage children={rootFolderDetails.children} />}
            />
          )}

          <Route path="/:folderId" element={<FolderComponent />} />
          <Route path="/file/:query/:fileId" element={<FileComponent />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
