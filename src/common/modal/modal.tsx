import "./modal.css"

const Modal = (props:AppProps) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>{props.children}</div>
        <div className="btn" onClick={props.hideModal}>✘</div>
      </section>
    </div>
  );
};

type AppProps = {
  show: boolean;
  children: React.ReactNode;
  hideModal: any;
}

export default Modal;