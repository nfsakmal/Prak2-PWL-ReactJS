import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">NapzY</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+62-813-1751-8900</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>mochamad.119140135@gmail.com</span>
          </div>
        </div>
        <h1>
        </h1>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
