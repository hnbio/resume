

export default {
  name: "韩彪",
  phone: "18112891269",
  email: "hanbiao4079@qq.com",
  sex: "男",
  college: "蚌埠医学院",
  profession: "信息管理与信息系统",
  degree: "本科",
  graduation: "2017年7月",
  undergoing: [
    {
      school: '蚌埠医学院',
      start_time: "2013年9月",
      end_time: "2017年7月",
      profession: "信息管理与信息系统",
    }
  ],
  ability: [
    "1. 熟练掌握HTML、CSS、javascript,以及前端常用的工具。",
    "2. 熟练熟悉了解前端框架(angular,react,vue)并使用",
    "3. 了解大前端开发部署(react-native, electron, 小程序等)",
    "4. 了解nodejs, 常用数据库(mysql,mongodb)等",
  ],
  work_undergoing: [
    {
      company: "频率探索",
      time: "2021.10-2022.06",
      content: "参与负责ai设备卫士相关系统及工具开发工作"
    },
    {
      company: "壹零贰肆加信息技术有限公司",
      time: "2020.09-2021.10",
      content: "参与负责加拓宝客销平台部分功能模块开发维护"
    },
    {
      company: "常州深兰人工智能研究院",
      time: "2019.09-2020.09",
      content: "参与熊猫智行开发维护，负责广告运营, 智行小程序等系统开发开发"
    },
    {
      company: "创云一智科技有限公司",
      time: "2018.09-2019.09",
      content: "负责业财一体化管理平台前端开发维护上线"
    },
    {
      company: "艾特沃品牌策划",
      time: "2017.07-2018.09",
      content: "负责公司内部门户网站开发维护上线工作"
    },
  ],
  projects: [
    {
      source: "频率探索",
      title: "ai设备卫士",
      synopsis: "电机类设备故障监控检测管理系统及对应app开发",
      technology: "angular、tailwindcss、antd, react-native等",
      address: "http://freqx.com/",
      docmentUrl: "http://freqx.com/",
      time: "2021.10-2022.06",
      content: `
        独立负责项目整体开发维护, 及大部分代码重构工作。包含设备状态监控、传感器数据管理展示、报告、智慧大屏及用户权限管理等模块。
        并在职期间开发必要的通用业务组件, 指令、管道等、以满足产品快速迭代需求。并编写自动化node脚本处理常用的打包部署
      `
    },
    {
      source: "频率探索",
      title: "智能质检平台",
      synopsis: "基于electron的桌面版设备数据采集展示系统",
      time: "2022.02-04",
      technology: "vue3、element-ui、echarts、electron、nodejs、express、mongodb, mq等",
      content: `
        负责客户端项目开发,
        主要功能为数据采集、采集指令发送、完成后接收，并处理计算后的结果数据，得出设备运行可靠性结，保存记录并统计展示。
        功能模块包含用户、产品管理、模型管理，数据采集、统计大屏, 开始结束按钮监听、出结果后显示不同灯光等功能。
        通过快速开发迭代，以满足快速上线需要。
        `
        ,
    }
  ],
  projects1: [
    {
      source: "壹零贰肆加信息技术有限公司",
      title: "加拓宝客销平台, 企业微信h5, 基于uni-app的智能外呼h5等",
      synopsis: "基于react全家桶开发的客销平台(客户线索、crm等)",
      technology: "react、hooks、redux、antd, TypeScript等",
      time: "2020.10-2021.09",
      address: "http://www.jtbai.com/user/login",
      docmentUrl: "http://jtbai.com/hc/zh-CN/",
      content: `
        负责crm模块开发迭代,及邮件触达、消息管理等模块功能开发。
        独自负责企业微信端通过快速熟悉了解企业微信相关h5应用api快速开发可行性确定及相关准备工作并及时汇总需求进行相关业务开发上线。
        及基于uni-app的小程序转接外呼及拨号记录管理功能,
        在司期间积极推动前端项目组代码规范及review,
        前端自动化工具在前端项目中应用等`
    },
    {
      source: "常州深兰人工智能研究院",
      title: "熊猫智行平台、广告运营平台、平安智能猪只投保系统、教育系统、熊猫智行小程序等",
      synopsis: "熊猫智行项目及广告部门项目",
      technology: "react、antd, 微信小程序等",
      time: "2019.09-2020.10",
      content: `
        在职期间参与并负责熊猫智行管理端开发维护工作，
        结合项目需求及开发进度, 提取多种可重用组件及hooks。
        独自负责广告运营平台前端搭建开发部署相关工作, 主要包括素材管理及审核中心, 投放管理，系统管理,
        独自负责投保系统前端重构,后基于react+hooks快速完成重构并交付上线,
        主要功能是通过摄像头监控猪栏内猪只状态及远程投保监控,通过监控划分猪栏区域等功能。
        并参与教育web app端(套壳的安卓应用)开发及对应node转发服务开发, 及教师端和学生端的管理系统开发，
        实验室内部的教学直播系统, app端分为教师端和学生端。通过webRtc实现直播功能。
        独自负责小程序开发维护及对应后台管理功能开发。`,
    },
    {
      source: "创云一智科技有限公司",
      title: "业财一体化管理系统",
      synopsis: "基于vue全家桶, 搭建的业财一体化管理平台",
      technology: "vue2, element-ui",
      time: "2018.10-2019.09",
      content: `
        负责项目前端框架搭建及整体功能开发,
        主要功能是集团下属公司提交季度财务预算,
        然后分公司集团进行提交审核汇总展示。
        并结合其他资金申请审核批复功能等
      `,
    },
    {
      source: "艾特沃品牌策划",
      title: "各种基于wordpress的门户网站",
      synopsis: "独自负责基于wordpress博客系统开发门户网站",
      technology: "wordpress, 少量php模板语法, 及mysql数据库",
      time: "2017.07-2018.09",
      content: "独自网络部门门户网站制作并部署交付",
    },
  ],
}
