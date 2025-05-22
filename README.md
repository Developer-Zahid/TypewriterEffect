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

You can use the script directly via CDN or your GitHub raw URL:

```html
<script src="https://developer-zahid.github.io/TypewriterEffect/script.js"></script>
```

## 🔧 Usage
### 1. Add a target element

```html
<!-- Placeholder mode -->
<textarea id="t1" placeholder="Loading..." required></textarea>

<!-- Text mode -->
<div id="t2" style="font-family: monospace;"></div>
```

### 2. Initialize the effect

```js
new TypewriterEffect('#t1', {
  prefix: 'Ask Spell to create a ',
  suffix: '...',
  phrases: [
    'marketing strategy document',
    'AP US history essay',
    'Mother\'s Day letter'
  ],
  typingSpeed: 90,
  deletingSpeed: 50,
  pauseBetweenWords: 2000,
  target: 'placeholder' // or 'text'
});

new TypewriterEffect('#t2', {
  prefix: 'Generate ',
  suffix: ' ✨',
  phrases: [
    'fun blog intros',
    'snappy subject lines',
    'LinkedIn hooks'
  ],
  typingSpeed: 70,
  deletingSpeed: 30,
  pauseBetweenWords: 1500,
  target: 'text'
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
