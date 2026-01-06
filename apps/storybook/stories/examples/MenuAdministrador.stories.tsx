import type { Meta, StoryObj } from "@storybook/react";
import { MenuAdministrador } from "./MenuAdministrador";

const meta: Meta<typeof MenuAdministrador> = {
    title: "Examples/MenuAdministrador",
    component: MenuAdministrador,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
# Menu do Administrador

Este exemplo demonstra a estrutura do menu lateral para o **perfil de Administrador** 
no sistema Educacross.

## Estrutura do Menu

O menu do Administrador inclui as seguintes seções:

### Itens Principais
- **Painel Inicial** - Dashboard principal
- **Relatórios Gerais** - Seção expansível com relatórios gerais do sistema
- **Missões da Escola** - Gerenciamento de missões
- **Sistema de Ensino** - Configurações do sistema
- **Eventos** - Calendário de eventos
- **Expedição Leitura** - Módulo de leitura
- **Avaliações** - Diferentes tipos de avaliações
- **Cadastros** - Gerenciamento completo de usuários e entidades
- **Gerenciador** - Configurações administrativas
- **Educateca** - Biblioteca de conteúdo
- **Ajudas e materiais** - Recursos e downloads

### Relatórios Gerais
- Volume de acessos
- Acessos mensais alunos
- Acessos professores
- Evidências Escolas
- Evidências Alunos
- Habilidades
- Ranking de conquistas

### Avaliações
- Complexidade Narrativa
- Fluência Leitora
- Avaliação Digital

### Cadastros
- Turmas
- Grupos
- Professores
- Alunos
- Coordenadores
- Diretores
- Migrar alunos
- Logotipo da escola

## Interação
- Clique nos itens expansíveis para abrir/fechar os subitens
- Clique nos subitens para selecioná-los
- O item "Relatórios Gerais" está destacado como ativo (roxo sólido)
- O subitem selecionado tem fundo roxo claro
                `,
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuAdministrador>;

/**
 * Menu completo do Administrador com a seção de Relatórios Gerais expandida.
 */
export const Default: Story = {
    render: () => <MenuAdministrador />,
};
