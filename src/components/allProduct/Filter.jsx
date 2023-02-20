import React from 'react'

const color = document.querySelectorAll('.color')
color.forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.color.active').classList.remove('active')
        el.classList.add('active')
    })
})

export default function Filter() {
    return (
        <div className='filters'>
            <div className="left-item">
                <div className="item-row">

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Otaq
                            </span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m1' type="checkbox" />
                                <label htmlFor="m1">Mətbəx</label>
                            </div>
                            <div>
                                <input id='m2' type="checkbox" />
                                <label htmlFor="m2">Qonaq otağı</label>
                            </div>
                            <div>
                                <input id='m3' type="checkbox" />
                                <label htmlFor="m3">Uşaq otağı</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Kateqoriya
                            </span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m4' type="checkbox" />
                                <label htmlFor="m4">Kateqoriya 1</label>
                            </div>
                            <div>
                                <input id='m5' type="checkbox" />
                                <label htmlFor="m5">Kateqoriya 2</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Qiymət
                            </span>
                            <i className="fa-solid fa-chevron-down"></i>
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
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="checkbox">
                            <div>
                                <input id='m6' type="checkbox" />
                                <label htmlFor="m6">12x12</label>
                            </div>
                            <div>
                                <input id='m10' type="checkbox" />
                                <label htmlFor="m10">12x15</label>
                            </div>
                            <div>
                                <input id='m11' type="checkbox" />
                                <label htmlFor="m11">12x24</label>
                            </div>
                            <div>
                                <input id='m7' type="checkbox" />
                                <label htmlFor="m7">13x13</label>
                            </div>
                            <div>
                                <input id='m8' type="checkbox" />
                                <label htmlFor="m8">18x18</label>
                            </div>
                            <div>
                                <input id='m9' type="checkbox" />
                                <label htmlFor="m9">24x24</label>
                            </div>
                        </div>
                    </div>

                    <div className='item-area'>
                        <div className="item-top">
                            <span>
                                Qiymət
                            </span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="checkbox">
                            <div className='check-flex'>
                                <div className="color-red color active">
                                </div>
                                <p>
                                    Qırmızı
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-white color">
                                </div>
                                <p>
                                    Ağ
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-blue color">
                                </div>
                                <p>
                                    Mavi
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-yellow color">
                                </div>
                                <p>
                                    Sarı
                                </p>
                            </div>
                            <div className='check-flex'>
                                <div className="color-black color">
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
        </div>
    )
}
