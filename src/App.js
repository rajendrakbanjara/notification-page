import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profiles";
function App() {
  return (
    <div className="App">
      <div className="main-container bg-slate-100 flex justify-center h-screen items-center">
        <div className="notification-container w-[43%] bg-white p-5 rounded-xl">
          <div className="heading flex w-full justify-between">
            <p className=""><span className="font-bold text-xl w-auto">Notification </span><span className="bg-blue-900 px-2 text-white rounded-md">3</span></p>
            <p className="hover:text-blue-900 text-gray-600">Mark all as read</p>
          </div>
          <div className="profiles pt-5">
            <Profile name={"Mark Webber"} src="/assets/images/avatar-mark-webber.webp" activity={"reacted to your recent post"} status={"My first tournament today!"} time={"1m ago"} msg={""}/>
            <Profile name={"Angela Gray"} src="/assets/images/avatar-angela-gray.webp" activity={"followed you"} status={""} time={"5m ago"} msg={""}/>
            <Profile name={"Jacob Thompson"} src="/assets/images/avatar-jacob-thompson.webp" activity={"has joined your group"} status={""} club={"Chess Club"}time={""} msg={""}/>
            <Profile name={"Rizky Hasanuddin"} src="/assets/images/avatar-rizky-hasanuddin.webp" activity={"sent you a private message"} status={""} time={"5 days ago"} msg={"Hello thanks"}/>
            <Profile name={"Kimberly Smith"} src="/assets/images/avatar-kimberly-Smith.webp" activity={"commented on your picture"} status={""} time={"1 week ago"} msg={""} src2="/assets/images/image-chess.webp"/>
            <Profile name={"Nathan Peterson"} src="/assets/images/avatar-nathan-peterson.webp" activity={"reacted to your recent post"} status={"5 end-game strategies to increase your win rate"} time={"2 weeks ago"} msg={""}/>
            <Profile name={"Anna Kim"} src="/assets/images/avatar-anna-kim.webp" activity={"left the group"} status={""} club={"Chess Club"} time={"2 weeks ago"} msg={""}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
