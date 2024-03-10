import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profiles";
import { useEffect, useState } from "react";

function App() {
  //code for API calling
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3031/profiles");
      const details = await response.json();
      console.log(details);
      setData(details);
    };
    fetchData();
  }, []);

  const object = {
    msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  };
  return (
    <div className="App">
      <div className="main-container bg-slate-100 flex justify-center h-screen items-center">
        <div className="notification-container w-[43%] bg-white p-5 rounded-xl">
          <div className="heading flex w-full justify-between">
            <p className="">
              <span className="font-bold text-xl w-auto">Notification </span>
              <span className="bg-blue-900 px-2 text-white rounded-md">3</span>
            </p>
            <p className="hover:text-blue-900 text-gray-600">
              Mark all as read
            </p>
          </div>
          { data.length > 0 &&
          <div className="profiles pt-5">
           
            <Profile
              name={data[0].name}
              src={data[0].src}
              action={data[0].action}
              secondary_text={data[0].secondary_text}
              secondary_text_blue={data[0].secondary_text_blue}
              time={data[0].time}
              msg={data[0].msg}
            />
           
            <Profile
              name={data[1].name}
              src={data[1].src}
              action={data[1].action}
              secondary_text={data[1].secondary_text}
              secondary_text_blue={data[1].secondary_text_blue}
              time={data[1].time}
              msg={data[1].msg}
            />
            <Profile
              name={data[2].name}
              src={data[2].src}
              action={data[2].action}
              secondary_text={data[2].secondary_text}
              secondary_text_blue={data[2].secondary_text_blue}
              time={data[2].time}
              msg={data[2].msg}
            />
            <Profile
              name={data[3].name}
              src={data[3].src}
              action={data[3].action}
              secondary_text={data[3].secondary_text}
              secondary_text_blue={data[3].secondary_text_blue}
              time={data[3].time}
              msg={data[3].msg}
            />
            <Profile
              name={data[4].name}
              src={data[4].src}
              action={data[4].action}
              secondary_text={data[4].secondary_text}
              secondary_text_blue={data[4].secondary_text_blue}
              time={data[4].time}
              src2={data[4].src2}
              msg={data[4].msg}
            />
            <Profile
              name={data[5].name}
              src={data[5].src}
              action={data[5].action}
              secondary_text={data[5].secondary_text}
              secondary_text_blue={data[5].secondary_text_blue}
              time={data[5].time}
              msg={data[5].msg}
            />
            <Profile
              name={data[6].name}
              src={data[6].src}
              action={data[6].action}
              secondary_text={data[6].secondary_text}
              secondary_text_blue={data[6].secondary_text_blue}
              time={data[6].time}
              msg={data[6].msg}
            />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
