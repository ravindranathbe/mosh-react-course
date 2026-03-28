const Message = () => {
  const name = null; //"Ravi";

  if (name) {
    return (
      <div className="alert alert-primary" role="alert">
        Hello {name}, A simple primary alert—check it out!
      </div>
    );
  }

  return (
    <>
      <div className="alert alert-primary" role="alert">
        Hello {name}, A simple primary alert—check it out!
      </div>
    </>
  );
};

export default Message;
