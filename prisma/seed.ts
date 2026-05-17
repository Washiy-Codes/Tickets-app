import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  const prisma = new PrismaClient({
    adapter,
  });
  


  const ticket= [
    {
        title:"Ticket 1",
        content: "This is my first ticket from database",
        status:"DONE" as const
    },
    {
        title:"Ticket 2",
        content: "This is my second ticket from database",
        status:"OPEN" as const
    },
    {
        title:"Ticket 3",
        content: "This is my third ticket from database",
        status:"IN_PROGRESS" as const
    }
]

const seed = async()=>{
    const t0 = performance.now()
    console.log(`DB started: (${t0})`)
    await prisma.ticket.deleteMany()

    await prisma.ticket.createMany({
        data: ticket
    })
    const t1 = performance.now()
    console.log(`DB finish: (${t1 - t0})`)
}
  seed();