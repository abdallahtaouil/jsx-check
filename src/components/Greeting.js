function Greeting() {
  const firstName = "foulen";
  return (
    <div className="d-flex flex-column">
      {firstName ? (
        <>
          <img
            src="images.jpeg"
            width={100}
            height={100}
            className="rounded-circle"
            alt=""
          />
          <span>Hello,{firstName}</span>
        </>
      ) : (
        <span>"Hello, there"</span>
      )}
      ;
    </div>
  );
}

export default Greeting;
