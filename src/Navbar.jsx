
import Logo from "./assets/dog.png";

function Navbar() {
    return (
        <div className="navbar" >
            <div className="leftside">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="rightside">
                <h2>Adopt a pet </h2>
            </div>
        </div>
    )
}
export default Navbar;