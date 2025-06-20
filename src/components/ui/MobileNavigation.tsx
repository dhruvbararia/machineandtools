// src/components/ui/MobileNavigation.tsx
("use client");

import { ReactNode } from "react";
import { useEffect } from "react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function MobileNavigation({
  isOpen,
  onClose,
  children,
}: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`
      fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-y-0" : "-translate-y-full"}
      bg-white shadow-xl border-b
      md:hidden
    `}
    >
      <div className="px-4 py-6 space-y-4">{children}</div>
    </div>
  );
}
