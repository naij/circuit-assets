KISSY.add("app/views/manage/assets/list",function(t,e,a,s,i,l,n,o,c){l.all;return function(t){return t.prototype.template='<div class="page-header clearfix"> <div class=title-bar> <h2 class=title>\u53d1\u5e03\u5217\u8868</h2> </div> </div> <div class="page-body table-container"> <table class="table pic-list" bx-name="tables" bx-tmpl="list" bx-datakey="list"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=180>\u53d1\u5e03\u65f6\u95f4</th> <th class=left width=120>\u5e94\u7528\u540d</th> <th class=left width=120>\u7248\u672c\u53f7</th> <th class=left width=120>\u53d1\u5e03\u7c7b\u578b</th> <th class=left width=80>\u72b6\u6001</th> <th class=center>\u64cd\u4f5c</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left>{{list_createdAt}}</td> <td class=left>{{appName}}</td> <td class=left>{{refName}}</td> <td class=left>{{list_type}}</td> <td class=left>{{{list_status}}}</td> <td class=center> <a href="/manage/assets/detail?id={{id}}" class=color-blue>\u67e5\u770b\u8be6\u60c5</a> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=6> \u6682\u65e0\u6570\u636e </td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_pagination bx-name="pagination" class=pagination bx-config="{count:{{totalCount}},index:{{pageNo}},size:{{pageSize}},sizes:[50],simplify:true,statistics:true,sizeChange:false,jump:false,goTo:false}"> </div> </div>',t}(e.extend({init:function(){},locationChange:function(){this.render()},render:function(){var e=this,s=e.location,i=t.clone(s.params),l=i.pageNo||1,n=i.pageSize||50;e.manage(a.fetchAll([{name:"assets_list",urlParams:{pageNo:l,pageSize:n}}],function(t,a){var s=a.get("data");e.setViewPagelet({list:s.list,pageNo:l,pageSize:n,totalCount:s.totalCount},function(){e.components()})}))},components:function(){var t=this,e=t.getManaged("pagelet"),a=e.getBrick("J_pagination");a&&a.on("gotoPage",function(e){t.navigate("pageNo="+e.index)})},renderer:{list:{createdAt:function(){return c(this.createdAt).format("YYYY-MM-DD HH:mm:ss")},type:function(){return/daily/.test(this.refName)?"\u65e5\u5e38":"\u6b63\u5f0f"},status:function(){switch(this.status){case 0:return'<span class="color-red">\u53d1\u5e03\u5931\u8d25</span>';case 1:return'<span class="color-yellow">\u53d1\u5e03\u4e2d</span>';case 2:return'<span class="color-green">\u53d1\u5e03\u6210\u529f</span>'}}}}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util","brix/gallery/calendar/index","app/libs/moment"]});