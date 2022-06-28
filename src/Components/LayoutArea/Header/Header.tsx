import Clock from "../../SharedArea/Clock/Clock";
import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header flex-around">
            <Logo/>
			<h1>Todo App</h1>
            <Clock/>
        </div>
    );
}

export default Header;
