import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actionCreators/fileFolderActionCreators";
import { dataType } from "../../types/interfaces";
import DetailsModal from "../ElementDetailsModal/ElementDetailsModal";

import "./contextMenu.css";

const ContextMenu = ({
  cordinates,
  item,
  setOpen,
  setShowDetailsOfItem,
  setOpenDetails
}: propTypes) => {
  // const [openDetails, setOpenDetails] = useState(true);
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
  item: dataType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDetailsOfItem: React.Dispatch<React.SetStateAction<dataType>>;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export default ContextMenu;
