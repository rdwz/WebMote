import Grid from '../components/Grid';
import JsonEditor from '../components/JsonEditor';
import { generateNewAction } from '../helpers/Actions';

function Editor(props) {
    
    const updateAction = action => {
        props.setActions(props.actions.map(a => a.id == action.id ? action : a));
    }

    const createAction = () => {
        props.setActions([...props.actions, generateNewAction()]);
    }

    const deleteAction = action => {
        props.setActions(props.actions.filter(a => a.id != action.id));
    }
    
    return (
        <>
            <Grid>
                {
                    props.actions.map(action => 
                        <JsonEditor object={action} setObject={updateAction} />)                    
                }
            </Grid>
            <div className="row">
                <div className="col s3 offset-s9">
                    <button onClick={createAction} className="btn waves-effect">
                        New Action <i className="material-icons right">add_box</i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Editor;

