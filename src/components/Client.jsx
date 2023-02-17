import React from 'react'

export default function Client() {
    return (
        <section id='client'>
            <div className="top-title">
                <h4>
                    Müştəri rəyləri
                    <span>
                        Müştəri rəyləri
                    </span>
                </h4>
            </div>
            <div className="row">
                <div className="client-item">
                    <div className="left">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="right-item">
                        <p>
                            “Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…”
                        </p>
                    </div>
                </div>
                <div className="client-item">
                    <div className="left">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="right-item">
                        <p>
                            “Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
