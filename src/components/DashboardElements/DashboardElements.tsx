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
      return <img src={homeFolder} className="de500Pic" alt="home" />;
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
    <div className="de500Row">
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
          className="de500Column"
        >
          {item.isFolder ? (
            <div className="de500ColumnContainer">
              {item.isAdmin === true ? (
                getFolderIcon(item.name)
              ) : (
                <img src={folder} className="de500Pic" />
              )}
              <div className="de500ItemsName">{item.name.slice(0, 8)}</div>
            </div>
          ) : (
            <div className="de500ColumnContainer">
              <img className="de500Pic" src={fileIcon} />
              <div className="de500ItemsName">{item.name.slice(0, 8)}</div>
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
