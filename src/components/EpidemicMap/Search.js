import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            result: null
        }
    }
// 封装查询事件  按要求执行enter键与搜索按钮的查询
    searchEvent = (x) => {
        if(this.props.provincesObj[x]){ //若搜索到该省份 显示具体的情况
            this.setState({
                result : (
                    <div>
                        <div>确诊人数：{this.props.provincesObj[x].confirm}</div>
                        <div>康复人数：{this.props.provincesObj[x].heal}</div>
                        <div>死亡人数：{this.props.provincesObj[x].dead}</div>
                    </div>
                )
            })
        } else {//若无提示信息
            this.setState({
                result :<h2>输入错误：不是省份，请输入正确的省份</h2>
            })
        }
    }
    
    // 根据按键是否是enter  后执行查询操作
    searchKeyEvent = (e) => { 
        if(e.keyCode === 13){ //当keycode为13enter键时，执行查询
            // console.log(e.target.value)
            /*if(this.props.provincesObj[e.target.value]){
                this.setState({
                    result : (
                        <div>
                            <div>确诊人数：{this.props.provincesObj[e.target.value].confirm}</div>
                            <div>康复人数：{this.props.provincesObj[e.target.value].heal}</div>
                            <div>死亡人数：{this.props.provincesObj[e.target.value].dead}</div>
                        </div>
                    )
                })
            } else {
                this.setState({
                    result :<h2>输入错误：不是省份</h2>
                })
            }*/
            this.searchEvent(e.target.value)
        } 
    }

    
    // 点击搜索按钮  后执行查询操作
    searchClickEvent = () =>{
        // console.log(this.state.inputValue)
       /* if(this.props.provincesObj[this.state.inputValue]){
            this.setState({
                result : (
                    <div>
                        <div>确诊人数：{this.props.provincesObj[this.state.inputValue].confirm}</div>
                        <div>康复人数：{this.props.provincesObj[this.state.inputValue].heal}</div>
                        <div>死亡人数：{this.props.provincesObj[this.state.inputValue].dead}</div>
                    </div>
                )
            })
        } else {
            this.setState({
                result :<h2>输入错误：不是省份</h2>
            })
        }*/
        this.searchEvent(this.state.inputValue)
    }

    // 根据输入的改变input的value值
    changeInputVal = (e) => {
        this.setState({
            inputValue : e.target.value
        })

    } 


    render() {
        return (
            <div>
                查询：<input 
                    onKeyDown={this.searchKeyEvent}
                    value={this.state.inputValue}
                    onChange={this.changeInputVal} 
                    type='text' 
                    placeholder='请输入要查询的省份'
                 />
                <button onClick={this.searchClickEvent} type="">搜索</button>
                <h3>查询结果：</h3>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}
