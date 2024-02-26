import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="h-full min-h-screen" collapsible={true} collapsedSize={5} minSize={15} maxSize={20}>
          <h1 className="text-xl font-bold p-3">Tools</h1>
          <Separator />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="h-full min-h-screen">
          <h1 className="text-xl font-bold p-3">Tools</h1>
          <Separator />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
