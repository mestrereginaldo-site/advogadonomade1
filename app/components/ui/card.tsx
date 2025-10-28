"use client";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`border rounded p-4 bg-white shadow ${className}`}>{children}</div>;
}
export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-bold">{children}</h3>;
}
export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}
export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
export function CardFooter({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
