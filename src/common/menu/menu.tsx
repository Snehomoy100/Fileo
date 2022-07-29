import "./menu.css";

import {
  removeFolder,
  removeRoute,
  showFolderInfoModal,
  setFolderInfoId
} from "../../store/actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Menu(props: AppProps) {

  const handleFolderDelete = () => {
    props.removeFolder(props.id);
    props.removeRoute(props.url);
  };

  const handleFolderInfo = () => {
    props.showFolderInfoModal();
  }

  return (
      <div className="menu-parent" style={{ top: props.top, left: props.left }}>
        <Link to={props.url}>
          <div className="menu-element element1">Open</div>
        </Link>
        <div className="menu-element" onClick={handleFolderInfo}>
          Get Info
        </div>
        <div className="menu-element delete" onClick={handleFolderDelete}>
          Delete
        </div>
      </div>
  );
}

type AppProps = {
  id: string;
  top: number;
  left: number;
  removeFolder: any;
  removeRoute: any;
  folders: any;
  url: string;
  showFolderInfoModal: any;
  setFolderInfoId: any;
};

const mapStateToProps = (state: any) => {
  return { folders: state.folders };
};

export default connect(mapStateToProps, {
  removeFolder,
  removeRoute,
  showFolderInfoModal,
  setFolderInfoId
})(Menu);
