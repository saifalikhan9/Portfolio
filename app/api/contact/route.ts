import { sendEmail } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;


  try {
    await sendEmail(email, name, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error,"error")
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
