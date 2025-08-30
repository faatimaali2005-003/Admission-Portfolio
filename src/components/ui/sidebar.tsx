"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Users", href: "/admin/users" },
  { name: "Student List", href: "/admin/student-list" },
  { name: "Programs / Courses", href: "/admin/programs" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r shadow-md h-full">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100",
              pathname === item.href && "bg-blue-100 text-blue-700 font-semibold"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
