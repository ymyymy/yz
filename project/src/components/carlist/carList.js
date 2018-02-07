import React, {Component} from 'react'
import FootListComponent from '../../commonComponents/footList/footList'
import HeadSearchComponent from '../../commonComponents/headSearch/headSearch'

import CarListmainComponent from '../../commonComponents/carListmain/carListmain.js'



import CarremenComponent from './carremen.js'
import './carList.scss'
export default class CarListComponent extends Component{
     componentWillMount(){
       console.log(666)
       
        
     


    }
      state={
        switch:0
      }
     
      changeDisplay(){
          
             if(this.state.switch==0){
                this.setState({ switch:1});
            }else{
                this.setState({ switch:0});
            } 
        }

    render(){
      let style;
      if(this.state.switch==0){
        style={
          display:"none"
        }

      } else{style={
          display:"block"
        }
     } 
        return (
            <div className="carList"> 

                <header className="head_Search">
                    <HeadSearchComponent/>
                </header>
                <div className="shuaixuan">
                    <ul className="ula">
                        <li className="zhineng" onClick={this.changeDisplay.bind(this)}>智能排序▼</li>
                        <li className="pai">品牌▼</li>
                        <li className="jiage">价格▼</li>
                        <li className="baomc">保卖车▼</li>
              
                    </ul>
                    <ul className="ulb" style={style}>
                        <li>智能排序</li>
                        <li>最新上架</li>
                        <li>价格最低</li>
                        <li>价格最高</li>
                        <li>车龄最短</li>
                        <li>里程最少</li>
                    </ul>
                     <div className="ulc">
                       <div className="jiaqiana pa aa">不限</div>
                       <div className="jiaqianb pa bb">3万以下</div>
                       <div className="jiaqianc pa cc">3-5万</div>
                       <div className="jiaqiand pb aa">5-7万</div>
                       <div className="jiaqiane pb bb">7-9万</div>
                       <div className="jiaqianf pb cc">9-12万</div>
                       <div className="jiaqiang pc aa">12-16万</div>
                       <div className="jiaqianh pc bb">16-20万</div>
                       <div className="jiaqiani pc cc">20万以上</div>
                     </div>

                </div>
                <div className="main">
                  <CarListmainComponent/>


                   
                </div>
                <footer className="foot_List">
                    <FootListComponent/>
                </footer>
               
               
          </div>
        )
    }
}