import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


type CardCompactProps = {
  title: string;
  description: string;
  footer?: React.ReactNode;
 content?: React.ReactNode;
  className: string;
}

const CardCompact = ({title, description, footer,content, className }: CardCompactProps) => {
  return (
    <Card className={`w-full max-w-105 self-center ${className || ''}`}>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
  {footer && <CardFooter>{footer}</CardFooter>}
</Card>
  )
}

export { CardCompact }  