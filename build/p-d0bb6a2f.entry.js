import{r as s,c as r,h as a,H as i}from"./p-db4e877b.js";const t=class{constructor(a){s(this,a),this.updated=r(this,"updated",7),this.switchId="switch_"+o++,this.disable=!1,this.checked=!1}clickHandler(){this.checked=!this.checked,this.updated.emit({name:this.getName(),value:this.checked})}getName(){return this.name||this.label?this.label.toLowerCase().replace(/ /g,"-"):""}render(){return a(i,{class:"ks-switch"},a("label",{id:`${this.switchId}_label`,htmlFor:this.switchId,class:"label"},this.label),a("button",{type:"button",id:this.switchId,class:"control",role:"switch","aria-checked":`${this.checked}`,"aria-labelledby":`${this.switchId}_label`,onClick:()=>this.clickHandler(),disabled:this.disable},a("span",{class:"track"}),a("span",{class:"toggle"})))}};let o=0;t.style=".ks-switch{display:-ms-inline-flexbox;display:inline-flex}.ks-switch .control{position:relative;background-color:transparent;border:0;padding:0;width:2.25rem}.ks-switch .control[aria-checked=true] .toggle{-webkit-transform:translateX(var(--ks-spacing-size-lg));transform:translateX(var(--ks-spacing-size-lg));border-color:rgba(var(--ks-color-primary-base),1);color:rgba(var(--ks-color-primary-base-text),1);background-color:rgba(var(--ks-color-primary-base),1);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-switch .control:disabled,.ks-switch .control:disabled+.label{opacity:.7;cursor:not-allowed}.ks-switch .control .track{position:absolute;width:var(--ks-spacing-size-xxxl);height:var(--ks-spacing-size-lg);left:var(--ks-spacing-size-xxs);top:var(--ks-spacing-size-xs);border-top-left-radius:var(--ks-border-radius-pill);border-top-right-radius:var(--ks-border-radius-pill);border-bottom-left-radius:var(--ks-border-radius-pill);border-bottom-right-radius:var(--ks-border-radius-pill);-webkit-box-shadow:var(--ks-shadow-inner);box-shadow:var(--ks-shadow-inner);color:rgba(var(--ks-color-light-base-text),1);background-color:rgba(var(--ks-color-light-base),1)}.ks-switch .control .toggle{position:relative;display:block;height:var(--ks-spacing-size-xl);width:var(--ks-spacing-size-xl);border-top-left-radius:var(--ks-border-radius-circle);border-top-right-radius:var(--ks-border-radius-circle);border-bottom-left-radius:var(--ks-border-radius-circle);border-bottom-right-radius:var(--ks-border-radius-circle);color:rgba(var(--ks-color-light-lighter-text),1);background-color:rgba(var(--ks-color-light-lighter),1);border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-switch .label{margin-right:var(--ks-spacing-size-sm)}";export{t as ks_switch}