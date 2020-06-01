import React from 'react';

const Modal = ({ handleClose, show, showRobot }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let robotInfo = showRobot || {};
    const {
        name, username, email, website, phone,
        address: {city: addressCity} = {addressCity: 'No available city'},
        address: {zipcode} = {zipcode: 'No zipcode available'},
        company: {catchPhrase} = {catchPhrase: 'No catch phrase available'},
        company: {name: companyName} = {companyName: 'No company name available'},
    } = robotInfo;

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p><i>Name: <strong>{name}</strong></i></p>
                <p><i>Username: <strong>{username}</strong></i></p>
                <p><i>Email: <strong>{email}</strong></i></p>
                <p><i>Phone: <strong>{phone}</strong></i></p>
                <p><i>Website: <strong>{website}</strong></i></p>
                <p><i>City: <strong>{addressCity}</strong></i></p>
                <p><i>Company: <strong>{companyName}</strong></i></p>
                <p><i>Motto: <strong>{catchPhrase}</strong></i></p>
                <p><i>Zip Code: <strong>{zipcode}</strong></i></p>
                <button className="close" onClick={handleClose}>
                    Close &times;
                </button>
            </section>
        </div>
    )
}

export default Modal;