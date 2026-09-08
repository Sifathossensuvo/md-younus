import Banner from "../components/Banner";
import Works from "../components/Works";
import Review from "../components/Review";
import Path from "../components/Path";
import Experience from "../components/Experience";
import About from "../components/About";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Works />
      <Review />
      <Path />
      <Experience />

      <div id="about">
        <About />
      </div>

      <Table />
    </div>
  );
};

export default Home;