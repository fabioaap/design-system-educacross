import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSwitcher, ThemeProvider, useTheme } from "./ThemeSwitcher";

// Mock matchMedia
const mockMatchMedia = (matches: boolean) => ({
    matches,
    media: "(prefers-color-scheme: dark)",
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
});

// Componente de teste para verificar o contexto
function ThemeDisplay() {
    const { theme, resolvedTheme } = useTheme();
    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="resolved">{resolvedTheme}</span>
        </div>
    );
}

describe("ThemeSwitcher", () => {
    beforeEach(() => {
        // Limpar localStorage
        localStorage.clear();
        // Mock matchMedia para preferir light
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: vi.fn().mockImplementation(() => mockMatchMedia(false)),
        });
        // Limpar classes do document
        document.documentElement.classList.remove("light", "dark");
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe("ThemeProvider", () => {
        it("deve renderizar filhos corretamente", () => {
            render(
                <ThemeProvider>
                    <div data-testid="child">Conteúdo</div>
                </ThemeProvider>
            );
            expect(screen.getByTestId("child")).toBeInTheDocument();
        });

        it("deve usar tema padrão quando não há preferência salva", () => {
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeDisplay />
                </ThemeProvider>
            );
            expect(screen.getByTestId("theme")).toHaveTextContent("light");
        });

        it("deve aplicar classe no documento", () => {
            render(
                <ThemeProvider defaultTheme="dark">
                    <ThemeDisplay />
                </ThemeProvider>
            );
            expect(document.documentElement.classList.contains("dark")).toBe(true);
        });

        it("deve persistir tema no localStorage", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            expect(localStorage.getItem("educacross-theme")).toBe("dark");
        });

        it("deve carregar tema do localStorage", () => {
            localStorage.setItem("educacross-theme", "dark");
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeDisplay />
                </ThemeProvider>
            );
            expect(screen.getByTestId("theme")).toHaveTextContent("dark");
        });

        it("deve resolver tema system para light quando sistema prefere light", () => {
            Object.defineProperty(window, "matchMedia", {
                writable: true,
                value: vi.fn().mockImplementation(() => mockMatchMedia(false)),
            });

            render(
                <ThemeProvider defaultTheme="system">
                    <ThemeDisplay />
                </ThemeProvider>
            );
            expect(screen.getByTestId("resolved")).toHaveTextContent("light");
        });

        it("deve resolver tema system para dark quando sistema prefere dark", () => {
            Object.defineProperty(window, "matchMedia", {
                writable: true,
                value: vi.fn().mockImplementation(() => mockMatchMedia(true)),
            });

            render(
                <ThemeProvider defaultTheme="system">
                    <ThemeDisplay />
                </ThemeProvider>
            );
            expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
        });
    });

    describe("useTheme hook", () => {
        it("deve lançar erro quando usado fora do ThemeProvider", () => {
            // Suprimir erro de console esperado
            const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

            expect(() => {
                render(<ThemeDisplay />);
            }).toThrow("useTheme deve ser usado dentro de um ThemeProvider");

            consoleSpy.mockRestore();
        });
    });

    describe("Modo Icon", () => {
        it("deve renderizar botão com ícone", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toBeInTheDocument();
            expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
        });

        it("deve ter aria-label correto", () => {
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveAttribute(
                "aria-label",
                "Mudar para tema escuro"
            );
        });

        it("deve alternar tema ao clicar", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher />
                    <ThemeDisplay />
                </ThemeProvider>
            );

            expect(screen.getByTestId("resolved")).toHaveTextContent("light");

            await user.click(screen.getByRole("button"));
            expect(screen.getByTestId("resolved")).toHaveTextContent("dark");

            await user.click(screen.getByRole("button"));
            expect(screen.getByTestId("resolved")).toHaveTextContent("light");
        });

        it("deve mostrar label quando showLabel é true", () => {
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher showLabel />
                </ThemeProvider>
            );
            expect(screen.getByText("Claro")).toBeInTheDocument();
        });

        it("deve aplicar variante outline", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher variant="outline" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveClass("border");
        });

        it("deve aplicar variante filled", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher variant="filled" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveClass("bg-[var(--filled-input-bg)]");
        });

        it("deve aplicar tamanho sm", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher size="sm" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveClass("h-8", "w-8");
        });

        it("deve aplicar tamanho lg", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher size="lg" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveClass("h-12", "w-12");
        });

        it("deve suportar ref", () => {
            const ref = { current: null as HTMLButtonElement | null };
            render(
                <ThemeProvider>
                    <ThemeSwitcher ref={ref} />
                </ThemeProvider>
            );
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });

        it("deve estar desabilitado quando disabled", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher disabled />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toBeDisabled();
        });
    });

    describe("Modo Toggle", () => {
        it("deve renderizar como switch", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher mode="toggle" />
                </ThemeProvider>
            );
            expect(screen.getByRole("switch")).toBeInTheDocument();
        });

        it("deve ter aria-checked correto", () => {
            render(
                <ThemeProvider defaultTheme="dark">
                    <ThemeSwitcher mode="toggle" />
                </ThemeProvider>
            );
            expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
        });

        it("deve alternar tema ao clicar", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher mode="toggle" />
                    <ThemeDisplay />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("switch"));
            expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
        });

        it("deve aplicar cor primária quando dark", () => {
            render(
                <ThemeProvider defaultTheme="dark">
                    <ThemeSwitcher mode="toggle" />
                </ThemeProvider>
            );
            expect(screen.getByRole("switch")).toHaveClass("bg-[var(--color-primary-500)]");
        });
    });

    describe("Modo Dropdown", () => {
        it("deve renderizar botão dropdown", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher mode="dropdown" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
        });

        it("deve abrir dropdown ao clicar", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider>
                    <ThemeSwitcher mode="dropdown" />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            expect(screen.getByRole("listbox")).toBeInTheDocument();
        });

        it("deve mostrar 3 opções no dropdown", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider>
                    <ThemeSwitcher mode="dropdown" />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            const options = screen.getAllByRole("option");
            expect(options).toHaveLength(3);
        });

        it("deve alterar tema ao selecionar opção", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider defaultTheme="light">
                    <ThemeSwitcher mode="dropdown" />
                    <ThemeDisplay />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            await user.click(screen.getByText("Escuro"));

            expect(screen.getByTestId("theme")).toHaveTextContent("dark");
        });

        it("deve fechar dropdown após selecionar", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider>
                    <ThemeSwitcher mode="dropdown" />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            await user.click(screen.getByText("Escuro"));

            expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        });

        it("deve marcar opção selecionada como aria-selected", async () => {
            const user = userEvent.setup();
            render(
                <ThemeProvider defaultTheme="dark">
                    <ThemeSwitcher mode="dropdown" />
                </ThemeProvider>
            );

            await user.click(screen.getByRole("button"));
            const darkOption = screen.getByText("Escuro").closest("button");
            expect(darkOption).toHaveAttribute("aria-selected", "true");
        });
    });

    describe("Acessibilidade", () => {
        it("deve ter focus-visible ring styles", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveClass("focus-visible:ring-2");
        });

        it("deve ter displayName correto", () => {
            expect(ThemeSwitcher.displayName).toBe("ThemeSwitcher");
        });

        it("deve aceitar label customizado", () => {
            render(
                <ThemeProvider>
                    <ThemeSwitcher label="Alternar modo" />
                </ThemeProvider>
            );
            expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Alternar modo");
        });
    });
});
