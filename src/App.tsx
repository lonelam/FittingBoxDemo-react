import React from 'react';
import './App.css';
import { Suitable } from './common/Suitable';

interface IAppState {
  contentText: string;
  width: number;
  height: number;
}

class App extends React.Component<{}, IAppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      contentText: '鲁镇的酒店的格局，是和别处不同的：都是当街一个曲尺形的大柜台，柜里面预备着热水，可以随时温酒。做工的人，傍午傍晚散了工，每每花四文铜钱，买一碗酒，——这是二十多年前的事，现在每碗要涨到十文，——靠柜外站着，热热的喝了休息；倘肯多花一文，便可以买一碟盐煮笋，或者茴香豆，做下酒物了，如果出到十几文，那就能买一样荤菜，但这些顾客，多是短衣帮，大抵没有这样阔绰。只有穿长衫的，才踱进店面隔壁的房子里，要酒要菜，慢慢地坐喝。',
      width: 100,
      height: 200,
    }
  }

  onTextAreaChange = ($event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target: HTMLTextAreaElement = $event.target;
    this.setState({
      contentText: target.value
    });
  }

  onWidthChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    const target = $event.target;
    this.setState({
      width: parseFloat(target.value)
    });
  }

  onHeightChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      height: parseFloat($event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Suitable heightInPx={this.state.height} widthInPx={this.state.width}>{this.state.contentText}</Suitable>
        </div>
        <div>
          <textarea onChange={this.onTextAreaChange} value={this.state.contentText}></textarea>
        </div>
        <div>
          <label htmlFor="width">width</label><input type="range" id="width" min="100" max="1000" value={this.state.width} onChange={this.onWidthChange}></input>
          <label htmlFor="height">height</label><input type="range" id="height" min="100" max="1000" value={this.state.height} onChange={this.onHeightChange}></input>
        </div>
      </div>
    );
  }
}

export default App;
