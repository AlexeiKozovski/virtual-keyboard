(()=>{"use strict";const e=[[{key:{ru:"ё",en:"`"},shift:{ru:"Ё",en:"~"},keyCode:"Backquote"},{key:{ru:"1",en:"1"},shift:{ru:"!",en:"!"},code:"Digit1"},{key:{ru:"2",en:"2"},shift:{ru:'"',en:"@"},code:"Digit2"},{key:{ru:"3",en:"3"},shift:{ru:"№",en:"#"},code:"Digit3"},{key:{ru:"4",en:"4"},shift:{ru:";",en:"$"},code:"Digit4"},{key:{ru:"5",en:"5"},shift:{ru:"%",en:"%"},code:"Digit5"},{key:{ru:"6",en:"6"},shift:{ru:":",en:"^"},code:"Digit6"},{key:{ru:"7",en:"7"},shift:{ru:"?",en:"&"},code:"Digit7"},{key:{ru:"8",en:"8"},shift:{ru:"*",en:"*"},code:"Digit8"},{key:{ru:"9",en:"9"},shift:{ru:"(",en:"("},code:"Digit9"},{key:{ru:"0",en:"0"},shift:{ru:")",en:")"},code:"Digit0"},{key:{ru:"-",en:"-"},shift:{ru:"_",en:"_"},code:"Minus"},{key:{ru:"=",en:"="},shift:{ru:"+",en:"+"},code:"Equal"},{key:"Backspace",code:"Backspace",class:"key_backspace",noType:!0}],[{key:"Tab",code:"Tab",class:"key_tab",noType:!0},{key:{ru:"й",en:"q"},shift:{ru:"Й",en:"Q"},code:"KeyQ"},{key:{ru:"ц",en:"w"},shift:{ru:"Ц",en:"W"},code:"KeyW"},{key:{ru:"у",en:"e"},shift:{ru:"У",en:"E"},code:"KeyE"},{key:{ru:"к",en:"r"},shift:{ru:"К",en:"R"},code:"KeyR"},{key:{ru:"е",en:"t"},shift:{ru:"Е",en:"T"},code:"KeyT"},{key:{ru:"н",en:"y"},shift:{ru:"Н",en:"Y"},code:"KeyY"},{key:{ru:"г",en:"u"},shift:{ru:"Г",en:"U"},code:"KeyU"},{key:{ru:"ш",en:"i"},shift:{ru:"Ш",en:"I"},code:"KeyI"},{key:{ru:"щ",en:"o"},shift:{ru:"Щ",en:"O"},code:"KeyO"},{key:{ru:"з",en:"p"},shift:{ru:"З",en:"P"},code:"KeyP"},{key:{ru:"х",en:"["},shift:{ru:"Х",en:"{"},code:"BracketLeft"},{key:{ru:"ъ",en:"]"},shift:{ru:"Ъ",en:"}"},code:"BracketRight"},{key:{ru:"\\",en:"\\"},shift:{ru:"|",en:"|"},code:"Backslash",class:"key_backslash"},{key:"Del",code:"Delete",class:"key_del",noType:!0}],[{key:"Caps Lock",code:"CapsLock",class:"key_capslock",noType:!0},{key:{ru:"ф",en:"a"},shift:{ru:"Ф",en:"A"},code:"KeyA"},{key:{ru:"ы",en:"s"},shift:{ru:"Ы",en:"S"},code:"KeyS"},{key:{ru:"в",en:"d"},shift:{ru:"В",en:"D"},code:"KeyD"},{key:{ru:"а",en:"f"},shift:{ru:"А",en:"F"},code:"KeyF"},{key:{ru:"п",en:"g"},shift:{ru:"П",en:"G"},code:"KeyG"},{key:{ru:"р",en:"h"},shift:{ru:"Р",en:"H"},code:"KeyH"},{key:{ru:"о",en:"j"},shift:{ru:"О",en:"J"},code:"KeyJ"},{key:{ru:"л",en:"k"},shift:{ru:"Л",en:"K"},code:"KeyK"},{key:{ru:"д",en:"l"},shift:{ru:"Д",en:"L"},code:"KeyL"},{key:{ru:"ж",en:";"},shift:{ru:"Ж",en:":"},code:"Semicolon"},{key:{ru:"э",en:"'"},shift:{ru:"Э",en:'"'},code:"Quote"},{key:"Enter",code:"Enter",class:"key_enter",noType:!0}],[{key:"Shift",code:"ShiftLeft",class:"key_leftshift",noType:!0},{key:{ru:"я",en:"z"},shift:{ru:"Я",en:"Z"},code:"KeyZ"},{key:{ru:"ч",en:"x"},shift:{ru:"Ч",en:"X"},code:"KeyX"},{key:{ru:"с",en:"c"},shift:{ru:"С",en:"C"},code:"KeyC"},{key:{ru:"м",en:"v"},shift:{ru:"М",en:"V"},code:"KeyV"},{key:{ru:"и",en:"b"},shift:{ru:"И",en:"B"},code:"KeyB"},{key:{ru:"т",en:"n"},shift:{ru:"Т",en:"N"},code:"KeyN"},{key:{ru:"ь",en:"m"},shift:{ru:"Ь",en:"M"},code:"KeyM"},{key:{ru:"б",en:","},shift:{ru:"Б",en:"<"},code:"Comma"},{key:{ru:"ю",en:"."},shift:{ru:"Ю",en:">"},code:"Period"},{key:{ru:".",en:"/"},shift:{ru:",",en:"?"},code:"Slash"},{key:"▲",code:"ArrowUp",noType:!0},{key:"Shift",code:"ShiftRight",class:"key_rightshift",noType:!0}],[{key:"Ctrl",code:"ControlLeft",class:"key_leftctrl",noType:!0},{key:"Win",code:"Lang",class:"key_lang",noType:!0},{key:"Alt",code:"AltLeft",class:"key_leftalt",noType:!0},{key:" ",code:"Space",class:"key_space"},{key:"Alt",code:"AltRight",class:"key_rightalt",noType:!0},{key:"Ctrl",code:"ControlRight",class:"key_rightctrl",noType:!0},{key:"◄",code:"ArrowLeft",noType:!0},{key:"▼",code:"ArrowDown",noType:!0},{key:"►",code:"ArrowRight",noType:!0}]],t=(e,t,...n)=>{const s=document.createElement(e);return s.classList.add(...n),s.innerHTML=t,s},{body:n}=document,s=t("textarea","","textfield"),o=new class{constructor(){this.lang="en",this.caps="off",this.shift=!1}changeCapsLock(e){"on"===this.caps?this.caps="off":this.caps="on",this.updateKeyboard(e)}languageChange(e){"en"===this.lang?this.lang="ru":this.lang="en",localStorage.setItem("lang",this.lang),this.updateKeyboard(e)}languageCheck(){localStorage.getItem("lang")?this.lang=localStorage.getItem("lang"):localStorage.setItem("lang",this.lang)}updateKeyboard(e){const{lang:t}=this;e.shiftKey||this.shift?document.querySelectorAll(".key").forEach((e=>{e.dataset[`${t}Shift`]?"on"===this.caps?e.innerHTML=e.dataset[`${t}Shift`].toLowerCase():e.innerHTML=e.dataset[`${t}Shift`]:e.dataset[t]&&(e.innerHTML=e.dataset[t])})):document.querySelectorAll(".key").forEach((n=>{n.dataset[t]&&("on"!==this.caps||e.shiftKey||this.shift?n.innerHTML=n.dataset[t]:n.innerHTML=n.dataset[t].toUpperCase())}))}removeShift(e){this.shift&&(this.shift=!this.shift,document.querySelector(".key_leftshift").classList.remove("active"),document.querySelector(".key_rightshift").classList.remove("active"),this.updateKeyboard(e))}generateKeyboard(){const n=t("div","","keyboard"),s=t("div","","keyboard__container");this.languageCheck();for(let n=0;n<e.length;n++){const o=t("div","","keyboard__row");e[n].forEach((e=>{const n=e.key.ru&&e.key.en?e.key[this.lang]:e.key,s=t("div",n,"key");e.class&&s.classList.add(e.class),s.dataset.code=e.code,e.key.ru&&e.key.en&&(s.dataset.ru=e.key.ru,s.dataset.en=e.key.en),e.shift&&(s.dataset.ruShift=e.shift.ru,s.dataset.enShift=e.shift.en),e.noType&&(s.dataset.noType=!0),o.append(s)})),s.append(o)}return n.append(s),n}},r=t("p","For change language press Shift + Alt","note_text"),a=(e,t,n)=>{let r="",a=s.selectionStart;if(e.preventDefault(),s.focus(),"CapsLock"===n&&o.changeCapsLock(e),("AltLeft"===n&&(e.shiftKey||o.shift)||"AltRight"===n&&(e.shiftKey||o.shift)||"ShiftLeft"===n&&e.altKey||"ShiftRight"===n&&e.altKey)&&(o.languageChange(e),o.removeShift(e)),"ShiftLeft"!==n&&"ShiftRight"!==n||o.updateKeyboard(e),"ArrowLeft"===n&&a>0&&s.setSelectionRange(a-1,a-1),"ArrowRight"===n&&(a=s.selectionEnd,s.setSelectionRange(a+1,a+1)),"ArrowUp"===n&&(r="▲"),"ArrowDown"===n&&(r="▼"),"Tab"===n&&(r="\t"),"Enter"===n&&(r="\n"),"Backspace"===n&&(r="Backspace"),"Delete"===n&&(r="Delete"),t.dataset.noType||(r=t.textContent,o.removeShift(e)),r){let e=s.value.substring(0,a),t=s.value.substring(s.selectionEnd);"Backspace"===r&&(r="",a===s.selectionEnd?(e=e.slice(0,-1),a-=a>0?2:1):a-=1),"Delete"===r&&(r="",a===s.selectionEnd&&(t=t.slice(1)),a-=1),s.value=e+r+t,s.setSelectionRange(a+1,a+1)}};window.onload=()=>{(()=>{const e=t("div","","title");e.append(t("h1","RSS Virtual Keyboard","title__text")),e.append(t("div","","subtitle")),n.append(e),document.querySelector(".subtitle").append(t("p","Keyboard created in Windows OS","subtitle__text"))})(),n.append(s),n.append(o.generateKeyboard()),n.append(r),document.addEventListener("keydown",(e=>{const t=document.querySelector(`[data-code=${e.code}]`);t&&(t.classList.add("active"),a(e,t,e.code))})),document.addEventListener("keyup",(e=>{const t=document.querySelector(`[data-code=${e.code}]`);t&&(t.classList.remove("active"),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(o.removeShift(e),o.updateKeyboard(e)))})),document.querySelector(".keyboard").addEventListener("click",(e=>{if(e.target.closest(".key")){const t=e.target.closest(".key");"ShiftLeft"!==t.dataset.code&&"ShiftRight"!==t.dataset.code||(o.shift=!o.shift,t.classList.toggle("active")),a(e,t,t.dataset.code)}}))}})();