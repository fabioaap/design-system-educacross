import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";
import { Icon, type IconName } from "../Icon";
import { Logo } from "../Logo";

/**
 * Variantes do Sidebar.
 */
const sidebarVariants = cva(
    [
        "flex flex-col h-screen w-[260px]",
        "shadow-[0px_0px_15px_rgba(0,0,0,0.05)]",
        "overflow-y-auto",
        "transition-all duration-300",
    ],
    {
        variants: {
            theme: {
                purple: "bg-[#1c0f2a]",
                white: "bg-white",
            },
            collapsed: {
                true: "w-[80px]",
                false: "w-[260px]",
            },
        },
        defaultVariants: {
            theme: "purple",
            collapsed: false,
        },
    }
);

/**
 * Variantes do SidebarItem.
 */
const sidebarItemVariants = cva(
    [
        "flex items-center gap-[20px]",
        "px-[16px] py-[12px]",
        "rounded-[var(--radius-sm)]",
        "text-base font-medium",
        "transition-colors duration-200",
        "cursor-pointer",
    ],
    {
        variants: {
            variant: {
                default: "hover:bg-[var(--color-primary-8)]",
                active: "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white",
                selected: "bg-[var(--color-primary-16)] hover:bg-[var(--color-primary-24)]",
            },
            theme: {
                purple: "text-white",
                white: "text-[#6B7280]",
            },
        },
        compoundVariants: [
            {
                variant: "active",
                className: "text-white",
            },
        ],
        defaultVariants: {
            variant: "default",
            theme: "purple",
        },
    }
);

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Nome do ícone (do componente Icon).
     */
    icon: IconName;
    /**
     * Label do item.
     */
    label: string;
    /**
     * Variante visual.
     */
    variant?: "default" | "active" | "selected";
    /**
     * Tema de cores.
     */
    theme?: "purple" | "white";
    /**
     * Se true, mostra ícone de expansão.
     */
    expandable?: boolean;
    /**
     * Se true, o item está expandido (mostra subitens).
     */
    expanded?: boolean;
    /**
     * Callback ao clicar no item.
     */
    onClick?: () => void;
}

/**
 * Item do Sidebar.
 */
export const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
    ({ className, icon, label, variant, theme = "purple", expandable, expanded, onClick, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(sidebarItemVariants({ variant, theme }), className)}
                onClick={onClick}
                {...props}
            >
                <Icon name={icon} className="flex-shrink-0 w-5 h-5" />
                <span className="flex-1 tracking-[0.4px]">{label}</span>
                {expandable && (
                    <svg
                        width="9.3"
                        height="5.3"
                        viewBox="0 0 10 6"
                        fill="currentColor"
                        className={cn(
                            "transition-transform duration-200",
                            expanded && "rotate-180"
                        )}
                    >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                )}
            </div>
        );
    }
);
SidebarItem.displayName = "SidebarItem";

export interface SidebarSubItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Label do subitem.
     */
    label: string;
    /**
     * Se true, aplica estilo ativo.
     */
    active?: boolean;
    /**
     * Tema de cores.
     */
    theme?: "purple" | "white";
    /**
     * Callback ao clicar.
     */
    onClick?: () => void;
}

/**
 * Subitem do Sidebar (indentado).
 */
export const SidebarSubItem = React.forwardRef<HTMLDivElement, SidebarSubItemProps>(
    ({ className, label, active, theme = "purple", onClick, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center gap-[18px] pl-[54px] pr-[16px] py-[12px]",
                    "text-base font-medium tracking-[0.4px]",
                    "rounded-[var(--radius-sm)]",
                    "transition-colors duration-200 cursor-pointer",
                    theme === "purple" ? "text-white" : "text-[#6B7280]",
                    active
                        ? "bg-[var(--color-primary-16)] hover:bg-[var(--color-primary-24)]"
                        : "hover:bg-[var(--color-primary-8)]",
                    className
                )}
                onClick={onClick}
                {...props}
            >
                <div className={cn(
                    "w-[6px] h-[6px] rounded-full",
                    theme === "purple" ? "bg-white" : "bg-[#6B7280]"
                )} />
                <span>{label}</span>
            </div>
        );
    }
);
SidebarSubItem.displayName = "SidebarSubItem";

export interface SidebarProps extends VariantProps<typeof sidebarVariants> {
    /**
     * Itens do menu.
     */
    children: React.ReactNode;
    /**
     * Mostra logo no topo.
     */
    showLogo?: boolean;
    /**
     * Classes CSS adicionais.
     */
    className?: string;
}

/**
 * Sidebar - Menu lateral de navegação do perfil professor.
 *
 * @example
 * ```tsx
 * <Sidebar showLogo>
 *   <SidebarItem icon="Dashboard" label="Painel" variant="default" />
 *   <SidebarItem icon="Flag" label="Missões da escola" variant="selected" expandable expanded />
 *   <SidebarSubItem label="Missões arquivadas" />
 *   <SidebarItem icon="Add" label="Criar missão" variant="active" />
 * </Sidebar>
 * ```
 */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
    (
        {
            children,
            showLogo = true,
            theme,
            collapsed,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} className={cn(sidebarVariants({ theme, collapsed }), className)} {...props}>
                {/* Logo */}
                {showLogo && (
                    <div className="flex items-center justify-center px-[20px] py-[40px]">
                        {!collapsed && <Logo size="default" />}
                    </div>
                )}

                {/* Menu Items */}
                <nav className="flex flex-col gap-[5px] px-[20px] flex-1 overflow-y-auto">
                    {children}
                </nav>
            </div>
        );
    }
);
Sidebar.displayName = "Sidebar";

export { sidebarVariants, sidebarItemVariants };
