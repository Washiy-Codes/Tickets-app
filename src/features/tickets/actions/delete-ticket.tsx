"use server"
import { ticketsPath } from "@/src/paths"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const deleteTicket = async(id:string) => {
    await prisma.ticket.delete({
      where:{
        id
      }
    })
    revalidatePath(ticketsPath())
    redirect(ticketsPath())
  
}

export {deleteTicket}