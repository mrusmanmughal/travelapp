import BackBtn from "./BackBtn";

const Form = () => {
  return (
    <div className="form">
      <form className="">
        <p>City Name</p>
        <input type="text" />
        <p>When Did You Go To ?</p>
        <input type="text" />
        <p>Notes</p>
        <textarea rows={3}></textarea>
        <br />
        <button type="submit" className="btn">
          Add
        </button>
        <BackBtn />
      </form>
    </div>
  );
};

export default Form;
