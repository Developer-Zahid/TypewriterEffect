class TypewriterEffect {
  constructor(selector, options = {}) {
    const {
      prefix = '',
      suffix = '',
      phrases = [],
      typingSpeed = 80,
      deletingSpeed = 40,
      pauseBetweenWords = 2000,
      target = 'text' // 'placeholder' or 'text'
    } = options;

    this.el = document.querySelector(selector);
    this.prefix = prefix;
    this.suffix = suffix;
    this.phrases = phrases;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.pauseBetweenWords = pauseBetweenWords;
    this.target = target;

    this.charIndex = 0;
    this.currentPhraseIndex = 0;
    this.typing = true;

    if (this.el) {
      if (this.target === 'text') {
        this.el.innerHTML = `<span class="typewriter-text"></span>`;
        this.textEl = this.el.querySelector('.typewriter-text');
      }
      this.run();
    }
  }

  updateContent(value) {
    const fullText = this.prefix + value + this.suffix;
    if (this.target === 'placeholder') {
      this.el.placeholder = fullText;
    } else if (this.target === 'text') {
      if (this.textEl) this.textEl.textContent = fullText;
    }
  }

  run() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.typing) {
      if (this.charIndex < currentPhrase.length) {
        this.charIndex++;
        this.updateContent(currentPhrase.slice(0, this.charIndex));
        setTimeout(() => this.run(), this.typingSpeed);
      } else {
        this.typing = false;
        setTimeout(() => this.run(), this.pauseBetweenWords);
      }
    } else {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.updateContent(currentPhrase.slice(0, this.charIndex));
        setTimeout(() => this.run(), this.deletingSpeed);
      } else {
        this.typing = true;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.run(), this.typingSpeed);
      }
    }
  }
};
