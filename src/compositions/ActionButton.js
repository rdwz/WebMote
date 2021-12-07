import { runAction } from '../helpers/Actions';

function ActionButton(props) {

    return (
        <button className="btn" onClick={() => runAction(props.action)}>
            {props.action.name} <i className="material-icons right">{props.action.icon}</i>
        </button>
    );
}

export default ActionButton;

