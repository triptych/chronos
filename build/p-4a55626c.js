const e='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',t={TAB:9,ENTER:13,SHIFT:16,CTRL:17,ESC:27,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,SPACE:32},a=(e,t)=>{let a;return function(...n){a&&clearTimeout(a),a=setTimeout((()=>{e(...n)}),t)}};export{e as F,a as d,t as k}