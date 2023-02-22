import React, { useEffect, useRef } from 'react'
import BannerGlobal from '../BannerGlobal'
import Container from '../home/Container'

export default function BasketTotal() {

    window.scrollTo(0, 0)
    useEffect(() => {
        //setting default attribute to disabled of minus button
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

        //taking value to increment decrement input value
        var valueCount

        //taking price value in variable
        var price = document.getElementById("price").innerText;

        //price calculation function
        function priceTotal() {
            var total = valueCount * price;
            document.getElementById("price").innerText = total
        }

        //plus button
        document.querySelector(".plus-btn").addEventListener("click", function () {

            valueCount = document.getElementById("quantity").value;
            valueCount++;
            document.getElementById("quantity").value = valueCount;

            if (valueCount > 1) {
                document.querySelector(".minus-btn").removeAttribute("disabled");
                document.querySelector(".minus-btn").classList.remove("disabled")
            }
            priceTotal()
        })

        //plus button
        document.querySelector(".minus-btn").addEventListener("click", function () {
            //getting value of input
            valueCount = document.getElementById("quantity").value;

            //input value increment by 1
            valueCount--;

            //setting increment input value
            document.getElementById("quantity").value = valueCount

            if (valueCount == 1) {
                document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
            }

            //calling price function
            priceTotal()
        })
    })
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
                        {/* <div className="basket-item">
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
                                <div className="quantity">
                                    <button className="btn plus-btn" type="button"><i class="fa-solid fa-minus"></i></button>
                                    <input type="text" id="quantity" value="1" />
                                    <button className="btn minus-btn disabled" type="button"><i class="fa-solid fa-plus"></i></button>
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
                        </div> */}
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
                                <div className="quantity">
                                    <button className="btn minus-btn disabled" type="button"><i class="fa-solid fa-minus"></i></button>
                                    <input type="text" id="quantity" value="1" />
                                    <button className="btn plus-btn" type="button"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                            <div>
                                <span className='price' id="price">2190</span>
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
