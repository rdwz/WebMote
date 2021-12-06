import "./Grid.css";

function Grid(props) {
    //hack for having indefinite rows
    let count = props.items.length;
    let style = {rowCount: `${count}fr`};

    return (
        <div className="grid" style={style}>
            {
                props.items.map(item => <>{item}</>)
            }
        </div>
    );
}

export default Grid;

