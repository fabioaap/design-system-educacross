/**
 * @educacross/ui - Educacross Design System
 *
 * A React component library built with Tailwind CSS and Radix UI primitives.
 * Provides accessible, themeable components following the Educacross design language.
 *
 * @example
 * ```tsx
 * import { Button, Input, Label } from "@educacross/ui";
 * import "@educacross/ui/styles.css";
 *
 * function App() {
 *   return (
 *     <form>
 *       <Label htmlFor="email">Email</Label>
 *       <Input id="email" type="email" placeholder="you@example.com" />
 *       <Button type="submit">Submit</Button>
 *     </form>
 *   );
 * }
 * ```
 */

// Layout Components
export { Header, type HeaderProps } from "./components/Header";
export { Logo, type LogoProps } from "./components/Logo";
export { AvatarIcon, type AvatarIconProps } from "./components/AvatarIcon";
export {
    Sidebar,
    SidebarItem,
    SidebarSubItem,
    sidebarVariants,
    sidebarItemVariants,
    type SidebarProps,
    type SidebarItemProps,
    type SidebarSubItemProps,
} from "./components/Sidebar";

// P1 Components
export { Button, buttonVariants, type ButtonProps } from "./components/Button";
export { Input, inputVariants, type InputProps } from "./components/Input";
export { Label, labelVariants, type LabelProps } from "./components/Label";

// Theme
export {
    ThemeSwitcher,
    ThemeProvider,
    useTheme,
    themeSwitcherVariants,
    type ThemeSwitcherProps,
    type ThemeProviderProps,
    type Theme,
    type ResolvedTheme,
} from "./components/ThemeSwitcher";

// P2 Components
export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    cardVariants,
    type CardProps,
} from "./components/Card";

export { Badge, badgeVariants, type BadgeProps } from "./components/Badge";

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
    avatarVariants,
    type AvatarProps,
    type AvatarImageProps,
    type AvatarFallbackProps,
} from "./components/Avatar";

export {
    Checkbox,
    checkboxVariants,
    type CheckboxProps,
} from "./components/Checkbox";

export {
    RadioGroup,
    Radio,
    radioVariants,
    type RadioGroupProps,
    type RadioProps,
} from "./components/Radio";

export {
    Select,
    selectVariants,
    type SelectProps,
    type SelectOption,
} from "./components/Select";

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    dialogContentVariants,
    dialogOverlayVariants,
    type DialogProps,
    type DialogTriggerProps,
    type DialogContentProps,
} from "./components/Dialog";

export {
    Alert,
    AlertTitle,
    AlertDescription,
    alertVariants,
    type AlertProps,
} from "./components/Alert";

export {
    Toast,
    ToastTitle,
    ToastDescription,
    ToastAction,
    ToastViewport,
    toastVariants,
    type ToastProps,
} from "./components/Toast";

// P3 Components
export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    tabsListVariants,
    tabsTriggerVariants,
    type TabsProps,
    type TabsListProps,
    type TabsTriggerProps,
    type TabsContentProps,
} from "./components/Tabs";

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    accordionItemVariants,
    type AccordionProps,
    type AccordionItemProps,
    type AccordionTriggerProps,
    type AccordionContentProps,
} from "./components/Accordion";

export {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
    tooltipContentVariants,
    type TooltipProps,
    type TooltipTriggerProps,
    type TooltipContentProps,
    type TooltipProviderProps,
} from "./components/Tooltip";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    dropdownMenuContentVariants,
    type DropdownMenuProps,
    type DropdownMenuTriggerProps,
    type DropdownMenuContentProps,
    type DropdownMenuItemProps,
} from "./components/DropdownMenu";

export {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverClose,
    popoverContentVariants,
    type PopoverProps,
    type PopoverTriggerProps,
    type PopoverContentProps,
} from "./components/Popover";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
    type TableHeadProps,
    type TableCellProps,
} from "./components/Table";

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationButton,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    paginationButtonVariants,
    type PaginationProps,
    type PaginationLinkProps,
    type PaginationButtonProps,
    type PaginationPreviousProps,
    type PaginationNextProps,
} from "./components/Pagination";

export {
    Skeleton,
    SkeletonText,
    SkeletonCircle,
    SkeletonCard,
    SkeletonAvatar,
    SkeletonTable,
    skeletonVariants,
    type SkeletonProps,
    type SkeletonTextProps,
    type SkeletonCircleProps,
} from "./components/Skeleton";

// Icons
export {
    Icon,
    iconVariants,
    iconNames,
    iconCategories,
    type IconProps,
    type IconName,
} from "./components/Icon";
export * from "./components/Icon";

// Design Tokens (Primitivas e Variáveis)
export {
    spacing,
    borderRadius,
    colors,
    opacityColors,
    themeVariables,
    misc,
    tailwindTokens,
    type SpacingScale,
    type BorderRadiusScale,
    type ColorCategory,
    type ColorScale,
    type OpacityScale,
    type ThemeMode,
} from "./tokens";

// Utilities
export { cn } from "./utils";
