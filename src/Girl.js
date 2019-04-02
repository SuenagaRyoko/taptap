import React from 'react';
import { App } from './App';
import style from '../css/style.css';
import girl from '../img/alice.gif';

//女の子の台詞
const feeling = [
  '・・・・・・・・',
  '貢ぎすぎじゃない？',
  'ありがと',
  'だいすき！'
];

export class Girl extends React.Component{

  constructor (props){
    super(props);
    props = {
      girlLevel : App.girlLevel
    }
  }

  render(){
    return <div className={style.girl}>
      <div>
        <div className={style.girlStateArea}>
        <span className={style.girlState}>{feeling[this.props.girlLevel]}</span></div>
        <img src={girl} alt=""/>
      </div>
    </div>;
  }
}
