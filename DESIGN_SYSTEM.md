# Design System - Glassmorphism Modern

## 📋 Resumo das Alterações

Refatoração completa do estilo visual da interface para seguir um **design system moderno inspirado em glassmorphism** (estética Apple-like).

### Escopo de Aplicação
- ✅ **APLICADO SOMENTE ao tema claro** (`:root`)
- ✅ Tema escuro (`.dark`) mantido intacto
- ✅ HTML existente não foi alterado
- ✅ Lógica JavaScript preservada
- ✅ Responsividade mantida

---

## 🎨 Design Tokens Implementados

### Paleta de Cores
```css
--background: 0 0% 100%;              /* Branco puro */
--foreground: 0 0% 8%;                /* Preto muito escuro */
--primary: 45 100% 45%;               /* Dourado/Amarelo quente */
--muted-foreground: 0 0% 40%;         /* Cinza médio */
```

### Glassmorphism Foundation
```css
--glass-primary: rgba(255, 255, 255, 0.6);     /* Vidro com 60% transparência */
--glass-border: rgba(255, 255, 255, 0.4);      /* Borda sutil */
--glass-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); /* Sombra leve */
--glass-blur: blur(20px);                       /* Desfoque do fundo */
```

### Spacing Scale (4px base)
```css
--spacing-xs: 4px;      /* Minimal */
--spacing-sm: 8px;      /* Small */
--spacing-md: 16px;     /* Medium */
--spacing-lg: 24px;     /* Large */
--spacing-xl: 32px;     /* Extra Large */
--spacing-2xl: 48px;    /* 2X Large */
```

### Border Radius
```css
--radius-sm: 4px;       /* Small elements */
--radius-md: 8px;       /* Buttons, inputs */
--radius-lg: 16px;      /* Cards, containers */
--radius-xl: 24px;      /* Large containers */
```

### Typography
```css
/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Font Sizes */
--font-size-h1: 2rem;           /* Bold */
--font-size-h2: 1.5rem;         /* Semibold */
--font-size-subtitle: 1.125rem; /* Medium */
--font-size-body: 1rem;         /* Regular */
--font-size-caption: 0.875rem;  /* Light */
```

### Shadow System
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.16);
```

### Transition Timings
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

---

## 🧱 Classes de Componentes

### Glass Card
Componente base com efeito glassmorphism.
```html
<div class="glass-card">
  Conteúdo com efeito vidro
</div>
```

**Estilos:**
- Background: `rgba(255, 255, 255, 0.6)`
- Backdrop blur: `blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.4)`
- Shadow: `0 8px 24px rgba(0, 0, 0, 0.08)`

### Botões

#### Primary Button
```html
<button class="btn-primary">Ação Principal</button>
```
- Gradiente: `135deg, hsl(45, 100%, 50%) → hsl(45, 100%, 40%)`
- Hover: Aumenta brilho + sombra
- Active: Escala 0.98

#### Secondary Button
```html
<button class="btn-secondary">Ação Secundária</button>
```
- Background: `rgba(255, 255, 255, 0.5)`
- Efeito glassmorphic

#### Ghost Button
```html
<button class="btn-ghost">Ação Mínima</button>
```
- Transparente, apenas borda

### Inputs
```html
<input type="text" class="input-glass" placeholder="Digite...">
```
- Glassmorphic com focus state
- Backdrop blur ativado

### Tabs
```html
<div class="tabs-container">
  <button class="tab-trigger">Tab 1</button>
  <button class="tab-trigger" data-state="active">Tab 2</button>
</div>
```

### Alerts
```html
<div class="alert-box success">Mensagem de sucesso</div>
<div class="alert-box error">Mensagem de erro</div>
<div class="alert-box warning">Mensagem de aviso</div>
<div class="alert-box info">Mensagem informativa</div>
```

### Chips/Badges
```html
<span class="chip">Label</span>
```
- Glassmorphic com borda sutil
- Hover com sombra

### Header
```html
<header class="header-glass">
  Conteúdo do header
</header>
```
- Glassmorphic com borda inferior

### Background Container
```html
<div class="bg-container">
  Conteúdo em container principal
</div>
```

---

## 📝 Classes de Tipografia

```html
<!-- Heading 1 - Bold -->
<h1 class="text-h1">Título Principal</h1>

