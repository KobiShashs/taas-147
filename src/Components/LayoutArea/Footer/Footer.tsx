import Circle from "../../SharedArea/Circle/Circle";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-around">
            <SocialMedia/>
			<h2>All right reserved &copy; to John Bryce</h2>
            <Circle/>
        </div>
    );
}

export default Footer;
