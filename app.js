const firebaseConfig = {
    apiKey: "AIzaSyCN_w-Z_TXveEZ4zVS68vmVYkkaZfiLrq0",
    authDomain: "pop-ball-game.firebaseapp.com",
    projectId: "pop-ball-game",
    storageBucket: "pop-ball-game.appspot.com",
    messagingSenderId: "303172752907",
    appId: "1:303172752907:web:1405a3112e17aa1415d90e"
  };


  
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}











let popped = 0;
let score = 0;
let life = 4;
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloonf"){
        
                e.target.style.backgroundColor = "#ededed";
                
            
                e.target.textContent = "POP!";
                popped++;
                score++;
                removeEvent(e);

                checkAllPopped();
                console.log(score);
    
            }   
    else if (e.target.className === "balloon"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "FAIL";
        life--;
        popped--;
        score--;
        removeEvent(e);
        checkAllPopped();
       
}   });

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 10 ){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
    else if(life===0){
        location.href = "fail.html"
    }
};