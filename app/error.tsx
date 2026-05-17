"use client"

import { Placeholder } from "@/components/placeholder"
type ErrorProp = {
    error: Error
    }

const Error = ({error}: ErrorProp)=> {
  return (
    <Placeholder label={error.message || "Ticket not found"} />
  )
}

export default Error