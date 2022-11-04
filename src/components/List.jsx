import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function List({ list, handleDelete }) {
  return (
    <div>
      {list.map((listitem) => {
        return (
          <div
            key={listitem.id}
            className="bg-slate-100 shadow-md border-2 flex justify-between text-xl m-3 rounded"
          >
            {!listitem.projectId ? (
              <Link to={`/project/${listitem.id}`}>
                <div className="flex">
                  <span
                    style={{ backgroundColor: listitem.color }}
                    className="px-3 w-2 rounded"
                  ></span>
                  <p className="m-3">{listitem.name.toUpperCase()}</p>
                </div>
              </Link>
            ) : (
              <Link to={`timer/${listitem.id}`}>
                <div className="flex">
                  <span
                    style={{ backgroundColor: listitem.color }}
                    className="px-3 w-2 rounded"
                  ></span>
                  <p className="m-3">{listitem.name.toUpperCase()}</p>
                </div>
              </Link>
            )}

            <button
              onClick={() => handleDelete(listitem.id)}
              className="bg-teal-500 px-2 hover:border-teal-500 rounded"
            >
              <AiOutlineClose color="white" size="1em" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
