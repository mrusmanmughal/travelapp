import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>World Wide App </h1>
        <button className="btn">Start tour !</button>
      </div>
    </div>
  );
};

export default Home;
