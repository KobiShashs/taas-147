import "./Donate.css";
interface DonateProps {
    to: string;
    bank: number;
    branch: number;
    account: number;
}
function Donate(props: DonateProps): JSX.Element {
    return (
        <div className="Donate">
            <p>This is an open source todo application please open your heart and give some...</p>
            <p>Donate now to : {props.to} | Account Details : {props.bank}-{props.branch}-{props.account}</p>
        </div>
    );
}

export default Donate;
