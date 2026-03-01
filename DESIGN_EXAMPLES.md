# 📝 Exemplos de Uso - Design System Glassmorphism

## Guia Prático para Usar o Novo Design System

---

## 1️⃣ Cards com Efeito Glassmorphic

### Exemplo Básico
```html
<div class="glass-card p-6 rounded-lg">
  <h2 class="text-h2 mb-4">Título do Card</h2>
  <p class="text-body text-secondary">
    Descrição com efeito glassmorphic
  </p>
</div>
```

**Resultado Visual:**
- Fundo translúcido branco (60% opacidade)
- Blur de fundo em 20px
- Borda sutil branca
- Sombra leve
- Comportamento hover: background mais branco + sombra maior

### Card com Ícone e Ação
```html
<div class="glass-card p-6 flex items-start gap-4">
  <div class="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center">
    📦
  </div>
  <div>
    <h3 class="text-subtitle font-semibold">Produto em Destaque</h3>
    <p class="text-caption text-secondary mt-1">
      Descrição breve do produto
    </p>
  </div>
  <button class="btn-primary ml-auto">Comprar</button>
</div>
```

---

## 2️⃣ Sistema de Botões

### Botão Primário
```html
<!-- Ação principal com gradiente -->
<button class="btn-primary">
  Confirmar
</button>

<!-- Com ícone -->
<button class="btn-primary">
  ➕ Adicionar Novo
</button>

<!-- Desabilitado -->
<button class="btn-primary" disabled>
  Processando...
</button>
```

**Comportamento:**
- Gradiente de amarelo 135deg
- Hover: Brilho aumentado + elevação
- Active: Escala 0.98 para feedback tátil
- Disabled: Opacidade 50%

### Botão Secundário
```html
<!-- Ações secundárias -->
<button class="btn-secondary">
  Cancelar
</button>

<!-- Múltiplos botões -->
<div class="flex gap-3">
  <button class="btn-secondary">Salvar Rascunho</button>
  <button class="btn-primary">Publicar</button>
</div>
```

**Comportamento:**
- Background branco 50% + glassmorphic
- Hover: Aumenta para 75% de opacidade
- Transição suave 150ms

### Botão Ghost
```html
<!-- Para ações menos importantes -->
<button class="btn-ghost">
  Ver Mais Opções
</button>

<!-- Em listas de ações -->
<div class="flex gap-2">
  <button class="btn-ghost">Editar</button>
  <button class="btn-ghost">Compartilhar</button>
  <button class="btn-ghost">Deletar</button>
</div>
```

**Comportamento:**
- Transparente com borda sutil
- Hover: Background cinza muito claro
- Ideal para ações contextuais

---

## 3️⃣ Setup de Formulários

### Input Glassmorphic
```html
<form class="space-y-6">
  <!-- Campo simples -->
  <input 
    type="text" 
    class="input-glass w-full"
    placeholder="Digite seu email..."
  >

  <!-- Campo com label -->
  <div>
    <label class="text-body font-semibold mb-2 block">
      Seu Nome
    </label>
    <input 
      type="text" 
      class="input-glass w-full"
      placeholder="João Silva"
    >
  </div>

  <!-- Textarea -->
  <textarea 
    class="input-glass w-full min-h-[120px] resize-none"
    placeholder="Deixe sua mensagem..."
  ></textarea>
</form>
```

**Comportamento:**
- Background branco 50%
- Blur ativado
- Focus: Aumenta opacidade para 80% + glow sutil

### Select/Dropdown
```html
<select class="input-glass w-full">
  <option value="">Escolha uma opção</option>
  <option value="opt1">Opção 1</option>
  <option value="opt2">Opção 2</option>
</select>
```

---

## 4️⃣ Sistema de Abas

### Tabs Container
```html
<div class="tabs-container">
  <button class="tab-trigger">Produtos</button>
  <button class="tab-trigger" data-state="active">
    Vendas
  </button>
  <button class="tab-trigger">Entregas</button>
</div>

<!-- Conteúdo das abas -->
<div class="mt-6 p-6">
  <!-- Conteúdo da aba ativa -->
  <h3 class="text-h2 mb-4">Vendas Recentes</h3>
  <p class="text-body">...</p>
</div>
```

**Estilos:**
- Container glassmorphic com padding 4px
- Tab hover: fundo branco 30%
- Tab ativo: fundo branco 80% + cor primária

---

