import "./Grid.css";

function Grid(props) {
    
    let rows = 1;
    let startingColumns = 1;
    
    if (props.children) {
        //hack for having indefinite rows
        rows = props.children.length;
        startingColumns = props.startingColumns ? props.startingColumns : 1;
    }

    let style = {
        '--row-count': `${rows}`,
        '--starting-columns': `${startingColumns}`
    };

    return (
        <div className="grid" style={style}>
            {
                props.children
            }
        </div>
    );
}

export default Grid;

