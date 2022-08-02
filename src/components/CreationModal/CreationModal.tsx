import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { getUid } from "../../utils/getUid";


import "./creationModal.css";

// props declaration
type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Modal = ({ setIsOpen }: props) => {

  const dispatch = useDispatch();
  
  const [canCreateFile, setCanCreateFile] = useState(0);

  const [itemName, setItemName] = useState("");

  const [authorName, setAuthorName] = useState("");

  const [exactType, setExactType] = useState("");

  const createNest = useSelector((state: any) => state.currentFolder);

  

  const handleCreateFolder = () => {
    const data = {
      name: itemName,
      id: getUid(),
      isFolder: true,
      children: [],
      type: exactType,
      creator: authorName,
      createdAt: new Date().toLocaleDateString(),
    };
    dispatch(createItem({ createInside: createNest, item: data }));
    setIsOpen(false);
  };

  const handleFileCreation = () => {

    const data = {
      name: itemName,
      id: getUid(),
      isFolder: false,
      children: [],
      creator: authorName,
      type: exactType,
      createdAt: new Date().toLocaleDateString(),
    };


    dispatch(createItem({ createInside: createNest, item: data }));
    setIsOpen(false);
  };

  return (
    <>
      <div className="ml900DarkBG" onClick={() => setIsOpen(false)} />
      <div className="ml019Centered">
        <div className="ml287Modal">
          <div className=".ml100ModalHeader">
            <div className="ml222CloseBtn">
              <button
                className="ml019CloseBtn"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <h2 className="ml001Heading">Create New</h2>
          </div>
          <div className="ml180FileOrFolder">
            <span
              onClick={() => setCanCreateFile(0)}
              className={`ml094Btn ml291FolderButton ${
                canCreateFile == 0 ? "ml129ActiveBtn" : ""
              }`}
            >
              Folder
            </span>
            <span
              onClick={() => setCanCreateFile(1)}
              className={`ml094Btn ml294FileButton ${
                canCreateFile == 1 ? "ml129ActiveBtn" : ""
              }`}
            >
              File
            </span>
          </div> 
          <div className="ml291ModalContent">
            <input
              className="ml501ModalInput"
              placeholder="Name"
              onChange={(e) => setItemName(e.target.value)}
            />
            <br />
            <input
              className="ml501ModalInput"
              placeholder="Type"
              onChange={(e) => setExactType(e.target.value)}
            />
            <br />
            <input
              className="ml501ModalInput"
              placeholder="Creator"
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="ml481ModalActions">
            <div className="ml978ActionsContainer">
              {canCreateFile == 1 ? (
                <button onClick={handleFileCreation} className="ml012createBtn">
                  Create File
                </button>
              ) : (
                <button onClick={handleCreateFolder} className="ml012createBtn">
                  Create Folder
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Modal;
