import React from 'react';
import { App } from './App';
import style from '../css/style.css';
import crown from '../img/crown.png'

export class End extends React.Component{
  constructor (props){
    super(props);
    props = {
      endFlg : App.endFlg
    };
    this.state = {
      endTxt : false,
      endStyle : style.endHide
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps.endFlg) {
      this.setState({
        endTxt : 'END',
        endStyle : style.endShow
      });
    }
  }
  shouldComponentUpdate(nextProps,nextState) {
    if (!nextState.endTxt) {
      return false;
    }else{
      return true;
    }
  }

  render(){
    return <div className={this.state.endStyle}>
      <span className={style.endTxtWrap}>
        {this.state.endTxt}
        <img src={crown} />
      </span>
    </div>;
  }
}