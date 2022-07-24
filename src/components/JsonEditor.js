import React from 'react';

function JsonEditor({object, deleteObject, label, setObject}) {

    let textRef = React.createRef();

    let objectText = JSON.stringify(object, null, " ");

    const deleteSelf = () => {
        deleteObject(object);
    }

    const saveSelf = (e) => {
        setObject(JSON.parse(textRef.current.value));
        e.preventDefault();
    }

    return (
        <div className="card cyan lighten-5">
            <div className="card-content">
                <form onSubmit={saveSelf} >
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="object-json" ref={textRef} defaultValue={objectText} className="materialize-textarea"></textarea>
                            <label htmlFor="object-json"> {label}</label>
                        </div>
                    </div>
                    <button className="btn waves-effect" type="submit">
                        Save <i className="material-icons right">save</i>
                    </button>
                    
                    <button className="btn waves-effect right" onClick={deleteSelf}>
                        Delete <i className="material-icons right">delete_forever</i>
                    </button>
                </form>

                      
            </div>
        </div>
    );
}

export default JsonEditor;

