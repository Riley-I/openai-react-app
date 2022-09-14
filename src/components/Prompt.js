import '../scss/styles.scss';
import SubmitBtn from '../components/SubmitButton';
import ClearBtn from '../components/ClearButton';

function Prompt(){
    return(
        <div id="promptContainer">
                <h2>Enter a Prompt</h2>
                <input type="text" id="prompt" name="prompt" placeholder="type something" aria-describedby="prompt"></input>
                <SubmitBtn />
                <ClearBtn />
        </div>
    )
}

export default Prompt;