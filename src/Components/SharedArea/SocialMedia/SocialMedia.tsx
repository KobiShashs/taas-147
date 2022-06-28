import "./SocialMedia.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/kobi.shasha.7"><BsFacebook size={42} /></a>
            <a href="https://www.facebook.com/kobi.shasha.7"><BsTwitter size={42} /></a>
            <a href="https://www.facebook.com/kobi.shasha.7"><BsLinkedin size={42} /></a>
            <a href="https://www.facebook.com/kobi.shasha.7"><BsGithub size={42} /></a>
            <a href="https://www.facebook.com/kobi.shasha.7"><BsInstagram size={42} /></a>

        </div>
    );
}

export default SocialMedia;
