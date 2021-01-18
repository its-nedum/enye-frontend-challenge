import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div className="row mt-3">
            <div className="col-md-6"></div>
            <div className="col-12 col-md-4">
                <div className="sweet-loading">
                    <ClipLoader 
                        size={50}
                        color={'#ffff'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Spinner
