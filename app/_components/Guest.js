"use client";

import { useAuth } from "@/app/_components/AuthContext";
import Link from "next/link";

export default function Guest() {
  const session = useAuth();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="flex items-center gap-4 transition-colors hover:text-accent-400"
        >
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="transition-colors hover:text-accent-400"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}
