import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DataTypes } from "../../types/CustomInterfaces";
import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import folder from "../../assets/folder.png";
import fileIcon from "../../assets/fileIcon.png";

import "./sideBar.css";

const getFolderIcon = (data: DataTypes) => {
  const { name } = data;
  
  if(name){
    return <img className="sb30ItemIcon" src={folder} alt="home" />;
  } 
};

const SideBar = ({ data }: propTypes) => {
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
    <div>
      {data?.isFolder === true ? (
        <>
          <div className="sb30Item" onClick={() => handleClick(data)}>
            <div className="sb30ImageContainer">{getFolderIcon(data)}</div>
            <div className="sb30ItemText">{data.name.slice(0 ,8)}</div>
          </div>
          <div>
            {data.children.map((item: DataTypes, idx: number) => (
              <div key={idx} style={{ marginLeft: 5 }} className="sb30Items">
                <SideBar data={item} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className="sb30Item"
            onClick={() => navigate(`/file/${data.name}/${data.id}`)}
          >
            <img className="sb30ItemIcon" src={fileIcon} alt="file" />
            <p className="sb30ItemText">{data.name.slice(0, 8)} </p>
          </div>
        </>

      )}
    </div>
  );
}

interface propTypes {
  data: DataTypes;
}

export default SideBar;
