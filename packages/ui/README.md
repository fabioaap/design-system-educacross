# @educacross/ui

Design System oficial da Educacross - Componentes React acessíveis e estilizados com Tailwind CSS.

[![npm version](https://badge.fury.io/js/@educacross%2Fui.svg)](https://www.npmjs.com/package/@educacross/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ Features

- 🎨 **21+ Componentes** - Button, Input, Select, Dialog, Toast, e mais
- 🎯 **TypeScript First** - Tipagem completa e IntelliSense
- ♿ **Acessível** - Construído com Radix UI Primitives (WCAG 2.1 AA)
- 🎨 **Tailwind CSS** - Preset customizado com tokens da marca Educacross
- 📦 **Tree-shakeable** - Importe apenas o que usar
- 🌙 **Dark Mode** - Suporte nativo a temas claro/escuro

## 📦 Instalação

```bash
# npm
npm install @educacross/ui

# pnpm
pnpm add @educacross/ui

# yarn
yarn add @educacross/ui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

## 🚀 Quick Start

### 1. Configure o Tailwind CSS

```js
// tailwind.config.js
import { educacrossPreset } from '@educacross/ui/tailwind-preset'

export default {
  presets: [educacrossPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@educacross/ui/dist/**/*.{js,mjs}'
  ]
}
```

### 2. Importe os estilos base

```tsx
// app.tsx ou main.tsx
import '@educacross/ui/styles.css'
```

### 3. Use os componentes

```tsx
import { Button, Input, Label } from '@educacross/ui'

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email" required>Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="seu@email.com" 
        />
      </div>
      <Button type="submit">Entrar</Button>
    </form>
  )
}
```

## 📚 Componentes

### Branding
| Componente | Descrição |
|------------|-----------|
| `Logo` | Logo Educacross com variantes de tamanho (sm, default, lg) || `AvatarIcon` | Ícone Educacross para usar em avatares sem foto || `Header` | Cabeçalho padrão com menu, logo e perfil do usuário |

### Formulários
| Componente | Descrição |
|------------|-----------|
| `Button` | Botão com variantes primary, secondary, outline, ghost, destructive |
| `Input` | Campo de entrada com suporte a ícones e estados de erro |
| `Label` | Rótulo acessível com indicador de obrigatório |
| `Checkbox` | Caixa de seleção com estados indeterminate |
| `Radio` | Grupo de opções exclusivas |
| `Select` | Dropdown com busca e seleção |
| `Switch` | Toggle on/off |
| `Textarea` | Área de texto multilinha |

### Feedback
| Componente | Descrição |
|------------|-----------|
| `Alert` | Mensagens de alerta (info, success, warning, error) |
| `Toast` | Notificações temporárias com hook `useToast` |
| `Dialog` | Modal acessível com focus trap |
| `Progress` | Barra de progresso |
| `Spinner` | Indicador de carregamento |

### Layout & Navegação
| Componente | Descrição |
|------------|-----------|
| `Card` | Container com header, content, footer |
| `Tabs` | Navegação por abas |
| `Accordion` | Painéis colapsáveis |
| `Separator` | Divisor horizontal/vertical |

### Data Display
| Componente | Descrição |
|------------|-----------|
| `Avatar` | Imagem de perfil com fallback |
| `Badge` | Tags e indicadores |
| `Icon` | Wrapper para ícones Feather |

## 🎨 Theming

### Cores da Marca

```css
/* Cores primárias */
--color-primary: #FF6B2C;     /* Laranja Educacross */
--color-secondary: #2563EB;   /* Azul */
--color-accent: #10B981;      /* Verde */

/* Semânticas */
--color-success: #22C55E;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### Customização

```js
// tailwind.config.js
export default {
  presets: [educacrossPreset],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#SUA_COR',
          50: '#...',
          // ...
        }
      }
    }
  }
}
```

## 🔧 API

### Button

```tsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size="md"         // 'sm' | 'md' | 'lg'
  loading={false}   // boolean
  disabled={false}  // boolean
  asChild={false}   // boolean - usar como Slot
>
  Clique aqui
</Button>
```

### Input

```tsx
<Input
  variant="default" // 'default' | 'filled'
  size="md"         // 'sm' | 'md' | 'lg'
  error={false}     // boolean
  leftIcon={<Icon />}
  rightIcon={<Icon />}
/>
```

### Toast (useToast)

```tsx
import { useToast, Toaster } from '@educacross/ui'

function App() {
  const { toast } = useToast()

  return (
    <>
      <Button onClick={() => toast({ 
        title: 'Sucesso!',
        description: 'Operação realizada',
        variant: 'success'
      })}>
        Mostrar Toast
      </Button>
      <Toaster />
    </>
  )
}
```

### Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descrição opcional</DialogDescription>
    </DialogHeader>
    <div>Conteúdo do modal</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogClose>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## 📖 Documentação

Acesse o [Storybook](https://educacross.github.io/design-system) para documentação completa e playground interativo.

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](../../CONTRIBUTING.md) para guidelines de contribuição.

## 📄 Licença

MIT © [Educacross](https://educacross.com.br)

---

Feito com 💜 pela equipe Educacross
