import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Basic validation (Ensure required fields exist)
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Database insertion
    const inquiry = await prisma.inquiry.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email || null,     // Allows null if empty, matching your schema
        product: body.product || null, // Allows null if empty, matching your schema
        message: body.message,
      },
    });

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save inquiry",
      },
      {
        status: 500,
      }
    );
  }
}