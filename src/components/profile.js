import React from 'react'

const Profile = ({profile}) => {
    return (
        <div className="container">
            <div className="row">
                {profile && profile.length !== 0 ?
                    profile.map((item, index)=> {
                        return(
                            <div className="col-12 col-md-3" key={index}>
                                <div className="card text-white bg-dark mb-3">
                                    <div className="card-header">{`${item.FirstName} ${item.LastName}`}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Dark card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
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
