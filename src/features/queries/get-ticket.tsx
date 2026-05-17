
import prisma from "@/lib/prisma"

const getTicket = async(ticketId : string)=> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const ticket = await prisma.ticket.findUnique({
    where:{
      id:ticketId
    }
  })
  return ticket
}

export default getTicket