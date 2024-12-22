// Fetch user's IP and send it to the backend
async function sendUserIP() {
    try {
      // Fetch the user's IP address
      const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
      const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const userIP = ipData.ip;
  
      // Send the IP to your Netlify function
  
      const url = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;
  
      const telegramResponse = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `New visitor IP: ${userIP}`,
        }),
      });
      
      console.log(telegramResponse.json())
      
    } catch (error) {
      console.error('Error fetching or sending IP:', error);
    }
  }
  
// Execute the function on page load
window.onload = sendUserIP;
  

let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

