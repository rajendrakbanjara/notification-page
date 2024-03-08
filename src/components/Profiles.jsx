const Profile = (props)=>{
    return(

        <div className="profile-1 my-2 flex items-center rounded-md bg-slate-100 py-2">
              <img
                src={props.src}
                className="w-10 mx-5"
                alt="profile-pic"
              />
              <p>
                <span className="font-bold hover:text-blue-900">{props.name} </span>
                <span className="text-gray-600 mr-1">{props.activity}</span>
                <span className="font-bold text-gray-600 hover:text-blue-900">{props.status}</span>
                <span className="font-bold text-blue-900">{props.club}</span>
                <br/>
                <span className="text-gray-600">{props.time}</span>
              </p>
              <div className="absolute ml-[565px]">
              <img src={props.src2} className="w-10"/>
              </div>            
            </div>
            
            
        
    );
};

export default Profile;