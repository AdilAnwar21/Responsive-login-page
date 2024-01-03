var loginBtn = document.getElementById('SignInbtn');
var signUpbtn = document.getElementById('SignUpbtn');
var loginContainer = document.getElementById('login');
var registerContainer = document.getElementById('container');


function login(){
    loginContainer.style.left = "4px";
    registerContainer.style.right = "-520px"
    console.log("login")
    loginBtn.className += " white-btn";
    register.className = 'btn';
    loginContainer.style.opacity = 1;
    registerContainer.style.opacity = 0;
}

function register(){
    loginContainer.style.left="-510px"
    registerContainer.style.right = "5px";
    console.log("register")
    signUpbtn.className += " white-btn";
    loginBtn.className= 'btn'
    loginContainer.style.opacity = 0;
    registerContainer.style.opacity = 1;
}


// function mymenuFunction(){
//     var meNu = document.getElementById('menu')
//     if (meNu.className === "nav-menu"){
//         meNu.className += " responsive"
//     }else{
//         meNu.className = "nav-menu"
//     }
// }
function mymenuFunction() {
    var meNu = document.getElementById('menu');
    var menuButton = document.getElementById('menuButton');

    if (meNu.className === "nav-menu") {
        meNu.className += " responsive";
        menuButton.className = "bx bx-x"; // Change the class to 'bx bx-x'
    } else {
        meNu.className = "nav-menu";
        menuButton.className = "bx bx-menu"; // Change the class back to 'bx bx-menu'
    }
}

console.log('hello')


// container
// login
// SignUpbtn
// SignInbtn