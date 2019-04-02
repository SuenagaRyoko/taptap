import React from 'react';
import { GiveItem } from './GiveItem';
import { Girl } from './Girl';
import { End } from './End';
import style from '../css/style.css';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      maxStatus: 300,
      girlLevel: 0,
      endFlg: false
    };
    this.updateScore = this.updateScore.bind(this);
    this.girlMaxLevel = 2;
  }

  //プレゼントスコアを取得しステータスバーへ反映、レベル管理、エンドフラグの管理
  updateScore(e){
    let getScore = Number(e.currentTarget.dataset.score);
    this.setState({
      status: this.state.status + getScore
    });
    if(this.state.girlLevel == this.girlMaxLevel && this.state.status >= this.state.maxStatus){
      this.setState({
        endFlg: true
      });
    }
    if(this.state.status >= this.state.maxStatus){
      this.setState({
        status: 0,
        maxStatus: this.state.maxStatus + 100,
        girlLevel: this.state.girlLevel + 1
      });
    }
  }

  render(){
    return <div className="screen">
      <End endFlg={this.state.endFlg} />
      <div className={style.status}>
        <span className={style.girlLevel}>Lv.{this.state.girlLevel + 1}</span>
        <progress className={style.progressbar} value={this.state.status} max={this.state.maxStatus}></progress>
      </div>
      <Girl girlLevel={this.state.girlLevel} />
      <GiveItem updateScore={this.updateScore} />
    </div>;
  }
}
