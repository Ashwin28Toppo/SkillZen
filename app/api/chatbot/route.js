import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY; // You should have this in your .env
try{const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{
      parts: [{ text: `As an AI career coach, answer the user's question in 2-3 short, direct points. Avoid fluff and do not use bullet points, asterisks, or Markdown formatting. Respond professionally. User asked: ${message}`
      }]
    }]
  }),
});

const result = await response.json();
const reply = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, couldn't fetch response.";

return NextResponse.json({ reply });}
catch (error) {
  console.error("API Error:", error);
  return NextResponse.json({ reply: "Something went wrong." }, { status: 500 });
}
  
} 
