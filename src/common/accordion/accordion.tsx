import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./accordion.css";

function Accordion(props: AppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="accordion">
      <div className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
        <div>
            <Link to={props.url}>{props.parentName}</Link>
        </div>
        <div>{props.containSubFolders ? (isOpen ? "-" : "+") : null}</div>
      </div>
      <div
        className="accordion-child"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {props.children}
      </div>
    </div>
  );
}

type AppProps = {
  parentName: string;
  children?: React.ReactNode;
  containSubFolders: boolean;
  url: string;
};

export default Accordion;
