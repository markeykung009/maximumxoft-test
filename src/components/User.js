import React, { useState } from "react";

const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = evt => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form
          className="bg-emerald-400 rounded-lg"
          onSubmit={handleOnEditSubmit}
        >
          <input
            className="m-2 rounded-md"
            placeholder="Name"
            name="name"
            defaultValue={name}
          />
          <input
            className="m-2 rounded-md"
            placeholder="Email"
            name="email"
            defaultValue={email}
          />
          <button
            className="but border-2 p-2 m-2 rounded-lg border-black bg-sky-600"
            onSubmit={handleOnEditSubmit}
          >
            Save
          </button>
        </form>
      ) : (
        <div className="bg-orange-400 w-[720px] p-5 m-1 rounded-lg">
          <div className="flex justify-around items-center">
            <span>{name}</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="but border-2 p-2 m-2 rounded-lg border-black bg-sky-600"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="but border-2 p-2 m-2 rounded-lg border-black bg-sky-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
