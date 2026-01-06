import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("Header", () => {
    describe("Renderização", () => {
        it("deve renderizar corretamente", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(screen.getByRole("banner")).toBeInTheDocument();
        });

        it("deve exibir nome do usuário", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(screen.getByText("Afonso")).toBeInTheDocument();
        });

        it("deve exibir role do usuário", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(screen.getByText("Gestor de Redes")).toBeInTheDocument();
        });

        it("deve exibir logo educacross", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const logo = screen.getByAltText("Educacross");
            expect(logo).toBeInTheDocument();
            expect(logo).toHaveAttribute("src", expect.stringContaining("logo-educacross"));
        });

        it("deve renderizar botão de menu", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument();
        });

        it("deve renderizar avatar com ícone educacross", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const avatarIcon = screen.getByAltText("Avatar Educacross");
            expect(avatarIcon).toBeInTheDocument();
        });
    });

    describe("Interações", () => {
        it("deve chamar onMenuClick ao clicar no menu", async () => {
            const user = userEvent.setup();
            const handleMenuClick = vi.fn();

            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                    onMenuClick={handleMenuClick}
                />
            );

            await user.click(screen.getByLabelText("Abrir menu"));
            expect(handleMenuClick).toHaveBeenCalledTimes(1);
        });

        it("deve chamar onProfileClick ao clicar no perfil", async () => {
            const user = userEvent.setup();
            const handleProfileClick = vi.fn();

            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                    onProfileClick={handleProfileClick}
                />
            );

            await user.click(screen.getByLabelText("Perfil de Afonso"));
            expect(handleProfileClick).toHaveBeenCalledTimes(1);
        });
    });

    describe("Acessibilidade", () => {
        it("deve ter role banner no header", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(screen.getByRole("banner")).toBeInTheDocument();
        });

        it("deve ter aria-label no botão de menu", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const menuButton = screen.getByLabelText("Abrir menu");
            expect(menuButton).toHaveAccessibleName("Abrir menu");
        });

        it("deve ter aria-label no botão de perfil com nome do usuário", () => {
            render(
                <Header
                    userName="Maria"
                    userRole="Coordenadora"
                />
            );
            const profileButton = screen.getByLabelText("Perfil de Maria");
            expect(profileButton).toHaveAccessibleName("Perfil de Maria");
        });

        it("deve ter focus ring visível", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const profileButton = screen.getByLabelText("Perfil de Afonso");
            expect(profileButton).toHaveClass("focus:ring-2");
        });
    });

    describe("Variantes", () => {
        it("deve renderizar com sombra por padrão", () => {
            const { container } = render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const header = container.querySelector("header");
            expect(header).toHaveClass("shadow-sm");
        });

        it("deve renderizar sem sombra quando shadow=false", () => {
            const { container } = render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                    shadow={false}
                />
            );
            const header = container.querySelector("header");
            expect(header).not.toHaveClass("shadow-sm");
        });

        it("deve suportar className customizado", () => {
            const { container } = render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                    className="custom-header"
                />
            );
            const header = container.querySelector("header");
            expect(header).toHaveClass("custom-header");
        });
    });

    describe("Avatar", () => {
        it("deve renderizar avatar com imagem quando avatarSrc fornecido", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                    avatarSrc="https://example.com/avatar.jpg"
                />
            );
            const avatar = screen.getByAltText("Afonso");
            expect(avatar).toBeInTheDocument();
        });

        it("deve renderizar ícone educacross quando sem avatarSrc", () => {
            render(
                <Header
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            const avatarIcon = screen.getByAltText("Avatar Educacross");
            expect(avatarIcon).toBeInTheDocument();
        });
    });

    describe("Ref", () => {
        it("deve suportar ref", () => {
            const ref = { current: null as HTMLElement | null };
            render(
                <Header
                    ref={ref}
                    userName="Afonso"
                    userRole="Gestor de Redes"
                />
            );
            expect(ref.current).toBeInstanceOf(HTMLElement);
            expect(ref.current?.tagName).toBe("HEADER");
        });
    });
});
