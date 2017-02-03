KISSY.add("app/models/modelmanager", function (S, BaseManager, BaseModel) {
  var Manager = BaseManager.create(BaseModel);

  Manager.registerModels([
    // 登录
    {
      name: 'login',
      url: '/api/user/login.json',
      options: {
        type: 'post'
      }
    },
    // 登出
    {
      name: 'logout',
      url: '/api/user/logout.json'
    }
  ])

  Manager.registerModels([
    // 标签列表
    {
      name: 'tag_list',
      url: '/api/blog/tag/list.json'
    },
    // 文章详情
    {
      name: 'article_detail',
      url: '/api/blog/article/detail.json'
    },
    // 文章列表
    {
      name: 'article_full',
      url: '/api/blog/article/full.json'
    },
    // 文章添加
    {
      name: 'article_create',
      url: '/api/blog/article/create.json',
      options: {
        type: 'post'
      }
    },
    // 文章编辑
    {
      name: 'article_update',
      url: '/api/blog/article/update.json',
      options: {
        type: 'post'
      }
    },
    // 文章删除
    {
      name: 'article_remove',
      url: '/api/blog/article/remove.json',
      options: {
        type: 'post'
      }
    },
    // 图片列表
    {
      name: 'picture_list',
      url: '/api/tool/pic/list.json'
    },
    // 爬虫列表
    {
      name: 'spider_record_list',
      url: '/api/tool/spider/list.json'
    },
    // 二维码
    {
      name: 'tool_qr',
      url: '/api/tool/qr.json',
      options: {
        type: 'post'
      }
    }
  ]);
  return Manager;
}, {
  requires: [
    "mxext/mmanager",
    "app/models/basemodel"
  ]
});