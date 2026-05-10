"use strict";(self.webpackChunk_eve_web_client=self.webpackChunk_eve_web_client||[]).push([["159"],{2322:function(t,e,r){r.d(e,{a:()=>n});var a=r(56397);function n(t,e){var r=t.append("foreignObject").attr("width","100000"),n=r.append("xhtml:div");n.attr("xmlns","http://www.w3.org/1999/xhtml");var l=e.label;switch(typeof l){case"function":n.insert(l);break;case"object":n.insert(function(){return l});break;default:n.html(l)}a.bg(n,e.labelStyle),n.style("display","inline-block"),n.style("white-space","nowrap");var i=n.node().getBoundingClientRect();return r.attr("width",i.width).attr("height",i.height),r}},56397:function(t,e,r){r.d(e,{$p:()=>c,O1:()=>i,WR:()=>h,bF:()=>l,bg:()=>d});var a=r(45489),n=r(13255);function l(t,e){return!!t.children(e).length}function i(t){return s(t.v)+":"+s(t.w)+":"+s(t.name)}var o=/:/g;function s(t){return t?String(t).replace(o,"\\:"):""}function d(t,e){e&&t.attr("style",e)}function c(t,e,r){e&&t.attr("class",e).attr("class",r+" "+t.attr("class"))}function h(t,e){var r=e.graph();if(a.Z(r)){var l=r.transition;if(n.Z(l))return l(t)}return t}},30286:function(t,e,r){r.d(e,{diagram:()=>q});var a=r(18042),n=(r(62145),r(2665)),l=r(40838),i=r(94193),o=r(85143),s=r(62140),d=r(13112),c=r(56397),h={normal:function(t,e,r,a){var n=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");c.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},vee:function(t,e,r,a){var n=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");c.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},undirected:function(t,e,r,a){var n=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");c.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])}},u=r(2322);function p(t,e,r){var a,n=e.label,l=t.append("g");"svg"===e.labelType?(l.node().appendChild(e.label),c.bg(l,e.labelStyle)):"string"!=typeof n||"html"===e.labelType?(0,u.a)(l,e):function(t,e){for(var r=t.append("text"),a=(function(t){for(var e,r="",a=!1,n=0;n<t.length;++n)e=t[n],a?("n"===e?r+="\n":r+=e,a=!1):"\\"===e?a=!0:r+=e;return r})(e.label).split("\n"),n=0;n<a.length;n++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(a[n]);c.bg(r,e.labelStyle)}(l,e);var i=l.node().getBBox();switch(r){case"top":a=-e.height/2;break;case"bottom":a=e.height/2-i.height;break;default:a=-i.height/2}return l.attr("transform","translate("+-i.width/2+","+a+")"),l}var f=function(t,e){var r=e.nodes().filter(function(t){return c.bF(e,t)}),a=t.selectAll("g.cluster").data(r,function(t){return t});c.WR(a.exit(),e).style("opacity",0).remove();var l=a.enter().append("g").attr("class","cluster").attr("id",function(t){return e.node(t).id}).style("opacity",0).each(function(t){var r=e.node(t),a=n.Ys(this);n.Ys(this).append("rect"),p(a.append("g").attr("class","label"),r,r.clusterLabelPos)});return a=a.merge(l),(a=c.WR(a,e).style("opacity",1)).selectAll("rect").each(function(t){var r=e.node(t),a=n.Ys(this);c.bg(a,r.style)}),a};let y=function(t,e){var r,a=t.selectAll("g.edgeLabel").data(e.edges(),function(t){return c.O1(t)}).classed("update",!0);return a.exit().remove(),a.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(a=t.selectAll("g.edgeLabel")).each(function(t){var r=n.Ys(this);r.select(".label").remove();var a=e.edge(t),l=p(r,e.edge(t),0).classed("label",!0),o=l.node().getBBox();a.labelId&&l.attr("id",a.labelId),i.Z(a,"width")||(a.width=o.width),i.Z(a,"height")||(a.height=o.height)}),r=a.exit?a.exit():a.selectAll(null),c.WR(r,e).style("opacity",0).remove(),a};var g=r(49748),b=r(36099);function x(t,e){return t.intersect(e)}var w=function(t,e,r){var a,l,i,o,s,d,h=t.selectAll("g.edgePath").data(e.edges(),function(t){return c.O1(t)}).classed("update",!0),u=(a=h,l=e,(i=a.enter().append("g").attr("class","edgePath").style("opacity",0)).append("path").attr("class","path").attr("d",function(t){var e=l.edge(t),r=l.node(t.v).elem,a=b.Z(e.points.length).map(function(){var t,e;return t=r.getBBox(),{x:(e=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(t.width/2,t.height/2)).e,y:e.f}});return v(e,a)}),i.append("defs"),i);o=h,s=e,d=o.exit(),c.WR(d,s).style("opacity",0).remove();var p=void 0!==h.merge?h.merge(u):h;return c.WR(p,e).style("opacity",1),p.each(function(t){var r=n.Ys(this),a=e.edge(t);a.elem=this,a.id&&r.attr("id",a.id),c.$p(r,a.class,(r.classed("update")?"update ":"")+"edgePath")}),p.selectAll("path.path").each(function(t){var r=e.edge(t);r.arrowheadId=g.Z("arrowhead");var a=n.Ys(this).attr("marker-end",function(){var t,e;return"url("+(t=location.href,e=r.arrowheadId,t.split("#")[0]+"#"+e)+")"}).style("fill","none");c.WR(a,e).attr("d",function(t){var r,a,n,l,i,o;return r=e,a=t,n=r.edge(a),l=r.node(a.v),i=r.node(a.w),(o=n.points.slice(1,n.points.length-1)).unshift(x(l,o[0])),o.push(x(i,o[o.length-1])),v(n,o)}),c.bg(a,r.style)}),p.selectAll("defs *").remove(),p.selectAll("defs").each(function(t){var a=e.edge(t);(0,r[a.arrowhead])(n.Ys(this),a.arrowheadId,a,"arrowhead")}),p};function v(t,e){var r=(n.jvg||n.YPS.line)().x(function(t){return t.x}).y(function(t){return t.y});return(r.curve||r.interpolate)(t.curve),r(e)}var k=r(8608),m=function(t,e,r){var a,l=e.nodes().filter(function(t){return!c.bF(e,t)}),o=t.selectAll("g.node").data(l,function(t){return t}).classed("update",!0);return o.exit().remove(),o.enter().append("g").attr("class","node").style("opacity",0),(o=t.selectAll("g.node")).each(function(t){var a=e.node(t),l=n.Ys(this);c.$p(l,a.class,(l.classed("update")?"update ":"")+"node"),l.select("g.label").remove();var o=l.append("g").attr("class","label"),s=p(o,a),d=r[a.shape],h=k.Z(s.node().getBBox(),"width","height");a.elem=this,a.id&&l.attr("id",a.id),a.labelId&&o.attr("id",a.labelId),i.Z(a,"width")&&(h.width=a.width),i.Z(a,"height")&&(h.height=a.height),h.width+=a.paddingLeft+a.paddingRight,h.height+=a.paddingTop+a.paddingBottom,o.attr("transform","translate("+(a.paddingLeft-a.paddingRight)/2+","+(a.paddingTop-a.paddingBottom)/2+")");var u=n.Ys(this);u.select(".label-container").remove();var f=d(u,h,a).classed("label-container",!0);c.bg(f,a.style);var y=f.node().getBBox();a.width=y.width,a.height=y.height}),a=o.exit?o.exit():o.selectAll(null),c.WR(a,e).style("opacity",0).remove(),o};function S(t,e,r,a){var n=t.x,l=t.y,i=n-a.x,o=l-a.y,s=Math.sqrt(e*e*o*o+r*r*i*i),d=Math.abs(e*r*i/s);a.x<n&&(d=-d);var c=Math.abs(e*r*o/s);return a.y<l&&(c=-c),{x:n+d,y:l+c}}function T(t,e,r){var a=t.x,n=t.y,l=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(t){i=Math.min(i,t.x),o=Math.min(o,t.y)});for(var s=a-t.width/2-i,d=n-t.height/2-o,c=0;c<e.length;c++){var h=e[c],u=e[c<e.length-1?c+1:0],p=function(t,e,r,a){var n,l,i,o,s,d,c,h,u,p,f,y,g;if(n=e.y-t.y,i=t.x-e.x,s=e.x*t.y-t.x*e.y,u=n*r.x+i*r.y+s,p=n*a.x+i*a.y+s,0===u||0===p||!(u*p>0)){if((l=a.y-r.y,o=r.x-a.x,d=a.x*r.y-r.x*a.y,c=l*t.x+o*t.y+d,h=l*e.x+o*e.y+d,!(0!==c&&0!==h&&c*h>0))&&0!=(f=n*o-l*i))return y=Math.abs(f/2),{x:(g=i*d-o*s)<0?(g-y)/f:(g+y)/f,y:(g=l*s-n*d)<0?(g-y)/f:(g+y)/f}}}(t,r,{x:s+h.x,y:d+h.y},{x:s+u.x,y:d+u.y});p&&l.push(p)}return l.length?(l.length>1&&l.sort(function(t,e){var a=t.x-r.x,n=t.y-r.y,l=Math.sqrt(a*a+n*n),i=e.x-r.x,o=e.y-r.y,s=Math.sqrt(i*i+o*o);return l<s?-1:+(l!==s)}),l[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",t),t)}function _(t,e){var r,a,n=t.x,l=t.y,i=e.x-n,o=e.y-l,s=t.width/2,d=t.height/2;return Math.abs(o)*s>Math.abs(i)*d?(o<0&&(d=-d),r=0===o?0:d*i/o,a=d):(i<0&&(s=-s),r=s,a=0===i?0:s*o/i),{x:n+r,y:l+a}}var C={rect:function(t,e,r){var a=t.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return r.intersect=function(t){return _(r,t)},a},ellipse:function(t,e,r){var a=e.width/2,n=e.height/2,l=t.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",a).attr("ry",n);return r.intersect=function(t){return S(r,a,n,t)},l},circle:function(t,e,r){var a=Math.max(e.width,e.height)/2,n=t.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",a);return r.intersect=function(t){return S(r,a,a,t)},n},diamond:function(t,e,r){var a=e.width*Math.SQRT2/2,n=e.height*Math.SQRT2/2,l=[{x:0,y:-n},{x:-a,y:0},{x:0,y:n},{x:a,y:0}],i=t.insert("polygon",":first-child").attr("points",l.map(function(t){return t.x+","+t.y}).join(" "));return r.intersect=function(t){return T(r,l,t)},i}},B={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},$={arrowhead:"normal",curve:n.c_6};function A(t,e){var r=t.select("g."+e);return r.empty()&&(r=t.append("g").attr("class",e)),r}var M=r(13187);function N(t,e,r){let a=(e.width+e.height)*.9,n=[{x:a/2,y:0},{x:a,y:-a/2},{x:a/2,y:-a},{x:0,y:-a/2}],l=P(t,a,a,n);return r.intersect=function(t){return T(r,n,t)},l}function E(t,e,r){let a=e.height,n=a/4,l=e.width+2*n,i=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-a/2},{x:l-n,y:-a},{x:n,y:-a},{x:0,y:-a/2}],o=P(t,l,a,i);return r.intersect=function(t){return T(r,i,t)},o}function L(t,e,r){let a=e.width,n=e.height,l=[{x:-n/2,y:0},{x:a,y:0},{x:a,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function I(t,e,r){let a=e.width,n=e.height,l=[{x:-2*n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:n/6,y:-n}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function R(t,e,r){let a=e.width,n=e.height,l=[{x:2*n/6,y:0},{x:a+n/6,y:0},{x:a-2*n/6,y:-n},{x:-n/6,y:-n}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function Y(t,e,r){let a=e.width,n=e.height,l=[{x:-2*n/6,y:0},{x:a+2*n/6,y:0},{x:a-n/6,y:-n},{x:n/6,y:-n}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function W(t,e,r){let a=e.width,n=e.height,l=[{x:n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:-2*n/6,y:-n}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function O(t,e,r){let a=e.width,n=e.height,l=[{x:0,y:0},{x:a+n/2,y:0},{x:a,y:-n/2},{x:a+n/2,y:-n},{x:0,y:-n}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function Z(t,e,r){let a=e.height,n=e.width+a/4,l=t.insert("rect",":first-child").attr("rx",a/2).attr("ry",a/2).attr("x",-n/2).attr("y",-a/2).attr("width",n).attr("height",a);return r.intersect=function(t){return _(r,t)},l}function j(t,e,r){let a=e.width,n=e.height,l=[{x:0,y:0},{x:a,y:0},{x:a,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],i=P(t,a,n,l);return r.intersect=function(t){return T(r,l,t)},i}function D(t,e,r){let a=e.width,n=a/2,l=n/(2.5+a/50),i=e.height+l,o="M 0,"+l+" a "+n+","+l+" 0,0,0 "+a+" 0 a "+n+","+l+" 0,0,0 "+-a+" 0 l 0,"+i+" a "+n+","+l+" 0,0,0 "+a+" 0 l 0,"+-i,s=t.attr("label-offset-y",l).insert("path",":first-child").attr("d",o).attr("transform","translate("+-a/2+","+-(i/2+l)+")");return r.intersect=function(t){let e=_(r,t),a=e.x-r.x;if(0!=n&&(Math.abs(a)<r.width/2||Math.abs(a)==r.width/2&&Math.abs(e.y-r.y)>r.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,t.y-r.y>0&&(i=-i),e.y+=i}return e},s}function P(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("transform","translate("+-e/2+","+r/2+")")}r(59395),r(7608),r(31699),r(92479);let z={},F=function(t){for(let e of Object.keys(t))z[e]=t[e]},q={parser:a.p,db:a.f,renderer:M.f,styles:M.a,init:t=>{t.flowchart||(t.flowchart={}),t.flowchart.arrowMarkerAbsolute=t.arrowMarkerAbsolute,F(t.flowchart),a.f.clear(),a.f.setGen("gen-1")}}},13187:function(t,e,r){r.d(e,{a:()=>x,f:()=>g});var a=r(62145),n=r(2665),l=r(40838),i=r(19146),o=r(2322),s=r(40597),d=r(36404);let c=(t,e)=>s.Z.lang.round(d.Z.parse(t)[e]);var h=r(62321);let u={},p=function(t,e,r,a,n,i){let s=a.select(`[id="${r}"]`);Object.keys(t).forEach(function(r){let a,d=t[r],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let h=(0,l.k)(d.styles),u=void 0!==d.text?d.text:d.id;if(l.l.info("vertex",d,d.labelType),"markdown"===d.labelType)l.l.info("vertex",d,d.labelType);else if((0,l.m)((0,l.c)().flowchart.htmlLabels)){let t={label:u.replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`)};(a=(0,o.a)(s,t).node()).parentNode.removeChild(a)}else{let t=n.createElementNS("http://www.w3.org/2000/svg","text");for(let e of(t.setAttribute("style",h.labelStyle.replace("color:","fill:")),u.split(l.e.lineBreakRegex))){let r=n.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=e,t.appendChild(r)}a=t}let p=0,f="";switch(d.type){case"round":p=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}e.setNode(d.id,{labelStyle:h.labelStyle,shape:f,labelText:u,labelType:d.labelType,rx:p,ry:p,class:c,style:h.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:i.db.getTooltip(d.id)||"",domId:i.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,l.c)().flowchart.padding}),l.l.info("setNode",{labelStyle:h.labelStyle,labelType:d.labelType,shape:f,labelText:u,rx:p,ry:p,class:c,style:h.style,id:d.id,domId:i.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,l.c)().flowchart.padding})})},f=function(t,e,r){let a,i;l.l.info("abc78 edges = ",t);let o=0,s={};if(void 0!==t.defaultStyle){let e=(0,l.k)(t.defaultStyle);a=e.style,i=e.labelStyle}t.forEach(function(r){o++;let d="L-"+r.start+"-"+r.end;void 0===s[d]?s[d]=0:s[d]++,l.l.info("abc78 new entry",d,s[d]);let c=d+"-"+s[d];l.l.info("abc78 new link id to be used is",d,c,s[d]);let h="LS-"+r.start,p="LE-"+r.end,f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let y="",g="";switch(r.stroke){case"normal":y="fill:none;",void 0!==a&&(y=a),void 0!==i&&(g=i),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let t=(0,l.k)(r.style);y=t.style,g=t.labelStyle}f.style=f.style+=y,f.labelStyle=f.labelStyle+=g,void 0!==r.interpolate?f.curve=(0,l.n)(r.interpolate,n.c_6):void 0!==t.defaultInterpolate?f.curve=(0,l.n)(t.defaultInterpolate,n.c_6):f.curve=(0,l.n)(u.curve,n.c_6),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=r.text.replace(l.e.lineBreakRegex,"\n"),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=c,f.classes="flowchart-link "+h+" "+p,e.setEdge(r.start,r.end,f,o)})},y=async function(t,e,r,o){let s,d;l.l.info("Drawing flowchart");let c=o.db.getDirection();void 0===c&&(c="TD");let{securityLevel:h,flowchart:u}=(0,l.c)(),y=u.nodeSpacing||50,g=u.rankSpacing||50;"sandbox"===h&&(s=(0,n.Ys)("#i"+e));let b="sandbox"===h?(0,n.Ys)(s.nodes()[0].contentDocument.body):(0,n.Ys)("body"),x="sandbox"===h?s.nodes()[0].contentDocument:document,w=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:y,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),v=o.db.getSubGraphs();l.l.info("Subgraphs - ",v);for(let t=v.length-1;t>=0;t--)d=v[t],l.l.info("Subgraph - ",d),o.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let k=o.db.getVertices(),m=o.db.getEdges();l.l.info("Edges",m);let S=0;for(S=v.length-1;S>=0;S--){d=v[S],(0,n.td_)("cluster").append("text");for(let t=0;t<d.nodes.length;t++)l.l.info("Setting up subgraphs",d.nodes[t],d.id),w.setParent(d.nodes[t],d.id)}p(k,w,e,b,x,o),f(m,w);let T=b.select(`[id="${e}"]`),_=b.select("#"+e+" g");if(await (0,i.r)(_,w,["point","circle","cross"],"flowchart",e),l.u.insertTitle(T,"flowchartTitleText",u.titleTopMargin,o.db.getDiagramTitle()),(0,l.o)(w,T,u.diagramPadding,u.useMaxWidth),o.db.indexNodes("subGraph"+S),!u.htmlLabels)for(let t of x.querySelectorAll('[id="'+e+'"] .edgeLabel .label')){let e=t.getBBox(),r=x.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}Object.keys(k).forEach(function(t){let r=k[t];if(r.link){let a=(0,n.Ys)("#"+e+' [id="'+t+'"]');if(a){let t=x.createElementNS("http://www.w3.org/2000/svg","a");t.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),t.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),t.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===h?t.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&t.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let e=a.insert(function(){return t},":first-child"),n=a.select(".label-container");n&&e.append(function(){return n.node()});let l=a.select(".label");l&&e.append(function(){return l.node()})}}})},g={setConf:function(t){for(let e of Object.keys(t))u[e]=t[e]},addVertices:p,addEdges:f,getClasses:function(t,e){return e.db.getClasses()},draw:y},b=(t,e)=>{let r=c(t,"r"),a=c(t,"g"),n=c(t,"b");return h.Z(r,a,n,e)},x=t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }

  .label text,span,p {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${b(t.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`}}]);