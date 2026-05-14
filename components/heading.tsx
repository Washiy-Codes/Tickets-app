import { Separator } from "@/components/ui/separator"

type HeadingProps ={
    title: string,
    description?: string
}

const Heading = ({title, description}: HeadingProps) => {
  return (
    <>
     <div className="px-8">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && (<p className="text-lg text-muted-foreground font-semibold">{description}</p>)}
      </div>

      <Separator className="mb-4 bg-gray-400 h-0.5 w-screen"/>
    </>
  )
}

export default Heading