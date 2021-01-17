import React from 'react'

const Filter = ({filterByGender}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-12 col-md-4">
                <small>Filter by gender</small>
                <form className="controls-radio">
                    <label className="radio-btn">
                        <input type="radio" value="Male" name="gender" onChange={e => filterByGender(e.target.value)}/> Male
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Female" name="gender" onChange={e => filterByGender(e.target.value)}/> Female
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Prefer to skip" name="gender" onChange={e => filterByGender(e.target.value)}/> Others
                    </label>  
                </form>
                </div>
                <div className="col-12 col-md-4">
                <small>Filter by payment method</small>
                <form className="controls-radio">
                    <label className="radio-btn">
                        <input type="radio" value="Male" name="payment"/> Visa
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Female" name="payment"/> Paypal
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Prefer to skip" name="payment"/> Check
                    </label>  
                    <label className="radio-btn">
                        <input type="radio" value="Prefer to skip" name="payment"/> Money order
                    </label> 
                </form>
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </div>
    )
}

export default Filter
