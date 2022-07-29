import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./createFolder.css";

import { addRoute, addFolder, hideCreateFolderModal } from "../../store/actions";
import Modal from "../../common/modal/modal";
import ToggleTab from "../../common/toggleTab/toggleTab";
import { connect } from "react-redux";

function CreateFolder(props: AppProps) {
  const location = useLocation();
  const [isFirst, setIsFirst] = useState<boolean>(true);

  const setFirst = () => {
    setIsFirst(true);
  };

  const setSecond = () => {
    setIsFirst(false);
  };

  const [newFolderInfo, setNewFolderInfo] = useState<any>({
    name: "",
    creator: "",
  });

  const handleName = (event: any) => {
    event.persist();
    setNewFolderInfo({
      ...newFolderInfo,
      name: event.target.value,
    });
  };

  const url = location.pathname + "/" + newFolderInfo.name;

  const handleCreator = (event: any) => {
    event.persist();
    setNewFolderInfo({
      ...newFolderInfo,
      creator: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (newFolderInfo.name.length > 0 && newFolderInfo.creator.length > 0) {
      const randId = Math.random().toString();
      const newFolderData : NewFolderProps = {
        id: randId,
        parentId: props.parentId,
        name: newFolderInfo.name,
        creator: newFolderInfo.creator,
        type: isFirst ? "folder" : "file",
        date: new Date(),
        url: url,
        subFolders: []
      }
      props.addRoute({id: randId, name: newFolderInfo.name, url: url, type: isFirst ? "folder" : "file"});
      props.addFolder(newFolderData);
      props.hideCreateFolderModal();
    }
  };

  return (
    <Modal show={props.show} hideModal={props.hideCreateFolderModal}>
      <div className="create-folder-parent">
        <h2>Create New</h2>
        <ToggleTab
          first="Folder"
          second="File"
          isFirst={isFirst}
          setFirst={setFirst}
          setSecond={setSecond}
        />
        <input
          className="create-folder-input"
          placeholder="Name"
          value={newFolderInfo.name}
          onChange={(e) => handleName(e)}
          required
        />
        <input
          className="create-folder-input"
          placeholder="Creator"
          value={newFolderInfo.creator}
          onChange={(e) => {
            handleCreator(e);
          }}
          required
        />
        <div className="create-folder-button" onClick={handleSubmit}>
          Create
        </div>
      </div>
    </Modal>
  );
}

type AppProps = {
  parentId: string;
  addFolder: any;
  addRoute: any;
  hideCreateFolderModal: any;
  show: boolean;
};

type NewFolderProps = {
  id: string;
  parentId: string;
  name: string;
  creator: string;
  type: "folder" | "file";
  date: Date;
  url: string;
  subFolders: [];
};

const mapStateToProps = (state: any) => {
  return {show: state.createFolderModal};
};

export default connect(mapStateToProps, { addRoute, addFolder, hideCreateFolderModal })(CreateFolder);
