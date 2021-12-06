import "./remote.css";

function Remote(props) {
    //hack for having indefinite rows
    let count = props.items.length;
    let style = {rowCount: `${count}fr`};

    return (
        <div className="remote" style={style}>
            {
                props.items.map(item => <>{item}</>)
            }
        </div>
    );
}

export default Remote;

