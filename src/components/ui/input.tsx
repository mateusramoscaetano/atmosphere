import cn from "@/utils/cn";
import * as React from "react";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onInput, icon = true, ...props }, ref) => {
    return (
      <div className={cn("relative")}>
        {icon && (
          <Search
            className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
            color="#b9b9b9"
          />
        )}
        <input
          type={type}
          className={cn(
            "border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-10": icon },
            className,
          )}
          ref={ref}
          onInput={onInput}
          autoComplete="off"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
