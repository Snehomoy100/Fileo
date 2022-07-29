import React from 'react'
import "./imageModal.css"

import {connect} from 'react-redux';
import { hideImageModal } from '../../store/actions';

import Modal from '../modal/modal'

function ImageModal(props: any) {
  return (
    <Modal show={props.show} hideModal={props.hideImageModal}>
        <img src={props.url} />
    </Modal>
  )
}

const mapStateToProps = (state: any) => {
    return {show : state.imageModal}
}

export default connect(mapStateToProps, {hideImageModal})(ImageModal)