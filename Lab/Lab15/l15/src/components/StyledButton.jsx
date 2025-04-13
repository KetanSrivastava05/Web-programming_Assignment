
  function StyledButton() {
  return (
    <>
      <style>{`
        .internal-btn {
          background-color: purple;
          color: white;
          padding: 10px 20px;
          font-size: 18px;
        }
      `}</style>
      <button className="internal-btn">Click Me</button>
    </>
  );
}

export default StyledButton;
