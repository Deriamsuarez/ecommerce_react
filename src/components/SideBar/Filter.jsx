import React from 'react'

const Filter = () => {
    return (
        <div className="filter__types">
            <div className="filter__price">
                <h4>Price</h4>
                <div className="filter__line" />
                <div className="filter__content">
                    <label htmlFor="from">From:</label>
                    <input type="number" />
                </div>
                <div className="filter__content">
                    <label htmlFor="to">to:</label>
                    <input type="number" />
                </div>
                <button>Filter Price</button>
            </div>
            <div className="filter__category">
            <h4>Category</h4>
                <div className="filter__line" />
                <ul>
                    <li>Smart TV</li>
                    <li>Computers</li>
                    <li>Smartphones</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter