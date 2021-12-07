import React from 'react';

function JsonEditor(props) {

    const textRef = React.createRef();

    const objectText = JSON.stringify(props.object);

    const handleSubmit = () => {
        props.setObject(JSON.parse(textRef.current.value));
    }

    return (
        <div className="card cyan lighten-5">
            <div className="row card-content">
                <form onSubmit={handleSubmit} >
                    <div className="col s12 input-field">
                        <textarea id="Objectjson" ref={textRef} value={objectText} className="materialize-textarea"></textarea>
                        <label for="Objectjson"> {props.label}</label>
                    </div>
                </form>
                <button class="btn waves-effect" type="submit">
                    Save <i className="material-icons right">save</i>
                </button>
            </div>
        </div>
    );
}

export default JsonEditor;

