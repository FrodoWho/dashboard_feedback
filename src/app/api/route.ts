import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const issues = await db.issue.findMany({
    select: {
      issue: true,
    },
  });

  return NextResponse.json(issues);
}

const POST = async (request: any) => {
  try {
    const requestData = await request.json();
    console.log("Request problem is", requestData.problem);
    // If no existing user, create a new one
    const feedback = await db.feedback.create({
      data: {
        // URL, problem en userID zijn required volgens de model van prisma
        // hierdoor moeten deze worden meegegeven in de try method
        // test
        // createdAt: requestData.createdAt,
        url: requestData.url,
        problem: requestData.problem,
        // comment: requestData.comment,
        userId: requestData.userId,
        browser: requestData.browser,
        // Add other fields as needed
      },
    });

    return NextResponse.json({
      message: "Problem has succesfully been submitted: ",
      feedback,
    });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
};

export { POST };
