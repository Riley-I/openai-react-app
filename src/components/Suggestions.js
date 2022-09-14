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

        ////////////////SUGGESTIONS////////////////

function getSuggestionsFirst(){
  let btn1 = document.getElementById("btn1");
  // console.log("button clicked");

      console.log("button clicked");
          let promptValue = document.getElementById("suggestionOne").innerText;
          // console.log(promptValue);
          data.prompt = promptValue;
          // console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }

function getSuggestionsSecond(){
  let btn2 = document.getElementById("btn2");

          let promptValue = document.getElementById("suggestionTwo").innerText;
          data.prompt = promptValue;
          // console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }
      
function getSuggestionsThird(){
  let btn3 = document.getElementById("btn3");

        let promptValue = document.getElementById("suggestionThree").innerText;
        data.prompt = promptValue;
        // console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }

function Suggestions(){
    return(
        <div id="suggestionContainer">
                <h3>Or, choose a suggestion :)</h3>

                <ul id="suggestions">
                    <br></br><li id="suggestionOne">Write a story about a turtle</li><button id="btn1" type="submit" className="btn btn-primary" onClick={getSuggestionsFirst}>Submit</button>
                    <br></br><li id="suggestionTwo">Tell me a joke about cake</li><button id="btn2" type="submit" className="btn btn-primary" onClick={getSuggestionsSecond}>Submit</button>
                    <br></br><li id="suggestionThree">What is the meaning of life?</li><button id="btn3" type="submit" className="btn btn-primary" onClick={getSuggestionsThird}>Submit</button>
                </ul>
        </div>
    )
}

export default Suggestions;