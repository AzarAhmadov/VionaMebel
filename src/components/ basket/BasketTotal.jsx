import React, { useEffect } from 'react'
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'

export default function BasketTotal() {

    window.scrollTo(0, 0)

    useEffect(() => {
        let counter_value = document.querySelectorAll(".counter-value");
        const dec_btn = document.querySelectorAll(".dec");
        const inc_btn = document.querySelectorAll(".inc");

        dec_btn.forEach((el, item) => {
            el.addEventListener('click', () => {
                let counValue = Number(counter_value[item].textContent) + 1;
                counter_value[item].textContent = counValue;
            })
        })

        inc_btn.forEach((el, item) => {
            el.addEventListener('click', () => {
                let counValue = Number(counter_value[item].textContent) - 1;
                counter_value[item].textContent = counValue;
                let finsih = 0
                if (counValue == -1) {
                    counter_value[item].textContent = finsih
                }
            })
        })
    }, [])



    return (
        <main>
            <BannerGlobal />
            <Container>
                <section id='basketTotal'>

                    <div className="top-title">
                        <h4>
                            SƏBƏT
                            <span>
                                Səbət
                            </span>
                        </h4>
                    </div>

                    <div className="basket-top">
                        <ul>
                            <li>
                                Ölçü
                            </li>
                            <li>
                                Rəng
                            </li>
                            <li>
                                Məhsul qiyməti
                            </li>
                            <li>
                                Sayı
                            </li>
                            <li>
                                Qiymət
                            </li>
                        </ul>
                    </div>
                    <div className="basket-row">
                        <div className="basket-item">
                            <div className='flex-basket'>
                                <img src="../images/pop1.png" alt="" />
                                <div className="name">
                                    <span className="title">
                                        Divan
                                    </span>
                                    <span className='code'>
                                        v2ghjkl345
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="olcu">
                                    5x12x25
                                </span>
                            </div>
                            <div>
                                <span className='circle'></span>
                            </div>
                            <div>
                                <span className="price">
                                    2.190₼
                                </span>
                            </div>
                            <div>
                                <div className="btn">
                                    <button className='inc'>-</button>
                                    <p className='counter-value'>1</p>
                                    <button className='dec'>+</button>
                                </div>
                            </div>
                            <div>
                                <span className="price priceValue">
                                    2.190
                                </span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash"></i>
                            </div>
                        </div>

                        <div className="basket-item">
                            <div className='flex-basket'>
                                <img src="../images/pop4.png" alt="" />
                                <div className="name">
                                    <span className="title">
                                        Divan
                                    </span>
                                    <span className='code'>
                                        v2ghjkl345
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="olcu">
                                    5x12x25
                                </span>
                            </div>
                            <div>
                                <span className='circle'></span>
                            </div>
                            <div>
                                <span className="price">
                                    2.190₼
                                </span>
                            </div>
                            <div>
                                <div className="btn">
                                    <button className='inc'>-</button>
                                    <p className='counter-value'>1</p>
                                    <button className='dec'>+</button>
                                </div>
                            </div>
                            <div>
                                <span className="price priceValue">
                                    2.190
                                </span>
                            </div>
                            <div>
                                <i className="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                    <div className="basket-bottom">
                        <ul>
                            <li className='b-item'>Məhsul:</li>
                            <li className='b-item'>3.750 ₼</li>
                            <li className='b-item'>Çatdırılma:</li>
                            <li className='b-item'>7.00 ₼</li>
                            <li className='b-item'>Endirim:</li>
                            <li className='b-item'>0 ₼</li>
                            <li><span>Cəmi qiymət:</span></li>
                            <li style={{ paddingBottom: '0' }}><span>3.757 ₼</span></li>
                        </ul>
                    </div>
                    <div className="btn-bottom">
                        <button className='last-btn'> Sifarişi təsdiqlə </button>
                    </div>

                </section>
            </Container>
        </main>
    )
}
