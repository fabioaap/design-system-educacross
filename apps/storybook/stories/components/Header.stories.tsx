import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@educacross/ui";

const meta = {
    title: "Layout/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        userName: {
            control: "text",
            description: "Nome do usuário exibido no header",
        },
        userRole: {
            control: "text",
            description: "Role/cargo do usuário",
        },
        avatarSrc: {
            control: "text",
            description: "URL da imagem do avatar",
        },
        shadow: {
            control: "boolean",
            description: "Se o header tem sombra",
        },
        onMenuClick: { action: "menu clicked" },
        onProfileClick: { action: "profile clicked" },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Header padrão com perfil de Gestor de Redes e ícone Educacross no avatar.
 */
export const Default: Story = {
    args: {
        userName: "Afonso",
        userRole: "Gestor de Redes",
        shadow: true,
    },
};

/**
 * Header com avatar personalizado (foto).
 */
export const WithAvatar: Story = {
    args: {
        userName: "Maria Silva",
        userRole: "Coordenadora Pedagógica",
        avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        shadow: true,
    },
};

/**
 * Header com nome longo para testar truncamento.
 */
export const WithLongName: Story = {
    args: {
        userName: "João Pedro da Silva Santos",
        userRole: "Diretor Regional de Educação",
        shadow: true,
    },
};

/**
 * Header sem sombra.
 */
export const NoShadow: Story = {
    args: {
        userName: "Carlos",
        userRole: "Administrador",
        shadow: false,
    },
};

/**
 * Header em contexto de aplicação completa.
 */
export const InContext: Story = {
    args: {
        userName: "Ana Paula",
        userRole: "Gestor de Redes",
    },
    render: (args) => (
        <div className="min-h-screen bg-background">
            <Header {...args} />
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <p className="text-muted-foreground">
                    Conteúdo da aplicação aqui...
                </p>
            </main>
        </div>
    ),
};

/**
 * Variações de roles com ícone Educacross no avatar.
 */
export const DifferentRoles: Story = {
    render: () => (
        <div className="space-y-px">
            <Header
                userName="Afonso"
                userRole="Gestor de Redes"
            />
            <Header
                userName="Beatriz"
                userRole="Coordenadora Pedagógica"
            />
            <Header
                userName="Carlos"
                userRole="Professor"
            />
            <Header
                userName="Diana"
                userRole="Administrador do Sistema"
            />
        </div>
    ),
};
