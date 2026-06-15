"use server";

import { Mistral } from "@mistralai/mistralai";

export async function submit(competitors, productDescription) {
  const client = new Mistral({ apiKey: process.env.MISTRAL_KEY });

  // Filter out empty strings or null/undefined values
  const validCompetitors = competitors.filter(
    (comp) => comp && comp.trim() !== "",
  );

  // Combine the product description with the valid competitors
  const inputs = [productDescription, ...validCompetitors];

  const embed = await client.embeddings.create({
    model: "mistral-embed-2312",
    inputs: inputs,
  });

  const response = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [
      {
        content: `Give 5 subreddits where the founder may find customers of ${productDescription}. Only output the subreddits. Only give "subreddits". Prefix of r/`,
        role: "system",
      },
    ],
    responseFormat: {
      type: "json_object",
    },
  });

  const data = JSON.parse(response.choices[0].message.content);

  console.log(data);

  //   console.log(embed.data[0].embedding);
}
