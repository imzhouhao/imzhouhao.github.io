import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameBox from './GameBox.js';
import GameModal from '../components/GameModal.js'
import { touchStart, touchEnd } from '../utils/touch.js';
import initSite from '../utils/initSite.js';
import moveSite from '../utils/moveSite.js';
import { checkSuccess, checkFail } from '../utils/check.js';
import { changeList } from '../reducers/gameApp.js';

class GameBody extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.modalTitle = '失败了'
  }

  handleTouchStart = (ev) => {
    touchStart(ev);
  }

  handleTouchEnd = (ev) => {
    const target = touchEnd(ev);
    if (target) {
      const newList = moveSite(target, this.props.list);
      if (newList.includes(0)) {
        const newSite = initSite(newList);
        const { index, value } = newSite;
        newList[index] = value;
      }
      this.props.onChange(newList);
      if (checkSuccess(newList)) {
        this.modalTitle = '恭喜通关!';
        this.setState({ showModal: true });
      }
      if (checkFail(newList)) {
        this.modalTitle = '失败了!';
        this.setState({ showModal: true });
      }
    }
  }

  handleHide = () => {
    this.setState({ showModal: false });
  }

  render() {
    const Modal = this.state.showModal 
      ? ( <GameModal title={this.modalTitle} onClick={this.handleHide}/> )
      : null;

    return (
      <div className="body"
        onTouchStart={this.state.showModal ? null : this.handleTouchStart}
        onTouchEnd={this.state.showModal ? null : this.handleTouchEnd}
        onMouseDown={this.state.showModal ? null : this.handleTouchStart}
        onMouseUp={this.state.showModal ? null : this.handleTouchEnd}>
        { 
          this.props.list.map((value, index) => 
          <GameBox key={index} value={value} />) 
        }
        { Modal }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    gameLists: state.gameLists
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (list) => { dispatch(changeList(list)); },
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(GameBody);