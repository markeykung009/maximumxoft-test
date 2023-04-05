import React from "react";

const InputForm = ({ onAdd }) => {
  const handleOnSubmit = evt => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form className="bg-emerald-400 rounded-lg" onSubmit={handleOnSubmit}>
      <h3 className="text-center pt-2">Add User</h3>
      <input className="m-2 rounded-md" placeholder="Name" name="name" />
      <input className="m-2 rounded-md" placeholder="Email" name="email" />
      <button
        className="but border-2 p-2 m-2 rounded-lg border-black bg-sky-600"
        onSubmit={handleOnSubmit}
      >
        Add
      </button>
      <hr />
    </form>
  );
};

export default InputForm;
