export default async (request) => {
  try {
    // Ensure it's a POST request
        // Telegram Bot API token and chat ID
        const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    if (request.method !== 'POST') {
      try {
  
        // Fetch the user's IP address
        // const ipResponse = await fetch('https://api.ipify.org?format=json');
        // const ipData = await ipResponse.json();
        // const userIP = ipData.ip;

        // Telegram API URL
        const url = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;

        // Send the IP address to Telegram
        const telegramResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: `New visitor IP: ${"test"}`,
            }),
        });

        const responseData = await telegramResponse.json();
    } catch (error) {
        console.error('Error fetching or sending IP:', error);
    }
      return new Response('Method not allowed', { status: 405 });
    }

    // Parse the incoming JSON body
    const { ip } = await request.json();




    // Prepare the Telegram API URL
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;

    // Send the IP address as a message to the Telegram bot
    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `New visitor IP: ${ip}`,
      }),
    });

    // Handle the Telegram API response
    if (!telegramResponse.ok) {
      console.error('Failed to send message to Telegram:', await telegramResponse.text());
      return new Response('Failed to send message to Telegram', { status: 500 });
    }

    return new Response('IP successfully sent to Telegram', { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
