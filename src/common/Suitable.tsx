import React from "react";
import './Suitable.css';

export interface ISuitableProps {
  widthInPx: number;
  heightInPx: number;
}

export class Suitable extends React.Component<ISuitableProps> {

  containerBox = React.createRef<HTMLDivElement>();

  constructor(props: ISuitableProps) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.warn(this.trySuit());
  }

  componentDidUpdate() {
    console.warn(this.trySuit());
  }

  componentWillUnmount() {
  }

  trySuit(): boolean {
    let l = 1, r = 100;
    const box = this.containerBox.current;
    if (!box) {
      return false;
    }
    const computed = getComputedStyle(box);
    if (computed.overflow !== 'hidden') {
      box.style.overflow = 'hidden';
    }
    if (computed.overflowWrap !== 'break-word') {
      box.style.overflowWrap = 'break-word';
    }
    while (l + 0.01 < r) {
      const mid = (l + r) / 2;
      box.style.fontSize = mid + 'px'
      console.log(l, r, mid, box.offsetHeight, box.scrollHeight, box.offsetWidth, box.scrollWidth);
      if (box.offsetHeight < box.scrollHeight) {
        r = mid;
      } else {
        l = mid;
      }
    }
    box.style.fontSize = l + 'px'
    return true;
  }

  render() {
    return (
      <div ref={this.containerBox} className="suitable-container" style={{
        width: this.props.widthInPx + 'px',
        height: this.props.heightInPx + 'px'
      }}>{this.props.children}</div>
    )
  }
}