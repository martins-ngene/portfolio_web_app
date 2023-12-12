import { contactInfo } from "../types";

export const sendMessage = async (contactInfo: contactInfo) => {
  // Perform the mutation logic, i.e, make a request to send contact message as email
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BACKEND}`, {
    method: "POST",
    body: JSON.stringify(contactInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};
