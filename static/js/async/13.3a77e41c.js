"use strict";(self.webpackChunk_eve_web_client=self.webpackChunk_eve_web_client||[]).push([["13"],{2322:function(e,t,l){l.d(t,{a:()=>a});var r=l(56397);function a(e,t){var l=e.append("foreignObject").attr("width","100000"),a=l.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}r.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return l.attr("width",n.width).attr("height",n.height),l}},56397:function(e,t,l){l.d(t,{$p:()=>d,O1:()=>n,WR:()=>p,bF:()=>o,bg:()=>c});var r=l(45489),a=l(13255);function o(e,t){return!!e.children(t).length}function n(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,l){t&&e.attr("class",t).attr("class",l+" "+e.attr("class"))}function p(e,t){var l=t.graph();if(r.Z(l)){var o=l.transition;if(a.Z(o))return o(e)}return e}},87940:function(e,t,l){l.d(t,{diagram:()=>n});var r=l(18042),a=l(13187),o=l(40838);l(2665),l(62145),l(13112),l(92479),l(27693),l(7608),l(31699);let n={parser:r.p,db:r.f,renderer:a.f,styles:a.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),r.f.clear(),r.f.setGen("gen-2")}}},13187:function(e,t,l){l.d(t,{a:()=>y,f:()=>h});var r=l(62145),a=l(2665),o=l(40838),n=l(19146),i=l(2322),s=l(40597),c=l(36404);let d=(e,t)=>s.Z.lang.round(c.Z.parse(e)[t]);var p=l(62321);let b={},f=function(e,t,l,r,a,n){let s=r.select(`[id="${l}"]`);Object.keys(e).forEach(function(l){let r,c=e[l],d="default";c.classes.length>0&&(d=c.classes.join(" ")),d+=" flowchart-label";let p=(0,o.k)(c.styles),b=void 0!==c.text?c.text:c.id;if(o.l.info("vertex",c,c.labelType),"markdown"===c.labelType)o.l.info("vertex",c,c.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){let e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(r=(0,i.a)(s,e).node()).parentNode.removeChild(r)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");for(let t of(e.setAttribute("style",p.labelStyle.replace("color:","fill:")),b.split(o.e.lineBreakRegex))){let l=a.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),l.setAttribute("dy","1em"),l.setAttribute("x","1"),l.textContent=t,e.appendChild(l)}r=e}let f=0,w="";switch(c.type){case"round":f=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}t.setNode(c.id,{labelStyle:p.labelStyle,shape:w,labelText:b,labelType:c.labelType,rx:f,ry:f,class:d,style:p.style,id:c.id,link:c.link,linkTarget:c.linkTarget,tooltip:n.db.getTooltip(c.id)||"",domId:n.db.lookUpDomId(c.id),haveCallback:c.haveCallback,width:"group"===c.type?500:void 0,dir:c.dir,type:c.type,props:c.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:p.labelStyle,labelType:c.labelType,shape:w,labelText:b,rx:f,ry:f,class:d,style:p.style,id:c.id,domId:n.db.lookUpDomId(c.id),width:"group"===c.type?500:void 0,type:c.type,dir:c.dir,props:c.props,padding:(0,o.c)().flowchart.padding})})},w=function(e,t,l){let r,n;o.l.info("abc78 edges = ",e);let i=0,s={};if(void 0!==e.defaultStyle){let t=(0,o.k)(e.defaultStyle);r=t.style,n=t.labelStyle}e.forEach(function(l){i++;let c="L-"+l.start+"-"+l.end;void 0===s[c]?s[c]=0:s[c]++,o.l.info("abc78 new entry",c,s[c]);let d=c+"-"+s[c];o.l.info("abc78 new link id to be used is",c,d,s[c]);let p="LS-"+l.start,f="LE-"+l.end,w={style:"",labelStyle:""};switch(w.minlen=l.length||1,"arrow_open"===l.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let u="",h="";switch(l.stroke){case"normal":u="fill:none;",void 0!==r&&(u=r),void 0!==n&&(h=n),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==l.style){let e=(0,o.k)(l.style);u=e.style,h=e.labelStyle}w.style=w.style+=u,w.labelStyle=w.labelStyle+=h,void 0!==l.interpolate?w.curve=(0,o.n)(l.interpolate,a.c_6):void 0!==e.defaultInterpolate?w.curve=(0,o.n)(e.defaultInterpolate,a.c_6):w.curve=(0,o.n)(b.curve,a.c_6),void 0===l.text?void 0!==l.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=l.labelType,w.label=l.text.replace(o.e.lineBreakRegex,"\n"),void 0===l.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=d,w.classes="flowchart-link "+p+" "+f,t.setEdge(l.start,l.end,w,i)})},u=async function(e,t,l,i){let s,c;o.l.info("Drawing flowchart");let d=i.db.getDirection();void 0===d&&(d="TD");let{securityLevel:p,flowchart:b}=(0,o.c)(),u=b.nodeSpacing||50,h=b.rankSpacing||50;"sandbox"===p&&(s=(0,a.Ys)("#i"+t));let g="sandbox"===p?(0,a.Ys)(s.nodes()[0].contentDocument.body):(0,a.Ys)("body"),y="sandbox"===p?s.nodes()[0].contentDocument:document,k=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:u,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x=i.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let e=x.length-1;e>=0;e--)c=x[e],o.l.info("Subgraph - ",c),i.db.addVertex(c.id,{text:c.title,type:c.labelType},"group",void 0,c.classes,c.dir);let v=i.db.getVertices(),m=i.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){c=x[S],(0,a.td_)("cluster").append("text");for(let e=0;e<c.nodes.length;e++)o.l.info("Setting up subgraphs",c.nodes[e],c.id),k.setParent(c.nodes[e],c.id)}f(v,k,t,g,y,i),w(m,k);let _=g.select(`[id="${t}"]`),T=g.select("#"+t+" g");if(await (0,n.r)(T,k,["point","circle","cross"],"flowchart",t),o.u.insertTitle(_,"flowchartTitleText",b.titleTopMargin,i.db.getDiagramTitle()),(0,o.o)(k,_,b.diagramPadding,b.useMaxWidth),i.db.indexNodes("subGraph"+S),!b.htmlLabels)for(let e of y.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=e.getBBox(),l=y.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("rx",0),l.setAttribute("ry",0),l.setAttribute("width",t.width),l.setAttribute("height",t.height),e.insertBefore(l,e.firstChild)}Object.keys(v).forEach(function(e){let l=v[e];if(l.link){let r=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(r){let e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",l.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",l.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):l.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",l.linkTarget);let t=r.insert(function(){return e},":first-child"),a=r.select(".label-container");a&&t.append(function(){return a.node()});let o=r.select(".label");o&&t.append(function(){return o.node()})}}})},h={setConf:function(e){for(let t of Object.keys(e))b[t]=e[t]},addVertices:f,addEdges:w,getClasses:function(e,t){return t.db.getClasses()},draw:u},g=(e,t)=>{let l=d(e,"r"),r=d(e,"g"),a=d(e,"b");return p.Z(l,r,a,t)},y=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
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
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${g(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}}]);