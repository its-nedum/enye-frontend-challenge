import React from 'react'

const SearchBar = ({searchRecord}) => {

    return (
        <div className="container mt-5">
            <form>
                <div className="row input-group">
                    <div className="col-9">
                        <input type="text" className="form-control" onChange={e => searchRecord(e.target.value)} placeholder="Search By Name" aria-label="search-text" />
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-success" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
