import React from 'react';

function JsonEditor(props) {

    let textRef = React.createRef();

    let objectText = JSON.stringify(props.object);

    const deleteObject = () => {
        props.deleteObject(props.object);
    }

    const saveObject = (e) => {
        props.setObject(JSON.parse(textRef.current.value));
        e.preventDefault();
    }

    return (
        <div className="card cyan lighten-5">
            <div className="row card-content">
                <form onSubmit={saveObject} >
                    <div className="col s12 input-field">
                        <textarea id="object-json" ref={textRef} defaultValue={objectText} className="materialize-textarea"></textarea>
                        <label htmlFor="object-json"> {props.label}</label>
                    </div>
                    <button className="btn waves-effect" type="submit">
                        Save <i className="material-icons right">save</i>
                    </button>
                </form>
                <button className="btn waves-effect" onClick={deleteObject}>
                    Delete <i className="material-icons right">delete_forever</i>
                </button>
            </div>
        </div>
    );
}

export default JsonEditor;

