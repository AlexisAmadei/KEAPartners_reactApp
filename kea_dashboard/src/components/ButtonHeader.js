import './ButtonHeader.css'

function ButtonHeader(props) {
    return (
        <div className="button-header">
            <button className="button-header__button">
            <img src="./assets/Plus.svg" alt="error"></img>{props.title}
            </button>
        </div>
    );
}
export default ButtonHeader;