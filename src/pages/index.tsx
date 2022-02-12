import type { NextPage } from "next";
import Company from "../components/Company";

const Home: NextPage = () => {
  return (
    <div style={{ height: "100%", width: "80%", display: "flex", marginTop: 80 }}>
     <Company />
    </div>
  );
};
export default Home;
