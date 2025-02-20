import axios from "axios";

const API_KEY = " process.env.api";
const BASE_URL = "https://api.openai.com/v1/chat/completions";

export const getChatGPTResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        model: "gpt-4", // You can also use "gpt-3.5-turbo"
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, something went wrong!";
  }
};
