import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page") || 1);
    const limit = 10;

    const skip = (page - 1) * limit;

    const colleges = await prisma.college.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      skip,
      take: limit,
      orderBy: {
        rating: "desc",
      },
    });

    const total = await prisma.college.count({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    return Response.json({
      data: colleges,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}