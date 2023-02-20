import React, { useState } from 'react'
import Container from '../home/Container'
import { allProduct } from '../data/data'
import Filter from './Filter'

export default function FilterProduct() {
    const [item, setItem] = useState(allProduct)
    const [perPage, setPerPage] = useState(9)
    const numOfTotalNumbers = Math.ceil(item.length / perPage)
    const pages = [...Array(numOfTotalNumbers + 1).keys()].slice(1);
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastItem = currentPage * perPage
    const indexOfFirstItem = indexOfLastItem - perPage
    const visibleItem = item.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <main>
            <Container>
                <section id='filter'>
                    <Filter />
                    <div className='right-item'>
                        <div className="right-top">
                            <form action="">
                                <div>
                                    <select>
                                        <option value="q">Qiymətinə görə</option>
                                    </select>
                                </div>
                                <div>
                                    <select>
                                        <option value="p">Populyarlığına görə</option>
                                    </select>
                                </div>
                                <div>
                                    <select>
                                        <option value="y">Yeni Kolleksiya</option>
                                    </select>
                                </div>
                            </form>
                            {window.scrollTo(0, 0)}
                        </div>

                        <div className="right-grid">
                            {
                                visibleItem.map((el, idx) => {
                                    return (
                                        <div key={idx}>
                                            {
                                                el.images ? <img src={el.images} /> : null
                                            }
                                            {
                                                el.images ? <div className="right-content">
                                                    <h5 className='title'>
                                                        {el.title}
                                                    </h5>
                                                    <span className="code">{el.code}</span>
                                                    <div>
                                                        <div className="price">
                                                            {
                                                                el.oldPrice ? <span className='old-price'> {el.oldPrice} </span> : null
                                                            }
                                                            <span className='current-price'>{el.currentPrice}</span>
                                                        </div>
                                                    </div>
                                                </div> : null
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </section>
                <ul className="btn-page">
                    {
                        pages.map((el, idx) => {
                            return (
                                <li>
                                    <button className={`${currentPage === el ? "active" : null}`} onClick={() => setCurrentPage(el)} key={idx}>{`${el}`}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
        </main >
    )
}
