import * as React from "react";
import { Sidebar, SidebarItem, SidebarSubItem } from "@educacross/ui";

/**
 * Menu do perfil Coordenador.
 * 
 * Este exemplo demonstra a estrutura completa do menu lateral
 * para o perfil de Coordenador no sistema Educacross.
 */
export const MenuCoordenador = () => {
    const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({
        relatorios: true,
        cadastros: true,
    });
    const [selectedSubItem, setSelectedSubItem] = React.useState("volume-acessos");

    const toggleExpand = (key: string) => {
        setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const theme = "white" as const;

    return (
        <div className="h-screen bg-gray-50">
            <Sidebar showLogo theme={theme}>
                {/* Painel */}
                <SidebarItem 
                    icon="Home" 
                    label="Painel" 
                    variant="default"
                    theme={theme}
                />

                {/* Relatórios */}
                <SidebarItem
                    icon="TrendingUp"
                    label="Relatórios"
                    variant="active"
                    theme={theme}
                    expandable
                    expanded={expandedItems.relatorios}
                    onClick={() => toggleExpand("relatorios")}
                />
                {expandedItems.relatorios && (
                    <>
                        <SidebarSubItem 
                            label="Volume de acessos" 
                            active={selectedSubItem === "volume-acessos"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("volume-acessos")}
                        />
                        <SidebarSubItem 
                            label="Acessos mensais alunos" 
                            active={selectedSubItem === "acessos-alunos"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("acessos-alunos")}
                        />
                        <SidebarSubItem 
                            label="Acessos professores" 
                            active={selectedSubItem === "acessos-professores"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("acessos-professores")}
                        />
                        <SidebarSubItem 
                            label="Missões e jogos" 
                            active={selectedSubItem === "missoes-jogos"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("missoes-jogos")}
                        />
                        <SidebarSubItem 
                            label="Evidências escolas" 
                            active={selectedSubItem === "evidencias-escolas"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("evidencias-escolas")}
                        />
                        <SidebarSubItem 
                            label="Evidências alunos" 
                            active={selectedSubItem === "evidencias-alunos"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("evidencias-alunos")}
                        />
                        <SidebarSubItem 
                            label="Relatório de habilidades" 
                            active={selectedSubItem === "relatorio-habilidades"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("relatorio-habilidades")}
                        />
                        <SidebarSubItem 
                            label="Ranking de conquistas" 
                            active={selectedSubItem === "ranking-conquistas"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("ranking-conquistas")}
                        />
                    </>
                )}

                {/* Cadastros */}
                <SidebarItem
                    icon="UserPlus"
                    label="Cadastros"
                    variant="default"
                    theme={theme}
                    expandable
                    expanded={expandedItems.cadastros}
                    onClick={() => toggleExpand("cadastros")}
                />
                {expandedItems.cadastros && (
                    <>
                        <SidebarSubItem 
                            label="Turmas" 
                            active={selectedSubItem === "turmas"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("turmas")}
                        />
                        <SidebarSubItem 
                            label="Professores" 
                            active={selectedSubItem === "professores"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("professores")}
                        />
                        <SidebarSubItem 
                            label="Alunos" 
                            active={selectedSubItem === "alunos"}
                            theme={theme}
                            onClick={() => setSelectedSubItem("alunos")}
                        />
                    </>
                )}

                {/* Eventos */}
                <SidebarItem 
                    icon="Award" 
                    label="Eventos" 
                    variant="default"
                    theme={theme}
                />

                {/* Avaliação Diagnóstica */}
                <SidebarItem 
                    icon="HelpCircle" 
                    label="Avaliação Diagnóstica" 
                    variant="default"
                    theme={theme}
                />

                {/* Ajudas e materiais */}
                <SidebarItem 
                    icon="Download" 
                    label="Ajudas e materiais" 
                    variant="default"
                    theme={theme}
                />
            </Sidebar>
        </div>
    );
};

export default MenuCoordenador;