<!-- Heading 2 - Semibold -->
<h2 class="text-h2">Subtítulo</h2>

<!-- Subtitle - Medium -->
<p class="text-subtitle">Texto de Introdução</p>

<!-- Body - Regular -->
<p class="text-body">Parágrafo de texto normal</p>

<!-- Caption - Light -->
<p class="text-caption">Texto pequeno/legenda</p>

<!-- Secondary text - Applies muted color -->
<p class="text-secondary">Texto secundário</p>
```

---

## 🎬 Animações

### Fade In
```css
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

### Slide Down
```css
.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
```

### Fade In Scale
```css
.animate-fade-in-scale {
  animation: fadeInScale 0.3s ease-out;
}
```

### Toggleable Sections
Use this utility to enable smooth expansion/contraction for cards, popups, panels, or any element that is shown/hidden vertically.

```html
<div class="toggleable">
  Conteúdo oculta inicialmente
</div>

<div class="toggleable open">
  Conteúdo visível com altura e opacidade ajustadas
</div>
```

**Comportamento CSS:**
- `max-height` e `opacity` transitam em 0.3s
- `overflow: hidden` protege contra overflow durante a animação
- A classe adicional `.open` ativa os estados visíveis

```css
.toggleable {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.toggleable.open {
  max-height: 1000px;
  opacity: 1;
}
```


---

## ⏱️ Transições

```html
<!-- Transição suave (300ms) -->
<div class="transition-smooth">...</div>

<!-- Transição rápida (150ms) -->
<div class="transition-quick">...</div>

<!-- Transição lenta (500ms) -->
<div class="transition-slow">...</div>
```

---

## 🔧 Estrutura de Arquivos

### `src/index.css`
- Define todos os tokens CSS no `:root`
- Implementa classes de componentes no `@layer components`
- Mantém animações e keyframes
- **Tema escuro preservado em `.dark`**

### `src/App.css`
- Limpo e minimalista
- Apenas estilos específicos da aplicação

### `tailwind.config.ts`
- Atualizado com novos tokens
- Spacing scale alinhado ao design system
- Shadow system integrado
- Backdrop blur suportado

---

## 🌐 Responsividade

Todos os estilos mantêm responsividade através de:
- Layout flexível
- Padding/margin em scale proporcional
- Media queries preservadas
- Classe `glass-card` e variantes funcionam em todos os tamanhos

---

## 🎯 Regras Implementadas

✅ Código modular e reutilizável
✅ Uso extensivo de variáveis CSS
✅ Zero duplicação de estilos
✅ Acessibilidade mantida
✅ Contraste legível em todo lugar
✅ Consistência visual garantida
✅ Performance otimizada (CSS variables + backdrop-filter)

---

## 💡 Guia de Uso Rápido

### Para Criar um Card Glassmorphic
```html
<div class="glass-card p-6">
  <h2 class="text-h2">Título</h2>
  <p class="text-body">Conteúdo...</p>
</div>
```

### Para Criar um Botão
```html
<button class="btn-primary">Enviar</button>
<button class="btn-secondary">Cancelar</button>
<button class="btn-ghost">Mais opções</button>
```

### Para Criar um Input
```html
<input type="text" class="input-glass" placeholder="Digite aqui...">
```

### Para Aplicar Tipografia
```html
<h1 class="text-h1">Título Importante</h1>
<p class="text-body text-secondary">Descrição em destaque...</p>
```

---

## 🔄 Próximos Passos (Opcional)

Se desejar estender o design system:

1. **Adicionar ícones** com tamanho padronizado
2. **Criar componentes compostos** (Card com Header + Body)
3. **Expandir paleta de cores** com mais variações
4. **Implementar modo RtL** para suporte multilíngue
5. **Otimizar performance** com CSS variables

---

## 📚 Referências

- **Design Inspiration**: Apple Design System (SF Design)
- **Glassmorphism**: Modern UI/UX trend combining transparency & blur
- **Spacing**: 4px base module system
- **Color**: HSL format para melhor manipulação
- **Bootstrap**: Tailwind CSS + Custom CSS variables

---

**Última Atualização**: 1ª de Março de 2026
**Versão do Design System**: 1.0.0
