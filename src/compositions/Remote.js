import Grid from "../components/Grid";
import ActionButton from "../compositions/ActionButton";
import { Link } from 'react-router-dom';

function Remote(props) {

    return (
        <>
            <Grid>
                {
                props.actions && props.actions.map((action) => <ActionButton key={action.id} action={action} />)
                }
            </Grid>
            <Link to="/editor" className="btn-floating btn-large waves-effect cyan darken-1 stick-to-bottom-right">
                <i className="material-icons">edit</i>
            </Link>
        </>
    );
}

export default Remote;

