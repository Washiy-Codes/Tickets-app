"use client"

import { getCookieByKey, deleteCookieByKey } from "@/src/action/cookies"
import { toast } from "sonner"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const RedirectToast = () => {
    const pathName = usePathname()
    useEffect(() => {
      const showCookieToast = async () => {
        const message = await getCookieByKey("toast")
      if(message){
        toast.success(message)
        deleteCookieByKey("toast")
      }
      }
      showCookieToast()
    }, [pathName])


    return null
}

export { RedirectToast }