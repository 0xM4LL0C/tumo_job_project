import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not defined');
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for a job posting platform built by Tumo kids. Help users with their questions about job postings, applications, and career advice."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    return new Response(JSON.stringify({
      response: completion.choices[0].message.content
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Detailed error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to get response',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
