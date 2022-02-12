import Carosel from "components/Carousel";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      style={{ height: 1500, width: "100%", display: "flex" }}
    >
      <div style={{ width: '80%', margin: "auto", display: "flex", marginTop: 0 }}>
        <div style={{ marginTop: 100, width: "100%" }}>
          <Carosel />
        </div>
      </div>
    </div>
  );
};
export default Home;
