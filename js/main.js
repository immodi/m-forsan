async function sendUserIP() {
    try {
        // Replace these with your actual bot token and chat ID
        const TELEGRAM_API_TOKEN = 'YOUR_TELEGRAM_API_TOKEN';
        const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

        // Fetch the user's IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // Telegram API URL
        const url = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;

        // Send the IP address to Telegram
        const telegramResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: `New visitor IP: ${userIP}`,
            }),
        });

        const responseData = await telegramResponse.json();
        console.log(responseData);
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

