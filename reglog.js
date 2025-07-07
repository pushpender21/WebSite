async function register() {
    const name = document.getElementById('regName').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const mobile = document.getElementById('regMobile').value;


    if (name.trim() === "") {
        alert('Name must be filled');
        return false;
    }    

    if (username.trim() === "") {
        alert('Username must be filled');
        return false;
    } 
        
    if (password.trim() === "") {
        alert('Password must be filled');
        return false;
    }        

    if (mobile.trim() === "") {
        alert('Mobile must be filled');
        return false;
    }

    // const confirmPassword = document.getElementById('regConfirmPassword').value;
    // if (password !== confirmPassword) {
    //     alert("Passwords do not match");
    //     return false;
    // }

    const response = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": name,
            "username": username,
            "password": password,
            "mobile": mobile
        }),
    });
    
    const message = await response.text();
    alert(message);



    if (response.ok) {
        window.location.href = 'http://127.0.0.1:5501/login.html';
    }
    return false;   
};

//--------------login ------------//

async function login() {
    debugger
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginpassword').value;

    if (username.trim() === "") {
        alert('UserName must be filled');
        return false;
    }   if (password.trim() === "") {
        alert('Password must be filled');
        return false;
    } 

    const response = await fetch('http://localhost:4000/logins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": username,
            "password": password
        }),
    });
    
    const message = await response.text();
    alert(message);

   
    if (response.ok) {
   
        localStorage.setItem('loggedInUser', username);
        localStorage.setItem('loggedInPassword', password);
        
        window.location.href = 'profile.html';
    }
    return false; 
};
