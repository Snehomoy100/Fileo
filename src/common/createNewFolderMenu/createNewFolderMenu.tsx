import React from 'react'
import "./createNewFolderMenu.css"

import {showCreateFolderModal} from "../../store/actions/index";
import { connect } from 'react-redux';

function CreateNewFolderMenu(props: any) {
  return (
    <div className="menu-parent" style={{ top: props.top, left: props.left }}>
          <div className="menu-element element1" onClick={props.showCreateFolderModal}>Create New Folder</div>
      </div>
  )
}

export default connect(null, {showCreateFolderModal})(CreateNewFolderMenu)