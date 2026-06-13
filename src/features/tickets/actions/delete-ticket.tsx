"use server"
import { ticketsPath } from "@/src/paths"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { setCookieByKey } from "@/src/action/cookies"

const deleteTicket = async(id:string) => {
    await prisma.ticket.delete({
      where:{
        id
      }
    })
    revalidatePath(ticketsPath())
    await setCookieByKey("toast", "Ticket deleted successfully")
    redirect(ticketsPath())
  
}

export {deleteTicket}