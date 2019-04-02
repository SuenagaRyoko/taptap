import React from 'react';
import { App } from './App';
import meat from '../img/meat.png';
import sweets from '../img/sweets.png';
import dress from '../img/dress.png';
import cosme from '../img/cosme.png';
import money from '../img/money.png';
import toy from '../img/toy.png';
import style from '../css/style.css';

//プレゼント
const giveData = [
  { 
    name: 'meat',
    img: meat,
    score: 15
  },
  {
    name: 'dress',
    img: dress,
    score: 30
  },
  {
    name: 'cosme',
    img: cosme,
    score: 20
  },
  {
    name: 'sweets',
    img: sweets,
    score: 25
  },
  {
    name: 'toy',
    img: toy,
    score: 20
  },
  {
    name: 'money',
    img: money,
    score: 500
  }
];

export class GiveItem extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      first: giveData[this.selectItem()],
      second: giveData[this.selectItem()],
      third: giveData[this.selectItem()],
      score: 0
    };
    props = {
      updateScore : App.updateScore
    }
    this.count = 0;
    this.changeItem = this.changeItem.bind(this);
  }

  //ボタンをランダムで選択
  selectItem () {
    let rand = Math.floor(Math.random() * 501);
    if (rand >= 0 && rand <= 100 ) {
      return 0;
    }else if (rand >= 101 && rand <= 200) {
      return 1;
    }else if (rand >= 201 && rand <= 300) {
      return 2;
    }else if (rand >= 301 && rand <= 400) {
      return 3;
    }else if (rand >= 401 && rand <= 500) {
      return 4;
    }else if (rand == 501) {
      return 5;
    }
  }

  //ボタン変更・ダブルクリックの防止
  changeItem(e){
    if(!this.count){
      ++this.count;
      this.setState({
      first: giveData[this.selectItem()],
      second: giveData[this.selectItem()],
      third: giveData[this.selectItem()],
    });
    this.props.updateScore(e);
      setTimeout(()=>{
        this.count = 0;
      },500);
    }else{
      e.preventDefault();
      this.count = 0;
    }
  }

  render(){
    return <div className={style.btn_area}>
      <div className={style.give_btn} data-score={this.state.first.score} data-name={this.state.first.name} onClick={this.changeItem}>
        <img src={this.state.first.img} />
      </div>
      <div className={style.give_btn} data-score={this.state.second.score} data-name={this.state.second.name} onClick={this.changeItem}>
        <img src={this.state.second.img} />
      </div>
      <div className={style.give_btn} data-score={this.state.third.score} data-name={this.state.third.name} onClick={this.changeItem}>
        <img src={this.state.third.img} />
      </div>
      <div className={style.infoTxt}>プレゼントをあげて機嫌を直してあげてね</div>
    </div>;
  }
}

