<template>
    <div class="fav">
        <el-row>
            <el-col :span="7" class="favorite">
                <el-tabs v-model="editableTabsValue" editable @edit="handleTabsEdit">
                    <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
                        <el-table v-bind:data="favData[favIndex-1]" border style="width:100%" height="500">
                            <el-table-column prop="goodsName" label="商品" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="count" label="数量" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column prop="price" label="价格" width="60" header-align="center" align="center"></el-table-column>
                            <el-table-column label="操作" width="100" header-align="center" align="center">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div style="color:#1d8ce0;margin:10px 0 10px 0;">自定义你喜欢的套餐</div>
                <div class="goods-type">
                    <el-tabs type="border-card" height="500">
                        <el-tab-pane label="汉堡">
                            <ul class='cookList'>
                                <li v-for="goods in type0Goods">
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
      favIndex:1,
      editableTabsValue: "2",
      favData:[[]],
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
      ],
      editableTabs: [],
      tabIndex: 0
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "自定义套餐"+this.tabIndex,
          name: newTabName,
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  },
  mounted: function() {
    let windowH = document.body.clientHeight;
    document.getElementsByClassName("favorite")[0].style.height = windowH + "px";
  }
};
</script>
<style scoped>
.favorite{
    border-right: 1px solid #d7dde4;
    padding: 5px;
}
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
.goods-type{
    clear: both;
}
.cookList{
    padding-left: 40px;
    padding-bottom: 1000px
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