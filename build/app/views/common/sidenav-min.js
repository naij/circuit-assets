KISSY.add("app/views/common/sidenav",function(a,e,t){var n=t.all,i={"/manage/article/list":["/","/manage/article/add","/manage/article/edit"],"/manage/picture/list":["/manage/picture/add"]};return function(a){return a.prototype.template='<div class=side-nav> <h1 class=title><a href="/"><span class=circuitfont>&#xe60e;</span>Circuit</a></h1> <dl class=nav> <dt>blog</dt> <dd><a href="/manage/article/list">\u6587\u7ae0\u7ba1\u7406</a></dd> <dt>tool</dt> <dd><a href="/manage/picture/list">\u56fe\u7247\u7ba1\u7406</a></dd> </dl> </div>',a}(e.extend({locationChange:function(){this.render()},render:function(){var a=this;a.setViewPagelet({},function(){a.updateNav()},function(){a.updateNav()})},updateNav:function(){var e=this,t=e.location,d=t.pathname,r=(t.params,n(".side-nav .nav"));a.each(i,function(e,t){a.inArray(d,e)&&(d=t)}),r.all("a").each(function(a){a.attr("href")==d?a.addClass("active"):a.removeClass("active")})}}))},{requires:["mxext/view","node","app/models/modelmanager"]});