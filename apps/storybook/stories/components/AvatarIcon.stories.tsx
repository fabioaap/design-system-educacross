import type { Meta, StoryObj } from "@storybook/react";
import { AvatarIcon, Avatar, AvatarFallback } from "@educacross/ui";

const meta = {
    title: "Components/AvatarIcon",
    component: AvatarIcon,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "default", "lg"],
            description: "Tamanho do ícone",
            table: {
                type: { summary: "'sm' | 'default' | 'lg'" },
                defaultValue: { summary: "default" },
            },
        },
        className: {
            control: "text",
            description: "Classes CSS adicionais",
        },
    },
} satisfies Meta<typeof AvatarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Ícone padrão Educacross para usar como avatar.
 */
export const Default: Story = {
    args: {},
};

/**
 * Ícone em tamanho pequeno (sm).
 */
export const Small: Story = {
    args: {
        size: "sm",
    },
};

/**
 * Ícone em tamanho grande (lg).
 */
export const Large: Story = {
    args: {
        size: "lg",
    },
};

/**
 * Comparação dos três tamanhos disponíveis.
 */
export const SizeComparison: Story = {
    render: () => (
        <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
                <AvatarIcon size="sm" />
                <p className="text-xs text-muted-foreground">Small</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <AvatarIcon size="default" />
                <p className="text-xs text-muted-foreground">Default</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <AvatarIcon size="lg" />
                <p className="text-xs text-muted-foreground">Large</p>
            </div>
        </div>
    ),
};

/**
 * Ícone usado dentro de um Avatar com fundo ciano.
 */
export const InAvatar: Story = {
    render: () => (
        <Avatar size="lg" className="border-2 border-[#06B6D4]">
            <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                <AvatarIcon size="lg" />
            </AvatarFallback>
        </Avatar>
    ),
};

/**
 * Múltiplos avatares com o ícone em diferentes tamanhos.
 */
export const InMultipleAvatars: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar size="sm" className="border-2 border-[#06B6D4]">
                <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                    <AvatarIcon size="sm" />
                </AvatarFallback>
            </Avatar>
            <Avatar size="default" className="border-2 border-[#06B6D4]">
                <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                    <AvatarIcon size="default" />
                </AvatarFallback>
            </Avatar>
            <Avatar size="lg" className="border-2 border-[#06B6D4]">
                <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                    <AvatarIcon size="lg" />
                </AvatarFallback>
            </Avatar>
            <Avatar size="xl" className="border-2 border-[#06B6D4]">
                <AvatarFallback className="bg-[#06B6D4] flex items-center justify-center">
                    <AvatarIcon size="lg" />
                </AvatarFallback>
            </Avatar>
        </div>
    ),
};
