// src/components/ui/MobileDialog.tsx
("use client");

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { default as TouchOptimized } from "./TouchOptimized";

interface MobileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function MobileDialog({
  isOpen,
  onClose,
  children,
  title,
}: MobileDialogProps) {
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

  if (!isOpen) return null;

  return (
    <div className="mobile-overlay" onClick={onClose}>
      <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="flex justify-between items-center mb-4 pb-4 border-b">
            <h2 className="text-xl font-semibold">{title}</h2>
            <TouchOptimized onTap={onClose}>
              <X className="w-6 h-6 text-gray-500" />
            </TouchOptimized>
          </div>
        )}

        <div className="overflow-y-auto max-h-[70vh]">{children}</div>
      </div>
    </div>
  );
}
