import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DataTypes } from "../../types/CustomInterfaces";
import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import DetailsModal from "../ElementDetailsModal/ElementDetailsModal";
import FileInfo from "../FileInfo/FileInfo";
import homeFolder from "../../assets/homeFolder.png";
import fileIcon from "../../assets/fileIcon.png";
import folder from "../../assets/folder.png";

import "./dashboardElements.css";

const DashboardElements = ({ items }: propTypes) => {
  const [open, setOpen] = useState(false);
  const [itemRightClicked, setItemRightClicked] = useState<DataTypes>(
    {} as DataTypes
  );
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("click", () => {
      setOpen(false);
    });
  }, [coordinates]);

  const getFolderIcon = (name: string) => {
    if(name) {
      return <img src={homeFolder} className="di019Image" alt="home" />;
    }

  };

  const handleDoubleClick = (name: string, id: string, isFolder: boolean) => {
    if (!isFolder) {
      navigate(`/file/${name}/${id}`);
      return;
    }
    dispatch(changeFolder(id));
    navigate(`/${id}`);
  };

  const handleContextMenuClick = (
    e: React.MouseEvent<HTMLDivElement>,
    item: DataTypes
  ) => {
    e.preventDefault();
    setCoordinates({ x: e.pageX, y: e.pageY });
    setItemRightClicked(item);
    setOpen(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpen(false);
  };


  const [openDetails, setOpenDetails] = useState(false);
  const [showDetailsOfItem, setShowDetailsOfItem] = useState<DataTypes>(
    {} as DataTypes
  );

  
  return (
    <div className="di204Row">
      {open && (
        <FileInfo
          setOpen={setOpen}
          cordinates={coordinates}
          item={itemRightClicked}
          setShowDetailsOfItem={setShowDetailsOfItem}
          setOpenDetails={setOpenDetails}
        />
      )}
      {openDetails && (
        <DetailsModal setIsOpen={setOpenDetails} item={showDetailsOfItem} />
      )}
      {items?.map((item: DataTypes, idx: number) => (
        <div
          onClick={handleClick}
          onContextMenu={(e) => handleContextMenuClick(e, item)}
          onDoubleClick={() =>
            handleDoubleClick(item.name, item.id, item.isFolder)
          }
          key={idx}
          className="di123Col"
        >
          {item.isFolder ? (
            <div className="di039ColContainer">
              {item.isAdmin === true ? (
                getFolderIcon(item.name)
              ) : (
                <img src={folder} className="di019Image" />
              )}
              <div className="di029ItemName">{item.name}</div>
            </div>
          ) : (
            <div className="di039ColContainer">
              <img className="di019Image" src={fileIcon} />
              <div className="di029ItemName">{item.name}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

type propTypes = {
  items: DataTypes[];
};

export default DashboardElements;
