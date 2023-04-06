function generateRandomPassword() {
    const length = 6;
    const characters = "0123456789"; 
  
    let password = "";
    for (let i = 0; i < length; i++) {
      
      const random = Math.floor(Math.random() * characters.length);
      
      password += characters[random];
    }
    document.getElementById("pass").textContent = password;
}

document.getElementById("btn").addEventListener("click", generateRandomPassword);