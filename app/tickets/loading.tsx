import { LucideLoaderCircle } from "lucide-react"

const Spinner = () => {
  return (
    <div className="flex justify-center items-center self-center flex-1">
      <LucideLoaderCircle className="w-16 h-16 animate-spin"/>
    </div>
  )
}

export default Spinner