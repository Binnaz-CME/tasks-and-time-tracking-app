import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Form({ handleSubmit, handleChange, inputState }) {
  const [showModal, setShowModal] = useState(false);
  const nodeRef = useRef(null);

  function submit(e) {
    e.preventDefault();

    if(!inputState.name) return;
    handleSubmit()
  }

  return ( 
    <form onSubmit={(e) => submit(e)}>
      <CSSTransition
        nodeRef={nodeRef}
        classNames="modal"
        timeout={200}
        unmountOnExit
        in={showModal}
      >
        <div className="flex m-3">
          <input
            placeholder="Input name"
            className="grow h-12 border-2"
            type="text"
            name="name"
            value={inputState.name}
            onChange={handleChange}
          />

          <input
            className="grow h-12"
            type="color"
            name="color"
            value={inputState.color}
            onChange={handleChange}
          />
        </div>
      </CSSTransition>

      {showModal ? (
        <div className="flex flex-col">
          <input
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded m-3 grow"
            type="submit"
            value="Add"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      ) : (
        <div className="flex flex-col">
          <input
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded m-3 grow"
            type="submit"
            value="New"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      )}
    </form>
  );
}

export default Form;
