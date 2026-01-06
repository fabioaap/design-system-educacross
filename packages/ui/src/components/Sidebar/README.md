# Sidebar Component

## 📋 Resumo

Componente de menu lateral de navegação hierárquico para perfis de professor, com suporte a estados, expansão/collapse e ação secundária.

## ✨ Features

- ✅ 3 componentes (Sidebar, SidebarItem, SidebarSubItem)
- ✅ 3 variantes de item (default, active, selected)
- ✅ Itens expansíveis com indicador visual
- ✅ Suporte a collapse (80px ↔ 260px)
- ✅ Logo customizável no topo
- ✅ Botão de ação secundária no final
- ✅ Tokens semânticos (Light/Dark automático)
- ✅ 17 testes automatizados (100% cobertura)
- ✅ Acessibilidade WCAG AA
- ✅ Animações suaves (200ms)

## 📦 Instalação

```bash
pnpm add @educacross/ui
```

## 🚀 Uso Básico

```tsx
import { Sidebar, SidebarItem, SidebarSubItem } from "@educacross/ui";
import "@educacross/ui/styles.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Sidebar 
      showLogo 
      buttonText="Acessar aplicativo"
      buttonUrl="https://..."
    >
      <SidebarItem 
        icon="Grid" 
        label="Painel" 
        variant="active" 
      />
      
      <SidebarItem
        icon="Flag"
        label="Missões"
        variant="selected"
        expandable
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      {expanded && (
        <>
          <SidebarSubItem label="Missões arquivadas" />
          <SidebarSubItem label="Ranking" active />
        </>
      )}

      <SidebarItem icon="Users" label="Turmas" />
    </Sidebar>
  );
}
```

## 📖 API

### Sidebar Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `ReactNode` | - | Itens do menu |
| `showLogo` | `boolean` | `true` | Exibe logo |
| `collapsed` | `boolean` | `false` | Colapsa sidebar |
| `buttonText` | `string` | - | Texto do botão |
| `buttonUrl` | `string` | - | URL do botão |
| `onButtonClick` | `() => void` | - | Callback do botão |
| `className` | `string` | - | Classes CSS |

### SidebarItem Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `icon` | `IconName` | - | Ícone (react-feather) |
| `label` | `string` | - | Texto do item |
| `variant` | `"default" \| "active" \| "selected"` | `"default"` | Variante visual |
| `expandable` | `boolean` | `false` | Mostra chevron |
| `expanded` | `boolean` | `false` | Estado expandido |
| `onClick` | `() => void` | - | Callback onClick |

### SidebarSubItem Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Texto do subitem |
| `active` | `boolean` | `false` | Estilo ativo |
| `onClick` | `() => void` | - | Callback onClick |

## 🎨 Variantes

### default
```tsx
<SidebarItem icon="Grid" label="Painel" variant="default" />
```

### active
```tsx
<SidebarItem icon="Plus" label="Criar" variant="active" />
```

### selected
```tsx
<SidebarItem icon="Flag" label="Missões" variant="selected" />
```

## 📐 Dimensões

- **Expandido**: 260px
- **Colapsado**: 80px
- **Altura**: 100vh
- **Item**: 44px altura (12px padding vertical)
- **Subitem**: Indentação de 54px à esquerda

## 🎯 Tokens CSS

```css
/* Background */
#1c0f2a (marca Educacross)

/* Estados */
--color-primary-500 (active)
--color-primary-opacity-16 (selected)
--color-primary-opacity-8 (hover)

/* Espaçamento */
--radius-sm (4px)
--radius-md (6px)
```

## ♿ Acessibilidade

- ✅ Navegação por teclado
- ✅ Foco visível
- ✅ Estrutura semântica (`<nav>`, `<button>`)
- ✅ Contraste WCAG AA
- ✅ Indicadores de estado

## 🧪 Testes

```bash
pnpm test Sidebar
```

17 testes cobrindo:
- Renderização
- Estados (collapsed/expanded)
- Variantes (default/active/selected)
- Callbacks onClick
- Logo condicional
- Botão secundário

## 📚 Documentação

- [Storybook](http://localhost:6006/?path=/docs/components-sidebar--docs)
- [MDX](../Sidebar.mdx)
- [Exemplo MenuProfessor](../../examples/MenuProfessor.tsx)

## 🔄 Migração

### Antes (CSS Modules - ~400 linhas)
```tsx
<div className={styles.menuProfessor}>
  <div className={styles.itemDeNavegao3}>
    <img className={styles.icon} />
    <div className={styles.kanban}>Criar missão</div>
  </div>
</div>
```

### Depois (Design System - ~15 linhas)
```tsx
<Sidebar showLogo buttonText="Acessar app">
  <SidebarItem icon="Plus" label="Criar missão" variant="active" />
</Sidebar>
```

### Benefícios
- 📦 **90% menos código**
- 🎨 **Tokens semânticos** (Light/Dark automático)
- ♿ **Acessibilidade integrada**
- 🧪 **100% testado**
- 📚 **Documentação automática**

## 🐛 Troubleshooting

### Ícones não aparecem
```tsx
// ✅ Correto - IconName do react-feather
<SidebarItem icon="Grid" label="Painel" />

// ❌ Errado - ícone inexistente
<SidebarItem icon="MyCustomIcon" label="Painel" />
```

### Subitens não indentam
```tsx
// ✅ Correto - use SidebarSubItem
<SidebarSubItem label="Subitem" />

// ❌ Errado - não use SidebarItem para subitens
<SidebarItem icon="Circle" label="Subitem" />
```

### Logo não aparece
```tsx
// ✅ Correto - showLogo=true (padrão)
<Sidebar showLogo>...</Sidebar>

// ou
<Sidebar>...</Sidebar>

// ❌ Errado - showLogo=false
<Sidebar showLogo={false}>...</Sidebar>
```

## 📝 Changelog

### v0.1.0 (2026-01-06)
- ✨ Componente Sidebar inicial
- ✨ SidebarItem com 3 variantes
- ✨ SidebarSubItem indentado
- ✨ Suporte a collapse
- ✨ Logo customizável
- ✨ Botão de ação secundária
- ✨ 17 testes automatizados
- ✨ Documentação completa

## 🔗 Links Úteis

- [Storybook Local](http://localhost:6006/?path=/docs/components-sidebar--docs)
- [Código Fonte](../../packages/ui/src/components/Sidebar/Sidebar.tsx)
- [Testes](../../packages/ui/src/components/Sidebar/Sidebar.test.tsx)
- [Stories](./Sidebar.stories.tsx)
- [Exemplo MenuProfessor](../examples/MenuProfessor.tsx)

## 💡 Exemplo Completo

Ver [MenuProfessor.tsx](../examples/MenuProfessor.tsx) para implementação completa do menu do perfil de professor com todos os itens e navegação expansível.

## 🎯 Próximos Passos

1. Ver componente no Storybook: http://localhost:6006
2. Testar interações (expandir/colapsar, hover, click)
3. Verificar estados (default/active/selected)
4. Implementar em sua aplicação

## 📞 Suporte

- GitHub Issues
- Documentação: [README.md](../../../../README.md)
- Storybook: http://localhost:6006
