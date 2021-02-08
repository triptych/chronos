import{r as e,h as n,H as r,g as o}from"./p-db4e877b.js";const t=class{constructor(n){e(this,n),this.menuId="menu_"+s++,this.collapse="sm",this.color="primary",this.inverted=!1,this.linkTag="a",this.hrefProp="href",this.expanded=!1}componentDidRender(){this.adjustForFixedMenu()}adjustForFixedMenu(){if(!this.fixed)return;const e=this.$el.offsetHeight;switch(this.fixed){case"top":document.querySelector("body").style.paddingTop=`${e}px`;break;case"bottom":document.querySelector("body").style.paddingBottom=`${e}px`}}toggleMenu(){this.expanded=!this.expanded,this.$menuContent.style.maxHeight=this.expanded?this.$menuContent.scrollHeight+"px":"0px",this.expanded&&(this.setDropdownFocus(),Array.from(this.$el.querySelectorAll("ks-dropdown")).forEach((e=>{const n=e.querySelector("ks-button"),r=e.querySelector(".dropdown-contents");e.style.maxHeight=n.scrollHeight+"px",e.addEventListener("dropdownOpened",(()=>{e.style.maxHeight=r.scrollHeight+n.scrollHeight+"px",this.$menuContent.style.maxHeight=this.$menuContent.scrollHeight+r.scrollHeight+"px"})),e.addEventListener("dropdownClosed",(()=>{e.style.maxHeight=n.scrollHeight+"px"}))})))}setDropdownFocus(){this.$menuContent.focus()}render(){return n(r,{class:{"ks-menu-bar":!0,[`collapse-${this.collapse}`]:!0,[this.color]:!0,inverted:this.inverted,[`fixed-${this.fixed}`]:!!this.fixed},role:"navigation"},(this.logoUrl||this.tagline)&&n(this.linkTag,{class:"menu-branding",ref:e=>e.setAttribute(this.hrefProp,this.logoUrl)},this.logoUrl&&n("img",{class:"logo",src:this.logoUrl,alt:this.altText}),this.tagline&&n("span",{class:"tagline"},this.tagline)),n("button",{class:"button menu-toggler",onClick:this.toggleMenu.bind(this),"aria-haspopup":"true","aria-expanded":`${this.expanded}`,"aria-controls":`menu-content-${this.menuId}`},n("span",{class:"sr-only"},"toggle menu"),n("ks-icon",{icon:"menu"})),n("div",{class:"menu-content",id:`menu-content-${this.menuId}`,ref:e=>this.$menuContent=e},n("slot",null)))}get $el(){return o(this)}};let s=0;t.style=".ks-menu-bar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;position:relative;width:100%;font-size:var(--ks-font-size-sm);-webkit-box-shadow:var(--ks-shadow-sm);box-shadow:var(--ks-shadow-sm)}.ks-menu-bar.fixed-top{position:fixed;top:0;z-index:var(--ks-z-index-lg)}.ks-menu-bar.fixed-bottom{position:fixed;bottom:0;z-index:var(--ks-z-index-lg)}.ks-menu-bar .menu-branding{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-decoration:none;margin:var(--ks-spacing-size-sm)}.ks-menu-bar .menu-branding .logo{max-width:3rem;width:auto;margin-left:var(--ks-spacing-size-auto);margin-right:var(--ks-spacing-size-auto)}.ks-menu-bar .menu-branding .logo img{width:100%}.ks-menu-bar .menu-branding .tagline{white-space:nowrap;text-decoration:none;font-size:var(--ks-font-size-md)}.ks-menu-bar .menu-branding .logo~.tagline{margin-left:var(--ks-spacing-size-sm)}.ks-menu-bar .menu-toggler{line-height:1;display:none;background-color:transparent;margin-left:var(--ks-spacing-size-auto);margin-right:var(--ks-spacing-size-sm);padding:var(--ks-spacing-size-xs);-webkit-box-shadow:var(--ks-shadow-none);box-shadow:var(--ks-shadow-none)}.ks-menu-bar .menu-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:auto;flex-basis:auto;width:100%;max-width:100%}.ks-menu-bar .menu-content .menu-row{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center}.ks-menu-bar .menu-content .menu-row .menu-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ks-menu-bar .menu-content .menu-row .menu-group.align-left{margin-right:var(--ks-spacing-size-auto)}.ks-menu-bar .menu-content .menu-row .menu-group.align-right{margin-left:var(--ks-spacing-size-auto)}.ks-menu-bar .menu-content .menu-row .menu-item{font-weight:600;padding-left:var(--ks-spacing-size-sm);padding-right:var(--ks-spacing-size-sm);margin-top:var(--ks-spacing-size-sm);margin-bottom:var(--ks-spacing-size-sm)}.ks-menu-bar .menu-content .menu-row .menu-item.active>*{text-decoration:underline;font-weight:900}.ks-menu-bar .menu-content .menu-row .menu-item>*{font-weight:600;white-space:nowrap;text-decoration:none}.ks-menu-bar .menu-content .menu-row .menu-item:last-child{border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar .menu-content .menu-row .menu-item:focus,.ks-menu-bar .menu-content .menu-row .menu-item:hover{text-decoration:underline}.ks-menu-bar .menu-content .menu-row .menu-item .ks-dropdown{margin:var(--ks-spacing-size-none)}.ks-menu-bar .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{cursor:pointer;border:inherit;line-height:inherit;height:inherit;padding:inherit;font-weight:700;margin:var(--ks-spacing-size-none)}.ks-menu-bar .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus,.ks-menu-bar .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:hover{background-color:inherit;text-decoration:underline}.ks-menu-bar .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents .dropdown-item{color:rgba(var(--ks-color-dark-base),1)}.ks-menu-bar.primary{background-color:rgba(var(--ks-color-primary-base),1)}.ks-menu-bar.primary,.ks-menu-bar.primary .menu-branding{color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-toggler{color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-primary-base),1)}.ks-menu-bar.primary .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.primary.inverted .menu-branding{color:#2c5374}.ks-menu-bar.primary.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.primary.inverted .menu-toggler{border-color:rgba(var(--ks-color-primary-base),1);color:rgba(var(--ks-color-primary-base),1)}.ks-menu-bar.primary.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-primary-base),1)}.ks-menu-bar.primary.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-primary-base-text),1)}.ks-menu-bar.secondary{background-color:rgba(var(--ks-color-secondary-base),1)}.ks-menu-bar.secondary,.ks-menu-bar.secondary .menu-branding{color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-toggler{color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-secondary-base),1)}.ks-menu-bar.secondary .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.secondary.inverted .menu-branding{color:#ac3f00}.ks-menu-bar.secondary.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.secondary.inverted .menu-toggler{border-color:rgba(var(--ks-color-secondary-base),1);color:rgba(var(--ks-color-secondary-base),1)}.ks-menu-bar.secondary.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-secondary-base),1)}.ks-menu-bar.secondary.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-secondary-base-text),1)}.ks-menu-bar.success{background-color:rgba(var(--ks-color-success-base),1)}.ks-menu-bar.success,.ks-menu-bar.success .menu-branding{color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-toggler{color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-success-base),1)}.ks-menu-bar.success .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.success.inverted .menu-branding{color:#4f821a}.ks-menu-bar.success.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.success.inverted .menu-toggler{border-color:rgba(var(--ks-color-success-base),1);color:rgba(var(--ks-color-success-base),1)}.ks-menu-bar.success.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-success-base),1)}.ks-menu-bar.success.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-success-base-text),1)}.ks-menu-bar.info{background-color:rgba(var(--ks-color-info-base),1)}.ks-menu-bar.info,.ks-menu-bar.info .menu-branding{color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-toggler{color:#000;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-info-base),1)}.ks-menu-bar.info .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.info.inverted .menu-branding{color:#509bce}.ks-menu-bar.info.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.info.inverted .menu-toggler{border-color:rgba(var(--ks-color-info-base),1);color:rgba(var(--ks-color-info-base),1)}.ks-menu-bar.info.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-info-base),1)}.ks-menu-bar.info.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-info-base-text),1)}.ks-menu-bar.warning{background-color:rgba(var(--ks-color-warning-base),1)}.ks-menu-bar.warning,.ks-menu-bar.warning .menu-branding{color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-toggler{color:#000;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-warning-base),1)}.ks-menu-bar.warning .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.warning.inverted .menu-branding{color:#e1a900}.ks-menu-bar.warning.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.warning.inverted .menu-toggler{border-color:rgba(var(--ks-color-warning-base),1);color:rgba(var(--ks-color-warning-base),1)}.ks-menu-bar.warning.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-warning-base),1)}.ks-menu-bar.warning.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-warning-base-text),1)}.ks-menu-bar.danger{background-color:rgba(var(--ks-color-danger-base),1)}.ks-menu-bar.danger,.ks-menu-bar.danger .menu-branding{color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-toggler{color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-danger-base),1)}.ks-menu-bar.danger .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.danger.inverted .menu-branding{color:#b32e2e}.ks-menu-bar.danger.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.danger.inverted .menu-toggler{border-color:rgba(var(--ks-color-danger-base),1);color:rgba(var(--ks-color-danger-base),1)}.ks-menu-bar.danger.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-danger-base),1)}.ks-menu-bar.danger.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-danger-base-text),1)}.ks-menu-bar.light{background-color:rgba(var(--ks-color-light-base),1)}.ks-menu-bar.light,.ks-menu-bar.light .menu-branding{color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-toggler{color:#000;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.light .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.light.inverted .menu-branding{color:#c5d1da}.ks-menu-bar.light.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.light.inverted .menu-toggler{border-color:rgba(var(--ks-color-light-base),1);color:rgba(var(--ks-color-light-base),1)}.ks-menu-bar.light.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-light-base),1)}.ks-menu-bar.light.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-light-base-text),1)}.ks-menu-bar.dark{background-color:rgba(var(--ks-color-dark-base),1)}.ks-menu-bar.dark,.ks-menu-bar.dark .menu-branding{color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-toggler{color:#fff;border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-dark-base),1)}.ks-menu-bar.dark .menu-toggler:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link{color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button.link:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark.inverted{background-color:#fff;border-bottom:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.ks-menu-bar.dark.inverted .menu-branding{color:#37444f}.ks-menu-bar.dark.inverted .menu-branding:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}.ks-menu-bar.dark.inverted .menu-toggler{border-color:rgba(var(--ks-color-dark-base),1);color:rgba(var(--ks-color-dark-base),1)}.ks-menu-bar.dark.inverted .menu-content .menu-row .menu-item>*{color:rgba(var(--ks-color-dark-base),1)}.ks-menu-bar.dark.inverted .menu-content .menu-row .menu-item>:focus{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset);outline-color:rgba(var(--ks-color-dark-base-text),1)}@media screen and (max-width:89rem){.ks-menu-bar.collapse-xl{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-xl .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-xl .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-xl .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-xl .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-xl [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}@media screen and (max-width:74rem){.ks-menu-bar.collapse-lg{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-lg .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-lg .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-lg .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-lg .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-lg [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}@media screen and (max-width:61rem){.ks-menu-bar.collapse-md{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-md .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-md .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-md .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-md .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-md [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}@media screen and (max-width:47rem){.ks-menu-bar.collapse-sm{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-sm .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-sm .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-sm .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-sm .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-sm [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}@media screen and (max-width:29rem){.ks-menu-bar.collapse-xs{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-xs .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-xs .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-xs .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-xs .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-xs [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}@media screen and (max-width:19rem){.ks-menu-bar.collapse-xxs{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ks-menu-bar.collapse-xxs .menu-toggler{display:-ms-inline-flexbox;display:inline-flex}.ks-menu-bar.collapse-xxs .menu-content{display:block;visibility:hidden;max-height:0;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem);overflow-y:hidden;-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}.ks-menu-bar.collapse-xxs .menu-content .menu-row{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-group{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-left:var(--ks-spacing-size-none);margin-right:var(--ks-spacing-size-none)}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-item{width:100%;text-align:left;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1)}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-item>*{display:block;width:100%}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-item .ks-dropdown.show-contents .dropdown-contents{display:-ms-flexbox;display:flex}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-item .ks-dropdown .dropdown-button{width:100%;text-align:left}.ks-menu-bar.collapse-xxs .menu-content .menu-row .menu-item .ks-dropdown .dropdown-contents{position:relative;display:-ms-flexbox;display:flex;width:100vw;max-width:100vw;margin-left:calc(var(--ks-spacing-size-sm)*-1);margin-right:calc(var(--ks-spacing-size-sm)*-1);border-top-left-radius:var(--ks-border-radius-none);border-top-right-radius:var(--ks-border-radius-none);border-bottom-left-radius:var(--ks-border-radius-none);border-bottom-right-radius:var(--ks-border-radius-none)}.ks-menu-bar.collapse-xxs [aria-expanded=true]+.menu-content{height:auto;visibility:visible;margin-top:var(--ks-spacing-size-sm);border-top:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1);-webkit-transition:all var(--ks-transition-med) ease-in-out;transition:all var(--ks-transition-med) ease-in-out}}";export{t as ks_menu_bar}