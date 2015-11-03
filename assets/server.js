module.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){e.exports=require("medium-editor")},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){var t=e.currentMentionText.substring(0,1),n=e.currentMentionText.substring(1);return h["default"].createElement("div",null,h["default"].createElement("label",null,"Current text: ",n),h["default"].createElement("button",{onClick:function(){return e.selectMentionCallback(null)}},"Cancel"),h["default"].createElement("button",{onClick:function(){return e.selectMentionCallback(t+"mention")}},"Select `",t,"mention`"),"CustomizedTagComponent!!!")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(e,t,n){for(var i=!0;i;){var a=e,o=t,r=n;s=d=l=void 0,i=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;return void 0===l?void 0:l.call(r)}var d=Object.getPrototypeOf(a);if(null===d)return void 0;e=d,t=o,n=r,i=!0}};t.CustomizedTagComponent=r;var d=n(5),h=i(d),u=n(6),c=i(u),f=n(7),m=i(f),p=function(e){function t(){a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=n(1),t=n(4).TCMention;this.editor=new e(this.refs.editable,{extensions:{mention:new t({extraClassName:"abc123",extraActiveClassName:"xyz",tagName:"b",renderPanelContent:function(e,t,n){c["default"].render(h["default"].createElement(r,{currentMentionText:t,selectMentionCallback:n}),e)},destroyPanelContent:function(e){c["default"].unmountComponentAtNode(e)},activeTriggerList:["#","@"]})}})}},{key:"render",value:function(){return h["default"].createElement("div",null,h["default"].createElement(m["default"],{position:"right",color:"black",href:"https://github.com/tomchentw/medium-editor-tc-mention"},"Fork me on GitHub"),h["default"].createElement("h1",null,"Medium Editor"),h["default"].createElement("div",{className:"editable",ref:"editable"},h["default"].createElement("p",null,"My father’s family name being ",h["default"].createElement("a",{href:"https://en.wikipedia.org/wiki/Pip_(Great_Expectations)"},"Pirrip"),", and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip."),h["default"].createElement("p",null,"I give Pirrip as my father’s family name, on the authority of his tombstone and my sister,—Mrs. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw any likeness of either of them (for their days were long before the days of photographs), my first fancies regarding what they were like were unreasonably derived from their tombstones. The shape of the letters on my father’s, gave me an odd idea that he was a square, stout, dark man, with curly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above,” I drew a childish conclusion that my mother was freckled and sickly. To five little stone lozenges, each about a foot and a half long, which were arranged in a neat row beside their grave, and were sacred to the memory of five little brothers of mine,—who gave up trying to get a living, exceedingly early in that universal struggle,—I am indebted for a belief I religiously entertained that they had all been born on their backs with their hands in their trousers-pockets, and had never taken them out in this state of existence."),h["default"].createElement("p",null,"Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip."),h["default"].createElement("p",null,h["default"].createElement("a",{href:"http://google.com"},h["default"].createElement("img",{src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"})))))}}]),t}(d.Component);t["default"]=p},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=i(a);t["default"]=o["default"],e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n,i,a=e.parentNode;for(r["default"].util.unwrap(e,t),i=a.lastChild;n=i.previousSibling;)3===i.nodeType&&3===n.nodeType&&(n.textContent+=i.textContent,a.removeChild(i)),i=n}Object.defineProperty(t,"__esModule",{value:!0}),t.unwrapForTextNode=a;var o=n(1),r=i(o),s=50;t.atKeyCode=s;var l=51;t.hashKeyCode=l;var d=r["default"].Extension.extend({name:"mention",extraClassName:"",extraActiveClassName:"",tagName:"strong",renderPanelContent:function(){},destroyPanelContent:function(){},activeTriggerList:["@"],triggerClassNameMap:{"#":"medium-editor-mention-hash","@":"medium-editor-mention-at"},init:function(){this.mentionPanel=this.createPanel(),this.getEditorOption("elementsContainer").appendChild(this.mentionPanel),this.subscribe("editableKeydown",this.handleKeydown.bind(this)),this.subscribe("editableBlur",this.handleBlur.bind(this)),this.trigger=null,this.triggerClassName=null,this.activeMentionAt=null},createPanel:function(){var e=this.document.createElement("div");return e.classList.add("medium-editor-mention-panel"),this.extraClassName&&e.classList.add(this.extraClassName),e.innerHTML=this.getTemplate(),e},getTemplate:function(){return"<p>\nYour mention implementation\n</p>"},destroy:function(){this.mentionPanel&&(this.mentionPanel.parentNode&&(this.destroyPanelContent(this.mentionPanel),this.mentionPanel.parentNode.removeChild(this.mentionPanel)),delete this.mentionPanel)},handleKeydown:function(e){switch(r["default"].util.getKeyCode(e)){case r["default"].util.keyCode.ESCAPE:this.hidePanel();break;case r["default"].util.keyCode.SPACE:this.hidePanel();break;case r["default"].util.keyCode.ENTER:this.hidePanel();break;case r["default"].util.keyCode.BACKSPACE:var t=r["default"].selection.getSelectionRange(this.document),n=t.startOffset,i=t.endOffset;1===n&&1===i?this.hidePanel():this.updatePanelContentWithDelay();break;case s:e.shiftKey&&-1!==this.activeTriggerList.indexOf("@")?this.handleTriggerKeydown("@",e):this.updatePanelContentWithDelay();break;case l:e.shiftKey&&-1!==this.activeTriggerList.indexOf("#")?this.handleTriggerKeydown("#",e):this.updatePanelContentWithDelay();break;default:this.updatePanelContentWithDelay()}},handleBlur:function(e){this.hidePanel()},handleTriggerKeydown:function(e,t){this.trigger=e,this.triggerClassName=this.triggerClassNameMap[this.trigger],t.preventDefault();var n=r["default"].selection.getSelectionStart(this.document);n.classList.contains(this.triggerClassName)||(this.hidePanel(),this.showPanel(),this.positionPanel(),this.updatePanelContentWithDelay())},handleSelectMention:function(e){if(e){var t=this.activeMentionAt.childNodes[0];t.textContent=e,r["default"].selection.select(this.document,t,e.length),this.hidePanel()}else this.hidePanel()},hidePanel:function(){this.mentionPanel.classList.remove("medium-editor-mention-panel-active"),this.extraActiveClassName&&this.mentionPanel.classList.remove(this.extraActiveClassName),this.activeMentionAt&&(this.base.saveSelection(),a(this.activeMentionAt,this.document),this.base.restoreSelection(),this.activeMentionAt=null)},showPanel:function(){var e="<"+this.tagName+' class="'+this.triggerClassName+'">'+this.trigger+"</"+this.tagName+">";r["default"].util.insertHTMLCommand(this.document,e),this.mentionPanel.classList.contains("medium-editor-mention-panel-active")||(this.activeMentionAt=this.document.querySelector("."+this.triggerClassName),this.mentionPanel.classList.add("medium-editor-mention-panel-active"),this.extraActiveClassName&&this.mentionPanel.classList.add(this.extraActiveClassName))},positionPanel:function(){var e=this.activeMentionAt.getBoundingClientRect(),t=e.bottom,n=e.left,i=this.window.pageYOffset;this.mentionPanel.style.top=t+i+"px",this.mentionPanel.style.left=n+"px"},updatePanelContent:function(){var e=this.activeMentionAt.textContent;this.renderPanelContent(this.mentionPanel,e,this.handleSelectMention.bind(this))},updatePanelContentWithDelay:function(){this.activeMentionAt&&this.activeMentionAt===r["default"].selection.getSelectionStart(this.document)&&this.base.delay(this.updatePanelContent.bind(this))}});t.TCMention=d,t["default"]=d},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-github-fork-ribbon")}]);