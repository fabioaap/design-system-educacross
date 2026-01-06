import { useState } from "react";
import {
    Sidebar,
    SidebarItem,
    SidebarSubItem,
} from "@educacross/ui";

/**
 * Exemplo completo do menu do perfil de professor.
 * Baseado no código original MenuProfessor.
 */
export function MenuProfessor() {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        schoolMissions: false,
        reports: false,
        games: false,
        teachingSystem: false,
    });

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <Sidebar showLogo>
            {/* Painel */}
            <SidebarItem icon="Grid" label="Painel" variant="default" />

            {/* Missões da escola */}
            <SidebarItem
                icon="Flag"
                label="Missões da escola"
                variant="selected"
                expandable
                expanded={expandedSections.schoolMissions}
                onClick={() => toggleSection("schoolMissions")}
            />
            {expandedSections.schoolMissions && (
                <>
                    <SidebarSubItem label="Missões arquivadas" />
                    <SidebarSubItem label="Ranking de conquistas" />
                </>
            )}

            {/* Criar missão */}
            <SidebarItem icon="PlusCircle" label="Criar missão" variant="active" />

            {/* Missões */}
            <SidebarItem icon="Circle" label="Missões" variant="default" />

            {/* Relatórios */}
            <SidebarItem
                icon="PieChart"
                label="Relatórios"
                variant="default"
                expandable
                expanded={expandedSections.reports}
                onClick={() => toggleSection("reports")}
            />
            {expandedSections.reports && (
                <>
                    <SidebarSubItem label="Relatório de evidências" />
                    <SidebarSubItem label="Relatório de habilidades" />
                    <SidebarSubItem label="Acesso dos alunos" />
                </>
            )}

            {/* Explorar jogos */}
            <SidebarItem
                icon="Monitor"
                label="Explorar jogos"
                variant="default"
                expandable
                expanded={expandedSections.games}
                onClick={() => toggleSection("games")}
            />
            {expandedSections.games && (
                <>
                    <SidebarSubItem label="Configurações da ilha" />
                    <SidebarSubItem label="Ranking de conquistas" />
                </>
            )}

            {/* Turmas */}
            <SidebarItem icon="Folder" label="Turmas" variant="default" />

            {/* Grupos */}
            <SidebarItem icon="Users" label="Grupos" variant="default" />

            {/* Alunos */}
            <SidebarItem icon="User" label="Alunos" variant="default" />

            {/* Sistema de ensino */}
            <SidebarItem
                icon="Book"
                label="Sistema de ensino"
                variant="default"
                expandable
                expanded={expandedSections.teachingSystem}
                onClick={() => toggleSection("teachingSystem")}
            />
            {expandedSections.teachingSystem && (
                <>
                    <SidebarSubItem label="Livros e missões" />
                    <SidebarSubItem label="Relatórios" />
                    <SidebarSubItem label="Ranking de conquistas" />
                </>
            )}

            {/* Eventos */}
            <SidebarItem icon="Calendar" label="Eventos" variant="default" />

            {/* Avaliação Diagnóstica */}
            <SidebarItem icon="Clipboard" label="Avaliação Diagnóstica" variant="default" />

            {/* Highfive */}
            <SidebarItem icon="Star" label="Highfive" variant="default" />

            {/* Ajudas e materiais */}
            <SidebarItem icon="Download" label="Ajudas e materiais" variant="default" />

            {/* Conhecer jogos */}
            <SidebarItem icon="Search" label="Conhecer jogos" variant="default" />
        </Sidebar>
    );
}
