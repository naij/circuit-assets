KISSY.add("app/views/default",function(i,a,e,n,t,o,m){t.all;return function(i){return i.prototype.template='<vframe mx-view="app/views/sidenav"></vframe> <div class=content> <vframe id=magix_vf_main> <div class=block-loading></div> </vframe> </div>',i}(a.extend({init:function(){var i=this;i.observeLocation({pathname:!0})},render:function(){var i=this;i.setViewPagelet({},function(){i.mountMainFrame(),i.animateLoading()})},mountMainFrame:function(){var a=this,n=a.location,t=n.pathname,o=e.get("magix_vf_main");if(o){if("/"==t)var m="app/views/manage/index";else{var r=t.split("/");r.shift();var v=r.shift()||"home",s=r.join("/")||"index";i.endsWith(s,"/")&&(s+="index");var m="app/views/"+v+"/"+s}o.mountView(m)}},locationChange:function(){this.mountMainFrame(),this.animateLoading(),m.hideDialog(),m.hideToolTip()}}))},{requires:["mxext/view","magix/vom","ua","node","magix/router","app/util/util"]});