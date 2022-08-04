import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { getUid } from "../../utils/getUid";


import "./creationModal.css";

// props declaration
type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const CreationModal = ({ setIsOpen }: props) => {

  const dispatch = useDispatch();
  
  const [canCreateFile, setCanCreateFile] = useState(0);

  const [itemName, setItemName] = useState("");

  const [authorName, setAuthorName] = useState("");

  const [exactType, setExactType] = useState("");

  const createInside = useSelector((state: any) => state.currentFolder);

  

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
    dispatch(createItem({ createInside: createInside, item: data }));
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


    dispatch(createItem({ createInside: createInside, item: data }));
    setIsOpen(false);
  };

  return (
    <>
      <div className="cm20Background" onClick={() => setIsOpen(false)} />
      <div className="cm20Centered">
        <div className="cm20Modal">
          <div className=".cm20ModalHeader">
            <div className="cm20CloseBtn">
              <button
                className="cm20CloseBtn"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
            <h2 className="cm20Heading">Create New</h2>
          </div>
          <div className="cm20FileOrFolder">
            <span
              onClick={() => setCanCreateFile(0)}
              className={`cm20Btn ml291FolderButton ${
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



export default CreationModal;
