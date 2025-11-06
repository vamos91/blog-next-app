import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  console.log(users);
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      role: "basic_user",
    },
  });
  return NextResponse.json({ user }, { status: 201 });
}
