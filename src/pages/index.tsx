import type { NextPage } from "next";
import Company from "../components/Company";

const Home: NextPage = () => {
  return (
    <div style={{ height: "100%", width: "100%", marginLeft: "auto" , marginTop: 50, marginRight: "auto"}}>
     <Company />
    </div>
  );
};
export default Home;
