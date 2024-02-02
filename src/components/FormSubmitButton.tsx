"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProp = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProp) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={` btn btn-primary ${className} `}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-dots loading-md" />}
      {children}
    </button>
  );
}
