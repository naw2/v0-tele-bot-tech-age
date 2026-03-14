export async function GET(request) {
  return Response.json({ message: "Telegram API route" });
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Handle Telegram webhook updates here
    
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
