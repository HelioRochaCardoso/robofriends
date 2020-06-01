import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Modal from '../components/Modal';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
            showModal: false,
            robotID: -1
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ 'robots': users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
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
    	const {robots, searchField, robotID} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        let robotToToggle = robots[robotID-1];
        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            (
            	<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} toggleModal={this.onToggleModal}/>
                            <Modal show={this.state.showModal} showRobot={robotToToggle} handleClose={this.onHideModal}/>
                        </ErrorBoundary>
					</Scroll>
				</div>
			)
    }
}

export default App;