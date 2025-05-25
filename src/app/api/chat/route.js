import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "",
});

export async function POST(req) {
    try {
        const { message } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful assistant for a job posting platform built by Tumo kids. Help users with their questions about job postings, applications, and career advice.",
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        return new Response(
            JSON.stringify({
                response: completion.choices[0].message.content,
            }),
            {
                headers: { "Content-Type": "application/json" },
            },
        );
    } catch (error) {
        console.error("Error:", error);
        return new Response(
            JSON.stringify({ error: "Failed to get response" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
}
