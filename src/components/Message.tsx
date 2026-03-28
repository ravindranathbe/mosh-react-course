const Message = () => {
  const name = null; //"Ravi";

  if (!name) return <p>Hello world</p>;

  return (
    <>
      <p>Hello {name}</p>
    </>
  );
};

export default Message;