## 5️⃣ Caixas de Alerta

### Sucesso
```html
<div class="alert-box success">
  <div class="text-2xl">✅</div>
  <div>
    <h4 class="font-semibold">Sucesso!</h4>
    <p class="text-sm text-secondary">
      Seu pedido foi confirmado com sucesso.
    </p>
  </div>
</div>
```

---

## 6️⃣ Sessões Toggleable
Quando quiser seções que se expandem/contraiam suavemente (como filtros, mapas ou painéis), use o utilitário global `.toggleable`.

```html
<button class="btn-ghost" onclick="toggle()">
  <i data-feather="filter" class="h-5 w-5"></i>
</button>

<div class="toggleable bg-card/70 backdrop-blur-md border border-white/20 rounded-lg p-4 mt-2">
  <!-- conteúdo oculto inicialmente -->
</div>
```

A classe `open` adicionada dinamicamente controla a animação através de `max-height` e `opacity`.

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

### Erro
```html
<div class="alert-box error">
  <div class="text-2xl">❌</div>
  <div>
    <h4 class="font-semibold">Erro na Operação</h4>
    <p class="text-sm text-secondary">
      Não foi possível processar sua solicitação.
    </p>
  </div>
</div>
```

### Aviso
```html
<div class="alert-box warning">
  <div class="text-2xl">⚠️</div>
  <div>
    <h4 class="font-semibold">Atenção</h4>
    <p class="text-sm text-secondary">
      Este produto está com estoque baixo.
    </p>
  </div>
</div>
```

### Info
```html
<div class="alert-box info">
  <div class="text-2xl">ℹ️</div>
  <div>
    <h4 class="font-semibold">Informação</h4>
    <p class="text-sm text-secondary">
      A manutenção será realizada amanhã às 22h.
    </p>
  </div>
</div>
```

---

## 6️⃣ Chips e Badges

### Chip Simples
```html
<div class="flex gap-2 flex-wrap">
  <span class="chip">Promoção</span>
  <span class="chip">Frete Grátis</span>
  <span class="chip">Premium</span>
</div>
```

### Chip com Ícone
```html
<span class="chip">
  🏷️ Desconto 20%
</span>

<span class="chip">
  ⭐ Recomendado
</span>
```

### Chip Clicável
```html
<button class="chip hover:bg-white/80 cursor-pointer">
  ✕ Remover Filtro
</button>
```

---

## 7️⃣ Header Glassmorphic

### Header Simples
```html
<header class="header-glass">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <h1 class="text-h2">Logo</h1>
      <nav class="flex gap-8">
        <a href="#" class="text-body hover:text-primary">Home</a>
        <a href="#" class="text-body hover:text-primary">Produtos</a>
        <a href="#" class="text-body hover:text-primary">Contato</a>
      </nav>
    </div>
  </div>
</header>
```

### Header com Busca
```html
<header class="header-glass">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="flex items-center justify-between gap-4">
      <h1 class="text-h2">Logo</h1>
      <div class="flex-1 max-w-sm">
        <input 
          type="search" 
          class="input-glass w-full"
          placeholder="Pesquisar produtos..."
        >
      </div>
      <button class="btn-primary">Buscar</button>
    </div>
  </div>
</header>
```

---

## 8️⃣ Tipografia

### Exemplo Completo de Hierarquia
```html
<div class="space-y-8">
  <!-- H1: Título Principal -->
  <h1 class="text-h1">
    Catálogo de Produtos
  </h1>

  <!-- H2: Subtítulo -->
  <h2 class="text-h2">
    Produtos em Destaque
  </h2>

  <!-- Subtitle: Introdução -->
  <p class="text-subtitle">
    Confira nossa seleção exclusiva de produtos.
  </p>

  <!-- Body: Parágrafo Normal -->
  <p class="text-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  <!-- Caption: Texto Pequeno -->
  <p class="text-caption">
    Última atualização: Hoje às 14:30
  </p>

  <!-- Texto Secundário -->
  <p class="text-body text-secondary">
    Descrição em cor mais suave
  </p>
</div>
```

---

## 9️⃣ Componente Completo: Card de Produto

