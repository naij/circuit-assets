KISSY.add("app/views/header",function(e,a,t){var l=t.all;return function(e){return e.prototype.template='<div class=header> <h1 class=title><a href="/">Naij\'s Blog</a></h1> <ul class="site-nav clearfix"> <li><a href="/pages/article/list?type=f2e" selectValue=f2e>F2E</a></li> <li><a href="/pages/article/list?type=discovery" selectValue=discovery>\u53d1\u73b0</a></li> <li><a href="/pages/article/list?type=life" selectValue=life>\u751f\u6d3b</a></li> <li><a href="/pages/about/index">\u5173\u4e8e</a></li> <li><a href="/pages/tags/list">\u6807\u7b7e</a></li> <li><a href="/pages/archive/list">\u5f52\u6863</a></li> </ul> </div>',e}(a.extend({locationChange:function(){this.render()},render:function(){function e(){var e=l(".site-nav li");if(!i)return e[0].addClass("selected");var a=r[i];e.each(function(t){var l=t.one("a").attr("href"),r=t.one("a").attr("selectValue");return e.removeClass("selected"),l==i?(t.addClass("selected"),!1):-1!=l.indexOf(i)&&a&&a.param&&s[a.param]==r?(t.addClass("selected"),!1):a&&a.path&&-1!=l.indexOf(a.path)&&a&&a.param&&s[a.param]==r?(t.addClass("selected"),!1):void 0})}var a=this,t=a.location,i=t.pathname,s=t.params,r={"/pages/article/list":{param:"type"},"/pages/article/detail":{path:"/pages/article/list",param:"type"}};a.setViewPagelet({},function(){e()},function(){e()})}}))},{requires:["mxext/view","node","app/models/modelmanager"]});