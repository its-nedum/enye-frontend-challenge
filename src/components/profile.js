import React from 'react'

const paragraph = {
    margin: '0px'
}
const link = {
    paddingTop: '0rem',
    paddingRight: '0.3rem',
    paddingBottom: '0.1rem',
    paddingLeft: '0.3rem',
}

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
                                            <p style={paragraph} className="fas fa-venus-mars"> <small className="card-text">{item.Gender}</small></p>
                                            <p style={paragraph} className="fas fa-phone"> <small className="card-text">{item.PhoneNumber}</small></p>
                                            <p style={paragraph} className="fas fa-envelope"> <small className="card-text">{item.Email}</small></p>
                                            <p style={paragraph} className="fas fa-user"> <small className="card-text">{item.UserName}</small></p>
                                            
                                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" style={link} id="pills-payment-tab" data-toggle="pill" href={`#pills-payment-${index}`} role="tab" aria-controls="pills-payment" aria-selected="true">payment</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" style={link} id="pills-location-tab" data-toggle="pill" href={`#pills-location-${index}`} role="tab" aria-controls="pills-location" aria-selected="false">location</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" style={link} id="pills-others-tab" data-toggle="pill" href={`#pills-others-${index}`} role="tab" aria-controls="pills-others" aria-selected="false">others</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id={`pills-payment-${index}`} role="tabpanel" aria-labelledby="pills-payment-tab">
                                                <p style={paragraph}> <small className="card-text">Credit Card Number: {item.CreditCardNumber}</small></p>
                                                <p style={paragraph}> <small className="card-text">Credit Card Type: {item.CreditCardType}</small></p>
                                                <p style={paragraph}> <small className="card-text">Payment Method: {item.PaymentMethod}</small></p>
                                                </div>
                                                <div className="tab-pane fade" id={`pills-location-${index}`} role="tabpanel" aria-labelledby="pills-location-tab">
                                                <p style={paragraph}> <small className="card-text">Latitude: {item.Latitude}</small></p>   
                                                <p style={paragraph}> <small className="card-text">Longitude: {item.Longitude}</small></p>   
                                                </div>
                                                <div className="tab-pane fade" id={`pills-others-${index}`} role="tabpanel" aria-labelledby="pills-others-tab">
                                                <p style={paragraph}> <small className="card-text">URL: {item.URL}</small></p>   
                                                <p style={paragraph}> <small className="card-text">Domain Name: {item.DomainName}</small></p>   
                                                <p style={paragraph}> <small className="card-text">Mac Address: {item.macAddress}</small></p>   
                                                <p style={paragraph}> <small className="card-text">Last Login: {item.LastLogin}</small></p>   
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                 : <div className="alert alert-primary" role="alert">Loading please wait...</div>}   
            </div>
        </div>
    )
}

export default Profile
