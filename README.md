# ✨ TypewriterEffect

A lightweight, customizable vanilla JavaScript class for creating typewriter-style animations — for both `placeholder` and `innerText` targets.

## 🌟 Features

- 🔠 Animate phrases in a typewriter-style effect
- ✅ Supports both `placeholder` and `innerText` output
- 🎯 Customize typing speed, deleting speed, and pause between phrases
- 🔤 Optional `prefix` and `suffix` for every phrase
- 💡 Zero dependencies, just plain JavaScript

---

## 🚀 Installation

You can use the script directly via CDN:

```html
<script src="https://developer-zahid.github.io/TypewriterEffect/script.js"></script>

<!-- Minified Version -->
<script src="https://cdn.jsdelivr.net/gh/Developer-Zahid/TypewriterEffect@latest/script.min.js"></script>
```

## 🔧 Usage
### 1. Add a target element

```html
<!-- Placeholder mode -->
<textarea id="placeholderSelector" placeholder="" required rows="5"></textarea>

<!-- Text mode -->
<div id="textSelector"></div>
```

### 2. Initialize the effect

```js
new TypewriterEffect('#placeholderSelector', {
  target: 'placeholder' // or 'text',
  prefix: 'Generate ',
  suffix: '_',
  phrases: [
    'product descriptions',
    'LinkedIn posts',
    'funny tweets'
  ],
  typingSpeed: 90,
  deletingSpeed: 50,
  pauseBetweenWords: 2000,
});

new TypewriterEffect('#textSelector', {
  prefix: 'Generate ',
  suffix: ' 😎',
  phrases: [
    'product descriptions',
    'LinkedIn posts',
    'funny tweets'
  ],
  typingSpeed: 70,
  deletingSpeed: 30,
  pauseBetweenWords: 1500,
});
```

## 🛠️ Options

| Option              | Type       | Default         | Description                                      |
| ------------------- | ---------- | --------------- | ------------------------------------------------ |
| `prefix`            | `string`   | `''`            | Static text before the animated phrase           |
| `suffix`            | `string`   | `''`            | Static text after the animated phrase            |
| `phrases`           | `string[]` | `[]`            | Array of phrases to animate                      |
| `typingSpeed`       | `number`   | `80`            | Delay in ms per character when typing            |
| `deletingSpeed`     | `number`   | `40`            | Delay in ms per character when deleting          |
| `pauseBetweenWords` | `number`   | `2000`          | Delay in ms before deleting a fully typed phrase |
| `target`            | `string`   | `'text'` | Use `'placeholder'` or `'text'` for output       |

## ✅ Compatibility
Works in all modern browsers. No external dependencies.
