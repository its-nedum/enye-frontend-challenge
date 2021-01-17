import React from 'react'

const Filter = ({ filterBy }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-12 col-md-4">
                <small>Filter by gender</small>
                <div className="controls-radio">
                    <label className="radio-btn">
                        <input type="radio" value="Male" name="filter" onChange={e => filterBy(e.target.value)}/> Male
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Female" name="filter" onChange={e => filterBy(e.target.value)}/> Female
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="Prefer to skip" name="filter" onChange={e => filterBy(e.target.value)}/> Others
                    </label>  
                </div>
                </div>
                <div className="col-12 col-md-4">
                <small>Filter by payment method</small>
                <div className="controls-radio">
                    <label className="radio-btn">
                        <input type="radio" value="paypal" name="filter" onChange={e => filterBy(e.target.value)}/> Paypal
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="check" name="filter" onChange={e => filterBy(e.target.value)}/> Check
                    </label>  
                    <label className="radio-btn">
                        <input type="radio" value="cc" name="filter" onChange={e => filterBy(e.target.value)}/> Cc
                    </label>
                    <label className="radio-btn">
                        <input type="radio" value="money order" name="filter" onChange={e => filterBy(e.target.value)}/> Money order
                    </label> 
                </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </div>
    )
}

export default Filter
