import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Modal from '../components/Modal';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      robotID: -1
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  onToggleModal = (event) => {
    this.onShowModal();
    this.setState({
      robotID: event.currentTarget.id
    });
  }

  onShowModal = () => {
    this.setState({ showModal: true });
  };

  onHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    console.log(this.state);
    const { robotID, showModal } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    let robotToToggle = robots[robotID - 1];
    console.log(showModal);
    return isPending ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <Modal showRobot={robotToToggle} handleOpen={showModal} handleClose={this.onHideModal} />
              <CardList robots={filteredRobots} toggleModal={this.onToggleModal} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);