import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnyItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { getUid } from "../../utils/getUid";


import "./creationModal.css";


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
    dispatch(createAnyItem({ createInside: createInside, item: data }));
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


    dispatch(createAnyItem({ createInside: createInside, item: data }));
    setIsOpen(false);
  };

  return (
    <>
      <div className="cm20Background" onClick={() => setIsOpen(false)} />
      <div className="cm20Centered">
        <div className="cm20Modal">
          <div className=".cm20ModalHeader">
            <div className="cm20CloseBtnDiv">
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
              className={`cm20Btn cm20FolderButton ${
                canCreateFile == 0 ? "cm20ActiveBtn" : ""
              }`}
            >
              Folder
            </span>
            <span
              onClick={() => setCanCreateFile(1)}
              className={`cm20Btn cm20FileButton ${
                canCreateFile == 1 ? "cm20ActiveBtn" : ""
              }`}
            >
              File
            </span>
          </div> 
          <div className="cm20ModalContent">
            <input
              className="cm20ModalInput"
              required
              placeholder="Enter name: "
              onChange={(e) => {
                e.preventDefault();
                setItemName(e.target.value);
              }}
            />
            <br />
            <input
              className="cm20ModalInput"
              placeholder="Enter Type: "
              onChange={(e) => setExactType(e.target.value)}
            />
            <br />
            <input
              className="cm20ModalInput"
              placeholder="Enter creator's name: "
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="cm20ModalActions">
            <div className="cm20ActionsContainer">
              {canCreateFile == 1 ? (
                <button onClick={handleFileCreation} className="cm20createBtn">
                  Create File
                </button>
              ) : (
                <button onClick={handleCreateFolder} className="cm20createBtn">
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


// props declaration
type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export default CreationModal;
