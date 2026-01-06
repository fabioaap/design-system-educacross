import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AvatarIcon } from "./AvatarIcon";

describe("AvatarIcon", () => {
    describe("Renderização", () => {
        it("deve renderizar corretamente", () => {
            render(<AvatarIcon />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toBeInTheDocument();
        });

        it("deve ter o src correto do ícone", () => {
            render(<AvatarIcon />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveAttribute(
                "src",
                expect.stringContaining("educacross-icon")
            );
        });

        it("deve ter o atributo role img", () => {
            render(<AvatarIcon />);
            const icon = screen.getByRole("img");
            expect(icon).toBeInTheDocument();
        });
    });

    describe("Variantes de tamanho", () => {
        it("deve aplicar tamanho sm", () => {
            render(<AvatarIcon size="sm" />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("h-6");
            expect(icon).toHaveClass("w-6");
        });

        it("deve aplicar tamanho default", () => {
            render(<AvatarIcon size="default" />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("h-8");
            expect(icon).toHaveClass("w-8");
        });

        it("deve aplicar tamanho lg", () => {
            render(<AvatarIcon size="lg" />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("h-10");
            expect(icon).toHaveClass("w-10");
        });

        it("deve usar tamanho default quando nenhum especificado", () => {
            render(<AvatarIcon />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("h-8");
            expect(icon).toHaveClass("w-8");
        });

        it("deve ter object-contain em todos os tamanhos", () => {
            const { rerender } = render(<AvatarIcon size="sm" />);
            expect(screen.getByAltText("Avatar Educacross")).toHaveClass("object-contain");

            rerender(<AvatarIcon size="default" />);
            expect(screen.getByAltText("Avatar Educacross")).toHaveClass("object-contain");

            rerender(<AvatarIcon size="lg" />);
            expect(screen.getByAltText("Avatar Educacross")).toHaveClass("object-contain");
        });
    });

    describe("Customização", () => {
        it("deve suportar className customizado", () => {
            render(<AvatarIcon className="custom-class" />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("custom-class");
            expect(icon).toHaveClass("h-8"); // mantém classe de tamanho
        });

        it("deve combinar className customizado com tamanho", () => {
            render(<AvatarIcon size="lg" className="custom-class" />);
            const icon = screen.getByAltText("Avatar Educacross");
            expect(icon).toHaveClass("custom-class");
            expect(icon).toHaveClass("h-10");
        });
    });

    describe("Ref", () => {
        it("deve suportar ref", () => {
            const ref = { current: null };
            render(<AvatarIcon ref={ref} />);
            expect(ref.current).toBeInstanceOf(HTMLImageElement);
        });
    });
});
