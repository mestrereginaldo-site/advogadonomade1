"use client";
import { ReactNode, useState } from "react";

export function Select({ children, value, onValueChange }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black text-left">
        {value || "Selecionar..."}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
          {children}
        </div>
      )}
    </div>
  );
}
export function SelectTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export function SelectContent({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export function SelectItem({ children, value, onClick }: any) {
  return (
    <div
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => onClick?.(value)}
    >
      {children}
    </div>
  );
}
export function SelectValue({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
