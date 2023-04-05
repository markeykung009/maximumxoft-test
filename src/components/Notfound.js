const Notfound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <i className="fa-solid fa-magnifying-glass text-4xl text-zinc-500" />
      <p>No results found</p>
      <p className="mt-4 text-zinc-500">
        You might try these popular searches or let us know by sending a product
        request
      </p>
    </div>
  );
};

export default Notfound;
