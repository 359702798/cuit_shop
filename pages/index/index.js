// 引入发送请求的 方法
import { request} from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList:[],

    // 导航 数组
    catesList: [],

    //楼层  数组
    floorList:[]
    
  },
  //页面开始加载 就会触发
  //options(Object)
  onLoad: function(options) {
    // 1 发送异步请求获取轮播图数据 优化的手段可以通过es6的 promise来解决这个问题
  
  // wx.request({
  //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
  //   method: 'GET',
  //   dataType: 'json',
  //   responseType: 'text',
  //   success: (result) => {
  //     this.setData({
  //       swiperList:result.data.message
  //     }

  //     )
  //   }
    
  // });
 
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  
  //获取轮播图数据
  getSwiperList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
  
      })
      .then(result =>{
        this.setData({
          swiperList:result.data.message
        })
      })
   
  },
   //获取 分类导航数据
   getCateList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
  
      })
      .then(result =>{
        this.setData({
         catesList: result.data.message
        })
      })
   
  },

   //获取 楼层数据
   getFloorList(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
  
      })
      .then(result =>{
        this.setData({
          floorList: result.data.message
        })
      })
   
  },
})
  