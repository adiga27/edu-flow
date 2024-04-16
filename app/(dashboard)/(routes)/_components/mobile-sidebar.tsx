"use client"
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Sidebar  from "./sidebar";
import { usePathname } from "next/navigation";

function MobileSidebar () {
  const pathname = usePathname();
  const isHero = pathname === "/";
  return (
    <Sheet>
      {
        !isHero && (
          <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu />
          </SheetTrigger>
        )
      }
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar;