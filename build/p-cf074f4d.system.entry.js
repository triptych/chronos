var __awaiter=this&&this.__awaiter||function(t,e,r,s){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{c(s.next(t))}catch(t){i(t)}}function n(t){try{c(s["throw"](t))}catch(t){i(t)}}function c(t){t.done?r(t.value):a(t.value).then(o,n)}c((s=s.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,a,i,o;return o={next:n(0),throw:n(1),return:n(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function n(t){return function(e){return c([t,e])}}function c(o){if(s)throw new TypeError("Generator is already executing.");while(r)try{if(s=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t];a=0}finally{s=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-f122fb29.system.js","./p-a81db6b6.system.js","./p-8c3c6e68.system.js","./p-3428d199.system.js","./p-ced56a30.system.js"],(function(t){"use strict";var e,r,s,a,i,o;return{setters:[function(t){e=t.r;r=t.h;s=t.H},function(){},function(t){a=t.a;i=t.f},function(){},function(t){o=t.a}],execute:function(){var n=".product-details-page .product-carousel{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;background-color:#fff;padding:var(--ks-spacing-size-lg);border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}@media screen and (max-width:61rem){.product-details-page .product-carousel{-ms-flex-direction:column;flex-direction:column}}.product-details-page .product-carousel .thumbnails{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;margin-right:var(--ks-spacing-size-md)}@media screen and (max-width:61rem){.product-details-page .product-carousel .thumbnails{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}}.product-details-page .product-carousel .thumbnails .thumbnail{width:75px;background-color:#fff;-ms-flex-positive:unset;flex-grow:unset;-ms-flex-preferred-size:unset;flex-basis:unset;padding:var(--ks-spacing-size-md);margin:var(--ks-spacing-size-md)}@media screen and (max-width:47rem){.product-details-page .product-carousel .thumbnails .thumbnail{width:50px}}.product-details-page .product-carousel .thumbnails .thumbnail[aria-selected=true],.product-details-page .product-details{border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.product-details-page .product-details{background-color:#fff;padding:var(--ks-spacing-size-lg)}.product-details-page .purchased-together .products{max-width:275px}.product-details-page .purchased-together .products .ks-img{max-width:100px}.product-details-page .related-products .heading{font-size:var(--ks-font-size-lg)}@media screen and (max-width:29rem){.product-details-page .related-products .heading{font-size:var(--ks-font-size-md)}}";var c=t("product_details_page",function(){function t(t){e(this,t);this.quantity=1;this.reload=false}t.prototype.watchHandler=function(){this.loadData();window.scrollTo({top:0,behavior:"smooth"})};t.prototype.addProductHandler=function(t){o(t.detail,1)};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadData()];case 1:t.sent();return[2]}}))}))};t.prototype.componentWillRender=function(){this.$cartSummary=document.querySelector("cart-summary")};t.prototype.loadData=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:this.reload=true;t=this;return[4,a(this.match.params.sku)];case 1:t.product=e.sent();this.reload=false;return[2]}}))}))};t.prototype.getPrice=function(){return this.product.salePrice>0?this.product.salePrice:this.product.listPrice};t.prototype.addToCartClickHandler=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:o(this.product,this.quantity);return[4,this.$cartSummary.show()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){var t=this;return r(s,{class:"product-details-page"},r("ks-row",{gutter:"xxl",position:"stretch",class:"mt-xxl"},r("ks-column",{class:"xs:col-12"},!this.reload&&r("ks-carousel",{class:"product-carousel h-100",thumbnails:true,"hide-controls":true},this.product.images.map((function(e){return r("ks-carousel-slide",{alt:"image of watch ("+t.product.sku+")",src:e})})))),r("ks-column",{class:"xs:col-12 xs:pt-lg"},r("div",{class:"product-details h-100"},r("h1",{class:"text-lg md:text-md sm:text-sm xs:text-md"},this.product.name),r("div",{class:"mb-sm"},"Item # ",this.product.sku),r("star-component",{rating:this.product.rating,class:"mb-sm"}),r("div",{class:"product-price"},r("strong",{class:"price text-md"},i(this.getPrice())),this.product.salePrice>0?r("strike",{class:"ml-sm discount-price"},i(this.product.listPrice)):""),r("p",{class:"text-italic my-md"},"This is a demo site. You can purchase this product ",r("ks-button",{display:"link",href:this.product.url,target:"_blank"},"directly from Timex"),"."),r("p",null,this.product.description),r("div",{class:"controls"},this.product.isInStock&&r("ks-form-field",{class:"mb-md",type:"spin-box",value:this.quantity,label:"Quantity",onUpdated:function(e){return t.quantity=Number(e.detail.value)}}),r("ks-button",{"button-class":"px-xxxl",size:"lg",disabled:!this.product.isInStock,onClick:function(){return t.addToCartClickHandler()}},this.product.isInStock?"Add to Cart":"Out of Stock"))))),r("div",{class:"purchased-together mt-xxl"},r("h2",{class:"text-lg xs:text-md"},"Frequently Purchased Together"),r("div",{class:"products display-flex align-center bg-white p-lg b-xxxs"},r("ks-img",{src:this.product.images[0],alt:"image of "+this.product.name,lazy:true}),r("ks-icon",{icon:"plus",label:"plus",class:"text-xl"}),r("ks-button",{display:"link",href:"/product/"+this.product.accessory.sku,"link-tag":"stencil-route-link","href-prop":"url"},r("ks-img",{src:this.product.accessory.images[0],alt:"image of "+this.product.accessory.name,lazy:true})))),r("div",{class:"related-products mt-xxl"},r("ks-gallery",{heading:"Related Products","item-width":"237px"},this.product.relatedProducts.map((function(t){return r("product-summary",{product:t})})))))};Object.defineProperty(t,"watchers",{get:function(){return{match:["watchHandler"]}},enumerable:false,configurable:true});return t}());c.style=n}}}));