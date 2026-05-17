import prisma from "@/lib/prisma";
// import { Ticket } from "../tickets/components/types"; 
import { Ticket } from "@/app/generated/prisma/client";

const GetTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const tickets = await prisma.ticket.findMany({
    orderBy:{
      createdAt:"desc"
    }
  });

  return tickets;
};

export default GetTickets;