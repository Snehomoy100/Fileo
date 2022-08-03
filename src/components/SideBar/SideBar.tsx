import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DataTypes } from "../../types/CustomInterfaces";
import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import homeFolder from "../../assets/homeFolder.png";
import desktopFolder from "../../assets/desktopFolder.png";
import downloads from "../../assets/downloads.png";
import documents from "../../assets/documents.png";
import bin from "../../assets/bin.png";
import folder from "../../assets/folder.png";
import fileIcon from "../../assets/fileIcon.png";

import "./sideBar.css";

const getFolderIcon = (data: DataTypes) => {
  const { name } = data;
  
  if(name){
    return <img className="sb828ItemImage" src={folder} alt="home" />;
  }
};

function Sidebar({ data }: propTypes) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (data: any) => {
    if (!data.isFolder) {
      navigate(`/file/${data.name}/${data.id}`);
      return;
    }
    if (data.id === "root") {
      navigate("/");
      dispatch(changeFolder("root"));
      return;
    }
    dispatch(changeFolder(data.id));
    navigate(`/${data.id}`);
  };

  return (
    <div className="">
      {data?.isFolder === true ? (
        <>
          <div className="sb279Item" onClick={() => handleClick(data)}>
            <div className="sb682ImageContainer">{getFolderIcon(data)}</div>
            <div className="sb818ItemText">{data.name}</div>
          </div>
          <div className="">
            {data.children.map((item: DataTypes, idx: number) => (
              <div key={idx} style={{ marginLeft: 5 }} className="sb273Items">
                <Sidebar data={item} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className="sb279Item"
            onClick={() => navigate(`/file/${data.name}/${data.id}`)}
          >
            <img className="sb828ItemImage" src={fileIcon} alt="file" />
            <p className="sb818ItemText">{data.name} </p>
          </div>
        </>
      )}
    </div>
  );
}

interface propTypes {
  data: DataTypes;
}

export default Sidebar;
