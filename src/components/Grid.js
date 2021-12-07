import "./Grid.css";

function Grid(props) {
    //hack for having indefinite rows
    let rows = props.children.length;
    let startingColumns = props.startingColumns ? props.startingColumns : 1;
    let style = {
        '--row-count': `${rows}`,
        '--starting-columns': `${startingColumns}`
    };

    return (
        <div className="grid" style={style}>
            {
                props.children.map(child => <>{child}</>)
            }
        </div>
    );
}

export default Grid;

