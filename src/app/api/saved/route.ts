import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const saved = await prisma.savedCollege.create({
    data: {
      userId: body.userId,
      collegeId: body.collegeId,
    },
  });

  return Response.json(saved);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const saved = await prisma.savedCollege.findMany({
    where: { userId: userId || "" },
    include: { college: true },
  });

  return Response.json(saved);
}