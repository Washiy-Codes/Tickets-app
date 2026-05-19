"use server"
import prisma from "@/lib/prisma"
import { ticketsPath } from "@/src/paths"
import { revalidatePath } from "next/cache"
export const CreateTicket = async(FormData: FormData)=>{
      const data = {
        title: FormData.get("title"),
        content:FormData.get("content")

      }
      await prisma.ticket.create({
        data:{
        title: data.title as string,
        content: data.content as string
        }  
      })

      revalidatePath(ticketsPath())
    
}