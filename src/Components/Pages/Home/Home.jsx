import "./Home.css";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      <Posts />
      <Sidebar />

    </div>
  );
}
