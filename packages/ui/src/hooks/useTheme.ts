import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

/**
 * Hook para gerenciar o tema da aplicação.
 * Suporta temas: light, dark e system (que segue a preferência do sistema).
 * 
 * O tema é persistido no localStorage e aplicado via classe 'dark' no elemento <html>.
 * 
 * @example
 * ```tsx
 * const { theme, setTheme, resolvedTheme } = useTheme();
 * 
 * return (
 *   <button onClick={() => setTheme('dark')}>
 *     Tema atual: {resolvedTheme}
 *   </button>
 * );
 * ```
 */
export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return "system";
        return (localStorage.getItem("theme") as Theme) || "system";
    });

    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (newTheme: Theme) => {
            let resolved: "light" | "dark" = "light";

            if (newTheme === "system") {
                resolved = mediaQuery.matches ? "dark" : "light";
            } else {
                resolved = newTheme;
            }

            root.classList.remove("light", "dark");
            root.classList.add(resolved);
            setResolvedTheme(resolved);
        };

        applyTheme(theme);

        // Listener para mudanças na preferência do sistema
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                const resolved = e.matches ? "dark" : "light";
                root.classList.remove("light", "dark");
                root.classList.add(resolved);
                setResolvedTheme(resolved);
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem("theme", newTheme);
        setThemeState(newTheme);
    };

    return {
        theme,
        setTheme,
        resolvedTheme,
    };
}
