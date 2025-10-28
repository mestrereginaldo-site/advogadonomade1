"use client";
import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={`block mb-1 font-semibold text-sm ${props.className}`} />;
}
