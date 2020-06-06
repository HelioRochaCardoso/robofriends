import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { isEmpty } from 'lodash';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            modal14: false
        }
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render(props) {
        const { handleOpen, handleClose} = this.props;
        let robotInfo = this.props.showRobot || {};
        // this.toggle(14);
        const {
            id, name, username, email, website, phone,
            address: { city: addressCity } = { addressCity: 'No city available' },
            address: { zipcode } = { zipcode: 'No zipcode available' },
            company: { catchPhrase } = { catchPhrase: 'No catch phrase available' },
            company: { name: companyName } = { companyName: 'No company name available' },
        } = robotInfo;
        return isEmpty(robotInfo) ? null : (
            <MDBContainer>
                <MDBBtn color="primary" onClick={this.toggle(14)}>Open Modal</MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>
                        <img alt='robot' src={`https://robohash.org//${id}?200x200`}/>
                        <p>{name}</p>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <p><i>Username:</i> <strong>{username}</strong></p>
                        <p><i>Email:</i> <strong>{email}</strong></p>
                        <p><i>Phone:</i> <strong>{phone}</strong></p>
                        <p><i>Website:</i> <strong>{website}</strong></p>
                        <p><i>City:</i> <strong>{addressCity}</strong></p>
                        <p><i>Company:</i> <strong>{companyName}</strong></p>
                        <p><i>Motto:</i> <strong>{catchPhrase}</strong></p>
                        <p><i>Zip Code:</i> <strong>{zipcode}</strong></p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default Modal;