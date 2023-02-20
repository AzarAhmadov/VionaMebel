import React, { useState } from 'react'
import Container from '../home/Container'
import { allProduct } from '../data/data'


export default function FilterProduct() {

    const [item, setItem] = useState(allProduct)
    const [perPage, setPerPage] = useState(9)
    const numOfTotalNumbers = Math.ceil(item.length / perPage)
    const pages = [...Array(numOfTotalNumbers + 1).keys()].slice(1);
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastItem = currentPage * perPage
    const indexOfFirstItem = indexOfLastItem - perPage
    const visibleItem = item.slice(indexOfFirstItem, indexOfLastItem)
    window.scrollTo(0, 0);
    return (
        <main>
            <Container>

                <section id='filter'>
                    <div className="left-item">
                        <div className="item-row">
                            <div className='item-area'>
                                <div className="item-top">
                                    <span>
                                        Otaq
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="checkbox">
                                    <div>
                                        <input id='m1' type="checkbox" />
                                        <label htmlfor="m1">Mətbəx</label>
                                    </div>
                                    <div>
                                        <input id='m2' type="checkbox" />
                                        <label htmlfor="m2">Qonaq otağı</label>
                                    </div>
                                    <div>
                                        <input id='m3' type="checkbox" />
                                        <label htmlfor="m3">Uşaq otağı</label>
                                    </div>
                                </div>
                            </div>

                            <div className='item-area'>
                                <div className="item-top">
                                    <span>
                                        Kateqoriya
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="checkbox">
                                    <div>
                                        <input id='m4' type="checkbox" />
                                        <label htmlfor="m4">Kateqoriya 1</label>
                                    </div>
                                    <div>
                                        <input id='m5' type="checkbox" />
                                        <label htmlfor="m5">Kateqoriya 2</label>
                                    </div>
                                </div>
                            </div>

                            <div className='item-area'>
                                <div className="item-top">
                                    <span>
                                        Qiymət
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="checkbox">
                                    <div>
                                        <input type="text" placeholder='Min.₼' className='txt' />
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Max.₼' className='txt' />
                                    </div>
                                </div>
                            </div>

                            <div className='item-area'>
                                <div className="item-top">
                                    <span>
                                        Ölçü
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="checkbox">
                                    <div>
                                        <input id='m6' type="checkbox" />
                                        <label htmlfor="m6">12x12</label>
                                    </div>
                                    <div>
                                        <input id='m10' type="checkbox" />
                                        <label htmlfor="m10">12x15</label>
                                    </div>
                                    <div>
                                        <input id='m11' type="checkbox" />
                                        <label htmlfor="m11">12x24</label>
                                    </div>
                                    <div>
                                        <input id='m7' type="checkbox" />
                                        <label htmlfor="m7">13x13</label>
                                    </div>
                                    <div>
                                        <input id='m8' type="checkbox" />
                                        <label htmlfor="m8">18x18</label>
                                    </div>
                                    <div>
                                        <input id='m9' type="checkbox" />
                                        <label htmlfor="m9">24x24</label>
                                    </div>
                                </div>
                            </div>

                            <div className='item-area'>
                                <div className="item-top">
                                    <span>
                                        Qiymət
                                    </span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className="checkbox">
                                    <div className='check-flex'>
                                        <div className="color-red color">
                                            <div className="border active"></div>
                                        </div>
                                        <p>
                                            Qırmızı
                                        </p>
                                    </div>
                                    <div className='check-flex'>
                                        <div className="color-white color">
                                            <div className="border"></div>
                                        </div>
                                        <p>
                                            Ağ
                                        </p>
                                    </div>
                                    <div className='check-flex'>
                                        <div className="color-blue color">
                                            <div className="border"></div>
                                        </div>
                                        <p>
                                            Mavi
                                        </p>
                                    </div>
                                    <div className='check-flex'>
                                        <div className="color-yellow color">
                                            <div className="border"></div>
                                        </div>
                                        <p>
                                            Sarı
                                        </p>
                                    </div>
                                    <div className='check-flex'>
                                        <div className="color-black color">
                                            <div className="border"></div>
                                        </div>
                                        <p>
                                            Qara
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-button">
                            <button className='delete'>Sil</button>
                            <button className='accept'>Təsdiqlə</button>
                        </div>
                    </div>
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
                        </div>

                        <div className="right-grid">
                            {
                                visibleItem.map((el, idx) => {
                                    return (
                                        <div key={idx}>
                                            <img src={el.images} alt="" />
                                            <div className="right-content">
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
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <ul className="btn">
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
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    )
}
