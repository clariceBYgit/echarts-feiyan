import React, { Component } from 'react'

// 引入地图组件
import Map from './Map'
// 引入搜索组件
import Search from './Search'

// 全国肺炎疫情的数据  json数据的文件需要放到src文件夹下
import json from '../../feiyan.json'
import './style.css'
// console.log(json)

// 省份列表对象=>形式如下 (循环统计)
let provincesObj = {
    /*'广东省':{
        confirm:0,   //确诊
        suspect:0,   //疑似
        heal:0,  //康复
        dead:0   //死亡
    }*/
}
json.data.list.forEach((ele,index)=>{
    // 判断之前是否存在数值 不存在就进行数据的初始化
    if(provincesObj[ele.province] === undefined){
        provincesObj[ele.province] = {
            confirm:0,   //确诊
            heal:0,  //康复
            dead:0 
        }

    }
    // 判断元素是否为null 若是则赋值为0
    ele.confirm = ele.confirm ? ele.confirm : 0;
    ele.heal = ele.heal ? ele.heal : 0; 
    ele.dead = ele.dead ? ele.dead : 0; 
    provincesObj[ele.province] = {
        // 当前的统计结果加上之前的
        confirm: provincesObj[ele.province].confirm+ele.confirm,
        heal: provincesObj[ele.province].heal+ele.heal,
        dead: provincesObj[ele.province].dead+ele.dead
    }
})

// 使用for in 将其变为数组  map需要数组
let provincesList = []
// provincesList.push(provincesObj)  //错误处理
for( const key in provincesObj) {
    provincesObj[key].province = key
    provincesList.push(provincesObj[key])
}
// 排序  从大到小 
 provincesList.sort((a,b)=>{
    if (a.confirm < b.confirm) {
        return 1
    } else {
    return -1
    }

})
// console.log(provincesList)



export default class EpidemicMap extends Component {
   
    render() {
        return (
            <>
              <h1>中国肺炎疫情图</h1>
                <Map provincesObj={provincesObj} />
                <Search provincesObj={provincesObj} />
            
              <ul>
                  <li>
                      <span>地区</span>
                      <span>确诊</span>
                      <span>康复</span>
                      <span>死亡</span>
                  </li>
                    {
                        provincesList.map((item,index) => {
                            return (
                                <li key={index}>
                                    <span>{item.province}</span>
                                    <span>{item.confirm}</span>
                                    <span>{item.heal}</span>
                                    <span>{item.dead}</span>
                                </li>
                            )
                        })
                    }
              </ul>
            </>
        )
    }
}
