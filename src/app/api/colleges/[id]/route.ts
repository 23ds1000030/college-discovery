import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const college = await prisma.college.findUnique({
    where: { id: params.id },
    include: {
      courses: true,
      reviews: true,
    },
  });

  if (!college) {
    return Response.json(
      { error: "College not found" },
      { status: 404 }
    );
  }

  return Response.json(college);
}