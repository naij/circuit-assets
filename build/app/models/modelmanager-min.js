KISSY.add("app/models/modelmanager",function(e,o,t){var l=o.create(t);return l.registerModels([{name:"login",url:"/api/user/login.json",options:{type:"post"}},{name:"logout",url:"/api/user/logout.json"}]),l.registerModels([{name:"tag_list",url:"/api/blog/tag/list.json"},{name:"article_detail",url:"/api/blog/article/detail.json"},{name:"article_actived_list",url:"/api/blog/article/actived_list.json"},{name:"article_removed_list",url:"/api/blog/article/removed_list.json"},{name:"article_create",url:"/api/blog/article/create.json",options:{type:"post"}},{name:"article_update",url:"/api/blog/article/update.json",options:{type:"post"}},{name:"article_remove",url:"/api/blog/article/remove.json",options:{type:"post"}},{name:"article_remove_complete",url:"/api/blog/article/remove_complete.json",options:{type:"post"}},{name:"picture_list",url:"/api/tool/pic/list.json"},{name:"spider_record_list",url:"/api/tool/spider/list.json"},{name:"tool_qr",url:"/api/tool/qr.json",options:{type:"post"}}]),l},{requires:["mxext/mmanager","app/models/basemodel"]});