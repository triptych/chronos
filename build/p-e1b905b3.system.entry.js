System.register(["./p-f122fb29.system.js"],(function(i){"use strict";var t,s,e,r;return{setters:[function(i){t=i.r;s=i.h;e=i.H;r=i.g}],execute:function(){var a=".ks-carousel{display:block}.ks-carousel,.ks-carousel .slide-wrapper{position:relative}.ks-carousel .slide-wrapper .slides{position:relative;width:100%;overflow:hidden}.ks-carousel .slide-wrapper .slides .slide{position:relative;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;visibility:hidden;opacity:0;-webkit-transition:all var(--ks-transition-slow) ease;transition:all var(--ks-transition-slow) ease}.ks-carousel .slide-wrapper .slides .slide[aria-hidden=false]{visibility:visible;display:block;opacity:1;-webkit-transition:all var(--ks-transition-slow) ease;transition:all var(--ks-transition-slow) ease}.ks-carousel .slide-wrapper .slides .slide.pointer:focus-within{outline:var(--ks-default-outline);outline-offset:var(--ks-default-outline-offset)}.ks-carousel .slide-wrapper .slides .slide .slide-image{width:100%}.ks-carousel .slide-wrapper .slides .slide .slide-image img{display:block;width:100%}.ks-carousel .slide-wrapper .slides .slide .content{position:absolute;top:0;left:0;right:0;bottom:0;color:#fff;padding-left:3.75rem;padding-right:3.75rem;text-shadow:2px 2px 4px #37444f;margin-bottom:2.75rem;margin-top:var(--ks-spacing-size-xxl)}.ks-carousel .slide-wrapper .slides .slide .content>*{color:#fff}.ks-carousel .slide-wrapper .control{position:absolute;top:0;bottom:0;width:10%;color:#fff;background-color:transparent;border:none;display:-ms-flexbox;display:flex;outline:0;font-size:var(--ks-font-size-xl)}.ks-carousel .slide-wrapper .control:focus,.ks-carousel .slide-wrapper .control:hover{outline:0}.ks-carousel .slide-wrapper .control.prev{left:0}.ks-carousel .slide-wrapper .control.next{right:0}.ks-carousel .slide-wrapper .control .ks-button{outline:0;width:100%}.ks-carousel .slide-wrapper .control svg{-webkit-filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1));filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1))}.ks-carousel .slide-wrapper .controls{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;top:0;left:0;right:0;bottom:0;z-index:var(--ks-z-index-xs)}.ks-carousel .slide-wrapper .indicators{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:0;right:0;left:0;margin-right:10%;margin-left:10%;margin-bottom:var(--ks-spacing-size-xxl);z-index:var(--ks-z-index-sm)}.ks-carousel .slide-wrapper .indicators .indicator{height:var(--ks-spacing-size-lg);width:1rem;height:1rem;background-color:transparent;-webkit-filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1));filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1));border:var(--ks-spacing-size-xxs) solid rgba(var(--ks-color-light-light),1);border-top-left-radius:var(--ks-border-radius-circle);border-top-right-radius:var(--ks-border-radius-circle);border-bottom-left-radius:var(--ks-border-radius-circle);border-bottom-right-radius:var(--ks-border-radius-circle);margin-left:var(--ks-spacing-size-sm);margin-right:var(--ks-spacing-size-sm);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-carousel .slide-wrapper .indicators .indicator:focus,.ks-carousel .slide-wrapper .indicators .indicator:hover{outline:0;color:rgba(var(--ks-color-light-light-text),.5);background-color:rgba(var(--ks-color-light-light),.5)}.ks-carousel .slide-wrapper .indicators .indicator[aria-selected=true]{color:rgba(var(--ks-color-light-light-text),1);background-color:rgba(var(--ks-color-light-light),1);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-carousel .slide-wrapper .indicators .autoplay-toggle{background-color:transparent;border:0;-webkit-filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1));filter:drop-shadow(0 0 .25rem rgba(var(--ks-color-dark-base),1));color:rgba(var(--ks-color-light-light),1);padding:var(--ks-spacing-size-none);margin:var(--ks-spacing-size-none) var(--ks-spacing-size-sm)}.ks-carousel .thumbnails{display:-ms-flexbox;display:flex}.ks-carousel .thumbnails .thumbnail{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;opacity:.5;max-width:9rem;border:var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base),1);padding:var(--ks-spacing-size-none);margin:var(--ks-spacing-size-none);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-carousel .thumbnails .thumbnail:hover{outline:0;opacity:.8;-webkit-box-shadow:var(--ks-shadow-xs);box-shadow:var(--ks-shadow-xs);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-carousel .thumbnails .thumbnail:focus{-webkit-box-shadow:var(--ks-shadow-outline);box-shadow:var(--ks-shadow-outline)}.ks-carousel .thumbnails .thumbnail[aria-selected=true]{opacity:.95;-webkit-box-shadow:var(--ks-shadow-xs);box-shadow:var(--ks-shadow-xs);-webkit-transition:all var(--ks-transition-fast) ease-in-out;transition:all var(--ks-transition-fast) ease-in-out}.ks-carousel .thumbnails .thumbnail+.thumbnail{margin-left:var(--ks-spacing-size-sm)}.ks-carousel .thumbnails .indicator+.indicator{padding-left:var(--ks-spacing-size-xs)}";var o=i("ks_carousel",function(){function i(i){t(this,i);this.timer=6e3;this.autoplay=false;this.hideIndicators=false;this.hideControls=false;this.thumbnails=false;this.playText="play slides";this.pauseText="pause slides";this.slideIndex=0;this.isPaused=false;this.$indicators=[];this.carouselId="carousel_"+l++}i.prototype.connectedCallback=function(){this.initSlides()};i.prototype.componentDidLoad=function(){this.goToSlide()};i.prototype.initSlides=function(){var i=this;this.$slides=Array.from(this.$el.querySelectorAll("ks-carousel-slide"));this.$slides.forEach((function(t,s){t.id=t.id||i.carouselId+"_slide_"+s;t.setAttribute("aria-labelledby",t.id+"_indicator")}))};i.prototype.prevSlide=function(){this.resetSlideTimer();this.slideIndex--;if(this.slideIndex<0)this.slideIndex=this.$slides.length-1;this.goToSlide()};i.prototype.nextSlide=function(){this.resetSlideTimer();this.slideIndex++;if(this.slideIndex>=this.$slides.length)this.slideIndex=0;this.goToSlide()};i.prototype.selectSlide=function(i){this.slideIndex=i;this.resetSlideTimer();this.goToSlide()};i.prototype.goToSlide=function(){this.updateSlide();this.updateIndicator();this.initAutoplay()};i.prototype.toggleAutoplay=function(){this.isPaused=!this.isPaused;clearTimeout(this.slideTimer);this.initAutoplay()};i.prototype.initAutoplay=function(){var i=this;if(this.autoplay&&!this.isPaused){this.slideTimer=setTimeout((function(){return i.nextSlide()}),this.timer)}};i.prototype.resetSlideTimer=function(){clearTimeout(this.slideTimer)};i.prototype.updateSlide=function(){this.$slides.forEach((function(i){return i.setAttribute("aria-hidden","true")}));this.$slides[this.slideIndex].setAttribute("aria-hidden","false")};i.prototype.updateIndicator=function(){if(this.hideIndicators)return;this.$indicators.forEach((function(i){return i.setAttribute("aria-selected","false")}));this.$indicators[this.slideIndex].setAttribute("aria-selected","true")};i.prototype.render=function(){var i=this;var t={indicators:true,"sr-only":this.hideIndicators};var r=s("div",{class:t,role:"tablist"},this.$slides.map((function(t,e){return s("button",{id:t.id+"_indicator",class:"indicator",type:"button",role:"tab","aria-selected":"false","aria-controls":t.id,ref:function(t){return i.$indicators.push(t)},onClick:function(){return i.selectSlide(e)}},s("span",{class:"sr-only"},"Got to slide ",t?e+1:""))})),this.autoplay?s("button",{type:"button",class:"autoplay-toggle",onClick:function(){return i.toggleAutoplay()}},!this.isPaused?s("ks-icon",{icon:"pause_fill",label:this.pauseText}):s("ks-icon",{icon:"play_fill",label:this.playText})):"");var a=[!this.hideControls&&s("ks-button",{display:"link",color:"light",class:"control prev",onClick:this.prevSlide.bind(this)},s("ks-icon",{class:"control-icon text-xl",icon:"chevron_left"}),s("span",{class:"sr-only"},"previous slide")),!this.thumbnails&&r,!this.hideControls&&s("ks-button",{display:"link",color:"light",class:"control next",onClick:this.nextSlide.bind(this)},s("ks-icon",{class:"control-icon text-xl",icon:"chevron_right"}),s("span",{class:"sr-only"},"next slide"))];var o=s("div",{class:"thumbnails",role:"tablist"},this.$slides.map((function(t,e){return s("button",{id:t.id+"_indicator",class:"thumbnail",onClick:function(){return i.selectSlide(e)},role:"tab","aria-selected":"false","aria-controls":t.id,ref:function(t){return i.$indicators.push(t)}},s("span",{class:"sr-only"},"Got to slide ",t?e+1:""),s("ks-img",{lazy:true,src:t.src,alt:"slide "+(t?e+1:"")+" image"}))})));return s(e,{class:"ks-carousel"},s("div",{class:"slide-wrapper"},s("div",{class:"slides"},s("slot",null)),a),this.thumbnails&&o)};Object.defineProperty(i.prototype,"$el",{get:function(){return r(this)},enumerable:false,configurable:true});return i}());var l=0;o.style=a;var n=i("ks_carousel_slide",function(){function i(i){t(this,i);this.align="center";this.position="center";this.clickable=false;this.lazy=false;this.threshold=300;this.linkTag="a";this.hrefProp="href"}i.prototype.componentDidLoad=function(){var i=this;if(this.clickable)this.$content.addEventListener("click",(function(){return i.$link.click()}))};i.prototype.getAlignment=function(){switch(this.align){case"left":return"start";case"right":return"end";default:return"center"}};i.prototype.getPosition=function(){switch(this.position){case"top":return"start";case"bottom":return"end";default:return"center"}};i.prototype.render=function(){var i,t;var r=this;var a={slide:true,pointer:this.clickable&&this.href!==""&&this.href!==undefined};var o=(i={content:true,"display-flex":true,"flex-column":true},i["align-"+this.getAlignment()]=true,i["justify-"+this.getPosition()]=true,i["text-"+this.align]=true,i);var l=(t={},t[this.hrefProp]=this.href,t["class"]="sr-only",t);var n=this.linkTag;return s(e,{class:a,role:"tabpanel","aria-hidden":"true"},this.src&&s("ks-img",{class:"slide-image",alt:this.alt,lazy:this.lazy,src:this.src,threshold:this.threshold,width:this.imgWidth,height:this.imgHeight,"aspect-ratio":this.imgAspectRatio}),s("div",{class:o,ref:function(i){return r.$content=i}},s("slot",null)),this.clickable&&this.href&&s(n,Object.assign({},l,{ref:function(i){return r.$link=i}}),"link to ",this.href))};Object.defineProperty(i.prototype,"$el",{get:function(){return r(this)},enumerable:false,configurable:true});return i}())}}}));