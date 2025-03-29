const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

//get values from register
function register(){
    let register_username = document.getElementById('register-username').value;
    let register_email = document.getElementById('register-email').value;
    let register_password = document.getElementById('register-password').value;
    
}

function login(){
    let login_email = document.getElementById('login-email').value;
    let login_password = document.getElementById('login-password').value; 
}


