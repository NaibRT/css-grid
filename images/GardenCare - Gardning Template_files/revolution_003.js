/********************************************
 * REVOLUTION 5.2.5.1 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.0.1 (18.10.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";function e(a){return void 0==a?-1:jQuery.isNumeric(a)?a:a.split(":").length>1?60*parseInt(a.split(":")[0],0)+parseInt(a.split(":")[1],0):a}var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.3",version:"2.0.1"};jQuery.extend(!0,b,{preLoadAudio:function(a,c){return"stop"!==b.compare_version(d).check&&void a.find(".tp-audiolayer").each(function(){var a=jQuery(this),d={};0===a.find("audio").length&&(d.src=void 0!=a.data("videomp4")?a.data("videomp4"):"",d.pre=a.data("videopreload")||"",void 0===a.attr("id")&&a.attr("audio-layer-"+Math.round(199999*Math.random())),d.id=a.attr("id"),d.status="prepared",d.start=jQuery.now(),d.waittime=1e3*a.data("videopreloadwait")||5e3,"auto"!=d.pre&&"canplaythrough"!=d.pre&&"canplay"!=d.pre&&"progress"!=d.pre||(void 0===c.audioqueue&&(c.audioqueue=[]),c.audioqueue.push(d),b.manageVideoLayer(a,c)))})},preLoadAudioDone:function(a,b,c){b.audioqueue&&b.audioqueue.length>0&&jQuery.each(b.audioqueue,function(b,d){a.data("videomp4")!==d.src||d.pre!==c&&"auto"!==d.pre||(d.status="loaded")})},resetVideo:function(a,d){var f=a.data();switch(f.videotype){case"youtube":f.player;try{if("on"==f.forcerewind){var h=e(a.data("videostartat")),i=h==-1,j=1===f.bgvideo||a.find(".tp-videoposter").length>0;h=h==-1?0:h,void 0!=f.player&&(0!==h&&!i||j)&&(f.player.seekTo(h),f.player.pauseVideo())}}catch(a){}0==a.find(".tp-videoposter").length&&1!==f.bgvideo&&punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":var k=$f(a.find("iframe").attr("id"));try{if("on"==f.forcerewind){var h=e(f.videostartat),i=h==-1,j=1===f.bgvideo||a.find(".tp-videoposter").length>0;h=h==-1?0:h,(0!==h&&!i||j)&&(k.api("seekTo",h),k.api("pause"))}}catch(a){}0==a.find(".tp-videoposter").length&&1!==f.bgvideo&&punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(c&&1==f.disablevideoonmobile)return!1;var m="html5"==f.audio?"audio":"video",n=a.find(m),o=n[0];if(punchgs.TweenLite.to(n,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==f.forcerewind&&!a.hasClass("videoisplaying"))try{var h=e(f.videostartat);o.currentTime=h==-1?0:h}catch(a){}("mute"==f.volume||b.lastToggleState(a.videomutetoggledby)||d.globalmute===!0)&&(o.muted=!0)}},isVideoMuted:function(a,b){var c=!1,d=a.data();switch(d.videotype){case"youtube":try{var e=d.player;c=e.isMuted()}catch(a){}break;case"vimeo":try{$f(a.find("iframe").attr("id"));"mute"==d.volume&&(c=!0)}catch(a){}break;case"html5":var g="html5"==d.audio?"audio":"video",h=a.find(g),i=h[0];i.muted&&(c=!0)}return c},muteVideo:function(a,b){var c=a.data();switch(c.videotype){case"youtube":try{var d=c.player;d.mute()}catch(a){}break;case"vimeo":try{var e=$f(a.find("iframe").attr("id"));a.data("volume","mute"),e.api("setVolume",0)}catch(a){}break;case"html5":var f="html5"==c.audio?"audio":"video",g=a.find(f),h=g[0];h.muted=!0}},unMuteVideo:function(a,b){if(b.globalmute!==!0){var c=a.data();switch(c.videotype){case"youtube":try{var d=c.player;d.unMute()}catch(a){}break;case"vimeo":try{var e=$f(a.find("iframe").attr("id"));a.data("volume","1"),e.api("setVolume",1)}catch(a){}break;case"html5":var f="html5"==c.audio?"audio":"video",g=a.find(f),h=g[0];h.muted=!1}}},stopVideo:function(a,b){var c=a.data();switch(b.leaveViewPortBasedStop||(b.lastplayedvideos=[]),b.leaveViewPortBasedStop=!1,c.videotype){case"youtube":try{var d=c.player;if(2===d.getPlayerState()||5===d.getPlayerState())return;d.pauseVideo(),c.youtubepausecalled=!0,setTimeout(function(){c.youtubepausecalled=!1},80)}catch(a){console.log("Issue at YouTube Video Pause:"),console.log(a)}break;case"vimeo":try{var e=$f(a.find("iframe").attr("id"));e.api("pause"),c.vimeopausecalled=!0,setTimeout(function(){c.vimeopausecalled=!1},80)}catch(a){console.log("Issue at Vimeo Video Pause:"),console.log(a)}break;case"html5":var f="html5"==c.audio?"audio":"video",g=a.find(f),h=g[0];void 0!=g&&void 0!=h&&h.pause()}},playVideo:function(a,d){clearTimeout(a.data("videoplaywait"));var g=a.data();switch(g.videotype){case"youtube":if(0==a.find("iframe").length)a.append(a.data("videomarkup")),h(a,d,!0);else if(void 0!=g.player.playVideo){var i=e(a.data("videostartat")),j=g.player.getCurrentTime();1==a.data("nextslideatend-triggered")&&(j=-1,a.data("nextslideatend-triggered",0)),i!=-1&&i>j&&g.player.seekTo(i),g.youtubepausecalled!==!0&&g.player.playVideo()}else a.data("videoplaywait",setTimeout(function(){g.youtubepausecalled!==!0&&b.playVideo(a,d)},50));break;case"vimeo":if(0==a.find("iframe").length)a.append(a.data("videomarkup")),h(a,d,!0);else if(a.hasClass("rs-apiready")){var k=a.find("iframe").attr("id"),l=$f(k);void 0==l.api("play")?a.data("videoplaywait",setTimeout(function(){g.vimeopausecalled!==!0&&b.playVideo(a,d)},50)):setTimeout(function(){l.api("play");var b=e(a.data("videostartat")),c=a.data("currenttime");1==a.data("nextslideatend-triggered")&&(c=-1,a.data("nextslideatend-triggered",0)),b!=-1&&b>c&&l.api("seekTo",b)},510)}else a.data("videoplaywait",setTimeout(function(){g.vimeopausecalled!==!0&&b.playVideo(a,d)},50));break;case"html5":if(c&&1==a.data("disablevideoonmobile"))return!1;var m="html5"==g.audio?"audio":"video",n=a.find(m),o=n[0],p=n.parent();if(1!=p.data("metaloaded"))f(o,"loadedmetadata",function(a){b.resetVideo(a,d),o.play();var c=e(a.data("videostartat")),f=o.currentTime;1==a.data("nextslideatend-triggered")&&(f=-1,a.data("nextslideatend-triggered",0)),c!=-1&&c>f&&(o.currentTime=c)}(a));else{o.play();var i=e(a.data("videostartat")),j=o.currentTime;1==a.data("nextslideatend-triggered")&&(j=-1,a.data("nextslideatend-triggered",0)),i!=-1&&i>j&&(o.currentTime=i)}}},isVideoPlaying:function(a,b){var c=!1;return void 0!=b.playingvideos&&jQuery.each(b.playingvideos,function(b,d){a.attr("id")==d.attr("id")&&(c=!0)}),c},removeMediaFromList:function(a,b){m(a,b)},prepareCoveredVideo:function(a,c,d){var e=d.find("iframe, video"),f=a.split(":")[0],g=a.split(":")[1],h=d.closest(".tp-revslider-slidesli"),i=h.width()/h.height(),j=f/g,k=i/j*100,l=j/i*100;i>j?punchgs.TweenLite.to(e,.001,{height:k+"%",width:"100%",top:-(k-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(e,.001,{width:l+"%",height:"100%",left:-(l-100)/2+"%",top:"0px",position:"absolute"}),e.hasClass("resizelistener")||(e.addClass("resizelistener"),jQuery(window).resize(function(){clearTimeout(e.data("resizelistener")),e.data("resizelistener",setTimeout(function(){b.prepareCoveredVideo(a,c,d)},30))}))},checkVideoApis:function(a,b,c){"https:"===location.protocol?"https":"http";if((void 0!=a.data("ytid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(b.youtubeapineeded=!0),(void 0!=a.data("ytid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==c.addedyt){b.youtubestarttime=jQuery.now(),c.addedyt=1;var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var f=document.getElementsByTagName("script")[0],g=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(g=!1)}),g&&f.parentNode.insertBefore(e,f)}if((void 0!=a.data("vimeoid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(b.vimeoapineeded=!0),(void 0!=a.data("vimeoid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==c.addedvim){b.vimeostarttime=jQuery.now(),c.addedvim=1;var h=document.createElement("script"),f=document.getElementsByTagName("script")[0],g=!0;h.src="https://secure-a.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){"https://secure-a.vimeocdn.com/js/froogaloop2.min.js"==jQuery(this).attr("src")&&(g=!1)}),g&&f.parentNode.insertBefore(h,f)}return c},manageVideoLayer:function(a,g,i,j){if("stop"===b.compare_version(d).check)return!1;var l=a.data(),m=l.videoattributes,n=l.ytid,o=l.vimeoid,p="auto"===l.videopreload||"canplay"===l.videopreload||"canplaythrough"===l.videopreload||"progress"===l.videopreload?"auto":l.videopreload,q=l.videomp4,r=l.videowebm,s=l.videoogv,t=l.allowfullscreenvideo,u=l.videocontrols,v="http",w="loop"==l.videoloop?"loop":"loopandnoslidestop"==l.videoloop?"loop":"",x=void 0!=q||void 0!=r?"html5":void 0!=n&&String(n).length>1?"youtube":void 0!=o&&String(o).length>1?"vimeo":"none",y="html5"==l.audio?"audio":"video",z="html5"==x&&0==a.find(y).length?"html5":"youtube"==x&&0==a.find("iframe").length?"youtube":"vimeo"==x&&0==a.find("iframe").length?"vimeo":"none";switch(w=l.nextslideatend===!0?"":w,l.videotype=x,z){case"html5":"controls"!=u&&(u="");var y="video";"html5"==l.audio&&(y="audio",a.addClass("tp-audio-html5"));var A="<"+y+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+w+' preload="'+p+'">';"auto"==p&&(g.mediapreload=!0),void 0!=r&&"firefox"==b.get_browser().toLowerCase()&&(A=A+'<source src="'+r+'" type="video/webm" />'),void 0!=q&&(A=A+'<source src="'+q+'" type="video/mp4" />'),void 0!=s&&(A=A+'<source src="'+s+'" type="video/ogg" />'),A=A+"</"+y+">";var B="";"true"!==t&&t!==!0||(B='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==u&&(A+='<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+B+"</div>"),a.data("videomarkup",A),a.append(A),(c&&1==a.data("disablevideoonmobile")||b.isIE(8))&&a.find(y).remove(),a.find(y).each(function(c){var d=this,e=jQuery(this);e.parent().hasClass("html5vid")||e.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');var h=e.parent();1!=h.data("metaloaded")&&f(d,"loadedmetadata",function(a){k(a,g),b.resetVideo(a,g)}(a))});break;case"youtube":v="https","none"==u&&(m=m.replace("controls=1","controls=0"),m.toLowerCase().indexOf("controls")==-1&&(m+="&controls=0")),l.videoinline!==!0&&"true"!==l.videoinline&&1!==l.videoinline||(m+="&playsinline=1");var C=e(a.data("videostartat")),D=e(a.data("videoendat"));C!=-1&&(m=m+"&start="+C),D!=-1&&(m=m+"&end="+D);var E=m.split("origin="+v+"://"),F="";E.length>1?(F=E[0]+"origin="+v+"://",self.location.href.match(/www/gi)&&!E[1].match(/www/gi)&&(F+="www."),F+=E[1]):F=m;var G="true"===t||t===!0?"allowfullscreen":"";a.data("videomarkup",'<iframe style="visible:hidden" type="text/html" src="'+v+"://www.youtube.com/embed/"+n+"?"+F+'" '+G+' width="100%" height="100%" style="width:100%;height:100%"></iframe>');break;case"vimeo":v="https",a.data("videomarkup",'<iframe style="visible:hidden" src="'+v+"://player.vimeo.com/video/"+o+"?autoplay=0&"+m+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="100%;height:100%"></iframe>')}var H=c&&"on"==a.data("noposteronmobile");if(void 0!=l.videoposter&&l.videoposter.length>2&&!H)0==a.find(".tp-videoposter").length&&a.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+l.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==a.find("iframe").length&&a.find(".tp-videoposter").click(function(){if(b.playVideo(a,g),c){if(1==a.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}});else{if(c&&1==a.data("disablevideoonmobile"))return!1;0!=a.find("iframe").length||"youtube"!=x&&"vimeo"!=x||(a.append(a.data("videomarkup")),h(a,g,!1))}"none"!=a.data("dottedoverlay")&&void 0!=a.data("dottedoverlay")&&1!=a.find(".tp-dottedoverlay").length&&a.append('<div class="tp-dottedoverlay '+a.data("dottedoverlay")+'"></div>'),a.addClass("HasListener"),1==a.data("bgvideo")&&punchgs.TweenLite.set(a.find("video, iframe"),{autoAlpha:0})}});var f=function(a,b,c){a.addEventListener?a.addEventListener(b,c,{capture:!1,passive:!0}):a.attachEvent(b,c,{capture:!1,passive:!0})},g=function(a,b,c){var d={};return d.video=a,d.videotype=b,d.settings=c,d},h=function(a,d,f){var h=a.data(),k=a.find("iframe"),n="iframe"+Math.round(1e5*Math.random()+1),o=h.videoloop,p="loopandnoslidestop"!=o;if(o="loop"==o||"loopandnoslidestop"==o,1==a.data("forcecover")){a.removeClass("fullscreenvideo").addClass("coverscreenvideo");var q=a.data("aspectratio");void 0!=q&&q.split(":").length>1&&b.prepareCoveredVideo(q,d,a)}if(1==a.data("bgvideo")){var q=a.data("aspectratio");void 0!=q&&q.split(":").length>1&&b.prepareCoveredVideo(q,d,a)}if(k.attr("id",n),f&&a.data("startvideonow",!0),1!==a.data("videolistenerexist"))switch(h.videotype){case"youtube":var r=new YT.Player(n,{events:{onStateChange:function(c){var f=a.closest(".tp-simpleresponsive"),q=(h.videorate,a.data("videostart"),j());if(c.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==a.data("volume")||b.lastToggleState(a.data("videomutetoggledby"))||d.globalmute===!0?r.mute():(r.unMute(),r.setVolume(parseInt(a.data("volume"),0)||75)),d.videoplaying=!0,l(a,d),p?d.c.trigger("stoptimer"):d.videoplaying=!1,d.c.trigger("revolution.slide.onvideoplay",g(r,"youtube",a.data())),b.toggleState(h.videotoggledby);else{if(0==c.data&&o){var s=e(a.data("videostartat"));s!=-1&&r.seekTo(s),r.playVideo(),b.toggleState(h.videotoggledby)}!q&&(0==c.data||2==c.data)&&"on"==a.data("showcoveronpause")&&a.find(".tp-videoposter").length>0&&(punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),c.data!=-1&&3!=c.data&&(d.videoplaying=!1,d.tonpause=!1,m(a,d),f.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(r,"youtube",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(h.videotoggledby)),0==c.data&&1==a.data("nextslideatend")?(i(),a.data("nextslideatend-triggered",1),d.c.revnext(),m(a,d)):(m(a,d),d.videoplaying=!1,f.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(r,"youtube",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(h.videotoggledby))}},onReady:function(b){var d=h.videorate;a.data("videostart");if(a.addClass("rs-apiready"),void 0!=d&&b.target.setPlaybackRate(parseFloat(d)),a.find(".tp-videoposter").unbind("click"),a.find(".tp-videoposter").click(function(){c||r.playVideo()}),a.data("startvideonow")){h.player.playVideo();var g=e(a.data("videostartat"));g!=-1&&h.player.seekTo(g)}a.data("videolistenerexist",1)}}});a.data("player",r);break;case"vimeo":for(var w,s=k.attr("src"),t={},u=s,v=/([^&=]+)=([^&]*)/g;w=v.exec(u);)t[decodeURIComponent(w[1])]=decodeURIComponent(w[2]);s=void 0!=t.player_id?s.replace(t.player_id,n):s+"&player_id="+n;try{s=s.replace("api=0","api=1")}catch(a){}s+="&api=1",k.attr("src",s);var r=a.find("iframe")[0],y=(jQuery("#"+n),$f(n));y.addEvent("ready",function(){if(a.addClass("rs-apiready"),y.addEvent("play",function(c){a.data("nextslidecalled",0),punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),d.c.trigger("revolution.slide.onvideoplay",g(y,"vimeo",a.data())),d.videoplaying=!0,l(a,d),p?d.c.trigger("stoptimer"):d.videoplaying=!1,"mute"==a.data("volume")||b.lastToggleState(a.data("videomutetoggledby"))||d.globalmute===!0?y.api("setVolume","0"):y.api("setVolume",parseInt(a.data("volume"),0)/100||.75),b.toggleState(h.videotoggledby)}),y.addEvent("playProgress",function(b){var c=e(a.data("videoendat"));if(a.data("currenttime",b.seconds),0!=c&&Math.abs(c-b.seconds)<.3&&c>b.seconds&&1!=a.data("nextslidecalled"))if(o){y.api("play");var f=e(a.data("videostartat"));f!=-1&&y.api("seekTo",f)}else 1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),a.data("nextslidecalled",1),d.c.revnext()),y.api("pause")}),y.addEvent("finish",function(c){m(a,d),d.videoplaying=!1,d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(y,"vimeo",a.data())),1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),d.c.revnext()),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(h.videotoggledby)}),y.addEvent("pause",function(c){a.find(".tp-videoposter").length>0&&"on"==a.data("showcoveronpause")&&(punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),d.videoplaying=!1,d.tonpause=!1,m(a,d),d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(y,"vimeo",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(h.videotoggledby)}),a.find(".tp-videoposter").unbind("click"),a.find(".tp-videoposter").click(function(){if(!c)return y.api("play"),!1}),a.data("startvideonow")){y.api("play");var f=e(a.data("videostartat"));f!=-1&&y.api("seekTo",f)}a.data("videolistenerexist",1)})}else{var z=e(a.data("videostartat"));switch(h.videotype){case"youtube":f&&(h.player.playVideo(),z!=-1&&h.player.seekTo());break;case"vimeo":if(f){var y=$f(a.find("iframe").attr("id"));y.api("play"),z!=-1&&y.api("seekTo",z)}}}},i=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},j=function(){try{if(void 0!==window.fullScreen)return window.fullScreen;var a=5;return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(a=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<a}catch(a){}},k=function(a,d,h){if(c&&1==a.data("disablevideoonmobile"))return!1;var k=a.data(),n="html5"==k.audio?"audio":"video",o=a.find(n),p=o[0],q=o.parent(),r=k.videoloop,s="loopandnoslidestop"!=r;if(r="loop"==r||"loopandnoslidestop"==r,q.data("metaloaded",1),1!=a.data("bgvideo")||"none"!==k.videoloop&&k.videoloop!==!1||(s=!1),void 0==o.attr("control")&&(0!=a.find(".tp-video-play-button").length||c||a.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),a.find("video, .tp-poster, .tp-video-play-button").click(function(){a.hasClass("videoisplaying")?p.pause():p.play()})),1==a.data("forcecover")||a.hasClass("fullscreenvideo")||1==a.data("bgvideo"))if(1==a.data("forcecover")||1==a.data("bgvideo")){q.addClass("fullcoveredvideo");var t=a.data("aspectratio")||"4:3";b.prepareCoveredVideo(t,d,a)}else q.addClass("fullscreenvideo");var u=a.find(".tp-vid-play-pause")[0],v=a.find(".tp-vid-mute")[0],w=a.find(".tp-vid-full-screen")[0],x=a.find(".tp-seek-bar")[0],y=a.find(".tp-volume-bar")[0];void 0!=u&&f(u,"click",function(){1==p.paused?p.play():p.pause()}),void 0!=v&&f(v,"click",function(){0==p.muted?(p.muted=!0,v.innerHTML="Unmute"):(p.muted=!1,v.innerHTML="Mute")}),void 0!=w&&w&&f(w,"click",function(){p.requestFullscreen?p.requestFullscreen():p.mozRequestFullScreen?p.mozRequestFullScreen():p.webkitRequestFullscreen&&p.webkitRequestFullscreen()}),void 0!=x&&(f(x,"change",function(){var a=p.duration*(x.value/100);p.currentTime=a}),f(x,"mousedown",function(){a.addClass("seekbardragged"),p.pause()}),f(x,"mouseup",function(){a.removeClass("seekbardragged"),p.play()})),f(p,"canplaythrough",function(){b.preLoadAudioDone(a,d,"canplaythrough")}),f(p,"canplay",function(){b.preLoadAudioDone(a,d,"canplay")}),f(p,"progress",function(){b.preLoadAudioDone(a,d,"progress")}),f(p,"timeupdate",function(){var b=100/p.duration*p.currentTime,c=e(a.data("videoendat")),f=p.currentTime;if(void 0!=x&&(x.value=b),0!=c&&c!=-1&&Math.abs(c-f)<=.3&&c>f&&1!=a.data("nextslidecalled"))if(r){p.play();var g=e(a.data("videostartat"));g!=-1&&(p.currentTime=g)}else 1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),a.data("nextslidecalled",1),d.just_called_nextslide_at_htmltimer=!0,d.c.revnext(),setTimeout(function(){d.just_called_nextslide_at_htmltimer=!1},1e3)),p.pause()}),void 0!=y&&f(y,"change",function(){p.volume=y.value}),f(p,"play",function(){a.data("nextslidecalled",0);var c=a.data("volume");c=void 0!=c&&"mute"!=c?parseFloat(c)/100:c,d.globalmute===!0?p.muted=!0:p.muted=!1,c>1&&(c/=100),"mute"==c?p.muted=!0:void 0!=c&&(p.volume=c),a.addClass("videoisplaying");var e="html5"==k.audio?"audio":"video";l(a,d),s&&"audio"!=e?(d.videoplaying=!0,d.c.trigger("stoptimer"),d.c.trigger("revolution.slide.onvideoplay",g(p,"html5",k))):(d.videoplaying=!1,"audio"!=e&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(p,"html5",k))),punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find(e),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var f=a.find(".tp-vid-play-pause")[0],h=a.find(".tp-vid-mute")[0];void 0!=f&&(f.innerHTML="Pause"),void 0!=h&&p.muted&&(h.innerHTML="Unmute"),b.toggleState(k.videotoggledby)}),f(p,"pause",function(){var c="html5"==k.audio?"audio":"video",e=j();!e&&a.find(".tp-videoposter").length>0&&"on"==a.data("showcoveronpause")&&!a.hasClass("seekbardragged")&&(punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find(c),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),a.removeClass("videoisplaying"),d.videoplaying=!1,m(a,d),"audio"!=c&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(p,"html5",a.data()));var f=a.find(".tp-vid-play-pause")[0];void 0!=f&&(f.innerHTML="Play"),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(k.videotoggledby)}),f(p,"ended",function(){i(),m(a,d),d.videoplaying=!1,m(a,d),"audio"!=n&&d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",g(p,"html5",a.data())),a.data("nextslideatend")===!0&&p.currentTime>0&&(1==!d.just_called_nextslide_at_htmltimer&&(a.data("nextslideatend-triggered",1),d.c.revnext(),d.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){d.just_called_nextslide_at_htmltimer=!1},1500)),a.removeClass("videoisplaying")})},l=function(a,c){void 0==c.playingvideos&&(c.playingvideos=new Array),a.data("stopallvideos")&&void 0!=c.playingvideos&&c.playingvideos.length>0&&(c.lastplayedvideos=jQuery.extend(!0,[],c.playingvideos),jQuery.each(c.playingvideos,function(a,d){b.stopVideo(d,c)})),c.playingvideos.push(a),c.currentLayerVideoIsPlaying=a},m=function(a,b){void 0!=b.playingvideos&&jQuery.inArray(a,b.playingvideos)>=0&&b.playingvideos.splice(jQuery.inArray(a,b.playingvideos),1)}}(jQuery);