(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[4822],{6363:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(85072),s=i.n(a),o=i(21634),n={insert:"head",singleton:!1};s()(o.default,n);const l=o.default.locals||{}},12758:(t,e,i)=>{"use strict";i.r(e);var a=i(55091),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},13574:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(24786),s=i(91584),o=(i(49551),i(74692));function n(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=Array(e);i<e;i++)a[i]=t[i];return a}const r={components:{VueCropper:s.default,VueTimeago:a.default},props:["profile-id"],data:function(){return{loaded:!1,config:window.App.config,mimes:["image/jpeg","image/png","video/mp4"],page:"landing",pages:["landing","crop","edit","confirm","error","uploading","createPoll"],uploading:!1,uploadProgress:0,cropper:{aspectRatio:9/16,viewMode:3,zoomable:!0,zoom:null},mediaUrl:null,mediaId:null,mediaType:null,stories:[],lightboxMedia:!1,duration:10,canReply:!0,canReact:!0,poll:{question:null,options:[]},pollQuestion:null,pollOptions:[],canPostPoll:!1,max_duration:15}},watch:{duration:function(t){"video"==this.mediaType&&(this.$refs.previewVideo.currentTime=t,this.$refs.previewVideo.play())},pollQuestion:function(t){t.length<6&&(this.canPostPoll=!1)},pollOptions:function(t){this.pollOptions.filter((function(t){return t.length>=2})).length>=2?this.canPostPoll=!0:this.canPostPoll=!1}},mounted:function(){var t=this;o("body").addClass("bg-black"),this.mediaWatcher(),setTimeout((function(){axios.get("/api/web/stories/v1/profile/"+t.profileId).then((function(e){e.data.length&&(t.stories=e.data[0].nodes.map((function(t){return t.showViewers=!1,t.viewers=[],t}))),t.loaded=!0}))}),400)},methods:{upload:function(){o('.file-input[name="media"]').trigger("click")},mediaWatcher:function(){var t=this;o(document).on("change","#pf-dz",(function(e){t.triggerUpload()}))},triggerUpload:function(){var t=this;t.uploading=!0;var e=document.querySelector("#pf-dz");t.page="uploading",Array.prototype.forEach.call(e.files,(function(e,i){if(t.media&&t.media.length+i>=t.config.uploader.album_limit)return swal("Error","You can only upload "+t.config.uploader.album_limit+" photos per album","error"),t.uploading=!1,void(t.page=2);var a=e.type;if(-1==o.inArray(a,t.mimes))return swal("Invalid File Type","The file you are trying to add is not a valid mime type. Please upload a "+t.mimes+" only.","error"),t.uploading=!1,void(t.page="error");var s=new FormData;s.append("file",e);var n={onUploadProgress:function(e){var i=Math.floor(100*e.loaded/e.total);t.uploadProgress=i}};e.value=null,axios.post("/api/web/stories/v1/add",s,n).then((function(e){t.uploadProgress=100,t.uploading=!1,t.mediaUrl=e.data.media_url,t.mediaId=e.data.media_id,t.mediaType=e.data.media_type,t.page="video"===e.data.media_type?"preview":"crop",e.data.hasOwnProperty("media_duration")&&(t.max_duration=e.data.media_duration)})).catch((function(i){t.uploading=!1,e.value=null;var a=i.response.data.message?i.response.data.message:i.response.data.error?i.response.data.error:"Something went wrong.";swal("Oops!",a,"warning"),t.page="error"})),t.uploadProgress=0})),document.querySelector("#pf-dz").value=""},expiresTimestamp:function(t){return(t=new Date(1e3*t)).toDateString()+" "+t.toLocaleTimeString()},edit:function(){this.page="edit"},showLightbox:function(t){this.lightboxMedia={url:t.src},this.$refs.lightboxModal.show()},deleteStory:function(t,e){var i=this;1==window.confirm("Are you sure you want to delete this Story?")&&axios.delete("/api/web/stories/v1/delete/"+t.id).then((function(t){i.stories.splice(e,1),0==i.stories.length&&(window.location.href="/i/stories/new")}))},navigateTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";window.location.href=t},goBack:function(){this.page="landing"},performCrop:function(){var t=this;this.page="cropping";var e=this.$refs.croppa.getData();axios.post("/api/web/stories/v1/crop",{media_id:this.mediaId,width:e.width,height:e.height,x:e.x,y:e.y}).then((function(e){t.page="preview"}))},deleteCurrentStory:function(){var t={id:this.mediaId};this.deleteStory(t),this.page="landing"},shareStoryToFollowers:function(){var t=this;this.canPostPoll?axios.post("/api/web/stories/v1/publish/poll",{question:this.pollQuestion,options:this.pollOptions,can_reply:this.canReply,can_react:this.canReact}).then((function(e){window.location.href="/i/my/story?id="+t.mediaId})):axios.post("/api/web/stories/v1/publish",{media_id:this.mediaId,duration:this.duration,can_reply:this.canReply,can_react:this.canReact}).then((function(e){window.location.href="/i/my/story?id="+t.mediaId}))},viewMyStory:function(){window.location.href="/i/my/story"},toggleShowViewers:function(t){this.stories[t].showViewers=!this.stories[t].showViewers},timeago:function(t){return App.util.format.timeAgo(t)},newPoll:function(){this.page="createPoll"},addOptionInput:function(){this.pollOptions.filter((function(t){return t.length<3})).length||this.pollOptions.push([])},pollPreview:function(){var t=this.pollOptions;n(new Set(this.pollOptions)).length==t.length?this.page="preview":swal("Oops!","You cannot use duplicate poll answers, please remove any duplicates and try again.","error")}}}},21634:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(76798),s=i.n(a)()((function(t){return t[1]}));s.push([t.id,".bg-black{background-color:#262626}",""]);const o=s},51737:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(13574),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s);const o=a.default},52626:(t,e,i)=>{"use strict";i.r(e);var a=i(98395),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},55091:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(85072),s=i.n(a),o=i(83430),n={insert:"head",singleton:!1};s()(o.default,n);const l=o.default.locals||{}},60594:(t,e,i)=>{"use strict";i.r(e);var a=i(6363),s={};for(const t in a)"default"!==t&&(s[t]=()=>a[t]);i.d(e,s)},63620:(t,e,i)=>{Vue.component("story-compose",i(75750).default)},75750:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var a=i(52626),s=i(51737),o={};for(const t in s)"default"!==t&&(o[t]=()=>s[t]);i.d(e,o);i(60594),i(12758);const n=(0,i(14486).default)(s.default,a.render,a.staticRenderFns,!1,null,"5bc5d47b",null).exports},83430:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(76798),s=i.n(a)()((function(t){return t[1]}));s.push([t.id,".story-compose-component #lightbox .modal-content[data-v-5bc5d47b]{background:transparent}.story-compose-component[data-v-5bc5d47b] ::-moz-placeholder{color:#ccc}.story-compose-component[data-v-5bc5d47b] ::placeholder{color:#ccc}.story-compose-component .crop-container[data-v-5bc5d47b]{background:linear-gradient(180deg,rgba(38,38,38,.8),rgba(38,38,38,0));min-height:100px;padding:15px 30px;position:absolute;top:0;width:100%;z-index:9}",""]);const o=s},98395:(t,e,i)=>{"use strict";i.r(e),i.d(e,{render:()=>a,staticRenderFns:()=>s});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"story-compose-component container mt-2 mt-md-5 bg-black"},[e("input",{staticClass:"d-none file-input",attrs:{type:"file",id:"pf-dz",name:"media",accept:t.config.mimes}}),t._v(" "),e("span",{staticClass:"fixed-top text-right m-3 cursor-pointer",on:{click:function(e){return t.navigateTo()}}},[e("i",{staticClass:"fal fa-times-circle fa-2x text-lighter"})]),t._v(" "),t.loaded?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 offset-md-3 bg-dark rounded-lg px-0"},["landing"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center",staticStyle:{height:"90vh"}},[t._m(0),t._v(" "),e("div",{staticClass:"flex-fill py-4"},[e("p",{staticClass:"text-center lead font-weight-light text-lighter mb-4"},[t._v("Share moments with followers that last 24 hours")]),t._v(" "),e("div",{staticClass:"card w-100 shadow-none bg-transparent"},[e("div",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-outline-light btn-lg font-weight-bold btn-block rounded-pill my-1",attrs:{type:"button",disabled:t.stories.length>=20},on:{click:function(e){return t.upload()}}},[t._v("\n\t\t\t\t\t\t\t\tAdd to Story\n\t\t\t\t\t\t\t")])]),t._v(" "),t.stories.length>=20?e("p",{staticClass:"font-weight-bold text-muted text-center"},[t._v("\n\t\t\t\t\t\t\tYou have reached the limit for new stories\n\t\t\t\t\t\t")]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-outline-light btn-lg font-weight-bold btn-block rounded-pill my-3",attrs:{type:"button",disabled:0==t.stories.length},on:{click:t.viewMyStory}},[e("span",[t._v("My Story")]),t._v(" "),t.stories.length?e("sup",{staticClass:"ml-2 px-2 text-light bg-danger rounded-pill",staticStyle:{"font-size":"12px","padding-top":"2px","padding-bottom":"3px"}},[t._v(t._s(t.stories.length))]):t._e()])])]),t._v(" "),t._m(1)]):"crop"==t.page?e("div",{staticClass:"d-flex justify-content-center flex-fill",staticStyle:{position:"relative",height:"90vh"}},[e("vue-cropper",{ref:"croppa",staticClass:"w-100 h-100 p-0",attrs:{aspectRatio:t.cropper.aspectRatio,viewMode:3,dragMode:"move",autoCropArea:1,guides:!1,highlight:!1,cropBoxMovable:!1,cropBoxResizable:!1,toggleDragModeOnDblclick:!1,src:t.mediaUrl}}),t._v(" "),e("div",{staticClass:"crop-container"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("button",{staticClass:"btn btn-outline-muted rounded-pill font-weight-bold px-4",attrs:{type:"button"},on:{click:function(e){return t.deleteCurrentStory()}}},[t._v("\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t")]),t._v(" "),t._m(2),t._v(" "),e("button",{staticClass:"btn btn-outline-light rounded-pill font-weight-bold px-4",attrs:{type:"button"},on:{click:function(e){return t.performCrop()}}},[t._v("\n\t\t\t\t\t\t\tNext\n\t\t\t\t\t\t")])])])],1):"error"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center align-items-center",staticStyle:{height:"90vh"}},[t._m(3),t._v(" "),t._m(4)]):"uploading"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center align-items-center",staticStyle:{height:"90vh"}},[t._m(5)]):"cropping"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center align-items-center",staticStyle:{height:"90vh"}},[t._m(6)]):"preview"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center align-items-center",staticStyle:{height:"90vh"}},[t._m(7),t._v(" "),e("div",{staticClass:"flex-fill"},[e("div",{staticClass:"form-group pb-3"},[e("label",{staticClass:"text-light lead font-weight-bold",attrs:{for:"durationSlider"}},[t._v("Options")]),t._v(" "),e("div",{staticClass:"custom-control custom-checkbox mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.canReply,expression:"canReply"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"optionReplies"},domProps:{checked:Array.isArray(t.canReply)?t._i(t.canReply,null)>-1:t.canReply},on:{change:function(e){var i=t.canReply,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.canReply=i.concat([null])):o>-1&&(t.canReply=i.slice(0,o).concat(i.slice(o+1)))}else t.canReply=s}}}),t._v(" "),e("label",{staticClass:"custom-control-label text-light font-weight-lighter",attrs:{for:"optionReplies"}},[t._v("Allow replies")])]),t._v(" "),e("div",{staticClass:"custom-control custom-checkbox mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.canReact,expression:"canReact"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"formReactions"},domProps:{checked:Array.isArray(t.canReact)?t._i(t.canReact,null)>-1:t.canReact},on:{change:function(e){var i=t.canReact,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.canReact=i.concat([null])):o>-1&&(t.canReact=i.slice(0,o).concat(i.slice(o+1)))}else t.canReact=s}}}),t._v(" "),e("label",{staticClass:"custom-control-label text-light font-weight-lighter",attrs:{for:"formReactions"}},[t._v("Allow reactions")])])]),t._v(" "),t.canPostPoll?t._e():e("div",{staticClass:"form-group"},["video"==t.mediaType?e("video",{ref:"previewVideo",staticClass:"mb-4 w-100",staticStyle:{"max-height":"200px","object-fit":"contain"}},[e("source",{attrs:{src:t.mediaUrl,type:"video/mp4"}})]):t._e(),t._v(" "),e("label",{staticClass:"text-light lead font-weight-bold",attrs:{for:"durationSlider"}},[t._v("Story Duration")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],staticClass:"custom-range",attrs:{type:"range",min:"3",max:t.max_duration,step:"1",id:"durationSlider"},domProps:{value:t.duration},on:{__r:function(e){t.duration=e.target.value}}}),t._v(" "),e("p",{staticClass:"help-text text-center"},[e("span",{staticClass:"text-light"},[t._v(t._s(t.duration)+" seconds")])])])]),t._v(" "),e("div",{staticClass:"flex-fill w-100 px-md-5"},[e("div",{staticClass:"d-flex"},[e("a",{staticClass:"btn btn-outline-muted btn-block font-weight-bold my-3 mr-3 rounded-pill",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.deleteCurrentStory()}}},[t._v("\n\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"btn btn-primary btn-block font-weight-bold my-3 rounded-pill",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.shareStoryToFollowers()}}},[t._v("\n\t\t\t\t\t\t\tPost "+t._s(t.canPostPoll?"Poll":"Story")+"\n\t\t\t\t\t\t")])])])]):"edit"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center",staticStyle:{height:"90vh"}},[t._m(8),t._v(" "),e("div",{staticClass:"flex-fill py-4"},[e("p",{staticClass:"lead font-weight-bold text-lighter"},[t._v("My Stories")]),t._v(" "),e("div",{staticClass:"card w-100 shadow-none bg-transparent",staticStyle:{"max-height":"50vh","overflow-y":"scroll"}},[e("div",{staticClass:"list-group"},t._l(t.stories,(function(i,a){return e("div",{staticClass:"list-group-item bg-transparent text-center border-muted text-lighter",attrs:{href:"#"}},[e("div",{staticClass:"media align-items-center"},[e("div",{staticClass:"mr-3 cursor-pointer",on:{click:function(e){return t.showLightbox(i)}}},[e("img",{staticClass:"rounded-circle border",staticStyle:{"object-fit":"cover"},attrs:{src:i.src,width:"40px",height:"40px"}})]),t._v(" "),e("div",{staticClass:"media-body text-left"},[e("p",{staticClass:"mb-0 text-muted font-weight-bold"},[e("span",[t._v(t._s(t.timeago(i.created_at))+" ago")])])]),t._v(" "),e("div",{staticClass:"flex-grow-1 text-right"},[i.viewers.length?e("button",{staticClass:"btn btn-link btn-sm mr-1",on:{click:function(e){return t.toggleShowViewers(a)}}},[e("i",{staticClass:"fal fa-eye fa-lg text-muted"})]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-link btn-sm",on:{click:function(e){return t.deleteStory(i,a)}}},[e("i",{staticClass:"fal fa-trash-alt fa-lg text-muted"})])])]),t._v(" "),i.showViewers&&i.viewers.length?e("div",{staticClass:"m-2 text-left"},[e("p",{staticClass:"font-weight-bold mb-2"},[t._v("Viewed By")]),t._v(" "),t._l(i.viewers,(function(i){return e("div",{staticClass:"d-flex"},[e("img",{staticClass:"rounded-circle mr-2",attrs:{src:"/storage/avatars/default.png",width:"24",height:"24"}}),t._v(" "),e("p",{staticClass:"mb-0 font-weight-bold"},[t._v("viewer.username")])])}))],2):t._e()])})),0)])]),t._v(" "),e("div",{staticClass:"flex-fill text-center"},[e("a",{staticClass:"btn btn-outline-secondary btn-block px-5 font-weight-bold",attrs:{href:"/i/stories/new"},on:{click:function(e){return e.preventDefault(),t.goBack()}}},[t._v("Go back")])])]):"createPoll"==t.page?e("div",{staticClass:"card card-body bg-transparent border-0 shadow-none d-flex justify-content-center",staticStyle:{height:"90vh"}},[t._m(9),t._v(" "),e("div",{staticClass:"flex-fill mt-3"},[e("div",{staticClass:"align-items-center"},[e("div",{staticClass:"form-group mb-5"},[e("label",{staticClass:"font-weight-bold text-lighter"},[t._v("Poll Question")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pollQuestion,expression:"pollQuestion"}],staticClass:"form-control form-control-lg rounded-pill bg-muted shadow text-white border-0",attrs:{placeholder:"Ask a poll question here..."},domProps:{value:t.pollQuestion},on:{input:function(e){e.target.composing||(t.pollQuestion=e.target.value)}}})]),t._v(" "),e("label",{staticClass:"font-weight-bold text-lighter"},[t._v("Poll Answers")]),t._v(" "),t._l(t.pollOptions,(function(i,a){return e("div",{staticClass:"form-group mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pollOptions[a],expression:"pollOptions[index]"}],staticClass:"form-control form-control-lg rounded-pill bg-muted shadow text-white border-0",attrs:{placeholder:"Add a poll answer here..."},domProps:{value:t.pollOptions[a]},on:{input:function(e){e.target.composing||t.$set(t.pollOptions,a,e.target.value)}}})])})),t._v(" "),t.pollOptions.length<4?e("div",{staticClass:"mb-3"},[e("button",{staticClass:"btn btn-block font-weight-bold rounded-pill shadow",class:[(t.pollQuestion&&t.pollQuestion.length)>6&&(0==t.pollOptions.length||t.pollOptions.length&&t.pollOptions[t.pollOptions.length-1].length>3)?"btn-muted":"btn-outline-muted"],attrs:{disabled:!t.pollQuestion||t.pollQuestion.length<6},on:{click:t.addOptionInput}},[t._v("\n\t\t\t\t\t\t\t\tAdd poll option\n\t\t\t\t\t\t\t")])]):t._e()],2)]),t._v(" "),e("div",{staticClass:"flex-fill text-center"},[t.canPostPoll?e("a",{staticClass:"btn btn-outline-light btn-block px-5 font-weight-bold rounded-pill",attrs:{href:"/i/stories/new"},on:{click:function(e){return e.preventDefault(),t.pollPreview.apply(null,arguments)}}},[t._v("Next")]):t._e(),t._v(" "),e("a",{staticClass:"btn btn-outline-secondary btn-block px-5 font-weight-bold rounded-pill",attrs:{href:"/i/stories/new"},on:{click:function(e){return e.preventDefault(),t.goBack()}}},[t._v("Go back")])])]):t._e()])]):e("div",{staticClass:"row"},[t._m(10)]),t._v(" "),e("b-modal",{ref:"lightboxModal",staticClass:"bg-transparent",attrs:{id:"lightbox","hide-header":"","hide-footer":"",centered:"",size:"md","body-class":"p-0 bg-transparent"}},[t.lightboxMedia?e("div",{staticClass:"w-100 h-100 bg-transparent"},[e("img",{staticStyle:{"max-height":"90vh",width:"100%","object-fit":"contain"},attrs:{src:t.lightboxMedia.url}})]):t._e()])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center flex-fill pt-3"},[e("img",{staticClass:"mb-2",attrs:{src:"/img/pixelfed-icon-color.svg",width:"70",height:"70"}}),t._v(" "),e("p",{staticClass:"lead text-lighter font-weight-light mb-0"},[t._v("Stories")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center flex-fill"},[e("p",{staticClass:"text-uppercase mb-0"},[e("a",{staticClass:"text-lighter font-weight-bold",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),e("span",{staticClass:"px-2 text-lighter"},[t._v("|")]),t._v(" "),e("a",{staticClass:"text-lighter font-weight-bold",attrs:{href:"/site/help"}},[t._v("Help")])]),t._v(" "),e("p",{staticClass:"small text-muted mb-0"},[t._v("v 1.0.0")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e("h4",{staticClass:"font-weight-light text-light mb-n1"},[t._v("Crop")]),t._v(" "),e("span",{staticClass:"small text-light"},[t._v("Pan around and pinch to zoom")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center flex-fill pt-3"},[e("img",{staticClass:"mb-2",attrs:{src:"/img/pixelfed-icon-color.svg",width:"70",height:"70"}}),t._v(" "),e("p",{staticClass:"lead text-lighter font-weight-light mb-0"},[t._v("Stories")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-fill text-center"},[e("p",{staticClass:"h3 mb-0 text-light"},[t._v("Oops!")]),t._v(" "),e("p",{staticClass:"text-muted lead"},[t._v("An error occurred, please try again later.")]),t._v(" "),e("p",{staticClass:"text-muted mb-0"},[e("a",{staticClass:"btn btn-outline-muted py-0 px-5 rounded-pill font-weight-bold",attrs:{href:"/"}},[t._v("Go back")])])])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border text-lighter",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border text-lighter",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center flex-fill pt-3"},[e("img",{staticClass:"mb-2",attrs:{src:"/img/pixelfed-icon-color.svg",width:"70",height:"70"}}),t._v(" "),e("p",{staticClass:"lead text-lighter font-weight-light mb-0"},[t._v("Stories")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center flex-fill mt-5"},[e("p",{staticClass:"text-muted font-weight-light mb-1"},[e("i",{staticClass:"fal fa-history fa-5x"})]),t._v(" "),e("p",{staticClass:"text-muted font-weight-bold mb-0"},[t._v("STORIES")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center pt-3"},[e("img",{staticClass:"mb-2",attrs:{src:"/img/pixelfed-icon-color.svg",width:"70",height:"70"}}),t._v(" "),e("p",{staticClass:"lead text-lighter font-weight-light mb-0"},[t._v("Stories")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 col-md-6 offset-md-3 bg-dark rounded-lg px-0",staticStyle:{height:"90vh"}},[t("div",{staticClass:"w-100 h-100 d-flex justify-content-center align-items-center"},[t("div",{staticClass:"spinner-border text-lighter",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])])])}]}},t=>{t.O(0,[3660],(()=>{return e=63620,t(t.s=e);var e}));t.O()}]);