import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, data }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className="renderStyle">Modal Example</p>
              <div>
                {data.map((dataDetail, index) => {
                  return (
                    <div className="renderStyle">
                      <h1>Title: </h1>
                      <h1 key={dataDetail.id}>{dataDetail.title}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
