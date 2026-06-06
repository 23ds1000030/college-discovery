import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const colleges = await prisma.college.findMany({
    where: {
      id: { in: body.collegeIds },
    },
  });

  return Response.json({
    comparison: colleges.map((c) => ({
      name: c.name,
      fees: c.fees,
      rating: c.rating,
      placement: c.placement,
      location: c.location,
    })),
  });
}