import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

/**
 * Select variants using class-variance-authority.
 */
const selectVariants = cva(
    [
        "flex h-10 w-full items-center justify-between",
        "rounded-md border border-input bg-background px-3 py-2",
        "text-sm ring-offset-background",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors duration-200",
    ],
    {
        variants: {
            variant: {
                default: "",
                error: "border-destructive focus:ring-destructive",
                primary: "border-primary text-primary bg-primary/5 font-medium focus:ring-primary",
            },
            size: {
                sm: "h-9 px-2 text-xs",
                default: "h-10 px-3",
                lg: "h-11 px-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/**
 * Chevron icon for select dropdown.
 */
function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg
            className={cn("h-4 w-4 opacity-50", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps
    extends Omit<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        "size" | "children"
    >,
    VariantProps<typeof selectVariants> {
    /**
     * The options for the select.
     */
    options: SelectOption[];
    /**
     * Placeholder text when no option is selected.
     */
    placeholder?: string;
    /**
     * Error message to display.
     */
    error?: string;
}

/**
 * Select component - a dropdown for selecting one option from a list.
 *
 * @example
 * ```tsx
 * <Select
 *   placeholder="Select a fruit"
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *     { value: "orange", label: "Orange" },
 *   ]}
 * />
 * ```
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            className,
            variant,
            size,
            options,
            placeholder,
            error,
            id,
            ...props
        },
        ref
    ) => {
        const generatedId = React.useId();
        const selectId = id ?? generatedId;
        const errorId = error ? `${selectId}-error` : undefined;

        return (
            <div className="relative w-full">
                <select
                    ref={ref}
                    id={selectId}
                    className={cn(
                        selectVariants({
                            variant: error ? "error" : variant,
                            size,
                        }),
                        "appearance-none cursor-pointer pr-10",
                        className
                    )}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={errorId}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                {error && (
                    <p
                        id={errorId}
                        className="text-sm text-destructive mt-1"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select, selectVariants };
