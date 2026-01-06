import * as React from "react";
import { cn } from "../../utils";
import avatarIcon from "../../assets/Icons/Avatar.svg";

export interface AvatarIconProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * Tamanho do ícone.
     * @default "default"
     */
    size?: "sm" | "default" | "lg";
}

const iconSizes = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
};

/**
 * AvatarIcon - ícone padrão Educacross para usar em avatares.
 *
 * @example
 * ```tsx
 * <Avatar>
 *   <AvatarIcon size="lg" />
 * </Avatar>
 * ```
 */
export const AvatarIcon = React.forwardRef<HTMLImageElement, AvatarIconProps>(
    ({ size = "default", className, ...props }, ref) => {
        return (
            <img
                ref={ref}
                src={avatarIcon}
                alt="Avatar Educacross"
                role="img"
                className={cn(iconSizes[size], "object-contain", className)}
                {...props}
            />
        );
    }
);

AvatarIcon.displayName = "AvatarIcon";
