<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="order">
                <el-tabs type="border-card" @tab-click="tabclick">
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border show-summary style="width:100%" height="500">
                            <el-table-column prop="goodsName" label="商品" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="count" label="数量" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="price" label="价格" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column label="操作" width="100" header-align="center" align="center">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="btns">
                            <el-button type="success" round @click="checkout">下单</el-button>
                            <el-button type="danger" round @click="delAllGoods">删除</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        <el-table :data="takeoutData" border show-summary style="width:100%" height="500">
                            <el-table-column prop="goodsName" label="商品" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="count" label="数量" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="price" label="价格" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column label="操作" width="100" header-align="center" align="center">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="btns">
                            <el-button type="success" round @click="checkout">下单</el-button>
                            <el-button type="danger" round @click="delAllGoods">删除</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="often-goods">
                    <div class="title">热销商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-for="oGoods in oftenGoods" @click="addOrderList(oGoods)">
                                <span>{{oGoods.goodsName}}</span>
                                <span class="o-price">￥{{oGoods.price}}元</span>
                            </li>         
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs type="border-card" height="500">
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            小食
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            饮料
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            套餐
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
    
<script>
export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      takeoutData:[],
      tab:1,
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      type0Goods: [
        {
          goodsId: 1,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "香脆鸡柳",
          price: 17
        }
      ]
    };
  },
  mounted: function() {
    let windowH = document.body.clientHeight;
    document.getElementsByClassName("order")[0].style.height = windowH + "px";
  },
  methods:{
      addOrderList(goods){
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<(this.tab==1?this.tableData.length:this.takeoutData.length);i++){
                //console.log(this.tableData[i].goodsId);
                if((this.tab==1?this.tableData[i].goodsId:this.takeoutData[i].goodsId)==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = (this.tab==1?this.tableData:this.takeoutData).filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 arr[0].price+=goods.price;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                (this.tab==1?this.tableData:this.takeoutData).push(newGoods);
            }         
      },
      delOrderList(goods){
          console.log(this.tab+"---"+this.tableData.length);
          this.tab==1?this.tableData = (this.tab==1?this.tableData:this.takeoutData).filter(o=>o.goodsId!=goods.goodsId):this.takeoutData = (this.tab==1?this.tableData:this.takeoutData).filter(o=>o.goodsId!=goods.goodsId);
      },
      delAllGoods(){
          this.tab==1?this.tableData=[]:this.takeoutData = [];
      },
      checkout() {
        if ((this.tab==1?this.tableData:this.takeoutData).length!=0) {
            this.tab==1?this.tableData = []:this.takeoutData = [];
            this.$message({
                message: '结账成功，感谢你又为店里出了一份力!',
                type: 'success'
            });
        }else{
            this.$message.error('不能空结。老板了解你急切的心情！');
        }
        },
      tabclick(target){
          if(target.label==="点餐"){
              this.tab=1;
          }else{
              this.tab=2;
          }
          console.log(this.tab);
      }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.btns {
  font-size: 30px;
  text-align: center;
  margin: 20px auto;
}
.order {
  border-right: 1px solid #d7dde4;
}
.pos {
  color: #42b983;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList {
  padding-left: 40px;
  padding-bottom: 1000px;
}
.cookList li {
  list-style: none;
  width: 20%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 7px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>