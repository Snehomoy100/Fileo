import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import { deleteAnyItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { DataTypes } from "../../types/CustomTypes";

import "./fileInfo.css";

const FileInfo = ({
  cordinates,
  item,
  setOpen,
  setShowDetailsOfItem,
  setOpenDetails
}: propTypes) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = item;

  const handleOpenClick = () => {
    if (!item.isFolder) {
      navigate(`/file/${item.name}/${id}`);
      return;
    }
    dispatch(changeFolder(id));
    navigate(`/${id}`);
  }

  const handleShowDetailsClick = () => {
    setOpenDetails(true)
    setShowDetailsOfItem(item);
  };

  const handleDeleteClick = () => {
    dispatch(deleteAnyItem(id));
  };


  return (
    <div
      style={{ top: cordinates.y, left: cordinates.x }}
      className="fi60Menu"
      onClick={() => setOpen(false)}
    >
      <div className="fi60MenuItem" onClick={handleOpenClick}>
        Open
      </div>
      <div className="fi60MenuItem" onClick={handleShowDetailsClick}>
        Show Details
      </div>
      <div onClick={handleDeleteClick} className="fi60MenuItem">
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
