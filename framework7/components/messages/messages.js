(function framework7ComponentLoader(e,s){void 0===s&&(s=!0);var a=e.$,t=e.utils,r=(e.getDevice,e.getSupport,e.Class),n=(e.Modal,e.ConstructorMethods);e.ModalMethods;function i(e){this.wrapped=e}function o(e){var s,a;function t(s,a){try{var n=e[s](a),o=n.value,g=o instanceof i;Promise.resolve(g?o.wrapped:o).then((function(e){g?t("return"===s?"return":"next",e):r(n.done?"return":"normal",e)}),(function(e){t("throw",e)}))}catch(e){r("throw",e)}}function r(e,r){switch(e){case"return":s.resolve({value:r,done:!0});break;case"throw":s.reject(r);break;default:s.resolve({value:r,done:!1})}(s=s.next)?t(s.key,s.arg):a=null}this._invoke=function(e,r){return new Promise((function(n,i){var o={key:e,arg:r,resolve:n,reject:i,next:null};a?a=a.next=o:(s=a=o,t(e,r))}))},"function"!=typeof e.return&&(this.return=void 0)}function g(){return(g=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function l(e,s){return(l=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},o.prototype.next=function(e){return this._invoke("next",e)},o.prototype.throw=function(e){return this._invoke("throw",e)},o.prototype.return=function(e){return this._invoke("return",e)};var u=t.extend,c=t.deleteProps,p=function(e){var s,t;function r(s,t){var r;void 0===t&&(t={});var n=m(r=e.call(this,t,[s])||this),i={autoLayout:!0,messages:[],newMessagesFirst:!1,scrollMessages:!0,scrollMessagesOnEdge:!0,firstMessageRule:void 0,lastMessageRule:void 0,tailMessageRule:void 0,sameNameMessageRule:void 0,sameHeaderMessageRule:void 0,sameFooterMessageRule:void 0,sameAvatarMessageRule:void 0,customClassMessageRule:void 0,renderMessage:void 0};n.useModulesParams(i),n.params=u(i,t);var o=a(t.el).eq(0);if(0===o.length)return n||m(r);if(o[0].f7Messages)return o[0].f7Messages||m(r);o[0].f7Messages=n;var g=o.closest(".page-content").eq(0);return u(n,{messages:n.params.messages,$el:o,el:o[0],$pageContentEl:g,pageContentEl:g[0]}),n.useModules(),n.init(),n||m(r)}t=e,(s=r).prototype=Object.create(t.prototype),s.prototype.constructor=s,l(s,t);var n=r.prototype;return n.getMessageData=function(e){var s=a(e),t={name:s.find(".message-name").html(),header:s.find(".message-header").html(),textHeader:s.find(".message-text-header").html(),textFooter:s.find(".message-text-footer").html(),footer:s.find(".message-footer").html(),isTitle:s.hasClass("messages-title"),type:s.hasClass("message-sent")?"sent":"received",text:s.find(".message-text").html(),image:s.find(".message-image").html(),imageSrc:s.find(".message-image img").attr("src"),typing:s.hasClass("message-typing")};t.isTitle&&(t.text=s.html()),t.text&&t.textHeader&&(t.text=t.text.replace('<div class="message-text-header">'+t.textHeader+"</div>","")),t.text&&t.textFooter&&(t.text=t.text.replace('<div class="message-text-footer">'+t.textFooter+"</div>",""));var r=s.find(".message-avatar").css("background-image");return"none"!==r&&""!==r||(r=void 0),r=r&&"string"==typeof r?r.replace("url(","").replace(")","").replace(/"/g,"").replace(/'/g,""):void 0,t.avatar=r,t},n.getMessagesData=function(){var e=this,s=[];return e.$el.find(".message, .messages-title").each((function(a){s.push(e.getMessageData(a))})),s},n.renderMessage=function(e){var s=this,a=u({type:"sent",attrs:{}},e);return s.params.renderMessage?s.params.renderMessage.call(s,a):a.isTitle?'<div class="messages-title">'+a.text+"</div>":$jsx("div",g({class:"message message-"+a.type+" "+(a.isTyping?"message-typing":"")+" "+(a.cssClass||"")},a.attrs),a.avatar&&$jsx("div",{class:"message-avatar",style:"background-image:url("+a.avatar+")"}),$jsx("div",{class:"message-content"},a.name&&$jsx("div",{class:"message-name"},a.name),a.header&&$jsx("div",{class:"message-header"},a.header),$jsx("div",{class:"message-bubble"},a.textHeader&&$jsx("div",{class:"message-text-header"},a.textHeader),a.image&&$jsx("div",{class:"message-image"},a.image),a.imageSrc&&!a.image&&$jsx("div",{class:"message-image"},$jsx("img",{src:a.imageSrc})),(a.text||a.isTyping)&&$jsx("div",{class:"message-text"},a.text||"",a.isTyping&&$jsx("div",{class:"message-typing-indicator"},$jsx("div",null),$jsx("div",null),$jsx("div",null))),a.textFooter&&$jsx("div",{class:"message-text-footer"},a.textFooter)),a.footer&&$jsx("div",{class:"message-footer"},a.footer)))},n.renderMessages=function(e,s){void 0===e&&(e=this.messages),void 0===s&&(s=this.params.newMessagesFirst?"prepend":"append");var a=this,t=e.map((function(e){return a.renderMessage(e)})).join("");a.$el[s](t)},n.isFirstMessage=function(){var e,s=this;return!!s.params.firstMessageRule&&(e=s.params).firstMessageRule.apply(e,arguments)},n.isLastMessage=function(){var e,s=this;return!!s.params.lastMessageRule&&(e=s.params).lastMessageRule.apply(e,arguments)},n.isTailMessage=function(){var e,s=this;return!!s.params.tailMessageRule&&(e=s.params).tailMessageRule.apply(e,arguments)},n.isSameNameMessage=function(){var e,s=this;return!!s.params.sameNameMessageRule&&(e=s.params).sameNameMessageRule.apply(e,arguments)},n.isSameHeaderMessage=function(){var e,s=this;return!!s.params.sameHeaderMessageRule&&(e=s.params).sameHeaderMessageRule.apply(e,arguments)},n.isSameFooterMessage=function(){var e,s=this;return!!s.params.sameFooterMessageRule&&(e=s.params).sameFooterMessageRule.apply(e,arguments)},n.isSameAvatarMessage=function(){var e,s=this;return!!s.params.sameAvatarMessageRule&&(e=s.params).sameAvatarMessageRule.apply(e,arguments)},n.isCustomClassMessage=function(){var e,s=this;if(s.params.customClassMessageRule)return(e=s.params).customClassMessageRule.apply(e,arguments)},n.layout=function(){var e=this;e.$el.find(".message, .messages-title").each((function(s,t){var r=a(s);e.messages||(e.messages=e.getMessagesData());var n=[],i=e.messages[t],o=e.messages[t-1],g=e.messages[t+1];e.isFirstMessage(i,o,g)&&n.push("message-first"),e.isLastMessage(i,o,g)&&n.push("message-last"),e.isTailMessage(i,o,g)&&n.push("message-tail"),e.isSameNameMessage(i,o,g)&&n.push("message-same-name"),e.isSameHeaderMessage(i,o,g)&&n.push("message-same-header"),e.isSameFooterMessage(i,o,g)&&n.push("message-same-footer"),e.isSameAvatarMessage(i,o,g)&&n.push("message-same-avatar");var l=e.isCustomClassMessage(i,o,g);l&&l.length&&("string"==typeof l&&(l=l.split(" ")),l.forEach((function(e){n.push(e)}))),r.removeClass("message-first message-last message-tail message-same-name message-same-header message-same-footer message-same-avatar"),n.forEach((function(e){r.addClass(e)}))}))},n.clear=function(){this.messages=[],this.$el.html("")},n.removeMessage=function(e,s){void 0===s&&(s=!0);var t,r,n=this;return"number"==typeof e?(t=e,r=n.$el.find(".message, .messages-title").eq(t)):n.messages&&n.messages.indexOf(e)>=0?(t=n.messages.indexOf(e),r=n.$el.children().eq(t)):t=(r=a(e)).index(),0===r.length||(r.remove(),n.messages.splice(t,1),n.params.autoLayout&&s&&n.layout()),n},n.removeMessages=function(e,s){void 0===s&&(s=!0);var t=this;if(Array.isArray(e)){var r=[];e.forEach((function(e){r.push(t.$el.find(".message, .messages-title").eq(e))})),r.forEach((function(e){t.removeMessage(e,!1)}))}else a(e).each((function(e){t.removeMessage(e,!1)}));return t.params.autoLayout&&s&&t.layout(),t},n.addMessage=function(){for(var e,s,a,t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return"boolean"==typeof n[1]?(e=n[0],s=n[1],a=n[2]):(e=n[0],a=n[1],s=n[2]),void 0===s&&(s=!0),void 0===a&&(a=t.params.newMessagesFirst?"prepend":"append"),t.addMessages([e],s,a)},n.setScrollData=function(){var e=this,s=e.pageContentEl.scrollHeight,a=e.pageContentEl.offsetHeight,t=e.pageContentEl.scrollTop;return e.scrollData={scrollHeightBefore:s,heightBefore:a,scrollBefore:t},{scrollHeightBefore:s,heightBefore:a,scrollBefore:t}},n.addMessages=function(){for(var e,s,t,r=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];"boolean"==typeof i[1]?(e=i[0],s=i[1],t=i[2]):(e=i[0],t=i[1],s=i[2]),void 0===s&&(s=!0),void 0===t&&(t=r.params.newMessagesFirst?"prepend":"append");var g=r.setScrollData(),l=g.scrollHeightBefore,m=g.scrollBefore,u="",c=r.messages.filter((function(e){return e.isTyping}))[0];e.forEach((function(e){c?"append"===t?r.messages.splice(r.messages.indexOf(c),0,e):r.messages.splice(r.messages.indexOf(c)+1,0,e):r.messages["append"===t?"push":"unshift"](e),u+=r.renderMessage(e)}));var p=a(u);return s&&("append"!==t||r.params.newMessagesFirst||p.addClass("message-appear-from-bottom"),"prepend"===t&&r.params.newMessagesFirst&&p.addClass("message-appear-from-top")),c?"append"===t?p.insertBefore(r.$el.find(".message-typing")):p.insertAfter(r.$el.find(".message-typing")):r.$el[t](p),r.params.autoLayout&&r.layout(),"prepend"!==t||c||(r.pageContentEl.scrollTop=m+(r.pageContentEl.scrollHeight-l)),r.params.scrollMessages&&("append"===t&&!r.params.newMessagesFirst||"prepend"===t&&r.params.newMessagesFirst&&!c)&&r.scrollWithEdgeCheck(s),r},n.showTyping=function(e){void 0===e&&(e={});var s=this,a=s.messages.filter((function(e){return e.isTyping}))[0];return a&&s.removeMessage(s.messages.indexOf(a)),s.addMessage(u({type:"received",isTyping:!0},e)),s},n.hideTyping=function(){var e,s,a=this;if(a.messages.forEach((function(s,a){s.isTyping&&(e=a)})),void 0!==e&&a.$el.find(".message").eq(e).hasClass("message-typing")&&(s=!0,a.removeMessage(e)),!s){var t=a.$el.find(".message-typing");t.length&&a.removeMessage(t)}return a},n.scrollWithEdgeCheck=function(e){var s=this,a=s.scrollData,t=a.scrollBefore,r=a.scrollHeightBefore,n=a.heightBefore;if(s.params.scrollMessagesOnEdge){var i=!1;s.params.newMessagesFirst&&0===t&&(i=!0),!s.params.newMessagesFirst&&t-(r-n)>=-10&&(i=!0),i&&s.scroll(e?void 0:0)}else s.scroll(e?void 0:0)},n.scroll=function(e,s){void 0===e&&(e=300);var a,t=this,r=t.pageContentEl.scrollTop;if(void 0!==s)a=s;else if((a=t.params.newMessagesFirst?0:t.pageContentEl.scrollHeight-t.pageContentEl.offsetHeight)===r)return t;return t.$pageContentEl.scrollTop(a,e),t},n.init=function(){var e=this;e.messages&&0!==e.messages.length||(e.messages=e.getMessagesData()),e.params.messages&&e.params.messages.length&&e.renderMessages(),e.params.autoLayout&&e.layout(),e.params.scrollMessages&&e.scroll(0)},n.destroy=function(){var e=this;e.emit("local::beforeDestroy messagesBeforeDestroy",e),e.$el.trigger("messages:beforedestroy"),e.$el[0]&&(e.$el[0].f7Messages=null,delete e.$el[0].f7Messages),c(e)},r}(r),d={name:"messages",static:{Messages:p},create:function(){this.messages=n({defaultSelector:".messages",constructor:p,app:this,domProp:"f7Messages",addMethods:"renderMessages layout scroll clear removeMessage removeMessages addMessage addMessages".split(" ")})},on:{tabBeforeRemove:function(e){var s=this;a(e).find(".messages-init").each((function(e){s.messages.destroy(e)}))},tabMounted:function(e){var s=this;a(e).find(".messages-init").each((function(e){s.messages.create({el:e})}))},pageBeforeRemove:function(e){var s=this;e.$el.find(".messages-init").each((function(e){s.messages.destroy(e)}))},pageInit:function(e){var s=this;e.$el.find(".messages-init").each((function(e){s.messages.create({el:e})}))}},vnode:{"messages-init":{insert:function(e){var s=e.elm;this.messages.create({el:s})},destroy:function(e){var s=e.elm;this.messages.destroy(s)}}}};if(s){if(e.prototype.modules&&e.prototype.modules[d.name])return;e.use(d),e.instance&&(e.instance.useModuleParams(d,e.instance.params),e.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
