import db from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, userAgent } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     if (req.method !== "POST") {
//       return res.status(405).json({ message: "Method not allowed" });
//     }

//     const { content } = req.body;

//     const newUser = await db.user.create({
//       data: {
//         content,
//       },
//     });

//     res
//       .status(200)
//       .json({ message: "Post created successfully!", data: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

const POST = async (request: any) => {
  const requestData = await request.json();
  console.log("Request email is", requestData.email);

  try {
    // Check if a user with the same email already exists
    const existingUser = await db.user.findUnique({
      where: {
        email: requestData.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "A user with this email already exists." },
        { status: 409 }
      );
    }

    // If no existing user, create a new one
    const user = await db.user.create({
      data: {
        email: requestData.email,
        // Add other fields as needed
      },
    });

    return NextResponse.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
};

export { POST };
