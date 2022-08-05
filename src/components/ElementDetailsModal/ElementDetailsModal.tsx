import { DataTypes } from "../../types/CustomInterfaces";

import "./elementDetailsModal.css";

const DetailsModal = ({ setIsOpen, item }: propTypes) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h4 className="heading">Details</h4>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            Close
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
                <div className="left">Items contained</div>
                <div className="right">{item.children?.length || 0}</div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Exact Type</div>
                <div className="right">
                  {item.type?.length == 0 ?( <p>Common</p>) : (<p>{item.type}</p>)}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Created on</div>
                <div className="right">{item.createdAt}</div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="left">Author</div>
                <div className="right">
                  {item.creator.length == 0 ? (
                    <>Guest User</>
                  ) : (
                    <p>{item.creator}</p>
                  )}
                </div>
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

type propTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: DataTypes;
};

export default DetailsModal;
