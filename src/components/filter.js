import React from 'react'

const Filter = ({filterByGender, filterByPaymentMethod}) => {
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
                        <input type="radio" value="paypal" name="payment" onChange={e => filterByPaymentMethod(e.target.value)}/> Paypal
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="check" name="payment" onChange={e => filterByPaymentMethod(e.target.value)}/> Check
                    </label>  
                    <label className="radio-btn">
                        <input type="radio" value="cc" name="payment" onChange={e => filterByPaymentMethod(e.target.value)}/> Cc
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="money order" name="payment" onChange={e => filterByPaymentMethod(e.target.value)}/> Money order
                    </label> 
                </form>
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </div>
    )
}

export default Filter
