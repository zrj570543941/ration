module.exports = {

  // the name of the controller, 大写开头表示是用来serve pages的
  friendlyName: 'View homepage or redirect',


  description: '',


  // 定义当前controller可能会跳到哪些路由下，具体怎么跳由下面的fn控制
  exits: {
    success: {
      statusCode: 200,
      description: '',
      viewTemplatePath: 'pages/homepage'
    },
    redirect: {
      responseType: 'redirect',
      description: ''
    },
  },

  // 处理controller具体逻辑的地方
  fn: async function (inputs, exits) {

    if (this.req.me) {
      throw {redirect:'/welcome'};
    }

    return exits.success();

  }


};
