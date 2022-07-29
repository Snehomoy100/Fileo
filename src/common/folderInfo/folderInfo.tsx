import React from 'react'
import { connect } from 'react-redux'

import "./folderInfo.css"

import { hideFolderInfoModal } from '../../store/actions'
import Modal from '../modal/modal'

function FolderInfo(props: any) {
  const {name, type, creator, url, date, subFolders} = props;
  return (
    <Modal show={props.show} hideModal={props.hideFolderInfoModal}>
        <table>
          <tr>
            <td>Name</td>
            <td>: &ensp;</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>:</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Creator</td>
            <td>:</td>
            <td>{creator}</td>
          </tr>
          <tr>
            <td>Path</td>
            <td>:</td>
            <td>{url}</td>
          </tr>
          <tr>
            <td>Date Created &ensp;</td>
            <td>:</td>
            <td>{date ? date.toString().substr(0, 10) : date}</td>
          </tr>
          <tr>
            <td>Time Created</td>
            <td>:</td>
            <td>{date ? date.toString().substr(11, 8) : date}</td>
          </tr>
          <tr>
            <td>No. of SubFolders</td>
            <td>:</td>
            <td>{subFolders ? subFolders.length: 0}</td>
          </tr>
        </table>
    </Modal>
  )
}

const mapStateToProps = (state: any) => {
    return {show: state.folderInfoModal}
}

export default connect(mapStateToProps, {hideFolderInfoModal})(FolderInfo)