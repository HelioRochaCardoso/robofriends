import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import DialogSlide from '../components/DialogSlide';
import './App.css';
import { setSearchField, requestRobots, setRobotID, modalToToggle } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    robotID: state.robotSelected.robotID,
    showModal: state.toggleModal.showModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
    onChangeRobot: (event) => {
      dispatch(modalToToggle(true));
      dispatch(setRobotID(event.currentTarget.id));
    },
    onHideModal: () => {
      dispatch(modalToToggle(false));
      dispatch(setRobotID(-1));
    }
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, onChangeRobot, onHideModal, robots, isPending, robotID, showModal } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    let robotToToggle = robots[robotID - 1];
    return isPending ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <DialogSlide showRobot={robotToToggle} onOpen={showModal} onClose={onHideModal} />
              <CardList robots={filteredRobots} toggleModal={onChangeRobot} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);