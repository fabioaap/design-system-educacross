import * as React from "react";
import { Sidebar, SidebarItem, SidebarSubItem } from "@educacross/ui";

export const MenuAdministrador = () => {
    const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({
        relatorios: true,
        avaliacoes: false,
        cadastros: false,
    });
    const [selectedSubItem, setSelectedSubItem] = React.useState("volume-acessos");

    const toggleExpand = (key: string) => {
        setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const theme = "white" as const;

    return (
        <div className="h-screen bg-gray-50">
            <Sidebar showLogo theme={theme}>
                <SidebarItem icon="Home" label="Painel Inicial" variant="default" theme={theme} />
                <SidebarItem icon="TrendingUp" label="Relatórios Gerais" variant="active" theme={theme} expandable expanded={expandedItems.relatorios} onClick={() => toggleExpand("relatorios")} />
                {expandedItems.relatorios && (<><SidebarSubItem label="Volume de acessos" active={selectedSubItem === "volume-acessos"} theme={theme} onClick={() => setSelectedSubItem("volume-acessos")} /><SidebarSubItem label="Acessos mensais alunos" active={selectedSubItem === "acessos-alunos"} theme={theme} onClick={() => setSelectedSubItem("acessos-alunos")} /><SidebarSubItem label="Acessos professores" active={selectedSubItem === "acessos-professores"} theme={theme} onClick={() => setSelectedSubItem("acessos-professores")} /><SidebarSubItem label="Evidências Escolas" active={selectedSubItem === "evidencias-escolas"} theme={theme} onClick={() => setSelectedSubItem("evidencias-escolas")} /><SidebarSubItem label="Evidências Alunos" active={selectedSubItem === "evidencias-alunos"} theme={theme} onClick={() => setSelectedSubItem("evidencias-alunos")} /><SidebarSubItem label="Habilidades" active={selectedSubItem === "habilidades"} theme={theme} onClick={() => setSelectedSubItem("habilidades")} /><SidebarSubItem label="Ranking de conquistas" active={selectedSubItem === "ranking-conquistas"} theme={theme} onClick={() => setSelectedSubItem("ranking-conquistas")} /></>)}
                <SidebarItem icon="Target" label="Missões da Escola" variant="default" theme={theme} />
                <SidebarItem icon="BookOpen" label="Sistema de Ensino" variant="default" theme={theme} />
                <SidebarItem icon="Award" label="Eventos" variant="default" theme={theme} />
                <SidebarItem icon="Compass" label="Expedição Leitura" variant="default" theme={theme} />
                <SidebarItem icon="Clipboard" label="Avaliações" variant="default" theme={theme} expandable expanded={expandedItems.avaliacoes} onClick={() => toggleExpand("avaliacoes")} />
                {expandedItems.avaliacoes && (<><SidebarSubItem label="Complexidade Narrativa" active={selectedSubItem === "complexidade-narrativa"} theme={theme} onClick={() => setSelectedSubItem("complexidade-narrativa")} /><SidebarSubItem label="Fluência Leitora" active={selectedSubItem === "fluencia-leitora"} theme={theme} onClick={() => setSelectedSubItem("fluencia-leitora")} /><SidebarSubItem label="Avaliação Digital" active={selectedSubItem === "avaliacao-digital"} theme={theme} onClick={() => setSelectedSubItem("avaliacao-digital")} /></>)}
                <SidebarItem icon="UserPlus" label="Cadastros" variant="default" theme={theme} expandable expanded={expandedItems.cadastros} onClick={() => toggleExpand("cadastros")} />
                {expandedItems.cadastros && (<><SidebarSubItem label="Turmas" active={selectedSubItem === "turmas"} theme={theme} onClick={() => setSelectedSubItem("turmas")} /><SidebarSubItem label="Grupos" active={selectedSubItem === "grupos"} theme={theme} onClick={() => setSelectedSubItem("grupos")} /><SidebarSubItem label="Professores" active={selectedSubItem === "professores"} theme={theme} onClick={() => setSelectedSubItem("professores")} /><SidebarSubItem label="Alunos" active={selectedSubItem === "alunos"} theme={theme} onClick={() => setSelectedSubItem("alunos")} /><SidebarSubItem label="Coordenadores" active={selectedSubItem === "coordenadores"} theme={theme} onClick={() => setSelectedSubItem("coordenadores")} /><SidebarSubItem label="Diretores" active={selectedSubItem === "diretores"} theme={theme} onClick={() => setSelectedSubItem("diretores")} /><SidebarSubItem label="Migrar alunos" active={selectedSubItem === "migrar-alunos"} theme={theme} onClick={() => setSelectedSubItem("migrar-alunos")} /><SidebarSubItem label="Logotipo da escola" active={selectedSubItem === "logotipo"} theme={theme} onClick={() => setSelectedSubItem("logotipo")} /></>)}
                <SidebarItem icon="Tool" label="Gerenciador" variant="default" theme={theme} />
                <SidebarItem icon="Video" label="Educateca" variant="default" theme={theme} />
                <SidebarItem icon="HelpCircle" label="Ajudas e materiais" variant="default" theme={theme} />
            </Sidebar>
        </div>
    );
};

export default MenuAdministrador;
