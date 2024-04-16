"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { isTeacher } from "@/lib/teacher";
import Logo from "@/app/(dashboard)/(routes)/_components/logo";


function NavbarRoutes() {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isHeroPage = pathname === "/";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {
        isHeroPage && (
          <div>
            <Logo/>
          </div>
        )
      }
      <div className="flex gap-x-4 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Admin mode
            </Button>
          </Link>
        ) : null}
        {userId ? 
          <UserButton
            afterSignOutUrl="/"
          /> : 
          <div className="flex gap-x-4 items-center">
            <Link href="/sign-in">
              <Button size="sm" variant="ghost">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" variant="default">
                Sign Up
              </Button>
            </Link>
          </div>
        }
      </div>
    </>
  )
}
export default NavbarRoutes;