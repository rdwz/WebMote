import Grid from '../components/Grid';
import JsonEditor from '../components/JsonEditor';
import { Link } from 'react-router-dom';
import { generateNewAction, writeActionsToStore, deleteActionsFromStore} from '../helpers/Actions';

function Editor(props) {
    
    const updateAction = action => {
        writeActionsToStore([action]);
        props.setActions(props.actions.map(a => a.id == action.id ? action : a));
    }

    const createAction = () => {
        props.setActions([...props.actions, generateNewAction()]);
    }

    const deleteAction = action => {
        deleteActionsFromStore([action.id]);
        props.setActions(props.actions.filter(a => a.id != action.id));
    }
    
    return (
        <>
            <Grid>
                {
                    props.actions && props.actions.map(action => 
                        (<JsonEditor key={action.id} object={action} setObject={updateAction} deleteObject={deleteAction} />))
                }
            </Grid>
            <div className="row">
                <div className="col s2 offset-s5">
                    <button onClick={createAction} className="btn-large waves-effect">
                        New 
                        <i className="material-icons right">add_box</i>
                    </button>
                </div>
            </div>
            <Link to="/" className="btn-floating btn-large waves-effect cyan darken-1 stick-to-bottom-right">
                <i className="material-icons">settings_remote</i>
            </Link>
        </>
    );
}

export default Editor;

