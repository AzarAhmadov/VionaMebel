import React from 'react'
import Container from './home/Container'

export default function ShoppingCentre() {
    return (
        <main>
            <div className="banner-global">
                <img src="../images/global.png" alt="" />
            </div>
            <Container>
                <div className="top-title">
                    <h4>
                        MAĞAZALARIMIZ
                        <span>
                            Mağazalarımız
                        </span>
                    </h4>
                </div>
                <section className='shooping'>
                    <div className="row">
                        <div className="shopping-item">
                            <img src="../images/shopping1.png" alt="" />
                            <span>
                                Yasamal filialı
                            </span>
                        </div>
                        <div className="shopping-item">
                            <img src="../images/shopping2.png" alt="" />
                            <span>
                                Babək prospekti, 64d
                            </span>
                        </div>
                        <div className="shopping-item">
                            <img src="../images/shopping3.png" alt="" />
                            <span>
                                İnqilab filialı
                            </span>
                        </div>
                        <div className="shopping-item">
                            <img src="../images/shopping4.png" alt="" />
                            <span>
                                Babək filialı
                            </span>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    )
}
