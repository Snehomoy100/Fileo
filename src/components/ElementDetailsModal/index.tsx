import { DataTypes } from "../../utils/CustomTypes";

import "./elementDetailsModal.css";

const DetailsModal = ({ setIsOpen, item }: PropTypes) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="dm300Center">
        <div className="dm300Modal">
          <div className="dm300ModalHeader">
            <h4 className="dm300Heading">Details</h4>
          </div>
          <button className="dm300CloseButton" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <div className="dm300ModalContent">
            <div className="dm300Row">
              <div className="dm300Column">
                <div className="dm300Left">Name</div>
                <div className="dm300Right">{item.name.slice(0, 8)}</div>
              </div>
            </div>
            <div className="dm300Row">
              <div className="dm300Column">
                <div className="dm300Left">Items contained</div>
                <div className="dm300Right">{item.children?.length || 0}</div>
              </div>
            </div>
            <div className="dm300Row">
              <div className="dm300Column">
                <div className="dm300Left">Exact Type</div>
                <div className="dm300Right">
                  {item.type?.length == 0 ?( <p>Common</p>) : (<p>{item.type}</p>)}
                </div>
              </div>
            </div>
            <div className="dm300Row">
              <div className="dm300Column">
                <div className="dm300Left">Created on</div>
                <div className="dm300Right">{item.createdAt}</div>
              </div>
            </div>
            <div className="dm300Row">
              <div className="dm300Column">
                <div className="dm300Left">Author</div>
                <div className="dm300Right">
                  {item.creator.length == 0 ? (
                    <>Guest User</>
                  ) : (
                    <p>{item.creator}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="dm300ModalActions">
            <div className="dm300ActionsContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

type PropTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: DataTypes;
};

export default DetailsModal;
