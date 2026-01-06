import type { Meta, StoryObj } from "@storybook/react";
import { MenuCoordenador } from "./MenuCoordenador";

const meta: Meta<typeof MenuCoordenador> = {
    title: "Examples/MenuCoordenador",
    component: MenuCoordenador,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
# Menu do Coordenador

Este exemplo demonstra a estrutura do menu lateral para o **perfil de Coordenador** 
no sistema Educacross.

## Estrutura do Menu

O menu do Coordenador inclui as seguintes seções:

### Itens Principais
- **Painel** - Dashboard principal
- **Relatórios** - Seção expansível com diversos relatórios
- **Cadastros** - Gerenciamento de turmas, professores e alunos
- **Eventos** - Calendário de eventos
- **Avaliação Diagnóstica** - Avaliações do sistema
- **Ajudas e materiais** - Recursos e downloads

### Relatórios Disponíveis
- Volume de acessos
- Acessos mensais alunos
- Acessos professores
- Missões e jogos
- Evidências escolas
- Evidências alunos
- Relatório de habilidades
- Ranking de conquistas

### Cadastros
- Turmas
- Professores
- Alunos

## Interação
- Clique nos itens expansíveis para abrir/fechar os subitens
- Clique nos subitens para selecioná-los
- O item "Relatórios" está destacado como ativo (roxo sólido)
- O subitem selecionado tem fundo roxo claro
                `,
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuCoordenador>;

/**
 * Menu completo do Coordenador com todas as seções expandidas.
 */
export const Default: Story = {
    render: () => <MenuCoordenador />,
};
