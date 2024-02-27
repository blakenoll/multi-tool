
import Link from "next/link"
import { IconCalculator, IconGraph } from "@tabler/icons-react"
import { Button } from "../ui/button"

interface ToolListProps {
  collapsed?: boolean;
}


export function ToolList({ collapsed }: ToolListProps) {
  console.log(collapsed)
  if (collapsed) {
    return (
      <nav className="flex flex-col gap-1 p-1 items-center">
        <Button size="icon" variant="ghost"><IconCalculator /></Button>
        <Button size="icon" variant="ghost"><IconGraph /></Button>
      </nav>
    )
  }

  return (
    <nav className="flex flex-col gap-1 p-1">
      <Button variant="ghost" className="justify-start gap-1"><IconCalculator /> Button</Button>
      <Button variant="ghost" className="justify-start gap-1"><IconGraph /> Button</Button>
    </nav>
  )
}
