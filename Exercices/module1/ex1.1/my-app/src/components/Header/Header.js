import logo from "./logo192.png"
const Header  = (props) => {
    return (
      <div>
        <img src={logo} alt="Logo" />;
        <p>{props.part}</p>
      </div>
    )
  }
export default Header