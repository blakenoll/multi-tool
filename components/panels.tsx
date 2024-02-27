"use client";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { ToolList } from "@/components/ToolList/ToolList";

export function Panels({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-full min-h-screen"
        collapsible={true}
        onCollapse={() => setCollapsed(true)}
        onExpand={() => setCollapsed(false)}
        defaultSize={15}
        collapsedSize={5}
        minSize={15}
        maxSize={20}
      >
        <h1 className="text-xl font-bold p-3">Tools</h1>
        <Separator />
        <ToolList collapsed={collapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="h-full min-h-screen" defaultSize={85}>
        <h1 className="text-xl font-bold p-3">Tools</h1>
        <Separator />
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
