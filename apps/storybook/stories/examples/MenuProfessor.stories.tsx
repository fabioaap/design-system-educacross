import type { Meta, StoryObj } from "@storybook/react";
import { MenuProfessor } from "./MenuProfessor";

const meta: Meta<typeof MenuProfessor> = {
    title: "Examples/MenuProfessor",
    component: MenuProfessor,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
# Menu do Professor

Este exemplo demonstra a estrutura do menu lateral para o **perfil de Professor** 
no sistema Educacross.

## Estrutura do Menu

O menu do Professor inclui as seguintes seções:

### Itens Principais
- **Painel** - Dashboard principal
- **Missões da escola** - Gerenciamento de missões e atividades
- **Criar missão** - Criação de novas missões
- **Turmas** - Visualização e gestão de turmas
- **Relatórios** - Acompanhamento e análise de desempenho
- **Jogos e atividades** - Recursos lúdicos
- **Sistema de ensino** - Configurações pedagógicas
- **Calendário** - Eventos e datas importantes
- **Biblioteca** - Material de apoio
- **Configurações** - Ajustes de perfil

## Interação
- Clique nos itens expansíveis para abrir/fechar os subitens
- Clique nos subitens para selecioná-los
- Navegação intuitiva com feedback visual dos estados
                `,
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuProfessor>;

/**
 * Menu completo do Professor.
 */
export const Default: Story = {
    render: () => <MenuProfessor />,
};
