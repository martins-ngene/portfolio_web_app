// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Nylas from "nylas";
import { default as Draft } from "nylas/lib/models/draft";

type Data = {
  name?: string;
  message?: string;
};

const { NYLAS_CLIENT_ID, NYLAS_CLIENT_SECRET, NYLAS_ACCESS_TOKEN } =
  process.env || "";

// Configure Nylas API
Nylas.config({
  clientId: NYLAS_CLIENT_ID!,
  clientSecret: NYLAS_CLIENT_SECRET!,
});
const nylas = Nylas.with(NYLAS_ACCESS_TOKEN!);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    try {
      const { name, email, message } = req.body;

      // Create a new draft object
      const draft = new Draft(nylas, {
        to: [{ name: "Martins Ngene", email: "martinsngene.dev@gmail.com" }],
        subject: `New Message from:${name}, Email: ${email}`,
        body: message,
      });
      // Invoke the send function
      draft.send();
      res.status(200).json({ message: "Message was successfully sent!" });
    } catch (error: any) {
      res.status(504).json({
        name: error.name,
        message: error.message,
      });
    }
  }
}
