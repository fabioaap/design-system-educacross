import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

/**
 * Tabs list variants.
 */
const tabsListVariants = cva(
    [
        "inline-flex h-10 items-center justify-center rounded-md",
        "bg-muted p-1 text-muted-foreground",
    ],
    {
        variants: {
            variant: {
                default: "bg-muted",
                outline: "bg-transparent border",
                pills: "bg-transparent gap-1",
                rounded: "bg-transparent p-0 h-auto relative",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

/**
 * Tab trigger variants.
 */
const tabsTriggerVariants = cva(
    [
        "inline-flex items-center justify-center whitespace-nowrap",
        "px-6 py-3 text-sm font-medium ring-offset-background",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default:
                    "rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
                outline:
                    "data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground rounded-none",
                pills:
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full",
                rounded:
                    "rounded-t-md bg-white text-[#6e6b7b] shadow-[0_0_16px_rgba(0,0,0,0.16)] data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow-[0_0_24px_rgba(0,0,0,0.24)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface TabsContextValue {
    value: string;
    onValueChange: (value: string) => void;
    variant?: "default" | "outline" | "pills" | "rounded";
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {
    /**
     * The controlled value of the active tab.
     */
    value?: string;
    /**
     * The default value when uncontrolled.
     */
    defaultValue?: string;
    /**
     * Callback when the active tab changes.
     */
    onValueChange?: (value: string) => void;
}

/**
 * Tabs component - organize content into separate views.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    (
        {
            className,
            value,
            defaultValue,
            onValueChange,
            variant,
            children,
            ...props
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = React.useState(
            defaultValue ?? ""
        );
        const activeValue = value !== undefined ? value : internalValue;

        const handleValueChange = React.useCallback(
            (newValue: string) => {
                if (value === undefined) {
                    setInternalValue(newValue);
                }
                onValueChange?.(newValue);
            },
            [value, onValueChange]
        );

        return (
            <TabsContext.Provider
                value={{
                    value: activeValue,
                    onValueChange: handleValueChange,
                    variant: variant ?? "default",
                }}
            >
                <div ref={ref} className={cn("w-full", className)} {...props}>
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);
Tabs.displayName = "Tabs";

export interface TabsListProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> { }

/**
 * TabsList - container for tab triggers.
 */
const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ className, variant, ...props }, ref) => {
        const context = React.useContext(TabsContext);
        return (
            <div
                ref={ref}
                role="tablist"
                className={cn(
                    tabsListVariants({ variant: variant ?? context?.variant }),
                    className
                )}
                {...props}
            />
        );
    }
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsTriggerVariants> {
    /**
     * The unique value for this tab.
     */
    value: string;
}

/**
 * TabsTrigger - clickable tab button.
 */
const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, variant, ...props }, ref) => {
        const context = React.useContext(TabsContext);
        const isActive = context?.value === value;

        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-state={isActive ? "active" : "inactive"}
                onClick={() => context?.onValueChange(value)}
                className={cn(
                    tabsTriggerVariants({
                        variant: variant ?? context?.variant,
                    }),
                    className
                )}
                {...props}
            />
        );
    }
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The unique value for this tab content.
     */
    value: string;
}

/**
 * TabsContent - content panel for a tab.
 */
const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, ...props }, ref) => {
        const context = React.useContext(TabsContext);
        const isActive = context?.value === value;

        if (!isActive) {
            return null;
        }

        return (
            <div
                ref={ref}
                role="tabpanel"
                data-state={isActive ? "active" : "inactive"}
                className={cn(
                    "mt-2 ring-offset-background",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    className
                )}
                tabIndex={0}
                {...props}
            />
        );
    }
);
TabsContent.displayName = "TabsContent";

export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    tabsListVariants,
    tabsTriggerVariants,
};
