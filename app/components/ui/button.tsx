"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";
