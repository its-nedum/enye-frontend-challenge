import React from 'react';

const Paginate = ({total, pageSize, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(total / pageSize); i++){
            pageNumbers.push(i)
    }
    
    return (
        <nav className="container" aria-label="Page navigation">
        <ul className="pagination center">
            <li className="page-item"><button className="page-link" aria-disabled><span aria-hidden="true">&laquo;</span></button></li>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button onClick={ () => paginate(number)} className="page-link">{number}</button>
                </li>
            ))}
            <li className="page-item"><button className="page-link" aria-disabled><span aria-hidden="true">&raquo;</span></button></li>
        </ul>
        </nav>
    )
}

export default Paginate
