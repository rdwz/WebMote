import "./Grid.css";

function Grid(props) {
    //hack for having indefinite rows
    let rows = props.items.length;
    let startingColumns = props.startingColumns ? props.startingColumns : 1;
    let style = {
        '--row-count': `${rows}`,
        '--starting-columns': `${startingColumns}`
    };

    return (
        <div className="grid" style={style}>
            {
                props.items.map(item => <>{item}</>)
            }
        </div>
    );
}

export default Grid;

