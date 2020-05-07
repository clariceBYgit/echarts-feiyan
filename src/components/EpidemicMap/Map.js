import React, { Component } from 'react'
// import echarts from 'echarts'



export default class Map extends Component {
    componentDidMount(){
        let  { provincesObj }  = this.props
        // console.log(this.props)
        function randomValue() {
            return Math.round(Math.random()*1000);
        }
        let dataList=[
            {name:"南海诸岛",value:0},
            {name: '北京', value: randomValue()},
            {name: '天津', value: randomValue()},
            {name: '上海', value: randomValue()},
            {name: '重庆', value: randomValue()},
            {name: '河北', value: randomValue()},
            {name: '河南', value: randomValue()},
            {name: '云南', value: randomValue()},
            {name: '辽宁', value: randomValue()},
            {name: '黑龙江', value: randomValue()},
            {name: '湖南', value: randomValue()},
            {name: '安徽', value: randomValue()},
            {name: '山东', value: randomValue()},
            {name: '新疆', value: randomValue()},
            {name: '江苏', value: randomValue()},
            {name: '浙江', value: randomValue()},
            {name: '江西', value: randomValue()},
            {name: '湖北', value: randomValue()},
            {name: '广西', value: randomValue()},
            {name: '甘肃', value: randomValue()},
            {name: '山西', value: randomValue()},
            {name: '内蒙古', value: randomValue()},
            {name: '陕西', value: randomValue()},
            {name: '吉林', value: randomValue()},
            {name: '福建', value: randomValue()},
            {name: '贵州', value: randomValue()},
            {name: '广东', value: randomValue()},
            {name: '青海', value: randomValue()},
            {name: '西藏', value: randomValue()},
            {name: '四川', value: randomValue()},
            {name: '宁夏', value: randomValue()},
            {name: '海南', value: randomValue()},
            {name: '台湾', value: randomValue()},
            {name: '香港', value: randomValue()},
            {name: '澳门', value: randomValue()}
        ]
        // 将实时数据的value值进行替换
        dataList.map((item,index)=>{
            // console.log(provincesObj[item.name])
            if(provincesObj[item.name]){
                item.value = provincesObj[item.name].confirm
            } else {
                item.value = 0
            }
            return item
        })
      
        // 由于在public的index.html中导入了echarts.mim.js 在window中，而在此文件中import导入了echarts的话， index.html中导入的China.js，没有对其进行加工   需要改写为 window.echarts
        var myChart = window.echarts.init(document.getElementById('map'));
     
        let option = {
            tooltip: {
                formatter:function(params,ticket, callback){
                    return params.seriesName+'<br />'+params.name+'：'+params.value
                }//数据格式化
            },
            visualMap: {
                min: 0,
                max: 2000,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],//取值范围的文字
                inRange: {
                    color: ['#f5deb3', '#880000']//取值范围的颜色
                },
                show:true//图注
            },
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom:1.23,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '确诊人数',
                    type: 'map',
                    geoIndex: 0,
                    data:dataList
                }
            ]
        };
        myChart.setOption(option)

    }
    render() {
        // console.log(this.props.provincesObj)
        return (
            <>
                <div id='map'></div>
            </>
        )
    }
}