```html
<div class="glass-card overflow-hidden">
  <!-- Imagem do Produto -->
  <div class="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
    🎁
  </div>

  <!-- Conteúdo do Card -->
  <div class="p-6 space-y-4">
    <!-- Título -->
    <h3 class="text-h2">Nome do Produto</h3>

    <!-- Descrição -->
    <p class="text-body text-secondary">
      Descrição breve do produto com informações importantes.
    </p>

    <!-- Tags -->
    <div class="flex gap-2 flex-wrap">
      <span class="chip">Novo</span>
      <span class="chip">Promoção</span>
    </div>

    <!-- Preço -->
    <div class="border-t border-white/20 pt-4">
      <p class="text-caption text-secondary">Preço:</p>
      <p class="text-2xl font-bold text-primary">R$ 129,90</p>
    </div>

    <!-- Ações -->
    <div class="flex gap-3 pt-4">
      <button class="btn-secondary flex-1">Ver Detalhes</button>
      <button class="btn-primary flex-1">Comprar</button>
    </div>
  </div>
</div>
```

---

## 🔟 Container com Fundo

### Layout Principal
```html
<main class="bg-container">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-h1 mb-8">Dashboard</h1>

    <!-- Grid de Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="glass-card p-6">...</div>
      <div class="glass-card p-6">...</div>
      <div class="glass-card p-6">...</div>
    </div>
  </div>
</main>
```

---

## 1️⃣1️⃣ Animações

### Fade In
```html
<div class="animate-fade-in">
  Conteúdo aparece com fade suave
</div>
```

### Slide Down
```html
<div class="animate-slide-down">
  Menu desce com fade simultanêo
</div>
```

### Fade In Scale
```html
<div class="animate-fade-in-scale">
  Modal aparece com escala e fade
</div>
```

### Transição Suave
```html
<div class="transition-smooth hover:shadow-lg hover:scale-105">
  Elemento com transição suave no hover
</div>
```

---

## 1️⃣2️⃣ Padrões Úteis

### Container Responsivo
```html
<div class="bg-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Conteúdo centrado -->
</div>
```

### Grid Responsivo
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="glass-card">...</div>
  <div class="glass-card">...</div>
  <div class="glass-card">...</div>
</div>
```

### Flex com Gap
```html
<div class="flex gap-4 flex-wrap">
  <button class="btn-primary">Botão 1</button>
  <button class="btn-secondary">Botão 2</button>
  <button class="btn-ghost">Botão 3</button>
</div>
```

### Stack Vertical
```html
<div class="space-y-6">
  <h1 class="text-h1">Título</h1>
  <p class="text-body">Parágrafo 1</p>
  <p class="text-body">Parágrafo 2</p>
  <button class="btn-primary">Ação</button>
</div>
```

---

## ✨ Combinações Comuns

### Card com Ação
```html
<div class="glass-card p-6 flex justify-between items-center">
  <div>
    <h4 class="text-subtitle font-semibold">Título</h4>
    <p class="text-caption text-secondary">Subtítulo</p>
  </div>
  <button class="btn-primary">Ação</button>
</div>
```

### Lista glassmorphic
```html
<div class="glass-card divide-y divide-white/20">
  <div class="p-4 hover:bg-white/20 transition-smooth cursor-pointer">
    Item 1
  </div>
  <div class="p-4 hover:bg-white/20 transition-smooth cursor-pointer">
    Item 2
  </div>
  <div class="p-4 hover:bg-white/20 transition-smooth cursor-pointer">
    Item 3
  </div>
</div>
```

### Profile Card
```html
<div class="glass-card p-8 text-center space-y-4">
  <div class="w-16 h-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center text-3xl">
    👤
  </div>
  <h3 class="text-h2">João Silva</h3>
  <p class="text-caption text-secondary">
    @joaosilva • Usuário Premium
  </p>
  <div class="flex gap-3 justify-center">
    <button class="btn-primary">Seguir</button>
    <button class="btn-secondary">Mensagem</button>
  </div>
</div>
```

---

## 📌 Dicas e Boas Práticas

1. **Sempre use `glass-card`** para componentes principais
2. **Mantenha consistência** com espaçamento (use `gap-4`, `gap-6`, `p-6`, etc)
3. **Use `text-secondary`** para texto menos importante
4. **Combinar `transition-smooth`** com hover para feedback visual
5. **Preferir `btn-primary`** para ações mais importantes
6. **Usar `space-y-*`** para stacks verticais
7. **Responsividade first**: Mobile primeiro, depois `sm:`, `md:`, `lg:`

---

**Última Atualização**: 1º de Março de 2026
**Design System**: 1.0.0
