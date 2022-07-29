import React from 'react'
import { connect } from 'react-redux';
import Accordion from '../../common/accordion/accordion'
import "./sidePanel.css"

function SidePanel(props: AppProps) {
    const ShowAccordion = ({id, name, url, subFolders}: folderData) => {
        return (
            <Accordion parentName={name} url={url} containSubFolders={subFolders.length > 0 ? true : false}>
                {subFolders.map((data: folderData) => {
                    return <ShowAccordion key={data.id} {...data} />
                })}
            </Accordion>
        )
    }

  return (
    <div className="side-panel">
        <div className="side-panel-heading">File Manager</div>
        <div className="side-panel-content">
            <ShowAccordion {...props.folders} />
        </div>
    </div>
  )
}

type folderData = {
    id: string;
    name: string;
    url: string;
    creator: string;
    date: Date;
    subFolders: Array<folderData>;
  }

type AppProps = {
    folders : folderData;
}

const mapStateToProps = (state: any) => {
    return {folders: state.folders};
}

export default connect(mapStateToProps)(SidePanel);