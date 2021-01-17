import React from 'react'

const SearchBar = ({searchRecord}) => {

    return (
        <div className="container mt-2">
            <form>
                <div className="row input-group">
                    <div className="col-12">
                        <input type="text" className="form-control" autoFocus onChange={e => searchRecord(e.target.value)} placeholder="Search By Firstname or Lastname" aria-label="search-text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
