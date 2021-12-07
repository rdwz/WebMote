import Grid from '../components/Grid';
import JsonEditor from '../components/JsonEditor';

function Editor(props) {
    
    let editForms = props.actions.map((action, index) => 
        <JsonEditor object={action} setObject={a => props.setSingleAction(index, a)} />);

    return (
        <Grid items={editForms} />
    );
}

export default Editor;

