import '../scss/styles.scss';

function Response(){
    return(
        <div id="responseContainer">
            <div id="prompt">
                <h3>Prompt</h3>
                <ol id="writePrompt"></ol>
            </div>

            <div id="response">
                <h3>Response</h3>
                <ol id="writeResponse"></ol>
            </div>
        </div>
    )
}

export default Response;