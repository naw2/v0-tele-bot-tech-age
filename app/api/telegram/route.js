export async function POST(req) {

  const body = await req.json()

  const message = body.message.text
  const chatId = body.message.chat.id

  const reply = "Hello! Your bot is working."

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        chat_id: chatId,
        text: reply
      })
    }
  )

  return new Response("ok")
}