import React from 'react';

const Paginate = ({total, pageSize, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total / pageSize); i++){
            pageNumbers.push(i)
    }
    
    return (
        <nav aria-label="Page navigation">
        <ul className="pagination center">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <li className="page-item"><a href="#!" className="page-link"><span aria-hidden="true">&laquo;</span></a></li>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href="#!" onClick={ () => paginate(number)} className="page-link">{number}</a>
                </li>
            ))}
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <li className="page-item"><a href="#!" className="page-link"><span aria-hidden="true">&raquo;</span></a></li>
        </ul>
        </nav>
    )
}

export default Paginate
