import * as React from "react";
import { Menu } from "react-feather";
import { cn } from "../../utils";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { AvatarIcon } from "../AvatarIcon";
import { Button } from "../Button";
import { Logo } from "../Logo";

/**
 * HeaderProps - propriedades do componente Header.
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Nome do usuário exibido no header.
     */
    userName?: string;
    /**
     * Role/cargo do usuário.
     */
    userRole?: string;
    /**
     * URL da imagem do avatar.
     */
    avatarSrc?: string;
    /**
     * Callback quando o menu hamburger é clicado.
     */
    onMenuClick?: () => void;
    /**
     * Callback quando o perfil é clicado.
     */
    onProfileClick?: () => void;
    /**
     * Se o header tem sombra.
     * @default true
     */
    shadow?: boolean;
}

/**
 * Header - componente de cabeçalho da aplicação Educacross.
 * Usa o ícone Educacross como fallback do avatar quando não há imagem.
 *
 * @example
 * ```tsx
 * <Header
 *   userName="Afonso"
 *   userRole="Gestor de Redes"
 *   avatarSrc="/avatar.jpg"
 *   onMenuClick={() => console.log("Menu clicked")}
 * />
 * ```
 */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
    (
        {
            userName,
            userRole,
            avatarSrc,
            onMenuClick,
            onProfileClick,
            shadow = true,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <header
                ref={ref}
                className={cn(
                    "flex items-center justify-between",
                    "h-16 px-4 md:px-6",
                    "bg-white border-b border-border",
                    shadow && "shadow-sm",
                    className
                )}
                {...props}
            >
                {/* Menu Hamburger */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onMenuClick}
                    aria-label="Abrir menu"
                    className="text-[#7C3AED] hover:bg-[#7C3AED]/10"
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Logo Educacross */}
                <Logo size="default" />

                {/* User Profile */}
                <button
                    onClick={onProfileClick}
                    className={cn(
                        "flex items-center gap-3",
                        "rounded-lg p-2",
                        "transition-colors",
                        "hover:bg-accent",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    )}
                    aria-label={`Perfil de ${userName}`}
                >
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-[#374151] leading-tight">
                            {userName}
                        </p>
                        <p className="text-xs text-[#7C3AED] font-medium leading-tight">
                            {userRole}
                        </p>
                    </div>
                    <Avatar size="lg" className="border-2 border-[#06B6D4]">
                        <AvatarImage src={avatarSrc} alt={userName} />
                        <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                            <AvatarIcon size="lg" />
                        </AvatarFallback>
                    </Avatar>
                </button>
            </header>
        );
    }
);

Header.displayName = "Header";
