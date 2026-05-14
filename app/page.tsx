import Link from "next/link"
import {ticketsPath} from "@/src/paths"
import Heading from "@/components/heading"

const Homepage = ()=>{
  return(
    <div className="flex flex-1 gap-8 flex-col">
      <div>
      <Heading title="Homepage" description="Your home place to start"/>
      </div>
      <div className="flex flex-1 flex-col items-center">
      <Link href={ticketsPath()} className="underline font-bold">Go to tickets</Link>
      </div>
      
      </div>
  )
}

export default Homepage