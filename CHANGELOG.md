# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.1.0] - 2026-01-06

### Added

#### Branding
- `Logo` - Componente reutilizável da logo Educacross com 3 tamanhos (sm, default, lg)
- `AvatarIcon` - Ícone Educacross para usar em avatares quando não há foto do usuário
- `Header` - Componente de cabeçalho com menu, logo e perfil do usuário com avatar
- Integração de assets SVG no sistema de build (tsup + cópia para dist)
- Suporte TypeScript para importação de SVGs e imagens

#### Infrastructure
- Setup inicial do monorepo com pnpm 9.15.0 + Turborepo 2.7.2
- Pacote `@educacross/ui` publicável (ESM + CJS + DTS)
- Tailwind preset com sistema de tokens CSS
- CI/CD com GitHub Actions (lint, typecheck, build, test)
- Storybook 8.4 com addons: Docs, Controls, Actions, Viewport, A11y, Interactions, Themes
- Bundling de assets estáticos (SVG/imagens) no pacote npm

#### Components P1 (Core)
- `Button` - 6 variantes (default, secondary, destructive, outline, ghost, link), 4 tamanhos, loading state
- `Input` - variantes default/error, 3 tamanhos, estados completos
- `Label` - variantes de estilo, indicador de obrigatório

#### Components P2 (Data Display)
- `Card` - container flexível com Header, Content, Footer, Title, Description
- `Badge` - 4 variantes (default, secondary, destructive, outline)
- `Avatar` - imagem com fallback, 4 tamanhos
- `Checkbox` - estados checked/indeterminate, variantes, label integrado
- `Radio` - RadioGroup com controle de estado
- `Select` - dropdown nativo com variantes e estados
- `Dialog` - modal acessível com overlay, trigger, close
- `Alert` - 4 variantes para feedback (default, destructive, success, warning)
- `Toast` - notificações temporárias com auto-dismiss

#### Components P3 (Advanced)
- `Tabs` - navegação em abas com TabsList, TabsTrigger, TabsContent
- `Accordion` - single/multiple com animações
- `Tooltip` - dicas contextuais com delay configurável
- `DropdownMenu` - menu de ações com submenus e separadores
- `Popover` - conteúdo flutuante posicionável
- `Table` - componentes Table, TableHeader, TableBody, TableRow, TableCell, etc.
- `Pagination` - navegação de páginas com links e botões
- `Skeleton` - loading placeholders com variantes

#### Icons
- Integração com Feather Icons via react-feather
- Componente `Icon` com 4 tamanhos e variantes de cor
- Categorização de ícones para fácil descoberta

#### Documentation
- Stories com autodocs para todos os 21 componentes
- Foundations: Colors, Typography, Spacing, Icons
- Guidelines: Accessibility, States
- Patterns: FormField (composição Label + Input)

### Fixed
- Erros de lint `no-empty-object-type` em interfaces vazias
- Erros `no-unused-vars` com prefixo underscore
- Erros `no-constant-binary-expression` em testes
- Path do lint script no Storybook
- Configuração ESLint para permitir hooks em stories
- Warning `exhaustive-deps` no Accordion com useMemo

### Changed
- Warnings `no-explicit-any` resolvidos com tipos corretos
- Warnings `react-refresh/only-export-components` desabilitados para biblioteca
- Configuração `type: module` adicionada ao package.json raiz

### Tests
- 520 testes unitários cobrindo todos os componentes (94% cobertura)
- Testes para AvatarIcon (11), Logo (11), Header (18)
- Testes para Accordion (13), Avatar (17), DropdownMenu (21), Icon (29)
- Testes para Pagination (17), Popover (15), Tabs (12), Tooltip (13)
- Testes para Badge (16), Card (25), Skeleton (30), Table (29)
- Play functions em 6 stories: Dialog, Toast, Select, Accordion, Tabs, DropdownMenu

## [Unreleased]

### Added
- (próximas features)

---

## Convenções de Versionamento

- **MAJOR** (1.0.0): Breaking changes na API pública
- **MINOR** (0.1.0): Novas features retrocompatíveis
- **PATCH** (0.0.1): Bug fixes retrocompatíveis

## Tipos de Mudança

- `Added` - Novas features
- `Changed` - Mudanças em features existentes
- `Deprecated` - Features que serão removidas
- `Removed` - Features removidas
- `Fixed` - Bug fixes
- `Security` - Correções de vulnerabilidades
