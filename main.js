// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
document.addEventListener("DOMContentLoaded", function(){
  const errorBar = document.getElementById("modal")
  
  errorBar.className = "hidden"
  // find the error bar and hide it
  // find all of the like-glyph elements and add a click listener to each
  const likeArray = document.getElementsByClassName("like-glyph")
  for (const like of likeArray) {
    like.addEventListener("click", addLike)
  }

  function addLike(event){
    // find the like-glyph that was clicked
    
    const glyph = event.target
    
    if(glyph.className == "activated-heart"){
        
        glyph.innerHTML = EMPTY_HEART
        glyph.className = "like-glyph"
      
    } else {

      mimicServerCall()
        .then(function(){
          // server success!!!!
          
          // const glyph = li.querySelector(".like-glyph")
          // change to full heart
          glyph.innerHTML = FULL_HEART
          // change class to activated-heart
          glyph.className = "activated-heart"
          // add event listener to change back to no like
          // glyph.addEventListener("click", emptyHeart)
        })
        .catch(function(error){
          // it dun broke!!!!!
          
          errorBar.className = ""
          const errorMessage = document.getElementById("modal-message")
          errorMessage.innerHTML = error
          setTimeout(function(){ errorBar.className = "hidden"}, 5000);

        })
    }
      
  }




})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
