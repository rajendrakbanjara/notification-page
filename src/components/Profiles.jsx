import { useState } from "react";

const Profile = (props) => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("bg-slate-100");
  const open = () => {
    setShow(!show);
    setColor("bg-none");
  };
  return (
    <div className="" onClick={open}>
      <div
        className={`profile-1 my-2 flex items-center rounded-md ${color} py-2`}
      >
        <img src={props.src} className="w-10 mx-5" alt="profile-pic" />
        <p>
          <span className="font-bold hover:text-blue-900">{props.name} </span>
          <span className="text-gray-600 mr-1">{props.action}</span>
          <span className="font-bold text-gray-600 hover:text-blue-900">
            {props.secondary_text}
          </span>
          <span className="font-bold text-blue-900">
            {props.seconday_text_blue}
          </span>
          <br />
          <span className="text-gray-600">{props.time}</span>
        </p>
        <div className="absolute ml-[565px]">
          <img src={props.src2} className="w-10" />
        </div>
      </div>
      {props.msg.length > 0 && show && (
        <div className="border border-slate-200 ml-16 mr-3 rounded-md break-all hover:bg-slate-100">
          <h1 className="p-3 text-gray-600">{props.msg}</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
