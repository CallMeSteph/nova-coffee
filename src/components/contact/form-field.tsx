import type { ChangeEvent } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  multiline?: boolean;
  autoComplete?: string;
  maxLength?: number;
  readOnly?: boolean;
  className?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

/** A labelled line to write on: no box, just a hairline that darkens on focus. */
export function FormField({
  id,
  label,
  error,
  type = "text",
  multiline = false,
  className,
  onChange,
  ...props
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const control = {
    ...props,
    id,
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event.target.value),
    className: cn(
      "mt-3 block w-full rounded-none border-b bg-transparent py-3 text-lg leading-relaxed text-espresso",
      "transition-[border-color] duration-(--duration-base) ease-(--ease-out-soft)",
      error
        ? "border-terracotta"
        : "border-espresso/55 hover:border-espresso focus:border-espresso",
    ),
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="eyebrow block text-[0.65rem] text-roast">
        {label}
      </label>
      {multiline ? (
        <textarea {...control} rows={5} className={cn(control.className, "resize-y")} />
      ) : (
        <input {...control} type={type} />
      )}
      {error && (
        <p
          id={errorId}
          className="mt-3 flex items-baseline gap-3 text-sm leading-relaxed text-espresso"
        >
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 -translate-y-0.5 rounded-full bg-terracotta"
          />
          {error}
        </p>
      )}
    </div>
  );
}
