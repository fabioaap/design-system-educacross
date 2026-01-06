import type { Meta, StoryObj } from "@storybook/react";
import { Select, Button } from "@educacross/ui";
import { useState } from "react";

const meta: Meta = {
    title: "Patterns/Filters",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "Exemplo de barra de filtros com múltiplos selects e ações em lote, baseado no design do sistema Educacross.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Componente de exemplo mostrando uma barra de filtros completa.
 */
function FilterBar() {
    const [filter1, setFilter1] = useState("");
    const [filter2, setFilter2] = useState("");
    const [period, setPeriod] = useState("09/08/2023 a 22/08/2023");
    const [actions, setActions] = useState("");

    const filter1Options = [
        { value: "", label: "Todos" },
        { value: "opcao1", label: "Opção 1" },
        { value: "opcao2", label: "Opção 2" },
        { value: "opcao3", label: "Opção 3" },
    ];

    const filter2Options = [
        { value: "", label: "Todos" },
        { value: "tipo1", label: "Tipo 1" },
        { value: "tipo2", label: "Tipo 2" },
        { value: "tipo3", label: "Tipo 3" },
    ];

    const periodOptions = [
        { value: "09/08/2023 a 22/08/2023", label: "09/08/2023 a 22/08/2023" },
        { value: "01/08/2023 a 15/08/2023", label: "01/08/2023 a 15/08/2023" },
        { value: "16/08/2023 a 31/08/2023", label: "16/08/2023 a 31/08/2023" },
        { value: "custom", label: "Período personalizado" },
    ];

    const actionsOptions = [
        { value: "", label: "Ações em lote" },
        { value: "export", label: "Exportar selecionados" },
        { value: "delete", label: "Excluir selecionados" },
        { value: "archive", label: "Arquivar selecionados" },
    ];

    return (
        <div className="w-full max-w-7xl p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap gap-4">
                {/* Filtro 1 */}
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Filtro 1
                    </label>
                    <Select
                        options={filter1Options}
                        value={filter1}
                        onChange={(e) => setFilter1(e.target.value)}
                        placeholder="Todos"
                    />
                </div>

                {/* Filtro 2 */}
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Filtro 2
                    </label>
                    <Select
                        options={filter2Options}
                        value={filter2}
                        onChange={(e) => setFilter2(e.target.value)}
                        placeholder="Todos"
                    />
                </div>

                {/* Filtro de Período */}
                <div className="flex-1 min-w-[250px]">
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Filtro de Período
                    </label>
                    <Select
                        options={periodOptions}
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    />
                </div>

                {/* Ações em lote */}
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-transparent mb-2">
                        &nbsp;
                    </label>
                    <Select
                        options={actionsOptions}
                        value={actions}
                        onChange={(e) => setActions(e.target.value)}
                        placeholder="Ações em lote"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
}

/**
 * Barra de filtros padrão com 4 campos.
 */
export const Default: Story = {
    render: () => <FilterBar />,
};

/**
 * Versão compacta com 3 filtros.
 */
export const Compact: Story = {
    render: () => {
        const [filter1, setFilter1] = useState("");
        const [filter2, setFilter2] = useState("");
        const [period, setPeriod] = useState("09/08/2023 a 22/08/2023");

        return (
            <div className="w-full max-w-5xl p-6 bg-gray-50 rounded-lg">
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Categoria
                        </label>
                        <Select
                            options={[
                                { value: "", label: "Todos" },
                                { value: "cat1", label: "Categoria 1" },
                                { value: "cat2", label: "Categoria 2" },
                            ]}
                            value={filter1}
                            onChange={(e) => setFilter1(e.target.value)}
                            placeholder="Todos"
                        />
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Status
                        </label>
                        <Select
                            options={[
                                { value: "", label: "Todos" },
                                { value: "active", label: "Ativo" },
                                { value: "inactive", label: "Inativo" },
                            ]}
                            value={filter2}
                            onChange={(e) => setFilter2(e.target.value)}
                            placeholder="Todos"
                        />
                    </div>

                    <div className="flex-1 min-w-[250px]">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Período
                        </label>
                        <Select
                            options={[
                                { value: "09/08/2023 a 22/08/2023", label: "09/08/2023 a 22/08/2023" },
                                { value: "custom", label: "Personalizado" },
                            ]}
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    },
};

/**
 * Filtros em linha única (responsivo).
 */
export const InlineFilters: Story = {
    render: () => {
        const [filter, setFilter] = useState("");

        return (
            <div className="w-full p-6 bg-white rounded-lg border">
                <div className="flex flex-wrap items-end gap-3">
                    <div className="flex-1 min-w-[150px]">
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                            Escola
                        </label>
                        <Select
                            options={[
                                { value: "", label: "Todas" },
                                { value: "escola1", label: "Escola Municipal A" },
                                { value: "escola2", label: "Escola Estadual B" },
                            ]}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            size="sm"
                        />
                    </div>

                    <div className="flex-1 min-w-[150px]">
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                            Turma
                        </label>
                        <Select
                            options={[
                                { value: "", label: "Todas" },
                                { value: "1a", label: "1º Ano A" },
                                { value: "2a", label: "2º Ano A" },
                            ]}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            size="sm"
                        />
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                            Data
                        </label>
                        <Select
                            options={[
                                { value: "hoje", label: "Hoje" },
                                { value: "semana", label: "Esta semana" },
                                { value: "mes", label: "Este mês" },
                            ]}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            size="sm"
                        />
                    </div>

                    <Button size="sm" variant="outline">
                        Limpar filtros
                    </Button>
                </div>
            </div>
        );
    },
};

/**
 * Filtros com botão de aplicar.
 */
export const WithApplyButton: Story = {
    render: () => {
        const [filter1, setFilter1] = useState("");
        const [filter2, setFilter2] = useState("");

        return (
            <div className="w-full max-w-4xl p-6 bg-gray-50 rounded-lg">
                <div className="flex flex-wrap items-end gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Categoria
                        </label>
                        <Select
                            options={[
                                { value: "", label: "Selecione" },
                                { value: "1", label: "Missões" },
                                { value: "2", label: "Jogos" },
                                { value: "3", label: "Avaliações" },
                            ]}
                            value={filter1}
                            onChange={(e) => setFilter1(e.target.value)}
                        />
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Ordenar por
                        </label>
                        <Select
                            options={[
                                { value: "recent", label: "Mais recentes" },
                                { value: "old", label: "Mais antigos" },
                                { value: "name", label: "Nome A-Z" },
                            ]}
                            value={filter2}
                            onChange={(e) => setFilter2(e.target.value)}
                        />
                    </div>

                    <Button>Aplicar filtros</Button>
                    <Button variant="ghost">Limpar</Button>
                </div>
            </div>
        );
    },
};
