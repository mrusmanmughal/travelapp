import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const Navigate = useNavigate();

  return (
    <button
      className="btn"
      onClick={(e) => {
        e.preventDefault();
        Navigate(-1);
      }}
    >
      &larr;
    </button>
  );
};

export default BackBtn;
