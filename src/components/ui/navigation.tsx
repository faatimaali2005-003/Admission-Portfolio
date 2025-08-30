"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  BarChart3,
  GraduationCap,
  BookOpen,
  Settings,
} from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: BarChart3 },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "StudentsList", href: "/admin/studentsList", icon: GraduationCap },
    { name: "Programs / Courses", href: "/admin/programs", icon: BookOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen p-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Admin Portal</h2>

      <nav className="space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              pathname === href
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Icon className="w-5 h-5 mr-2" />
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
