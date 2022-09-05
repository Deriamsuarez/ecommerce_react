import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Filter = ({ setSearch, filter, setFilter }) => {

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            let arrFilter = []
            products.forEach(filter => {
                if (!arrFilter.includes(filter.category.name)) {
                    arrFilter.push(filter.category.name)
                }
            });

            setFilter(arrFilter)
        }
    }, [products])

    const handleFilter = filter => {
        let productsFilter = [];
        products.forEach(product => {
            if (product.category.name.includes(filter)) {
                productsFilter.push(product)
            }
        });

        setSearch(productsFilter)
    }

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
                    <li onClick={() => setSearch()}>All</li>
                    {filter && filter.map(option => <li key={option} onClick={() => handleFilter(option)}>{option}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Filter