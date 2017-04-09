import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const list = [
              {id:1,name:'航班',content:'航班查询。示例：“明天下午三点半从深圳飞上海，有什么合适的航班？”',show:true},
              {id:2,name:'天气',content:'获取天气预报。示例：“明天上海的气温如何？”',show:true},
              {id:3,name:'行程 ',content:'制定个人行程提醒。示例：“明天下午三点半到长泰广场陪我妈妈一起吃饭，提前半个小时提醒我”',show:true},
              {id:4,name:'值机',content:'查询航空公司值机信息。示例：“南航网上值机提前多久”',show:true},
              {id:5,name:'笑话',content:'阅读笑话段子。示例：“给我讲个冷笑话”',show:true},
              {id:6,name:'媒体',content:'搜索并开始播放有声媒体。示例：“我现在想听蕾哈娜”',show:true},
              {id:7,name:'黄历',content:'阴阳历日期转换。 示例：“我想知道后天的黄历”',show:true},
              {id:8,name:'图片',content:'各类图片欣赏。示例：“给我发张图片！”',show:true},
              {id:9,name:'星座',content:'查询时间和日期。 示例：“射手座今天的运势怎么样”',show:true},
              {id:10,name:'预订',content:'预定餐厅和酒店。示例：“我想在7月25日预订伦敦的希尔顿酒店”',show:true},
              {id:11,name:'地图',content:'搜索地图，导航。示例：“附近的披萨店”，“去旧金山”',show:true},
              {id:12,name:'聊天',content:'人机对话聊天。示例：“你好！”，“你在做什么？”，“干得好！”，等等。',show:true},
              {id:13,name:'新闻',content:'新闻，最新消息。示例：“看新闻”，“关于特斯拉的新闻”',show:true},
              {id:14,name:'计算器',content:'“1米单位转换英尺”，“一 加三”',show:true},
            ]

export default new Vuex.Store({
  state: {
    sure:false,
    choseList:[],
    severList:list
  },
  mutations: {
    changeSure(state){
      state.sure = true;
    },
    //选中的类型
    changeList(state,val){
      state.choseList = val;
    },
    //severList 显示隐藏
    falseSeverList(state,index){
      state.severList[index].show = false;
    },
    //severList 显示隐藏
    trueSeverList(state,index){
      state.severList.forEach(item => {
        if(item.id === index) {
          item.show = true;
        }
      })
    }
  },
  actions: {}
})
