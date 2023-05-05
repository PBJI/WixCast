async function generateText(prompt) {
  const url = "https://api.openai.com/v1/completions";
  const apiKey = "YOUR_API_KEY"; // replace with your API key
  const model = "gpt-3.5-turbo"; // replace with the name of the model you want to use

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model,
      messages: [{ role: "user", content: prompt}]
    }),
  });

  const result = await response.json();
  return result.choices[0].text.trim();
}

