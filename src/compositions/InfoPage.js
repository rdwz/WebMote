import { Link } from 'react-router-dom';

function Editor(props) {
    
    return (
        <>
            <div className="container">
                <div className="col s12">
                    <h1>What is WebMote?</h1>  
                </div>
                <div className="col s10 offset-s2">
                    <p>
                        WebMote is just another project. The initial idea behind webmote was to be able to save any arbitrary url for, let's say... something like a Raspberry Pi server endpoint in a button on the browser's local storage. That's the "Mote" part of the project. And, of course the "Web" comes from the idea that it works via opening basic URLs.
                    </p>
                </div>
                <div className="divider"></div>
                <h2>How to Create Buttons:</h2>
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>random string</td>
                            <td>This value must be unique for every button, and is generated automatically. Should never be modified.</td>
                            <td>2cf4beb0-6242-4dd7-8568-6027cf5fe09d</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>A short string</td>
                            <td>If this string is longer than the given space on the grid the icon will not show. Generally should be a word or two. </td>
                            <td>Google Search</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>a material icon</td>
                            <td>The name of a <a href='https://fonts.google.com/icons' target="_blank" rel="noreferrer">Google Material Icon</a></td>
                            <td>Home</td>
                        </tr>
                        <tr>
                            <td>newWindow</td>
                            <td>"true" or "false"</td>
                            <td>Simply decides whether this link opens in a new tab</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>templateLink</td>
                            <td>Any URL, optionally with variable inserts</td>
                            <td>This will usually just be the URL to a site, if it has some variability look into "inserts"</td>
                            <td>https://www.google.com</td>
                        </tr>
                        <tr>
                            <td>inserts</td>
                            <td>A list of inserts' keys and values</td>
                            <td>For now simply let's you break down a URL, but will allow for more dynamic buttons in a coming feature</td>
                            <td>
                                <code>&#91;	&#123;"key"&#58;"variable", "value"&#58;"somethingToGoInsideURL"&#125; &#93;</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to="/" className="btn-floating btn-large waves-effect cyan darken-1 stick-to-bottom-right">
                <i className="material-icons">settings_remote</i>
            </Link>
        </>
    );
}

export default Editor;

