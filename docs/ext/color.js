if("undefined"==typeof net)var net={};net.brehaut||(net.brehaut={}),function(){"use strict";function e(e,t){e=e.toString();for(var r=[],n=0,a=Math.max(t-e.length,0);a>n;n++)r.push("0");return r.push(e),r.join("")}function t(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function r(e){return e.replace(/^\s+|\s+$/g,"")}function n(e){return function(){var t=this.clone();return e.apply(t,arguments),t}}function a(e,r){function n(e){return function(){return e.apply(this[u](),arguments)}}function a(){}function i(){return new a}var h=v(l),s=[],u="to"+t(e);for(var o in r)if(r.hasOwnProperty(o)){h[o]=r[o];var m=h[o];if("_"==o.slice(0,1))continue;if(o in l||"function"!=typeof m){if("function"!=typeof m){s.push(o);var F="get"+t(o),c="set"+t(o);l[F]=n(h[F]=function(e){return function(){return this[e]}}(o)),l[c]=n(h[c]=function(e){return function(t){var r=this.clone();return r[e]=t,r}}(o))}}else l[o]=n(m)}return a.prototype=h,p[e]=i,h.clone=function(){for(var e=i(),t=0,r=s.length;r>t;t++){var n=s[t];e[n]=this[n]}return e},l[u]=function(){return i()},d.push(h),h}function i(e){return l.fromObject(e)}var h={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370D8",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#D87093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:'#9ACD32"'},s="(?:\\+|-)?\\d+",u="(?:\\+|-)?\\d*\\.\\d+",o="(?:"+s+")|(?:"+u+")";s="("+s+")",u="("+u+")",o="("+o+")";var l,m=o+"%",F="\\s*?",c=new RegExp(["^hsl(a?)\\(",o,",",m,",",m,"(,(",o,"))?\\)$"].join(F)),g=new RegExp(["^rgb(a?)\\(",s,",",s,",",s,"(,(",o,"))?\\)$"].join(F)),f=new RegExp(["^rgb(a?)\\(",m,",",m,",",m,"(,(",o,"))?\\)$"].join(F)),d=[],p={};this.object||(this.object=function(e){function t(){}return t.prototype=e,new t});var v=this.object;l={fromObject:function(e){if(!e)return v(l);for(var t=0,r=d.length;r>t;t++){var n=d[t].fromObject(e);if(n)return n}return v(l)},toString:function(){return this.toCSS()}};var b=null;a("RGB",{red:0,green:0,blue:0,alpha:0,getLuminance:function(){return.2126*this.red+.7152*this.green+.0722*this.blue},blend:function(e,t){e=e.toRGB(),t=Math.min(Math.max(t,0),1);var r=this.clone();return r.red=r.red*(1-t)+e.red*t,r.green=r.green*(1-t)+e.green*t,r.blue=r.blue*(1-t)+e.blue*t,r.alpha=r.alpha*(1-t)+e.alpha*t,r},fromObject:function(e){return e instanceof Array?this._fromRGBArray(e):"string"==typeof e?this._fromCSS(r(e)):e.hasOwnProperty("red")&&e.hasOwnProperty("green")&&e.hasOwnProperty("blue")?this._fromRGB(e):void 0},_stringParsers:[function(e){function t(t,r){var n=e.match(t);if(!n||!!n[1]+!!n[5]===1)return null;var a=p.RGB();return a.red=Math.min(1,Math.max(0,n[2]/r)),a.green=Math.min(1,Math.max(0,n[3]/r)),a.blue=Math.min(1,Math.max(0,n[4]/r)),a.alpha=n[5]?Math.min(Math.max(parseFloat(n[6]),0),1):1,a}e=r(e);var n=t(g,255);return n?n:t(f,100)},function(e){var t=e.toLowerCase();if(t in h&&(e=h[t]),e.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){e=e.replace(/^#/,"");var r=e.length/3,n=Math.pow(16,r)-1,a=p.RGB();return a.red=parseInt(e.slice(0,r),16)/n,a.green=parseInt(e.slice(1*r,2*r),16)/n,a.blue=parseInt(e.slice(2*r),16)/n,a.alpha=1,a}},function(e){return"transparent"===e.toLowerCase()?b:void 0}],_fromCSS:function(e){for(var t=null,r=0,n=this._stringParsers.length;n>r;r++)if(t=this._stringParsers[r](e))return t},_fromRGB:function(e){var t=p.RGB();return t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t},_fromRGBArray:function(e){var t=p.RGB();return t.red=Math.max(0,Math.min(1,e[0]/255)),t.green=Math.max(0,Math.min(1,e[1]/255)),t.blue=Math.max(0,Math.min(1,e[2]/255)),t.alpha=void 0!==e[3]?Math.max(0,Math.min(1,e[3])):1,t},toCSSHex:function(t){t=t||2;var r=Math.pow(16,t)-1,n=["#",e(Math.round(this.red*r).toString(16).toUpperCase(),t),e(Math.round(this.green*r).toString(16).toUpperCase(),t),e(Math.round(this.blue*r).toString(16).toUpperCase(),t)];return n.join("")},toCSS:function(e){if(1===this.alpha)return this.toCSSHex(e);var t=255,r=["rgba(",Math.max(0,Math.min(t,Math.round(this.red*t))),",",Math.max(0,Math.min(t,Math.round(this.green*t))),",",Math.max(0,Math.min(t,Math.round(this.blue*t))),",",Math.max(0,Math.min(1,this.alpha)),")"];return r.join("")},toHSV:function(){var e,t,r,n=p.HSV();return e=Math.min(this.red,this.green,this.blue),t=Math.max(this.red,this.green,this.blue),n.value=t,r=t-e,0==r?n.hue=n.saturation=0:(n.saturation=r/t,this.red==t?n.hue=(this.green-this.blue)/r:this.green==t?n.hue=2+(this.blue-this.red)/r:n.hue=4+(this.red-this.green)/r,n.hue=(60*n.hue+360)%360),n.alpha=this.alpha,n},toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}}),b=l.fromObject({red:0,blue:0,green:0,alpha:0}),a("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:n(function(e){var t=(this.hue+e)%360;0>t&&(t=(360+t)%360),this.hue=t}),devalueByAmount:n(function(e){this.value=Math.min(1,Math.max(this.value-e,0))}),devalueByRatio:n(function(e){this.value=Math.min(1,Math.max(this.value*(1-e),0))}),valueByAmount:n(function(e){this.value=Math.min(1,Math.max(this.value+e,0))}),valueByRatio:n(function(e){this.value=Math.min(1,Math.max(this.value*(1+e),0))}),desaturateByAmount:n(function(e){this.saturation=Math.min(1,Math.max(this.saturation-e,0))}),desaturateByRatio:n(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1-e),0))}),saturateByAmount:n(function(e){this.saturation=Math.min(1,Math.max(this.saturation+e,0))}),saturateByRatio:n(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1+e),0))}),schemeFromDegrees:function(e){for(var t=[],r=0,n=e.length;n>r;r++){var a=this.clone();a.hue=(this.hue+e[r])%360,t.push(a)}return t},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(e){if(e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("value")){var t=p.HSV();return t.hue=e.hue,t.saturation=e.saturation,t.value=e.value,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t}return null},_normalise:function(){this.hue%=360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.value=Math.min(Math.max(0,this.value)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var e,t,r,n,a,i=p.RGB();if(0===this.saturation)return i.red=this.value,i.green=this.value,i.blue=this.value,i.alpha=this.alpha,i;var h=this.hue/60;switch(e=Math.floor(h),t=h-e,r=this.value*(1-this.saturation),n=this.value*(1-this.saturation*t),a=this.value*(1-this.saturation*(1-t)),e){case 0:i.red=this.value,i.green=a,i.blue=r;break;case 1:i.red=n,i.green=this.value,i.blue=r;break;case 2:i.red=r,i.green=this.value,i.blue=a;break;case 3:i.red=r,i.green=n,i.blue=this.value;break;case 4:i.red=a,i.green=r,i.blue=this.value;break;default:i.red=this.value,i.green=r,i.blue=n}return i.alpha=this.alpha,i},toHSL:function(){this._normalise();var e=p.HSL();e.hue=this.hue;var t=(2-this.saturation)*this.value,r=this.saturation*this.value;return t&&2-t&&(r/=1>=t?t:2-t),t/=2,e.saturation=r,e.lightness=t,e.alpha=this.alpha,e},toHSV:function(){return this.clone()}}),a("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:n(function(e){this.lightness=Math.min(1,Math.max(this.lightness-e,0))}),darkenByRatio:n(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1-e),0))}),lightenByAmount:n(function(e){this.lightness=Math.min(1,Math.max(this.lightness+e,0))}),lightenByRatio:n(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1+e),0))}),fromObject:function(e){return"string"==typeof e?this._fromCSS(e):e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("lightness")?this._fromHSL(e):void 0},_fromCSS:function(e){var t=r(e).match(c);if(!t||!!t[1]+!!t[5]===1)return null;var n=p.HSL();return n.hue=(t[2]%360+360)%360,n.saturation=Math.max(0,Math.min(parseInt(t[3],10)/100,1)),n.lightness=Math.max(0,Math.min(parseInt(t[4],10)/100,1)),n.alpha=t[5]?Math.max(0,Math.min(1,parseFloat(t[6]))):1,n},_fromHSL:function(e){var t=p.HSL();return t.hue=e.hue,t.saturation=e.saturation,t.lightness=e.lightness,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t},_normalise:function(){this.hue=(this.hue%360+360)%360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.lightness=Math.min(Math.max(0,this.lightness)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var e=p.HSV();e.hue=this.hue;var t=2*this.lightness,r=this.saturation*(1>=t?t:2-t);return e.value=(t+r)/2,e.saturation=2*r/(t+r)||0,e.alpha=this.alpha,e},toRGB:function(){return this.toHSV().toRGB()}}),i.isValid=function(e){var t,r=i(e),n=0;for(t in r)r.hasOwnProperty(t)&&n++;return n>0},net.brehaut.Color=i}.call(net.brehaut);var module;module&&(module.exports.Color=net.brehaut.Color);
window.Color = net.brehaut.Color