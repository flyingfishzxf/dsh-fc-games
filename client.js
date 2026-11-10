/*! dsh-fc-games client bundle — includes jsnes 2.1.0 (Apache-2.0).
 *  jsnes: https://github.com/bfirsh/jsnes — see NOTICE and vendor/jsnes-LICENSE.txt.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("jsnes",[],e):"object"==typeof exports?exports.jsnes=e():t.jsnes=e()}(globalThis,()=>(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function s(t,e,s,i,r){for(let h=0;h<r;++h)s[i+h]=t[e+h]}function i(t,e){const s=t.constructor.JSON_PROPERTIES;for(let i=0;i<s.length;i++){const r=s[i],h=t[r],a=e[r];ArrayBuffer.isView(h)&&Array.isArray(a)?h.set(a):t[r]=a}}function r(t){const e={},s=t.constructor.JSON_PROPERTIES;for(let i=0;i<s.length;i++){const r=s[i],h=t[r];e[r]=ArrayBuffer.isView(h)?Array.from(h):h}return e}t.r(e),t.d(e,{Browser:()=>Bt,Controller:()=>A,GameGenie:()=>x,NES:()=>gt});const h=10,a=11,n=17,o=23,l=29,c=33,m=34,d=43,u=47,p=60,g=62,R=63,C=64,_=65,b=66,y=67,f=69,S={ins:-1,mode:0,size:1,cycles:2},T={105:{ins:0,mode:5,size:2,cycles:2},101:{ins:0,mode:0,size:2,cycles:3},117:{ins:0,mode:6,size:2,cycles:4},109:{ins:0,mode:3,size:3,cycles:4},125:{ins:0,mode:8,size:3,cycles:4},121:{ins:0,mode:9,size:3,cycles:4},97:{ins:0,mode:h,size:2,cycles:6},113:{ins:0,mode:a,size:2,cycles:5},41:{ins:1,mode:5,size:2,cycles:2},37:{ins:1,mode:0,size:2,cycles:3},53:{ins:1,mode:6,size:2,cycles:4},45:{ins:1,mode:3,size:3,cycles:4},61:{ins:1,mode:8,size:3,cycles:4},57:{ins:1,mode:9,size:3,cycles:4},33:{ins:1,mode:h,size:2,cycles:6},49:{ins:1,mode:a,size:2,cycles:5},10:{ins:2,mode:4,size:1,cycles:2},6:{ins:2,mode:0,size:2,cycles:5},22:{ins:2,mode:6,size:2,cycles:6},14:{ins:2,mode:3,size:3,cycles:6},30:{ins:2,mode:8,size:3,cycles:7},144:{ins:3,mode:1,size:2,cycles:2},176:{ins:4,mode:1,size:2,cycles:2},240:{ins:5,mode:1,size:2,cycles:2},48:{ins:7,mode:1,size:2,cycles:2},208:{ins:8,mode:1,size:2,cycles:2},16:{ins:9,mode:1,size:2,cycles:2},80:{ins:11,mode:1,size:2,cycles:2},112:{ins:12,mode:1,size:2,cycles:2},36:{ins:6,mode:0,size:2,cycles:3},44:{ins:6,mode:3,size:3,cycles:4},0:{ins:10,mode:2,size:1,cycles:7},24:{ins:13,mode:2,size:1,cycles:2},216:{ins:14,mode:2,size:1,cycles:2},88:{ins:15,mode:2,size:1,cycles:2},184:{ins:16,mode:2,size:1,cycles:2},201:{ins:n,mode:5,size:2,cycles:2},197:{ins:n,mode:0,size:2,cycles:3},213:{ins:n,mode:6,size:2,cycles:4},205:{ins:n,mode:3,size:3,cycles:4},221:{ins:n,mode:8,size:3,cycles:4},217:{ins:n,mode:9,size:3,cycles:4},193:{ins:n,mode:h,size:2,cycles:6},209:{ins:n,mode:a,size:2,cycles:5},224:{ins:18,mode:5,size:2,cycles:2},228:{ins:18,mode:0,size:2,cycles:3},236:{ins:18,mode:3,size:3,cycles:4},192:{ins:19,mode:5,size:2,cycles:2},196:{ins:19,mode:0,size:2,cycles:3},204:{ins:19,mode:3,size:3,cycles:4},198:{ins:20,mode:0,size:2,cycles:5},214:{ins:20,mode:6,size:2,cycles:6},206:{ins:20,mode:3,size:3,cycles:6},222:{ins:20,mode:8,size:3,cycles:7},202:{ins:21,mode:2,size:1,cycles:2},136:{ins:22,mode:2,size:1,cycles:2},73:{ins:o,mode:5,size:2,cycles:2},69:{ins:o,mode:0,size:2,cycles:3},85:{ins:o,mode:6,size:2,cycles:4},77:{ins:o,mode:3,size:3,cycles:4},93:{ins:o,mode:8,size:3,cycles:4},89:{ins:o,mode:9,size:3,cycles:4},65:{ins:o,mode:h,size:2,cycles:6},81:{ins:o,mode:a,size:2,cycles:5},230:{ins:24,mode:0,size:2,cycles:5},246:{ins:24,mode:6,size:2,cycles:6},238:{ins:24,mode:3,size:3,cycles:6},254:{ins:24,mode:8,size:3,cycles:7},232:{ins:25,mode:2,size:1,cycles:2},200:{ins:26,mode:2,size:1,cycles:2},76:{ins:27,mode:3,size:3,cycles:3},108:{ins:27,mode:12,size:3,cycles:5},32:{ins:28,mode:3,size:3,cycles:6},169:{ins:l,mode:5,size:2,cycles:2},165:{ins:l,mode:0,size:2,cycles:3},181:{ins:l,mode:6,size:2,cycles:4},173:{ins:l,mode:3,size:3,cycles:4},189:{ins:l,mode:8,size:3,cycles:4},185:{ins:l,mode:9,size:3,cycles:4},161:{ins:l,mode:h,size:2,cycles:6},177:{ins:l,mode:a,size:2,cycles:5},162:{ins:30,mode:5,size:2,cycles:2},166:{ins:30,mode:0,size:2,cycles:3},182:{ins:30,mode:7,size:2,cycles:4},174:{ins:30,mode:3,size:3,cycles:4},190:{ins:30,mode:9,size:3,cycles:4},160:{ins:31,mode:5,size:2,cycles:2},164:{ins:31,mode:0,size:2,cycles:3},180:{ins:31,mode:6,size:2,cycles:4},172:{ins:31,mode:3,size:3,cycles:4},188:{ins:31,mode:8,size:3,cycles:4},74:{ins:32,mode:4,size:1,cycles:2},70:{ins:32,mode:0,size:2,cycles:5},86:{ins:32,mode:6,size:2,cycles:6},78:{ins:32,mode:3,size:3,cycles:6},94:{ins:32,mode:8,size:3,cycles:7},26:{ins:c,mode:2,size:1,cycles:2},58:{ins:c,mode:2,size:1,cycles:2},90:{ins:c,mode:2,size:1,cycles:2},122:{ins:c,mode:2,size:1,cycles:2},218:{ins:c,mode:2,size:1,cycles:2},234:{ins:c,mode:2,size:1,cycles:2},250:{ins:c,mode:2,size:1,cycles:2},9:{ins:m,mode:5,size:2,cycles:2},5:{ins:m,mode:0,size:2,cycles:3},21:{ins:m,mode:6,size:2,cycles:4},13:{ins:m,mode:3,size:3,cycles:4},29:{ins:m,mode:8,size:3,cycles:4},25:{ins:m,mode:9,size:3,cycles:4},1:{ins:m,mode:h,size:2,cycles:6},17:{ins:m,mode:a,size:2,cycles:5},72:{ins:35,mode:2,size:1,cycles:3},8:{ins:36,mode:2,size:1,cycles:3},104:{ins:37,mode:2,size:1,cycles:4},40:{ins:38,mode:2,size:1,cycles:4},42:{ins:39,mode:4,size:1,cycles:2},38:{ins:39,mode:0,size:2,cycles:5},54:{ins:39,mode:6,size:2,cycles:6},46:{ins:39,mode:3,size:3,cycles:6},62:{ins:39,mode:8,size:3,cycles:7},106:{ins:40,mode:4,size:1,cycles:2},102:{ins:40,mode:0,size:2,cycles:5},118:{ins:40,mode:6,size:2,cycles:6},110:{ins:40,mode:3,size:3,cycles:6},126:{ins:40,mode:8,size:3,cycles:7},64:{ins:41,mode:2,size:1,cycles:6},96:{ins:42,mode:2,size:1,cycles:6},233:{ins:d,mode:5,size:2,cycles:2},235:{ins:d,mode:5,size:2,cycles:2},229:{ins:d,mode:0,size:2,cycles:3},245:{ins:d,mode:6,size:2,cycles:4},237:{ins:d,mode:3,size:3,cycles:4},253:{ins:d,mode:8,size:3,cycles:4},249:{ins:d,mode:9,size:3,cycles:4},225:{ins:d,mode:h,size:2,cycles:6},241:{ins:d,mode:a,size:2,cycles:5},56:{ins:44,mode:2,size:1,cycles:2},248:{ins:45,mode:2,size:1,cycles:2},120:{ins:46,mode:2,size:1,cycles:2},133:{ins:u,mode:0,size:2,cycles:3},149:{ins:u,mode:6,size:2,cycles:4},141:{ins:u,mode:3,size:3,cycles:4},157:{ins:u,mode:8,size:3,cycles:5},153:{ins:u,mode:9,size:3,cycles:5},129:{ins:u,mode:h,size:2,cycles:6},145:{ins:u,mode:a,size:2,cycles:6},134:{ins:48,mode:0,size:2,cycles:3},150:{ins:48,mode:7,size:2,cycles:4},142:{ins:48,mode:3,size:3,cycles:4},132:{ins:49,mode:0,size:2,cycles:3},148:{ins:49,mode:6,size:2,cycles:4},140:{ins:49,mode:3,size:3,cycles:4},170:{ins:50,mode:2,size:1,cycles:2},168:{ins:51,mode:2,size:1,cycles:2},186:{ins:52,mode:2,size:1,cycles:2},138:{ins:53,mode:2,size:1,cycles:2},154:{ins:54,mode:2,size:1,cycles:2},152:{ins:55,mode:2,size:1,cycles:2},75:{ins:56,mode:5,size:2,cycles:2},11:{ins:57,mode:5,size:2,cycles:2},43:{ins:57,mode:5,size:2,cycles:2},107:{ins:58,mode:5,size:2,cycles:2},203:{ins:59,mode:5,size:2,cycles:2},163:{ins:p,mode:h,size:2,cycles:6},167:{ins:p,mode:0,size:2,cycles:3},175:{ins:p,mode:3,size:3,cycles:4},179:{ins:p,mode:a,size:2,cycles:5},183:{ins:p,mode:7,size:2,cycles:4},191:{ins:p,mode:9,size:3,cycles:4},131:{ins:61,mode:h,size:2,cycles:6},135:{ins:61,mode:0,size:2,cycles:3},143:{ins:61,mode:3,size:3,cycles:4},151:{ins:61,mode:7,size:2,cycles:4},195:{ins:g,mode:h,size:2,cycles:8},199:{ins:g,mode:0,size:2,cycles:5},207:{ins:g,mode:3,size:3,cycles:6},211:{ins:g,mode:a,size:2,cycles:8},215:{ins:g,mode:6,size:2,cycles:6},219:{ins:g,mode:9,size:3,cycles:7},223:{ins:g,mode:8,size:3,cycles:7},227:{ins:R,mode:h,size:2,cycles:8},231:{ins:R,mode:0,size:2,cycles:5},239:{ins:R,mode:3,size:3,cycles:6},243:{ins:R,mode:a,size:2,cycles:8},247:{ins:R,mode:6,size:2,cycles:6},251:{ins:R,mode:9,size:3,cycles:7},255:{ins:R,mode:8,size:3,cycles:7},35:{ins:C,mode:h,size:2,cycles:8},39:{ins:C,mode:0,size:2,cycles:5},47:{ins:C,mode:3,size:3,cycles:6},51:{ins:C,mode:a,size:2,cycles:8},55:{ins:C,mode:6,size:2,cycles:6},59:{ins:C,mode:9,size:3,cycles:7},63:{ins:C,mode:8,size:3,cycles:7},99:{ins:_,mode:h,size:2,cycles:8},103:{ins:_,mode:0,size:2,cycles:5},111:{ins:_,mode:3,size:3,cycles:6},115:{ins:_,mode:a,size:2,cycles:8},119:{ins:_,mode:6,size:2,cycles:6},123:{ins:_,mode:9,size:3,cycles:7},127:{ins:_,mode:8,size:3,cycles:7},3:{ins:b,mode:h,size:2,cycles:8},7:{ins:b,mode:0,size:2,cycles:5},15:{ins:b,mode:3,size:3,cycles:6},19:{ins:b,mode:a,size:2,cycles:8},23:{ins:b,mode:6,size:2,cycles:6},27:{ins:b,mode:9,size:3,cycles:7},31:{ins:b,mode:8,size:3,cycles:7},67:{ins:y,mode:h,size:2,cycles:8},71:{ins:y,mode:0,size:2,cycles:5},79:{ins:y,mode:3,size:3,cycles:6},83:{ins:y,mode:a,size:2,cycles:8},87:{ins:y,mode:6,size:2,cycles:6},91:{ins:y,mode:9,size:3,cycles:7},95:{ins:y,mode:8,size:3,cycles:7},128:{ins:68,mode:5,size:2,cycles:2},130:{ins:68,mode:5,size:2,cycles:2},137:{ins:68,mode:5,size:2,cycles:2},194:{ins:68,mode:5,size:2,cycles:2},226:{ins:68,mode:5,size:2,cycles:2},12:{ins:f,mode:3,size:3,cycles:4},28:{ins:f,mode:8,size:3,cycles:4},60:{ins:f,mode:8,size:3,cycles:4},92:{ins:f,mode:8,size:3,cycles:4},124:{ins:f,mode:8,size:3,cycles:4},220:{ins:f,mode:8,size:3,cycles:4},252:{ins:f,mode:8,size:3,cycles:4},4:{ins:f,mode:0,size:2,cycles:3},68:{ins:f,mode:0,size:2,cycles:3},100:{ins:f,mode:0,size:2,cycles:3},20:{ins:f,mode:6,size:2,cycles:4},52:{ins:f,mode:6,size:2,cycles:4},84:{ins:f,mode:6,size:2,cycles:4},116:{ins:f,mode:6,size:2,cycles:4},212:{ins:f,mode:6,size:2,cycles:4},244:{ins:f,mode:6,size:2,cycles:4},147:{ins:71,mode:a,size:2,cycles:6},159:{ins:71,mode:9,size:3,cycles:5},155:{ins:72,mode:9,size:3,cycles:5},156:{ins:73,mode:8,size:3,cycles:5},158:{ins:74,mode:9,size:3,cycles:5},187:{ins:75,mode:9,size:3,cycles:4},139:{ins:76,mode:5,size:2,cycles:2},171:{ins:77,mode:5,size:2,cycles:2}};const E=class{IRQ_NORMAL=0;IRQ_NMI=1;IRQ_RESET=2;constructor(t){this.nes=t,this.mem=new Uint8Array(65536),this.mem.fill(255,0,8192);for(let t=0;t<4;t++){let e=2048*t;this.mem[e+8]=247,this.mem[e+9]=239,this.mem[e+10]=223,this.mem[e+15]=191}this.REG_ACC=0,this.REG_X=0,this.REG_Y=0,this.REG_SP=511,this.REG_PC=32767,this.REG_PC_NEW=32767,this.REG_STATUS=40,this.setStatus(40),this.F_CARRY=0,this.F_DECIMAL=0,this.F_INTERRUPT=1,this.F_INTERRUPT_NEW=1,this.F_OVERFLOW=0,this.F_SIGN=0,this.F_ZERO=1,this.F_NOTUSED=1,this.F_NOTUSED_NEW=1,this.F_BRK=1,this.F_BRK_NEW=1,this.cyclesToHalt=0,this.crash=!1,this.irqRequested=!1,this.irqType=null,this.nmiRaised=!1,this.nmiPending=!1,this.nmiImmediate=!1,this.dataBus=0,this.instrBusCycles=0,this.apuCatchupCycles=0,this._cpuCycleBase=0,this.nmiRaisedAtCycle=0,this.nmiDotsRemainingInStep=0}emulate(){if(this.nmiImmediate)return this.nmiImmediate=!1,this.nmiPending=!1,this.nmiRaised=!1,this.instrBusCycles=0,this.REG_PC_NEW=this.REG_PC,this.F_INTERRUPT_NEW=this.F_INTERRUPT,this.doNonMaskableInterrupt(239&this.getStatus()),this.REG_PC=this.REG_PC_NEW,this.F_INTERRUPT=this.F_INTERRUPT_NEW,this.F_BRK=this.F_BRK_NEW,this._cpuCycleBase+=7,7;let t,e,s=0,i=0;if(this.nmiRaised&&(this.nmiPending=!0,this.nmiRaised=!1),this.irqRequested){switch(t=this.getStatus(),this.REG_PC_NEW=this.REG_PC,this.F_INTERRUPT_NEW=this.F_INTERRUPT,this.irqType){case 0:if(0!==this.F_INTERRUPT)break;this.doIrq(239&t),i=7;break;case 2:this.doResetInterrupt(),i=7}this.REG_PC=this.REG_PC_NEW,this.F_INTERRUPT=this.F_INTERRUPT_NEW,this.F_BRK=this.F_BRK_NEW,this.irqRequested=!1}if(null===this.nes.mmap)return 32;this.instrBusCycles=0,this.apuCatchupCycles=0,this.nmiDotsRemainingInStep=0,this._dmcFetchCycles=this._cyclesToNextDmcFetch();let r=this.loadFromCartridge(this.REG_PC+1);this.dataBus=r,this.instrBusCycles=1,this.nes.ppu.advanceDots(3);let h=T[r]??S,n=h.cycles,o=0,l=h.mode,c=this.REG_PC;this.REG_PC+=h.size;let m=0;switch(l){case 0:m=this.loadDirect(c+2);break;case 1:m=this.loadDirect(c+2),m+=m<128?this.REG_PC:this.REG_PC-256;break;case 2:this.loadDirect(c+2);break;case 3:m=this.load16bit(c+2);break;case 4:this.loadDirect(c+2),m=this.REG_ACC;break;case 5:m=this.REG_PC;break;case 6:{let t=this.loadDirect(c+2);this.loadDirect(t),m=t+this.REG_X&255;break}case 7:{let t=this.loadDirect(c+2);this.loadDirect(t),m=t+this.REG_Y&255;break}case 8:m=this.load16bit(c+2),s=m>>8&255,(65280&m)!=(m+this.REG_X&65280)&&(this.load(65280&m|m+this.REG_X&255),o=1),m+=this.REG_X;break;case 9:m=this.load16bit(c+2),s=m>>8&255,(65280&m)!=(m+this.REG_Y&65280)&&(this.load(65280&m|m+this.REG_Y&255),o=1),m+=this.REG_Y;break;case 10:{let t=this.loadDirect(c+2);this.loadDirect(t);let e=t+this.REG_X&255;m=this.loadDirect(e)|this.loadDirect(e+1&255)<<8;break}case 11:{let t=this.loadDirect(c+2);m=this.loadDirect(t)|this.loadDirect(t+1&255)<<8,s=m>>8&255,(65280&m)!=(m+this.REG_Y&65280)&&(this.load(65280&m|m+this.REG_Y&255),o=1),m+=this.REG_Y;break}case 12:m=this.load16bit(c+2);var d=65280&m|1+(255&m)&255;m=this.load(m)|this.load(d)<<8}switch(m&=65535,h.ins){case 0:e=this.load(m),t=this.REG_ACC+e+this.F_CARRY,!(128&(this.REG_ACC^e))&&128&(this.REG_ACC^t)?this.F_OVERFLOW=1:this.F_OVERFLOW=0,this.F_CARRY=t>255?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t,this.REG_ACC=255&t,n+=o;break;case 1:this.REG_ACC=this.REG_ACC&this.load(m),this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC,n+=o;break;case 2:4===l?(this.F_CARRY=this.REG_ACC>>7&1,this.REG_ACC=this.REG_ACC<<1&255,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC):(0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),this.F_CARRY=t>>7&1,t=t<<1&255,this.F_SIGN=t>>7&1,this.F_ZERO=t,this.write(m,t));break;case 3:0===this.F_CARRY&&(n+=this._takeBranch(c,m));break;case 4:1===this.F_CARRY&&(n+=this._takeBranch(c,m));break;case 5:0===this.F_ZERO&&(n+=this._takeBranch(c,m));break;case 6:t=this.load(m),this.F_SIGN=t>>7&1,this.F_OVERFLOW=t>>6&1,t&=this.REG_ACC,this.F_ZERO=t;break;case 7:1===this.F_SIGN&&(n+=this._takeBranch(c,m));break;case 8:0!==this.F_ZERO&&(n+=this._takeBranch(c,m));break;case 9:0===this.F_SIGN&&(n+=this._takeBranch(c,m));break;case 10:this.REG_PC+=2,this.push(this.REG_PC>>8&255),this.push(255&this.REG_PC),this.F_BRK=1,this.push(this.getStatus()),this.F_INTERRUPT=1,this.REG_PC=this.load16bit(65534),this.REG_PC--;break;case 11:0===this.F_OVERFLOW&&(n+=this._takeBranch(c,m));break;case 12:1===this.F_OVERFLOW&&(n+=this._takeBranch(c,m));break;case 13:this.F_CARRY=0;break;case 14:this.F_DECIMAL=0;break;case 15:this.F_INTERRUPT=0;break;case 16:this.F_OVERFLOW=0;break;case 17:t=this.REG_ACC-this.load(m),this.F_CARRY=t>=0?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t,n+=o;break;case 18:t=this.REG_X-this.load(m),this.F_CARRY=t>=0?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t;break;case 19:t=this.REG_Y-this.load(m),this.F_CARRY=t>=0?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t;break;case 20:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),t=t-1&255,this.F_SIGN=t>>7&1,this.F_ZERO=t,this.write(m,t);break;case 21:this.REG_X=this.REG_X-1&255,this.F_SIGN=this.REG_X>>7&1,this.F_ZERO=this.REG_X;break;case 22:this.REG_Y=this.REG_Y-1&255,this.F_SIGN=this.REG_Y>>7&1,this.F_ZERO=this.REG_Y;break;case 23:this.REG_ACC=255&(this.load(m)^this.REG_ACC),this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC,n+=o;break;case 24:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),t=t+1&255,this.F_SIGN=t>>7&1,this.F_ZERO=t,this.write(m,t);break;case 25:this.REG_X=this.REG_X+1&255,this.F_SIGN=this.REG_X>>7&1,this.F_ZERO=this.REG_X;break;case 26:this.REG_Y++,this.REG_Y&=255,this.F_SIGN=this.REG_Y>>7&1,this.F_ZERO=this.REG_Y;break;case 27:this.REG_PC=m-1;break;case 28:this.push(this.REG_PC>>8&255),this.push(255&this.REG_PC),this.loadDirect(c+3),this.REG_PC=m-1;break;case 29:this.REG_ACC=this.load(m),this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC,n+=o;break;case 30:this.REG_X=this.load(m),this.F_SIGN=this.REG_X>>7&1,this.F_ZERO=this.REG_X,n+=o;break;case 31:this.REG_Y=this.load(m),this.F_SIGN=this.REG_Y>>7&1,this.F_ZERO=this.REG_Y,n+=o;break;case 32:4===l?(t=255&this.REG_ACC,this.F_CARRY=1&t,t>>=1,this.REG_ACC=t):(0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=255&this.load(m),this.write(m,t),this.F_CARRY=1&t,t>>=1,this.write(m,t)),this.F_SIGN=0,this.F_ZERO=t;break;case 33:case 68:break;case 34:t=255&(this.load(m)|this.REG_ACC),this.F_SIGN=t>>7&1,this.F_ZERO=t,this.REG_ACC=t,n+=o;break;case 35:this.push(this.REG_ACC);break;case 36:this.F_BRK=1,this.push(this.getStatus());break;case 37:this.REG_ACC=this.pull(),this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 38:this.setStatusFromStack(this.pull());break;case 39:4===l?(t=this.REG_ACC,e=this.F_CARRY,this.F_CARRY=t>>7&1,t=(t<<1&255)+e,this.REG_ACC=t):(0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),e=this.F_CARRY,this.F_CARRY=t>>7&1,t=(t<<1&255)+e,this.write(m,t)),this.F_SIGN=t>>7&1,this.F_ZERO=t;break;case 40:4===l?(e=this.F_CARRY<<7,this.F_CARRY=1&this.REG_ACC,t=(this.REG_ACC>>1)+e,this.REG_ACC=t):(0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),e=this.F_CARRY<<7,this.F_CARRY=1&t,t=(t>>1)+e,this.write(m,t)),this.F_SIGN=t>>7&1,this.F_ZERO=t;break;case 41:if(this.setStatusFromStack(this.pull()),this.REG_PC=this.pull(),this.REG_PC+=this.pull()<<8,65535===this.REG_PC)return;this.REG_PC--;break;case 42:if(this.REG_PC=this.pull(),this.REG_PC+=this.pull()<<8,65535===this.REG_PC)return;break;case 43:e=this.load(m),t=this.REG_ACC-e-(1-this.F_CARRY),this.F_SIGN=t>>7&1,this.F_ZERO=255&t,128&(this.REG_ACC^t)&&128&(this.REG_ACC^e)?this.F_OVERFLOW=1:this.F_OVERFLOW=0,this.F_CARRY=t<0?0:1,this.REG_ACC=255&t,n+=o;break;case 44:this.F_CARRY=1;break;case 45:this.F_DECIMAL=1;break;case 46:this.F_INTERRUPT=1;break;case 47:0!==o||8!==l&&9!==l&&l!==a||this.load(m),this.write(m,this.REG_ACC);break;case 48:this.write(m,this.REG_X);break;case 49:this.write(m,this.REG_Y);break;case 50:this.REG_X=this.REG_ACC,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 51:this.REG_Y=this.REG_ACC,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 52:this.REG_X=255&this.REG_SP,this.F_SIGN=this.REG_SP>>7&1,this.F_ZERO=this.REG_X;break;case 53:this.REG_ACC=this.REG_X,this.F_SIGN=this.REG_X>>7&1,this.F_ZERO=this.REG_X;break;case 54:this.REG_SP=255&this.REG_X;break;case 55:this.REG_ACC=this.REG_Y,this.F_SIGN=this.REG_Y>>7&1,this.F_ZERO=this.REG_Y;break;case 56:t=this.REG_ACC&this.load(m),this.F_CARRY=1&t,this.REG_ACC=this.F_ZERO=t>>1,this.F_SIGN=0;break;case 57:this.REG_ACC=this.F_ZERO=this.REG_ACC&this.load(m),this.F_CARRY=this.F_SIGN=this.REG_ACC>>7&1;break;case 58:t=this.REG_ACC&this.load(m),this.REG_ACC=this.F_ZERO=(t>>1)+(this.F_CARRY<<7),this.F_SIGN=this.F_CARRY,this.F_CARRY=t>>7&1,this.F_OVERFLOW=1&(t>>7^t>>6);break;case 59:t=(this.REG_X&this.REG_ACC)-this.load(m),this.F_SIGN=t>>7&1,this.F_ZERO=255&t,this.F_CARRY=t<0?0:1,this.REG_X=255&t;break;case 60:this.REG_ACC=this.REG_X=this.F_ZERO=this.load(m),this.F_SIGN=this.REG_ACC>>7&1,n+=o;break;case 61:this.write(m,this.REG_ACC&this.REG_X);break;case 62:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),t=t-1&255,this.write(m,t),t=this.REG_ACC-t,this.F_CARRY=t>=0?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t;break;case 63:{0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),t=t+1&255,this.write(m,t);let e=t;t=this.REG_ACC-e-(1-this.F_CARRY),this.F_SIGN=t>>7&1,this.F_ZERO=255&t,128&(this.REG_ACC^t)&&128&(this.REG_ACC^e)?this.F_OVERFLOW=1:this.F_OVERFLOW=0,this.F_CARRY=t<0?0:1,this.REG_ACC=255&t;break}case 64:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),e=this.F_CARRY,this.F_CARRY=t>>7&1,t=(t<<1&255)+e,this.write(m,t),this.REG_ACC=this.REG_ACC&t,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 65:{0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),e=this.F_CARRY<<7,this.F_CARRY=1&t,t=(t>>1)+e,this.write(m,t);let s=t;t=this.REG_ACC+s+this.F_CARRY,!(128&(this.REG_ACC^s))&&128&(this.REG_ACC^t)?this.F_OVERFLOW=1:this.F_OVERFLOW=0,this.F_CARRY=t>255?1:0,this.F_SIGN=t>>7&1,this.F_ZERO=255&t,this.REG_ACC=255&t;break}case 66:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=this.load(m),this.write(m,t),this.F_CARRY=t>>7&1,t=t<<1&255,this.write(m,t),this.REG_ACC=this.REG_ACC|t,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 67:0!==o||8!==l&&9!==l&&l!==a||this.load(m),t=255&this.load(m),this.write(m,t),this.F_CARRY=1&t,t>>=1,this.write(m,t),this.REG_ACC=this.REG_ACC^t,this.F_SIGN=this.REG_ACC>>7&1,this.F_ZERO=this.REG_ACC;break;case 69:this.load(m),n+=o;break;case 71:{0===o&&this.load(m);let t=this._dmcFetchCycles>0&&this._dmcFetchCycles<=this.instrBusCycles?this.REG_ACC&this.REG_X:this.REG_ACC&this.REG_X&s+1&255;1===o&&(m=t<<8|255&m),this.write(m,t);break}case 72:{0===o&&this.load(m);let t=this._dmcFetchCycles>0&&this._dmcFetchCycles<=this.instrBusCycles;this.REG_SP=256|this.REG_ACC&this.REG_X;let e=t?255&this.REG_SP:255&this.REG_SP&s+1&255;1===o&&(m=e<<8|255&m),this.write(m,e);break}case 73:{0===o&&this.load(m);let t=this._dmcFetchCycles>0&&this._dmcFetchCycles<=this.instrBusCycles?this.REG_Y:this.REG_Y&s+1&255;1===o&&(m=t<<8|255&m),this.write(m,t);break}case 74:{0===o&&this.load(m);let t=this._dmcFetchCycles>0&&this._dmcFetchCycles<=this.instrBusCycles?this.REG_X:this.REG_X&s+1&255;1===o&&(m=t<<8|255&m),this.write(m,t);break}case 75:t=255&this.load(m)&this.REG_SP,this.REG_ACC=this.REG_X=this.F_ZERO=t,this.REG_SP=256|t,this.F_SIGN=t>>7&1,n+=o;break;case 76:this.REG_ACC=this.F_ZERO=(255|this.REG_ACC)&this.REG_X&this.load(m),this.F_SIGN=this.REG_ACC>>7&1;break;case 77:this.REG_ACC=this.REG_X=this.F_ZERO=(255|this.REG_ACC)&this.load(m),this.F_SIGN=this.REG_ACC>>7&1;break;default:throw new Error(`Game crashed, invalid opcode at address $${c.toString(16)}`)}if(this.instrBusCycles<n){let t=3*(n-this.instrBusCycles);this.instrBusCycles=n,this.nes.ppu.advanceDots(t)}if(this.nmiRaised){3*(this.instrBusCycles-this.nmiRaisedAtCycle)+this.nmiDotsRemainingInStep>=5&&(this.nmiImmediate=!0,this.nmiRaised=!1)}return this.nmiPending&&(this.REG_PC_NEW=this.REG_PC,this.F_INTERRUPT_NEW=this.F_INTERRUPT,this.doNonMaskableInterrupt(239&this.getStatus()),this.REG_PC=this.REG_PC_NEW,this.F_INTERRUPT=this.F_INTERRUPT_NEW,this.F_BRK=this.F_BRK_NEW,this.nmiPending=!1,i=7),this._cpuCycleBase+=n+i,n+i}loadFromCartridge(t){return this.nes.mmap.load(t)}_loadFromCartridgePlain(t){return this.nes.mmap.load(t)}_loadFromCartridgeWithGameGenie(t){let e=this.nes.mmap.load(t);return this.nes.gameGenie.applyCodes(t,e)}_updateCartridgeLoader(){this.nes.gameGenie.enabled&&this.nes.gameGenie.patches.length>0?this.loadFromCartridge=this._loadFromCartridgeWithGameGenie:delete this.loadFromCartridge}load(t){if(t<8192)this.dataBus=this.mem[2047&t],this.instrBusCycles++,this.nes.ppu.advanceDots(3);else if(t>=16384){if(16405===t){this.nes.papu.advanceFrameCounter(this.instrBusCycles-this.apuCatchupCycles),this.apuCatchupCycles=this.instrBusCycles;let e=this.loadFromCartridge(t);return this.instrBusCycles++,this.nes.ppu.advanceDots(3),e}this.dataBus=this.loadFromCartridge(t),this.instrBusCycles++,this.nes.ppu.advanceDots(3)}else this.instrBusCycles++,this.dataBus=this.loadFromCartridge(t),this.nes.ppu.advanceDots(3);return this.dataBus}loadDirect(t){return this.dataBus=t<8192?this.mem[2047&t]:this.loadFromCartridge(t),this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.dataBus}load16bit(t){let e;return t<8191?(this.dataBus=this.mem[2047&t],e=this.dataBus,this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.dataBus=this.mem[t+1&2047],this.instrBusCycles++,this.nes.ppu.advanceDots(3),e|this.dataBus<<8):(this.dataBus=this.loadFromCartridge(t),e=this.dataBus,this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.dataBus=this.loadFromCartridge(t+1),this.instrBusCycles++,this.nes.ppu.advanceDots(3),e|this.dataBus<<8)}write(t,e){t>=8192&&t<16384?(this.instrBusCycles++,this.dataBus=e,this.nes.mmap.write(t,e),this.nes.ppu.advanceDots(3)):(this.dataBus=e,t<8192?this.mem[2047&t]=e:this.nes.mmap.write(t,e),this.instrBusCycles++,this.nes.ppu.advanceDots(3))}requestIrq(t){this.irqRequested&&t===this.IRQ_NORMAL||(this.irqRequested=!0,this.irqType=t)}push(t){this.dataBus=t,this.mem[256|this.REG_SP]=t,this.REG_SP--,this.REG_SP=255&this.REG_SP,this.instrBusCycles++,this.nes.ppu.advanceDots(3)}pull(){return this.REG_SP++,this.REG_SP=255&this.REG_SP,this.dataBus=this.mem[256|this.REG_SP],this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.dataBus}_cyclesToNextDmcFetch(){if(!this.nes.papu)return 2147483647;let t=this.nes.papu.dmc;if(!t||!t.isEnabled||t.dmaFrequency<=0)return 2147483647;if(!t.hasSample)return 2147483647;let e=t.dmaFrequency>>3,s=t.shiftCounter+7>>3;return s<=0&&(s=e),s+(t.dmaCounter-1)*e}_takeBranch(t,e){let s=t+3&65535,i=e+1&65535;if(this.load(s),(65280&s)!=(65280&i)){let t=65280&s|255&i;return this.load(t),this.REG_PC=e,2}return this.REG_PC=e,1}pageCrossed(t,e){return(65280&t)!=(65280&e)}haltCycles(t){this.cyclesToHalt+=t}doNonMaskableInterrupt(t){if(null===this.nes.mmap)return;this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.REG_PC_NEW++,this.push(this.REG_PC_NEW>>8&255),this.push(255&this.REG_PC_NEW),this.F_INTERRUPT_NEW=1,this.push(t),this.dataBus=this.loadFromCartridge(65530),this.instrBusCycles++,this.nes.ppu.advanceDots(3);let e=this.dataBus;this.dataBus=this.loadFromCartridge(65531),this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.REG_PC_NEW=e|this.dataBus<<8,this.REG_PC_NEW--}doResetInterrupt(){this.dataBus=this.loadFromCartridge(65532),this.instrBusCycles++,this.nes.ppu.advanceDots(3);let t=this.dataBus;this.dataBus=this.loadFromCartridge(65533),this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.REG_PC_NEW=t|this.dataBus<<8,this.REG_PC_NEW--}doIrq(t){this.REG_PC_NEW++,this.push(this.REG_PC_NEW>>8&255),this.push(255&this.REG_PC_NEW),this.push(t),this.F_INTERRUPT_NEW=1,this.F_BRK_NEW=0,this.dataBus=this.loadFromCartridge(65534),this.instrBusCycles++,this.nes.ppu.advanceDots(3);let e=this.dataBus;this.dataBus=this.loadFromCartridge(65535),this.instrBusCycles++,this.nes.ppu.advanceDots(3),this.REG_PC_NEW=e|this.dataBus<<8,this.REG_PC_NEW--}getStatus(){return this.F_CARRY|(0===this.F_ZERO?1:0)<<1|this.F_INTERRUPT<<2|this.F_DECIMAL<<3|this.F_BRK<<4|this.F_NOTUSED<<5|this.F_OVERFLOW<<6|this.F_SIGN<<7}setStatus(t){this.F_CARRY=1&t,this.F_ZERO=1==(t>>1&1)?0:1,this.F_INTERRUPT=t>>2&1,this.F_DECIMAL=t>>3&1,this.F_BRK=t>>4&1,this.F_NOTUSED=t>>5&1,this.F_OVERFLOW=t>>6&1,this.F_SIGN=t>>7&1}setStatusFromStack(t){this.F_CARRY=1&t,this.F_ZERO=1==(t>>1&1)?0:1,this.F_INTERRUPT=t>>2&1,this.F_DECIMAL=t>>3&1,this.F_OVERFLOW=t>>6&1,this.F_SIGN=t>>7&1}static JSON_PROPERTIES=["mem","cyclesToHalt","dataBus","irqRequested","irqType","nmiRaised","nmiPending","nmiImmediate","REG_ACC","REG_X","REG_Y","REG_SP","REG_PC","REG_PC_NEW","REG_STATUS","F_CARRY","F_DECIMAL","F_INTERRUPT","F_INTERRUPT_NEW","F_OVERFLOW","F_SIGN","F_ZERO","F_NOTUSED","F_NOTUSED_NEW","F_BRK","F_BRK_NEW","_cpuCycleBase"];toJSON(){return r(this)}fromJSON(t){i(this,t)}};class k{static BUTTON_A=0;static BUTTON_B=1;static BUTTON_SELECT=2;static BUTTON_START=3;static BUTTON_UP=4;static BUTTON_DOWN=5;static BUTTON_LEFT=6;static BUTTON_RIGHT=7;static BUTTON_TURBO_A=8;static BUTTON_TURBO_B=9;static JSON_PROPERTIES=["state","baseA","baseB","turboA","turboB","turboToggle"];constructor(){this.state=new Array(8);for(let t=0;t<this.state.length;t++)this.state[t]=64;this.baseA=64,this.baseB=64,this.turboA=!1,this.turboB=!1,this.turboToggle=!1}buttonDown(t){t===k.BUTTON_TURBO_A?this.turboA=!0:t===k.BUTTON_TURBO_B?this.turboB=!0:(this.state[t]=65,t===k.BUTTON_A&&(this.baseA=65),t===k.BUTTON_B&&(this.baseB=65))}buttonUp(t){t===k.BUTTON_TURBO_A?(this.turboA=!1,this.state[k.BUTTON_A]=this.baseA):t===k.BUTTON_TURBO_B?(this.turboB=!1,this.state[k.BUTTON_B]=this.baseB):(this.state[t]=64,t===k.BUTTON_A&&(this.baseA=64),t===k.BUTTON_B&&(this.baseB=64))}clock(){(this.turboA||this.turboB)&&(this.turboToggle=!this.turboToggle,this.turboA&&(this.state[k.BUTTON_A]=this.turboToggle?65:64),this.turboB&&(this.state[k.BUTTON_B]=this.turboToggle?65:64))}toJSON(){return r(this)}fromJSON(t){i(this,t)}}const A=k;const B=class{constructor(){this.pix=new Uint8Array(64),this.initialized=!1,this.opaque=new Uint8Array(8)}setBuffer(t){for(let e=0;e<8;e++)this.setScanline(e,t[e],t[e+8])}setScanline(t,e,s){this.initialized=!0;let i=t<<3;for(let r=0;r<8;r++)this.pix[i+r]=(e>>7-r&1)+((s>>7-r&1)<<1),0===this.pix[i+r]&&(this.opaque[t]=!1)}render(t,e,s,i,r,h,a,n,o,l,c,m,d){if(h<-7||h>=256||a<-7||a>=240)return;let u,p,g,R;if(h<0&&(e-=h),h+i>=256&&(i=256-h),a<0&&(s-=a),a+r>=240&&(r=240-a),l||c)if(l&&!c){u=(a<<8)+h,p=7;for(let h=0;h<8;h++){for(let a=0;a<8;a++)a>=e&&a<i&&h>=s&&h<r&&(g=this.pix[p],R=d[u],0!==g&&m<=(255&R)&&(t[u]=o[g+n],R=3840&R|m,d[u]=R)),u++,p--;u-=8,u+=256,p+=16}}else if(c&&!l){u=(a<<8)+h,p=56;for(let h=0;h<8;h++){for(let a=0;a<8;a++)a>=e&&a<i&&h>=s&&h<r&&(g=this.pix[p],R=d[u],0!==g&&m<=(255&R)&&(t[u]=o[g+n],R=3840&R|m,d[u]=R)),u++,p++;u-=8,u+=256,p-=16}}else{u=(a<<8)+h,p=63;for(let h=0;h<8;h++){for(let a=0;a<8;a++)a>=e&&a<i&&h>=s&&h<r&&(g=this.pix[p],R=d[u],0!==g&&m<=(255&R)&&(t[u]=o[g+n],R=3840&R|m,d[u]=R)),u++,p--;u-=8,u+=256}}else{u=(a<<8)+h,p=0;for(let h=0;h<8;h++){for(let a=0;a<8;a++)a>=e&&a<i&&h>=s&&h<r&&(g=this.pix[p],R=d[u],0!==g&&m<=(255&R)&&(t[u]=o[g+n],R=3840&R|m,d[u]=R)),u++,p++;u-=8,u+=256}}}isTransparent(t,e){return 0===this.pix[(e<<3)+t]}toJSON(){return{opaque:Array.from(this.opaque),pix:Array.from(this.pix)}}fromJSON(t){this.opaque.set(t.opaque),this.pix.set(t.pix)}};const M=class{constructor(t,e,s){this.width=t,this.height=e,this.name=s,this.tile=new Uint8Array(t*e),this.attrib=new Uint8Array(t*e)}getTileIndex(t,e){return this.tile[e*this.width+t]}getAttrib(t,e){return this.attrib[e*this.width+t]}writeAttrib(t,e){let s,i,r,h,a=t%8*4,n=4*Math.floor(t/8);for(let t=0;t<2;t++)for(let o=0;o<2;o++){s=e>>2*(2*t+o)&3;for(let e=0;e<2;e++)for(let l=0;l<2;l++)i=a+2*o+l,r=n+2*t+e,h=r*this.width+i,this.attrib[h]=s<<2&12}}toJSON(){return{tile:Array.from(this.tile),attrib:Array.from(this.attrib)}}fromJSON(t){this.tile.set(t.tile),this.attrib.set(t.attrib)}};const F=class{constructor(){this.curTable=new Uint32Array(64),this.emphTable=new Array(8),this.currentEmph=-1}loadNTSCPalette(){this.curTable=new Uint32Array([5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0]),this.makeTables(),this.setEmphasis(0)}loadPALPalette(){this.curTable=new Uint32Array([5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0]),this.makeTables(),this.setEmphasis(0)}makeTables(){let t,e,s,i,r,h,a,n;for(let o=0;o<8;o++)for(h=1,a=1,n=1,1&o&&(a=.75,n=.75),2&o&&(h=.75,n=.75),4&o&&(h=.75,a=.75),this.emphTable[o]=new Uint32Array(64),r=0;r<64;r++)i=this.curTable[r],t=Math.floor(this.getRed(i)*h),e=Math.floor(this.getGreen(i)*a),s=Math.floor(this.getBlue(i)*n),this.emphTable[o][r]=this.getRgb(t,e,s)}setEmphasis(t){if(t!==this.currentEmph){this.currentEmph=t;for(let e=0;e<64;e++)this.curTable[e]=this.emphTable[t][e]}}getEntry(t){return this.curTable[t]}getRed(t){return t>>16&255}getGreen(t){return t>>8&255}getBlue(t){return 255&t}getRgb(t,e,s){return t<<16|e<<8|s}loadDefaultPalette(){this.curTable[0]=this.getRgb(117,117,117),this.curTable[1]=this.getRgb(39,27,143),this.curTable[2]=this.getRgb(0,0,171),this.curTable[3]=this.getRgb(71,0,159),this.curTable[4]=this.getRgb(143,0,119),this.curTable[5]=this.getRgb(171,0,19),this.curTable[6]=this.getRgb(167,0,0),this.curTable[7]=this.getRgb(127,11,0),this.curTable[8]=this.getRgb(67,47,0),this.curTable[9]=this.getRgb(0,71,0),this.curTable[10]=this.getRgb(0,81,0),this.curTable[11]=this.getRgb(0,63,23),this.curTable[12]=this.getRgb(27,63,95),this.curTable[13]=this.getRgb(0,0,0),this.curTable[14]=this.getRgb(0,0,0),this.curTable[15]=this.getRgb(0,0,0),this.curTable[16]=this.getRgb(188,188,188),this.curTable[17]=this.getRgb(0,115,239),this.curTable[18]=this.getRgb(35,59,239),this.curTable[19]=this.getRgb(131,0,243),this.curTable[20]=this.getRgb(191,0,191),this.curTable[21]=this.getRgb(231,0,91),this.curTable[22]=this.getRgb(219,43,0),this.curTable[23]=this.getRgb(203,79,15),this.curTable[24]=this.getRgb(139,115,0),this.curTable[25]=this.getRgb(0,151,0),this.curTable[26]=this.getRgb(0,171,0),this.curTable[27]=this.getRgb(0,147,59),this.curTable[28]=this.getRgb(0,131,139),this.curTable[29]=this.getRgb(0,0,0),this.curTable[30]=this.getRgb(0,0,0),this.curTable[31]=this.getRgb(0,0,0),this.curTable[32]=this.getRgb(255,255,255),this.curTable[33]=this.getRgb(63,191,255),this.curTable[34]=this.getRgb(95,151,255),this.curTable[35]=this.getRgb(167,139,253),this.curTable[36]=this.getRgb(247,123,255),this.curTable[37]=this.getRgb(255,119,183),this.curTable[38]=this.getRgb(255,119,99),this.curTable[39]=this.getRgb(255,155,59),this.curTable[40]=this.getRgb(243,191,63),this.curTable[41]=this.getRgb(131,211,19),this.curTable[42]=this.getRgb(79,223,75),this.curTable[43]=this.getRgb(88,248,152),this.curTable[44]=this.getRgb(0,235,219),this.curTable[45]=this.getRgb(0,0,0),this.curTable[46]=this.getRgb(0,0,0),this.curTable[47]=this.getRgb(0,0,0),this.curTable[48]=this.getRgb(255,255,255),this.curTable[49]=this.getRgb(171,231,255),this.curTable[50]=this.getRgb(199,215,255),this.curTable[51]=this.getRgb(215,203,255),this.curTable[52]=this.getRgb(255,199,255),this.curTable[53]=this.getRgb(255,199,219),this.curTable[54]=this.getRgb(255,191,179),this.curTable[55]=this.getRgb(255,219,171),this.curTable[56]=this.getRgb(255,231,163),this.curTable[57]=this.getRgb(227,255,163),this.curTable[58]=this.getRgb(171,243,191),this.curTable[59]=this.getRgb(179,255,207),this.curTable[60]=this.getRgb(159,255,243),this.curTable[61]=this.getRgb(0,0,0),this.curTable[62]=this.getRgb(0,0,0),this.curTable[63]=this.getRgb(0,0,0),this.makeTables(),this.setEmphasis(0)}};const v=class{STATUS_VRAMWRITE=4;STATUS_SLSPRITECOUNT=5;STATUS_SPRITE0HIT=6;STATUS_VBLANK=7;constructor(t){let e;for(this.nes=t,this.showSpr0Hit=!1,this.clipToTvSize=!0,this.vramMem=new Uint8Array(32768),this.spriteMem=new Uint8Array(256),this.vramAddress=null,this.vramTmpAddress=null,this.vramBufferedReadValue=0,this.firstWrite=!0,this.openBusLatch=0,this.openBusDecayFrames=0,this.sramAddress=0,this.currentMirroring=-1,this.nmiOutput=!1,this.nmiSuppressed=!1,this.vblankPending=!1,this.frameEnded=!1,this.dummyCycleToggle=!1,this.validTileData=!1,this.scanlineAlreadyRendered=null,this.f_nmiOnVblank=0,this.f_spriteSize=0,this.f_bgPatternTable=0,this.f_spPatternTable=0,this.f_addrInc=0,this.f_nTblAddress=0,this.f_color=0,this.f_spVisibility=0,this.f_bgVisibility=0,this.f_spClipping=0,this.f_bgClipping=0,this.f_dispType=0,this.cntFV=0,this.cntV=0,this.cntH=0,this.cntVT=0,this.cntHT=0,this.regFV=0,this.regV=0,this.regH=0,this.regVT=0,this.regHT=0,this.regFH=0,this.regS=0,this.curNt=null,this.attrib=new Uint8Array(32),this.buffer=new Uint32Array(61440),this.bgbuffer=new Uint32Array(61440),this.pixrendered=new Uint32Array(61440),this.validTileData=null,this.scantile=new Array(32),this.scanline=0,this.lastRenderedScanline=-1,this.curX=0,this.sprX=new Uint8Array(64),this.sprY=new Uint8Array(64),this.sprTile=new Uint8Array(64),this.sprCol=new Uint8Array(64),this.vertFlip=new Uint8Array(64),this.horiFlip=new Uint8Array(64),this.bgPriority=new Uint8Array(64),this.spr0HitX=0,this.spr0HitY=0,this.hitSpr0=!1,this.secondaryOAM=new Uint8Array(32),this.secondaryOAM.fill(255),this.spritesFound=0,this.sprite0InSecondary=!1,this.scanlineSpriteCount=new Uint8Array(241),this.scanlineSecondaryOAM=new Uint8Array(7712),this.scanlineSprite0=new Uint8Array(241),this.sprPalette=new Uint32Array(16),this.imgPalette=new Uint32Array(16),this.ptTile=new Array(512),e=0;e<512;e++)this.ptTile[e]=new B;for(this.ntable1=new Array(4),this.currentMirroring=-1,this.nameTable=new Array(4),e=0;e<4;e++)this.nameTable[e]=new M(32,32,`Nt${e}`);for(this.vramMirrorTable=new Uint16Array(32768),e=0;e<32768;e++)this.vramMirrorTable[e]=e;this.palTable=new F,this.palTable.loadNTSCPalette(),this.updateControlReg1(0),this.updateControlReg2(0)}setMirroring(t){if(t!==this.currentMirroring){this.currentMirroring=t,this.triggerRendering(),null===this.vramMirrorTable&&(this.vramMirrorTable=new Uint16Array(32768));for(let t=0;t<32768;t++)this.vramMirrorTable[t]=t;this.defineMirrorRegion(16160,16128,32),this.defineMirrorRegion(16192,16128,32),this.defineMirrorRegion(16256,16128,32),this.defineMirrorRegion(16320,16128,32),this.defineMirrorRegion(12288,8192,3840),this.defineMirrorRegion(16384,0,16384),t===this.nes.rom.HORIZONTAL_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=0,this.ntable1[2]=1,this.ntable1[3]=1,this.defineMirrorRegion(9216,8192,1024),this.defineMirrorRegion(11264,10240,1024)):t===this.nes.rom.VERTICAL_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=1,this.ntable1[2]=0,this.ntable1[3]=1,this.defineMirrorRegion(10240,8192,1024),this.defineMirrorRegion(11264,9216,1024)):t===this.nes.rom.SINGLESCREEN_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=0,this.ntable1[2]=0,this.ntable1[3]=0,this.defineMirrorRegion(9216,8192,1024),this.defineMirrorRegion(10240,8192,1024),this.defineMirrorRegion(11264,8192,1024)):t===this.nes.rom.SINGLESCREEN_MIRRORING2?(this.ntable1[0]=1,this.ntable1[1]=1,this.ntable1[2]=1,this.ntable1[3]=1,this.defineMirrorRegion(9216,9216,1024),this.defineMirrorRegion(10240,9216,1024),this.defineMirrorRegion(11264,9216,1024)):(this.ntable1[0]=0,this.ntable1[1]=1,this.ntable1[2]=2,this.ntable1[3]=3)}}defineMirrorRegion(t,e,s){for(let i=0;i<s;i++)this.vramMirrorTable[t+i]=e+i}startVBlank(){this.openBusDecayFrames>0&&(this.openBusDecayFrames--,0===this.openBusDecayFrames&&(this.openBusLatch=0)),this.lastRenderedScanline<239&&this.renderFramePartially(this.lastRenderedScanline+1,240-this.lastRenderedScanline),this.endFrame(),this.lastRenderedScanline=-1}_fireVblankSet(t,e){this.vblankPending=!1,this.nmiSuppressed||(this.setStatusFlag(this.STATUS_VBLANK,!0),this._updateNmiOutput(),t.nmiRaised&&(t.nmiDotsRemainingInStep=e)),this.nmiSuppressed=!1,this.startVBlank(),this.frameEnded=!0}_fireVblankClear(t,e){t.nmiRaised&&e&&(t.nmiPending=!0,t.nmiRaised=!1),this.setStatusFlag(this.STATUS_VBLANK,!1),this.setStatusFlag(this.STATUS_SPRITE0HIT,!1),this.setStatusFlag(this.STATUS_SLSPRITECOUNT,!1),this.hitSpr0=!1,this.spr0HitX=-1,this.spr0HitY=-1,this._updateNmiOutput()}advanceDots(t){let e=this.curX+t;if(e<341&&!(0===this.scanline&&this.vblankPending&&this.curX<=1&&e>=1)&&!(20===this.scanline&&this.curX<=1&&e>=1)&&(this.spr0HitX<this.curX||this.spr0HitX>=e))return void(this.curX=e);let s=this.nes.cpu;for(let e=0;e<t;e++)0===this.scanline&&1===this.curX&&this.vblankPending?(this._fireVblankSet(s,t-e),this.curX++):(20===this.scanline&&1===this.curX&&this._fireVblankClear(s,e===t-1),this.curX===this.spr0HitX&&1===this.f_bgVisibility&&1===this.f_spVisibility&&this.scanline-21===this.spr0HitY&&this.setStatusFlag(this.STATUS_SPRITE0HIT,!0),this.curX++,341===this.curX&&(this.curX=0,this.endScanline()));0===this.scanline&&1===this.curX&&this.vblankPending&&this._fireVblankSet(s,0),20===this.scanline&&1===this.curX&&this._fireVblankClear(s,!0)}endScanline(){switch(this.scanline){case 19:this.dummyCycleToggle&&(this.curX=1,this.dummyCycleToggle=!this.dummyCycleToggle);break;case 20:if(this.performOAMCorruption(),1===this.f_bgVisibility||1===this.f_spVisibility){this.cntFV=this.regFV,this.cntV=this.regV,this.cntH=this.regH,this.cntVT=this.regVT,this.cntHT=this.regHT,1!==this.f_bgVisibility&&1!==this.f_spVisibility||this.renderBgScanline(!1,0),this.scanlineSpriteCount[0]=0,this.scanlineSprite0[0]=0;for(let t=0;t<32;t++)this.scanlineSecondaryOAM[t]=255;let t=32;for(let e=0;e<32;e++)this.scanlineSecondaryOAM[t+e]=this.secondaryOAM[e];this.scanlineSpriteCount[1]=this.spritesFound,this.scanlineSprite0[1]=this.sprite0InSecondary?1:0,this.sramAddress=0}1===this.f_bgVisibility&&1===this.f_spVisibility&&this.checkSprite0(0),this.hitSpr0||1!==this.f_bgVisibility||1!==this.f_spVisibility||this._precomputeSprite0Hit(1)&&(this.hitSpr0=!0),1!==this.f_bgVisibility&&1!==this.f_spVisibility||this.nes.mmap.clockIrqCounter();break;case 261:this.vblankPending=!0,this.scanline=-1;break;default:if(this.scanline>=21&&this.scanline<=260){let t=this.scanline+1-21;this.performOAMCorruption(),1!==this.f_bgVisibility&&1!==this.f_spVisibility||(this.scanlineAlreadyRendered||(this.cntHT=this.regHT,this.cntH=this.regH,this.renderBgScanline(!0,t)),this.scanlineAlreadyRendered=!1,!this.hitSpr0&&1===this.f_bgVisibility&&1===this.f_spVisibility&&this.scanlineSprite0[t]&&this.checkSprite0(t)&&(this.hitSpr0=!0)),t<240&&this.evaluateSprites(t+1),this.hitSpr0||1!==this.f_bgVisibility||1!==this.f_spVisibility||(this._precomputeSprite0Hit(t+1),-1!==this.spr0HitX&&(this.hitSpr0=!0)),1!==this.f_bgVisibility&&1!==this.f_spVisibility||this.nes.mmap.clockIrqCounter()}}this.scanline++,this.regsToAddress(),this.cntsToAddress()}startFrame(){let t;if(this.scanlineSpriteCount.fill(0),this.scanlineSprite0.fill(0),0===this.f_dispType)t=this.imgPalette[0];else switch(this.f_color){case 0:case 3:default:t=0;break;case 1:t=65280;break;case 2:t=255;break;case 4:t=16711680}this.buffer.fill(t),this.pixrendered.fill(65)}endFrame(){let t,e,s=this.buffer;if(this.showSpr0Hit){if(this.sprX[0]>=0&&this.sprX[0]<256&&this.sprY[0]>=0&&this.sprY[0]<240){for(t=0;t<256;t++)s[(this.sprY[0]<<8)+t]=16733525;for(t=0;t<240;t++)s[(t<<8)+this.sprX[0]]=16733525}if(this.spr0HitX>=0&&this.spr0HitX<256&&this.spr0HitY>=0&&this.spr0HitY<240){for(t=0;t<256;t++)s[(this.spr0HitY<<8)+t]=5635925;for(t=0;t<240;t++)s[(t<<8)+this.spr0HitX]=5635925}}if(this.clipToTvSize||0===this.f_bgClipping||0===this.f_spClipping)for(e=0;e<240;e++)s.fill(0,e<<8,8+(e<<8));if(this.clipToTvSize){for(e=0;e<240;e++)s.fill(0,248+(e<<8),256+(e<<8));s.fill(0,0,2048),s.fill(0,59392,61440)}this.nes.ui.writeFrame(s)}updateControlReg1(t){this.triggerRendering(),this.f_nmiOnVblank=t>>7&1,this.f_spriteSize=t>>5&1,this.f_bgPatternTable=t>>4&1,this.f_spPatternTable=t>>3&1,this.f_addrInc=t>>2&1,this.f_nTblAddress=3&t,this.regV=t>>1&1,this.regH=1&t,this.regS=t>>4&1,this._updateNmiOutput()}_updateNmiOutput(){let t=!!(128&this.nes.cpu.mem[8194]),e=0!==this.f_nmiOnVblank&&t;if(e&&!this.nmiOutput)this.nes.cpu.nmiRaised=!0,this.nes.cpu.nmiRaisedAtCycle=this.nes.cpu.instrBusCycles;else if(!e&&this.nmiOutput&&this.nes.cpu.nmiRaised){let t=this.nes.cpu.instrBusCycles-this.nes.cpu.nmiRaisedAtCycle;(0===t||1===t&&0===this.nes.cpu.nmiDotsRemainingInStep)&&(this.nes.cpu.nmiRaised=!1)}this.nmiOutput=e}updateControlReg2(t){if(this.triggerRendering(),this.f_color=t>>5&7,this.f_spVisibility=t>>4&1,this.f_bgVisibility=t>>3&1,this.f_spClipping=t>>2&1,this.f_bgClipping=t>>1&1,this.f_dispType=1&t,!this.hitSpr0&&1===this.f_bgVisibility&&1===this.f_spVisibility&&this.scanline>=21&&this.scanline<=260){let t=this.scanline+1-21;this.scanlineSprite0[t]&&this.checkSprite0(t)&&(this.hitSpr0=!0)}0===this.f_dispType&&this.palTable.setEmphasis(this.f_color),this.updatePalettes()}setStatusFlag(t,e){let s=1<<t;this.nes.cpu.mem[8194]=this.nes.cpu.mem[8194]&255-s|(e?s:0)}readStatusRegister(){let t=this.nes.cpu.mem[8194];return this.firstWrite=!0,0===this.scanline&&0===this.curX&&(this.nmiSuppressed=!0),this.setStatusFlag(this.STATUS_VBLANK,!1),this._updateNmiOutput(),t=224&t|31&this.openBusLatch,this.openBusLatch=t,this.openBusDecayFrames=36,t}writeSRAMAddress(t){this.sramAddress=t}sramLoad(){if((1===this.f_spVisibility||1===this.f_bgVisibility)&&this.scanline>=20&&this.scanline<=260){let t=this.curX;if(t<=64)return 255;if(t<=256){let t=this.spriteMem[this.sramAddress];return 2==(3&this.sramAddress)&&(t&=227),t}return 255}let t=this.spriteMem[this.sramAddress];return 2==(3&this.sramAddress)&&(t&=227),t}sramWrite(t){(1===this.f_spVisibility||1===this.f_bgVisibility)&&this.scanline>=20&&this.scanline<=260?this.sramAddress=this.sramAddress+4&252:(this.spriteMem[this.sramAddress]=t,this.spriteRamWriteUpdate(this.sramAddress,t),this.sramAddress++,this.sramAddress%=256)}scrollWrite(t){this.triggerRendering(),this.firstWrite?(this.regHT=t>>3&31,this.regFH=7&t):(this.regFV=7&t,this.regVT=t>>3&31),this.firstWrite=!this.firstWrite}writeVRAMAddress(t){this.firstWrite?(this.regFV=t>>4&3,this.regV=t>>3&1,this.regH=t>>2&1,this.regVT=7&this.regVT|(3&t)<<3):(this.triggerRendering(),this.regVT=24&this.regVT|t>>5&7,this.regHT=31&t,this.cntFV=this.regFV,this.cntV=this.regV,this.cntH=this.regH,this.cntVT=this.regVT,this.cntHT=this.regHT,this.checkSprite0(this.scanline+1-21)),this.firstWrite=!this.firstWrite,this.cntsToAddress(),this.vramAddress<8192&&this.nes.mmap.latchAccess(this.vramAddress)}vramLoad(){let t;if(this.cntsToAddress(),this.regsToAddress(),this.vramAddress<=16127)return t=this.vramBufferedReadValue,this.vramAddress<8192?this.vramBufferedReadValue=this.vramMem[this.vramAddress]:this.vramBufferedReadValue=this.mirroredLoad(this.vramAddress),this.vramAddress<8192&&this.nes.mmap.latchAccess(this.vramAddress),this._incrementVramAddress(),this.cntsFromAddress(),this.regsFromAddress(),t;let e=31&this.vramAddress;return 16==(19&e)&&(e&=15),t=63&this.vramMem[16128+e]|192&this.openBusLatch,this.vramBufferedReadValue=this.mirroredLoad(12287&this.vramAddress),this._incrementVramAddress(),this.cntsFromAddress(),this.regsFromAddress(),t}vramWrite(t){this.triggerRendering(),this.cntsToAddress(),this.regsToAddress(),this.vramAddress>=8192?this.mirroredWrite(this.vramAddress,t):(this.nes.mmap.canWriteChr(this.vramAddress)&&this.writeMem(this.vramAddress,t),this.nes.mmap.latchAccess(this.vramAddress)),this._incrementVramAddress(),this.regsFromAddress(),this.cntsFromAddress()}sramDMA(t){let e,s=256*t;for(let t=0;t<256;t++){e=this.nes.cpu.mem[s+t];let i=this.sramAddress+t&255;this.spriteMem[i]=e,this.spriteRamWriteUpdate(i,e)}let i=this.nes.cpu,r=(i._cpuCycleBase+i.instrBusCycles)%2==0?514:513;i.haltCycles(r)}regsFromAddress(){let t=this.vramTmpAddress>>8&255;this.regFV=t>>4&7,this.regV=t>>3&1,this.regH=t>>2&1,this.regVT=7&this.regVT|(3&t)<<3,t=255&this.vramTmpAddress,this.regVT=24&this.regVT|t>>5&7,this.regHT=31&t}_incrementVramAddress(){let t=1===this.f_spVisibility||1===this.f_bgVisibility,e=this.scanline>=20&&this.scanline<=260;if(t&&e)if(31&~this.vramAddress?this.vramAddress+=1:(this.vramAddress&=-32,this.vramAddress^=1024),28672&~this.vramAddress)this.vramAddress+=4096;else{this.vramAddress&=-28673;let t=this.vramAddress>>5&31;29===t?(t=0,this.vramAddress^=2048):31===t?t=0:t+=1,this.vramAddress=-993&this.vramAddress|t<<5}else this.vramAddress+=1===this.f_addrInc?32:1}cntsFromAddress(){let t=this.vramAddress>>8&255;this.cntFV=t>>4&3,this.cntV=t>>3&1,this.cntH=t>>2&1,this.cntVT=7&this.cntVT|(3&t)<<3,t=255&this.vramAddress,this.cntVT=24&this.cntVT|t>>5&7,this.cntHT=31&t}regsToAddress(){let t=(7&this.regFV)<<4;t|=(1&this.regV)<<3,t|=(1&this.regH)<<2,t|=this.regVT>>3&3;let e=(7&this.regVT)<<5;e|=31&this.regHT,this.vramTmpAddress=32767&(t<<8|e)}cntsToAddress(){let t=(7&this.cntFV)<<4;t|=(1&this.cntV)<<3,t|=(1&this.cntH)<<2,t|=this.cntVT>>3&3;let e=(7&this.cntVT)<<5;e|=31&this.cntHT,this.vramAddress=32767&(t<<8|e)}incTileCounter(t){for(let e=t;0!==e;e--)this.cntHT++,32===this.cntHT&&(this.cntHT=0,this.cntVT++,this.cntVT>=30&&(this.cntH++,2===this.cntH&&(this.cntH=0,this.cntV++,2===this.cntV&&(this.cntV=0,this.cntFV++,this.cntFV&=7))))}mirroredLoad(t){return this.vramMem[this.vramMirrorTable[t]]}mirroredWrite(t,e){if(t>=16128&&t<16160)16128===t||16144===t?(this.writeMem(16128,e),this.writeMem(16144,e)):16132===t||16148===t?(this.writeMem(16132,e),this.writeMem(16148,e)):16136===t||16152===t?(this.writeMem(16136,e),this.writeMem(16152,e)):16140===t||16156===t?(this.writeMem(16140,e),this.writeMem(16156,e)):this.writeMem(t,e);else{if(!(t<this.vramMirrorTable.length))throw new Error(`Invalid VRAM address: ${t.toString(16)}`);this.writeMem(this.vramMirrorTable[t],e)}}triggerRendering(){this._inRendering||this.scanline>=21&&this.scanline<=260&&(this.renderFramePartially(this.lastRenderedScanline+1,this.scanline-21-this.lastRenderedScanline),this.lastRenderedScanline=this.scanline-21)}renderFramePartially(t,e){if(this._inRendering=!0,this.nes.mmap.onSpriteRender(),1===this.f_spVisibility&&this.renderSpritesPartially(t,e,1),1===this.f_bgVisibility){let s=t<<8,i=t+e<<8;i>61440&&(i=61440);let r=this.buffer,h=this.bgbuffer,a=this.pixrendered;for(let t=s;t<i;t++)a[t]>255&&(r[t]=h[t])}1===this.f_spVisibility&&this.renderSpritesPartially(t,e,0),this.nes.mmap.onBgRender(),this._inRendering=!1,this.validTileData=!1}renderBgScanline(t,e){let s=0===this.regS?0:256,i=0===this.regS?0:4096,r=(e<<8)-this.regFH;if(this.curNt=this.ntable1[this.cntV+this.cntV+this.cntH],this.cntHT=this.regHT,this.cntH=this.regH,this.curNt=this.ntable1[this.cntV+this.cntV+this.cntH],e<240&&e-this.cntFV>=0){let h,a,n,o,l=this.cntFV<<3,c=this.scantile,m=this.attrib,d=this.ptTile,u=this.nameTable,p=this.imgPalette,g=this.pixrendered,R=t?this.bgbuffer:this.buffer,C=this.nes.mmap;this._inRendering=!0,this.nes.mmap.onBgRender(),1===this.f_spriteSize&&C.latchAccess(8168);for(let t=0;t<32;t++){if(e>=0){let e=u[this.curNt].getTileIndex(this.cntHT,this.cntVT);if(this.validTileData){if(h=c[t],void 0===h)continue;a=h.pix,n=m[t]}else{if(h=d[s+e],void 0===h)continue;if(a=h.pix,n=u[this.curNt].getAttrib(this.cntHT,this.cntVT),C.bgTileOverride){let t=C.getBgTileData(s,e,this.cntHT,this.cntVT);t&&(h=t.tile,a=h.pix,n=t.attrib)}c[t]=h,m[t]=n}let _=0,b=(t<<3)-this.regFH;if(b>-8)if(b<0&&(r-=b,_=-b),h.opaque[this.cntFV])for(;_<8;_++)R[r]=p[a[l+_]+n],g[r]|=256,r++;else for(;_<8;_++)o=a[l+_],0!==o&&(R[r]=p[o+n],g[r]|=256),r++;C.latchAccess(i+16*e+this.cntFV+8)}32===++this.cntHT&&(this.cntHT=0,this.cntH++,this.cntH%=2,this.curNt=this.ntable1[(this.cntV<<1)+this.cntH])}this._inRendering=!1,this.validTileData=!0}this.cntFV++,8===this.cntFV&&(this.cntFV=0,this.cntVT++,30===this.cntVT?(this.cntVT=0,this.cntV++,this.cntV%=2,this.curNt=this.ntable1[(this.cntV<<1)+this.cntH]):32===this.cntVT&&(this.cntVT=0),this.validTileData=!1)}performOAMCorruption(){if(!(1===this.f_spVisibility||1===this.f_bgVisibility))return;if(0===this.sramAddress)return;let t=248&this.sramAddress;for(let e=0;e<8;e++)this.spriteMem[e]=this.spriteMem[t+e&255];for(let t=0;t<8;t++)this.spriteRamWriteUpdate(t,this.spriteMem[t])}evaluateSprites(t){if(!(1===this.f_spVisibility||1===this.f_bgVisibility))return;let e=32*t;for(let t=0;t<32;t++)this.scanlineSecondaryOAM[e+t]=255;this.scanlineSpriteCount[t]=0,this.scanlineSprite0[t]=0;let s=0===this.f_spriteSize?8:16,i=0,r=0,h=this.sramAddress>>2&63,a=3&this.sramAddress,n=0,o=h,l=!0,c=0;do{let h;h=i>=8?n:l?a:0,l=!1;let m=this.spriteMem[4*o+h&255];if(t>m&&t<=m+s){if(!(i<8)){this.setStatusFlag(this.STATUS_SLSPRITECOUNT,!0);break}for(let t=0;t<4;t++)this.scanlineSecondaryOAM[e+r+t]=this.spriteMem[4*o+h+t&255];0===c&&(this.scanlineSprite0[t]=1),i++,r+=4}else i>=8&&(n=n+1&3);o=o+1&63,c++}while(0!==o);this.scanlineSpriteCount[t]=i;for(let t=0;t<32;t++)this.secondaryOAM[t]=this.scanlineSecondaryOAM[e+t];this.spritesFound=i,this.sprite0InSecondary=1===this.scanlineSprite0[t],this.sramAddress=0}renderSpritesPartially(t,e,s){if(1!==this.f_spVisibility)return;let i=this.nes.mmap,r=this.ptTile,h=this.buffer,a=this.sprPalette,n=this.pixrendered;for(let o=t;o<t+e;o++){if(o<0||o>=240)continue;let t=this.scanlineSpriteCount[o],e=32*o;for(let l=0;l<t;l++){let t=this.scanlineSecondaryOAM[e+4*l+0],c=this.scanlineSecondaryOAM[e+4*l+1],m=this.scanlineSecondaryOAM[e+4*l+2],d=this.scanlineSecondaryOAM[e+4*l+3],u=m>>7&1,p=m>>6&1,g=(3&m)<<2;if((m>>5&1)===s)if(0===this.f_spriteSize){let e=0===this.f_spPatternTable?c:c+256,s=0===this.f_spPatternTable?0:4096,m=t+1,R=o-m;if(R<0||R>=8)continue;r[e].render(h,0,R,8,R+1,d,m,g,a,p,u,l,n),i.latchAccess(s+16*c+8)}else{let e,s,m=1&c?4096:0,R=254&c,C=1&c?R-1+256:R,_=t+1,b=o-_;if(b<0||b>=16)continue;b<8?(e=u?1:0,s=b):(e=u?0:1,s=b-8),r[C+e].render(h,0,s,8,s+1,d,_+(b<8?0:8),g,a,p,u,l,n),i.latchAccess(m+16*R+8),i.latchAccess(m+16*(R+1)+8)}}}}checkSprite0(t){if(this.spr0HitX=-1,this.spr0HitY=-1,t<0||t>=240)return!1;if(!this.scanlineSprite0[t])return!1;if(0===this.scanlineSpriteCount[t])return!1;let e,s,i=32*t,r=this.scanlineSecondaryOAM[i+0],h=this.scanlineSecondaryOAM[i+1],a=this.scanlineSecondaryOAM[i+2],n=this.scanlineSecondaryOAM[i+3],o=r+1,l=a>>7&1,c=a>>6&1,m=0===this.f_spClipping||0===this.f_bgClipping,d=this.nes.mmap;if(0===this.f_spriteSize){let i=0===this.f_spPatternTable?0:256;if(o<=t&&o+8>t&&n<256)return s=d.getSpritePatternTile(h+i),e=l?7-(t-o):t-o,e*=8,this._checkSpr0Pixels(s,e,n,c,t,m)}else if(o<=t&&o+16>t&&n<256)return e=l?15-(t-o):t-o,e<8?s=d.getSpritePatternTile(h+(l?1:0)+(1&h?255:0)):(s=d.getSpritePatternTile(h+(l?0:1)+(1&h?255:0)),e=l?15-e:e-8),e*=8,this._checkSpr0Pixels(s,e,n,c,t,m);return!1}_checkSpr0Pixels(t,e,s,i,r,h){let a=256*r+s;for(let n=0;n<8;n++){let o=i?7-n:n,l=s+n;if(l>=0&&l<255){if(h&&l<8){a++;continue}if(a>=0&&a<61440&&this.pixrendered[a]>255&&0!==t.pix[e+o])return this.spr0HitX=l,this.spr0HitY=r,!0}a++}return!1}_precomputeSprite0Hit(t){if(t<1||t>239)return!1;if(!this.scanlineSprite0[t])return!1;if(0===this.scanlineSpriteCount[t])return!1;let e=32*t,s=this.scanlineSecondaryOAM[e+0],i=this.scanlineSecondaryOAM[e+1],r=this.scanlineSecondaryOAM[e+2],h=this.scanlineSecondaryOAM[e+3],a=s+1,n=r>>7&1,o=r>>6&1,l=0===this.f_spClipping||0===this.f_bgClipping,c=0===this.f_spriteSize?8:16;if(!(a<=t&&a+c>t))return!1;if(h>=256)return!1;let m,d,u=n?c-1-(t-a):t-a;if(0===this.f_spriteSize){let t=0===this.f_spPatternTable?0:256;m=this.ptTile[i+t],d=8*u}else{let t=1&i?256:0,e=-2&i;u<8?(m=this.ptTile[e+t+(n?1:0)],d=8*u):(m=this.ptTile[e+t+(n?0:1)],d=8*(u-8))}if(!m)return!1;let p=this.cntFV,g=this.cntVT,R=this.cntV,C=0===this.regS?0:256;for(let e=0;e<8;e++){let s=h+e;if(s>=255)continue;if(l&&s<8)continue;let i=o?7-e:e;if(0===m.pix[d+i])continue;let r=s+this.regFH>>3,a=this.regHT+r,n=this.regH;a>=32&&(a-=32,n^=1);let c=this.ntable1[(R<<1)+n],u=this.nameTable[c].getTileIndex(a,g),_=this.ptTile[C+u];if(!_)continue;let b=s+this.regFH&7;if(0!==_.pix[8*p+b])return this.spr0HitX=s,this.spr0HitY=t-1,!0}return!1}writeMem(t,e){this.vramMem[t]=e,t<8192?(this.vramMem[t]=e,this.patternWrite(t,e)):t>=8192&&t<9152?this.nameTableWrite(this.ntable1[0],t-8192,e):t>=9152&&t<9216?this.attribTableWrite(this.ntable1[0],t-9152,e):t>=9216&&t<10176?this.nameTableWrite(this.ntable1[1],t-9216,e):t>=10176&&t<10240?this.attribTableWrite(this.ntable1[1],t-10176,e):t>=10240&&t<11200?this.nameTableWrite(this.ntable1[2],t-10240,e):t>=11200&&t<11264?this.attribTableWrite(this.ntable1[2],t-11200,e):t>=11264&&t<12224?this.nameTableWrite(this.ntable1[3],t-11264,e):t>=12224&&t<12288?this.attribTableWrite(this.ntable1[3],t-12224,e):t>=16128&&t<16160&&this.updatePalettes()}updatePalettes(){let t;for(t=0;t<16;t++)0===this.f_dispType?this.imgPalette[t]=this.palTable.getEntry(63&this.vramMem[16128+t]):this.imgPalette[t]=this.palTable.getEntry(48&this.vramMem[16128+t]);for(t=0;t<16;t++)0===this.f_dispType?this.sprPalette[t]=this.palTable.getEntry(63&this.vramMem[16144+t]):this.sprPalette[t]=this.palTable.getEntry(48&this.vramMem[16144+t])}patternWrite(t,e){let s=t>>4,i=15&t;i<8?this.ptTile[s].setScanline(i,e,this.vramMem[t+8]):this.ptTile[s].setScanline(i-8,this.vramMem[t-8],e)}nameTableWrite(t,e,s){this.nameTable[t].tile[e]=s;let i=this.scanline+1-21;this.checkSprite0(i)}attribTableWrite(t,e,s){this.nameTable[t].writeAttrib(e,s),this.nameTable[t].tile[960+e]=s}spriteRamWriteUpdate(t,e){let s=t>>2;if(0===s){let t=this.scanline+1-21;this.checkSprite0(t)}switch(3&t){case 0:this.sprY[s]=e;break;case 1:this.sprTile[s]=e;break;case 2:this.vertFlip[s]=e>>7&1,this.horiFlip[s]=e>>6&1,this.bgPriority[s]=e>>5&1,this.sprCol[s]=(3&e)<<2;break;case 3:this.sprX[s]=e}}isPixelWhite(t,e){return this.triggerRendering(),16777215===this.nes.ppu.buffer[(e<<8)+t]}toJSON(){let t,e=r(this);for(e.nameTable=[],t=0;t<this.nameTable.length;t++)e.nameTable[t]=this.nameTable[t].toJSON();for(e.ptTile=[],t=0;t<this.ptTile.length;t++)e.ptTile[t]=this.ptTile[t].toJSON();return e}fromJSON(t){let e;for(i(this,t),e=0;e<this.nameTable.length;e++)this.nameTable[e].fromJSON(t.nameTable[e]);for(e=0;e<this.ptTile.length;e++)this.ptTile[e].fromJSON(t.ptTile[e]);for(e=0;e<this.spriteMem.length;e++)this.spriteRamWriteUpdate(e,this.spriteMem[e])}static JSON_PROPERTIES=["vramMem","spriteMem","cntFV","cntV","cntH","cntVT","cntHT","regFV","regV","regH","regVT","regHT","regFH","regS","vramAddress","vramTmpAddress","f_nmiOnVblank","f_spriteSize","f_bgPatternTable","f_spPatternTable","f_addrInc","f_nTblAddress","f_color","f_spVisibility","f_bgVisibility","f_spClipping","f_bgClipping","f_dispType","vramBufferedReadValue","firstWrite","openBusLatch","openBusDecayFrames","currentMirroring","vramMirrorTable","ntable1","sramAddress","hitSpr0","secondaryOAM","spritesFound","sprite0InSecondary","sprPalette","imgPalette","curX","scanline","lastRenderedScanline","curNt","scantile","attrib","buffer","bgbuffer","pixrendered","nmiOutput","nmiSuppressed","vblankPending","dummyCycleToggle","validTileData","scanlineAlreadyRendered"]};class O{static MODE_NORMAL=0;static MODE_LOOP=1;static MODE_IRQ=2;static JSON_PROPERTIES=["isEnabled","hasSample","irqGenerated","playMode","dmaFrequency","dmaCounter","deltaCounter","playStartAddress","playAddress","playLength","playLengthCounter","shiftCounter","reg4012","reg4013","sample","dacLsb","data","lastFetchedByte"];constructor(t){this.papu=t,this.isEnabled=!1,this.hasSample=!1,this.irqGenerated=!1,this.playMode=O.MODE_NORMAL,this.dmaFrequency=0,this.dmaCounter=0,this.deltaCounter=0,this.playStartAddress=0,this.playAddress=0,this.playLength=0,this.playLengthCounter=0,this.sample=0,this.dacLsb=0,this.shiftCounter=0,this.reg4012=0,this.reg4013=0,this.data=0,this.lastFetchedByte=0}clockDmc(){this.hasSample&&(1&this.data?this.deltaCounter<63&&this.deltaCounter++:this.deltaCounter>0&&this.deltaCounter--,this.sample=this.isEnabled?(this.deltaCounter<<1)+this.dacLsb:0,this.data>>=1),this.dmaCounter--,this.dmaCounter<=0&&(this.hasSample=!1,this.endOfSample(),this.dmaCounter=8),this.irqGenerated&&this.papu.nes.cpu.requestIrq(this.papu.nes.cpu.IRQ_NORMAL)}endOfSample(){0===this.playLengthCounter&&this.playMode===O.MODE_LOOP&&(this.playAddress=this.playStartAddress,this.playLengthCounter=this.playLength),this.playLengthCounter>0&&(this.nextSample(),0===this.playLengthCounter&&this.playMode===O.MODE_IRQ&&(this.irqGenerated=!0))}nextSample(){this.data=this.papu.nes.mmap.load(this.playAddress),this.lastFetchedByte=this.data,this.papu.nes.cpu.haltCycles(4),this.playLengthCounter--,this.playAddress++,this.playAddress>65535&&(this.playAddress=32768),this.hasSample=!0}writeReg(t,e){16400===t?(e>>6?1==(e>>6&1)?this.playMode=O.MODE_LOOP:e>>6==2&&(this.playMode=O.MODE_IRQ):this.playMode=O.MODE_NORMAL,128&e||(this.irqGenerated=!1),this.dmaFrequency=this.papu.getDmcFrequency(15&e)):16401===t?(this.deltaCounter=e>>1&63,this.dacLsb=1&e,this.sample=(this.deltaCounter<<1)+this.dacLsb):16402===t?(this.playStartAddress=e<<6|49152,this.reg4012=e):16403===t?(this.playLength=1+(e<<4),this.reg4013=e):16405===t&&(this.irqGenerated=!1,e>>4&1?0===this.playLengthCounter&&(this.playAddress=this.playStartAddress,this.playLengthCounter=this.playLength,!this.hasSample&&this.playLengthCounter>0&&(this.nextSample(),this.dmaCounter=8,this.shiftCounter=this.dmaFrequency,0===this.playLengthCounter&&this.playMode===O.MODE_IRQ&&(this.irqGenerated=!0))):this.playLengthCounter=0)}setEnabled(t){this.isEnabled=t}getLengthStatus(){return 0!==this.playLengthCounter&&this.isEnabled?1:0}getIrqStatus(){return this.irqGenerated?1:0}toJSON(){return r(this)}fromJSON(t){i(this,t)}}const N=O;const w=class{constructor(t){this.papu=t,this.progTimerCount=0,this.progTimerMax=0,this.isEnabled=!1,this.lengthCounter=0,this.lengthCounterEnable=!1,this.envDecayDisable=!1,this.envDecayLoopEnable=!1,this.envReset=!1,this.shiftNow=!1,this.envDecayRate=0,this.envDecayCounter=0,this.envVolume=0,this.masterVolume=0,this.shiftReg=1,this.randomBit=0,this.randomMode=0,this.sampleValue=0,this.tmp=0,this.accValue=0,this.accCount=1}clockLengthCounter(){this.lengthCounterEnable&&this.lengthCounter>0&&(this.lengthCounter--,0===this.lengthCounter&&this.updateSampleValue())}clockEnvDecay(){this.envReset?(this.envReset=!1,this.envDecayCounter=this.envDecayRate+1,this.envVolume=15):--this.envDecayCounter<=0&&(this.envDecayCounter=this.envDecayRate+1,this.envVolume>0?this.envVolume--:this.envVolume=this.envDecayLoopEnable?15:0),this.envDecayDisable?this.masterVolume=this.envDecayRate:this.masterVolume=this.envVolume,this.updateSampleValue()}updateSampleValue(){this.isEnabled&&this.lengthCounter>0&&(this.sampleValue=this.randomBit*this.masterVolume)}writeReg(t,e){16396===t?(this.envDecayDisable=!!(16&e),this.envDecayRate=15&e,this.envDecayLoopEnable=!!(32&e),this.lengthCounterEnable=!(32&e),this.envDecayDisable?this.masterVolume=this.envDecayRate:this.masterVolume=this.envVolume):16398===t?(this.progTimerMax=this.papu.getNoiseWaveLength(15&e),this.randomMode=e>>7):16399===t&&(this.isEnabled&&(this.lengthCounter=this.papu.getLengthMax(248&e)),this.envReset=!0)}setEnabled(t){this.isEnabled=t,t||(this.lengthCounter=0),this.updateSampleValue()}getLengthStatus(){return 0!==this.lengthCounter&&this.isEnabled?1:0}toJSON(){return r(this)}fromJSON(t){i(this,t)}static JSON_PROPERTIES=["isEnabled","envDecayDisable","envDecayLoopEnable","lengthCounterEnable","envReset","shiftNow","lengthCounter","progTimerCount","progTimerMax","envDecayRate","envDecayCounter","envVolume","masterVolume","shiftReg","randomBit","randomMode","sampleValue","accValue","accCount","tmp"]};const V=class{constructor(t,e){this.papu=t,this.dutyLookup=[0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1],this.impLookup=[1,-1,0,0,0,0,0,0,1,0,-1,0,0,0,0,0,1,0,0,0,-1,0,0,0,-1,0,1,0,0,0,0,0],this.sqr1=e,this.progTimerCount=0,this.progTimerMax=0,this.lengthCounter=0,this.squareCounter=0,this.sweepCounter=0,this.sweepCounterMax=0,this.sweepMode=0,this.sweepShiftAmount=0,this.envDecayRate=0,this.envDecayCounter=0,this.envVolume=0,this.masterVolume=0,this.dutyMode=0,this.vol=0,this.isEnabled=!1,this.lengthCounterEnable=!1,this.sweepActive=!1,this.sweepCarry=!1,this.envDecayDisable=!1,this.envDecayLoopEnable=!1,this.envReset=!1,this.updateSweepPeriod=!1,this.sweepResult=0,this.sampleValue=0}clockLengthCounter(){this.lengthCounterEnable&&this.lengthCounter>0&&(this.lengthCounter--,0===this.lengthCounter&&this.updateSampleValue())}clockEnvDecay(){this.envReset?(this.envReset=!1,this.envDecayCounter=this.envDecayRate+1,this.envVolume=15):--this.envDecayCounter<=0&&(this.envDecayCounter=this.envDecayRate+1,this.envVolume>0?this.envVolume--:this.envVolume=this.envDecayLoopEnable?15:0),this.envDecayDisable?this.masterVolume=this.envDecayRate:this.masterVolume=this.envVolume,this.updateSampleValue()}clockSweep(){--this.sweepCounter<=0&&(this.sweepCounter=this.sweepCounterMax+1,this.sweepActive&&this.sweepShiftAmount>0&&this.progTimerMax>7&&(this.sweepCarry=!1,0===this.sweepMode?(this.progTimerMax+=this.progTimerMax>>this.sweepShiftAmount,this.progTimerMax>2047&&(this.progTimerMax=4095,this.sweepCarry=!0)):this.progTimerMax=this.progTimerMax-((this.progTimerMax>>this.sweepShiftAmount)+(this.sqr1?1:0)))),this.updateSweepPeriod&&(this.updateSweepPeriod=!1,this.sweepCounter=this.sweepCounterMax+1)}updateSampleValue(){this.isEnabled&&this.lengthCounter>0&&this.progTimerMax>7?0===this.sweepMode&&this.progTimerMax+(this.progTimerMax>>this.sweepShiftAmount)>2047?this.sampleValue=0:this.sampleValue=this.masterVolume*this.dutyLookup[(this.dutyMode<<3)+this.squareCounter]:this.sampleValue=0}writeReg(t,e){let s=this.sqr1?0:4;t===16384+s?(this.envDecayDisable=!!(16&e),this.envDecayRate=15&e,this.envDecayLoopEnable=!!(32&e),this.dutyMode=e>>6&3,this.lengthCounterEnable=!(32&e),this.envDecayDisable?this.masterVolume=this.envDecayRate:this.masterVolume=this.envVolume,this.updateSampleValue()):t===16385+s?(this.sweepActive=!!(128&e),this.sweepCounterMax=e>>4&7,this.sweepMode=e>>3&1,this.sweepShiftAmount=7&e,this.updateSweepPeriod=!0):t===16386+s?(this.progTimerMax&=1792,this.progTimerMax|=e):t===16387+s&&(this.progTimerMax&=255,this.progTimerMax|=(7&e)<<8,this.isEnabled&&(this.lengthCounter=this.papu.getLengthMax(248&e)),this.envReset=!0)}setEnabled(t){this.isEnabled=t,t||(this.lengthCounter=0),this.updateSampleValue()}getLengthStatus(){return 0!==this.lengthCounter&&this.isEnabled?1:0}toJSON(){return r(this)}fromJSON(t){i(this,t)}static JSON_PROPERTIES=["isEnabled","lengthCounterEnable","sweepActive","envDecayDisable","envDecayLoopEnable","envReset","sweepCarry","updateSweepPeriod","progTimerCount","progTimerMax","lengthCounter","squareCounter","sweepCounter","sweepCounterMax","sweepMode","sweepShiftAmount","envDecayRate","envDecayCounter","envVolume","masterVolume","dutyMode","sweepResult","sampleValue","vol"]};const P=class{constructor(t){this.papu=t,this.progTimerCount=0,this.progTimerMax=0,this.triangleCounter=0,this.isEnabled=!1,this.sampleCondition=!1,this.lengthCounter=0,this.lengthCounterEnable=!1,this.linearCounter=0,this.lcLoadValue=0,this.lcHalt=!0,this.lcControl=!1,this.tmp=0,this.sampleValue=15}clockLengthCounter(){this.lengthCounterEnable&&this.lengthCounter>0&&(this.lengthCounter--,0===this.lengthCounter&&this.updateSampleCondition())}clockLinearCounter(){this.lcHalt?(this.linearCounter=this.lcLoadValue,this.updateSampleCondition()):this.linearCounter>0&&(this.linearCounter--,this.updateSampleCondition()),this.lcControl||(this.lcHalt=!1)}getLengthStatus(){return 0!==this.lengthCounter&&this.isEnabled?1:0}readReg(t){return 0}writeReg(t,e){16392===t?(this.lcControl=!!(128&e),this.lcLoadValue=127&e,this.lengthCounterEnable=!this.lcControl):16394===t?(this.progTimerMax&=1792,this.progTimerMax|=e):16395===t&&(this.progTimerMax&=255,this.progTimerMax|=(7&e)<<8,this.isEnabled&&(this.lengthCounter=this.papu.getLengthMax(248&e)),this.lcHalt=!0),this.updateSampleCondition()}clockProgrammableTimer(t){if(this.progTimerMax>0)for(this.progTimerCount+=t;this.progTimerMax>0&&this.progTimerCount>=this.progTimerMax;)this.progTimerCount-=this.progTimerMax,this.isEnabled&&this.lengthCounter>0&&this.linearCounter>0&&this.clockTriangleGenerator()}clockTriangleGenerator(){this.triangleCounter++,this.triangleCounter&=31}setEnabled(t){this.isEnabled=t,t||(this.lengthCounter=0),this.updateSampleCondition()}updateSampleCondition(){this.sampleCondition=this.isEnabled&&this.progTimerMax>7&&this.linearCounter>0&&this.lengthCounter>0}toJSON(){return r(this)}fromJSON(t){i(this,t)}static JSON_PROPERTIES=["isEnabled","sampleCondition","lengthCounterEnable","lcHalt","lcControl","progTimerCount","progTimerMax","triangleCounter","lengthCounter","linearCounter","lcLoadValue","sampleValue","tmp"]},G=[7457,14913,22371,29828,29829],I=[7457,14913,22371,29829,37281];const L=class{constructor(t){this.nes=t,this.square1=new V(this,!0),this.square2=new V(this,!1),this.triangle=new P(this),this.noise=new w(this),this.dmc=new N(this),this.startedPlaying=!1,this.recordOutput=!1,this.triValue=0,this.prevSampleL=0,this.prevSampleR=0,this.smpAccumL=0,this.smpAccumR=0,this.dacRange=0,this.dcValue=0,this.masterVolume=256,this.panning=[80,170,100,150,128],this.setPanning(this.panning),this.initLengthLookup(),this.initDmcFrequencyLookup(),this.initNoiseWavelengthLookup(),this.initDACtables();for(let t=0;t<20;t++)16===t?this.writeReg(16400,16):this.writeReg(16384+t,0);this.sampleRate=this.nes.opts.sampleRate,this.sampleTimerMax=Math.floor(1832727040/this.sampleRate),this.sampleTimer=0,this.updateChannelEnable(0),this.frameCycleCounter=0,this.frameStep=0,this.countSequence=0,this.sampleCount=0,this.frameIrqEnabled=!1,this.frameIrqActive=!1,this.frameIrqClearPending=!1,this.apuCycleParity=0,this.accCount=0,this.smpSquare1=0,this.smpSquare2=0,this.smpTriangle=0,this.smpDmc=0,this.channelEnableValue=255,this.extraCycles=0,this.maxSample=-5e5,this.minSample=5e5}readReg(t){let e=0;return e|=this.square1.getLengthStatus(),e|=this.square2.getLengthStatus()<<1,e|=this.triangle.getLengthStatus()<<2,e|=this.noise.getLengthStatus()<<3,e|=this.dmc.getLengthStatus()<<4,e|=32&this.nes.cpu.dataBus,e|=(this.frameIrqActive?1:0)<<6,e|=this.dmc.getIrqStatus()<<7,this.frameIrqActive&&(this.frameIrqClearPending=!0),255&e}writeReg(t,e){if(t>=16384&&t<16388)this.square1.writeReg(t,e);else if(t>=16388&&t<16392)this.square2.writeReg(t,e);else if(t>=16392&&t<16396)this.triangle.writeReg(t,e);else if(t>=16396&&t<=16399)this.noise.writeReg(t,e);else if(16400===t)this.dmc.writeReg(t,e);else if(16401===t)this.dmc.writeReg(t,e);else if(16402===t)this.dmc.writeReg(t,e);else if(16403===t)this.dmc.writeReg(t,e);else if(16405===t)this.updateChannelEnable(e),this.dmc.writeReg(t,e);else if(16407===t){this.countSequence=e>>7&1;let t=this.nes.cpu,s=t.instrBusCycles+1-t.apuCatchupCycles,i=this.apuCycleParity+s&1;this.frameCycleCounter=-7+i,this.frameStep=0,64&e?(this.frameIrqEnabled=!1,this.frameIrqActive=!1,this.frameIrqClearPending=!1):this.frameIrqEnabled=!0,1===this.countSequence&&(this.clockQuarterFrame(),this.clockHalfFrame())}}updateChannelEnable(t){this.channelEnableValue=65535&t,this.square1.setEnabled(!!(1&t)),this.square2.setEnabled(!!(2&t)),this.triangle.setEnabled(!!(4&t)),this.noise.setEnabled(!!(8&t)),this.dmc.setEnabled(!!(16&t))}clockFrameCounter(t,e){let s=t-(e||0);this.processFrameIrqClear(s),this.apuCycleParity=this.apuCycleParity+s&1,t+=this.extraCycles;let i=this.sampleTimerMax-this.sampleTimer;t<<10>i?(this.extraCycles=(t<<10)-i>>10,t-=this.extraCycles):this.extraCycles=0;let r=this.dmc,h=this.triangle,a=this.square1,n=this.square2,o=this.noise;if(r.isEnabled)for(r.shiftCounter-=t<<3;r.shiftCounter<=0&&r.dmaFrequency>0;)r.shiftCounter+=r.dmaFrequency,r.clockDmc();if(h.progTimerMax>0)for(h.progTimerCount-=t;h.progTimerCount<=0;)h.progTimerCount+=h.progTimerMax+1,h.linearCounter>0&&h.lengthCounter>0&&(h.triangleCounter++,h.triangleCounter&=31,h.isEnabled&&(h.triangleCounter>=16?h.sampleValue=15&h.triangleCounter:h.sampleValue=15-(15&h.triangleCounter),h.sampleValue<<=4));a.progTimerCount-=t,a.progTimerCount<=0&&(a.progTimerCount+=a.progTimerMax+1<<1,a.squareCounter++,a.squareCounter&=7,a.updateSampleValue()),n.progTimerCount-=t,n.progTimerCount<=0&&(n.progTimerCount+=n.progTimerMax+1<<1,n.squareCounter++,n.squareCounter&=7,n.updateSampleValue());let l=t;if(o.progTimerCount-l>0)o.progTimerCount-=l,o.accCount+=l,o.accValue+=l*o.sampleValue;else for(;l-- >0;)--o.progTimerCount<=0&&o.progTimerMax>0&&(o.shiftReg<<=1,o.tmp=32768&(o.shiftReg<<(0===o.randomMode?1:6)^o.shiftReg),0!==o.tmp?(o.shiftReg|=1,o.randomBit=0,o.sampleValue=0):(o.randomBit=1,o.isEnabled&&o.lengthCounter>0?o.sampleValue=o.masterVolume:o.sampleValue=0),o.progTimerCount+=o.progTimerMax),o.accValue+=o.sampleValue,o.accCount++;this.frameIrqEnabled&&this.frameIrqActive&&this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL),this._advanceFrameSteps(s),this.accSample(t),this.sampleTimer+=t<<10,this.sampleTimer>=this.sampleTimerMax&&(this.sample(),this.sampleTimer-=this.sampleTimerMax)}processFrameIrqClear(t){if(!this.frameIrqClearPending||t<=0)return;t>=(1&this.apuCycleParity?2:1)&&(this.frameIrqActive=!1,this.frameIrqClearPending=!1)}advanceFrameCounter(t){this.processFrameIrqClear(t),this.apuCycleParity=this.apuCycleParity+t&1,this._advanceFrameSteps(t)}_advanceFrameSteps(t){this.frameCycleCounter+=t;let e=0===this.countSequence?G:I,s=0===this.countSequence?29830:37282;for(;;)if(this.frameStep<e.length&&this.frameCycleCounter>=e[this.frameStep])this.fireFrameStep(this.frameStep),this.frameStep++;else{if(!(this.frameStep>=e.length&&this.frameCycleCounter>=s))break;this.frameStep=0,this.frameCycleCounter-=s,0===this.countSequence&&(this.frameIrqActive=this.frameIrqEnabled,this.frameIrqClearPending=!1)}}accSample(t){this.triangle.sampleCondition&&(this.triValue=Math.floor((this.triangle.progTimerCount<<4)/(this.triangle.progTimerMax+1)),this.triValue>16&&(this.triValue=16),this.triangle.triangleCounter>=16&&(this.triValue=16-this.triValue),this.triValue+=this.triangle.sampleValue),2===t?(this.smpTriangle+=this.triValue<<1,this.smpDmc+=this.dmc.sample<<1,this.smpSquare1+=this.square1.sampleValue<<1,this.smpSquare2+=this.square2.sampleValue<<1,this.accCount+=2):4===t?(this.smpTriangle+=this.triValue<<2,this.smpDmc+=this.dmc.sample<<2,this.smpSquare1+=this.square1.sampleValue<<2,this.smpSquare2+=this.square2.sampleValue<<2,this.accCount+=4):(this.smpTriangle+=t*this.triValue,this.smpDmc+=t*this.dmc.sample,this.smpSquare1+=t*this.square1.sampleValue,this.smpSquare2+=t*this.square2.sampleValue,this.accCount+=t)}fireFrameStep(t){if(0===this.countSequence)switch(t){case 0:case 2:this.clockQuarterFrame();break;case 1:this.clockQuarterFrame(),this.clockHalfFrame();break;case 3:this.frameIrqActive=!0,this.frameIrqClearPending=!1;break;case 4:this.clockQuarterFrame(),this.clockHalfFrame(),this.frameIrqActive=!0,this.frameIrqClearPending=!1}else switch(t){case 0:case 2:this.clockQuarterFrame();break;case 1:case 4:this.clockQuarterFrame(),this.clockHalfFrame()}}clockQuarterFrame(){this.square1.clockEnvDecay(),this.square2.clockEnvDecay(),this.noise.clockEnvDecay(),this.triangle.clockLinearCounter()}clockHalfFrame(){this.triangle.clockLengthCounter(),this.square1.clockLengthCounter(),this.square2.clockLengthCounter(),this.noise.clockLengthCounter(),this.square1.clockSweep(),this.square2.clockSweep()}sample(){let t,e;this.accCount>0?(this.smpSquare1<<=4,this.smpSquare1=Math.floor(this.smpSquare1/this.accCount),this.smpSquare2<<=4,this.smpSquare2=Math.floor(this.smpSquare2/this.accCount),this.smpTriangle=Math.floor(this.smpTriangle/this.accCount),this.smpDmc<<=4,this.smpDmc=Math.floor(this.smpDmc/this.accCount),this.accCount=0):(this.smpSquare1=this.square1.sampleValue<<4,this.smpSquare2=this.square2.sampleValue<<4,this.smpTriangle=this.triangle.sampleValue,this.smpDmc=this.dmc.sample<<4);let s=Math.floor((this.noise.accValue<<4)/this.noise.accCount);this.noise.accValue=s>>4,this.noise.accCount=1,t=this.smpSquare1*this.stereoPosLSquare1+this.smpSquare2*this.stereoPosLSquare2>>8,e=3*this.smpTriangle*this.stereoPosLTriangle+(s<<1)*this.stereoPosLNoise+this.smpDmc*this.stereoPosLDMC>>8,t>=this.square_table.length&&(t=this.square_table.length-1),e>=this.tnd_table.length&&(e=this.tnd_table.length-1);let i=this.square_table[t]+this.tnd_table[e]-this.dcValue;t=this.smpSquare1*this.stereoPosRSquare1+this.smpSquare2*this.stereoPosRSquare2>>8,e=3*this.smpTriangle*this.stereoPosRTriangle+(s<<1)*this.stereoPosRNoise+this.smpDmc*this.stereoPosRDMC>>8,t>=this.square_table.length&&(t=this.square_table.length-1),e>=this.tnd_table.length&&(e=this.tnd_table.length-1);let r=this.square_table[t]+this.tnd_table[e]-this.dcValue,h=i-this.prevSampleL;this.prevSampleL+=h,this.smpAccumL+=h-(this.smpAccumL>>10),i=this.smpAccumL;let a=r-this.prevSampleR;this.prevSampleR+=a,this.smpAccumR+=a-(this.smpAccumR>>10),r=this.smpAccumR,i>this.maxSample&&(this.maxSample=i),i<this.minSample&&(this.minSample=i),this.nes.opts.onAudioSample&&this.nes.opts.onAudioSample(i/32768,r/32768),this.smpSquare1=0,this.smpSquare2=0,this.smpTriangle=0,this.smpDmc=0}getLengthMax(t){return this.lengthLookup[t>>3]}getDmcFrequency(t){return t>=0&&t<16?this.dmcFreqLookup[t]:0}getNoiseWaveLength(t){return t>=0&&t<16?this.noiseWavelengthLookup[t]:0}setFrameRate(t){this.sampleTimerMax=Math.floor(1832727040*t/(60*this.sampleRate))}setPanning(t){for(let e=0;e<5;e++)this.panning[e]=t[e];this.updateStereoPos()}setMasterVolume(t){t<0&&(t=0),t>256&&(t=256),this.masterVolume=t,this.updateStereoPos()}updateStereoPos(){this.stereoPosLSquare1=this.panning[0]*this.masterVolume>>8,this.stereoPosLSquare2=this.panning[1]*this.masterVolume>>8,this.stereoPosLTriangle=this.panning[2]*this.masterVolume>>8,this.stereoPosLNoise=this.panning[3]*this.masterVolume>>8,this.stereoPosLDMC=this.panning[4]*this.masterVolume>>8,this.stereoPosRSquare1=this.masterVolume-this.stereoPosLSquare1,this.stereoPosRSquare2=this.masterVolume-this.stereoPosLSquare2,this.stereoPosRTriangle=this.masterVolume-this.stereoPosLTriangle,this.stereoPosRNoise=this.masterVolume-this.stereoPosLNoise,this.stereoPosRDMC=this.masterVolume-this.stereoPosLDMC}initLengthLookup(){this.lengthLookup=[10,254,20,2,40,4,80,6,160,8,60,10,14,12,26,14,12,16,24,18,48,20,96,22,192,24,72,26,16,28,32,30]}initDmcFrequencyLookup(){this.dmcFreqLookup=new Array(16),this.dmcFreqLookup[0]=3424,this.dmcFreqLookup[1]=3040,this.dmcFreqLookup[2]=2720,this.dmcFreqLookup[3]=2560,this.dmcFreqLookup[4]=2288,this.dmcFreqLookup[5]=2032,this.dmcFreqLookup[6]=1808,this.dmcFreqLookup[7]=1712,this.dmcFreqLookup[8]=1520,this.dmcFreqLookup[9]=1280,this.dmcFreqLookup[10]=1136,this.dmcFreqLookup[11]=1024,this.dmcFreqLookup[12]=848,this.dmcFreqLookup[13]=672,this.dmcFreqLookup[14]=576,this.dmcFreqLookup[15]=432}initNoiseWavelengthLookup(){this.noiseWavelengthLookup=new Array(16),this.noiseWavelengthLookup[0]=4,this.noiseWavelengthLookup[1]=8,this.noiseWavelengthLookup[2]=16,this.noiseWavelengthLookup[3]=32,this.noiseWavelengthLookup[4]=64,this.noiseWavelengthLookup[5]=96,this.noiseWavelengthLookup[6]=128,this.noiseWavelengthLookup[7]=160,this.noiseWavelengthLookup[8]=202,this.noiseWavelengthLookup[9]=254,this.noiseWavelengthLookup[10]=380,this.noiseWavelengthLookup[11]=508,this.noiseWavelengthLookup[12]=762,this.noiseWavelengthLookup[13]=1016,this.noiseWavelengthLookup[14]=2034,this.noiseWavelengthLookup[15]=4068}initDACtables(){let t,e,s,i=0,r=0;for(this.square_table=new Array(512),this.tnd_table=new Array(3264),s=0;s<512;s++)t=95.52/(8128/(s/16)+100),t*=.98411,t*=5e4,e=Math.floor(t),this.square_table[s]=e,e>i&&(i=e);for(s=0;s<3264;s++)t=163.67/(24329/(s/16)+100),t*=.98411,t*=5e4,e=Math.floor(t),this.tnd_table[s]=e,e>r&&(r=e);this.dacRange=i+r,this.dcValue=this.dacRange/2}toJSON(){let t=r(this);return t.dmc=this.dmc.toJSON(),t.noise=this.noise.toJSON(),t.square1=this.square1.toJSON(),t.square2=this.square2.toJSON(),t.triangle=this.triangle.toJSON(),t}fromJSON(t){i(this,t),this.dmc.fromJSON(t.dmc),this.noise.fromJSON(t.noise),this.square1.fromJSON(t.square1),this.square2.fromJSON(t.square2),this.triangle.fromJSON(t.triangle)}static JSON_PROPERTIES=["channelEnableValue","sampleRate","frameIrqEnabled","frameIrqActive","frameIrqClearPending","apuCycleParity","startedPlaying","recordOutput","frameCycleCounter","frameStep","countSequence","sampleTimer","sampleTimerMax","sampleCount","triValue","smpSquare1","smpSquare2","smpTriangle","smpDmc","accCount","prevSampleL","prevSampleR","smpAccumL","smpAccumR","masterVolume","stereoPosLSquare1","stereoPosLSquare2","stereoPosLTriangle","stereoPosLNoise","stereoPosLDMC","stereoPosRSquare1","stereoPosRSquare2","stereoPosRTriangle","stereoPosRNoise","stereoPosRDMC","extraCycles","maxSample","minSample","panning"]},z="APZLGITYEOXUKSVN";function q(t){return z.indexOf(t)}function D(t){return z[t]}function U(t,e){const s=t.toString(16);return"0000".substring(0,e-s.length)+s}const x=class{constructor(){this.patches=[],this.enabled=!0,this.onChange=null}setEnabled(t){this.enabled=t,this.onChange&&this.onChange()}addCode(t){const e=this.decode(t);if(!e)throw new Error(`Invalid Game Genie code: ${t}`);this.patches.push(e),this.onChange&&this.onChange()}addPatch(t,e,s){this.patches.push({addr:t,value:e,key:s}),this.onChange&&this.onChange()}removeAllCodes(){this.patches=[],this.onChange&&this.onChange()}applyCodes(t,e){if(!this.enabled)return e;for(let s=0;s<this.patches.length;++s)if(this.patches[s].addr===(32767&t)&&(void 0===this.patches[s].key||this.patches[s].key===e))return this.patches[s].value;return e}decode(t){if(t.includes(":"))return this.decodeHex(t);const e=t.toUpperCase().split("").map(q);let s=((8&e[0])<<4)+((7&e[1])<<4)+(7&e[0]);const i=((7&e[3])<<12)+((8&e[4])<<8)+((7&e[5])<<8)+((8&e[1])<<4)+((7&e[2])<<4)+(8&e[3])+(7&e[4]);let r;8===e.length?(s+=8&e[7],r=((8&e[6])<<4)+((7&e[7])<<4)+(8&e[5])+(7&e[6])):s+=8&e[5];return{value:s,addr:i,wantskey:!!(e[2]>>3),key:r}}encodeHex(t,e,s,i){let r=U(t,4)+":"+U(e,2);return(void 0!==s||i)&&(r+="?"),void 0!==s&&(r+=U(s,2)),r}decodeHex(t){const e=t.match(/([0-9a-fA-F]+):([0-9a-fA-F]+)(\?[0-9a-fA-F]*)?/);if(!e)return null;const s=parseInt(e[1],16);return{value:parseInt(e[2],16),addr:s,wantskey:void 0!==e[3],key:void 0!==e[3]&&e[3].length>1?parseInt(e[3].substring(1),16):void 0}}encode(t,e,s,i){const r=Array(6);r[0]=(7&e)+(e>>4&8),r[1]=(e>>4&7)+(t>>4&8),r[2]=t>>4&7,r[3]=(t>>12)+(8&t),r[4]=(7&t)+(t>>8&8),r[5]=t>>8&7,void 0===s?(r[5]+=8&e,i&&(r[2]+=8)):(r[2]+=8,r[5]+=8&s,r[6]=(7&s)+(s>>4&8),r[7]=(s>>4&7)+(8&e));return r.map(D).join("")}};const W=class{static mapperName="NROM";constructor(t){this.nes=t,this.joy1StrobeState=0,this.joy2StrobeState=0,this.joypadLastWrite=0,this.joypadOutputBit0=0,this.joypadLastWriteCycle=-2,this.zapperFired=!1,this.zapperX=null,this.zapperY=null,this.bgTileOverride=!1}write(t,e){t<8192?this.nes.cpu.mem[2047&t]=e:t>=32768||(t>=24576?(this.nes.cpu.mem[t]=e,this.nes.opts.onBatteryRamWrite(t,e)):t>16407?this.nes.cpu.mem[t]=e:t>8199&&t<16384?this.regWrite(8192+(7&t),e):this.regWrite(t,e))}writelow(t,e){t<8192?this.nes.cpu.mem[2047&t]=e:t>=32768||(t>16407?this.nes.cpu.mem[t]=e:t>8199&&t<16384?this.regWrite(8192+(7&t),e):this.regWrite(t,e))}load(t){return(t&=65535)>16407?t<24576?this.nes.cpu.dataBus:this.nes.cpu.mem[t]:t>=8192?this.regLoad(t):this.nes.cpu.mem[2047&t]}regLoad(t){switch(t>>12){case 0:case 1:break;case 2:case 3:switch(7&t){case 0:case 1:case 3:case 5:case 6:return this.nes.ppu.openBusLatch;case 2:return this.nes.ppu.readStatusRegister();case 4:return this.nes.ppu.sramLoad();case 7:return this.nes.ppu.vramLoad()}break;case 4:switch(t-16405){case 0:return this.nes.papu.readReg(t);case 1:return 31&this.joy1Read()|224&this.nes.cpu.dataBus;case 2:{let t=0;return null!==this.zapperX&&null!==this.zapperY&&(this.nes.ppu.isPixelWhite(this.zapperX,this.zapperY)||(t=8)),this.zapperFired&&(t|=16),31&(this.joy2Read()|t)|224&this.nes.cpu.dataBus}}}let e=this.nes.cpu;if(e._dmcFetchCycles>0&&e._dmcFetchCycles===e.instrBusCycles+1){let t=this.nes.papu.dmc;if(t&&t.isEnabled)return t.lastFetchedByte}return e.dataBus}regWrite(t,e){switch(t>=8192&&t<=16383&&(this.nes.ppu.openBusLatch=e,this.nes.ppu.openBusDecayFrames=36),t){case 8192:this.nes.cpu.mem[t]=e,this.nes.ppu.updateControlReg1(e);break;case 8193:this.nes.cpu.mem[t]=e,this.nes.ppu.updateControlReg2(e);break;case 8195:this.nes.ppu.writeSRAMAddress(e);break;case 8196:this.nes.ppu.sramWrite(e);break;case 8197:this.nes.ppu.scrollWrite(e);break;case 8198:this.nes.ppu.writeVRAMAddress(e);break;case 8199:this.nes.ppu.vramWrite(e);break;case 16404:this.nes.ppu.sramDMA(e);break;case 16405:case 16407:this.nes.papu.writeReg(t,e);break;case 16406:{let t=this.nes.cpu,s=t._cpuCycleBase+t.instrBusCycles;if(s-this.joypadLastWriteCycle>1){let t=1&this.joypadLastWrite;t!==this.joypadOutputBit0&&(1===this.joypadOutputBit0&&0===t&&(this.joy1StrobeState=0,this.joy2StrobeState=0),this.joypadOutputBit0=t)}if(this.joypadLastWrite=e,this.joypadLastWriteCycle=s,s%2==1){let t=1&e;1===this.joypadOutputBit0&&0===t&&(this.joy1StrobeState=0,this.joy2StrobeState=0),this.joypadOutputBit0=t}break}default:t>=16384&&t<=16407&&this.nes.papu.writeReg(t,e)}}_syncJoypadOutput(){let t=1&this.joypadLastWrite;t!==this.joypadOutputBit0&&(1===this.joypadOutputBit0&&0===t&&(this.joy1StrobeState=0,this.joy2StrobeState=0),this.joypadOutputBit0=t)}joy1Read(){if(this._syncJoypadOutput(),this.joypadOutputBit0)return this.nes.controllers[1].state[0];let t;return t=this.joy1StrobeState<8?this.nes.controllers[1].state[this.joy1StrobeState]:1,this.joy1StrobeState++,24===this.joy1StrobeState&&(this.joy1StrobeState=0),t}joy2Read(){if(this._syncJoypadOutput(),this.joypadOutputBit0)return this.nes.controllers[2].state[0];let t;return t=this.joy2StrobeState<8?this.nes.controllers[2].state[this.joy2StrobeState]:1,this.joy2StrobeState++,24===this.joy2StrobeState&&(this.joy2StrobeState=0),t}loadROM(){if(!this.nes.rom.valid||this.nes.rom.romCount<1)throw new Error("NoMapper: Invalid ROM! Unable to load.");this.loadPRGROM(),this.loadCHRROM(),this.loadBatteryRam(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}loadPRGROM(){this.nes.rom.romCount>1?(this.loadRomBank(0,32768),this.loadRomBank(1,49152)):(this.loadRomBank(0,32768),this.loadRomBank(0,49152))}loadCHRROM(){this.nes.rom.vromCount>0&&(1===this.nes.rom.vromCount?(this.loadVromBank(0,0),this.loadVromBank(0,4096)):(this.loadVromBank(0,0),this.loadVromBank(1,4096)))}loadBatteryRam(){if(this.nes.rom.batteryRam){let t=this.nes.rom.batteryRam;null!==t&&8192===t.length&&s(t,0,this.nes.cpu.mem,24576,8192)}}loadRomBank(t,e){t%=this.nes.rom.romCount,s(this.nes.rom.rom[t],0,this.nes.cpu.mem,e,16384)}loadVromBank(t,e){if(0===this.nes.rom.vromCount)return;this.nes.ppu.triggerRendering(),s(this.nes.rom.vrom[t%this.nes.rom.vromCount],0,this.nes.ppu.vramMem,e,4096),s(this.nes.rom.vromTile[t%this.nes.rom.vromCount],0,this.nes.ppu.ptTile,e>>4,256)}load32kRomBank(t,e){this.loadRomBank(2*t%this.nes.rom.romCount,e),this.loadRomBank((2*t+1)%this.nes.rom.romCount,e+16384)}load8kVromBank(t,e){0!==this.nes.rom.vromCount&&(this.nes.ppu.triggerRendering(),this.loadVromBank(t%this.nes.rom.vromCount,e),this.loadVromBank((t+1)%this.nes.rom.vromCount,e+4096))}load1kVromBank(t,e){if(0===this.nes.rom.vromCount)return;this.nes.ppu.triggerRendering();let i=Math.floor(t/4)%this.nes.rom.vromCount,r=t%4*1024;s(this.nes.rom.vrom[i],r,this.nes.ppu.vramMem,e,1024);let h=this.nes.rom.vromTile[i],a=e>>4;for(let e=0;e<64;e++)this.nes.ppu.ptTile[a+e]=h[(t%4<<6)+e]}load2kVromBank(t,e){if(0===this.nes.rom.vromCount)return;this.nes.ppu.triggerRendering();let i=Math.floor(t/2)%this.nes.rom.vromCount,r=t%2*2048;s(this.nes.rom.vrom[i],r,this.nes.ppu.vramMem,e,2048);let h=this.nes.rom.vromTile[i],a=e>>4;for(let e=0;e<128;e++)this.nes.ppu.ptTile[a+e]=h[(t%2<<7)+e]}load8kRomBank(t,e){let i=Math.floor(t/2)%this.nes.rom.romCount,r=t%2*8192;s(this.nes.rom.rom[i],r,this.nes.cpu.mem,e,8192)}canWriteChr(t){return 0===this.nes.rom.vromCount}clockIrqCounter(){}latchAccess(t){}onBgRender(){}onSpriteRender(){}getBgTileData(){return null}getSpritePatternTile(t){return this.nes.ppu.ptTile[t]}toJSON(){return{joy1StrobeState:this.joy1StrobeState,joy2StrobeState:this.joy2StrobeState,joypadLastWrite:this.joypadLastWrite,joypadOutputBit0:this.joypadOutputBit0,joypadLastWriteCycle:this.joypadLastWriteCycle}}fromJSON(t){this.joy1StrobeState=t.joy1StrobeState,this.joy2StrobeState=t.joy2StrobeState,this.joypadLastWrite=t.joypadLastWrite,this.joypadOutputBit0=t.joypadOutputBit0||0,this.joypadLastWriteCycle=t.joypadLastWriteCycle??-2}};const H=class extends W{static mapperName="MMC1";constructor(t){super(t),this.regBuffer=0,this.regBufferCounter=0,this.mirroring=0,this.oneScreenMirroring=0,this.prgSwitchingArea=1,this.prgSwitchingSize=1,this.vromSwitchingSize=0,this.romSelectionReg0=0,this.romSelectionReg1=0,this.romBankSelect=0}write(t,e){t<32768?super.write(t,e):128&e?(this.regBufferCounter=0,this.regBuffer=0,0===this.getRegNumber(t)&&(this.prgSwitchingArea=1,this.prgSwitchingSize=1)):(this.regBuffer=this.regBuffer&255-(1<<this.regBufferCounter)|(1&e)<<this.regBufferCounter,this.regBufferCounter++,5===this.regBufferCounter&&(this.setReg(this.getRegNumber(t),this.regBuffer),this.regBuffer=0,this.regBufferCounter=0))}setReg(t,e){let s;switch(t){case 0:s=3&e,s!==this.mirroring&&(this.mirroring=s,2&this.mirroring?1&this.mirroring?this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING):this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING):this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING)),this.prgSwitchingArea=e>>2&1,this.prgSwitchingSize=e>>3&1,this.vromSwitchingSize=e>>4&1;break;case 1:this.romSelectionReg0=e>>4&1,this.nes.rom.vromCount>0&&(0===this.vromSwitchingSize?0===this.romSelectionReg0?this.load8kVromBank(15&e,0):this.load8kVromBank(Math.floor(this.nes.rom.vromCount/2)+(15&e),0):0===this.romSelectionReg0?this.loadVromBank(15&e,0):this.loadVromBank(Math.floor(this.nes.rom.vromCount/2)+(15&e),0));break;case 2:this.romSelectionReg1=e>>4&1,this.nes.rom.vromCount>0&&1===this.vromSwitchingSize&&(0===this.romSelectionReg1?this.loadVromBank(15&e,4096):this.loadVromBank(Math.floor(this.nes.rom.vromCount/2)+(15&e),4096));break;default:{let t,s=0;this.nes.rom.romCount>=32?0===this.vromSwitchingSize?1===this.romSelectionReg0&&(s=16):s=(this.romSelectionReg0|this.romSelectionReg1<<1)<<3:this.nes.rom.romCount>=16&&1===this.romSelectionReg0&&(s=8),0===this.prgSwitchingSize?(t=s+(15&e),this.load32kRomBank(t,32768)):(t=2*s+(15&e),0===this.prgSwitchingArea?this.loadRomBank(t,49152):this.loadRomBank(t,32768))}}}getRegNumber(t){return t>=32768&&t<=40959?0:t>=40960&&t<=49151?1:t>=49152&&t<=57343?2:3}loadROM(){if(!this.nes.rom.valid)throw new Error("MMC1: Invalid ROM! Unable to load.");this.loadRomBank(0,32768),this.loadRomBank(this.nes.rom.romCount-1,49152),this.loadCHRROM(),this.loadBatteryRam(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}switchLowHighPrgRom(t){}switch16to32(){}switch32to16(){}toJSON(){let t=super.toJSON();return t.mirroring=this.mirroring,t.oneScreenMirroring=this.oneScreenMirroring,t.prgSwitchingArea=this.prgSwitchingArea,t.prgSwitchingSize=this.prgSwitchingSize,t.vromSwitchingSize=this.vromSwitchingSize,t.romSelectionReg0=this.romSelectionReg0,t.romSelectionReg1=this.romSelectionReg1,t.romBankSelect=this.romBankSelect,t.regBuffer=this.regBuffer,t.regBufferCounter=this.regBufferCounter,t}fromJSON(t){super.fromJSON(t),this.mirroring=t.mirroring,this.oneScreenMirroring=t.oneScreenMirroring,this.prgSwitchingArea=t.prgSwitchingArea,this.prgSwitchingSize=t.prgSwitchingSize,this.vromSwitchingSize=t.vromSwitchingSize,this.romSelectionReg0=t.romSelectionReg0,this.romSelectionReg1=t.romSelectionReg1,this.romBankSelect=t.romBankSelect,this.regBuffer=t.regBuffer,this.regBufferCounter=t.regBufferCounter}};const J=class extends W{static mapperName="UxROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.loadRomBank(e,32768)}loadROM(){if(!this.nes.rom.valid)throw new Error("UNROM: Invalid ROM! Unable to load.");this.loadRomBank(0,32768),this.loadRomBank(this.nes.rom.romCount-1,49152),this.loadCHRROM(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}};const Y=class extends W{static mapperName="CNROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.load8kVromBank(2*e,0)}};class X extends W{static mapperName="MMC3";static CMD_SEL_2_1K_VROM_0000=0;static CMD_SEL_2_1K_VROM_0800=1;static CMD_SEL_1K_VROM_1000=2;static CMD_SEL_1K_VROM_1400=3;static CMD_SEL_1K_VROM_1800=4;static CMD_SEL_1K_VROM_1C00=5;static CMD_SEL_ROM_PAGE1=6;static CMD_SEL_ROM_PAGE2=7;constructor(t){super(t),this.command=0,this.prgAddressSelect=0,this.chrAddressSelect=0,this.pageNumber=0,this.irqCounter=0,this.irqLatchValue=0,this.irqEnable=0,this.prgAddressChanged=!1}write(t,e){if(t<32768)super.write(t,e);else switch(57345&t){case 32768:{this.command=7&e;const t=e>>6&1;t!==this.prgAddressSelect&&(this.prgAddressChanged=!0),this.prgAddressSelect=t,this.chrAddressSelect=e>>7&1;break}case 32769:this.executeCommand(this.command,e);break;case 40960:1&e?this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING):this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);break;case 40961:break;case 49152:this.irqCounter=e;break;case 49153:this.irqLatchValue=e;break;case 57344:this.irqEnable=0;break;case 57345:this.irqEnable=1}}executeCommand(t,e){switch(t){case X.CMD_SEL_2_1K_VROM_0000:0===this.chrAddressSelect?(this.load1kVromBank(e,0),this.load1kVromBank(e+1,1024)):(this.load1kVromBank(e,4096),this.load1kVromBank(e+1,5120));break;case X.CMD_SEL_2_1K_VROM_0800:0===this.chrAddressSelect?(this.load1kVromBank(e,2048),this.load1kVromBank(e+1,3072)):(this.load1kVromBank(e,6144),this.load1kVromBank(e+1,7168));break;case X.CMD_SEL_1K_VROM_1000:0===this.chrAddressSelect?this.load1kVromBank(e,4096):this.load1kVromBank(e,0);break;case X.CMD_SEL_1K_VROM_1400:0===this.chrAddressSelect?this.load1kVromBank(e,5120):this.load1kVromBank(e,1024);break;case X.CMD_SEL_1K_VROM_1800:0===this.chrAddressSelect?this.load1kVromBank(e,6144):this.load1kVromBank(e,2048);break;case X.CMD_SEL_1K_VROM_1C00:0===this.chrAddressSelect?this.load1kVromBank(e,7168):this.load1kVromBank(e,3072);break;case X.CMD_SEL_ROM_PAGE1:this.prgAddressChanged&&(0===this.prgAddressSelect?this.load8kRomBank(2*(this.nes.rom.romCount-1),49152):this.load8kRomBank(2*(this.nes.rom.romCount-1),32768),this.prgAddressChanged=!1),0===this.prgAddressSelect?this.load8kRomBank(e,32768):this.load8kRomBank(e,49152);break;case X.CMD_SEL_ROM_PAGE2:this.load8kRomBank(e,40960),this.prgAddressChanged&&(0===this.prgAddressSelect?this.load8kRomBank(2*(this.nes.rom.romCount-1),49152):this.load8kRomBank(2*(this.nes.rom.romCount-1),32768),this.prgAddressChanged=!1)}}loadROM(){if(!this.nes.rom.valid)throw new Error("MMC3: Invalid ROM! Unable to load.");this.load8kRomBank(2*(this.nes.rom.romCount-1),49152),this.load8kRomBank(2*(this.nes.rom.romCount-1)+1,57344),this.load8kRomBank(0,32768),this.load8kRomBank(1,40960),this.loadCHRROM(),this.loadBatteryRam(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}clockIrqCounter(){1===this.irqEnable&&(this.irqCounter--,this.irqCounter<0&&(this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL),this.irqCounter=this.irqLatchValue))}toJSON(){let t=super.toJSON();return t.command=this.command,t.prgAddressSelect=this.prgAddressSelect,t.chrAddressSelect=this.chrAddressSelect,t.pageNumber=this.pageNumber,t.irqCounter=this.irqCounter,t.irqLatchValue=this.irqLatchValue,t.irqEnable=this.irqEnable,t.prgAddressChanged=this.prgAddressChanged,t}fromJSON(t){super.fromJSON(t),this.command=t.command,this.prgAddressSelect=t.prgAddressSelect,this.chrAddressSelect=t.chrAddressSelect,this.pageNumber=t.pageNumber,this.irqCounter=t.irqCounter,this.irqLatchValue=t.irqLatchValue,this.irqEnable=t.irqEnable,this.prgAddressChanged=t.prgAddressChanged}}const j=X;const Z=class extends W{static mapperName="MMC5";constructor(t){super(t),this.prgMode=3,this.prgBankReg=new Uint8Array(5),this.prgBankReg[4]=255,this.prgRam=new Uint8Array(65536),this.prgRamProtectA=3,this.prgRamProtectB=3,this.chrMode=3,this.chrBankA=new Uint16Array(8),this.chrBankB=new Uint16Array(4),this.chrUpperBits=0,this.lastChrWrite=0,this.ntMapping=new Uint8Array(4),this.exramMode=0,this.exram=new Uint8Array(1024),this.fillTile=0,this.fillAttr=0,this.irqTarget=0,this.irqEnabled=!1,this.irqPending=!1,this.inFrame=!1,this.irqCounter=0,this.multA=0,this.multB=0,this.splitEnabled=!1,this.splitRight=!1,this.splitTile=0,this.splitScroll=0,this.splitPage=0,this.pulse1=this._initPulse(),this.pulse2=this._initPulse(),this.pcmValue=0,this.pcmReadMode=!1,this.pcmIrqEnabled=!1,this.audioEnabled=0,this._chrBankTarget=-1}_initPulse(){return{enabled:!1,dutyCycle:0,lengthHalt:!1,constantVolume:!1,volume:0,timer:0,timerCounter:0,lengthCounter:0,envelopeCounter:0,envelopeDecay:15,envelopeStart:!1,sequencePos:0}}load(t){if((t&=65535)<20480)return super.load(t);if(20501===t){let t=0;return this.pulse1.lengthCounter>0&&(t|=1),this.pulse2.lengthCounter>0&&(t|=2),t}if(20496===t)return 0;if(t>=20736&&t<=20740)return this.nes.cpu.dataBus;if(20741===t)return this.nes.cpu.dataBus;if(20996===t){let t=this.nes.ppu;t.scanline>=20&&t.scanline<=260&&(1===t.f_bgVisibility||1===t.f_spVisibility)||(this.inFrame=!1);let e=0;return this.irqPending&&(e|=128),this.inFrame&&(e|=64),this.irqPending=!1,e}if(20997===t)return this.multA*this.multB&255;if(20998===t)return this.multA*this.multB>>8&255;if(t>=23552&&t<=24575)return this.exramMode>=2?this.exram[t-23552]:this.nes.cpu.dataBus;if(t<24576)return this.nes.cpu.dataBus;if(t<32768){let e=8192*(7&this.prgBankReg[0])+(t-24576);return this.prgRam[65535&e]}return this._readPrg(t)}_readPrg(t){let e,s,i,r,h;switch(this.prgMode){case 0:return s=this.prgBankReg[4],r=(124&s)>>2,this._readPrgRom32k(r,t-32768);case 1:return t<49152?(s=this.prgBankReg[2],i=!(128&s),i?(r=(6&s)>>1,this.prgRam[16384*r+(t-32768)]):(r=(126&s)>>1,this._readPrgRom16k(r,t-32768))):(s=this.prgBankReg[4],r=(126&s)>>1,this._readPrgRom16k(r,t-49152));case 2:return t<49152?(s=this.prgBankReg[2],i=!(128&s),i?(r=(6&s)>>1,this.prgRam[16384*r+(t-32768)]):(r=(126&s)>>1,this._readPrgRom16k(r,t-32768))):t<57344?(s=this.prgBankReg[3],i=!(128&s),i?(r=7&s,this.prgRam[8192*r+(t-49152)]):(r=127&s,this._readPrgRom8k(r,t-49152))):(s=this.prgBankReg[4],r=127&s,this._readPrgRom8k(r,t-57344));default:return e=t<40960?1:t<49152?2:t<57344?3:4,s=this.prgBankReg[e],h=1===e?32768:2===e?40960:3===e?49152:57344,e<4&&!(128&s)?(r=7&s,this.prgRam[8192*r+(t-h)]):(r=127&s,this._readPrgRom8k(r,t-h))}}_readPrgRom32k(t,e){let s=(2*t+Math.floor(e/16384))%this.nes.rom.romCount,i=e%16384;return this.nes.rom.rom[s][i]}_readPrgRom16k(t,e){return t%=this.nes.rom.romCount,this.nes.rom.rom[t][e]}_readPrgRom8k(t,e){let s=Math.floor(t/2)%this.nes.rom.romCount,i=t%2*8192+e;return s<this.nes.rom.romCount?this.nes.rom.rom[s][i]:0}write(t,e){if(t<20480)super.write(t,e);else if(t>=20480&&t<=20483)this._writePulse(this.pulse1,t-20480,e);else if(t>=20484&&t<=20487)this._writePulse(this.pulse2,t-20484,e);else{if(20496===t)return this.pcmReadMode=!!(1&e),void(this.pcmIrqEnabled=!!(128&e));if(20497!==t){if(20501===t)return this.audioEnabled=3&e,this.pulse1.enabled=!!(1&e),this.pulse2.enabled=!!(2&e),this.pulse1.enabled||(this.pulse1.lengthCounter=0),void(this.pulse2.enabled||(this.pulse2.lengthCounter=0));if(20736===t)return this.prgMode=3&e,void this._syncPrg();if(20737===t)return this.chrMode=3&e,void this._syncChr();if(20738!==t)if(20739!==t){if(20740===t)return this.exramMode=3&e,this.bgTileOverride=1===this.exramMode,void this._syncNametables();if(20741===t){let t=e;return this.ntMapping[0]=3&t,t>>=2,this.ntMapping[1]=3&t,t>>=2,this.ntMapping[2]=3&t,t>>=2,this.ntMapping[3]=3&t,void this._syncNametables()}if(20742===t)return this.fillTile=e,void this._syncNametables();if(20743===t)return this.fillAttr=3&e,void this._syncNametables();if(20755!==t){if(t>=20756&&t<=20759){let s=t-20755;return this.prgBankReg[s]=e,void this._syncPrg()}if(t>=20768&&t<=20775){let s=t-20768;return this.chrBankA[s]=this.chrUpperBits<<8|e,this.lastChrWrite=0,void this._syncChr()}if(t>=20776&&t<=20779){let s=t-20776;return this.chrBankB[s]=this.chrUpperBits<<8|e,this.lastChrWrite=1,void this._syncChr()}if(20784!==t){if(20992===t)return this.splitEnabled=!!(128&e),this.splitRight=!!(64&e),void(this.splitTile=31&e);if(20993!==t)if(20994!==t)if(20995!==t){if(20996===t)return this.irqEnabled=!!(128&e),void(this.irqEnabled&&this.irqPending&&this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL));if(20997!==t)if(20998!==t){if(t>=23552&&t<=24575){let s=t-23552;return void(0===this.exramMode||1===this.exramMode?(this.exram[s]=this.inFrame?e:0,this._syncExramToVram(s)):2===this.exramMode&&(this.exram[s]=e))}if(t>=24576&&t<=32767){if(2===this.prgRamProtectA&&1===this.prgRamProtectB){let s=8192*(7&this.prgBankReg[0])+(t-24576);this.prgRam[65535&s]=e,this.nes.cpu.mem[t]=e,this.nes.opts.onBatteryRamWrite(t,e)}}else t>=32768&&this._writePrg(t,e)}else this.multB=e;else this.multA=e}else this.irqTarget=e;else this.splitPage=63&e;else this.splitScroll=e}else this.chrUpperBits=3&e}else this.prgBankReg[0]=7&e}else this.prgRamProtectB=3&e;else this.prgRamProtectA=3&e}else this.pcmReadMode||0===e||(this.pcmValue=e)}}_writePrg(t,e){let s,i,r,h,a;switch(this.prgMode){case 0:return;case 1:return void(t<49152&&(i=this.prgBankReg[2],r=!(128&i),r&&this._isPrgRamWritable()&&(h=(6&i)>>1,this.prgRam[16384*h+(t-32768)]=e)));case 2:return void(t<49152?(i=this.prgBankReg[2],r=!(128&i),r&&this._isPrgRamWritable()&&(h=(6&i)>>1,this.prgRam[16384*h+(t-32768)]=e)):t<57344&&(i=this.prgBankReg[3],r=!(128&i),r&&this._isPrgRamWritable()&&(h=7&i,this.prgRam[8192*h+(t-49152)]=e)));default:if(t<40960)s=1,a=32768;else if(t<49152)s=2,a=40960;else{if(!(t<57344))return;s=3,a=49152}return i=this.prgBankReg[s],r=!(128&i),void(r&&this._isPrgRamWritable()&&(h=7&i,this.prgRam[8192*h+(t-a)]=e))}}_isPrgRamWritable(){return 2===this.prgRamProtectA&&1===this.prgRamProtectB}_syncPrg(){switch(this.prgMode){case 0:{let t=(124&this.prgBankReg[4])>>2;this.load32kRomBank(t,32768);break}case 1:{let t=this.prgBankReg[2];if(128&t){let e=(126&t)>>1;this.loadRomBank(e%this.nes.rom.romCount,32768)}let e=(126&this.prgBankReg[4])>>1;this.loadRomBank(e%this.nes.rom.romCount,49152);break}case 2:{let t=this.prgBankReg[2];if(128&t){let e=(126&t)>>1;this.loadRomBank(e%this.nes.rom.romCount,32768)}let e=this.prgBankReg[3];128&e&&this.load8kRomBank(127&e,49152);let s=this.prgBankReg[4];this.load8kRomBank(127&s,57344);break}default:for(let t=1;t<=4;t++){let e=this.prgBankReg[t],s=24576+8192*t;(4===t||128&e)&&this.load8kRomBank(127&e,s)}}}_syncChr(){this.nes.ppu.triggerRendering(),this._chrBankTarget=-1,0===this.nes.ppu.f_spriteSize&&(this._applyChrSetA(),this._chrBankTarget=0)}_applyChrSetA(){if(0!==this.nes.rom.vromCount)switch(this.chrMode){case 0:this.load8kVromBank(2*(255&this.chrBankA[7]),0);break;case 1:this.loadVromBank(255&this.chrBankA[3],0),this.loadVromBank(255&this.chrBankA[7],4096);break;case 2:this.load2kVromBank(511&this.chrBankA[1],0),this.load2kVromBank(511&this.chrBankA[3],2048),this.load2kVromBank(511&this.chrBankA[5],4096),this.load2kVromBank(511&this.chrBankA[7],6144);break;default:for(let t=0;t<8;t++)this.load1kVromBank(1023&this.chrBankA[t],1024*t)}}_applyChrSetB(){if(0!==this.nes.rom.vromCount)switch(this.chrMode){case 0:this.load8kVromBank(2*(255&this.chrBankB[3]),0);break;case 1:this.loadVromBank(255&this.chrBankB[3],0),this.loadVromBank(255&this.chrBankB[3],4096);break;case 2:this.load2kVromBank(511&this.chrBankB[1],0),this.load2kVromBank(511&this.chrBankB[3],2048),this.load2kVromBank(511&this.chrBankB[1],4096),this.load2kVromBank(511&this.chrBankB[3],6144);break;default:for(let t=0;t<4;t++)this.load1kVromBank(1023&this.chrBankB[t],1024*t),this.load1kVromBank(1023&this.chrBankB[t],1024*(t+4))}}_syncNametables(){let t=this.nes.ppu,e=this.fillAttr|this.fillAttr<<2|this.fillAttr<<4|this.fillAttr<<6;for(let e=0;e<960;e++)t.vramMem[11264+e]=this.fillTile;for(let s=960;s<1024;s++)t.vramMem[11264+s]=e;if(this.exramMode>=2)for(let e=0;e<1024;e++)t.vramMem[10240+e]=0;else s(this.exram,0,t.vramMem,10240,1024);const i=[8192,9216,10240,11264];for(let e=0;e<4;e++){let s=8192+1024*e,r=i[this.ntMapping[e]];t.defineMirrorRegion(s,r,1024)}t.defineMirrorRegion(12288,8192,3840);for(let e=0;e<4;e++)t.ntable1[e]=this.ntMapping[e];this._populateNameTable(2,10240),this._populateNameTable(3,11264)}_populateNameTable(t,e){let s=this.nes.ppu,i=s.nameTable[t];for(let t=0;t<960;t++)i.tile[t]=s.vramMem[e+t];for(let t=0;t<64;t++)i.writeAttrib(t,s.vramMem[e+960+t])}_syncExramToVram(t){if(this.exramMode<2){let e=this.nes.ppu;e.vramMem[10240+t]=this.exram[t],t<960?e.nameTable[2].tile[t]=this.exram[t]:t<1024&&e.nameTable[2].writeAttrib(t-960,this.exram[t])}}_writePulse(t,e,s){switch(e){case 0:t.dutyCycle=s>>6&3,t.lengthHalt=!!(32&s),t.constantVolume=!!(16&s),t.volume=15&s;break;case 1:break;case 2:t.timer=1792&t.timer|s;break;case 3:t.timer=255&t.timer|(7&s)<<8,t.enabled&&(t.lengthCounter=this.nes.papu.getLengthMax(s)),t.envelopeStart=!0,t.sequencePos=0}}clockIrqCounter(){if(20===this.nes.ppu.scanline)return this.inFrame=!0,void(this.irqCounter=0);this.irqCounter++,0!==this.irqTarget&&this.irqCounter===this.irqTarget&&(this.irqPending=!0,this.irqEnabled&&this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL)),3&this.irqCounter||(this._clockPulseLengthCounter(this.pulse1),this._clockPulseLengthCounter(this.pulse2))}_clockPulseLengthCounter(t){t.enabled&&!t.lengthHalt&&t.lengthCounter>0&&t.lengthCounter--}onBgRender(){1===this.nes.ppu.f_spriteSize&&1!==this._chrBankTarget&&(this._applyChrSetB(),this._chrBankTarget=1,this.nes.ppu.validTileData=!1)}onSpriteRender(){1===this.nes.ppu.f_spriteSize&&0!==this._chrBankTarget&&(this._applyChrSetA(),this._chrBankTarget=0)}getSpritePatternTile(t){if(1!==this.nes.ppu.f_spriteSize||0===this.nes.rom.vromCount)return this.nes.ppu.ptTile[t];let e=this.nes.rom.vromCount,s=this.nes.rom.vromTile;switch(this.chrMode){case 0:{let i=t>=256?1:0;return s[(2*(255&this.chrBankA[7])+i)%e][t-256*i]}case 1:{let i;return i=t<256?(255&this.chrBankA[3])%e:(255&this.chrBankA[7])%e,s[i][t%256]}case 2:{let i=[1,3,5,7],r=t>>7,h=127&t,a=511&this.chrBankA[i[r]];return s[Math.floor(a/2)%e][(a%2<<7)+h]}default:{let i=t>>6,r=63&t,h=1023&this.chrBankA[i];return s[Math.floor(h/4)%e][(h%4<<6)+r]}}}getBgTileData(t,e,s,i){if(1!==this.exramMode||0===this.nes.rom.vromCount)return null;let r=32*i+s,h=this.exram[r],a=(63&h|this.chrUpperBits<<6)%this.nes.rom.vromCount,n=this.nes.rom.vromTile[a][e];return n?{tile:n,attrib:(h>>6&3)<<2}:null}loadROM(){if(!this.nes.rom.valid)throw new Error("MMC5: Invalid ROM! Unable to load.");this.prgBankReg[4]=255,this._syncPrg(),this.loadCHRROM(),this.loadBatteryRam(),this._syncNametables(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}toJSON(){let t=super.toJSON();return t.prgMode=this.prgMode,t.prgBankReg=Array.from(this.prgBankReg),t.prgRam=Array.from(this.prgRam),t.prgRamProtectA=this.prgRamProtectA,t.prgRamProtectB=this.prgRamProtectB,t.chrMode=this.chrMode,t.chrBankA=Array.from(this.chrBankA),t.chrBankB=Array.from(this.chrBankB),t.chrUpperBits=this.chrUpperBits,t.lastChrWrite=this.lastChrWrite,t.ntMapping=Array.from(this.ntMapping),t.exramMode=this.exramMode,t.exram=Array.from(this.exram),t.fillTile=this.fillTile,t.fillAttr=this.fillAttr,t.irqTarget=this.irqTarget,t.irqEnabled=this.irqEnabled,t.irqPending=this.irqPending,t.inFrame=this.inFrame,t.irqCounter=this.irqCounter,t.multA=this.multA,t.multB=this.multB,t.splitEnabled=this.splitEnabled,t.splitRight=this.splitRight,t.splitTile=this.splitTile,t.splitScroll=this.splitScroll,t.splitPage=this.splitPage,t.pcmValue=this.pcmValue,t.pcmReadMode=this.pcmReadMode,t.pcmIrqEnabled=this.pcmIrqEnabled,t.audioEnabled=this.audioEnabled,t.pulse1=Object.assign({},this.pulse1),t.pulse2=Object.assign({},this.pulse2),t}fromJSON(t){super.fromJSON(t),this.prgMode=t.prgMode,this.prgBankReg=new Uint8Array(t.prgBankReg),this.prgRam=new Uint8Array(t.prgRam),this.prgRamProtectA=t.prgRamProtectA,this.prgRamProtectB=t.prgRamProtectB,this.chrMode=t.chrMode,this.chrBankA=new Uint16Array(t.chrBankA),this.chrBankB=new Uint16Array(t.chrBankB),this.chrUpperBits=t.chrUpperBits,this.lastChrWrite=t.lastChrWrite,this.ntMapping=new Uint8Array(t.ntMapping),this.exramMode=t.exramMode,this.exram=new Uint8Array(t.exram),this.fillTile=t.fillTile,this.fillAttr=t.fillAttr,this.irqTarget=t.irqTarget,this.irqEnabled=t.irqEnabled,this.irqPending=t.irqPending,this.inFrame=t.inFrame,this.irqCounter=t.irqCounter,this.multA=t.multA,this.multB=t.multB,this.splitEnabled=t.splitEnabled,this.splitRight=t.splitRight,this.splitTile=t.splitTile,this.splitScroll=t.splitScroll,this.splitPage=t.splitPage,this.pcmValue=t.pcmValue,this.pcmReadMode=t.pcmReadMode,this.pcmIrqEnabled=t.pcmIrqEnabled,this.audioEnabled=t.audioEnabled,t.pulse1&&(this.pulse1=Object.assign(this._initPulse(),t.pulse1)),t.pulse2&&(this.pulse2=Object.assign(this._initPulse(),t.pulse2)),this._syncPrg(),this._syncChr(),this._syncNametables()}};const K=class extends W{static mapperName="AxROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):(this.load32kRomBank(7&e,32768),16&e?this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2):this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING))}loadROM(){if(!this.nes.rom.valid)throw new Error("AOROM: Invalid ROM! Unable to load.");this.loadPRGROM(),this.loadCHRROM(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}};const Q=class extends W{static mapperName="MMC2";constructor(t){super(t),this.prgBank=0,this.chrBankFD0=0,this.chrBankFE0=0,this.chrBankFD1=0,this.chrBankFE1=0,this.latch0=254,this.latch1=254}write(t,e){if(t<32768)super.write(t,e);else switch(61440&t){case 40960:this.prgBank=15&e,this.load8kRomBank(this.prgBank,32768);break;case 45056:this.chrBankFD0=31&e,this._updateChr0();break;case 49152:this.chrBankFE0=31&e,this._updateChr0();break;case 53248:this.chrBankFD1=31&e,this._updateChr1();break;case 57344:this.chrBankFE1=31&e,this._updateChr1();break;case 61440:1&e?this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING):this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING)}}_updateChr0(){let t=253===this.latch0?this.chrBankFD0:this.chrBankFE0;this.loadVromBank(t,0)}_updateChr1(){let t=253===this.latch1?this.chrBankFD1:this.chrBankFE1;this.loadVromBank(t,4096)}latchAccess(t){4056===t?253!==this.latch0&&(this.latch0=253,this._updateChr0()):4072===t?254!==this.latch0&&(this.latch0=254,this._updateChr0()):t>=8152&&t<=8159?253!==this.latch1&&(this.latch1=253,this._updateChr1()):t>=8168&&t<=8175&&254!==this.latch1&&(this.latch1=254,this._updateChr1())}loadROM(){if(!this.nes.rom.valid)throw new Error("MMC2: Invalid ROM! Unable to load.");this.load8kRomBank(0,32768);let t=2*(this.nes.rom.romCount-1)+1;this.load8kRomBank(t-2,40960),this.load8kRomBank(t-1,49152),this.load8kRomBank(t,57344),this.loadCHRROM(),this.loadBatteryRam(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}toJSON(){let t=super.toJSON();return t.prgBank=this.prgBank,t.chrBankFD0=this.chrBankFD0,t.chrBankFE0=this.chrBankFE0,t.chrBankFD1=this.chrBankFD1,t.chrBankFE1=this.chrBankFE1,t.latch0=this.latch0,t.latch1=this.latch1,t}fromJSON(t){super.fromJSON(t),this.prgBank=t.prgBank,this.chrBankFD0=t.chrBankFD0,this.chrBankFE0=t.chrBankFE0,this.chrBankFD1=t.chrBankFD1,this.chrBankFE1=t.chrBankFE1,this.latch0=t.latch0,this.latch1=t.latch1}};const $=class extends W{static mapperName="Color Dreams";constructor(t){super(t)}write(t,e){if(t<32768)super.write(t,e);else{let t=2*(15&e)%this.nes.rom.romCount,s=(2*(15&e)+1)%this.nes.rom.romCount;if(this.loadRomBank(t,32768),this.loadRomBank(s,49152),this.nes.rom.vromCount>0){let t=2*(e>>4)%this.nes.rom.vromCount;this.loadVromBank(t,0),this.loadVromBank(t+1,4096)}}}};const tt=class extends W{static mapperName="BNROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.load32kRomBank(e,32768)}};const et=class extends W{static mapperName="PCI556";constructor(t){super(t)}write(t,e){t<28672||t>32767?super.write(t,e):(this.load32kRomBank(3&e,32768),this.load8kVromBank(2*(e>>2&3),0))}};const st=class extends W{static mapperName="GxROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):(this.load32kRomBank(e>>4&3,32768),this.load8kVromBank(2*(3&e),0))}};const it=class extends W{static mapperName="Camerica";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):t>=36864&&t<40960?16&e?this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2):this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING):t>=49152&&this.loadRomBank(15&e,32768)}loadROM(){if(!this.nes.rom.valid)throw new Error("Mapper 71: Invalid ROM! Unable to load.");this.loadRomBank(0,32768),this.loadRomBank(this.nes.rom.romCount-1,49152),this.loadCHRROM(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}};const rt=class extends W{static mapperName="NINA-03/NINA-06";constructor(t){super(t)}write(t,e){16640==(57600&t)&&(this.load32kRomBank(e>>3&1,32768),this.load8kVromBank(2*(7&e),0)),super.write(t,e)}};const ht=class extends W{static mapperName="UN1ROM";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.loadRomBank(e>>2,32768)}loadROM(){if(!this.nes.rom.valid)throw new Error("UN1ROM: Invalid ROM! Unable to load.");this.loadRomBank(0,32768),this.loadRomBank(this.nes.rom.romCount-1,49152),this.loadCHRROM(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}};const at=class extends j{static mapperName="TxSROM";constructor(t){super(t),this.chrRegs=[0,0,0,0,0,0]}write(t,e){40960!==t&&(super.write(t,e),32768===t&&this.updateNametableMirroring())}executeCommand(t,e){t<=5?(this.chrRegs[t]=e,super.executeCommand(t,127&e),this.updateNametableMirroring()):super.executeCommand(t,e)}updateNametableMirroring(){let t=this.nes.ppu;if(0===this.chrAddressSelect){let e=this.chrRegs[0]>>7&1,s=this.chrRegs[1]>>7&1;t.ntable1[0]=e,t.ntable1[1]=e,t.ntable1[2]=s,t.ntable1[3]=s}else t.ntable1[0]=this.chrRegs[2]>>7&1,t.ntable1[1]=this.chrRegs[3]>>7&1,t.ntable1[2]=this.chrRegs[4]>>7&1,t.ntable1[3]=this.chrRegs[5]>>7&1;for(let e=0;e<4;e++){let s=8192+1024*e,i=8192+1024*t.ntable1[e];t.defineMirrorRegion(s,i,1024)}t.currentMirroring=-1}loadROM(){super.loadROM(),this.updateNametableMirroring()}toJSON(){let t=super.toJSON();return t.chrRegs=this.chrRegs.slice(),t}fromJSON(t){super.fromJSON(t),this.chrRegs=t.chrRegs,this.updateNametableMirroring()}};const nt=class extends j{static mapperName="TQROM";constructor(t){super(t),this.chrRam=new Uint8Array(8192),this.chrRamTiles=new Array(8);for(let t=0;t<8;t++){this.chrRamTiles[t]=new Array(64);for(let e=0;e<64;e++)this.chrRamTiles[t][e]=new B}this.chrRamSlots=[-1,-1,-1,-1,-1,-1,-1,-1]}executeCommand(t,e){switch(t){case j.CMD_SEL_2_1K_VROM_0000:{let t=0===this.chrAddressSelect?0:4096;if(64&e){let s=6&e;this.load1kChrRamBank(s,t),this.load1kChrRamBank(s+1,t+1024)}else{let s=63&e;this.saveChrRamSlot(t),this.saveChrRamSlot(t+1024),this.chrRamSlots[t>>10]=-1,this.chrRamSlots[1+(t>>10)]=-1,this.load1kVromBank(s,t),this.load1kVromBank(s+1,t+1024)}break}case j.CMD_SEL_2_1K_VROM_0800:{let t=0===this.chrAddressSelect?2048:6144;if(64&e){let s=6&e;this.load1kChrRamBank(s,t),this.load1kChrRamBank(s+1,t+1024)}else{let s=63&e;this.saveChrRamSlot(t),this.saveChrRamSlot(t+1024),this.chrRamSlots[t>>10]=-1,this.chrRamSlots[1+(t>>10)]=-1,this.load1kVromBank(s,t),this.load1kVromBank(s+1,t+1024)}break}case j.CMD_SEL_1K_VROM_1000:{let t=0===this.chrAddressSelect?4096:0;64&e?this.load1kChrRamBank(7&e,t):(this.saveChrRamSlot(t),this.chrRamSlots[t>>10]=-1,this.load1kVromBank(63&e,t));break}case j.CMD_SEL_1K_VROM_1400:{let t=0===this.chrAddressSelect?5120:1024;64&e?this.load1kChrRamBank(7&e,t):(this.saveChrRamSlot(t),this.chrRamSlots[t>>10]=-1,this.load1kVromBank(63&e,t));break}case j.CMD_SEL_1K_VROM_1800:{let t=0===this.chrAddressSelect?6144:2048;64&e?this.load1kChrRamBank(7&e,t):(this.saveChrRamSlot(t),this.chrRamSlots[t>>10]=-1,this.load1kVromBank(63&e,t));break}case j.CMD_SEL_1K_VROM_1C00:{let t=0===this.chrAddressSelect?7168:3072;64&e?this.load1kChrRamBank(7&e,t):(this.saveChrRamSlot(t),this.chrRamSlots[t>>10]=-1,this.load1kVromBank(63&e,t));break}default:super.executeCommand(t,e)}}saveChrRamSlot(t){let e=t>>10,i=this.chrRamSlots[e];-1!==i&&s(this.nes.ppu.vramMem,e<<10,this.chrRam,1024*i,1024)}load1kChrRamBank(t,e){this.nes.ppu.triggerRendering(),t&=7,this.saveChrRamSlot(e);let i=e>>10;this.chrRamSlots[i]=t;let r=1024*t;s(this.chrRam,r,this.nes.ppu.vramMem,e,1024),this.rebuildChrRamTiles(t);let h=e>>4;for(let e=0;e<64;e++)this.nes.ppu.ptTile[h+e]=this.chrRamTiles[t][e]}rebuildChrRamTiles(t){let e=1024*t;for(let s=0;s<1024;s++){let i=s>>4,r=s%16;r<8?this.chrRamTiles[t][i].setScanline(r,this.chrRam[e+s],this.chrRam[e+s+8]):this.chrRamTiles[t][i].setScanline(r-8,this.chrRam[e+s-8],this.chrRam[e+s])}}canWriteChr(t){return!(t>=8192)&&-1!==this.chrRamSlots[t>>10]}toJSON(){for(let t=0;t<8;t++)this.saveChrRamSlot(t<<10);let t=super.toJSON();return t.chrRam=Array.from(this.chrRam),t.chrRamSlots=this.chrRamSlots.slice(),t}fromJSON(t){super.fromJSON(t),this.chrRam=new Uint8Array(t.chrRam),this.chrRamSlots=t.chrRamSlots;for(let t=0;t<8;t++)this.rebuildChrRamTiles(t);for(let t=0;t<8;t++){let e=this.chrRamSlots[t];if(-1!==e){let s=t<<10>>4;for(let t=0;t<64;t++)this.nes.ppu.ptTile[s+t]=this.chrRamTiles[e][t]}}}};const ot=class extends W{static mapperName="Jaleco JF-11/JF-14";constructor(t){super(t)}write(t,e){t<24576||t>32767?super.write(t,e):(this.load32kRomBank(e>>4&3,32768),this.load8kVromBank(2*(15&e),0))}};const lt=class extends W{static mapperName="UNROM (Crazy Climber)";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.loadRomBank(e,49152)}loadROM(){if(!this.nes.rom.valid)throw new Error("Mapper 180: Invalid ROM! Unable to load.");this.loadRomBank(0,32768),this.loadRomBank(0,49152),this.loadCHRROM(),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)}};const ct=class extends W{static mapperName="Mapper 240";constructor(t){super(t)}write(t,e){t<16416||t>24575?super.write(t,e):(this.load32kRomBank(e>>4&3,32768),this.load8kVromBank(2*(15&e),0))}};const mt=class extends W{static mapperName="BxROM (Mapper 241)";constructor(t){super(t)}write(t,e){t<32768?super.write(t,e):this.load32kRomBank(e,32768)}},dt={0:W,1:H,2:J,3:Y,4:j,5:Z,7:K,9:Q,11:$,34:tt,38:et,66:st,71:it,79:rt,94:ht,118:at,119:nt,140:ot,180:lt,240:ct,241:mt};class ut{VERTICAL_MIRRORING=0;HORIZONTAL_MIRRORING=1;FOURSCREEN_MIRRORING=2;SINGLESCREEN_MIRRORING=3;SINGLESCREEN_MIRRORING2=4;SINGLESCREEN_MIRRORING3=5;SINGLESCREEN_MIRRORING4=6;CHRROM_MIRRORING=7;constructor(t){this.nes=t,this.valid=!1}load(t){let e,s,i;t instanceof ArrayBuffer&&(t=new Uint8Array(t));const r=ArrayBuffer.isView(t);if(r){if(t.length<4||78!==t[0]||69!==t[1]||83!==t[2]||26!==t[3])throw new Error("Not a valid NES ROM.")}else if(!t.startsWith("NES"))throw new Error("Not a valid NES ROM.");for(this.header=new Uint8Array(16),e=0;e<16;e++)this.header[e]=r?t[e]:255&t.charCodeAt(e);this.mirroring=1&this.header[6]?1:0,this.batteryRam=!!(2&this.header[6]),this.trainer=!!(4&this.header[6]),this.fourScreen=!!(8&this.header[6]),this.isNES2=8==(12&this.header[7]),this.isNES2?this._loadNES2Header():this._loadINES1Header(),this.rom=new Array(this.romCount);let h,a,n=16+(this.trainer?512:0);for(e=0;e<this.romCount;e++){for(this.rom[e]=new Uint8Array(16384),s=0;s<16384&&!(n+s>=t.length);s++)this.rom[e][s]=r?t[n+s]:255&t.charCodeAt(n+s);n+=16384}for(this.vrom=new Array(this.vromCount),e=0;e<this.vromCount;e++){for(this.vrom[e]=new Uint8Array(4096),s=0;s<4096&&!(n+s>=t.length);s++)this.vrom[e][s]=r?t[n+s]:255&t.charCodeAt(n+s);n+=4096}for(this.vromTile=new Array(this.vromCount),e=0;e<this.vromCount;e++)for(this.vromTile[e]=new Array(256),s=0;s<256;s++)this.vromTile[e][s]=new B;for(i=0;i<this.vromCount;i++)for(e=0;e<4096;e++)h=e>>4,a=e%16,a<8?this.vromTile[i][h].setScanline(a,this.vrom[i][e],this.vrom[i][e+8]):this.vromTile[i][h].setScanline(a-8,this.vrom[i][e-8],this.vrom[i][e]);this.valid=!0}_loadINES1Header(){this.romCount=this.header[4],this.vromCount=2*this.header[5],this.mapperType=this.header[6]>>4|240&this.header[7];let t=!1;for(let e=8;e<16;e++)if(0!==this.header[e]){t=!0;break}t&&(this.mapperType&=15),this.subMapper=0,this.prgRamSize=0,this.prgNvRamSize=0,this.chrRamSize=0,this.chrNvRamSize=0,this.timingMode=0,this.consoleType=0}_loadNES2Header(){this.mapperType=this.header[6]>>4|240&this.header[7]|(15&this.header[8])<<8,this.subMapper=this.header[8]>>4&15;const t=15&this.header[9];if(15===t){const t=this.header[4]>>2&63,e=3&this.header[4];this.romCount=Math.ceil(Math.pow(2,t)*(2*e+1)/16384)}else this.romCount=t<<8|this.header[4];const e=this.header[9]>>4&15;if(15===e){const t=this.header[5]>>2&63,e=3&this.header[5];this.vromCount=Math.ceil(Math.pow(2,t)*(2*e+1)/4096)}else this.vromCount=2*(e<<8|this.header[5]);this.prgRamSize=ut._decodeRamSize(15&this.header[10]),this.prgNvRamSize=ut._decodeRamSize(this.header[10]>>4&15),this.chrRamSize=ut._decodeRamSize(15&this.header[11]),this.chrNvRamSize=ut._decodeRamSize(this.header[11]>>4&15),this.timingMode=3&this.header[12],this.consoleType=3&this.header[7]}static _decodeRamSize(t){return 0===t?0:64<<t}getMirroringType(){return this.fourScreen?this.FOURSCREEN_MIRRORING:0===this.mirroring?this.HORIZONTAL_MIRRORING:this.VERTICAL_MIRRORING}mapperSupported(){return void 0!==dt[this.mapperType]}createMapper(){if(this.mapperSupported())return new dt[this.mapperType](this.nes);throw new Error(`Unsupported mapper: ${this.mapperType}`)}}const pt=ut;const gt=class{constructor(t){this.opts={onFrame:function(){},onAudioSample:null,onStatusUpdate:function(){},onBatteryRamWrite:function(){},emulateSound:!0,sampleRate:48e3,...t},this.ui={writeFrame:this.opts.onFrame,updateStatus:this.opts.onStatusUpdate},this.cpu=new E(this),this.ppu=new v(this),this.papu=new L(this),this.gameGenie=new x,this.gameGenie.onChange=()=>this.cpu._updateCartridgeLoader(),this.mmap=null,this.controllers={1:new A,2:new A},this.fpsFrameCount=0,this.romData=null,this.ui.updateStatus("Ready to load a ROM.")}reset(){this.cpu=new E(this),this.ppu=new v(this),this.papu=new L(this),null!==this.mmap&&(this.mmap=this.rom.createMapper()),this.lastFpsTime=null,this.fpsFrameCount=0,this.crashed=!1}frame=()=>{if(this.crashed)throw new Error("Game has crashed. Call reset() or loadROM() to restart.");let t;this.controllers[1].clock(),this.controllers[2].clock(),this.ppu.startFrame();const e=this.cpu,s=this.ppu,i=this.papu;try{for(;;)if(0===e.cyclesToHalt){if(t=e.emulate(),i.clockFrameCounter(t,e.apuCatchupCycles),e.apuCatchupCycles=0,s.frameEnded){s.frameEnded=!1;break}}else{let t=Math.min(e.cyclesToHalt,8);for(let e=0;e<t;e++)s.advanceDots(3);if(i.clockFrameCounter(t),e.cyclesToHalt-=t,e._cpuCycleBase+=t,s.frameEnded){s.frameEnded=!1;break}}}catch(t){throw this.crashed=!0,t}this.fpsFrameCount++};buttonDown=(t,e)=>{this.controllers[t].buttonDown(e)};buttonUp=(t,e)=>{this.controllers[t].buttonUp(e)};zapperMove=(t,e)=>{this.mmap&&(this.mmap.zapperX=t,this.mmap.zapperY=e)};zapperFireDown=()=>{this.mmap&&(this.mmap.zapperFired=!0)};zapperFireUp=()=>{this.mmap&&(this.mmap.zapperFired=!1)};getFPS(){const t=Date.now();let e=null;return this.lastFpsTime&&(e=this.fpsFrameCount/((t-this.lastFpsTime)/1e3)),this.fpsFrameCount=0,this.lastFpsTime=t,e}reloadROM(){null!==this.romData&&this.loadROM(this.romData)}loadROM(t){this.rom=new pt(this),this.rom.load(t),this.reset(),this.mmap=this.rom.createMapper(),this.mmap.loadROM(),this.ppu.setMirroring(this.rom.getMirroringType()),this.romData=t}setFramerate(t){this.papu.setFrameRate(t)}toJSON(){return{cpu:this.cpu.toJSON(),mmap:this.mmap.toJSON(),ppu:this.ppu.toJSON(),papu:this.papu.toJSON(),controllers:{1:this.controllers[1].toJSON(),2:this.controllers[2].toJSON()}}}fromJSON(t){this.reset(),this.cpu.fromJSON(t.cpu),this.mmap.fromJSON(t.mmap),this.ppu.fromJSON(t.ppu),this.papu.fromJSON(t.papu),t.controllers&&(t.controllers[1]&&this.controllers[1].fromJSON(t.controllers[1]),t.controllers[2]&&this.controllers[2].fromJSON(t.controllers[2]))}},Rt=256,Ct=240;class _t{constructor(t,e={}){this.onMouseDown=e.onMouseDown,this.onMouseUp=e.onMouseUp,this.canvas=document.createElement("canvas"),this.canvas.width=Rt,this.canvas.height=Ct,this.canvas.style.imageRendering="pixelated",this.canvas.style.imageRendering="crisp-edges",t.appendChild(this.canvas),this._handleMouseDown=t=>{if(!this.onMouseDown)return;let e=Rt/parseFloat(this.canvas.style.width),s=this.canvas.getBoundingClientRect(),i=Math.round((t.clientX-s.left)*e),r=Math.round((t.clientY-s.top)*e);this.onMouseDown(i,r)},this._handleMouseUp=()=>{this.onMouseUp&&this.onMouseUp()},this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mouseup",this._handleMouseUp),this._initCanvas()}_initCanvas(){this.context=this.canvas.getContext("2d"),this.imageData=this.context.getImageData(0,0,Rt,Ct),this.context.fillStyle="black",this.context.fillRect(0,0,Rt,Ct),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var t=0;t<this.buf32.length;++t)this.buf32[t]=4278190080}setBuffer=t=>{for(var e=0;e<Ct;++e)for(var s=0;s<Rt;++s){var i=256*e+s;this.buf32[i]=4278190080|t[i]}};writeBuffer=()=>{this.imageData.data.set(this.buf8),this.context.putImageData(this.imageData,0,0)};fitInParent=()=>{let t=this.canvas.parentNode,e=t.clientWidth,s=t.clientHeight,i=1.0666666666666667;i<e/s?(this.canvas.style.width=`${Math.round(s*i)}px`,this.canvas.style.height=`${s}px`):(this.canvas.style.width=`${e}px`,this.canvas.style.height=`${Math.round(e/i)}px`)};screenshot(){var t=new Image;return t.src=this.canvas.toDataURL("image/png"),t}destroy(){this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mouseup",this._handleMouseUp),this.canvas.parentNode.removeChild(this.canvas)}}class bt{constructor({onBufferUnderrun:t}){this.onBufferUnderrun=t,this.audioCtx=null,this.node=null,this.batchL=new Float32Array(128),this.batchR=new Float32Array(128),this.batchPos=0}getSampleRate(){return this.audioCtx?this.audioCtx.sampleRate:44100}async start(){if(!window.AudioContext)return;this.audioCtx=new window.AudioContext;const t=new Blob(['\nclass NESAudioProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n    // Circular buffer sized to hold ~170ms of audio at 48kHz (8192 samples).\n    this.capacity = 8192;\n    this.bufferL = new Float32Array(this.capacity);\n    this.bufferR = new Float32Array(this.capacity);\n    this.readPos = 0;\n    this.writePos = 0;\n    this.count = 0;\n\n    this.port.onmessage = (e) => {\n      if (e.data.type === "samples") {\n        const left = e.data.left;\n        const right = e.data.right;\n        const len = left.length;\n\n        // If adding these samples would overflow, drop oldest to make room\n        if (this.count + len > this.capacity) {\n          const drop = this.count + len - this.capacity;\n          this.readPos = (this.readPos + drop) % this.capacity;\n          this.count -= drop;\n        }\n\n        for (let i = 0; i < len; i++) {\n          this.bufferL[this.writePos] = left[i];\n          this.bufferR[this.writePos] = right[i];\n          this.writePos = (this.writePos + 1) % this.capacity;\n        }\n        this.count += len;\n      }\n    };\n  }\n\n  process(inputs, outputs) {\n    const output = outputs[0];\n    if (!output || output.length < 2) return true;\n\n    const outL = output[0];\n    const outR = output[1];\n    const size = outL.length;\n\n    if (this.count < size) {\n      for (let i = 0; i < this.count; i++) {\n        outL[i] = this.bufferL[this.readPos];\n        outR[i] = this.bufferR[this.readPos];\n        this.readPos = (this.readPos + 1) % this.capacity;\n      }\n      for (let i = this.count; i < size; i++) {\n        outL[i] = 0;\n        outR[i] = 0;\n      }\n      this.count = 0;\n      this.port.postMessage({ type: "underrun" });\n    } else {\n      for (let i = 0; i < size; i++) {\n        outL[i] = this.bufferL[this.readPos];\n        outR[i] = this.bufferR[this.readPos];\n        this.readPos = (this.readPos + 1) % this.capacity;\n      }\n      this.count -= size;\n    }\n\n    return true;\n  }\n}\n\nregisterProcessor("nes-audio-processor", NESAudioProcessor);\n'],{type:"application/javascript"}),e=URL.createObjectURL(t);await this.audioCtx.audioWorklet.addModule(e),URL.revokeObjectURL(e),this.node=new AudioWorkletNode(this.audioCtx,"nes-audio-processor",{outputChannelCount:[2]}),this.node.port.onmessage=t=>{"underrun"===t.data.type&&this.onBufferUnderrun&&this.onBufferUnderrun()},this.node.connect(this.audioCtx.destination),"suspended"===this.audioCtx.state&&(this._resumeOnInteraction=()=>{this.audioCtx&&this.audioCtx.resume(),this._removeResumeListeners()},document.addEventListener("keydown",this._resumeOnInteraction),document.addEventListener("mousedown",this._resumeOnInteraction),document.addEventListener("touchstart",this._resumeOnInteraction))}_removeResumeListeners(){this._resumeOnInteraction&&(document.removeEventListener("keydown",this._resumeOnInteraction),document.removeEventListener("mousedown",this._resumeOnInteraction),document.removeEventListener("touchstart",this._resumeOnInteraction),this._resumeOnInteraction=null)}stop(){this._removeResumeListeners(),this.node&&(this.node.disconnect(this.audioCtx.destination),this.node=null),this.audioCtx&&(this.audioCtx.close().catch(t=>console.error(t)),this.audioCtx=null),this.batchPos=0}writeSample=(t,e)=>{this.node&&(this.batchL[this.batchPos]=t,this.batchR[this.batchPos]=e,this.batchPos++,this.batchPos>=128&&(this.node.port.postMessage({type:"samples",left:this.batchL.slice(),right:this.batchR.slice()}),this.batchPos=0))};flush(){this.batchPos>0&&this.node&&(this.node.port.postMessage({type:"samples",left:this.batchL.slice(0,this.batchPos),right:this.batchR.slice(0,this.batchPos)}),this.batchPos=0)}}let yt=!1;try{yt=!!localStorage.getItem("jsnes_debug")}catch{}class ft{constructor(t){this.onGenerateFrame=t.onGenerateFrame,this.onWriteFrame=t.onWriteFrame,this.onAnimationFrame=this.onAnimationFrame.bind(this),this.running=!0,this.interval=1e3/60.098,this.lastFrameTime=!1}start(){this.running=!0,this.requestAnimationFrame()}stop(){this.running=!1,this._requestID&&window.cancelAnimationFrame(this._requestID),this.lastFrameTime=!1}requestAnimationFrame(){this._requestID=window.requestAnimationFrame(this.onAnimationFrame)}generateFrame(){this.onGenerateFrame(),this.lastFrameTime+=this.interval}onAnimationFrame=t=>{this.requestAnimationFrame();let e=t%this.interval,s=t-e;if(!this.lastFrameTime)return void(this.lastFrameTime=s);let i=Math.round((s-this.lastFrameTime)/this.interval);if(0===i)return;this.generateFrame(),this.onWriteFrame();let r=this.interval-e;for(let t=1;t<i;t++)setTimeout(()=>{this.generateFrame()},t*r/i);i>1&&yt&&console.log("SKIP",i-1,this.lastFrameTime)}}const St={88:[1,A.BUTTON_A,"X"],89:[1,A.BUTTON_B,"Y"],90:[1,A.BUTTON_B,"Z"],17:[1,A.BUTTON_SELECT,"Right Ctrl"],13:[1,A.BUTTON_START,"Enter"],38:[1,A.BUTTON_UP,"Up"],40:[1,A.BUTTON_DOWN,"Down"],37:[1,A.BUTTON_LEFT,"Left"],39:[1,A.BUTTON_RIGHT,"Right"],83:[1,A.BUTTON_TURBO_A,"S"],65:[1,A.BUTTON_TURBO_B,"A"],103:[2,A.BUTTON_A,"Num-7"],105:[2,A.BUTTON_B,"Num-9"],99:[2,A.BUTTON_SELECT,"Num-3"],97:[2,A.BUTTON_START,"Num-1"],104:[2,A.BUTTON_UP,"Num-8"],98:[2,A.BUTTON_DOWN,"Num-2"],100:[2,A.BUTTON_LEFT,"Num-4"],102:[2,A.BUTTON_RIGHT,"Num-6"]};class Tt{constructor(t){this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp}loadKeys=()=>{var t;try{(t=localStorage.getItem("keys"))&&(t=JSON.parse(t))}catch(t){console.warn("Failed to get keys from localStorage.",t)}this.keys=t||St};setKeys=t=>{try{localStorage.setItem("keys",JSON.stringify(t)),this.keys=t}catch(t){console.warn("Failed to set keys in localStorage.",t)}};handleKeyDown=t=>{var e=this.keys[t.keyCode];e&&(this.onButtonDown(e[0],e[1]),t.preventDefault())};handleKeyUp=t=>{var e=this.keys[t.keyCode];e&&(this.onButtonUp(e[0],e[1]),t.preventDefault())};handleKeyPress=t=>{this.keys[t.keyCode]&&t.preventDefault()}}class Et{constructor(t){this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp,this.gamepadState=[],this.buttonCallback=null}disableIfGamepadEnabled=t=>{var e=this;return(s,i)=>{if(!e.gamepadConfig)return t(s,i);var r=e.gamepadConfig.playerGamepadId;return r&&r[s-1]?void 0:t(s,i)}};_getPlayerNumberFromGamepad=t=>this.gamepadConfig.playerGamepadId[0]===t.id?1:this.gamepadConfig.playerGamepadId[1]===t.id?2:1;poll=()=>{const t=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads(),e=[];for(let s=0;s<t.length;s++){const i=t[s],r=this.gamepadState[s];if(!i)continue;if(!r){this.gamepadState[s]=i;continue}const h=i.buttons,a=r.buttons;if(this.buttonCallback){for(let t=0;t<i.axes.length;t++){const e=i.axes[t],s=r.axes[t];-1===e&&-1!==s&&this.buttonCallback({gamepadId:i.id,type:"axis",code:t,value:e}),1===e&&1!==s&&this.buttonCallback({gamepadId:i.id,type:"axis",code:t,value:e})}for(let t=0;t<h.length;t++){const e=h[t],s=a[t];e.pressed&&!s.pressed&&this.buttonCallback({gamepadId:i.id,type:"button",code:t})}}else if(this.gamepadConfig){let t=this._getPlayerNumberFromGamepad(i);if(e.length<2&&(-1!==e.indexOf(t)&&(t++,t>2&&(t=1)),e.push(t),this.gamepadConfig.configs[i.id])){const e=this.gamepadConfig.configs[i.id].buttons;for(let s=0;s<e.length;s++){const n=e[s];if("button"===n.type){const e=n.code,s=h[e],i=a[e];s.pressed&&!i.pressed?this.onButtonDown(t,n.buttonId):!s.pressed&&i.pressed&&this.onButtonUp(t,n.buttonId)}else if("axis"===n.type){const e=n.code,s=i.axes[e],h=r.axes[e];s===n.value&&h!==n.value&&this.onButtonDown(t,n.buttonId),s!==n.value&&h===n.value&&this.onButtonUp(t,n.buttonId)}}}}this.gamepadState[s]={buttons:h.map(t=>({pressed:t.pressed})),axes:i.axes.slice(0)}}};promptButton=t=>{this.buttonCallback=t?e=>{this.buttonCallback=null,t(e)}:t};loadGamepadConfig=()=>{var t;try{(t=localStorage.getItem("gamepadConfig"))&&(t=JSON.parse(t))}catch(t){console.warn("Failed to get gamepadConfig from localStorage.",t)}this.gamepadConfig=t};setGamepadConfig=t=>{try{localStorage.setItem("gamepadConfig",JSON.stringify(t)),this.gamepadConfig=t}catch(t){console.warn("Failed to set gamepadConfig in localStorage.",t)}};startPolling=()=>{if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return{stop:()=>{}};let t=!1;const e=()=>{t||(this.poll(),requestAnimationFrame(e))};return requestAnimationFrame(e),{stop:()=>{t=!0}}}}let kt=!1;try{kt=!!localStorage.getItem("jsnes_debug")}catch{}function At(...t){kt&&console.log(...t)}class Bt{constructor(t={}){this._options=t,this._screen=new _t(t.container,{onMouseDown:(t,e)=>{this.nes.zapperMove(t,e),this.nes.zapperFireDown()},onMouseUp:()=>{this.nes.zapperFireUp()}}),this._screen.fitInParent(),this._speakers=new bt({onBufferUnderrun:()=>{At("Buffer underrun, running extra frames to catch up"),this._frameTimer.generateFrame(),this._frameTimer.generateFrame()}}),this.nes=new gt({onFrame:this._screen.setBuffer,onStatusUpdate:At,onAudioSample:this._speakers.writeSample,onBatteryRamWrite:t.onBatteryRamWrite||(()=>{}),sampleRate:this._speakers.getSampleRate()}),this._frameTimer=new ft({onGenerateFrame:()=>{try{this.nes.frame(),this._speakers.flush()}catch(t){this.stop(),this._options.onError&&this._options.onError(t)}},onWriteFrame:this._screen.writeBuffer}),this.gamepad=new Et({onButtonDown:this.nes.buttonDown,onButtonUp:this.nes.buttonUp}),this.gamepad.loadGamepadConfig(),this._gamepadPolling=this.gamepad.startPolling(),this.keyboard=new Tt({onButtonDown:this.gamepad.disableIfGamepadEnabled(this.nes.buttonDown),onButtonUp:this.gamepad.disableIfGamepadEnabled(this.nes.buttonUp)}),this.keyboard.loadKeys(),document.addEventListener("keydown",this.keyboard.handleKeyDown),document.addEventListener("keyup",this.keyboard.handleKeyUp),document.addEventListener("keypress",this.keyboard.handleKeyPress),t.romData&&(this.nes.loadROM(t.romData),this.start())}start(){this._frameTimer.start(),this._speakers.start(),this._fpsInterval=setInterval(()=>{At(`FPS: ${this.nes.getFPS()}`)},1e3)}stop(){this._frameTimer.stop(),this._speakers.stop(),clearInterval(this._fpsInterval)}loadROM(t){this.stop(),this.nes.loadROM(t),this.start()}fitInParent(){this._screen.fitInParent()}screenshot(){return this._screen.screenshot()}destroy(){this.stop(),document.removeEventListener("keydown",this.keyboard.handleKeyDown),document.removeEventListener("keyup",this.keyboard.handleKeyUp),document.removeEventListener("keypress",this.keyboard.handleKeyPress),this._gamepadPolling.stop(),this._screen.destroy()}static loadROMFromURL(t,e){var s=new XMLHttpRequest;return s.open("GET",t),s.overrideMimeType("text/plain; charset=x-user-defined"),s.onerror=()=>e(new Error(`Error loading ${t}: ${s.statusText}`)),s.onload=function(){200===this.status?e(null,this.responseText):0===this.status||s.onerror()},s.send(),s}}return e})());;

/*
 * dsh-fc-games Client half.
 *
 * Renders a global panel row in `sidebar.panellist` (above the Workspaces
 * region) and the matching `main` keyed panel. The library searches the
 * Internet Archive through the Host route; the game page runs the bundled
 * jsnes 2.1.0 core with custom video/audio/input/save-state handling.
 */
window.__ModuleLoader__.load({
  id: 'dsh-fc-games',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    var React = require('react');
    var h = React.createElement;

    var useState = React.useState;
    var useEffect = React.useEffect;
    var useRef = React.useRef;
    var useCallback = React.useCallback;
    var useMemo = React.useMemo;

    var inject = ['slots', 'timer', 'locale', 'remote', 'layout', 'sidebarRight', 'sidebarRightTabs'];

    var SCREEN_W = 256;
    var SCREEN_H = 240;
    var FRAME_MS = 1000 / 60.098;
    var MAX_ROM_BYTES = 8 * 1024 * 1024;
    var FC_TAB_ID = 'dsh-fc-games/tab';
    var FC_TAB_KIND = 'fc-games';
    var suppressMainRedirect = false;
    var RECENT_KEY = 'dsh-fc-games.recent.v1';
    var CONTROLS_KEY = 'dsh-fc-games.controls.v1';
    var VOLUME_KEY = 'dsh-fc-games.volume.v1';
    var ASPECT_KEY = 'dsh-fc-games.aspect.v1';
    var CUSTOM_SOURCES_KEY = 'dsh-fc-games.sources.v1';
    var SELECTED_SOURCE_KEY = 'dsh-fc-games.source.v1';
    var URL_GAMES_KEY = 'dsh-fc-games.urlgames.v1';
    var BUILTIN_SOURCES = [
      { id: 'all', labelKey: 'sources.all' },
      { id: 'archive', labelKey: 'sources.archive' },
      { id: 'github', labelKey: 'sources.github' },
    ];
    var ASPECTS = [
      { id: '4:3', value: '4 / 3', labelKey: 'game.aspect43' },
      { id: '16:9', value: '16 / 9', labelKey: 'game.aspect169' },
      { id: '16:15', value: '16 / 15', labelKey: 'game.aspectPixel' },
    ];
    var NOTICE_KEY = 'dsh-fc-games.notice.v1';
    var CHEATS_KEY = 'dsh-fc-games.cheats.v1';
    var RECENT_LIMIT = 30;

    // ---------------------------------------------------------------- locale
    var zh = {
      'panel.label': '红白机',
      'page.title': '红白机',
      'page.subtitle': '在 Internet Archive、GitHub 和自定义来源中搜索 FC/NES 游戏',
      'page.backToChat': '返回对话',
      'search.placeholder': '搜索游戏，例如：魂斗罗、超级马里奥、Contra…',
      'search.clear': '清除',
      'search.searching': '搜索中…',
      'search.results': '搜索结果',
      'search.resultCount': '显示 {count} 个可玩结果',
      'search.playableOnly': '仅列出包含可运行 .nes 或 .zip 文件的条目',
      'search.empty': '没有找到可玩的游戏。换个关键词，或试试下面的热门搜索。',
      'search.error': '搜索失败',
      'search.retry': '重试',
      'search.loadMore': '加载更多',
      'search.expanded': '已按 “{query}” 搜索',
      'recent.title': '最近常玩',
      'recent.empty': '还没有玩过游戏。搜索一个 FC 游戏，或导入本地 ROM。',
      'recent.plays': '已玩 {count} 次',
      'recent.play': '继续游戏',
      'card.view': '查看',
      'card.download': '下载',
      'card.continue': '继续游戏',
      'card.restart': '重新开始',
      'downloads.title': '已下载',
      'downloads.all': '全部',
      'downloads.empty': '还没有已下载的游戏',
      'downloads.delete': '删除下载',
      'downloads.deleteTitle': '删除下载',
      'downloads.deleteBody': '将从本机删除这个游戏的 ROM 缓存、全部存档和最近记录。',
      'downloads.deleteHint': '之后仍可以从搜索来源重新下载。',
      'downloads.deleted': '已删除下载',
      'details.title': '游戏详情',
      'details.loading': '正在读取游戏信息…',
      'details.error': '无法读取游戏信息',
      'details.files': '文件',
      'details.downloadPlay': '下载并开始',
      'details.cached': '已缓存',
      'details.chooseFile': '选择要运行的文件',
      'import.button': '导入本地 ROM',
      'import.hint': '仅支持 .nes（iNES / NES 2.0）',
      'import.error': '无法读取这个 ROM 文件',
      'suggestions.title': '热门搜索',
      'source.archive': 'Internet Archive',
      'source.local': '本地 ROM',
      'sources.label': '搜索来源',
      'sources.all': '全部来源',
      'sources.archive': 'Internet Archive',
      'sources.github': 'GitHub FC 合集',
      'sources.custom': '自定义源',
      'sources.url': '链接',
      'urlGames.title': '链接收藏',
      'urlGames.add': '添加链接',
      'urlGames.dialogTitle': '添加游戏链接',
      'urlGames.intro': '粘贴游戏介绍页或直接的 .nes/.zip 链接，Host 会解析标题、封面和下载地址。',
      'urlGames.placeholder': 'https://example.com/games/contra',
      'urlGames.parse': '解析页面',
      'urlGames.loading': '正在解析页面…',
      'urlGames.error': '无法解析这个链接',
      'urlGames.addCard': '添加卡片',
      'urlGames.added': '已添加链接',
      'urlGames.remove': '移除链接',
      'urlGames.empty': '还没有添加链接',
      'urlGames.existing': '已添加的链接',
      'urlGames.duplicate': '这个链接已经在收藏里',
      'sources.manage': '管理来源',
      'sources.title': '自定义搜索源',
      'sources.intro': '添加一个返回 JSON 的搜索接口，或直接添加静态 JSON 索引。',
      'sources.name': '名称',
      'sources.url': '搜索 URL',
      'sources.namePlaceholder': '例如：我的 ROM 库',
      'sources.urlPlaceholder': 'https://example.com/search?q={query}&page={page}',
      'sources.hint': '支持 {query} 和 {page} 占位符；不写 {query} 时，会把接口当作静态索引在本地筛选。',
      'sources.format': '返回格式：{ "items": [{ "title": "Contra", "url": "https://.../contra.nes", "cover": "https://.../cover.jpg" }] }',
      'sources.directOnly': '支持直接 .nes 链接，或包含 .nes 的 zip 压缩包。',
      'sources.add': '添加来源',
      'sources.empty': '还没有自定义来源',
      'sources.delete': '删除',
      'sources.invalidName': '请填写名称',
      'sources.invalidUrl': '请输入 HTTPS 搜索地址',
      'sources.partial': '部分来源失败：{sources}',
      'notice.legal': '本插件不提供游戏文件，仅从 Internet Archive、GitHub 等公开来源检索。请只游玩你有权游玩的游戏。',
      'notice.dismiss': '知道了',
      'footer.source': '游戏来源：多个公开来源',
      'footer.covers': '封面来自游戏条目的公开图片',
      'common.back': '返回',
      'common.close': '关闭',
      'common.cancel': '取消',
      'common.save': '保存',
      'common.load': '读取',
      'common.delete': '删除',
      'common.empty': '空',
      'common.unknown': '未知',
      'common.year': '{year} 年',
      'common.region': '区域',
      'common.openSource': '打开来源页面',
      'common.bytes': '{size}',
      'game.loading': '正在准备游戏…',
      'game.loadingRom': '正在下载 ROM…',
      'game.ready': '准备就绪',
      'game.pause': '暂停',
      'game.resume': '继续',
      'game.reset': '重置',
      'game.saveState': '存档',
      'game.loadState': '读档',
      'game.rewind': '倒带',
      'game.fastForward': '快进',
      'game.screenshot': '截图',
      'game.fullscreen': '全屏',
      'game.exitFullscreen': '退出全屏',
      'game.volume': '音量',
      'game.aspect': '画面比例',
      'game.aspect43': '4:3 电视',
      'game.aspect169': '16:9 宽屏',
      'game.aspectPixel': '16:15 像素',
      'game.mute': '静音',
      'game.unmute': '取消静音',
      'game.controls': '控制',
      'game.cheats': '金手指',
      'game.loadError': '游戏加载失败',
      'game.romError': '这个文件不是有效的 NES ROM',
      'game.mapperError': '模拟器不支持这个游戏的 mapper',
      'game.retry': '重试',
      'game.chooseFile': '这个条目包含多个 ROM，请选择一个：',
      'game.autoSaved': '已自动存档',
      'game.autoRestored': '已恢复上次进度',
      'game.stateSaved': '已保存到存档槽 {slot}',
      'game.stateLoaded': '已读取存档槽 {slot}',
      'game.stateDeleted': '已删除存档槽 {slot}',
      'game.screenshotSaved': '截图已保存',
      'game.cheatsApplied': '金手指已应用',
      'game.rewindEmpty': '倒带缓冲区还是空的',
      'game.unsupportedZip': '这个压缩包中没有可运行的 .nes 文件。',
      'game.unsupportedFds': '这个条目是 FDS 磁盘游戏，当前模拟器不支持。',
      'game.unsupportedNone': '这个条目里没有找到可运行的 .nes 文件。',
      'game.controlsHint': '方向键移动，Z/B，X/A，Enter 开始，Shift 选择。',
      'game.gamepadConnected': '手柄已连接',
      'game.gamepadDisconnected': '手柄未连接',
      'game.fps': '{fps} FPS',
      'game.speed': '{speed}x',
      'save.title': '存档槽',
      'save.auto': '自动存档',
      'save.slot': '槽位 {slot}',
      'save.hint': '存档保存在本机浏览器中，不会上传。',
      'controls.title': '控制设置',
      'controls.keyboard': '键盘',
      'controls.gamepad': '手柄',
      'controls.action.up': '上',
      'controls.action.down': '下',
      'controls.action.left': '左',
      'controls.action.right': '右',
      'controls.action.a': 'A',
      'controls.action.b': 'B',
      'controls.action.turboA': '连发 A',
      'controls.action.turboB': '连发 B',
      'controls.action.start': 'Start',
      'controls.action.select': 'Select',
      'controls.remap': '设置',
      'controls.pressKey': '请按键…',
      'controls.pressButton': '请按手柄键…',
      'controls.reset': '恢复默认',
      'controls.saved': '控制设置已保存',
      'controls.autofireA': 'A 键连发',
      'controls.autofireB': 'B 键连发',
      'controls.autofireHint': '开启后按住 A/B 会自动连发；需要按住蓄力的游戏请关闭。也可以用手柄的连发按钮直接映射到“连发 A/B”。',
      'cheats.title': 'Game Genie 金手指',
      'cheats.hint': '每行一个 Game Genie 代码（6/8 位）或 addr:value 十六进制码。',
      'cheats.apply': '应用',
      'cheats.clear': '清除',
      'cheats.invalid': '无效的代码：{code}',
      'error.title': '出错了',
      'error.network': '网络请求失败，请检查网络或稍后重试。',
      'error.host': 'Host 服务未就绪，请刷新页面或重新加载插件。',
      'error.notFound': '没有找到这个 ROM 文件。',
      'error.tooLarge': 'ROM 超过 8 MB 限制。',
      'error.unsupported': '这个游戏暂时无法运行。',
      'error.retry': '重试',
    };
    var en = {
      'panel.label': 'FC games',
      'page.title': 'FC games',
      'page.subtitle': 'Search Internet Archive, GitHub, and custom sources for NES/Famicom games',
      'page.backToChat': 'Back to chat',
      'search.placeholder': 'Search games, e.g. Contra, Super Mario Bros., Battle City…',
      'search.clear': 'Clear',
      'search.searching': 'Searching…',
      'search.results': 'Search results',
      'search.resultCount': '{count} playable results',
      'search.playableOnly': 'Only items that contain a playable .nes or .zip file are listed',
      'search.empty': 'No playable games found. Try another query or a suggestion below.',
      'search.error': 'Search failed',
      'search.retry': 'Retry',
      'search.loadMore': 'Load more',
      'search.expanded': 'Searched for “{query}”',
      'recent.title': 'Recently played',
      'recent.empty': 'No games played yet. Search for a game or import a local ROM.',
      'recent.plays': 'Played {count} times',
      'recent.play': 'Continue',
      'card.view': 'View',
      'card.download': 'Download',
      'card.continue': 'Continue',
      'card.restart': 'Restart',
      'downloads.title': 'Downloaded',
      'downloads.all': 'All',
      'downloads.empty': 'No downloaded games yet',
      'downloads.delete': 'Delete download',
      'downloads.deleteTitle': 'Delete download',
      'downloads.deleteBody': 'This removes the cached ROM, all save states, and the recent entry from this device.',
      'downloads.deleteHint': 'You can download it again from its search source later.',
      'downloads.deleted': 'Download deleted',
      'details.title': 'Game details',
      'details.loading': 'Loading game information…',
      'details.error': 'Could not load game information',
      'details.files': 'Files',
      'details.downloadPlay': 'Download and play',
      'details.cached': 'Cached',
      'details.chooseFile': 'Choose a file to run',
      'import.button': 'Import local ROM',
      'import.hint': 'Only .nes (iNES / NES 2.0)',
      'import.error': 'Could not read that ROM file',
      'suggestions.title': 'Popular searches',
      'source.archive': 'Internet Archive',
      'source.local': 'Local ROM',
      'sources.label': 'Source',
      'sources.all': 'All sources',
      'sources.archive': 'Internet Archive',
      'sources.github': 'GitHub FC collection',
      'sources.custom': 'Custom source',
      'sources.url': 'Link',
      'urlGames.title': 'Linked games',
      'urlGames.add': 'Add link',
      'urlGames.dialogTitle': 'Add game link',
      'urlGames.intro': 'Paste a game page or a direct .nes/.zip URL; the Host parses its title, cover, and download link.',
      'urlGames.placeholder': 'https://example.com/games/contra',
      'urlGames.parse': 'Parse page',
      'urlGames.loading': 'Parsing page…',
      'urlGames.error': 'Could not parse this link',
      'urlGames.addCard': 'Add card',
      'urlGames.added': 'Link added',
      'urlGames.remove': 'Remove link',
      'urlGames.empty': 'No linked games yet',
      'urlGames.existing': 'Added links',
      'urlGames.duplicate': 'That link is already in your collection',
      'sources.manage': 'Manage sources',
      'sources.title': 'Custom search sources',
      'sources.intro': 'Add a JSON search endpoint, or a static JSON index.',
      'sources.name': 'Name',
      'sources.url': 'Search URL',
      'sources.namePlaceholder': 'e.g. My ROM shelf',
      'sources.urlPlaceholder': 'https://example.com/search?q={query}&page={page}',
      'sources.hint': 'Supports {query} and {page} placeholders. Without {query}, the endpoint is treated as a static index and filtered locally.',
      'sources.format': 'Response shape: { "items": [{ "title": "Contra", "url": "https://.../contra.nes", "cover": "https://.../cover.jpg" }] }',
      'sources.directOnly': 'Direct .nes links and ZIP archives containing a .nes file are supported.',
      'sources.add': 'Add source',
      'sources.empty': 'No custom sources yet',
      'sources.delete': 'Delete',
      'sources.invalidName': 'Give the source a name',
      'sources.invalidUrl': 'Enter an HTTPS search URL',
      'sources.partial': 'Some sources failed: {sources}',
      'notice.legal': 'This plugin ships no game files; it only searches public sources such as Internet Archive and GitHub. Play only games you are legally entitled to play.',
      'notice.dismiss': 'Got it',
      'footer.source': 'Game sources: multiple public sources',
      'footer.covers': 'Covers come from each item’s public images',
      'common.back': 'Back',
      'common.close': 'Close',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.load': 'Load',
      'common.delete': 'Delete',
      'common.empty': 'Empty',
      'common.unknown': 'Unknown',
      'common.year': '{year}',
      'common.region': 'Region',
      'common.openSource': 'Open source page',
      'common.bytes': '{size}',
      'game.loading': 'Preparing game…',
      'game.loadingRom': 'Downloading ROM…',
      'game.ready': 'Ready',
      'game.pause': 'Pause',
      'game.resume': 'Resume',
      'game.reset': 'Reset',
      'game.saveState': 'Save',
      'game.loadState': 'Load',
      'game.rewind': 'Rewind',
      'game.fastForward': 'Fast-forward',
      'game.screenshot': 'Screenshot',
      'game.fullscreen': 'Fullscreen',
      'game.exitFullscreen': 'Exit fullscreen',
      'game.volume': 'Volume',
      'game.aspect': 'Aspect ratio',
      'game.aspect43': '4:3 TV',
      'game.aspect169': '16:9 widescreen',
      'game.aspectPixel': '16:15 pixel',
      'game.mute': 'Mute',
      'game.unmute': 'Unmute',
      'game.controls': 'Controls',
      'game.cheats': 'Game Genie',
      'game.loadError': 'Could not load the game',
      'game.romError': 'That file is not a valid NES ROM',
      'game.mapperError': 'The emulator does not support this game’s mapper',
      'game.retry': 'Retry',
      'game.chooseFile': 'This item contains several ROMs. Choose one:',
      'game.autoSaved': 'Autosaved',
      'game.autoRestored': 'Resumed your last progress',
      'game.stateSaved': 'Saved to slot {slot}',
      'game.stateLoaded': 'Loaded slot {slot}',
      'game.stateDeleted': 'Deleted slot {slot}',
      'game.screenshotSaved': 'Screenshot saved',
      'game.cheatsApplied': 'Game Genie codes applied',
      'game.rewindEmpty': 'The rewind buffer is still empty',
      'game.unsupportedZip': 'No playable .nes file was found in this ZIP archive.',
      'game.unsupportedFds': 'This item is a Famicom Disk System game, which the bundled core does not support.',
      'game.unsupportedNone': 'No runnable .nes file was found in this item.',
      'game.controlsHint': 'Arrow keys to move, Z/B, X/A, Enter to start, Shift to select.',
      'game.gamepadConnected': 'Gamepad connected',
      'game.gamepadDisconnected': 'No gamepad',
      'game.fps': '{fps} FPS',
      'game.speed': '{speed}x',
      'save.title': 'Save slots',
      'save.auto': 'Autosave',
      'save.slot': 'Slot {slot}',
      'save.hint': 'Saves stay in this browser and are never uploaded.',
      'controls.title': 'Controls',
      'controls.keyboard': 'Keyboard',
      'controls.gamepad': 'Gamepad',
      'controls.action.up': 'Up',
      'controls.action.down': 'Down',
      'controls.action.left': 'Left',
      'controls.action.right': 'Right',
      'controls.action.a': 'A',
      'controls.action.b': 'B',
      'controls.action.turboA': 'Turbo A',
      'controls.action.turboB': 'Turbo B',
      'controls.action.start': 'Start',
      'controls.action.select': 'Select',
      'controls.remap': 'Remap',
      'controls.pressKey': 'Press a key…',
      'controls.pressButton': 'Press a gamepad button…',
      'controls.reset': 'Reset defaults',
      'controls.saved': 'Controls saved',
      'controls.autofireA': 'Auto-fire A',
      'controls.autofireB': 'Auto-fire B',
      'controls.autofireHint': 'When enabled, holding A/B fires repeatedly. Turn it off for charge-shot games. You can also map a gamepad button to Turbo A/B.',
      'cheats.title': 'Game Genie cheats',
      'cheats.hint': 'One Game Genie code (6/8 letters) or addr:value hex code per line.',
      'cheats.apply': 'Apply',
      'cheats.clear': 'Clear',
      'cheats.invalid': 'Invalid code: {code}',
      'error.title': 'Something went wrong',
      'error.network': 'The request failed. Check your network and try again.',
      'error.host': 'The Host service is not ready. Refresh the page or reload the plugin.',
      'error.notFound': 'That ROM file could not be found.',
      'error.tooLarge': 'The ROM exceeds the 8 MB limit.',
      'error.unsupported': 'This game cannot run right now.',
      'error.retry': 'Retry',
    };

    // -------------------------------------------------------------- utilities
    function cx() {
      var out = [];
      for (var i = 0; i < arguments.length; i += 1) {
        var value = arguments[i];
        if (typeof value === 'string' && value.length > 0) out.push(value);
      }
      return out.join(' ');
    }

    function formatBytes(bytes) {
      if (!Number.isFinite(bytes) || bytes <= 0) return '—';
      if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
      if (bytes >= 1024) return Math.round(bytes / 1024) + ' KB';
      return bytes + ' B';
    }

    function relativeTime(timestamp, locale) {
      var diff = Date.now() - Number(timestamp || 0);
      if (!Number.isFinite(diff) || diff < 0) diff = 0;
      var minutes = Math.round(diff / 60000);
      var rtf;
      try {
        rtf = new Intl.RelativeTimeFormat(locale === 'zh' ? 'zh-CN' : 'en', { numeric: 'auto' });
      } catch (e) {
        rtf = null;
      }
      if (minutes < 1) return rtf ? rtf.format(0, 'minute') : '刚刚';
      if (minutes < 60) return rtf ? rtf.format(-minutes, 'minute') : minutes + ' 分钟前';
      var hours = Math.round(minutes / 60);
      if (hours < 24) return rtf ? rtf.format(-hours, 'hour') : hours + ' 小时前';
      var days = Math.round(hours / 24);
      if (days < 30) return rtf ? rtf.format(-days, 'day') : days + ' 天前';
      return new Date(timestamp).toLocaleDateString();
    }

    function safeJsonParse(text, fallback) {
      try {
        var value = JSON.parse(text);
        return value === null || value === undefined ? fallback : value;
      } catch (e) {
        return fallback;
      }
    }

    function loadJson(key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        if (raw === null) return fallback;
        return safeJsonParse(raw, fallback);
      } catch (e) {
        return fallback;
      }
    }

    function saveJson(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }

    function readRecent() {
      var list = loadJson(RECENT_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (item) {
        return item !== null && typeof item === 'object' && typeof item.id === 'string' && typeof item.title === 'string';
      });
    }

    function emitRecent() {
      try {
        window.dispatchEvent(new CustomEvent('dsh-fc-games:recent'));
      } catch (e) {
        // ignore
      }
    }

    function recordPlay(game, file, coverUrl) {
      var list = readRecent();
      var key = String(game.id) + '::' + String(file || '');
      var existing = null;
      for (var i = 0; i < list.length; i += 1) {
        if (list[i].key === key) {
          existing = list[i];
          break;
        }
      }
      var entry = {
        key: key,
        id: String(game.id),
        source: String(game.source || 'archive'),
        sourceName: game.sourceName || null,
        title: String(game.title || game.id),
        year: game.year === undefined ? undefined : Number(game.year),
        coverUrl: coverUrl || game.coverUrl || (existing && existing.coverUrl) || null,
        file: String(file || ''),
        lastPlayedAt: Date.now(),
        playCount: (existing ? Number(existing.playCount) || 0 : 0) + 1,
      };
      list = list.filter(function (item) {
        return item.key !== key;
      });
      list.unshift(entry);
      if (list.length > RECENT_LIMIT) list = list.slice(0, RECENT_LIMIT);
      saveJson(RECENT_KEY, list);
      emitRecent();
      return entry;
    }

    function makeGameKey(id, file) {
      return String(id) + '::' + String(file || '');
    }

    function gradientFor(seed) {
      var hash = 0;
      var text = String(seed || '');
      for (var i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
      var hue = hash % 360;
      return 'linear-gradient(145deg, hsl(' + hue + ' 42% 26%), hsl(' + ((hue + 48) % 360) + ' 48% 17%))';
    }

    function initials(title) {
      var parts = String(title || '?')
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\([^)]*\)/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      if (parts.length === 0) return '?';
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }

    // -------------------------------------------------------------- IndexedDB
    var memoryStore = {
      roms: new Map(),
      states: new Map(),
      meta: new Map(),
    };
    var dbPromise = null;

    function openDb() {
      if (dbPromise !== null) return dbPromise;
      dbPromise = new Promise(function (resolve, reject) {
        if (typeof window.indexedDB === 'undefined') {
          reject(new Error('IndexedDB unavailable'));
          return;
        }
        var request = window.indexedDB.open('dsh-fc-games', 1);
        request.onupgradeneeded = function () {
          var db = request.result;
          if (!db.objectStoreNames.contains('roms')) db.createObjectStore('roms', { keyPath: 'key' });
          if (!db.objectStoreNames.contains('states')) db.createObjectStore('states', { keyPath: 'key' });
          if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
        };
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error || new Error('IndexedDB open failed'));
        };
      });
      return dbPromise;
    }

    function withStore(name, mode, fn) {
      return openDb().then(function (db) {
        return new Promise(function (resolve, reject) {
          var tx = db.transaction(name, mode);
          var store = tx.objectStore(name);
          var result;
          try {
            result = fn(store);
          } catch (error) {
            reject(error);
            return;
          }
          tx.oncomplete = function () {
            resolve(result);
          };
          tx.onerror = function () {
            reject(tx.error || new Error('IndexedDB transaction failed'));
          };
          tx.onabort = function () {
            reject(tx.error || new Error('IndexedDB transaction aborted'));
          };
        });
      });
    }

    function idbGet(name, key) {
      return openDb()
        .then(function (db) {
          return new Promise(function (resolve, reject) {
            var tx = db.transaction(name, 'readonly');
            var request = tx.objectStore(name).get(key);
            request.onsuccess = function () {
              resolve(request.result === undefined ? null : request.result);
            };
            request.onerror = function () {
              reject(request.error);
            };
          });
        })
        .catch(function () {
          return memoryStore[name].get(key) || null;
        });
    }

    function idbPut(name, value) {
      return withStore(name, 'readwrite', function (store) {
        store.put(value);
      }).catch(function (error) {
        memoryStore[name].set(value.key, value);
        if (error && error.name === 'QuotaExceededError') throw error;
      });
    }

    function idbDelete(name, key) {
      return withStore(name, 'readwrite', function (store) {
        store.delete(key);
      }).catch(function () {
        memoryStore[name].delete(key);
      });
    }

    function idbAll(name) {
      return openDb()
        .then(function (db) {
          return new Promise(function (resolve, reject) {
            var tx = db.transaction(name, 'readonly');
            var request = tx.objectStore(name).getAll();
            request.onsuccess = function () {
              resolve(request.result || []);
            };
            request.onerror = function () {
              reject(request.error);
            };
          });
        })
        .catch(function () {
          return Array.from(memoryStore[name].values());
        });
    }

    function getCachedRom(key) {
      return idbGet('roms', key).then(function (row) {
        if (row === null || !(row.bytes instanceof ArrayBuffer)) return null;
        return row;
      });
    }

    function putCachedRom(key, bytes, meta) {
      return idbPut('roms', {
        key: key,
        bytes: bytes,
        fetchedAt: Date.now(),
        meta: meta || null,
      });
    }

    function pruneRoms(maxItems) {
      return idbAll('roms').then(function (rows) {
        if (rows.length <= maxItems) return;
        rows.sort(function (a, b) {
          return (a.fetchedAt || 0) - (b.fetchedAt || 0);
        });
        var remove = rows.slice(0, rows.length - maxItems);
        return Promise.all(
          remove.map(function (row) {
            return idbDelete('roms', row.key);
          }),
        );
      }).catch(function () {});
    }

    // -------------------------------------------------------------- Host API
    function createApi(info) {
      var state = { info: info };

      function urlOf(path, params) {
        var url = new URL(state.info.base + path, window.location.origin);
        Object.keys(params || {}).forEach(function (key) {
          if (params[key] !== undefined && params[key] !== null) url.searchParams.set(key, String(params[key]));
        });
        return url;
      }

      async function requestJson(path, params, signal) {
        var url = urlOf(path, params);
        var response;
        try {
          response = await window.fetch(url, {
            headers: { 'x-fc-games-token': state.info.token },
            signal: signal,
            cache: 'no-store',
          });
        } catch (error) {
          if (error && error.name === 'AbortError') throw error;
          var netError = new Error('NETWORK');
          netError.code = 'NETWORK';
          throw netError;
        }
        var text = await response.text();
        var payload = safeJsonParse(text, null);
        if (!response.ok || payload === null || payload.ok !== true) {
          var info = payload && payload.error ? payload.error : {};
          var apiError = new Error(info.message || 'Request failed (' + response.status + ')');
          apiError.code = info.code || 'HTTP_' + response.status;
          apiError.status = response.status;
          throw apiError;
        }
        return payload;
      }

      async function fetchRom(id, file, source, signal, onProgress) {
        var url = urlOf('/rom', { id: id, file: file, source: source });
        var response;
        try {
          response = await window.fetch(url, {
            headers: { 'x-fc-games-token': state.info.token },
            signal: signal,
            cache: 'no-store',
          });
        } catch (error) {
          if (error && error.name === 'AbortError') throw error;
          var netError = new Error('NETWORK');
          netError.code = 'NETWORK';
          throw netError;
        }
        if (!response.ok) {
          var text = await response.text();
          var payload = safeJsonParse(text, null);
          var info = payload && payload.error ? payload.error : {};
          var apiError = new Error(info.message || 'ROM request failed (' + response.status + ')');
          apiError.code = info.code || 'ROM_HTTP_' + response.status;
          throw apiError;
        }
        var total = Number(response.headers.get('content-length') || 0);
        if (!response.body || typeof response.body.getReader !== 'function') {
          var buffer = await response.arrayBuffer();
          if (buffer.byteLength > MAX_ROM_BYTES) {
            var large = new Error('ROM too large');
            large.code = 'ROM_TOO_LARGE';
            throw large;
          }
          return new Uint8Array(buffer);
        }
        var reader = response.body.getReader();
        var chunks = [];
        var received = 0;
        for (;;) {
          var step = await reader.read();
          if (step.done) break;
          chunks.push(step.value);
          received += step.value.byteLength;
          if (received > MAX_ROM_BYTES) {
            await reader.cancel();
            var tooLarge = new Error('ROM too large');
            tooLarge.code = 'ROM_TOO_LARGE';
            throw tooLarge;
          }
          if (typeof onProgress === 'function') onProgress(received, total);
        }
        var out = new Uint8Array(received);
        var offset = 0;
        for (var i = 0; i < chunks.length; i += 1) {
          out.set(chunks[i], offset);
          offset += chunks[i].byteLength;
        }
        return out;
      }

      return {
        search: function (query, page, source, custom, signal) {
          return requestJson('/search', { q: query, page: page, source: source, custom: custom }, signal);
        },
        resolve: function (id, source, signal) {
          return requestJson('/resolve', { id: id, source: source }, signal);
        },
        parseUrl: function (url, signal) {
          return requestJson('/url', { url: url }, signal);
        },
        fetchRom: fetchRom,
        getInfo: function () {
          return state.info;
        },
      };
    }

    // --------------------------------------------------------------- audio
    var AUDIO_WORKLET =
      'class FCNesAudioProcessor extends AudioWorkletProcessor {' +
      '  constructor() { super(); this.capacity = 8192; this.bufferL = new Float32Array(this.capacity);' +
      '    this.bufferR = new Float32Array(this.capacity); this.readPos = 0; this.writePos = 0; this.count = 0;' +
      '    this.port.onmessage = (e) => { if (e.data.type !== "samples") return;' +
      '      const left = e.data.left, right = e.data.right, len = left.length;' +
      '      if (this.count + len > this.capacity) { const drop = this.count + len - this.capacity;' +
      '        this.readPos = (this.readPos + drop) % this.capacity; this.count -= drop; }' +
      '      for (let i = 0; i < len; i += 1) { this.bufferL[this.writePos] = left[i];' +
      '        this.bufferR[this.writePos] = right[i]; this.writePos = (this.writePos + 1) % this.capacity; }' +
      '      this.count += len; }; }' +
      '  process(inputs, outputs) { const output = outputs[0]; if (!output || output.length < 2) return true;' +
      '    const outL = output[0], outR = output[1], size = outL.length;' +
      '    if (this.count < size) { for (let i = 0; i < this.count; i += 1) { outL[i] = this.bufferL[this.readPos];' +
      '      outR[i] = this.bufferR[this.readPos]; this.readPos = (this.readPos + 1) % this.capacity; }' +
      '      for (let i = this.count; i < size; i += 1) { outL[i] = 0; outR[i] = 0; } this.count = 0;' +
      '      this.port.postMessage({ type: "underrun" }); } else {' +
      '      for (let i = 0; i < size; i += 1) { outL[i] = this.bufferL[this.readPos];' +
      '        outR[i] = this.bufferR[this.readPos]; this.readPos = (this.readPos + 1) % this.capacity; }' +
      '      this.count -= size; } return true; } }' +
      'registerProcessor("fc-nes-audio", FCNesAudioProcessor);';

    function NesAudio(volume) {
      this.volume = Number.isFinite(volume) ? volume : 0.65;
      this.audio = null;
      this.gainNode = null;
      this.node = null;
      this.ready = false;
      this.muted = false;
      this.batchL = new Float32Array(128);
      this.batchR = new Float32Array(128);
      this.batchPos = 0;
      this.starting = null;
    }

    NesAudio.prototype.ensure = function () {
      var self = this;
      if (this.starting !== null) return this.starting;
      this.starting = (async function () {
        var Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) throw new Error('AudioContext unavailable');
        var audio = new Ctor();
        self.audio = audio;
        self.gainNode = audio.createGain();
        self.gainNode.gain.value = self.muted ? 0 : self.volume;
        self.gainNode.connect(audio.destination);
        var blob = new Blob([AUDIO_WORKLET], { type: 'application/javascript' });
        var url = URL.createObjectURL(blob);
        try {
          await audio.audioWorklet.addModule(url);
        } finally {
          URL.revokeObjectURL(url);
        }
        self.node = new AudioWorkletNode(audio, 'fc-nes-audio', { outputChannelCount: [2] });
        self.node.connect(self.gainNode);
        self.node.port.onmessage = function () {};
        self.ready = true;
        if (audio.state === 'suspended') {
          try {
            await audio.resume();
          } catch (e) {
            // The first user gesture will resume it.
          }
        }
        return audio;
      })();
      this.starting.catch(function () {
        self.starting = null;
      });
      return this.starting;
    };

    NesAudio.prototype.resume = function () {
      return this.ensure()
        .then(function (audio) {
          if (audio.state === 'suspended') return audio.resume();
          return undefined;
        })
        .catch(function () {});
    };

    NesAudio.prototype.getSampleRate = function () {
      return this.audio !== null ? this.audio.sampleRate : 48000;
    };

    NesAudio.prototype.setVolume = function (value) {
      this.volume = Math.max(0, Math.min(1, Number(value) || 0));
      if (this.gainNode !== null) this.gainNode.gain.value = this.muted ? 0 : this.volume;
    };

    NesAudio.prototype.setMuted = function (muted) {
      this.muted = !!muted;
      if (this.gainNode !== null) this.gainNode.gain.value = this.muted ? 0 : this.volume;
    };

    NesAudio.prototype.write = function (left, right) {
      if (!this.ready || this.node === null || this.muted) return;
      this.batchL[this.batchPos] = left;
      this.batchR[this.batchPos] = right;
      this.batchPos += 1;
      if (this.batchPos >= 128) {
        this.node.port.postMessage({
          type: 'samples',
          left: this.batchL.slice(),
          right: this.batchR.slice(),
        });
        this.batchPos = 0;
      }
    };

    NesAudio.prototype.flush = function () {
      if (!this.ready || this.node === null || this.batchPos === 0) return;
      this.node.port.postMessage({
        type: 'samples',
        left: this.batchL.slice(0, this.batchPos),
        right: this.batchR.slice(0, this.batchPos),
      });
      this.batchPos = 0;
    };

    NesAudio.prototype.destroy = function () {
      this.ready = false;
      if (this.node !== null) {
        try {
          this.node.disconnect();
        } catch (e) {
          // ignore
        }
        this.node = null;
      }
      if (this.gainNode !== null) {
        try {
          this.gainNode.disconnect();
        } catch (e) {
          // ignore
        }
        this.gainNode = null;
      }
      if (this.audio !== null) {
        try {
          this.audio.close();
        } catch (e) {
          // ignore
        }
        this.audio = null;
      }
    };

    // -------------------------------------------------------------- emulator
    var BUTTONS = {
      a: 0,
      b: 1,
      select: 2,
      start: 3,
      up: 4,
      down: 5,
      left: 6,
      right: 7,
      turboA: 8,
      turboB: 9,
    };

    var DEFAULT_KEYBOARD = {
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      a: 'KeyX',
      b: 'KeyZ',
      turboA: 'KeyS',
      turboB: 'KeyA',
      start: 'Enter',
      select: 'ShiftRight',
    };

    var DEFAULT_GAMEPAD = {
      up: 12,
      down: 13,
      left: 14,
      right: 15,
      a: 0,
      b: 1,
      turboA: 2,
      turboB: 3,
      start: 9,
      select: 8,
    };

    var DEFAULT_AUTOFIRE = { a: false, b: false };

    function loadControls() {
      var saved = loadJson(CONTROLS_KEY, {});
      var keyboard = Object.assign({}, DEFAULT_KEYBOARD);
      var gamepad = Object.assign({}, DEFAULT_GAMEPAD);
      var autoFire = Object.assign({}, DEFAULT_AUTOFIRE);
      if (saved && typeof saved === 'object') {
        if (saved.keyboard && typeof saved.keyboard === 'object') {
          Object.keys(DEFAULT_KEYBOARD).forEach(function (action) {
            if (typeof saved.keyboard[action] === 'string') keyboard[action] = saved.keyboard[action];
          });
        }
        if (saved.gamepad && typeof saved.gamepad === 'object') {
          Object.keys(DEFAULT_GAMEPAD).forEach(function (action) {
            if (Number.isInteger(saved.gamepad[action])) gamepad[action] = saved.gamepad[action];
          });
        }
        if (saved.autoFire && typeof saved.autoFire === 'object') {
          autoFire.a = saved.autoFire.a === true;
          autoFire.b = saved.autoFire.b === true;
        }
      }
      return { keyboard: keyboard, gamepad: gamepad, autoFire: autoFire };
    }

    function saveControls(controls) {
      saveJson(CONTROLS_KEY, controls);
    }

    function loadCustomSources() {
      var list = loadJson(CUSTOM_SOURCES_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (source) {
        return source
          && typeof source.id === 'string'
          && /^[a-z0-9-]{1,40}$/i.test(source.id)
          && typeof source.name === 'string'
          && source.name.trim().length > 0
          && typeof source.searchUrl === 'string'
          && /^https:\/\//i.test(source.searchUrl);
      }).slice(0, 10);
    }

    function saveCustomSources(list) {
      saveJson(CUSTOM_SOURCES_KEY, list.slice(0, 10));
    }

    function loadUrlGames() {
      var list = loadJson(URL_GAMES_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (item) {
        return item && typeof item.id === 'string' && typeof item.title === 'string';
      }).slice(0, 60);
    }

    function saveUrlGames(list) {
      saveJson(URL_GAMES_KEY, list.slice(0, 60));
    }

    function encodeCustomParam(sources) {
      if (!Array.isArray(sources) || sources.length === 0) return '';
      var text = JSON.stringify(sources.map(function (source) {
        return { id: source.id, name: source.name, searchUrl: source.searchUrl };
      }));
      var bytes = new TextEncoder().encode(text);
      var binary = '';
      for (var i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
      return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    function sourceLabel(source, customSources, t) {
      if (source === 'archive') return t('sources.archive');
      if (source === 'github') return t('sources.github');
      if (source === 'url') return t('sources.url');
      if (source === 'local') return t('source.local');
      if (typeof source === 'string' && source.indexOf('custom:') === 0) {
        var id = source.slice('custom:'.length);
        for (var i = 0; i < customSources.length; i += 1) {
          if (customSources[i].id === id) return customSources[i].name;
        }
        return t('sources.custom');
      }
      return t('sources.all');
    }

    function Emulator(canvas, romBytes, options) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d', { alpha: false });
      this.canvas.width = SCREEN_W;
      this.canvas.height = SCREEN_H;
      this.imageData = this.context.createImageData(SCREEN_W, SCREEN_H);
      this.pixels32 = new Uint32Array(this.imageData.data.buffer);
      this.frame32 = new Uint32Array(SCREEN_W * SCREEN_H);
      this.dirty = true;
      this.running = false;
      this.paused = true;
      this.speed = 1;
      this.fps = 0;
      this.frameCount = 0;
      this.fpsAt = 0;
      this.rafId = 0;
      this.lastTime = 0;
      this.accumulator = 0;
      this.pressedKeys = new Set();
      this.pressedGamepad = new Map();
      this.gamepadPressed = new Map();
      this.controls = loadControls();
      this.autoFire = Object.assign({ a: false, b: false }, this.controls.autoFire || {});
      this.fireHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.turboHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.autoHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.turboTick = 0;
      this.options = options || {};
      this.audio = new NesAudio(this.options.volume);
      this.audio.setMuted(!!this.options.muted);
      this.nes = null;
      this.onFps = this.options.onFps || function () {};
      this.onBatteryWrite = this.options.onBatteryWrite || function () {};
      this.onError = this.options.onError || function () {};
      this.boundKeyDown = this.handleKeyDown.bind(this);
      this.boundKeyUp = this.handleKeyUp.bind(this);
      this.boundBlur = this.releaseAll.bind(this);
      this.tick = this.tick.bind(this);
      this.load(romBytes);
    }

    Emulator.prototype.load = function (romBytes) {
      var jsnes = window.jsnes;
      if (!jsnes || !jsnes.NES) throw new Error('jsnes core unavailable');
      var self = this;
      // Create the AudioContext before the core so the emulator uses the
      // device's real sample rate instead of a guessed 44.1 kHz value.
      this.audio.ensure().catch(function () {});
      this.nes = new jsnes.NES({
        onFrame: function (buffer) {
          self.frame32.set(buffer);
          self.dirty = true;
        },
        onAudioSample: function (left, right) {
          self.audio.write(left, right);
        },
        onBatteryRamWrite: function () {
          self.onBatteryWrite();
        },
        sampleRate: this.audio.getSampleRate(),
      });
      this.nes.loadROM(romBytes);
    };

    Emulator.prototype.bindInput = function (element) {
      this.inputElement = element;
      if (!element) return;
      element.addEventListener('keydown', this.boundKeyDown);
      element.addEventListener('keyup', this.boundKeyUp);
      window.addEventListener('blur', this.boundBlur);
    };

    Emulator.prototype.unbindInput = function () {
      if (this.inputElement) {
        this.inputElement.removeEventListener('keydown', this.boundKeyDown);
        this.inputElement.removeEventListener('keyup', this.boundKeyUp);
        this.inputElement = null;
      }
      window.removeEventListener('blur', this.boundBlur);
    };

    Emulator.prototype.handleKeyDown = function (event) {
      var controls = this.controls.keyboard;
      var action = null;
      Object.keys(controls).forEach(function (key) {
        if (controls[key] === event.code) action = key;
      });
      if (action === null) {
        if (event.code === 'KeyP' && typeof this.options.onPauseToggle === 'function') {
          event.preventDefault();
          this.options.onPauseToggle();
        }
        return;
      }
      event.preventDefault();
      if (this.paused) return;
      if (this.pressedKeys.has(action)) return;
      this.pressedKeys.add(action);
      this.press(action);
    };

    Emulator.prototype.handleKeyUp = function (event) {
      var controls = this.controls.keyboard;
      var action = null;
      Object.keys(controls).forEach(function (key) {
        if (controls[key] === event.code) action = key;
      });
      if (action === null) return;
      event.preventDefault();
      this.pressedKeys.delete(action);
      this.release(action);
    };

    // Apply A/B lines directly. jsnes' own Turbo buttons are intentionally not
    // used here: the controller read is frame-based and games differ in how
    // they sample it. Driving the two button bits from one frame-synced phase
    // makes hold-to-turbo deterministic for keyboard, gamepad, auto-fire, and
    // every mapper.
    Emulator.prototype.applyFireState = function () {
      if (this.nes === null) return;
      var on = Math.floor(this.turboTick / 2) % 2 === 0;
      for (var player = 1; player <= 2; player += 1) {
        var controller = this.nes.controllers[player];
        if (!controller) continue;
        var fire = this.fireHeld[player];
        var turbo = this.turboHeld[player];
        var auto = this.autoHeld[player];
        var turboA = turbo.a || auto.a;
        var turboB = turbo.b || auto.b;
        controller.state[0] = turboA ? (on ? 0x41 : 0x40) : fire.a ? 0x41 : 0x40;
        controller.state[1] = turboB ? (on ? 0x41 : 0x40) : fire.b ? 0x41 : 0x40;
      }
      this.turboTick += 1;
    };

    Emulator.prototype.pressFor = function (player, action) {
      if (this.nes === null || BUTTONS[action] === undefined) return;
      var held = this.fireHeld[player];
      if (action === 'turboA') {
        this.turboHeld[player].a = true;
        this.applyFireState();
        return;
      }
      if (action === 'turboB') {
        this.turboHeld[player].b = true;
        this.applyFireState();
        return;
      }
      if (action === 'a' || action === 'b') {
        if (this.autoFire[action]) this.autoHeld[player][action] = true;
        else held[action] = true;
        this.applyFireState();
        return;
      }
      this.nes.buttonDown(player, BUTTONS[action]);
    };

    Emulator.prototype.releaseFor = function (player, action) {
      if (this.nes === null || BUTTONS[action] === undefined) return;
      if (action === 'turboA') {
        this.turboHeld[player].a = false;
        this.applyFireState();
        return;
      }
      if (action === 'turboB') {
        this.turboHeld[player].b = false;
        this.applyFireState();
        return;
      }
      if (action === 'a' || action === 'b') {
        this.autoHeld[player][action] = false;
        this.fireHeld[player][action] = false;
        this.applyFireState();
        return;
      }
      this.nes.buttonUp(player, BUTTONS[action]);
    };

    Emulator.prototype.press = function (action) {
      this.pressFor(1, action);
    };

    Emulator.prototype.release = function (action) {
      this.releaseFor(1, action);
    };

    Emulator.prototype.releaseAll = function () {
      var self = this;
      this.pressedKeys.forEach(function (action) {
        self.releaseFor(1, action);
      });
      this.pressedKeys.clear();
      this.gamepadPressed.forEach(function (actions, index) {
        var player = index === 0 ? 1 : 2;
        actions.forEach(function (action) {
          self.releaseFor(player, action);
        });
      });
      this.gamepadPressed.clear();
      // A key or pad event can disappear without its matching release (blur,
      // pause, disconnect). Clear every A/B source and force both lines low.
      for (var player = 1; player <= 2; player += 1) {
        this.fireHeld[player].a = false;
        this.fireHeld[player].b = false;
        this.turboHeld[player].a = false;
        this.turboHeld[player].b = false;
        this.autoHeld[player].a = false;
        this.autoHeld[player].b = false;
      }
      this.turboTick = 0;
      if (this.nes !== null) {
        for (var controllerId = 1; controllerId <= 2; controllerId += 1) {
          var controller = this.nes.controllers[controllerId];
          if (!controller) continue;
          controller.state[0] = 0x40;
          controller.state[1] = 0x40;
        }
      }
    };

    Emulator.prototype.pollGamepads = function () {
      if (typeof navigator.getGamepads !== 'function') return;
      var pads = navigator.getGamepads();
      var self = this;
      var active = new Map();
      for (var index = 0; index < pads.length && index < 4; index += 1) {
        var pad = pads[index];
        if (!pad) continue;
        var player = index === 0 ? 1 : 2;
        var map = this.controls.gamepad;
        var next = new Set();
        Object.keys(map).forEach(function (action) {
          var buttonIndex = map[action];
          var button = pad.buttons[buttonIndex];
          if (button && button.pressed) next.add(action);
        });
        var axes = pad.axes || [];
        if (axes[0] < -0.5) next.add('left');
        if (axes[0] > 0.5) next.add('right');
        if (axes[1] < -0.5) next.add('up');
        if (axes[1] > 0.5) next.add('down');
        var previous = this.gamepadPressed.get(index) || new Set();
        next.forEach(function (action) {
          if (!previous.has(action) && !self.paused) {
            self.pressFor(player, action);
          }
        });
        previous.forEach(function (action) {
          if (!next.has(action)) {
            self.releaseFor(player, action);
          }
        });
        active.set(index, next);
        this.gamepadPressed.set(index, next);
      }
      this.gamepadPressed.forEach(function (value, index) {
        if (!active.has(index)) {
          var player = index === 0 ? 1 : 2;
          value.forEach(function (action) {
            self.releaseFor(player, action);
          });
          self.gamepadPressed.delete(index);
        }
      });
    };

    Emulator.prototype.tick = function (time) {
      if (!this.running) return;
      var delta = time - this.lastTime;
      if (delta < 0 || delta > 250) delta = FRAME_MS;
      this.lastTime = time;
      this.accumulator += delta;
      var frames = 0;
      while (this.accumulator >= FRAME_MS && frames < 4) {
        this.accumulator -= FRAME_MS;
        frames += 1;
        for (var step = 0; step < this.speed; step += 1) {
          try {
            this.applyFireState();
            this.nes.frame();
          } catch (error) {
            this.stop();
            this.onError(error);
            return;
          }
        }
        this.audio.flush();
        this.frameCount += this.speed;
      }
      if (frames > 0) this.draw();
      this.pollGamepads();
      if (time - this.fpsAt >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (time - this.fpsAt));
        this.frameCount = 0;
        this.fpsAt = time;
        this.onFps(this.fps);
      }
      this.rafId = window.requestAnimationFrame(this.tick);
    };

    Emulator.prototype.draw = function () {
      if (!this.dirty) return;
      this.dirty = false;
      var frame = this.frame32;
      var pixels = this.pixels32;
      for (var i = 0; i < frame.length; i += 1) {
        pixels[i] = 0xff000000 | frame[i];
      }
      this.context.putImageData(this.imageData, 0, 0);
    };

    Emulator.prototype.start = function () {
      if (this.running) return;
      this.running = true;
      this.paused = false;
      this.audio.resume();
      this.lastTime = performance.now();
      this.fpsAt = this.lastTime;
      this.accumulator = 0;
      this.applyFireState();
      this.rafId = window.requestAnimationFrame(this.tick);
    };

    Emulator.prototype.stop = function () {
      this.running = false;
      this.paused = true;
      if (this.rafId) window.cancelAnimationFrame(this.rafId);
      this.rafId = 0;
      this.releaseAll();
      this.audio.flush();
    };

    Emulator.prototype.pause = function () {
      this.stop();
    };

    Emulator.prototype.resume = function () {
      this.audio.resume();
      this.start();
    };

    Emulator.prototype.togglePause = function () {
      if (this.paused) this.resume();
      else this.pause();
      return this.paused;
    };

    Emulator.prototype.setSpeed = function (speed) {
      this.speed = speed;
      this.audio.setMuted(speed > 1 || !!this.options.muted);
    };

    Emulator.prototype.setVolume = function (volume) {
      this.audio.setVolume(volume);
    };

    Emulator.prototype.setMuted = function (muted) {
      this.audio.setMuted(muted);
    };

    Emulator.prototype.setControls = function (controls) {
      this.controls = controls || loadControls();
      this.autoFire = Object.assign({ a: false, b: false }, this.controls.autoFire || {});
      this.releaseAll();
    };

    Emulator.prototype.reset = function () {
      this.nes.reset();
      this.releaseAll();
      this.dirty = true;
      this.draw();
    };

    Emulator.prototype.snapshot = function () {
      return this.nes.toJSON();
    };

    Emulator.prototype.restore = function (state) {
      this.nes.fromJSON(state);
      this.releaseAll();
      this.dirty = true;
      this.draw();
    };

    Emulator.prototype.setCheats = function (codes) {
      this.nes.gameGenie.removeAllCodes();
      for (var i = 0; i < codes.length; i += 1) {
        this.nes.gameGenie.addCode(codes[i]);
      }
    };

    Emulator.prototype.screenshot = function () {
      return this.canvas.toDataURL('image/png');
    };

    Emulator.prototype.thumbnail = function () {
      var thumb = document.createElement('canvas');
      thumb.width = 160;
      thumb.height = 120;
      var ctx = thumb.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(this.canvas, 0, 0, 160, 120);
      return thumb.toDataURL('image/jpeg', 0.65);
    };

    Emulator.prototype.fit = function () {
      // CSS owns the display size; the backing store stays 256x240.
    };

    Emulator.prototype.destroy = function () {
      this.stop();
      this.unbindInput();
      this.audio.destroy();
      this.nes = null;
    };

    // ------------------------------------------------------------- components
    function Cover(props) {
      var failedState = useState(false);
      var failed = failedState[0];
      var setFailed = failedState[1];
      useEffect(function () {
        setFailed(false);
      }, [props.url]);
      if (!props.url || failed) {
        return h(
          'div',
          {
            className: cx('dfg-cover', 'dfg-cover-fallback', props.className),
            style: { background: gradientFor(props.title) },
            'aria-hidden': true,
          },
          h('span', { className: 'dfg-cover-initials' }, initials(props.title)),
          h('span', { className: 'dfg-cover-glyph' }, 'FC'),
        );
      }
      return h(
        'div',
        { className: cx('dfg-cover', props.className) },
        h('img', {
          className: 'dfg-cover-art',
          src: props.url,
          alt: '',
          loading: 'lazy',
          referrerPolicy: 'no-referrer',
          onError: function () {
            setFailed(true);
          },
        }),
      );
    }

    function dedupeKey(title) {
      return String(title || '')
        .toLowerCase()
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\([^)]*\)/g, ' ')
        .replace(/[^a-z0-9\u4e00-\u9fff]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    async function searchAcrossSources(api, query, page, selected, customSources, signal, t) {
      var targets;
      if (selected === 'archive' || selected === 'github') {
        targets = [selected];
      } else if (selected.indexOf('custom:') === 0) {
        targets = [selected];
      } else {
        targets = ['archive', 'github'].concat(customSources.map(function (source) {
          return 'custom:' + source.id;
        }));
      }
      var custom = encodeCustomParam(customSources);
      var settled = await Promise.allSettled(targets.map(function (source) {
        return api.search(query, page, source, custom, signal);
      }));
      var items = [];
      var warnings = [];
      var hasMore = false;
      var total = 0;
      var filtered = false;
      var expandedQuery;
      for (var i = 0; i < settled.length; i += 1) {
        var outcome = settled[i];
        var source = targets[i];
        if (outcome.status === 'rejected') {
          if (outcome.reason && outcome.reason.name === 'AbortError') continue;
          warnings.push({
            source: sourceLabel(source, customSources, t),
            message: String(outcome.reason && outcome.reason.message ? outcome.reason.message : outcome.reason),
          });
          continue;
        }
        var payload = outcome.value;
        if (payload && Array.isArray(payload.items)) items = items.concat(payload.items);
        if (payload && payload.hasMore) hasMore = true;
        if (payload && Number.isFinite(Number(payload.total))) total += Number(payload.total);
        if (payload && payload.filtered) filtered = true;
        if (payload && payload.expandedQuery) expandedQuery = payload.expandedQuery;
      }
      if (items.length === 0 && warnings.length === targets.length) {
        var failure = new Error(warnings[0].message);
        failure.code = 'ALL_SOURCES_FAILED';
        throw failure;
      }
      var seen = new Set();
      var unique = [];
      for (var j = 0; j < items.length; j += 1) {
        var key = dedupeKey(items[j].title);
        if (seen.has(key)) continue;
        seen.add(key);
        unique.push(items[j]);
      }
      return {
        ok: true,
        source: selected,
        query: query,
        page: page,
        total: total,
        hasMore: hasMore,
        filtered: filtered,
        expandedQuery: expandedQuery,
        warnings: warnings,
        items: unique.slice(0, 36),
      };
    }

    function GameCard(props) {
      var game = props.game;
      var meta = [];
      if (game.year) meta.push(tFormat(props.t, 'common.year', { year: game.year }));
      if (game.playCount) meta.push(tFormat(props.t, 'recent.plays', { count: game.playCount }));
      var sourceName = game.source === 'github'
        ? props.t('sources.github')
        : game.source === 'archive'
          ? props.t('sources.archive')
          : game.source === 'url'
            ? props.t('sources.url')
            : game.sourceName
              || (game.source === 'custom'
                ? props.t('sources.custom')
                : game.source === 'local'
                  ? props.t('source.local')
                  : props.t('sources.all'));
      return h(
        'div',
        { className: 'dfg-card' },
        h('button', {
          type: 'button',
          className: 'dfg-card-main',
          'aria-label': game.title,
          onClick: function () { props.onView(game); },
        },
          h(Cover, { url: game.coverUrl, title: game.title }),
          h('span', { className: 'dfg-card-body' },
            h('span', { className: 'dfg-card-source' }, sourceName),
            h('span', { className: 'dfg-card-title' }, game.title),
            h('span', { className: 'dfg-card-meta' }, meta.join(' · ')),
            props.recent && h('span', { className: 'dfg-card-time' }, relativeTime(game.lastPlayedAt, props.locale)),
          ),
        ),
        h('div', { className: 'dfg-card-actions' },
          props.cached
            ? [
                h('button', {
                  key: 'continue',
                  type: 'button',
                  className: 'dfg-card-action dfg-card-action-primary',
                  onClick: function () { props.onContinue(game, props.cachedFile); },
                }, props.t('card.continue')),
                h('button', {
                  key: 'restart',
                  type: 'button',
                  className: 'dfg-card-action',
                  onClick: function () { props.onRestart(game, props.cachedFile); },
                }, props.t('card.restart')),
                h('button', {
                  key: 'delete',
                  type: 'button',
                  className: 'dfg-card-delete',
                  title: props.t('downloads.delete'),
                  'aria-label': props.t('downloads.delete'),
                  onClick: function () { props.onDelete(game); },
                },
                  h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
                    h('path', { d: 'M2.5 4.5h11M6 4.5V2.8h4v1.7M4 4.5l.7 8.2h6.6l.7-8.2M6.3 7v3.2M9.7 7v3.2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
                  ),
                ),
              ]
            : [
                h('button', {
                  key: 'view',
                  type: 'button',
                  className: 'dfg-card-action',
                  onClick: function () { props.onView(game); },
                }, props.t('card.view')),
                h('button', {
                  key: 'download',
                  type: 'button',
                  className: 'dfg-card-action dfg-card-action-primary',
                  onClick: function () { props.onDownload(game); },
                }, props.t('card.download')),
              ],
        ),
      );
    }

    function tFormat(t, key, values) {
      var text = t(key);
      Object.keys(values || {}).forEach(function (name) {
        text = text.split('{' + name + '}').join(String(values[name]));
      });
      return text;
    }

    function SearchBar(props) {
      var inputRef = useRef(null);
      return h(
        'div',
        { className: 'dfg-search' },
        h('span', { className: 'dfg-search-icon', 'aria-hidden': true },
          h('svg', {
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: 'none',
          },
            h('circle', { cx: 6.6, cy: 6.6, r: 4.4, stroke: 'currentColor', strokeWidth: 2 }),
            h('path', { d: 'M10 10l4 4', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'square' }),
          ),
        ),
        h('input', {
          ref: inputRef,
          type: 'search',
          value: props.value,
          placeholder: props.t('search.placeholder'),
          'aria-label': props.t('search.placeholder'),
          spellCheck: false,
          autoComplete: 'off',
          onChange: function (event) {
            props.onChange(event.target.value);
          },
          onKeyDown: function (event) {
            if (event.key === 'Enter') {
              event.preventDefault();
              if (typeof props.onSubmit === 'function') props.onSubmit();
            }
          },
        }),
        props.loading && h('span', { className: 'dfg-spinner dfg-spinner-small', 'aria-hidden': true }),
        props.value.length > 0 &&
          h(
            'button',
            {
              type: 'button',
              className: 'dfg-search-clear',
              'aria-label': props.t('search.clear'),
              onClick: function () {
                props.onChange('');
                if (inputRef.current) inputRef.current.focus();
              },
            },
            '×',
          ),
      );
    }

    function SkeletonGrid() {
      var cards = [];
      for (var i = 0; i < 8; i += 1) {
        cards.push(h('div', { key: i, className: 'dfg-skeleton' },
          h('div', { className: 'dfg-skeleton-cover' }),
          h('div', { className: 'dfg-skeleton-line' }),
          h('div', { className: 'dfg-skeleton-line short' }),
        ));
      }
      return h('div', { className: 'dfg-grid' }, cards);
    }

    function LibraryView(props) {
      var t = props.t;
      var [query, setQuery] = useState('');
      var [result, setResult] = useState(null);
      var [loading, setLoading] = useState(false);
      var [loadingMore, setLoadingMore] = useState(false);
      var [error, setError] = useState(null);
      var [noticeVisible, setNoticeVisible] = useState(function () {
        return loadJson(NOTICE_KEY, false) !== true;
      });
      var [importError, setImportError] = useState(null);
      var [retryTick, setRetryTick] = useState(0);
      var [customSources, setCustomSources] = useState(loadCustomSources);
      var [selectedSource, setSelectedSource] = useState(function () {
        var saved = loadJson(SELECTED_SOURCE_KEY, 'all');
        return typeof saved === 'string' && saved !== '' ? saved : 'all';
      });
      var [sourceDialog, setSourceDialog] = useState(false);
      var [urlGames, setUrlGames] = useState(loadUrlGames);
      var [urlDialog, setUrlDialog] = useState(false);
      var [cachedMap, setCachedMap] = useState({});
      var [detailsGame, setDetailsGame] = useState(null);
      var [deleteGame, setDeleteGame] = useState(null);
      var [downloadedOnly, setDownloadedOnly] = useState(false);
      var [deleteNotice, setDeleteNotice] = useState(false);
      var seqRef = useRef(0);
      var abortRef = useRef(null);
      var fileRef = useRef(null);
      var coverFetchedRef = useRef(new Set());

      useEffect(function () {
        return function () {
          if (abortRef.current) abortRef.current.abort();
        };
      }, []);

      useEffect(function () {
        if (!deleteNotice) return undefined;
        var timer = window.setTimeout(function () { setDeleteNotice(false); }, 2200);
        return function () { window.clearTimeout(timer); };
      }, [deleteNotice]);

      useEffect(function () {
        var alive = true;
        idbAll('roms').then(function (rows) {
          if (!alive) return;
          var map = {};
          (rows || []).forEach(function (row) {
            var key = String(row.key || '');
            var meta = row.meta || {};
            var id = meta.id || key.split('::')[0];
            var file = meta.file || key.split('::')[1] || '';
            if (!id) return;
            if (!map[id]) map[id] = [];
            map[id].push({ file: file, key: key });
          });
          setCachedMap(map);
        }).catch(function () {});
        return function () { alive = false; };
      }, []);

      var cachedInfoFor = function (game) {
        var rows = cachedMap[game.id] || [];
        if (rows.length === 0) return { cached: false, file: null };
        var wanted = game.file || game.fileName || null;
        if (wanted) {
          for (var i = 0; i < rows.length; i += 1) {
            if (rows[i].file === wanted) return { cached: true, file: rows[i].file };
          }
        }
        return { cached: true, file: rows[0].file };
      };

      var playGame = function (game, options) {
        setDetailsGame(null);
        props.onOpenGame(game, options || {});
      };

      var deleteDownload = async function (game) {
        var prefix = String(game.id) + '::';
        try {
          var roms = await idbAll('roms');
          await Promise.all((roms || []).filter(function (row) {
            return row && row.key && String(row.key).indexOf(prefix) === 0;
          }).map(function (row) { return idbDelete('roms', row.key); }));
          var states = await idbAll('states');
          await Promise.all((states || []).filter(function (row) {
            return row && row.gameKey && String(row.gameKey).indexOf(prefix) === 0;
          }).map(function (row) { return idbDelete('states', row.key); }));
          var list = readRecent().filter(function (entry) { return entry.id !== String(game.id); });
          saveJson(RECENT_KEY, list);
          emitRecent();
          setCachedMap(function (previous) {
            var next = Object.assign({}, previous);
            delete next[game.id];
            return next;
          });
          setDeleteGame(null);
          setDeleteNotice(true);
          if (typeof props.onRecentChanged === 'function') props.onRecentChanged();
        } catch (cause) {
          setDeleteGame(null);
        }
      };
      useEffect(function () {
        var q = String(query || '').trim();
        if (q.length === 0) {
          if (abortRef.current) abortRef.current.abort();
          abortRef.current = null;
          setLoading(false);
          setError(null);
          setResult(null);
          return;
        }
        if (abortRef.current) abortRef.current.abort();
        var controller = new AbortController();
        abortRef.current = controller;
        var seq = seqRef.current + 1;
        seqRef.current = seq;
        setLoading(true);
        setError(null);
        var timer = window.setTimeout(function () {
          searchAcrossSources(props.api, q, 1, selectedSource, customSources, controller.signal, t)
            .then(function (payload) {
              if (seq !== seqRef.current) return;
              setResult(payload);
              setLoading(false);
            })
            .catch(function (cause) {
              if (controller.signal.aborted) return;
              if (seq !== seqRef.current) return;
              setLoading(false);
              setError(cause);
            });
        }, 320);
        return function () {
          window.clearTimeout(timer);
          controller.abort();
        };
      }, [query, props.api, retryTick, selectedSource, customSources]);

      // Fill in covers after the result grid has painted. Metadata resolution is
      // slower than search, so it runs in the background and only touches the
      // cards whose cover is still missing.
      useEffect(function () {
        if (result === null || !Array.isArray(result.items)) return undefined;
        var cancelled = false;
        var queue = result.items
          .filter(function (item) {
            return item.source === 'archive' && !item.coverUrl && !coverFetchedRef.current.has(item.id);
          })
          .slice(0, 12);
        if (queue.length === 0) return undefined;
        var run = async function () {
          for (;;) {
            if (cancelled || queue.length === 0) return;
            var item = queue.shift();
            coverFetchedRef.current.add(item.id);
            try {
              var resolved = await props.api.resolve(item.id, item.source);
              if (cancelled) return;
              if (resolved && resolved.coverUrl) {
                setResult(function (previous) {
                  if (previous === null) return previous;
                  var items = previous.items.map(function (candidate) {
                    return candidate.id === item.id
                      ? Object.assign({}, candidate, { coverUrl: resolved.coverUrl })
                      : candidate;
                  });
                  return Object.assign({}, previous, { items: items });
                });
              }
            } catch (e) {
              // A missing cover is cosmetic; leave the placeholder.
            }
          }
        };
        Promise.all([run(), run(), run()]);
        return function () {
          cancelled = true;
        };
      }, [result && result.query, result && result.page, props.api]);

      var loadMore = useCallback(function () {
        if (result === null || loadingMore) return;
        setLoadingMore(true);
        var seq = seqRef.current;
        searchAcrossSources(props.api, result.query, result.page + 1, selectedSource, customSources, undefined, t)
          .then(function (payload) {
            if (seq !== seqRef.current) return;
            setResult(function (previous) {
              if (previous === null) return payload;
              var seen = new Set(previous.items.map(function (item) { return item.id; }));
              var merged = previous.items.concat(payload.items.filter(function (item) { return !seen.has(item.id); }));
              return Object.assign({}, payload, { items: merged });
            });
            setLoadingMore(false);
          })
          .catch(function () {
            setLoadingMore(false);
          });
      }, [result, loadingMore, props.api, selectedSource, customSources, t]);

      var dismissNotice = function () {
        setNoticeVisible(false);
        saveJson(NOTICE_KEY, true);
      };

      var onImportFile = function (event) {
        var input = event.target;
        var file = input.files && input.files[0];
        input.value = '';
        if (!file) return;
        setImportError(null);
        if (!/\.nes$/i.test(file.name)) {
          setImportError(t('import.error'));
          return;
        }
        var reader = new FileReader();
        reader.onerror = function () {
          setImportError(t('import.error'));
        };
        reader.onload = function () {
          var buffer = reader.result;
          if (!(buffer instanceof ArrayBuffer) || buffer.byteLength < 16 || buffer.byteLength > MAX_ROM_BYTES) {
            setImportError(t('import.error'));
            return;
          }
          var head = new Uint8Array(buffer, 0, 4);
          if (head[0] !== 0x4e || head[1] !== 0x45 || head[2] !== 0x53 || head[3] !== 0x1a) {
            setImportError(t('import.error'));
            return;
          }
          props.onImport({
            id: 'local-' + Date.now().toString(36),
            source: 'local',
            title: file.name.replace(/\.nes$/i, ''),
            coverUrl: null,
            file: file.name,
            bytes: new Uint8Array(buffer),
          });
        };
        reader.readAsArrayBuffer(file);
      };

      useEffect(function () {
        if (selectedSource === 'all' || selectedSource === 'archive' || selectedSource === 'github') return;
        if (selectedSource.indexOf('custom:') === 0) {
          var id = selectedSource.slice('custom:'.length);
          var exists = customSources.some(function (source) { return source.id === id; });
          if (!exists) setSelectedSource('all');
        } else {
          setSelectedSource('all');
        }
      }, [selectedSource, customSources]);

      var changeSource = function (value) {
        setSelectedSource(value);
        saveJson(SELECTED_SOURCE_KEY, value);
      };

      var onSourcesChange = function (next) {
        setCustomSources(next);
        saveCustomSources(next);
        if (selectedSource.indexOf('custom:') === 0) {
          var id = selectedSource.slice('custom:'.length);
          var exists = next.some(function (source) { return source.id === id; });
          if (!exists) changeSource('all');
        }
      };

      var addUrlGame = function (item) {
        var next = [item].concat(urlGames.filter(function (entry) { return entry.id !== item.id; })).slice(0, 60);
        setUrlGames(next);
        saveUrlGames(next);
      };

      var removeUrlGame = function (id) {
        var next = urlGames.filter(function (entry) { return entry.id !== id; });
        setUrlGames(next);
        saveUrlGames(next);
      };

      var sourceOptions = BUILTIN_SOURCES.map(function (entry) {
        return { id: entry.id, label: t(entry.labelKey) };
      }).concat(customSources.map(function (entry) {
        return { id: 'custom:' + entry.id, label: entry.name };
      }));

      var cardProps = function (game, recent) {
        var info = cachedInfoFor(game);
        return {
          key: game.key || game.id,
          game: game,
          recent: recent,
          t: t,
          locale: props.locale,
          cached: info.cached,
          cachedFile: info.file,
          onView: function (target) { setDetailsGame(target); },
          onDownload: function (target) { playGame(target, {}); },
          onContinue: function (target, file) { playGame(target, { file: file }); },
          onRestart: function (target, file) { playGame(target, { file: file, freshStart: true }); },
          onDelete: function (target) { setDeleteGame(target); },
        };
      };
      var searchMode = String(query || '').trim().length > 0;
      var allRecent = Array.isArray(props.recent) ? props.recent : [];
      var cachedRecent = allRecent.filter(function (game) { return cachedInfoFor(game).cached; });
      var recent = (downloadedOnly ? cachedRecent : allRecent).slice(0, downloadedOnly ? 24 : 12);
      var cachedCount = Object.keys(cachedMap).length;

      return h(
        'div',
        { className: 'dfg-library' },
        props.showHero &&
          h('section', { className: 'dfg-hero' },
            h('div', { className: 'dfg-hero-copy' },
              h('span', { className: 'dfg-hero-kicker' }, '1983 · FAMILY COMPUTER'),
              h('h1', null, 'FAMICOM'),
              h('p', null, t('page.subtitle')),
              h('div', { className: 'dfg-hero-tags' },
                h('span', null, '8-BIT'),
                h('span', null, 'INSERT COIN'),
                h('span', null, '60 FPS'),
              ),
            ),
            h('div', { className: 'dfg-hero-badge', 'aria-hidden': true },
              h('span', null, 'FC'),
              h('small', null, '1983'),
            ),
          ),
        h(
          'div',
          { className: 'dfg-marquee', 'aria-hidden': true },
          h('span', { className: 'dfg-marquee-title' }, 'FAMICOM'),
          h('span', { className: 'dfg-marquee-sep' }, '◆'),
          h('span', { className: 'dfg-marquee-sub' }, '8-BIT GAME LIBRARY'),
          h('span', { className: 'dfg-marquee-spacer' }),
          h('span', { className: 'dfg-marquee-year' }, '1983'),
        ),
        h(SearchBar, {
          value: query,
          t: t,
          loading: loading,
          onChange: setQuery,
          onSubmit: function () {
            setRetryTick(function (value) { return value + 1; });
          },
        }),
        h('div', { className: 'dfg-sourcebar' },
          h('label', null,
            h('span', null, t('sources.label')),
            h('select', {
              value: selectedSource,
              'aria-label': t('sources.label'),
              onChange: function (event) { changeSource(event.target.value); },
            },
              sourceOptions.map(function (entry) {
                return h('option', { key: entry.id, value: entry.id }, entry.label);
              }),
            ),
          ),
          h('div', { className: 'dfg-source-actions' },
            h('button', {
              type: 'button',
              className: 'dfg-source-manage',
              onClick: function () { setSourceDialog(true); },
            }, t('sources.manage')),
            h('button', {
              type: 'button',
              className: 'dfg-source-add',
              onClick: function () { setUrlDialog(true); },
            }, t('urlGames.add')),
          ),
        ),
        noticeVisible &&
          h('div', { className: 'dfg-notice' },
            h('span', null, t('notice.legal')),
            h('button', { type: 'button', onClick: dismissNotice }, t('notice.dismiss')),
          ),
        importError && h('div', { className: 'dfg-inline-error', role: 'alert' }, importError),
        result && result.warnings && result.warnings.length > 0 &&
          h('div', { className: 'dfg-source-warning' },
            tFormat(t, 'sources.partial', {
              sources: result.warnings.map(function (warning) { return warning.source; }).join(', '),
            }),
          ),
        urlGames.length > 0 &&
          h('section', { className: 'dfg-section dfg-url-games' },
            h('div', { className: 'dfg-section-head' },
              h('h2', null, t('urlGames.title')),
              h('span', null, String(urlGames.length)),
            ),
            h('div', { className: 'dfg-grid' },
              urlGames.map(function (game) {
                return h(GameCard, cardProps(game, false));
              }),
            ),
          ),
        searchMode
          ? h(
              'section',
              { className: 'dfg-section' },
              result !== null &&
                h('div', { className: 'dfg-section-head' },
                  h('h2', null, t('search.results')),
                  h('span', null, tFormat(t, 'search.resultCount', { count: result.items.length })),
                ),
              result !== null && result.filtered &&
                h('div', { className: 'dfg-expanded' }, t('search.playableOnly')),
              result !== null &&
                result.expandedQuery &&
                result.expandedQuery.toLowerCase() !== result.query.toLowerCase() &&
                h('div', { className: 'dfg-expanded' }, tFormat(t, 'search.expanded', { query: result.expandedQuery })),
              loading && h(SkeletonGrid),
              error && h('div', { className: 'dfg-error', role: 'alert' },
                h('div', { className: 'dfg-error-title' }, t('search.error')),
                h('div', { className: 'dfg-error-text' }, error.code === 'NETWORK' ? t('error.network') : String(error.message || '')),
                h('button', { type: 'button', className: 'dfg-button', onClick: function () { setRetryTick(function (value) { return value + 1; }); } }, t('search.retry')),
              ),
              !loading && !error && result !== null && result.items.length === 0 &&
                h('div', { className: 'dfg-empty' },
                  h('p', null, t('search.empty')),
                  h('div', { className: 'dfg-chips' },
                    props.suggestions.map(function (suggestion) {
                      return h('button', { key: suggestion, type: 'button', className: 'dfg-chip', onClick: function () { setQuery(suggestion); } }, suggestion);
                    }),
                  ),
                ),
              !loading && !error && result !== null && result.items.length > 0 &&
                h('div', { className: 'dfg-grid' },
                  result.items.map(function (game) {
                    return h(GameCard, cardProps(game, false));
                  }),
                ),
              !loading && !error && result !== null && result.hasMore &&
                h('div', { className: 'dfg-more' },
                  h('button', { type: 'button', className: 'dfg-button', disabled: loadingMore, onClick: loadMore }, loadingMore ? t('search.searching') : t('search.loadMore')),
                ),
            )
          : h(
              'div',
              null,
              h('section', { className: 'dfg-section' },
                h('div', { className: 'dfg-section-head' },
                  h('h2', null, downloadedOnly ? t('downloads.title') : t('recent.title')),
                  h('div', { className: 'dfg-section-right' },
                    (cachedCount > 0 || downloadedOnly) && h('div', { className: 'dfg-view-toggle' },
                      h('button', {
                        type: 'button',
                        className: cx('dfg-view-toggle-btn', !downloadedOnly && 'dfg-view-toggle-active'),
                        onClick: function () { setDownloadedOnly(false); },
                      }, t('downloads.all')),
                      h('button', {
                        type: 'button',
                        className: cx('dfg-view-toggle-btn', downloadedOnly && 'dfg-view-toggle-active'),
                        onClick: function () { setDownloadedOnly(true); },
                      }, t('downloads.title') + (cachedCount > 0 ? ' ' + cachedCount : '')),
                    ),
                    !downloadedOnly && recent.length > 0 && h('span', null, relativeTime(recent[0].lastPlayedAt, props.locale)),
                  ),
                ),
                recent.length === 0
                  ? h('div', { className: 'dfg-empty dfg-empty-recent' },
                      h('p', null, downloadedOnly ? t('downloads.empty') : t('recent.empty')),
                      h('button', { type: 'button', className: 'dfg-button', onClick: function () { if (downloadedOnly) setDownloadedOnly(false); else if (fileRef.current) fileRef.current.click(); } }, downloadedOnly ? t('downloads.all') : t('import.button')),
                    )
                  : h('div', { className: 'dfg-grid' },
                      recent.map(function (game) {
                        return h(GameCard, cardProps(game, true));
                      }),
                    ),
              ),
              h('section', { className: 'dfg-section' },
                h('div', { className: 'dfg-section-head' }, h('h2', null, t('suggestions.title'))),
                h('div', { className: 'dfg-chips' },
                  props.suggestions.map(function (suggestion) {
                    return h('button', { key: suggestion, type: 'button', className: 'dfg-chip', onClick: function () { setQuery(suggestion); } }, suggestion);
                  }),
                ),
              ),
              h('section', { className: 'dfg-section dfg-import-section' },
                h('div', null,
                  h('h2', null, t('import.button')),
                  h('p', { className: 'dfg-muted' }, t('import.hint')),
                ),
                h('button', { type: 'button', className: 'dfg-button', onClick: function () { if (fileRef.current) fileRef.current.click(); } }, t('import.button')),
              ),
            ),
        h('input', {
          ref: fileRef,
          type: 'file',
          accept: '.nes',
          className: 'dfg-hidden',
          onChange: onImportFile,
        }),
        h('footer', { className: 'dfg-footer' },
          h('span', null, t('footer.source')),
          h('span', { className: 'dfg-footer-sep' }, '·'),
          h('span', null, t('footer.covers')),
        ),
        sourceDialog && h(SourceDialog, {
          t: t,
          sources: customSources,
          onChange: onSourcesChange,
          onClose: function () { setSourceDialog(false); },
        }),
        urlDialog && h(AddUrlDialog, {
          t: t,
          api: props.api,
          games: urlGames,
          onAdd: function (item) {
            addUrlGame(item);
            setUrlDialog(false);
          },
          onRemove: removeUrlGame,
          onClose: function () { setUrlDialog(false); },
        }),
        detailsGame && h(GameDetailsDialog, {
          key: detailsGame.id,
          t: t,
          game: detailsGame,
          api: props.api,
          cachedInfo: cachedInfoFor(detailsGame),
          onPlay: playGame,
          onClose: function () { setDetailsGame(null); },
        }),
        deleteGame && h(DeleteDownloadDialog, {
          key: deleteGame.id,
          t: t,
          game: deleteGame,
          onConfirm: deleteDownload,
          onClose: function () { setDeleteGame(null); },
        }),
        deleteNotice && h('div', { className: 'dfg-toast', role: 'status' }, t('downloads.deleted')),
      );
    }

    function Modal(props) {
      var panelRef = useRef(null);
      useEffect(function () {
        var onKey = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            props.onClose();
          }
        };
        document.addEventListener('keydown', onKey, true);
        var focusable = panelRef.current ? panelRef.current.querySelector('button, input, textarea, select') : null;
        if (focusable && typeof focusable.focus === 'function') focusable.focus();
        return function () {
          document.removeEventListener('keydown', onKey, true);
        };
      }, [props.onClose]);
      return h(
        'div',
        {
          className: 'dfg-modal-backdrop',
          role: 'presentation',
          onMouseDown: function (event) {
            if (event.target === event.currentTarget) props.onClose();
          },
        },
        h(
          'div',
          {
            ref: panelRef,
            className: cx('dfg-modal', props.wide && 'dfg-modal-wide'),
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': props.title,
          },
          h('div', { className: 'dfg-modal-head' },
            h('h2', null, props.title),
            h('button', { type: 'button', className: 'dfg-modal-close', 'aria-label': props.t('common.close'), onClick: props.onClose }, '×'),
          ),
          h('div', { className: 'dfg-modal-body' }, props.children),
          props.footer && h('div', { className: 'dfg-modal-foot' }, props.footer),
        ),
      );
    }

    function SourceDialog(props) {
      var t = props.t;
      var nameState = useState('');
      var name = nameState[0];
      var setName = nameState[1];
      var urlState = useState('');
      var url = urlState[0];
      var setUrl = urlState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];

      var add = function () {
        var sourceName = name.trim();
        var sourceUrl = url.trim();
        if (sourceName === '') {
          setError(t('sources.invalidName'));
          return;
        }
        var parsed;
        try {
          parsed = new URL(sourceUrl);
        } catch {
          parsed = null;
        }
        if (parsed === null || parsed.protocol !== 'https:') {
          setError(t('sources.invalidUrl'));
          return;
        }
        var id = 'custom-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
        props.onChange(props.sources.concat([{ id: id, name: sourceName.slice(0, 60), searchUrl: sourceUrl }]));
        setName('');
        setUrl('');
        setError(null);
      };

      return h(Modal, {
        title: t('sources.title'),
        t: t,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-muted' }, t('sources.intro')),
        h('p', { className: 'dfg-source-hint' }, t('sources.hint')),
        h('p', { className: 'dfg-source-hint dfg-source-format' }, t('sources.format')),
        h('p', { className: 'dfg-source-hint' }, t('sources.directOnly')),
        h('div', { className: 'dfg-source-form' },
          h('label', null,
            h('span', null, t('sources.name')),
            h('input', {
              type: 'text',
              value: name,
              maxLength: 60,
              placeholder: t('sources.namePlaceholder'),
              onChange: function (event) { setName(event.target.value); },
            }),
          ),
          h('label', null,
            h('span', null, t('sources.url')),
            h('input', {
              type: 'url',
              value: url,
              placeholder: t('sources.urlPlaceholder'),
              onChange: function (event) { setUrl(event.target.value); },
              onKeyDown: function (event) {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  add();
                }
              },
            }),
          ),
          h('button', { type: 'button', className: 'dfg-button', onClick: add }, t('sources.add')),
        ),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        h('div', { className: 'dfg-source-list' },
          props.sources.length === 0
            ? h('p', { className: 'dfg-muted' }, t('sources.empty'))
            : props.sources.map(function (source) {
                return h('div', { key: source.id, className: 'dfg-source-row' },
                  h('div', { className: 'dfg-source-info' },
                    h('strong', null, source.name),
                    h('code', null, source.searchUrl),
                  ),
                  h('button', {
                    type: 'button',
                    className: 'dfg-button dfg-button-small dfg-button-ghost',
                    onClick: function () {
                      props.onChange(props.sources.filter(function (entry) { return entry.id !== source.id; }));
                    },
                  }, t('sources.delete')),
                );
              }),
        ),
      );
    }

    function DeleteDownloadDialog(props) {
      var t = props.t;
      return h(Modal, {
        title: t('downloads.deleteTitle'),
        t: t,
        onClose: props.onClose,
        footer: [
          h('button', {
            key: 'cancel',
            type: 'button',
            className: 'dfg-button dfg-button-ghost',
            onClick: props.onClose,
          }, t('common.cancel')),
          h('button', {
            key: 'delete',
            type: 'button',
            className: 'dfg-button dfg-button-danger',
            onClick: function () { props.onConfirm(props.game); },
          }, t('downloads.delete')),
        ],
      },
        h('div', { className: 'dfg-delete-dialog' },
          h('div', { className: 'dfg-delete-cover' },
            h(Cover, { url: props.game.coverUrl, title: props.game.title }),
          ),
          h('div', { className: 'dfg-delete-copy' },
            h('h3', null, props.game.title),
            h('p', null, t('downloads.deleteBody')),
            h('p', { className: 'dfg-delete-hint' }, t('downloads.deleteHint')),
          ),
        ),
      );
    }

    function AddUrlDialog(props) {
      var t = props.t;
      var urlState = useState('');
      var url = urlState[0];
      var setUrl = urlState[1];
      var loadingState = useState(false);
      var loading = loadingState[0];
      var setLoading = loadingState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var previewState = useState(null);
      var preview = previewState[0];
      var setPreview = previewState[1];

      var parse = function () {
        var target = url.trim();
        if (!/^https:\/\//i.test(target)) {
          setError(t('sources.invalidUrl'));
          return;
        }
        setLoading(true);
        setError(null);
        setPreview(null);
        props.api.parseUrl(target)
          .then(function (payload) {
            if (!payload || !payload.item) throw new Error(t('urlGames.error'));
            setPreview(payload.item);
            setLoading(false);
          })
          .catch(function (cause) {
            setLoading(false);
            setError(String(cause && cause.message ? cause.message : cause));
          });
      };

      var add = function () {
        if (!preview) return;
        var exists = props.games.some(function (entry) { return entry.id === preview.id; });
        if (exists) {
          setError(t('urlGames.duplicate'));
          return;
        }
        props.onAdd(preview);
      };

      return h(Modal, {
        title: t('urlGames.dialogTitle'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-source-hint' }, t('urlGames.intro')),
        h('div', { className: 'dfg-url-form' },
          h('input', {
            type: 'url',
            value: url,
            placeholder: t('urlGames.placeholder'),
            onChange: function (event) { setUrl(event.target.value); },
            onKeyDown: function (event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                parse();
              }
            },
          }),
          h('button', { type: 'button', className: 'dfg-button', disabled: loading, onClick: parse }, loading ? t('urlGames.loading') : t('urlGames.parse')),
        ),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        loading && h('div', { className: 'dfg-details-loading' }, h('span', { className: 'dfg-spinner dfg-spinner-small' }), t('urlGames.loading')),
        preview && h('div', { className: 'dfg-url-preview' },
          h('div', { className: 'dfg-url-cover' }, h(Cover, { url: preview.coverUrl, title: preview.title })),
          h('div', { className: 'dfg-url-info' },
            h('h3', null, preview.title),
            h('div', { className: 'dfg-details-meta' },
              preview.sourceName || t('sources.url'),
              preview.year ? ' · ' + tFormat(t, 'common.year', { year: preview.year }) : '',
            ),
            preview.fileName && h('p', { className: 'dfg-url-file' }, preview.fileName),
            preview.itemUrl && h('a', { className: 'dfg-details-link', href: preview.itemUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
            h('button', { type: 'button', className: 'dfg-button dfg-url-add', onClick: add }, t('urlGames.addCard')),
          ),
        ),
        h('div', { className: 'dfg-url-existing' },
          h('strong', null, t('urlGames.existing')),
          props.games.length === 0
            ? h('p', { className: 'dfg-muted' }, t('urlGames.empty'))
            : props.games.map(function (game) {
                return h('div', { key: game.id, className: 'dfg-url-existing-row' },
                  h('span', null, game.title),
                  h('button', {
                    type: 'button',
                    className: 'dfg-button dfg-button-small dfg-button-ghost',
                    onClick: function () { props.onRemove(game.id); },
                  }, t('urlGames.remove')),
                );
              }),
        ),
      );
    }

    function GameDetailsDialog(props) {
      var t = props.t;
      var game = props.game;
      var infoState = useState({ loading: true, resolved: null, error: null });
      var info = infoState[0];
      var setInfo = infoState[1];
      var initialFile = (props.cachedInfo && props.cachedInfo.file) || game.file || game.fileName || null;
      var fileState = useState(initialFile);
      var selectedFile = fileState[0];
      var setSelectedFile = fileState[1];

      useEffect(function () {
        var alive = true;
        if (game.source === 'local') {
          setInfo({ loading: false, resolved: { files: game.file ? [{ name: game.file }] : [], description: '' }, error: null });
          return function () { alive = false; };
        }
        setInfo({ loading: true, resolved: null, error: null });
        props.api.resolve(game.id, game.source).then(function (resolved) {
          if (!alive) return;
          setInfo({ loading: false, resolved: resolved, error: null });
          var files = resolved && Array.isArray(resolved.files) ? resolved.files : [];
          var known = initialFile && files.some(function (file) { return file.name === initialFile; });
          if (!known && files.length > 0) setSelectedFile(files[0].name);
        }).catch(function (cause) {
          if (!alive) return;
          setInfo({ loading: false, resolved: null, error: cause });
        });
        return function () { alive = false; };
      }, [game.id, game.source, props.api]);

      var sourceName = game.source === 'github'
        ? t('sources.github')
        : game.source === 'archive'
          ? t('sources.archive')
          : game.source === 'url'
            ? t('sources.url')
            : game.sourceName || (game.source === 'local' ? t('source.local') : t('sources.custom'));
      var cached = props.cachedInfo && props.cachedInfo.cached;
      var canPlay = info.resolved !== null && info.resolved.files && info.resolved.files.length > 0;
      var footer = [
        cached
          ? h('button', {
              key: 'continue',
              type: 'button',
              className: 'dfg-button',
              disabled: !canPlay,
              onClick: function () { props.onPlay(game, { file: selectedFile || initialFile }); },
            }, t('card.continue'))
          : h('button', {
              key: 'download',
              type: 'button',
              className: 'dfg-button',
              disabled: !canPlay,
              onClick: function () { props.onPlay(game, { file: selectedFile }); },
            }, t('details.downloadPlay')),
        cached && h('button', {
          key: 'restart',
          type: 'button',
          className: 'dfg-button dfg-button-ghost',
          disabled: !canPlay,
          onClick: function () { props.onPlay(game, { file: selectedFile || initialFile, freshStart: true }); },
        }, t('card.restart')),
        h('button', {
          key: 'close',
          type: 'button',
          className: 'dfg-button dfg-button-ghost',
          onClick: props.onClose,
        }, t('common.close')),
      ];

      var files = info.resolved && Array.isArray(info.resolved.files) ? info.resolved.files : [];
      return h(Modal, {
        title: t('details.title'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: footer,
      },
        h('div', { className: 'dfg-details' },
          h('div', { className: 'dfg-details-cover' },
            h(Cover, { url: game.coverUrl, title: game.title }),
          ),
          h('div', { className: 'dfg-details-info' },
            h('h3', null, game.title),
            h('div', { className: 'dfg-details-meta' },
              sourceName,
              game.year ? ' · ' + tFormat(t, 'common.year', { year: game.year }) : '',
              cached ? h('span', { className: 'dfg-details-cached' }, t('details.cached')) : null,
            ),
            info.resolved && info.resolved.description && h('p', { className: 'dfg-details-desc' }, info.resolved.description),
            game.itemUrl && h('a', { className: 'dfg-details-link', href: game.itemUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        ),
        info.loading && h('div', { className: 'dfg-details-loading' }, h('span', { className: 'dfg-spinner dfg-spinner-small' }), t('details.loading')),
        info.error && h('div', { className: 'dfg-inline-error', role: 'alert' }, t('details.error') + ': ' + String(info.error.message || info.error)),
        !info.loading && !info.error && files.length > 0 &&
          h('div', { className: 'dfg-details-files' },
            h('strong', null, t('details.files')),
            files.map(function (file) {
              var active = file.name === selectedFile;
              return h('button', {
                key: file.name,
                type: 'button',
                className: cx('dfg-detail-file', active && 'dfg-detail-file-active'),
                onClick: function () { setSelectedFile(file.name); },
              },
                h('span', null, file.name),
                file.size ? h('small', null, formatBytes(file.size)) : null,
              );
            }),
          ),
      );
    }

    function SaveDialog(props) {
      var t = props.t;
      var slots = [1, 2, 3, 4];
      return h(Modal, {
        title: t('save.title'),
        t: t,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-muted' }, t('save.hint')),
        h('div', { className: 'dfg-slot-list' },
          slots.map(function (slot) {
            var row = props.slots[slot];
            return h('div', { key: slot, className: 'dfg-slot' },
              h('div', { className: 'dfg-slot-thumb' },
                row && row.thumbnail
                  ? h('img', { src: row.thumbnail, alt: '', referrerPolicy: 'no-referrer' })
                  : h('span', null, '—'),
              ),
              h('div', { className: 'dfg-slot-info' },
                h('strong', null, tFormat(t, 'save.slot', { slot: slot })),
                h('span', null, row ? new Date(row.updatedAt).toLocaleString() : t('common.empty')),
              ),
              h('div', { className: 'dfg-slot-actions' },
                props.mode === 'save'
                  ? h('button', { type: 'button', className: 'dfg-button dfg-button-small', onClick: function () { props.onSave(slot); } }, t('common.save'))
                  : h('button', { type: 'button', className: 'dfg-button dfg-button-small', disabled: !row, onClick: function () { props.onLoad(slot); } }, t('common.load')),
                row && h('button', { type: 'button', className: 'dfg-button dfg-button-small dfg-button-ghost', onClick: function () { props.onDelete(slot); } }, t('common.delete')),
              ),
            );
          }),
        ),
      );
    }

    function keyLabel(code) {
      var labels = {
        ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
        Enter: 'Enter', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', Space: 'Space',
        Escape: 'Esc', Backspace: 'Backspace', Tab: 'Tab',
      };
      return labels[code] || String(code || '').replace(/^Key/, '').replace(/^Digit/, '');
    }

    function ControlsDialog(props) {
      var t = props.t;
      var state = useState(props.initial || loadControls());
      var controls = state[0];
      var setControls = state[1];
      var tabState = useState('keyboard');
      var tab = tabState[0];
      var setTab = tabState[1];
      var captureState = useState(null);
      var capture = captureState[0];
      var setCapture = captureState[1];
      var prevPadRef = useRef({});

      useEffect(function () {
        if (capture === null || capture.type !== 'keyboard') return undefined;
        var onKey = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            setCapture(null);
            return;
          }
          if (['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(event.code)) return;
          event.preventDefault();
          event.stopPropagation();
          var next = Object.assign({}, controls, { keyboard: Object.assign({}, controls.keyboard) });
          next.keyboard[capture.action] = event.code;
          setControls(next);
          setCapture(null);
        };
        window.addEventListener('keydown', onKey, true);
        return function () {
          window.removeEventListener('keydown', onKey, true);
        };
      }, [capture, controls]);

      useEffect(function () {
        if (capture === null || capture.type !== 'gamepad') return undefined;
        var timer = window.setInterval(function () {
          if (typeof navigator.getGamepads !== 'function') return;
          var pads = navigator.getGamepads();
          for (var p = 0; p < pads.length; p += 1) {
            var pad = pads[p];
            if (!pad) continue;
            var previous = prevPadRef.current[p] || [];
            for (var i = 0; i < pad.buttons.length; i += 1) {
              if (pad.buttons[i].pressed && !previous[i]) {
                var next = Object.assign({}, controls, { gamepad: Object.assign({}, controls.gamepad) });
                next.gamepad[capture.action] = i;
                setControls(next);
                setCapture(null);
                prevPadRef.current[p] = pad.buttons.map(function (button) { return button.pressed; });
                return;
              }
            }
            prevPadRef.current[p] = pad.buttons.map(function (button) { return button.pressed; });
          }
        }, 80);
        return function () {
          window.clearInterval(timer);
        };
      }, [capture, controls]);

      var actions = Object.keys(DEFAULT_KEYBOARD);
      return h(Modal, {
        title: t('controls.title'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: [
          h('button', { key: 'reset', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: function () { setControls({ keyboard: Object.assign({}, DEFAULT_KEYBOARD), gamepad: Object.assign({}, DEFAULT_GAMEPAD), autoFire: Object.assign({}, DEFAULT_AUTOFIRE) }); } }, t('controls.reset')),
          h('button', { key: 'cancel', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.cancel')),
          h('button', { key: 'save', type: 'button', className: 'dfg-button', onClick: function () { props.onSave(controls); } }, t('common.save')),
        ],
      },
        h('div', { className: 'dfg-tabs' },
          h('button', { type: 'button', className: cx('dfg-tab', tab === 'keyboard' && 'dfg-tab-active'), onClick: function () { setTab('keyboard'); setCapture(null); } }, t('controls.keyboard')),
          h('button', { type: 'button', className: cx('dfg-tab', tab === 'gamepad' && 'dfg-tab-active'), onClick: function () { setTab('gamepad'); setCapture(null); } }, t('controls.gamepad')),
        ),
        h('div', { className: 'dfg-autofire' },
          h('label', null,
            h('input', {
              type: 'checkbox',
              checked: !!(controls.autoFire && controls.autoFire.a),
              onChange: function (event) {
                var next = Object.assign({}, controls, {
                  autoFire: Object.assign({ a: false, b: false }, controls.autoFire || {}, { a: event.target.checked }),
                });
                setControls(next);
              },
            }),
            h('span', null, t('controls.autofireA')),
          ),
          h('label', null,
            h('input', {
              type: 'checkbox',
              checked: !!(controls.autoFire && controls.autoFire.b),
              onChange: function (event) {
                var next = Object.assign({}, controls, {
                  autoFire: Object.assign({ a: false, b: false }, controls.autoFire || {}, { b: event.target.checked }),
                });
                setControls(next);
              },
            }),
            h('span', null, t('controls.autofireB')),
          ),
        ),
        h('label', { className: 'dfg-aspect-setting' },
          h('span', null, t('game.aspect')),
          h('select', {
            value: props.aspect,
            'aria-label': t('game.aspect'),
            onChange: function (event) {
              props.onAspectChange(event.target.value);
            },
          },
            props.aspects.map(function (entry) {
              return h('option', { key: entry.id, value: entry.id }, t(entry.labelKey));
            }),
          ),
        ),
        h('div', { className: 'dfg-control-list' },
          actions.map(function (action) {
            var label = t('controls.action.' + action);
            var value = tab === 'keyboard' ? keyLabel(controls.keyboard[action]) : '#' + controls.gamepad[action];
            var isCapturing = capture !== null && capture.action === action && capture.type === tab;
            return h('div', { key: action, className: 'dfg-control-row' },
              h('span', { className: 'dfg-control-name' }, label),
              h('span', { className: cx('dfg-control-value', isCapturing && 'dfg-capturing') },
                isCapturing ? (tab === 'keyboard' ? t('controls.pressKey') : t('controls.pressButton')) : value,
              ),
              h('button', {
                type: 'button',
                className: 'dfg-button dfg-button-small',
                onClick: function () {
                  setCapture({ action: action, type: tab });
                },
              }, t('controls.remap')),
            );
          }),
        ),
        h('p', { className: 'dfg-muted' }, t('game.controlsHint')),
      );
    }

    function CheatDialog(props) {
      var t = props.t;
      var state = useState(props.initial || '');
      var text = state[0];
      var setText = state[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var submit = function () {
        var lines = String(text || '').split(/\r?\n/).map(function (line) { return line.trim(); }).filter(Boolean);
        for (var i = 0; i < lines.length; i += 1) {
          if (!/^[A-Za-z]{6}$|^[A-Za-z]{8}$|^[0-9a-fA-F]{1,4}:[0-9a-fA-F]{1,2}(\?[0-9a-fA-F]{0,2})?$/.test(lines[i])) {
            setError(tFormat(t, 'cheats.invalid', { code: lines[i] }));
            return;
          }
        }
        props.onApply(lines);
      };
      return h(Modal, {
        title: t('cheats.title'),
        t: t,
        onClose: props.onClose,
        footer: [
          h('button', { key: 'clear', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: function () { setText(''); props.onApply([]); } }, t('cheats.clear')),
          h('button', { key: 'cancel', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.cancel')),
          h('button', { key: 'apply', type: 'button', className: 'dfg-button', onClick: submit }, t('cheats.apply')),
        ],
      },
        h('p', { className: 'dfg-muted' }, t('cheats.hint')),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        h('textarea', {
          className: 'dfg-textarea',
          rows: 8,
          value: text,
          placeholder: 'SXIOPO\nGOSSIP',
          onChange: function (event) {
            setText(event.target.value);
            setError(null);
          },
        }),
      );
    }

    function FileChooser(props) {
      var t = props.t;
      return h(Modal, {
        title: props.game.title || t('game.chooseFile'),
        t: t,
        onClose: props.onBack,
        footer: h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onBack }, t('common.back')),
      },
        h('p', { className: 'dfg-muted' }, t('game.chooseFile')),
        h('div', { className: 'dfg-file-list' },
          props.files.map(function (file) {
            return h('button', {
              key: file.name,
              type: 'button',
              className: 'dfg-file',
              onClick: function () { props.onChoose(file.name); },
            },
              h('span', { className: 'dfg-file-name' }, file.name),
              h('span', { className: 'dfg-file-size' }, formatBytes(file.size)),
            );
          }),
        ),
      );
    }

    function GameView(props) {
      var t = props.t;
      var locale = props.locale;
      var game = props.game;
      var api = props.api;
      var initialBytes = props.initialBytes || null;
      var initialFile = props.initialFile || game.file || null;

      var loadSeqRef = useRef(0);
      var canvasRef = useRef(null);
      var stageRef = useRef(null);
      var emuRef = useRef(null);
      var activeKeyRef = useRef(makeGameKey(game.id, initialFile || ''));
      var autoTimerRef = useRef(0);
      var rewindTimerRef = useRef(0);
      var rewindHoldRef = useRef(0);
      var rewindWasPausedRef = useRef(false);
      var rewindBufRef = useRef([]);
      var autoBusyRef = useRef(false);
      var batteryTimerRef = useRef(0);
      var toastTimerRef = useRef(0);
      var recordedRef = useRef(false);
      var brokenRef = useRef(false);
      var dialogWasRunningRef = useRef(false);
      var mountRef = useRef(true);
      var speedRef = useRef(1);
      var mutedRef = useRef(false);
      var volumeRef = useRef(loadJson(VOLUME_KEY, 0.65));
      var onPlayedRef = useRef(props.onPlayed);
      onPlayedRef.current = props.onPlayed;

      var phaseState = useState(initialBytes ? 'ready' : 'loading');
      var phase = phaseState[0];
      var setPhase = phaseState[1];
      var resolvedState = useState(null);
      var resolved = resolvedState[0];
      var setResolved = resolvedState[1];
      var chosenState = useState(initialFile || (initialBytes ? 'local.nes' : null));
      var chosenFile = chosenState[0];
      var setChosenFile = chosenState[1];
      var bytesState = useState(initialBytes);
      var bytes = bytesState[0];
      var setBytes = bytesState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var progressState = useState(null);
      var progress = progressState[0];
      var setProgress = progressState[1];
      var reloadState = useState(0);
      var reloadTick = reloadState[0];
      var setReloadTick = reloadState[1];

      var pausedState = useState(true);
      var paused = pausedState[0];
      var setPaused = pausedState[1];
      var speedState = useState(1);
      var speed = speedState[0];
      var setSpeed = speedState[1];
      var volumeState = useState(volumeRef.current);
      var volume = volumeState[0];
      var setVolume = volumeState[1];
      var aspectState = useState(function () {
        var saved = loadJson(ASPECT_KEY, '4:3');
        for (var i = 0; i < ASPECTS.length; i += 1) {
          if (ASPECTS[i].id === saved) return saved;
        }
        return '4:3';
      });
      var aspect = aspectState[0];
      var setAspect = aspectState[1];
      var aspectMenuState = useState(false);
      var aspectMenuOpen = aspectMenuState[0];
      var setAspectMenuOpen = aspectMenuState[1];
      var aspectMenuRef = useRef(null);
      var mutedState = useState(false);
      var muted = mutedState[0];
      var setMuted = mutedState[1];
      var fpsState = useState(0);
      var fps = fpsState[0];
      var setFps = fpsState[1];
      var dialogState = useState(null);
      var dialog = dialogState[0];
      var setDialog = dialogState[1];
      var slotsState = useState({});
      var slots = slotsState[0];
      var setSlots = slotsState[1];
      var toastState = useState(null);
      var toast = toastState[0];
      var setToast = toastState[1];
      var fullscreenState = useState(false);
      var fullscreen = fullscreenState[0];
      var setFullscreen = fullscreenState[1];
      var padState = useState(0);
      var gamepadCount = padState[0];
      var setGamepadCount = padState[1];
      var cheatTextState = useState('');
      var cheatText = cheatTextState[0];
      var setCheatText = cheatTextState[1];

      speedRef.current = speed;
      mutedRef.current = muted;
      volumeRef.current = volume;

      var showToast = useCallback(function (message) {
        setToast(message);
        if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(function () {
          setToast(null);
          toastTimerRef.current = 0;
        }, 2800);
      }, []);

      useEffect(function () {
        mountRef.current = true;
        return function () {
          mountRef.current = false;
          if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        };
      }, []);

      var saveAuto = useCallback(async function () {
        var emu = emuRef.current;
        var key = activeKeyRef.current;
        if (!emu || !key || autoBusyRef.current || brokenRef.current) return;
        autoBusyRef.current = true;
        var data;
        var thumbnail;
        try {
          data = emu.snapshot();
          thumbnail = emu.thumbnail();
        } catch (e) {
          autoBusyRef.current = false;
          return;
        }
        try {
          await idbPut('states', {
            key: key + '::auto',
            gameKey: key,
            slot: 'auto',
            version: 1,
            data: data,
            thumbnail: thumbnail,
            updatedAt: Date.now(),
          });
        } catch (e) {
          // Quota or private mode: the game keeps running.
        } finally {
          autoBusyRef.current = false;
        }
      }, []);

      var scheduleAuto = useCallback(function () {
        if (batteryTimerRef.current) window.clearTimeout(batteryTimerRef.current);
        batteryTimerRef.current = window.setTimeout(function () {
          batteryTimerRef.current = 0;
          saveAuto();
        }, 10000);
      }, [saveAuto]);

      var refreshSlots = useCallback(async function () {
        var key = activeKeyRef.current;
        if (!key) return;
        try {
          var rows = await idbAll('states');
          var map = {};
          rows.forEach(function (row) {
            if (row && row.gameKey === key) map[row.slot] = row;
          });
          setSlots(map);
        } catch (e) {
          setSlots({});
        }
      }, []);

      // Resolve the item and choose a playable file (unless local bytes were given).
      useEffect(function () {
        var controller = new AbortController();
        var seq = loadSeqRef.current + 1;
        loadSeqRef.current = seq;
        recordedRef.current = false;
        setError(null);
        setProgress(null);
        setResolved(null);
        setBytes(initialBytes || null);
        setPhase(initialBytes ? 'ready' : 'loading');
        if (initialBytes) {
          setChosenFile(initialFile || 'local.nes');
          return function () {
            controller.abort();
          };
        }
        (async function () {
          try {
            if (game.source === 'local') {
              var localTarget = initialFile || game.file;
              if (!localTarget) {
                setError({ code: 'NOT_FOUND', message: t('error.notFound') });
                setPhase('error');
                return;
              }
              setChosenFile(localTarget);
              return;
            }
            var res = await api.resolve(game.id, game.source || 'archive', controller.signal);
            if (seq !== loadSeqRef.current) return;
            setResolved(res);
            if (!res.files || res.files.length === 0) {
              var message = t('game.unsupportedNone');
              if (res.unsupported === 'zip') message = t('game.unsupportedZip');
              if (res.unsupported === 'fds') message = t('game.unsupportedFds');
              setError({ code: 'UNSUPPORTED', message: message });
              setPhase('error');
              return;
            }
            var target = initialFile || game.file;
            var known = target && res.files.some(function (file) { return file.name === target; });
            if (!known) target = res.files.length === 1 ? res.files[0].name : null;
            if (target === null) {
              setPhase('choose');
              return;
            }
            setChosenFile(target);
          } catch (cause) {
            if (controller.signal.aborted) return;
            if (seq !== loadSeqRef.current) return;
            setError({ code: cause.code || 'ERROR', message: cause.message });
            setPhase('error');
          }
        })();
        return function () {
          controller.abort();
        };
      }, [game.id, reloadTick, initialBytes, initialFile, game.file, api, t]);

      // Download or reuse the ROM, then hand it to the emulator effect.
      useEffect(function () {
        if (!chosenFile) return undefined;
        var controller = new AbortController();
        var seq = loadSeqRef.current + 1;
        loadSeqRef.current = seq;
        setError(null);
        if (initialBytes) {
          setBytes(initialBytes);
          setPhase('ready');
          var localCopy = initialBytes.buffer.slice(initialBytes.byteOffset, initialBytes.byteOffset + initialBytes.byteLength);
          putCachedRom(makeGameKey(game.id, chosenFile), localCopy, { id: game.id, title: game.title, file: chosenFile }).catch(function () {});
          if (!recordedRef.current) {
            recordedRef.current = true;
            onPlayedRef.current(game, chosenFile, game.coverUrl || null);
          }
          return function () {
            controller.abort();
          };
        }
        setPhase('loading');
        setProgress(null);
        (async function () {
          try {
            var key = makeGameKey(game.id, chosenFile);
            var cached = await getCachedRom(key);
            var data = cached && cached.bytes ? new Uint8Array(cached.bytes) : null;
            if (data === null && game.source === 'local') {
              var missing = new Error(t('error.notFound'));
              missing.code = 'NOT_FOUND';
              throw missing;
            }
            if (data === null) {
              data = await api.fetchRom(game.id, chosenFile, game.source || 'archive', controller.signal, function (received, total) {
                setProgress({ received: received, total: total });
              });
              var copy = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
              await putCachedRom(key, copy, { id: game.id, title: game.title, file: chosenFile }).catch(function () {});
              pruneRoms(20).catch(function () {});
            }
            if (seq !== loadSeqRef.current) return;
            if (data.length < 16 || data[0] !== 0x4e || data[1] !== 0x45 || data[2] !== 0x53 || data[3] !== 0x1a) {
              var invalid = new Error(t('game.romError'));
              invalid.code = 'NOT_A_ROM';
              throw invalid;
            }
            setBytes(data);
            setPhase('ready');
            if (!recordedRef.current) {
              recordedRef.current = true;
              onPlayedRef.current(game, chosenFile, (resolved && resolved.coverUrl) || game.coverUrl || null);
            }
          } catch (cause) {
            if (controller.signal.aborted) return;
            if (seq !== loadSeqRef.current) return;
            setError({ code: cause.code || 'ERROR', message: cause.message });
            setPhase('error');
          }
        })();
        return function () {
          controller.abort();
        };
      }, [chosenFile, initialBytes, resolved, game, api, t]);

      // Create/destroy the emulator for the current ROM bytes.
      useEffect(function () {
        if (!bytes || phase !== 'ready' || !canvasRef.current || !stageRef.current) return undefined;
        var key = makeGameKey(game.id, chosenFile || game.file || '');
        activeKeyRef.current = key;
        brokenRef.current = false;
        var emu;
        try {
          emu = new Emulator(canvasRef.current, bytes, {
            volume: volumeRef.current,
            muted: mutedRef.current,
            onFps: function (value) { setFps(value); },
            onBatteryWrite: scheduleAuto,
            onError: function (cause) {
              brokenRef.current = true;
              idbDelete('states', key + '::auto').catch(function () {});
              setError({ code: 'RUNTIME', message: String(cause && cause.message ? cause.message : cause) });
              setPhase('error');
            },
            onPauseToggle: function () {
              var current = emuRef.current;
              if (!current) return;
              var nowPaused = current.togglePause();
              setPaused(nowPaused);
            },
          });
        } catch (cause) {
          setError({ code: cause.code || 'RUNTIME', message: String(cause && cause.message ? cause.message : cause) });
          setPhase('error');
          return undefined;
        }
        emuRef.current = emu;
        emu.bindInput(stageRef.current);
        emu.setVolume(volumeRef.current);
        emu.setMuted(mutedRef.current || speedRef.current > 1);
        emu.setSpeed(speedRef.current);
        emu.setControls(loadControls());
        try {
          var cheats = loadJson(CHEATS_KEY, {});
          var codes = cheats[key];
          if (Array.isArray(codes) && codes.length > 0) emu.setCheats(codes);
        } catch (e) {
          // Ignore malformed stored cheats.
        }

        (async function () {
          try {
            if (!props.freshStart) {
              var row = await idbGet('states', key + '::auto');
              if (row && row.data && mountRef.current) {
                try {
                  emu.restore(row.data);
                  showToast(t('game.autoRestored'));
                } catch (e) {
                  // Incompatible state: start fresh.
                }
              }
            }
          } catch (e) {
            // ignore
          }
          if (!mountRef.current) return;
          emu.start();
          setPaused(false);
          if (stageRef.current) {
            try {
              stageRef.current.focus({ preventScroll: true });
            } catch (e) {
              stageRef.current.focus();
            }
          }
        })();

        autoTimerRef.current = window.setInterval(function () {
          saveAuto();
        }, 30000);
        var countdown = window.setInterval(function () {
          if (rewindHoldRef.current) return;
          var current = emuRef.current;
          if (!current || current.paused) return;
          try {
            rewindBufRef.current.push(current.snapshot());
            while (rewindBufRef.current.length > 15) rewindBufRef.current.shift();
          } catch (e) {
            // ignore
          }
        }, 1000);
        rewindTimerRef.current = countdown;

        var visibilityTimer = 0;
        var visibilityPaused = false;
        var onVisibility = function () {
          if (document.hidden) {
            if (visibilityTimer) window.clearTimeout(visibilityTimer);
            visibilityTimer = window.setTimeout(function () {
              visibilityTimer = 0;
              var current = emuRef.current;
              if (current && !current.paused) {
                current.pause();
                visibilityPaused = true;
                setPaused(true);
                saveAuto();
              }
            }, 900);
            return;
          }
          if (visibilityTimer) {
            window.clearTimeout(visibilityTimer);
            visibilityTimer = 0;
          }
          if (visibilityPaused && emuRef.current) {
            visibilityPaused = false;
            emuRef.current.resume();
            setPaused(false);
          }
        };
        document.addEventListener('visibilitychange', onVisibility);

        var updatePads = function () {
          if (typeof navigator.getGamepads !== 'function') {
            setGamepadCount(0);
            return;
          }
          var pads = navigator.getGamepads();
          var count = 0;
          for (var i = 0; i < pads.length; i += 1) if (pads[i]) count += 1;
          setGamepadCount(count);
        };
        updatePads();
        window.addEventListener('gamepadconnected', updatePads);
        window.addEventListener('gamepaddisconnected', updatePads);

        return function () {
          document.removeEventListener('visibilitychange', onVisibility);
          if (visibilityTimer) window.clearTimeout(visibilityTimer);
          window.removeEventListener('gamepadconnected', updatePads);
          window.removeEventListener('gamepaddisconnected', updatePads);
          if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
          if (rewindTimerRef.current) window.clearInterval(rewindTimerRef.current);
          if (batteryTimerRef.current) window.clearTimeout(batteryTimerRef.current);
          autoTimerRef.current = 0;
          rewindTimerRef.current = 0;
          batteryTimerRef.current = 0;
          saveAuto();
          emu.destroy();
          emuRef.current = null;
        };
      }, [bytes, phase, chosenFile, game.id, game.file, scheduleAuto, saveAuto, showToast, t]);

      useEffect(function () {
        refreshSlots();
      }, [chosenFile, refreshSlots]);

      useEffect(function () {
        var onFullscreen = function () {
          setFullscreen(document.fullscreenElement === stageRef.current);
        };
        document.addEventListener('fullscreenchange', onFullscreen);
        return function () {
          document.removeEventListener('fullscreenchange', onFullscreen);
        };
      }, []);

      var openDialog = function (name) {
        var emu = emuRef.current;
        dialogWasRunningRef.current = !!(emu && !emu.paused);
        if (dialogWasRunningRef.current) {
          emu.pause();
          setPaused(true);
        }
        if (name === 'save' || name === 'load') refreshSlots();
        if (name === 'cheats') {
          var map = loadJson(CHEATS_KEY, {});
          var codes = map[activeKeyRef.current];
          setCheatText(Array.isArray(codes) ? codes.join('\n') : '');
        }
        setDialog(name);
      };

      var closeDialog = function () {
        setDialog(null);
        if (dialogWasRunningRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
        dialogWasRunningRef.current = false;
      };

      var togglePause = function () {
        var emu = emuRef.current;
        if (!emu) return;
        var nowPaused = emu.togglePause();
        setPaused(nowPaused);
        if (!nowPaused && stageRef.current) stageRef.current.focus();
      };

      var cycleSpeed = function () {
        var next = speed === 1 ? 2 : speed === 2 ? 4 : 1;
        setSpeed(next);
        if (emuRef.current) {
          emuRef.current.setSpeed(next);
          emuRef.current.setMuted(mutedRef.current || next > 1);
        }
      };

      var toggleMute = function () {
        var next = !muted;
        setMuted(next);
        if (emuRef.current) emuRef.current.setMuted(next || speed > 1);
      };

      var changeVolume = function (value) {
        var v = Math.max(0, Math.min(1, Number(value) || 0));
        setVolume(v);
        saveJson(VOLUME_KEY, v);
        if (emuRef.current) emuRef.current.setVolume(v);
      };

      var currentAspect = ASPECTS[0];
      for (var aspectIndex = 0; aspectIndex < ASPECTS.length; aspectIndex += 1) {
        if (ASPECTS[aspectIndex].id === aspect) currentAspect = ASPECTS[aspectIndex];
      }

      var changeAspect = function (next) {
        var found = null;
        for (var i = 0; i < ASPECTS.length; i += 1) {
          if (ASPECTS[i].id === next) found = ASPECTS[i];
        }
        if (found === null) return;
        setAspect(found.id);
        saveJson(ASPECT_KEY, found.id);
        setAspectMenuOpen(false);
      };

      useEffect(function () {
        if (!aspectMenuOpen) return undefined;
        var onPointerDown = function (event) {
          if (aspectMenuRef.current === null) return;
          if (!aspectMenuRef.current.contains(event.target)) setAspectMenuOpen(false);
        };
        var onKeyDown = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            setAspectMenuOpen(false);
          }
        };
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown, true);
        return function () {
          document.removeEventListener('pointerdown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown, true);
        };
      }, [aspectMenuOpen]);

      var saveSlot = async function (slot) {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var data = emu.snapshot();
          var thumbnail = emu.thumbnail();
          await idbPut('states', {
            key: activeKeyRef.current + '::' + slot,
            gameKey: activeKeyRef.current,
            slot: slot,
            version: 1,
            data: data,
            thumbnail: thumbnail,
            updatedAt: Date.now(),
          });
          await refreshSlots();
          showToast(tFormat(t, 'game.stateSaved', { slot: slot }));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var loadSlot = async function (slot) {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var row = await idbGet('states', activeKeyRef.current + '::' + slot);
          if (!row || !row.data) return;
          emu.restore(row.data);
          showToast(tFormat(t, 'game.stateLoaded', { slot: slot }));
          closeDialog();
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var deleteSlot = async function (slot) {
        try {
          await idbDelete('states', activeKeyRef.current + '::' + slot);
          await refreshSlots();
          showToast(tFormat(t, 'game.stateDeleted', { slot: slot }));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var applyControls = function (next) {
        saveControls(next);
        if (emuRef.current) emuRef.current.setControls(next);
        setDialog(null);
        if (dialogWasRunningRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
        dialogWasRunningRef.current = false;
        showToast(t('controls.saved'));
      };

      var applyCheats = function (codes) {
        try {
          if (emuRef.current) emuRef.current.setCheats(codes);
          var map = loadJson(CHEATS_KEY, {});
          map[activeKeyRef.current] = codes;
          saveJson(CHEATS_KEY, map);
          closeDialog();
          showToast(t('game.cheatsApplied'));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var takeScreenshot = function () {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var url = emu.screenshot();
          var link = document.createElement('a');
          link.href = url;
          link.download = String(game.title || 'fc-game').replace(/[\\/:*?"<>|]+/g, '_') + '.png';
          document.body.appendChild(link);
          link.click();
          link.remove();
          showToast(t('game.screenshotSaved'));
        } catch (e) {
          // ignore
        }
      };

      var toggleFullscreen = function () {
        var stage = stageRef.current;
        if (!stage) return;
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(function () {});
        } else if (typeof stage.requestFullscreen === 'function') {
          stage.requestFullscreen().catch(function () {});
        }
      };

      var startRewind = function (event) {
        if (event) event.preventDefault();
        var emu = emuRef.current;
        if (!emu || rewindHoldRef.current) return;
        rewindWasPausedRef.current = emu.paused;
        if (!emu.paused) {
          emu.pause();
          setPaused(true);
        }
        var step = function () {
          var current = emuRef.current;
          if (!current) return;
          var buffer = rewindBufRef.current;
          if (buffer.length === 0) {
            showToast(t('game.rewindEmpty'));
            stopRewind();
            return;
          }
          var snapshot = buffer.pop();
          try {
            current.restore(snapshot);
            current.draw();
          } catch (e) {
            // ignore
          }
        };
        step();
        rewindHoldRef.current = window.setInterval(step, 120);
      };

      var stopRewind = function () {
        if (rewindHoldRef.current) {
          window.clearInterval(rewindHoldRef.current);
          rewindHoldRef.current = 0;
        }
        if (!rewindWasPausedRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
      };

      var goBack = function () {
        if (emuRef.current) emuRef.current.pause();
        saveAuto();
        props.onBack();
      };

      var errorMessage = function () {
        if (!error) return t('error.title');
        if (error.code === 'NETWORK') return t('error.network');
        if (error.code === 'NOT_A_ROM') return t('game.romError');
        if (error.code === 'ROM_TOO_LARGE') return t('error.tooLarge');
        if (error.code === 'UNSUPPORTED') return error.message || t('error.unsupported');
        return error.message || t('error.title');
      };

      var sourceUrl = (resolved && resolved.itemUrl) || game.itemUrl || null;
      var title = (resolved && resolved.title) || game.title;

      var header = h('header', { className: 'dfg-game-head' },
        h('button', { type: 'button', className: 'dfg-back', onClick: goBack }, '← ' + t('common.back')),
        h('div', { className: 'dfg-game-title' },
          h('h1', null, title),
          h('div', { className: 'dfg-game-sub' },
            resolved && resolved.year ? String(resolved.year) : game.year ? String(game.year) : '',
            resolved && resolved.year ? ' · ' : '',
            game.source === 'local' ? t('source.local') : game.source === 'github' ? t('sources.github') : game.source === 'url' ? t('sources.url') : game.source === 'custom' ? (game.sourceName || t('sources.custom')) : t('source.archive'),
            sourceUrl && h('a', { href: sourceUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        ),
      );

      var body;
      if (phase === 'loading') {
        var progressText = t('game.loading');
        if (progress && progress.total) {
          progressText = t('game.loadingRom') + ' ' + Math.min(100, Math.round((progress.received / progress.total) * 100)) + '%';
        } else if (progress && progress.received) {
          progressText = t('game.loadingRom') + ' ' + formatBytes(progress.received);
        }
        body = h('div', { className: 'dfg-game-loading' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, progressText),
        );
      } else if (phase === 'choose') {
        body = h(FileChooser, {
          t: t,
          game: game,
          files: resolved ? resolved.files : [],
          onChoose: function (name) {
            recordedRef.current = false;
            setChosenFile(name);
          },
          onBack: goBack,
        });
      } else if (phase === 'error') {
        body = h('div', { className: 'dfg-game-error' },
          h('h2', null, t('game.loadError')),
          h('p', null, errorMessage()),
          h('div', { className: 'dfg-row' },
            h('button', {
              type: 'button',
              className: 'dfg-button',
              onClick: function () {
                setReloadTick(function (value) { return value + 1; });
              },
            }, t('game.retry')),
            h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: goBack }, t('common.back')),
            sourceUrl && h('a', { className: 'dfg-button dfg-button-ghost', href: sourceUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        );
      } else {
        body = h('div', { className: 'dfg-game-body' },
          h('div', {
            ref: stageRef,
            className: 'dfg-stage',
            tabIndex: 0,
            'aria-label': title,
            style: { '--dfg-aspect': currentAspect.value },
            onPointerDown: function () {
              if (stageRef.current) stageRef.current.focus();
              var emu = emuRef.current;
              if (emu) emu.audio.resume();
            },
          },
            h('canvas', { ref: canvasRef, className: 'dfg-canvas', width: SCREEN_W, height: SCREEN_H }),
            paused && h('div', { className: 'dfg-paused', 'aria-live': 'polite' },
              h('span', null, t('game.pause')),
            ),
          ),
          h('div', { className: 'dfg-toolbar' },
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': paused ? t('game.resume') : t('game.pause'),
              'aria-label': paused ? t('game.resume') : t('game.pause'),
              onClick: togglePause,
            },
              h('span', { className: 'dfg-tool-icon' }, paused ? '▶' : '❚❚'),
              h('span', null, paused ? t('game.resume') : t('game.pause')),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.reset'),
              'aria-label': t('game.reset'),
              onClick: function () { if (emuRef.current) emuRef.current.reset(); },
            },
              h('span', { className: 'dfg-tool-icon' }, '⟲'), h('span', null, t('game.reset')),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.saveState'),
              'aria-label': t('game.saveState'),
              onClick: function () { openDialog('save'); },
            }, h('span', { className: 'dfg-tool-icon' }, '💾'), h('span', null, t('game.saveState'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.loadState'),
              'aria-label': t('game.loadState'),
              onClick: function () { openDialog('load'); },
            }, h('span', { className: 'dfg-tool-icon' }, '📂'), h('span', null, t('game.loadState'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.rewind'),
              'aria-label': t('game.rewind'),
              onPointerDown: startRewind,
              onPointerUp: stopRewind,
              onPointerLeave: stopRewind,
              onPointerCancel: stopRewind,
              onKeyDown: function (event) {
                if (event.key === 'Enter' || event.key === ' ') startRewind(event);
              },
              onKeyUp: stopRewind,
            }, h('span', { className: 'dfg-tool-icon' }, '⏪'), h('span', null, t('game.rewind'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.fastForward') + ' ' + speed + 'x',
              'aria-label': t('game.fastForward') + ' ' + speed + 'x',
              onClick: cycleSpeed,
            },
              h('span', { className: 'dfg-tool-icon' }, '⏩'), h('span', null, t('game.fastForward') + ' ' + speed + 'x'),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.screenshot'),
              'aria-label': t('game.screenshot'),
              onClick: takeScreenshot,
            }, h('span', { className: 'dfg-tool-icon' }, '📷'), h('span', null, t('game.screenshot'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': muted ? t('game.unmute') : t('game.mute'),
              'aria-label': muted ? t('game.unmute') : t('game.mute'),
              onClick: toggleMute,
            }, h('span', { className: 'dfg-tool-icon' }, muted ? '🔇' : '🔊'), h('span', null, muted ? t('game.unmute') : t('game.mute'))),
            h('label', { className: 'dfg-volume', 'data-tip': t('game.volume'), 'aria-label': t('game.volume') },
              h('span', { className: 'dfg-tool-icon' }, '🎚'),
              h('input', {
                type: 'range',
                min: 0,
                max: 1,
                step: 0.05,
                value: volume,
                'aria-label': t('game.volume'),
                onChange: function (event) { changeVolume(event.target.value); },
              }),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': fullscreen ? t('game.exitFullscreen') : t('game.fullscreen'),
              'aria-label': fullscreen ? t('game.exitFullscreen') : t('game.fullscreen'),
              onClick: toggleFullscreen,
            },
              h('span', { className: 'dfg-tool-icon' }, fullscreen ? '⤢' : '⛶'),
              h('span', null, fullscreen ? t('game.exitFullscreen') : t('game.fullscreen')),
            ),
            h('div', { ref: aspectMenuRef, className: 'dfg-aspect-wrap' },
              h('button', {
                type: 'button',
                className: 'dfg-tool',
                'data-tip': t('game.aspect') + ' · ' + t(currentAspect.labelKey),
                'aria-label': t('game.aspect') + ' · ' + t(currentAspect.labelKey),
                'aria-haspopup': 'menu',
                'aria-expanded': aspectMenuOpen,
                onClick: function () { setAspectMenuOpen(function (value) { return !value; }); },
              },
                h('span', { className: 'dfg-tool-icon' }, '▭'),
                h('span', null, t('game.aspect') + ' ' + currentAspect.id + ' ▾'),
              ),
              aspectMenuOpen && h('div', { className: 'dfg-aspect-menu', role: 'menu', 'aria-label': t('game.aspect') },
                ASPECTS.map(function (entry) {
                  var active = entry.id === aspect;
                  return h('button', {
                    key: entry.id,
                    type: 'button',
                    role: 'menuitemradio',
                    'aria-checked': active,
                    className: cx('dfg-aspect-item', active && 'dfg-aspect-item-active'),
                    onClick: function () { changeAspect(entry.id); },
                  },
                    h('span', { className: 'dfg-aspect-check' }, active ? '✓' : ''),
                    h('span', { className: 'dfg-aspect-name' }, t(entry.labelKey)),
                  );
                }),
              ),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.controls'),
              'aria-label': t('game.controls'),
              onClick: function () { openDialog('controls'); },
            }, h('span', { className: 'dfg-tool-icon' }, '🎮'), h('span', null, t('game.controls'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.cheats'),
              'aria-label': t('game.cheats'),
              onClick: function () { openDialog('cheats'); },
            }, h('span', { className: 'dfg-tool-icon' }, '✦'), h('span', null, t('game.cheats'))),
          ),
          h('div', { className: 'dfg-status' },
            h('span', null, tFormat(t, 'game.fps', { fps: fps || 0 })),
            h('span', null, tFormat(t, 'game.speed', { speed: speed })),
            h('span', { className: gamepadCount > 0 ? 'dfg-ok' : 'dfg-muted' }, gamepadCount > 0 ? t('game.gamepadConnected') : t('game.gamepadDisconnected')),
            h('span', { className: 'dfg-muted' }, chosenFile || ''),
          ),
        );
      }

      var dialogs = null;
      if (dialog === 'save' || dialog === 'load') {
        dialogs = h(SaveDialog, {
          t: t,
          mode: dialog,
          slots: slots,
          onClose: closeDialog,
          onSave: saveSlot,
          onLoad: loadSlot,
          onDelete: deleteSlot,
        });
      } else if (dialog === 'controls') {
        dialogs = h(ControlsDialog, {
          t: t,
          initial: loadControls(),
          aspect: aspect,
          aspects: ASPECTS,
          onAspectChange: changeAspect,
          onSave: applyControls,
          onClose: closeDialog,
        });
      } else if (dialog === 'cheats') {
        dialogs = h(CheatDialog, {
          t: t,
          initial: cheatText,
          onApply: applyCheats,
          onClose: closeDialog,
        });
      }

      return h('div', { className: cx('dfg-game', props.tabMode && 'dfg-tab-game') },
        header,
        body,
        dialogs,
        toast && h('div', { className: 'dfg-toast', role: 'status' }, toast),
      );
    }

    function useRecent() {
      var state = useState(readRecent);
      var recent = state[0];
      var setRecent = state[1];
      useEffect(function () {
        var sync = function () {
          setRecent(readRecent());
        };
        window.addEventListener('dsh-fc-games:recent', sync);
        window.addEventListener('storage', sync);
        return function () {
          window.removeEventListener('dsh-fc-games:recent', sync);
          window.removeEventListener('storage', sync);
        };
      }, []);
      return [recent, setRecent];
    }

    var SUGGESTIONS = ['超级马里奥', '魂斗罗', '坦克大战', '冒险岛', '忍者龙剑传', '双截龙', '赤色要塞', '绿色兵团'];

    function FcGamesPage(props) {
      var t = props.t;
      var ctx = props.ctx;
      var recentState = useRecent();
      var recent = recentState[0];
      var setRecent = recentState[1];
      var bootState = useState({ status: 'loading', api: null, error: null });
      var boot = bootState[0];
      var setBoot = bootState[1];
      var viewState = useState({ type: 'library' });
      var view = viewState[0];
      var setView = viewState[1];
      var redirectState = useState(props.tabMode !== true);
      var redirecting = redirectState[0];
      var setRedirecting = redirectState[1];
      var locale = (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0) ? 'zh' : 'en';

      // The sidebar row is owned by the sidebar and always selects `main`.
      // This page acts as a launcher when it is selected there: open (or focus)
      // the real tab in the right sidebar, then return the center column to the
      // conversation. Without an on-screen Session the right sidebar cannot
      // open, so the page stays here as the fallback browser.
      useEffect(function () {
        if (props.tabMode) return;
        if (suppressMainRedirect) {
          suppressMainRedirect = false;
          setRedirecting(false);
          return;
        }
        var service = ctx.get('sidebarRight');
        if (!service || typeof service.openTab !== 'function') {
          setRedirecting(false);
          return;
        }
        var attempts = 0;
        var tryOpen = function () {
          try {
            service.openTab(FC_TAB_KIND, { preferNewPane: false });
          } catch (error) {
            attempts += 1;
            if (attempts < 6) {
              window.setTimeout(tryOpen, 80);
              return;
            }
            // No on-screen Session: the right Sidebar has no surface to open
            // into. Return to the main-panel library once, without retrying.
            try {
              suppressMainRedirect = true;
              ctx.layout.selectPanel('fc-games');
            } catch (e) {
              setRedirecting(false);
            }
          }
        };
        // Leave the main panel first: the right Sidebar only mounts while the
        // conversation is on screen. The first attempt may race that mount, so
        // retry briefly before falling back.
        ctx.layout.selectPanel(null);
        window.setTimeout(tryOpen, 60);
      }, []);

      useEffect(function () {
        var alive = true;
        props.bootstrap()
          .then(function (info) {
            if (!alive) return;
            setBoot({ status: 'ready', api: createApi(info), error: null });
          })
          .catch(function (cause) {
            if (!alive) return;
            setBoot({ status: 'error', api: null, error: cause });
          });
        return function () {
          alive = false;
        };
      }, [props.bootstrap]);

      var openGame = useCallback(function (game, options) {
        var next = options && options.file ? Object.assign({}, game, { file: options.file }) : game;
        setView({ type: 'game', game: next, freshStart: !!(options && options.freshStart) });
      }, []);

      var openImport = useCallback(function (local) {
        var game = {
          id: local.id,
          source: 'local',
          title: local.title,
          coverUrl: local.coverUrl,
          file: local.file,
          itemUrl: null,
        };
        setView({ type: 'game', game: game, initialBytes: local.bytes });
      }, []);

      var onPlayed = useCallback(function (game, file, coverUrl) {
        recordPlay(game, file, coverUrl);
        setRecent(readRecent());
      }, [setRecent]);

      var backToChat = function () {
        ctx.layout.selectPanel(null);
      };

      if (redirecting) {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, t('page.title') + '…'),
        );
      }

      if (boot.status === 'loading') {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, t('page.title') + '…'),
        );
      }

      if (boot.status === 'error') {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('h1', null, t('error.title')),
          h('p', null, t('error.host')),
          boot.error && boot.error.message && h('p', { className: 'dfg-muted' }, String(boot.error.message)),
          h('button', { type: 'button', className: 'dfg-button', onClick: function () { window.location.reload(); } }, t('error.retry')),
          h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: backToChat }, t('page.backToChat')),
        );
      }

      if (view.type === 'game') {
        return h(GameView, {
          key: view.game.id + '::' + (view.game.file || ''),
          t: t,
          locale: locale,
          api: boot.api,
          game: view.game,
          tabMode: props.tabMode === true,
          freshStart: view.freshStart === true,
          initialBytes: view.initialBytes || null,
          initialFile: view.game.file || null,
          onBack: function () {
            setView({ type: 'library' });
            setRecent(readRecent());
          },
          onPlayed: onPlayed,
        });
      }

      return h('div', { className: cx('dfg-page', props.tabMode && 'dfg-page-tab') },
        h('div', { className: 'dfg-content' },
          !props.tabMode && h('header', { className: 'dfg-page-head' },
            h('div', null,
              h('h1', null, t('page.title')),
              h('p', null, t('page.subtitle')),
            ),
            h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: backToChat }, t('page.backToChat')),
          ),
          h(LibraryView, {
            api: boot.api,
            t: t,
            locale: locale,
            recent: recent,
            suggestions: SUGGESTIONS,
            showHero: props.tabMode === true,
            onOpenGame: openGame,
            onImport: openImport,
            onRecentChanged: function () { setRecent(readRecent()); },
          }),
        ),
      );
    }

    function FcGamesIcon(props) {
      var size = Number(props.size) || 18;
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        'aria-hidden': true,
        style: { display: 'block', opacity: props.active ? 1 : 0.9 },
      },
        h('rect', { x: 2.2, y: 6.2, width: 19.6, height: 12, rx: 4.4, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M7 9.4v5.2M4.4 12h5.2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
        h('circle', { cx: 16.2, cy: 10.8, r: 1.35, fill: 'currentColor' }),
        h('circle', { cx: 18.8, cy: 13.4, r: 1.35, fill: 'currentColor' }),
        h('path', { d: 'M10.2 18.2h3.6', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', opacity: 0.55 }),
      );
    }

    var CSS =
      '.dfg-page{height:100%;overflow:auto;box-sizing:border-box;padding:24px 28px 40px;max-width:1180px;margin:0 auto;color:var(--dsw-alias-label-primary);font-size:14px;line-height:1.5}' +
      '.dfg-page-centered{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;min-height:60vh;text-align:center}' +
      '.dfg-page-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding-bottom:16px;margin-bottom:18px;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-page-head h1{margin:0;font-size:20px;line-height:28px;font-weight:600;letter-spacing:.2px}' +
      '.dfg-page-head p{margin:2px 0 0;color:var(--dsw-alias-label-secondary);font-size:13px}' +
      '.dfg-section{margin:22px 0 0}' +
      '.dfg-section-head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:12px}' +
      '.dfg-section-head h2{margin:0;font-size:15px;line-height:24px;font-weight:600}' +
      '.dfg-section-head span{color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-search{position:sticky;top:0;z-index:4;display:flex;align-items:center;gap:8px;background:var(--dsw-alias-bg-base);padding:6px 0 10px;margin-bottom:6px}' +
      '.dfg-search-icon{color:var(--dsw-alias-label-secondary);font-size:20px;line-height:1;transform:translateY(-1px)}' +
      '.dfg-search input{flex:1;min-width:0;height:40px;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);padding:0 38px 0 12px;font:inherit;outline:none;transition:border-color .15s,box-shadow .15s}' +
      '.dfg-search input:focus{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 3px rgba(77,107,254,.18)}' +
      '.dfg-search input::-webkit-search-cancel-button{display:none}' +
      '.dfg-search-clear{position:relative;margin-left:-38px;width:30px;height:30px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:18px;line-height:1;cursor:pointer}' +
      '.dfg-search-clear:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:16px}' +
      '.dfg-card{position:relative;display:flex;flex-direction:column;gap:0;text-align:left;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1);color:inherit;cursor:pointer;overflow:hidden;font:inherit;transition:border-color .15s,transform .15s,background .15s}' +
      '.dfg-card:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);transform:translateY(-1px)}' +
      '.dfg-card:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-cover{position:relative;aspect-ratio:4/3;width:100%;background:var(--dsw-alias-bg-layer-2);overflow:hidden;display:flex;align-items:center;justify-content:center}' +
      '.dfg-cover-bg{position:absolute;inset:-10%;width:120%;height:120%;object-fit:cover;filter:blur(18px) saturate(1.15);opacity:.34;pointer-events:none}' +
      '.dfg-cover-art{position:relative;z-index:1;width:100%;height:100%;object-fit:contain;display:block}' +
      '.dfg-cover-fallback{flex-direction:column;gap:6px;color:rgba(255,255,255,.86)}' +
      '.dfg-cover-initials{font-size:26px;font-weight:700;letter-spacing:1px}' +
      '.dfg-cover-glyph{font-size:10px;letter-spacing:2px;opacity:.55}' +
      '.dfg-card-body{display:flex;flex-direction:column;gap:2px;padding:8px 10px 4px;min-width:0}' +
      '.dfg-card-title{font-size:13px;line-height:18px;font-weight:500;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:18px}' +
      '.dfg-card-meta{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-card-time{font-size:11px;color:var(--dsw-alias-label-secondary);opacity:.8}' +
      '.dfg-card-play{position:absolute;left:8px;right:8px;bottom:8px;display:none;align-items:center;justify-content:center;height:26px;border-radius:8px;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l2);font-size:12px;color:var(--dsw-alias-label-primary)}' +
      '.dfg-card:hover .dfg-card-play{display:flex}' +
      '.dfg-chips{display:flex;flex-wrap:wrap;gap:8px}' +
      '.dfg-chip{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:6px 12px;font:inherit;font-size:12px;cursor:pointer}' +
      '.dfg-chip:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}' +
      '.dfg-empty{margin-top:16px;padding:22px;border:1px dashed var(--dsw-alias-border-l1);border-radius:12px;color:var(--dsw-alias-label-secondary);text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px}' +
      '.dfg-empty-recent{padding:28px}' +
      '.dfg-empty p{margin:0}' +
      '.dfg-error{margin-top:16px;padding:16px 18px;border:1px solid var(--dsw-alias-state-error-primary);border-radius:12px;background:var(--dsw-alias-bg-layer-1);display:flex;flex-direction:column;gap:8px}' +
      '.dfg-error-title{font-weight:600;color:var(--dsw-alias-state-error-primary)}' +
      '.dfg-error-text{color:var(--dsw-alias-label-secondary);font-size:13px}' +
      '.dfg-inline-error{margin:8px 0;color:var(--dsw-alias-state-error-primary);font-size:12px}' +
      '.dfg-button{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 14px;border-radius:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;cursor:pointer;text-decoration:none}' +
      '.dfg-button:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-button:disabled{opacity:.45;cursor:default}' +
      '.dfg-button-ghost{background:transparent}' +
      '.dfg-button-small{height:28px;padding:0 10px;font-size:12px}' +
      '.dfg-more{display:flex;justify-content:center;margin:20px 0}' +
      '.dfg-notice{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:6px 0 4px;padding:10px 14px;border-radius:10px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}' +
      '.dfg-notice button{border:0;background:transparent;color:var(--dsw-alias-brand-primary);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}' +
      '.dfg-footer{display:flex;flex-wrap:wrap;gap:6px;margin-top:28px;padding-top:14px;border-top:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);font-size:11px}' +
      '.dfg-footer-sep{opacity:.5}' +
      '.dfg-muted{color:var(--dsw-alias-label-secondary)}' +
      '.dfg-hidden{display:none}' +
      '.dfg-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}' +
      '.dfg-spinner{display:inline-block;width:22px;height:22px;border-radius:50%;border:2px solid var(--dsw-alias-border-l1);border-top-color:var(--dsw-alias-brand-primary);animation:dfg-spin .8s linear infinite}' +
      '.dfg-spinner-small{width:16px;height:16px;border-width:2px;flex:none;margin-right:2px}' +
      '@keyframes dfg-spin{to{transform:rotate(360deg)}}' +
      '.dfg-skeleton{display:flex;flex-direction:column;gap:6px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;overflow:hidden;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-skeleton-cover{aspect-ratio:4/3;background:var(--dsw-alias-bg-layer-2);animation:dfg-pulse 1.4s ease-in-out infinite}' +
      '.dfg-skeleton-line{height:10px;margin:0 10px;border-radius:4px;background:var(--dsw-alias-bg-layer-2);animation:dfg-pulse 1.4s ease-in-out infinite}' +
      '.dfg-skeleton-line.short{width:50%;margin-bottom:10px}' +
      '@keyframes dfg-pulse{0%,100%{opacity:.55}50%{opacity:1}}' +
      '.dfg-game{height:100%;display:flex;flex-direction:column;overflow:hidden;color:var(--dsw-alias-label-primary)}' +
      '.dfg-game-head{display:flex;align-items:center;gap:14px;padding:12px 22px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}' +
      '.dfg-back{height:30px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}' +
      '.dfg-back:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}' +
      '.dfg-game-title{min-width:0}' +
      '.dfg-game-title h1{margin:0;font-size:16px;line-height:22px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-game-sub{display:flex;gap:8px;align-items:center;color:var(--dsw-alias-label-secondary);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-game-sub a{color:var(--dsw-alias-brand-primary);text-decoration:none}' +
      '.dfg-game-body{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;align-items:center;padding:14px 18px 18px;gap:10px}' +
      '.dfg-stage{position:relative;width:100%;max-width:920px;aspect-ratio:var(--dfg-aspect,4 / 3);background:#000;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;outline:none;flex:none}' +
      '.dfg-stage:focus-visible{box-shadow:0 0 0 3px rgba(77,107,254,.35)}' +
      '.dfg-stage:fullscreen{max-width:none;width:100vw;height:100vh;border-radius:0;border:0;aspect-ratio:auto}' +
      '.dfg-canvas{width:100%;height:100%;object-fit:fill;image-rendering:pixelated;display:block;background:#000}' +
      '.dfg-stage:fullscreen .dfg-canvas{object-fit:contain}' +
      '.dfg-paused{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.42);color:#fff;font-size:18px;letter-spacing:2px;pointer-events:none}' +
      '.dfg-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px;max-width:920px;width:100%}' +
      '.dfg-tool{position:relative;display:inline-flex;align-items:center;gap:5px;height:30px;padding:0 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;cursor:pointer;white-space:nowrap}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{content:attr(data-tip);position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%);z-index:45;max-width:240px;padding:5px 8px;border-radius:6px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-size:11px;line-height:15px;white-space:nowrap;pointer-events:none;opacity:0;visibility:hidden;box-shadow:0 6px 20px rgba(0,0,0,.28)}' +
      '.dfg-tool[data-tip]:hover::after,.dfg-volume[data-tip]:hover::after{opacity:1;visibility:visible}' +
      '.dfg-tool[aria-expanded="true"]::after{display:none}' +
      '.dfg-volume{position:relative}' +
      '.dfg-aspect-wrap{position:relative;display:inline-flex}' +
      '.dfg-aspect-menu{position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%);z-index:50;display:flex;flex-direction:column;gap:2px;min-width:178px;padding:5px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-overlay);box-shadow:0 8px 28px rgba(0,0,0,.32)}' +
      '.dfg-aspect-item{display:flex;align-items:center;gap:8px;height:30px;padding:0 8px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:left;cursor:pointer}' +
      '.dfg-aspect-item:hover,.dfg-aspect-item-active{background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-aspect-check{width:12px;flex:none;color:var(--dsw-alias-brand-primary);font-size:12px}' +
      '.dfg-aspect-name{flex:1;white-space:nowrap}' +
      '.dfg-aspect-id{color:var(--dsw-alias-label-secondary);font-size:11px;font-variant-numeric:tabular-nums}' +
      '.dfg-tool:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-tool:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-tool-active{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-tool-icon{font-size:12px;line-height:1}' +
      '.dfg-volume{display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary)}' +
      '.dfg-volume input{width:76px;accent-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-status{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;font-size:11px;color:var(--dsw-alias-label-secondary);max-width:920px;width:100%;padding-top:2px}' +
      '.dfg-ok{color:var(--dsw-alias-state-success-primary)}' +
      '.dfg-game-loading{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--dsw-alias-label-secondary)}' +
      '.dfg-game-error{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:12px;padding:24px;max-width:620px;margin:0 auto}' +
      '.dfg-game-error h2{margin:0;font-size:17px}' +
      '.dfg-game-error p{margin:0;color:var(--dsw-alias-label-secondary);line-height:1.7}' +
      '.dfg-modal-backdrop{position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:24px}' +
      '.dfg-modal{width:min(560px,100%);max-height:min(78vh,720px);display:flex;flex-direction:column;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.45);overflow:hidden}' +
      '.dfg-modal-wide{width:min(720px,100%)}' +
      '.dfg-modal-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-modal-head h2{margin:0;font-size:15px;font-weight:600}' +
      '.dfg-modal-close{width:28px;height:28px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:18px;line-height:1;cursor:pointer}' +
      '.dfg-modal-close:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-modal-body{padding:16px 18px;overflow:auto;display:flex;flex-direction:column;gap:12px}' +
      '.dfg-modal-foot{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-slot-list{display:flex;flex-direction:column;gap:8px}' +
      '.dfg-slot{display:flex;align-items:center;gap:12px;padding:8px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-slot-thumb{width:64px;height:48px;flex:none;border-radius:6px;overflow:hidden;background:var(--dsw-alias-bg-layer-2);display:flex;align-items:center;justify-content:center;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-slot-thumb img{width:100%;height:100%;object-fit:cover;display:block}' +
      '.dfg-slot-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:12px}' +
      '.dfg-slot-info span{color:var(--dsw-alias-label-secondary);font-size:11px}' +
      '.dfg-slot-actions{display:flex;gap:6px;flex:none}' +
      '.dfg-tabs{display:flex;gap:6px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:8px}' +
      '.dfg-tab{border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;padding:6px 10px;border-radius:8px;cursor:pointer}' +
      '.dfg-tab-active{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-autofire{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:8px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-autofire label{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--dsw-alias-label-primary);cursor:pointer}' +
      '.dfg-autofire input{accent-color:var(--dsw-alias-brand-primary);width:15px;height:15px}' +
      '.dfg-aspect-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:8px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);font-size:12px}' +
      '.dfg-aspect-setting select{height:28px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;padding:0 6px}' +
      '.dfg-control-list{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px}' +
      '.dfg-control-row{display:flex;align-items:center;gap:8px;min-width:0;padding:4px 0;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-control-name{width:64px;flex:none;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-control-value{flex:1;min-width:0;font-size:12px;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-capturing{color:var(--dsw-alias-brand-primary)}' +
      '.dfg-textarea{width:100%;box-sizing:border-box;resize:vertical;min-height:150px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);padding:10px 12px;font:12px/1.6 ui-monospace,SFMono-Regular,Consolas,monospace;outline:none}' +
      '.dfg-textarea:focus{border-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-file-list{display:flex;flex-direction:column;gap:6px}' +
      '.dfg-file{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:left;cursor:pointer}' +
      '.dfg-file:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-file-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '.dfg-file-size{color:var(--dsw-alias-label-secondary);flex:none}' +
      '.dfg-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:80;max-width:min(520px,90vw);padding:10px 16px;border-radius:10px;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary);font-size:12px;box-shadow:0 8px 30px rgba(0,0,0,.35);text-align:center}' +
      '.dfg-import-section{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-import-section h2{margin:0 0 2px;font-size:14px;font-weight:600}' +
      '.dfg-import-section p{margin:0;font-size:12px}' +
      '.dfg-expanded{margin:-4px 0 12px;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-page,.dfg-game{--fc-red:#c8102e;--fc-red-bright:#e0253d;--fc-red-deep:#7f1020;--fc-cream:#f5e7c6;--fc-cream-dim:#d8c3a2;--fc-gold:#f6c445;--fc-ink:#0b080c;--fc-panel:#1a1319;--fc-panel-2:#241a21;--fc-line:#4a3742;--dsw-alias-bg-base:#110d12;--dsw-alias-bg-layer-1:#1a1319;--dsw-alias-bg-layer-2:#2a1e26;--dsw-alias-bg-overlay:#1c141a;--dsw-alias-label-primary:#f5e7c6;--dsw-alias-label-secondary:#c9b79e;--dsw-alias-border-l1:#4a3742;--dsw-alias-border-l2:#7a5a62;--dsw-alias-brand-primary:#e0253d;--dsw-alias-state-error-primary:#ff6b6b;--dsw-alias-state-success-primary:#9fe6a0;font-family:"Cascadia Mono","Consolas","Courier New","MS Gothic",monospace;text-rendering:geometricPrecision;color-scheme:dark}' +
      '.dfg-page{background:radial-gradient(circle at 50% -30%,rgba(200,16,46,.24),transparent 55%),repeating-linear-gradient(0deg,rgba(255,255,255,.022) 0 1px,transparent 1px 3px),#110d12;border:1px solid #352631;box-shadow:inset 0 0 90px rgba(0,0,0,.62);padding:0;color:var(--fc-cream);width:100%;max-width:none;margin:0}' +
      '.dfg-content{width:100%;max-width:1200px;margin:0 auto;padding:18px 24px 32px;box-sizing:border-box}' +
      '.dfg-page-centered{padding:24px}' +
      '.dfg-page::-webkit-scrollbar,.dfg-game-body::-webkit-scrollbar{width:10px;height:10px}' +
      '.dfg-page::-webkit-scrollbar-track,.dfg-game-body::-webkit-scrollbar-track{background:#080609}' +
      '.dfg-page::-webkit-scrollbar-thumb,.dfg-game-body::-webkit-scrollbar-thumb{background:#b3122e;border:2px solid #080609}' +
      '.dfg-page-head{position:relative;background:linear-gradient(180deg,#92101e,#c8102e 55%,#8f111b);border:2px solid var(--fc-cream);border-radius:5px 5px 0 0;padding:16px 18px 18px;margin:0 0 24px;box-shadow:6px 6px 0 #050305;color:#fff3d6;align-items:center}' +
      '.dfg-page-head::after{content:"";position:absolute;left:-2px;right:-2px;bottom:-9px;height:8px;border:2px solid #050305;background:repeating-linear-gradient(90deg,#120d12 0 10px,var(--fc-gold) 10px 14px)}' +
      '.dfg-page-head h1{font-size:32px;line-height:38px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-shadow:4px 4px 0 #3b050b;color:#fff6de}' +
      '.dfg-page-head p{color:#ffd98a;font-size:11px;line-height:17px;text-transform:uppercase;letter-spacing:.12em;margin-top:5px}' +
      '.dfg-page-head .dfg-button,.dfg-page-head .dfg-button-ghost{border:2px solid var(--fc-cream);background:rgba(0,0,0,.2);color:#fff3d6;box-shadow:3px 3px 0 #3b050b;border-radius:3px;font-size:10px;letter-spacing:.08em;text-transform:uppercase}' +
      '.dfg-page-head .dfg-button:hover,.dfg-page-head .dfg-button-ghost:hover{background:var(--fc-cream);border-color:#fff;color:#8f111b}' +
      '.dfg-marquee{display:flex;align-items:center;gap:8px;height:32px;margin:0 0 14px;padding:0 9px;background:linear-gradient(90deg,#8f111b,#c8102e 55%,#7f1020);border:2px solid var(--fc-cream);border-radius:3px;box-shadow:4px 4px 0 #050305;color:#fff3d6;font-size:9px;line-height:1;font-weight:700;letter-spacing:.18em;text-transform:uppercase;overflow:hidden;white-space:nowrap}' +
      '.dfg-marquee-title{font-size:12px;letter-spacing:.22em;color:#fff;text-shadow:2px 2px 0 #4a0610}' +
      '.dfg-marquee-sep{color:var(--fc-gold);font-size:7px}' +
      '.dfg-marquee-sub{color:#ffd98a}' +
      '.dfg-marquee-spacer{flex:1;min-width:8px;border-top:1px dashed rgba(245,231,198,.42);height:1px}' +
      '.dfg-marquee-year{color:var(--fc-gold);border-left:1px solid rgba(245,231,198,.35);padding-left:8px;letter-spacing:.12em}' +
      '.dfg-hero{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:178px;margin:0 0 18px;padding:20px 22px;border:2px solid var(--fc-cream);border-radius:4px;background:linear-gradient(120deg,rgba(11,8,12,.1),rgba(11,8,12,.72)),repeating-linear-gradient(135deg,rgba(200,16,46,.7) 0 3px,rgba(11,8,12,.2) 3px 14px),#7f1020;box-shadow:7px 7px 0 #050305;overflow:hidden;color:#fff3d6}' +
      '.dfg-hero::after{content:"";position:absolute;inset:0;z-index:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.22) 0 1px,transparent 1px 4px);pointer-events:none;mix-blend-mode:multiply}' +
      '.dfg-hero-copy{position:relative;z-index:1;min-width:0;flex:1}' +
      '.dfg-hero-kicker{display:inline-block;margin-bottom:6px;color:var(--fc-gold);font-size:10px;line-height:14px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;border-left:4px solid var(--fc-gold);padding-left:7px}' +
      '.dfg-hero h1{margin:0;color:#fff6de;font-size:42px;line-height:44px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-shadow:4px 4px 0 #3b050b,8px 8px 0 rgba(0,0,0,.35)}' +
      '.dfg-hero p{margin:7px 0 0;color:#ffe0a3;font-size:11px;line-height:17px;letter-spacing:.04em}' +
      '.dfg-hero-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}' +
      '.dfg-hero-tags span{padding:3px 7px;border:1px solid rgba(245,231,198,.75);background:rgba(11,8,12,.35);color:#fff3d6;font-size:8px;line-height:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}' +
      '.dfg-hero-badge{position:relative;z-index:1;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;width:118px;height:118px;border:3px solid #fff3d6;border-radius:6px;background:linear-gradient(180deg,#f5e7c6,#d8c3a2);color:#a50d23;box-shadow:5px 5px 0 #3b050b;transform:rotate(2deg)}' +
      '.dfg-hero-badge span{font-size:46px;line-height:46px;font-weight:900;letter-spacing:.04em;text-shadow:2px 2px 0 #e6cfa9}' +
      '.dfg-hero-badge small{font-size:10px;line-height:14px;font-weight:800;letter-spacing:.2em;margin-top:2px}' +
      '.dfg-search{background:linear-gradient(180deg,#110d12 85%,rgba(17,13,18,0));padding:2px 0 10px;margin-bottom:8px;border-bottom:2px solid #3a2834;gap:7px}' +
      '.dfg-search-icon{display:inline-flex;align-items:center;justify-content:center;flex:none;width:42px;height:44px;box-sizing:border-box;background:var(--fc-red);border:2px solid var(--fc-cream);border-radius:3px;color:#fff3d6;font-size:18px;line-height:1;box-shadow:3px 3px 0 #050305;transform:none}' +
      '.dfg-search input{height:46px;border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:var(--fc-cream);box-shadow:inset 0 0 0 2px #090609;font-size:14px;letter-spacing:.03em}' +
      '.dfg-search input::placeholder{color:#9d877d;text-transform:none}' +
      '.dfg-search input:focus{border-color:var(--fc-gold);box-shadow:inset 0 0 0 2px #090609,0 0 0 3px rgba(246,196,69,.2)}' +
      '.dfg-search-clear{width:28px;height:28px;border-radius:2px;border:1px solid transparent;color:var(--fc-cream-dim);font-size:17px}' +
      '.dfg-search-clear:hover{border-color:var(--fc-gold);background:#3a2430;color:var(--fc-gold)}' +
      '.dfg-section{margin:20px 0 0;padding-top:10px;border-top:1px dashed #3a2834}' +
      '.dfg-section-head{margin-bottom:12px;align-items:center}' +
      '.dfg-section-head h2{font-size:15px;line-height:22px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--fc-gold);border-left:5px solid var(--fc-red);padding-left:9px;text-shadow:2px 2px 0 #050305}' +
      '.dfg-section-head span{color:#e8d4b0;background:#1a1319;border:1px solid #6b4a56;border-radius:2px;padding:3px 7px;font-size:10px;line-height:15px;letter-spacing:.06em;text-transform:uppercase;box-shadow:2px 2px 0 #050305}' +
      '.dfg-expanded{color:#d9b46b;font-size:11px;line-height:17px;letter-spacing:.04em;margin-bottom:8px}' +
      '.dfg-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:20px;grid-template-columns:none}' +
      '.dfg-card{border:2px solid #5a3a46;border-radius:5px;background:#1a1319;box-shadow:5px 5px 0 #050305;transition:transform .12s,box-shadow .12s,border-color .12s,background .12s;width:auto;flex:1 1 230px;max-width:300px;overflow:hidden}' +
      '.dfg-skeleton{flex:1 1 230px;max-width:300px}' +
      '.dfg-card:hover{border-color:var(--fc-gold);background:#241a21;transform:translate(-2px,-2px);box-shadow:8px 8px 0 var(--fc-red-deep)}' +
      '.dfg-card:focus-visible{outline:3px solid var(--fc-gold);outline-offset:2px}' +
      '.dfg-cover{background:linear-gradient(180deg,rgba(26,11,16,.35),rgba(11,8,12,.72)),repeating-linear-gradient(135deg,rgba(200,16,46,.4) 0 2px,rgba(11,8,12,0) 2px 7px),#0b080c;border-bottom:2px solid #3a2834;box-shadow:inset 0 0 20px rgba(0,0,0,.55)}' +
      '.dfg-cover::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,rgba(11,8,12,.55),transparent 20%,transparent 80%,rgba(11,8,12,.55)),linear-gradient(180deg,rgba(11,8,12,.2),transparent 30%,transparent 70%,rgba(11,8,12,.35))}' +
      '.dfg-cover::after{content:"FC";position:absolute;top:6px;right:6px;z-index:3;background:var(--fc-red);color:#fff3d6;border:1px solid #ffb3b3;border-radius:2px;padding:2px 4px;font-size:8px;line-height:10px;font-weight:800;letter-spacing:.12em;box-shadow:2px 2px 0 #050305}' +
      '.dfg-cover-art{z-index:2;filter:drop-shadow(0 2px 5px rgba(0,0,0,.45))}' +
      '.dfg-cover-fallback{background:linear-gradient(135deg,#7f1020,#1b1118 60%,#2b1c2a) !important}' +
      '.dfg-cover-fallback .dfg-cover-initials,.dfg-cover-fallback .dfg-cover-glyph{position:relative;z-index:2}' +
      '.dfg-cover-initials{color:#fff3d6;font-size:30px;font-weight:800;letter-spacing:.08em;text-shadow:3px 3px 0 #3b050b}' +
      '.dfg-cover-glyph{color:var(--fc-gold);font-size:9px;letter-spacing:.24em}' +
      '.dfg-card-body{padding:10px 11px 9px;border-top:2px solid #3a2834;background:linear-gradient(180deg,#241a21,#181118);gap:4px}' +
      '.dfg-card-title{color:var(--fc-cream);font-size:14px;line-height:20px;font-weight:700;letter-spacing:.02em;min-height:20px}' +
      '.dfg-card-meta{color:var(--fc-gold);font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-card-time{color:#a98d77;font-size:10px;line-height:15px}' +
      '.dfg-card-play{left:8px;right:8px;bottom:8px;height:30px;background:var(--fc-red);border:2px solid var(--fc-cream);border-radius:3px;color:#fff3d6;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;box-shadow:2px 2px 0 #050305}' +
      '.dfg-card-main{display:flex;flex-direction:column;width:100%;padding:0;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}' +
      '.dfg-card-main:focus-visible{outline:3px solid var(--fc-gold);outline-offset:-3px}' +
      '.dfg-card-actions{display:flex;gap:6px;padding:8px 9px 9px;border-top:1px solid #3a2834;background:#120d12}' +
      '.dfg-card-action{flex:1;min-width:0;height:30px;padding:0 5px;border:2px solid #6b4a56;border-radius:2px;background:#241a21;color:#e8d4b0;font:inherit;font-size:10px;line-height:14px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-card-action:hover{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-card-action-primary{border-color:var(--fc-cream);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-card-action-primary:hover{border-color:var(--fc-gold);background:var(--fc-red-bright)}' +
      '.dfg-card-delete{flex:0 0 34px;width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border:2px solid #7a323c;border-radius:2px;background:#2a151a;color:#e6a0a0;cursor:pointer;box-shadow:2px 2px 0 #050305}' +
      '.dfg-card-delete:hover{border-color:#ff8d8d;background:#7f1020;color:#fff3d6}' +
      '.dfg-card-delete:focus-visible{outline:2px solid var(--fc-gold);outline-offset:1px}' +
      '.dfg-button-danger{border-color:#ffb3b3;background:#a50d23;color:#fff3d6}' +
      '.dfg-button-danger:hover{background:#d21f2b;border-color:#fff3d6}' +
      '.dfg-delete-dialog{display:grid;grid-template-columns:130px minmax(0,1fr);gap:16px;align-items:start}' +
      '.dfg-delete-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px;box-shadow:4px 4px 0 #050305}' +
      '.dfg-delete-copy h3{margin:0;color:var(--fc-cream);font-size:19px;line-height:25px;font-weight:800}' +
      '.dfg-delete-copy p{margin:8px 0 0;color:#d8c3a2;font-size:12px;line-height:18px}' +
      '.dfg-delete-copy .dfg-delete-hint{color:#b9a38c;font-size:12px;line-height:18px}' +
      '.dfg-section-right{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-left:auto}' +
      '.dfg-view-toggle{display:inline-flex;border:2px solid #3a2834;border-radius:3px;background:#120d12;box-shadow:2px 2px 0 #050305;overflow:hidden}' +
      '.dfg-view-toggle-btn{height:34px;padding:0 10px;border:0;border-right:1px solid #3a2834;background:transparent;color:#b9a38c;font:inherit;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;white-space:nowrap}' +
      '.dfg-view-toggle-btn:last-child{border-right:0}' +
      '.dfg-view-toggle-btn:hover{background:#2a1e26;color:var(--fc-cream)}' +
      '.dfg-view-toggle-active{background:var(--fc-red);color:#fff3d6}' +
      '.dfg-details{display:grid;grid-template-columns:150px minmax(0,1fr);gap:16px;align-items:start}' +
      '.dfg-details-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px;box-shadow:4px 4px 0 #050305}' +
      '.dfg-details-info{min-width:0}' +
      '.dfg-details-info h3{margin:0;color:var(--fc-cream);font-size:20px;line-height:26px;font-weight:800;letter-spacing:.02em}' +
      '.dfg-details-meta{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:5px;color:var(--fc-gold);font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-details-cached{padding:2px 5px;border:1px solid #7fbf7f;border-radius:2px;color:#b9e6b9;font-size:8px;line-height:11px;background:#122016}' +
      '.dfg-details-desc{margin:9px 0 0;color:#cdbb9f;font-size:11px;line-height:17px;max-height:80px;overflow:auto}' +
      '.dfg-details-link{display:inline-block;margin-top:8px;color:var(--fc-gold);font-size:10px;text-decoration:underline;text-underline-offset:2px}' +
      '.dfg-details-loading{display:flex;align-items:center;gap:8px;color:#d9b46b;font-size:11px}' +
      '.dfg-details-files{display:flex;flex-direction:column;gap:5px;margin-top:12px;padding-top:10px;border-top:1px dashed #3a2834}' +
      '.dfg-details-files strong{color:var(--fc-gold);font-size:10px;text-transform:uppercase;letter-spacing:.1em}' +
      '.dfg-detail-file{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:32px;padding:6px 8px;border:2px solid #3a2834;border-radius:2px;background:#1a1319;color:#e8d4b0;font:inherit;font-size:11px;text-align:left;cursor:pointer}' +
      '.dfg-detail-file:hover{border-color:var(--fc-gold)}' +
      '.dfg-detail-file-active{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-detail-file small{color:#b9a38c;font-size:9px}' +
      '.dfg-page-tab .dfg-card-action{font-size:9px;height:29px}' +
      '.dfg-chips{gap:7px}' +
      '.dfg-chip{border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:#e7d3b4;box-shadow:2px 2px 0 #050305;font-size:11px;line-height:16px;padding:5px 10px;letter-spacing:.03em}' +
      '.dfg-chip:hover{border-color:var(--fc-gold);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-button{border:2px solid var(--fc-cream);border-radius:3px;background:var(--fc-red);color:#fff3d6;box-shadow:3px 3px 0 #050305;font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:12px;height:36px}' +
      '.dfg-button:hover{background:var(--fc-red-bright);border-color:var(--fc-gold);transform:translate(-1px,-1px);box-shadow:4px 4px 0 #050305}' +
      '.dfg-button:active{transform:translate(2px,2px);box-shadow:1px 1px 0 #050305}' +
      '.dfg-button-ghost{background:#1a1319;color:var(--fc-cream);border-color:#6b4a56}' +
      '.dfg-button-ghost:hover{background:#2a1e26;color:var(--fc-gold);border-color:var(--fc-gold)}' +
      '.dfg-button:disabled{opacity:.45;transform:none;box-shadow:3px 3px 0 #050305}' +
      '.dfg-notice{border:2px solid var(--fc-gold);border-left:8px solid var(--fc-red);border-radius:3px;background:#231b13;color:#e8d4b0;box-shadow:3px 3px 0 #050305;font-size:11px;line-height:17px;letter-spacing:.02em;padding:11px 14px}' +
      '.dfg-notice button{border:1px solid #6b4a56;border-radius:2px;background:#1a1319;color:var(--fc-gold);padding:4px 8px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}' +
      '.dfg-notice button:hover{border-color:var(--fc-gold);background:#3a2430}' +
      '.dfg-empty{border:2px dashed #6b4a56;border-radius:3px;background:#181118;color:#c9b79e;box-shadow:inset 0 0 30px rgba(0,0,0,.55);font-size:13px}' +
      '.dfg-empty-recent{padding:26px 18px}' +
      '.dfg-error{border:2px solid var(--dsw-alias-state-error-primary);border-left:8px solid var(--dsw-alias-state-error-primary);border-radius:3px;background:#241015;box-shadow:3px 3px 0 #050305}' +
      '.dfg-error-title{text-transform:uppercase;letter-spacing:.08em;font-size:12px}' +
      '.dfg-error-text{color:#e8c4c4;font-size:11px}' +
      '.dfg-inline-error{color:#ff8d8d;font-size:11px;letter-spacing:.02em}' +
      '.dfg-import-section{border:2px dashed #6b4a56;border-radius:3px;background:#1a1319;box-shadow:4px 4px 0 #050305;padding:13px 14px}' +
      '.dfg-import-section h2{color:var(--fc-gold);font-size:12px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-import-section p{color:#b9a38c;font-size:10px}' +
      '.dfg-footer{border-top:2px dashed #3a2834;color:#9d877d;font-size:10px;text-transform:uppercase;letter-spacing:.07em;padding-top:14px}' +
      '.dfg-footer::after{content:"INSERT COIN  ·  1983";margin-left:auto;color:var(--fc-gold);letter-spacing:.1em}' +
      '.dfg-muted{color:#b9a38c}' +
      '.dfg-skeleton{border:2px solid #3a2834;border-radius:3px;background:#1a1319;box-shadow:4px 4px 0 #050305}' +
      '.dfg-skeleton-cover{background:#241a21}' +
      '.dfg-skeleton-line{background:#2a1e26;border-radius:2px}' +
      '.dfg-game{background:radial-gradient(circle at 50% -20%,rgba(200,16,46,.14),transparent 58%),#0f0b10}' +
      '.dfg-game-head{background:linear-gradient(180deg,#241a21,#140e13);border-bottom:3px solid var(--fc-red);padding:10px 18px;box-shadow:0 3px 0 #050305;gap:12px}' +
      '.dfg-back{border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:var(--fc-cream-dim);box-shadow:2px 2px 0 #050305;font-size:10px;text-transform:uppercase;letter-spacing:.06em;height:30px}' +
      '.dfg-back:hover{border-color:var(--fc-gold);color:var(--fc-gold);background:#2a1e26}' +
      '.dfg-game-title h1{font-size:18px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--fc-cream);text-shadow:2px 2px 0 #050305}' +
      '.dfg-game-title h1::before{content:"▶";color:var(--fc-red-bright);font-size:10px;margin-right:7px;vertical-align:2px}' +
      '.dfg-game-sub{color:#d9b46b;font-size:9px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-game-sub a{color:var(--fc-gold);text-decoration:underline;text-underline-offset:2px}' +
      '.dfg-game-body{background:repeating-linear-gradient(0deg,rgba(255,255,255,.018) 0 1px,transparent 1px 3px),#0f0b10;padding:16px 18px 18px;gap:10px}' +
      '.dfg-stage{border:8px solid #2a2029;outline:2px solid #5a3a46;border-radius:5px;box-shadow:0 0 0 2px #070508,0 12px 32px rgba(0,0,0,.7);box-sizing:border-box;background:#000;max-width:1000px}' +
      '.dfg-stage::after{content:"";position:absolute;inset:0;z-index:2;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 1px,transparent 1px 3px);pointer-events:none;mix-blend-mode:multiply}' +
      '.dfg-stage:focus-visible{box-shadow:0 0 0 3px var(--fc-gold),0 0 0 2px #070508,0 12px 32px rgba(0,0,0,.7)}' +
      '.dfg-canvas{filter:contrast(1.04) saturate(1.08)}' +
      '.dfg-paused{z-index:3;background:rgba(0,0,0,.58);color:var(--fc-gold);font-size:16px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;text-shadow:2px 2px 0 #000}' +
      '.dfg-toolbar{background:#171118;border:2px solid #4a3742;border-radius:4px;padding:6px;box-shadow:4px 4px 0 #050305;box-sizing:border-box}' +
      '.dfg-tool{border:2px solid #4a3742;border-radius:3px;background:#241a21;color:#e8d4b0;font-size:11px;line-height:15px;font-family:inherit;text-transform:uppercase;letter-spacing:.03em;box-shadow:2px 2px 0 #050305;height:32px}' +
      '.dfg-tool:hover{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-tool:active{transform:translate(1px,1px);box-shadow:1px 1px 0 #050305}' +
      '.dfg-tool-active{background:var(--fc-red);border-color:var(--fc-gold);color:#fff3d6}' +
      '.dfg-tool-icon{font-size:13px;line-height:1}' +
      '.dfg-volume{border:2px solid #4a3742;border-radius:3px;background:#241a21;box-shadow:2px 2px 0 #050305;height:32px}' +
      '.dfg-volume input{accent-color:var(--fc-gold)}' +
      '.dfg-status{color:#d9b46b;font-size:10px;line-height:16px;text-transform:uppercase;letter-spacing:.08em;border-top:1px dashed #3a2834;padding-top:6px;gap:6px}' +
      '.dfg-status span{background:#1a1319;border:1px solid #3a2834;border-radius:2px;padding:2px 6px}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{border:2px solid var(--fc-gold);border-radius:2px;background:#120d12;color:var(--fc-gold);font-family:inherit;font-size:9px;line-height:13px;text-transform:uppercase;letter-spacing:.05em;box-shadow:3px 3px 0 #050305;padding:4px 7px}' +
      '.dfg-aspect-menu{border:2px solid var(--fc-gold);border-radius:3px;background:#171118;box-shadow:5px 5px 0 #050305;padding:4px}' +
      '.dfg-aspect-item{border-radius:2px;color:#e8d4b0;font-family:inherit;font-size:10px;text-transform:uppercase;letter-spacing:.04em;height:30px}' +
      '.dfg-aspect-item:hover,.dfg-aspect-item-active{background:var(--fc-red);color:#fff3d6}' +
      '.dfg-aspect-check{color:var(--fc-gold)}' +
      '.dfg-aspect-item-active .dfg-aspect-check{color:#fff3d6}' +
      '.dfg-spinner{border-radius:2px;border:3px solid #4a3742;border-top-color:var(--fc-gold);box-shadow:2px 2px 0 #050305}' +
      '.dfg-game-loading{color:var(--fc-gold);font-size:11px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-game-error{background:#171118;border:2px solid #6b4a56;border-radius:3px;box-shadow:5px 5px 0 #050305;padding:24px 28px;margin:auto;max-width:560px}' +
      '.dfg-game-error h2{color:var(--fc-gold);font-size:14px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-game-error p{color:#e8c4c4;font-size:11px}' +
      '.dfg-modal-backdrop{background:rgba(5,2,6,.84);backdrop-filter:blur(2px)}' +
      '.dfg-modal{width:min(620px,100%);max-height:min(80vh,760px);border:2px solid var(--fc-gold);border-radius:3px;background:#171118;box-shadow:8px 8px 0 #050305}' +
      '.dfg-modal-head{background:var(--fc-red);border-bottom:2px solid var(--fc-gold);color:#fff3d6;padding:10px 14px}' +
      '.dfg-modal-head h2{font-size:12px;text-transform:uppercase;letter-spacing:.1em;text-shadow:2px 2px 0 #3b050b}' +
      '.dfg-modal-close{width:26px;height:26px;border:2px solid var(--fc-cream);border-radius:2px;background:#8f111b;color:#fff3d6;font-size:16px}' +
      '.dfg-modal-close:hover{background:#f5e7c6;color:#8f111b}' +
      '.dfg-modal-body{background:#171118;color:var(--fc-cream);gap:10px}' +
      '.dfg-modal-foot{border-top:2px solid #3a2834;background:#120d12}' +
      '.dfg-slot-list{gap:7px}' +
      '.dfg-slot{border:2px solid #3a2834;border-radius:3px;background:#1a1319;box-shadow:2px 2px 0 #050305;padding:7px}' +
      '.dfg-slot-thumb{border:1px solid #6b4a56;border-radius:2px;background:#08070a}' +
      '.dfg-slot-info span{color:#b9a38c}' +
      '.dfg-tabs{border-bottom:2px solid #3a2834;gap:4px;padding-bottom:6px}' +
      '.dfg-tab{border:2px solid transparent;border-radius:2px;color:#c9b79e;font-size:11px;text-transform:uppercase;letter-spacing:.04em;padding:5px 9px}' +
      '.dfg-tab:hover{color:var(--fc-cream);border-color:#4a3742}' +
      '.dfg-tab-active{background:var(--fc-red);border-color:var(--fc-gold);color:#fff3d6}' +
      '.dfg-autofire{border:2px solid #3a2834;border-radius:3px;background:#1a1319}' +
      '.dfg-autofire label{font-size:11px;color:var(--fc-cream)}' +
      '.dfg-autofire input{accent-color:var(--fc-gold)}' +
      '.dfg-aspect-setting{border:2px solid #3a2834;border-radius:3px;background:#1a1319;font-size:11px}' +
      '.dfg-aspect-setting select{border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font-size:11px}' +
      '.dfg-control-list{gap:4px 16px}' +
      '.dfg-control-row{border-bottom:1px dashed #3a2834;padding:5px 0}' +
      '.dfg-control-name{color:#b9a38c;font-size:10px;text-transform:uppercase;letter-spacing:.04em}' +
      '.dfg-control-value{color:var(--fc-gold);font-size:11px}' +
      '.dfg-capturing{color:var(--fc-red-bright);font-weight:800}' +
      '.dfg-textarea{border:2px solid #3a2834;border-radius:2px;background:#08120b;color:#9fe6a0;font-family:inherit;box-shadow:inset 0 0 14px rgba(0,0,0,.7)}' +
      '.dfg-textarea:focus{border-color:var(--fc-gold)}' +
      '.dfg-file-list{gap:5px}' +
      '.dfg-file{border:2px solid #3a2834;border-radius:3px;background:#1a1319;color:var(--fc-cream);font-size:11px;padding:9px 10px}' +
      '.dfg-file:hover{border-color:var(--fc-gold);background:#2a1e26}' +
      '.dfg-file-size{color:#b9a38c}' +
      '.dfg-toast{border:2px solid var(--fc-gold);border-radius:3px;background:#171118;color:var(--fc-cream);box-shadow:5px 5px 0 #050305;font-size:11px;letter-spacing:.02em}' +
      '.dfg-card-source{font-size:9px;line-height:12px;color:var(--fc-gold);text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-left:3px solid var(--fc-red);padding-left:5px}' +
      '.dfg-sourcebar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 12px;padding:8px 9px;border:2px solid #3a2834;border-radius:3px;background:#171118;box-shadow:3px 3px 0 #050305;flex-wrap:wrap}' +
      '.dfg-sourcebar label{display:flex;align-items:center;gap:8px;min-width:0;color:#d9b46b;font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}' +
      '.dfg-sourcebar select{height:32px;min-width:0;max-width:300px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:11px;padding:0 7px}' +
      '.dfg-sourcebar select:focus-visible{outline:2px solid var(--fc-gold);outline-offset:1px}' +
      '.dfg-source-manage{flex:none;height:32px;padding:0 10px;border:2px solid #6b4a56;border-radius:2px;background:#241a21;color:var(--fc-cream);font:inherit;font-size:10px;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-source-actions{display:flex;align-items:center;gap:6px;flex:none;flex-wrap:wrap;justify-content:flex-end}' +
      '.dfg-source-add{flex:none;height:32px;padding:0 10px;border:2px solid var(--fc-gold);border-radius:2px;background:#3a2430;color:var(--fc-gold);font:inherit;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-source-add:hover{background:var(--fc-gold);color:#3b050b}' +
      '.dfg-url-form{display:flex;gap:8px;align-items:stretch;padding:10px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-url-form input{flex:1;min-width:0;height:38px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:13px;padding:0 9px;outline:none}' +
      '.dfg-url-form input:focus{border-color:var(--fc-gold)}' +
      '.dfg-url-form .dfg-button{flex:none}' +
      '.dfg-url-preview{display:grid;grid-template-columns:130px minmax(0,1fr);gap:14px;align-items:start;margin-top:12px;padding:12px;border:2px solid var(--fc-gold);background:#171118;box-shadow:4px 4px 0 #050305}' +
      '.dfg-url-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px}' +
      '.dfg-url-info{min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:5px}' +
      '.dfg-url-info h3{margin:0;color:var(--fc-cream);font-size:19px;line-height:25px}' +
      '.dfg-url-file{margin:2px 0 0;color:#d9b46b;font-size:12px;line-height:17px;word-break:break-all}' +
      '.dfg-url-add{margin-top:7px}' +
      '.dfg-url-existing{display:flex;flex-direction:column;gap:6px;margin-top:14px;padding-top:12px;border-top:1px dashed #3a2834}' +
      '.dfg-url-existing strong{color:var(--fc-gold);font-size:12px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-url-existing-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 8px;border:1px solid #3a2834;background:#1a1319;color:#e8d4b0;font-size:12px}' +
      '.dfg-url-existing-row span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '.dfg-source-manage:hover{border-color:var(--fc-gold);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-source-warning{margin:4px 0 8px;padding:7px 9px;border:2px solid #f6c445;border-left:7px solid #c8102e;border-radius:2px;background:#2a2014;color:#f0d49a;font-size:9px;line-height:14px}' +
      '.dfg-source-hint{margin:0;color:#c9b79e;font-size:10px;line-height:16px}' +
      '.dfg-source-format{color:#e8d4b0;background:#120d12;border:1px dashed #4a3742;padding:6px 8px;word-break:break-all;font-size:9px;line-height:14px}' +
      '.dfg-source-form{display:flex;flex-direction:column;gap:8px;padding:10px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-source-form label{display:flex;flex-direction:column;gap:4px;color:#d9b46b;font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-source-form input{height:32px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:11px;padding:0 8px;outline:none}' +
      '.dfg-source-form input:focus{border-color:var(--fc-gold)}' +
      '.dfg-source-form .dfg-button{align-self:flex-start}' +
      '.dfg-source-list{display:flex;flex-direction:column;gap:6px;margin-top:10px}' +
      '.dfg-source-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-source-info{display:flex;flex-direction:column;gap:3px;min-width:0}' +
      '.dfg-source-info strong{font-size:11px;color:var(--fc-cream)}' +
      '.dfg-source-info code{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#b9a38c;font-size:9px}' +
      '.dfg-page-tab .dfg-sourcebar{padding:6px 7px}' +
      '.dfg-page-tab .dfg-sourcebar label{gap:6px;font-size:9px}' +
      '.dfg-page-tab .dfg-sourcebar select{height:30px;max-width:170px;font-size:10px}' +
      '.dfg-page-tab .dfg-source-manage{height:30px;font-size:9px;padding:0 7px}' +
      '.dfg-page-tab{padding:0;max-width:none;height:100%}' +
      '.dfg-page-tab .dfg-content{padding:12px 12px 24px;max-width:1200px}' +
      '.dfg-page-tab .dfg-marquee{display:none}' +
      '.dfg-page-tab .dfg-hero{min-height:150px;padding:16px 18px;margin-bottom:14px;gap:12px}' +
      '.dfg-page-tab .dfg-hero h1{font-size:34px;line-height:36px}' +
      '.dfg-page-tab .dfg-hero p{font-size:10px;line-height:16px}' +
      '.dfg-page-tab .dfg-hero-badge{display:none}' +
      '@media (min-width:900px){.dfg-page-tab .dfg-hero-badge{display:flex}.dfg-page-tab .dfg-hero{min-height:200px;padding:20px 24px}.dfg-page-tab .dfg-hero h1{font-size:50px;line-height:52px}.dfg-page-tab .dfg-hero p{font-size:12px;line-height:18px}}' +
      '.dfg-page-tab .dfg-hero-tags{margin-top:9px}' +
      '.dfg-page-tab .dfg-grid{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}' +
      '.dfg-page-tab .dfg-card{width:auto;flex:1 1 220px;max-width:280px}' +
      '.dfg-page-tab .dfg-skeleton{flex:1 1 220px;max-width:280px}' +
      '.dfg-page-tab .dfg-card-title{font-size:13px;line-height:18px;min-height:18px}' +
      '.dfg-page-tab .dfg-card-source{font-size:8px;line-height:11px}' +
      '.dfg-page-tab .dfg-card-body{padding:8px 9px 7px}' +
      '.dfg-page-tab .dfg-search-icon{width:38px;height:42px;font-size:16px}' +
      '.dfg-page-tab .dfg-search input{height:46px;font-size:14px}' +
      '.dfg-page-tab .dfg-section{margin-top:14px}' +
      '.dfg-page-tab .dfg-search{padding-top:2px}' +
      '.dfg-page-tab .dfg-marquee{height:28px;margin-bottom:10px;font-size:8px;letter-spacing:.12em}' +
      '.dfg-page-tab .dfg-marquee-title{font-size:10px;letter-spacing:.14em}' +
      '.dfg-page-tab .dfg-marquee-year{display:none}' +
      '.dfg-page-tab .dfg-footer::after{display:none}' +
      '.dfg-tab-game .dfg-game-head{padding:8px 12px}' +
      '.dfg-tab-game .dfg-game-body{padding:8px 8px 12px}' +
      '.dfg-tab-game .dfg-game-title h1{font-size:14px;line-height:20px}' +
      '.dfg-tab-game .dfg-toolbar{flex-wrap:wrap;justify-content:center;overflow:visible;max-width:none;gap:4px;padding:5px}' +
      '.dfg-tab-game .dfg-tool{padding:0 7px}' +
      '.dfg-tab-game .dfg-volume{padding:0 6px}' +
      '.dfg-tab-game .dfg-volume input{width:64px}' +
      '.dfg-tab-game .dfg-tool > span:last-child{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}' +
      '.dfg-tab-game .dfg-status{justify-content:flex-start}' +
      '@media (max-width:720px){.dfg-details,.dfg-delete-dialog,.dfg-url-preview{grid-template-columns:1fr}.dfg-details-cover,.dfg-delete-cover,.dfg-url-cover{max-width:180px}.dfg-url-form{flex-direction:column}.dfg-content{padding:14px 14px 26px}.dfg-page-head{flex-direction:column;align-items:stretch}.dfg-control-list{grid-template-columns:1fr}.dfg-tool span:last-child{display:none}.dfg-tool{padding:0 8px}.dfg-game-head{padding:10px 14px}.dfg-game-body{padding:10px 10px 14px}.dfg-toolbar{gap:4px}.dfg-import-section{flex-direction:column;align-items:flex-start}}' +
      '@media (prefers-reduced-motion:reduce){.dfg-card,.dfg-spinner,.dfg-skeleton-cover,.dfg-skeleton-line{transition:none;animation:none}}' +
      '.dfg-page,.dfg-game{font-size:15px}' +
      '.dfg-page-head p{font-size:12px;line-height:18px}' +
      '.dfg-page-head .dfg-button,.dfg-page-head .dfg-button-ghost{font-size:12px;height:36px}' +
      '.dfg-marquee{font-size:12px;line-height:16px}' +
      '.dfg-marquee-title{font-size:14px}' +
      '.dfg-hero-kicker{font-size:12px;line-height:17px}' +
      '.dfg-hero p{font-size:13px;line-height:19px}' +
      '.dfg-hero-tags span{font-size:11px;line-height:15px;padding:4px 8px}' +
      '.dfg-hero-badge small{font-size:11px;line-height:15px}' +
      '.dfg-search input{font-size:15px;height:48px}' +
      '.dfg-sourcebar label{font-size:12px;line-height:17px;gap:9px}' +
      '.dfg-sourcebar select{font-size:12px;height:36px;max-width:270px}' +
      '.dfg-source-manage{font-size:11px;height:36px;padding:0 10px}' +
      '.dfg-source-add{font-size:12px;height:36px;padding:0 10px}' +
      '.dfg-notice{font-size:12px;line-height:19px}' +
      '.dfg-notice button{font-size:11px;padding:5px 9px}' +
      '.dfg-section-head h2{font-size:17px;line-height:24px}' +
      '.dfg-section-head span{font-size:12px;line-height:17px;padding:4px 8px}' +
      '.dfg-expanded{font-size:12px;line-height:18px}' +
      '.dfg-card-title{font-size:15px;line-height:21px;min-height:21px}' +
      '.dfg-card-source{font-size:11px;line-height:15px}' +
      '.dfg-card-meta,.dfg-card-time{font-size:12px;line-height:17px}' +
      '.dfg-card-action{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-chip{font-size:12px;line-height:17px;padding:6px 11px}' +
      '.dfg-button{font-size:13px;height:38px}' +
      '.dfg-button-small{font-size:12px;height:32px}' +
      '.dfg-empty{font-size:14px;line-height:20px}' +
      '.dfg-footer{font-size:12px;line-height:17px}' +
      '.dfg-muted{font-size:12px;line-height:18px}' +
      '.dfg-game-title h1{font-size:20px;line-height:26px}' +
      '.dfg-game-sub{font-size:12px;line-height:17px}' +
      '.dfg-tool{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-volume{height:34px}' +
      '.dfg-status{font-size:11px;line-height:17px}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{font-size:12px;line-height:16px;padding:5px 8px}' +
      '.dfg-aspect-item{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-game-loading{font-size:13px;line-height:19px}' +
      '.dfg-game-error h2{font-size:17px;line-height:23px}' +
      '.dfg-game-error p{font-size:13px;line-height:20px}' +
      '.dfg-modal-body{font-size:13px;line-height:20px}' +
      '.dfg-modal-head h2{font-size:14px;line-height:20px}' +
      '.dfg-slot-info{font-size:13px;line-height:18px}' +
      '.dfg-slot-info span{font-size:12px;line-height:17px}' +
      '.dfg-tab{font-size:12px;line-height:17px}' +
      '.dfg-control-name{font-size:11px;line-height:16px}' +
      '.dfg-control-value{font-size:13px;line-height:18px}' +
      '.dfg-file{font-size:13px;line-height:18px}' +
      '.dfg-details-info h3{font-size:22px;line-height:28px}' +
      '.dfg-details-meta{font-size:12px;line-height:17px}' +
      '.dfg-details-desc{font-size:13px;line-height:19px}' +
      '.dfg-details-loading{font-size:13px}' +
      '.dfg-details-files strong{font-size:12px;line-height:17px}' +
      '.dfg-detail-file{font-size:13px;line-height:18px;min-height:36px}' +
      '.dfg-detail-file small{font-size:12px}' +
      '.dfg-source-hint{font-size:13px;line-height:19px}' +
      '.dfg-source-format{font-size:12px;line-height:17px}' +
      '.dfg-source-form label{font-size:12px;line-height:17px}' +
      '.dfg-source-form input{font-size:13px;height:36px}' +
      '.dfg-source-info strong{font-size:13px;line-height:18px}' +
      '.dfg-source-info code{font-size:12px;line-height:17px}' +
      '.dfg-page-tab .dfg-marquee,.dfg-page-tab .dfg-hero-kicker{font-size:12px}' +
      '.dfg-page-tab .dfg-hero p{font-size:13px;line-height:19px}' +
      '.dfg-page-tab .dfg-sourcebar label{font-size:12px}' +
      '.dfg-page-tab .dfg-sourcebar select{font-size:12px;height:36px;max-width:200px}' +
      '.dfg-page-tab .dfg-source-manage{font-size:12px;height:36px}' +
      '.dfg-page-tab .dfg-source-add{font-size:11px;height:34px}' +
      '.dfg-page-tab .dfg-card-title{font-size:15px;line-height:21px;min-height:21px}' +
      '.dfg-page-tab .dfg-card-source{font-size:12px;line-height:16px}' +
      '.dfg-page-tab .dfg-card-action{font-size:12px;height:34px}' +
      '.dfg-page-tab .dfg-game-title h1{font-size:17px;line-height:23px}' +
      '.dfg-page-tab .dfg-status{font-size:12px}' +
      '.dfg-page-tab .dfg-details-info h3{font-size:20px;line-height:26px}';

    var CSS_TAG_ID = 'dsh-fc-games/styles';
    function installStyles() {
      if (typeof document === 'undefined') return function () {};
      if (document.querySelector('style[data-plugin-css="' + CSS_TAG_ID + '"]') === null) {
        var tag = document.createElement('style');
        tag.dataset.plugin = 'dsh-fc-games';
        tag.dataset.pluginCss = CSS_TAG_ID;
        tag.textContent = CSS;
        document.head.appendChild(tag);
      }
      return function () {
        var tag = document.querySelector('style[data-plugin-css="' + CSS_TAG_ID + '"]');
        if (tag && tag.parentNode) tag.parentNode.removeChild(tag);
      };
    }

    var REMOTE_INVOCATION = {
      id: 'dsh-fc-games#fcGames/bootstrap',
      service: 'fcGames',
      namespace: 'fcGames',
      method: 'bootstrap',
      invocation: { kind: 'direct' },
      parameters: [],
      result: {
        mode: 'strict',
        typeSymbol: 'dsh-fc-games#FcGamesBootstrap',
        create: function () {
          return {
            parse: function (value) {
              if (value === null || typeof value !== 'object') throw new Error('dsh-fc-games: invalid bootstrap result');
              if (typeof value.base !== 'string' || typeof value.token !== 'string') {
                throw new Error('dsh-fc-games: invalid bootstrap result');
              }
              return value;
            },
          };
        },
      },
    };
    var FC_REMOTE = { package: 'dsh-fc-games', descriptors: [REMOTE_INVOCATION] };

    function apply(ctx) {
      ctx.effect(function () {
        var zhDispose = ctx.locale.register('fc-games', 'zh', zh);
        var enDispose = ctx.locale.register('fc-games', 'en', en);
        return function () {
          zhDispose();
          enDispose();
        };
      }, 'fc-games: dictionaries');

      var t = ctx.locale.bind('fc-games');

      ctx.effect(installStyles, 'fc-games: styles');

      var boot = {
        promise: null,
        resolve: null,
        reject: null,
        value: null,
        error: null,
      };
      function bootstrap() {
        if (boot.value !== null) return Promise.resolve(boot.value);
        if (boot.error !== null) return Promise.reject(boot.error);
        if (boot.promise !== null) return boot.promise;
        boot.promise = new Promise(function (resolve, reject) {
          boot.resolve = resolve;
          boot.reject = reject;
        });
        return boot.promise;
      }

      var remoteState = { dispose: null, service: null, info: null };

      ctx.effect(async function () {
        try {
          var dispose = await ctx.remote.$mount(FC_REMOTE);
          var service = ctx.reflect.get('remote.fcGames');
          if (!service) {
            void dispose();
            throw new Error('dsh-fc-games: remote namespace did not mount');
          }
          var info = await service.bootstrap();
          if (info && info.ok === true && info.value) info = info.value;
          if (info === null || typeof info !== 'object' || typeof info.base !== 'string' || typeof info.token !== 'string') {
            throw new Error('dsh-fc-games: bootstrap returned an invalid payload');
          }
          remoteState.dispose = dispose;
          remoteState.service = service;
          remoteState.info = info;
          boot.value = info;
          if (boot.resolve) boot.resolve(info);
          return function () {
            remoteState.dispose = null;
            remoteState.service = null;
            remoteState.info = null;
            void dispose();
          };
        } catch (error) {
          boot.error = error;
          if (boot.reject) boot.reject(error);
          if (typeof console !== 'undefined' && console.error) console.error('[dsh-fc-games] bootstrap failed', error);
          throw error;
        }
      }, 'fc-games: remote bootstrap');

      ctx.effect(function () {
        return ctx.slots.inject('sidebar.panellist', function () {
          return ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'fc-games',
              order: -10,
              label: function () {
                return t('panel.label');
              },
            },
            FcGamesIcon,
          );
        });
      }, 'fc-games: sidebar entry');

      // A page type in the right Sidebar: one tab per Session, focused instead
      // of duplicated when the sidebar entry is clicked again.
      ctx.effect(function () {
        return ctx.sidebarRightTabs.register({
          id: FC_TAB_ID,
          kind: FC_TAB_KIND,
          title: function () {
            return t('page.title');
          },
          keepMounted: true,
        });
      }, 'fc-games: right sidebar type');

      ctx.effect(function () {
        return ctx.slots.inject('sidebar.right.pane.tab', function () {
          return ctx.slots.register(
            {
              name: 'sidebar.right.pane.tab',
              key: FC_TAB_ID,
            },
            function () {
              return h(FcGamesPage, { ctx: ctx, t: t, bootstrap: bootstrap, tabMode: true });
            },
          );
        });
      }, 'fc-games: right sidebar body');

      ctx.effect(function () {
        return ctx.slots.inject('main', function () {
          return ctx.slots.register(
            {
              name: 'main',
              key: 'fc-games',
            },
            function () {
              return h(FcGamesPage, { ctx: ctx, t: t, bootstrap: bootstrap });
            },
          );
        });
      }, 'fc-games: main panel');
    }





    module.exports = { inject: inject, apply: apply };
    return module.exports;
  },
});
