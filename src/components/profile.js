import React from 'react'
import Spinner from './spinner'

const Profile = ({profile}) => {
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                {profile && profile.length !== 0 ?
                    profile.map((item, index)=> {
                        return(
                            <div className="col-12 col-md-3" key={index}>
                                <div className="card text-white bg-dark mb-3">
                                    <div className="card-header" style={{margin:'0px'}}><h5>{`${item.FirstName} ${item.LastName}`}</h5></div>
                                        <div className="card-body">
                                            <p className="fas fa-venus-mars profile-text"> <small className="card-text">{item.Gender}</small></p>
                                            <p className="fas fa-phone profile-text"> <small className="card-text">{item.PhoneNumber}</small></p>
                                            <p className="fas fa-envelope profile-text"> <small className="card-text">{item.Email}</small></p>
                                            <p className="fas fa-user profile-text"> <small className="card-text">{item.UserName}</small></p>
                                            
                                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active pills-link" id="pills-payment-tab" data-toggle="pill" href={`#pills-payment-${index}`} role="tab" aria-controls="pills-payment" aria-selected="true">Payment</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link pills-link" id="pills-location-tab" data-toggle="pill" href={`#pills-location-${index}`} role="tab" aria-controls="pills-location" aria-selected="false">Location</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link pills-link" id="pills-others-tab" data-toggle="pill" href={`#pills-others-${index}`} role="tab" aria-controls="pills-others" aria-selected="false">Others</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id={`pills-payment-${index}`} role="tabpanel" aria-labelledby="pills-payment-tab">
                                                <small><u>Payment Details</u></small>
                                                <p className="profile-text"><small className="card-text">Credit Card Number: {item.CreditCardNumber}</small></p>
                                                <p className="profile-text"><small className="card-text">Credit Card Type: {item.CreditCardType}</small></p>
                                                <p className="profile-text"><small className="card-text">Payment Method: {item.PaymentMethod}</small></p>
                                                </div>
                                                <div className="tab-pane fade" id={`pills-location-${index}`} role="tabpanel" aria-labelledby="pills-location-tab">
                                                <small><u>Location Details</u></small>
                                                <p className="profile-text"><small className="card-text">Latitude: {item.Latitude}</small></p>   
                                                <p className="profile-text"><small className="card-text">Longitude: {item.Longitude}</small></p>   
                                                </div>
                                                <div className="tab-pane fade" id={`pills-others-${index}`} role="tabpanel" aria-labelledby="pills-others-tab">
                                                <small><u>Other Details</u></small>
                                                <p className="profile-text"><small className="card-text">URL: {item.URL}</small></p>   
                                                <p className="profile-text"><small className="card-text">Domain Name: {item.DomainName}</small></p>   
                                                <p className="profile-text"><small className="card-text">Mac Address: {item.MacAddress}</small></p>   
                                                <p className="profile-text"><small className="card-text">Last Login: {item.LastLogin}</small></p>   
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                 : <div className="col-12"><Spinner /></div>}   
            </div>
        </div>
    )
}

export default Profile
