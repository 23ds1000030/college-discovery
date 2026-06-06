import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Clearing database...");

  await prisma.savedCollege.deleteMany();
  await prisma.review.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();
  await prisma.user.deleteMany();

  console.log("Creating users...");

  const hashedPassword = await bcrypt.hash("password123", 10);

  const usersData = Array.from({ length: 50 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: hashedPassword,
  }));

  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();

  console.log("Creating colleges...");

  const collegesData = Array.from({ length: 100 }).map(() => ({
    name: `${faker.company.name()} College`,
    location: `${faker.location.city()}, ${faker.location.state()}`,
    fees: faker.number.int({ min: 50000, max: 500000 }),
    rating: faker.number.float({ min: 2.5, max: 5, fractionDigits: 1 }),
    placement: faker.number.float({ min: 40, max: 100, fractionDigits: 1 }),
    overview: faker.lorem.paragraphs(2),
  }));

  await prisma.college.createMany({
    data: collegesData,
  });

  const colleges = await prisma.college.findMany();

  console.log("Creating courses...");

  const courseNames = [
    "B.Tech Computer Science",
    "B.Tech IT",
    "MBA",
    "BCA",
    "MCA",
    "BBA",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics Engineering",
    "Data Science",
  ];

  const coursesData = [];

  for (const college of colleges) {
    const count = faker.number.int({ min: 3, max: 8 });

    for (let i = 0; i < count; i++) {
      coursesData.push({
        name: faker.helpers.arrayElement(courseNames),
        duration: faker.helpers.arrayElement(["2 Years", "3 Years", "4 Years"]),
        fees: faker.number.int({ min: 30000, max: 300000 }),
        collegeId: college.id,
      });
    }
  }

  await prisma.course.createMany({
    data: coursesData,
  });

  console.log("Creating reviews...");

  const reviewsData = Array.from({ length: 200 }).map(() => ({
    rating: faker.number.int({ min: 1, max: 5 }),
    comment: faker.lorem.sentences(3),
    userId: faker.helpers.arrayElement(users).id,
    collegeId: faker.helpers.arrayElement(colleges).id,
  }));

  await prisma.review.createMany({
    data: reviewsData,
  });

  console.log("Creating saved colleges...");

  const savedData = Array.from({ length: 300 }).map(() => ({
    userId: faker.helpers.arrayElement(users).id,
    collegeId: faker.helpers.arrayElement(colleges).id,
  }));

  await prisma.savedCollege.createMany({
    data: savedData,
    skipDuplicates: true,
  });

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });