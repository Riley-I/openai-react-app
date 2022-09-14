import '../scss/styles.scss';

  //Clear prompt 
  function clearRequest() {
    let input = document.getElementById("prompt"); 
    input.value = '';
    // window.location.reload();
  }

function ClearBtn(){
    return(
        <button id="clear" className="btn btn-primary clear" onClick={clearRequest}>Clear</button>    
    )
}

export default ClearBtn;