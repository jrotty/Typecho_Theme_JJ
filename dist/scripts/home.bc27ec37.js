"use strict";(self.webpackChunkwebpack_multiple_entry=self.webpackChunkwebpack_multiple_entry||[]).push([[177],{101:function(t,e,i){i(8751);var n=i(3725),s=i(5835);new class{constructor(){(0,n.Z)(this,"container",document.querySelector(".article-nav-content")),(0,n.Z)(this,"navList",Array.from(document.querySelectorAll(".article-nav-item"))),(0,n.Z)(this,"line",document.querySelector(".article-nav-line")),(0,n.Z)(this,"defaultIndex",0),(0,n.Z)(this,"currentIndex",0),(0,n.Z)(this,"resetTimer",null),(0,n.Z)(this,"onItemClick",(t=>{const e=t.currentTarget;if(!e)return;const i=this.navList.findIndex((t=>t===e));-1!==i&&(this.currentIndex=i,this.moveLine())})),this.container&&0!==this.navList.length&&this.init()}init(){this.navList.forEach((t=>{t.addEventListener("click",this.onItemClick)})),this.currentIndex=this.defaultIndex,this.line.addEventListener("transitionend",(()=>{this.line.classList.add("show")}),{once:!0}),this.moveLine()}calculateLineMoveDistance(t){const e=this.navList.slice(0,t+1);let i=0;e.forEach(((e,n)=>{i+=n===t?e.offsetWidth/2:e.offsetWidth}));const n=this.line.offsetWidth;return i-n/2}moveLine(){const t=this.calculateLineMoveDistance(this.currentIndex);this.line.style.transform=`translateX(${t}px)`,this.currentIndex!==this.defaultIndex&&(this.resetTimer&&clearTimeout(this.resetTimer),this.resetTimer=setTimeout((()=>{this.resetLine(),s.Z.warning({text:"诶嘿~~ 等待好心人完善这个功能呢！",position:"center"})}),1500))}resetLine(){this.currentIndex=this.defaultIndex,this.moveLine()}},i(9481),i(7191),i(2661),i(1501)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[216,592],(function(){return e(4474),e(101)})),t.O()}]);