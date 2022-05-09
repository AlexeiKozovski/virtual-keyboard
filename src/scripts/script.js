import Keyboard from './Keyboard.js';
import { createNode } from './CreateNode.js';

const titleText = 'RSS Virtual Keyboard';
const subTitleText = 'Keyboard created in Windows OS';
const noteText = 'For change language press Shift + Alt';

const createTitle = () => {
  const title = createNode('div', '', 'title');
  title.append(createNode('h1', titleText, 'title__text'));
  title.append(createNode('div', '', 'subtitle'));
  body.append(title);
  const subtitle = document.querySelector('.subtitle');
  subtitle.append(createNode('p', subTitleText, 'subtitle__text'));  
};

const { body } = document;
const textField = createNode('textarea', '', 'textfield');
const keyboard = new Keyboard();
const note = createNode('p', noteText, 'note_text');

const keyPress = (event, button, code) => {
  let text = '';
  let cursor = textField.selectionStart;
  event.preventDefault();
  textField.focus();
  if (code === 'CapsLock') keyboard.changeCapsLock(event);
  if (
    (code === 'AltLeft' && (event.shiftKey || keyboard.shift))
    || (code === 'AltRight' && (event.shiftKey || keyboard.shift))
    || (code === 'ShiftLeft' && event.altKey)
    || (code === 'ShiftRight' && event.altKey)) {
    keyboard.languageChange(event);
    keyboard.removeShift(event);
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') keyboard.updateKeyboard(event);
  if (code === 'ArrowLeft' && cursor > 0) textField.setSelectionRange(cursor - 1, cursor - 1);
  if (code === 'ArrowRight') {
    cursor = textField.selectionEnd;
    textField.setSelectionRange(cursor + 1, cursor + 1);
  }
  if (code === 'ArrowUp') text = '▲';
  if (code === 'ArrowDown') text = '▼';
  if (code === 'Tab') text = '\t';
  if (code === 'Enter') text = '\n';
  if (code === 'Backspace') text = 'Backspace';
  if (code === 'Delete') text = 'Delete';
  if (!button.dataset.noType) {
    text = button.textContent;
    keyboard.removeShift(event);
  }

  if (text) {
    let textBeforeCursor = textField.value.substring(0, cursor);
    let textAfterCursor = textField.value.substring(textField.selectionEnd);
    if (text === 'Backspace') {
      text = '';
      if (cursor === textField.selectionEnd) {
        textBeforeCursor = textBeforeCursor.slice(0, -1);
        cursor -= (cursor > 0) ? 2 : 1;
      } else cursor -= 1;
    }
    if (text === 'Delete') {
      text = '';
      if (cursor === textField.selectionEnd) {
        textAfterCursor = textAfterCursor.slice(1);
      }
      cursor -= 1;
    }
    textField.value = textBeforeCursor + text + textAfterCursor;
    textField.setSelectionRange(cursor + 1, cursor + 1);    
  }
};

// Page generation

window.onload = () => {
  createTitle();
  body.append(textField); 
  body.append(keyboard.generateKeyboard());
  body.append(note);

  document.addEventListener('keydown', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.add('active');
      keyPress(event, button, event.code);
    }
  });

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.remove('active');
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.removeShift(event);
        keyboard.updateKeyboard(event);
      }
    }
  });

  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.closest('.key')) {
      const button = event.target.closest('.key');
      if (button.dataset.code === 'ShiftLeft'
      || button.dataset.code === 'ShiftRight') {
        keyboard.shift = !keyboard.shift;
        button.classList.toggle('active');
      }
      keyPress(event, button, button.dataset.code);
    }
  });
};