import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { DataTypes } from "../../types/CustomInterfaces";
import DetailsModal from "../ElementDetailsModal/ElementDetailsModal";

import "./fileInfo.css";

const FileInfo = ({
  cordinates,
  item,
  setOpen,
  setShowDetailsOfItem,
  setOpenDetails
}: propTypes) => {

  const dispatch = useDispatch();
  const { id } = item;

  const handleClick = () => {
    dispatch(deleteItem(id));
  };

  const handleShowDetails = () => {
    setOpenDetails(true)
    setShowDetailsOfItem(item);
  };

  return (
    <div
      style={{ top: cordinates.y, left: cordinates.x }}
      className="cm901Menu"
      onClick={() => setOpen(false)}
    >
      <div className="cm241MenuItem">Open</div>
      <div className="cm241MenuItem" onClick={handleShowDetails}>
        Show Details
      </div>
      <div onClick={handleClick} className="cm241MenuItem">
        Delete
      </div>
    </div>
  );
};

type propTypes = {
  cordinates: { x: number; y: number };
  item: DataTypes;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDetailsOfItem: React.Dispatch<React.SetStateAction<DataTypes>>;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export default FileInfo;
