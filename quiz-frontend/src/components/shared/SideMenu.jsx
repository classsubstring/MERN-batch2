import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ClipboardList,
  PlusCircle,
  User,
  LogOut,
  Menu,
  LucideChartColumnBig,
  List,
} from "lucide-react";
import { NavLink } from "react-router";

function SideMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, link: "/users" },
    { name: "Quiz Feed", icon: List, link: "/users/feed" },
    { name: "My Quizzes", icon: ClipboardList, link: "/users/quizzes" },
    { name: "Create Quiz", icon: PlusCircle, link: "/users/create" },
    { name: "Profile", icon: User, link: "/users/profile" },
    {
      name: "Feedback",
      icon: LucideChartColumnBig,
      link: "/users/feedback",
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-col w-64 border-r bg-card transition-all duration-100",
        !isSidebarOpen && "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2
          className={cn(
            "text-xl font-bold transition-all",
            !isSidebarOpen && "opacity-0 hidden"
          )}
        >
          SmartQuiz
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* links */}
      <nav className="  p-3 space-y-2">
        {navItems.map(({ name, icon: Icon, link }) => (
          <NavLink
            end
            to={link}
            className={({ isActive }) => {
              console.log(isActive);
              return isActive
                ? "block rounded-lg transition-all duration-300 bg-gray-200 dark:bg-neutral-800"
                : "block rounded-lg bg-none transition-all duration-300";
            }}
          >
            <button
              key={name}
              className={cn(
                "flex cursor-pointer items-center w-full gap-3 rounded-lg px-3 py-2 dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors  hover:bg-gray-200",
                !isSidebarOpen && "justify-center"
              )}
            >
              <Icon className="h-5 w-5" />
              {isSidebarOpen && <span>{name}</span>}
            </button>
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t">
        <button
          className={cn(
            "flex items-center w-full gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors",
            !isSidebarOpen && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
