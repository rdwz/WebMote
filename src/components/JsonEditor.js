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
            <div className="card-content">
                <form onSubmit={saveObject} >
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="object-json" ref={textRef} defaultValue={objectText} className="materialize-textarea"></textarea>
                            <label htmlFor="object-json"> {props.label}</label>
                        </div>
                    </div>
                </form>
        
                <button className="btn waves-effect" type="submit">
                    Save <i className="material-icons right">save</i>
                </button>

                <button className="btn waves-effect right" onClick={deleteObject}>
                    Delete <i className="material-icons right">delete_forever</i>
                </button>
                      
            </div>
        </div>
    );
}

export default JsonEditor;

