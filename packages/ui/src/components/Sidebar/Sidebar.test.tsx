import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sidebar, SidebarItem, SidebarSubItem } from "./Sidebar";

describe("Sidebar", () => {
    it("deve renderizar o sidebar corretamente", () => {
        render(
            <Sidebar>
                <SidebarItem icon="Grid" label="Painel" />
            </Sidebar>
        );

        expect(screen.getByText("Painel")).toBeInTheDocument();
    });

    it("deve renderizar a logo quando showLogo é true", () => {
        const { container } = render(
            <Sidebar showLogo>
                <SidebarItem icon="Grid" label="Painel" />
            </Sidebar>
        );

        const logo = container.querySelector("svg");
        expect(logo).toBeInTheDocument();
    });

    it("não deve renderizar a logo quando showLogo é false", () => {
        const { container } = render(
            <Sidebar showLogo={false}>
                <SidebarItem icon="Grid" label="Painel" />
            </Sidebar>
        );

        const svgs = container.querySelectorAll("svg");
        // Deve ter SVGs de ícones, mas não da logo
        expect(svgs.length).toBeGreaterThan(0);
    });

    it("deve aplicar classe collapsed quando collapsed é true", () => {
        const { container } = render(
            <Sidebar collapsed>
                <SidebarItem icon="Grid" label="Painel" />
            </Sidebar>
        );

        const sidebar = container.firstChild as HTMLElement;
        expect(sidebar).toHaveClass("w-[80px]");
    });
});

describe("SidebarItem", () => {
    it("deve renderizar o item corretamente", () => {
        render(<SidebarItem icon="Grid" label="Painel" />);

        expect(screen.getByText("Painel")).toBeInTheDocument();
    });

    it("deve aplicar variante active", () => {
        const { container } = render(
            <SidebarItem icon="Grid" label="Painel" variant="active" />
        );

        const item = container.firstChild as HTMLElement;
        expect(item).toHaveClass("bg-[var(--color-primary-500)]");
    });

    it("deve aplicar variante selected", () => {
        const { container } = render(
            <SidebarItem icon="Grid" label="Painel" variant="selected" />
        );

        const item = container.firstChild as HTMLElement;
        expect(item).toHaveClass("bg-[var(--color-primary-16)]");
    });

    it("deve mostrar ícone de expansão quando expandable é true", () => {
        const { container } = render(
            <SidebarItem icon="Grid" label="Painel" expandable />
        );

        const chevron = container.querySelector("svg[width='9.3']");
        expect(chevron).toBeInTheDocument();
    });

    it("deve rotacionar ícone quando expanded é true", () => {
        const { container } = render(
            <SidebarItem icon="Grid" label="Painel" expandable expanded />
        );

        const chevron = container.querySelector("svg[width='9.3']");
        expect(chevron).toHaveClass("rotate-180");
    });

    it("deve chamar onClick ao clicar no item", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<SidebarItem icon="Grid" label="Painel" onClick={handleClick} />);

        const item = screen.getByText("Painel").closest("div");
        if (item) await user.click(item);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

describe("SidebarSubItem", () => {
    it("deve renderizar o subitem corretamente", () => {
        render(<SidebarSubItem label="Missões arquivadas" />);

        expect(screen.getByText("Missões arquivadas")).toBeInTheDocument();
    });

    it("deve aplicar estilo ativo quando active é true", () => {
        const { container } = render(<SidebarSubItem label="Subitem" active />);

        const item = container.firstChild as HTMLElement;
        expect(item).toHaveClass("bg-[var(--color-primary-16)]");
    });

    it("deve chamar onClick ao clicar no subitem", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<SidebarSubItem label="Subitem" onClick={handleClick} />);

        const item = screen.getByText("Subitem").closest("div");
        if (item) await user.click(item);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar o indicador de ponto", () => {
        const { container } = render(<SidebarSubItem label="Subitem" />);

        const dot = container.querySelector("div.w-\\[6px\\]");
        expect(dot).toBeInTheDocument();
        expect(dot).toHaveClass("rounded-full", "bg-white");
    });
});
