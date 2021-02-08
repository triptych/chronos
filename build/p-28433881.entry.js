import{r as s,h as t,H as e}from"./p-db4e877b.js";import"./p-5f220563.js";import{a,f as i}from"./p-47b789f0.js";import"./p-0520f155.js";import{a as r}from"./p-2fcd9172.js";const l=class{constructor(t){s(this,t),this.quantity=1,this.reload=!1}watchHandler(){this.loadData(),window.scrollTo({top:0,behavior:"smooth"})}addProductHandler(s){r(s.detail,1)}async componentWillLoad(){await this.loadData()}componentWillRender(){this.$cartSummary=document.querySelector("cart-summary")}async loadData(){this.reload=!0,this.product=await a(this.match.params.sku),this.reload=!1}getPrice(){return this.product.salePrice>0?this.product.salePrice:this.product.listPrice}async addToCartClickHandler(){r(this.product,this.quantity),await this.$cartSummary.show()}render(){return t(e,{class:"product-details-page"},t("ks-row",{gutter:"xxl",position:"stretch",class:"mt-xxl"},t("ks-column",{class:"xs:col-12"},!this.reload&&t("ks-carousel",{class:"product-carousel h-100",thumbnails:!0,"hide-controls":!0},this.product.images.map((s=>t("ks-carousel-slide",{alt:`image of watch (${this.product.sku})`,src:s}))))),t("ks-column",{class:"xs:col-12 xs:pt-lg"},t("div",{class:"product-details h-100"},t("h1",{class:"text-lg md:text-md sm:text-sm xs:text-md"},this.product.name),t("div",{class:"mb-sm"},"Item # ",this.product.sku),t("star-component",{rating:this.product.rating,class:"mb-sm"}),t("div",{class:"product-price"},t("strong",{class:"price text-md"},i(this.getPrice())),this.product.salePrice>0?t("strike",{class:"ml-sm discount-price"},i(this.product.listPrice)):""),t("p",{class:"text-italic my-md"},"This is a demo site. You can purchase this product ",t("ks-button",{display:"link",href:this.product.url,target:"_blank"},"directly from Timex"),"."),t("p",null,this.product.description),t("div",{class:"controls"},this.product.isInStock&&t("ks-form-field",{class:"mb-md",type:"spin-box",value:this.quantity,label:"Quantity",onUpdated:s=>this.quantity=Number(s.detail.value)}),t("ks-button",{"button-class":"px-xxxl",size:"lg",disabled:!this.product.isInStock,onClick:()=>this.addToCartClickHandler()},this.product.isInStock?"Add to Cart":"Out of Stock"))))),t("div",{class:"purchased-together mt-xxl"},t("h2",{class:"text-lg xs:text-md"},"Frequently Purchased Together"),t("div",{class:"products display-flex align-center bg-white p-lg b-xxxs"},t("ks-img",{src:this.product.images[0],alt:`image of ${this.product.name}`,lazy:!0}),t("ks-icon",{icon:"plus",label:"plus",class:"text-xl"}),t("ks-button",{display:"link",href:`/product/${this.product.accessory.sku}`,"link-tag":"stencil-route-link","href-prop":"url"},t("ks-img",{src:this.product.accessory.images[0],alt:`image of ${this.product.accessory.name}`,lazy:!0})))),t("div",{class:"related-products mt-xxl"},t("ks-gallery",{heading:"Related Products","item-width":"237px"},this.product.relatedProducts.map((s=>t("product-summary",{product:s}))))))}static get watchers(){return{match:["watchHandler"]}}};l.style=".product-details-page .product-carousel{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;background-color:#fff;padding:var(--ks-spacing-size-lg);border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}@media screen and (max-width:61rem){.product-details-page .product-carousel{-ms-flex-direction:column;flex-direction:column}}.product-details-page .product-carousel .thumbnails{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;margin-right:var(--ks-spacing-size-md)}@media screen and (max-width:61rem){.product-details-page .product-carousel .thumbnails{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}}.product-details-page .product-carousel .thumbnails .thumbnail{width:75px;background-color:#fff;-ms-flex-positive:unset;flex-grow:unset;-ms-flex-preferred-size:unset;flex-basis:unset;padding:var(--ks-spacing-size-md);margin:var(--ks-spacing-size-md)}@media screen and (max-width:47rem){.product-details-page .product-carousel .thumbnails .thumbnail{width:50px}}.product-details-page .product-carousel .thumbnails .thumbnail[aria-selected=true],.product-details-page .product-details{border:var(--ks-spacing-size-xxxs) solid rgba(var(--ks-color-light-base),1)}.product-details-page .product-details{background-color:#fff;padding:var(--ks-spacing-size-lg)}.product-details-page .purchased-together .products{max-width:275px}.product-details-page .purchased-together .products .ks-img{max-width:100px}.product-details-page .related-products .heading{font-size:var(--ks-font-size-lg)}@media screen and (max-width:29rem){.product-details-page .related-products .heading{font-size:var(--ks-font-size-md)}}";export{l as product_details_page}