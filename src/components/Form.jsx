import React from "react";

function Form({handleSubmit, handleChange, inputState}) {
  
    return (
    <form onSubmit={handleSubmit}>
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
      <div className="flex flex-col">
        <input
          className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded m-3 grow"
          type="submit"
          value="Add new"
        />
      </div>
    </form>
  );
}

export default Form;
