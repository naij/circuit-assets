KISSY.add("app/views/manage/article/list",function(t,e,a,s,l,i,n,d){var o=i.all;return function(t){return t.prototype.template='<div class="page-header clearfix"> <div class=title-bar> <h2 class=title>\u6587\u7ae0\u5217\u8868</h2> </div> </div> <div class="page-body table-container"> <div class="toolbar clearfix"> <div bx-name="dropdown" style="width:150px;" class=dropdown hidefocus=true id=J_type_dropdown> {{#typeList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value="{{typeId}}">{{typeName}}</span> <i class="iconfont icon-arrow-down">&#459</i> </span> {{/selected}} {{/typeList}} <ul class=dropdown-list> {{#typeList}} <li class="dropdown-item {{#selected}}dropdown-itemselected{{/selected}}"><span value="{{typeId}}">{{typeName}}</span><i class="iconfont icon-ok">&#126</i></li> {{/typeList}} </ul> </div> <a href="/manage/article/add" class="btn btn-xsmall">\u65b0\u589e\u6587\u7ae0</a> </div> <table class=table bx-name="tables" bx-tmpl="list" bx-datakey="list"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>\u6587\u7ae0\u540d\u79f0</th> <th class=left width=150>\u53d1\u5e03\u65f6\u95f4</th> <th class=left width=120>\u53d1\u5e03\u72b6\u6001</th> <th class=center width=100>\u64cd\u4f5c</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left>{{title}}</td> <td class=left>{{list_createdAt}}</td> <td class=left>{{{list_status}}}</td> <td class=center> <a href="/manage/article/edit?id={{id}}" class=color-blue>\u7f16\u8f91</a> <a href="#" mx-click="del{id:{{id}}}" class=color-blue>\u5220\u9664</a> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=4> \u6682\u65e0\u6570\u636e </td> </tr> {{/list}} </tbody> </table> </div>',t}(e.extend({locationChange:function(){this.render()},render:function(){var e=this,s=e.location,l=s.params,i=l.typeId||"f2e",n=[{typeId:"f2e",typeName:"f2e"},{typeId:"discovery",typeName:"discovery"},{typeId:"life",typeName:"life"}];t.each(n,function(t){return t.typeId==i?(t.selected=!0,!1):void 0}),e.manage(a.fetchAll([{name:"article_full",urlParams:{type:i}}],function(t,a){var s=a.get("data");e.setViewPagelet({list:s,typeList:n},function(){e.components()})}))},components:function(){var t=this,e=t.getManaged("pagelet"),a=e.getBrick("J_type_dropdown");a.on("selected",function(e){t.navigate("typeId="+e.value)})},"del<click>":function(t){t.halt();var e=this,s=o("#"+t.currentId).parent("tr").offset().top,l=n.getDefaultDialogConfig({width:400,top:s}),i="app/views/common/confirm",d={confirmFn:function(){e.manage(a.fetchAll([{name:"article_remove",postParams:{id:t.params.id}}],function(){n.hideDialog(),e.render()}))},cancelFn:function(){n.hideDialog()},confirmTitle:"\u5220\u9664\u6587\u7ae0",confirmContent:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u7bc7\u6587\u7ae0\uff1f"};n.showDialog(l,i,d)},renderer:{list:{createdAt:function(t){return d(t.createdAt).format("YYYY-MM-DD HH:MM")},status:function(){switch(this.status){case 0:return'<span class="color-orange">\u8349\u7a3f</span>';case 1:return'<span class="color-green">\u6b63\u5f0f</span>';case 2:return'<span class="color-red">\u5df2\u5220\u9664</span>'}}}}}))},{requires:["mxext/view","app/models/modelmanager","magix/vom","magix/router","node","app/util/util","app/libs/moment"]});