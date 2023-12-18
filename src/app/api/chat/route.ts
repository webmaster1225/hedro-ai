import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge'; // Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

/**
 * @route /api/chat
 * @param request
 */
export async function POST(request: Request) {
  const { messages } = await request.json();

  // make a call to OpenAI
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-1106',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'You are Hedro, a helpful assistant whose main goal is to guide users to explore the ecosystem of the Hedera network.',
      },
      ...messages,
    ],
  });

  // create a stream of data
  const stream = OpenAIStream(response);

  // send the stream as a response to client
  return new StreamingTextResponse(stream);
}
