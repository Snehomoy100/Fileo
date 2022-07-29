import React, { useEffect, useState } from "react";
import "./folderScreen.css";

import { connect } from "react-redux";
import { showCreateFolderModal, fetchImages } from "../../store/actions";

import Folder from "../../common/folder/folder";
import AddFolder from "../../common/addFolder/addFolder";
import CreateFolder from "../createFolder/createFolder";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Search from "../../common/search/search";
import FolderInfo from "../../common/folderInfo/folderInfo";
import ImageThumbnail from "../../common/imageThumbnail/imageThumbnail";
import ImageModal from "../../common/imageModal/imageModal";
import CreateNewFolderMenu from "../../common/createNewFolderMenu/createNewFolderMenu";

const FolderScreen = (props: AppProps) => {
  const [subFolders, setSubFolders] = useState<any>([]);
  const [folderInfo, setFolderInfo] = useState<any>();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    const handleClick = () => setShowMenu(false);
    window.addEventListener("click", handleClick);
  });

  const handleContext = (event: any) => {
    event.preventDefault();
    setShowMenu(true);
    setLeft(event.pageX);
    setTop(event.pageY);
  };

  useEffect(() => {
    if (props.type === "foile") {
      props.fetchImages();
    }
  }, []);

  const findFolderInfo = (id: string, folders: any) => {
    if (folders.id === id) {
      setFolderInfo(folders);
    } else {
      for (let i = 0; i < folders.subFolders.length; i++) {
        findFolderInfo(id, folders.subFolders[i]);
      }
    }
  };

  useEffect(() => {
    findFolderInfo(props.folderInfoId, props.folders);
  }, [props.folderInfoId, props.folders]);

  const findSubFolders = (id: string, folders: folderData) => {
    if (folders.id === id) {
      setSubFolders([...folders.subFolders]);
    } else {
      for (let i = 0; i < folders.subFolders.length; i++) {
        findSubFolders(id, folders.subFolders[i]);
      }
    }
  };

  useEffect(() => {
    findSubFolders(props.id, props.folders);
  }, [props.id, props.folders]);

  return (
    
    <div
      className="folder-screen-parent"
      onContextMenu={(e) => handleContext(e)}
    >
      {showMenu && <CreateNewFolderMenu top={top} left={left} parentId={props.id} />}
      <Breadcrumb url={props.url} />
      <div className="search-bar">
        <Search parentUrl={props.url} />
      </div>
      <CreateFolder parentId={props.id} />
      <ImageModal url={props.imageUrl} />
      <div className="scrollable">
        <FolderInfo {...folderInfo} />
        {subFolders.map((data: folderData) => {
          return (
            <Folder
              key={data.id}
              name={data.name}
              id={data.id}
              url={data.url}
            />
          );
        })}
        {props.type === "file" &&
          props.images.map((data: any) => {
            return <ImageThumbnail {...data} />;
          })}
        <span onClick={props.showCreateFolderModal}>
          <AddFolder />
        </span>
      </div>
    </div>
  );
};

type folderData = {
  id: string;
  name: string;
  url: string;
  creator: string;
  date: Date;
  subFolders: Array<folderData>;
};

type AppProps = {
  id: string;
  url: string;
  folders: folderData;
  type: string;
  showCreateFolderModal: any;
  folderInfoId: string;
  fetchImages: any;
  images: any;
  imageUrl: string;
};

const mapStateToProps = (state: any) => {
  return {
    folders: state.folders,
    folderInfoId: state.folderInfoId,
    images: state.fetchImages,
    imageUrl: state.imageUrl,
  };
};

export default connect(mapStateToProps, { showCreateFolderModal, fetchImages })(
  FolderScreen
);
