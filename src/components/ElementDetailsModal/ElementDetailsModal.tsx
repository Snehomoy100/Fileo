import React from "react";
import "./elementDetailsModal.css";
// import { RiCloseLine } from "react-icons/ri";

const DetailsModal = ({ setIsOpen, item }: any) => {
  console.log(item);
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Details</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modalContent">
            <div className="row">
              <div className="column">
                <div className="left">Name</div>
                <div className="right">{item.name}</div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Type</div>
                <div className="right">
                  {item.type?.length == 0 ?( <p>General</p>) : (<p>{item.type}</p>)}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Created at</div>
                <div className="right">{item.createdAt}</div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Created By</div>
                <div className="right">
                  {item.creator.length == 0 ? (
                    <>Guest</>
                  ) : (
                    <p>{item.creator}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Items contained</div>
                <div className="right">{item.children?.length || 0}</div>
              </div>
            </div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
