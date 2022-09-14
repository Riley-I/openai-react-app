import '../scss/styles.scss';
import {str} from '../.env.js';

//data object
const data = {
    prompt: "",
    temperature: 0.9, //higher = more risks
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
  
  let key = str;

//Display prompt
function getPrompt(data, myCallback){
    let promptValue = document.getElementById("prompt").value;
    data.prompt = promptValue; //push prompt value into data object
    // console.log(data);
    const promptDiv = document.getElementById("writePrompt");
    const li = document.createElement("li");
    li.innerHTML = promptValue;
    promptDiv.appendChild(li);

    myCallback();
  }
  
  function sendRequest(){
      fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + key,
          },
          body: JSON.stringify(data),
         })
         .then(response => response.json())
          .then(data => {
      
          let responseArray = data.choices;
      
          for (let i = 0; i < responseArray.length; i++) {
              console.log(responseArray[i].text);
  
              let response = responseArray[i].text;
              console.log(response);
  
              const responseDiv = document.getElementById("writeResponse");
              const liResponse = document.createElement("li");
              liResponse.classList.add("response");
              liResponse.innerHTML = response;
              responseDiv.appendChild(liResponse);
            } 
          })
          .catch((error) => {
          console.error('Error:', error);
          });
        }

        // getPrompt(data, sendRequest);

function SubmitBtn(){
    return(
        <button id="submit" type="submit" className="btn btn-primary submit" onClick={() => getPrompt(data, sendRequest)}>Submit</button>
    )
}

export default SubmitBtn;
