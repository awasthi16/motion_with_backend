import React from 'react'
import "./TicketComponent.css"


const TicketComponent = () => {
  return (
    <>
    <div className="basic">
                                <div className="b1">
                                    <button>Basic</button>
                                </div>
                                <div className="b2">
                                    <div className="dollar">
                                        <h1>$99</h1>

                                    </div>
                                    <div className="get">
                                        Get a seat
                                    </div>
                                </div>
                                <div className="brr">
                                    <div className="bord"> </div>
                                </div>
                                <br />
                                <div className="para">
                                    <p>Explore our lineup of keynote speakers and industry </p>
                                    <p className='r1'> leaders who will inspire and enlighten at the</p>
                                    <p className='r1'>conference.</p>
                                </div>

                                <div className="keyevent">
                                    <div className="point">
                                        <ul>
                                            <li><img src="https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/688475c5161faac4bd544101_Star%201.svg" alt="" width="26" /></li>
                                            <br />
                                            <li><img src="https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/688475c5161faac4bd544101_Star%201.svg" alt="" width="26" /></li>
                                            <br />
                                            <li><img src="https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/688475c5161faac4bd544101_Star%201.svg" alt="" width="26" /></li>
                                            <br />
                                            <li><img src="https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/688475c5161faac4bd544101_Star%201.svg" alt="" width="26" /></li>
                                            <br />
                                            <li><img src="https://cdn.prod.website-files.com/687f5648b07a8b67bf809294/688475c5161faac4bd544101_Star%201.svg" alt="" width="26" /></li>
                                        </ul>

                                    </div>
                                    <div className="point2">
                                        <ul>
                                            <li>Full event access</li>
                                            <li>  Access to keynote & breakout sessions</li>
                                            <li>Networking opportunities</li>
                                            <li>Access to post-event session recordings</li>
                                            <li>Conference materials and swag bag</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="buy">
                                    <button>
                                        Buy Ticket
                                    </button>

                                </div>



                            </div>
    </>
  )
}

export default TicketComponent