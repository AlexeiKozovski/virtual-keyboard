import keyData from './KeyData.js';
import { createNode } from './CreateNode.js';

export default class Keyboard {
  constructor() {
    this.lang = 'en';
    this.caps = 'off';
    this.shift = false;
  }

  changeCapsLock(event) {
    if (this.caps === 'on') {
      this.caps = 'off';
    } else {
      this.caps = 'on';
    }
    this.updateKeyboard(event);
  }

  languageChange(event) {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    localStorage.setItem('lang', this.lang);
    this.updateKeyboard(event);
  }

  languageCheck() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      localStorage.setItem('lang', this.lang);
    }
  }

  updateKeyboard(event) {
    const { lang } = this;
    if (event.shiftKey || this.shift) {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[`${lang}Shift`]) {
          if (this.caps === 'on') {
            e.innerHTML = e.dataset[`${lang}Shift`].toLowerCase();
          } else e.innerHTML = e.dataset[`${lang}Shift`];
        } else if (e.dataset[lang]) e.innerHTML = e.dataset[lang];
      });
    } else {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[lang]) {
          if (this.caps === 'on' && !(event.shiftKey || this.shift)) {
            e.innerHTML = e.dataset[lang].toUpperCase();
          } else e.innerHTML = e.dataset[lang];
        }
      });
    }
  }

  removeShift(event) {
    if (this.shift) {
      this.shift = !this.shift;
      document.querySelector('.key_leftshift').classList.remove('active');
      document.querySelector('.key_rightshift').classList.remove('active');
      this.updateKeyboard(event);
    }
  }

  generateKeyboard() {
    const keyboard = createNode('div', '', 'keyboard');
    const container = createNode('div', '', 'keyboard__container');
    this.languageCheck(); 
    for (let i = 0; i < keyData.length; i++) {
      const row = createNode('div', '', 'keyboard__row');
      keyData[i].forEach((e) => {
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createNode('div', keyLabel, 'key');
        if (e.class) key.classList.add(e.class);
        key.dataset.code = e.code;
        if (e.key.ru && e.key.en) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }
        if (e.shift) {
          key.dataset.ruShift = e.shift.ru;
          key.dataset.enShift = e.shift.en;
        }
        if (e.noType) {
          key.dataset.noType = true;
        }
        row.append(key);
      });
      container.append(row);
    }
    keyboard.append(container);
    return keyboard;
  }
}