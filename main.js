// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorMessage = document.getElementById("modal-message")
const errorModal = document.getElementById("modal")


document.addEventListener("DOMContentLoaded", function() {

  mimicServerCall().then(() => {


    const heart = document.getElementsByClassName("like-glyph")
    for (let singleHeart of heart){
    
      singleHeart.addEventListener('click',function(){
        if (singleHeart.innerHTML == EMPTY_HEART){
        singleHeart.innerHTML = FULL_HEART;
        singleHeart.classList.add("activated-heart");
        } else {
          singleHeart.innerHTML = EMPTY_HEART;
          singleHeart.classList.remove("activated-heart")
        }
      })
    }


  }).catch(function(error) {
    errorModal.classList.remove("hidden")
    errorMessage.innerHTML = error;
    setTimeout(hideSomeThings, 5000);

    
  })


  function hideSomeThings() {
    errorModal.classList.add("hidden")
  }
  // everything below is not a real thing.
  
 
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
