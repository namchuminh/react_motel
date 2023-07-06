import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Home(props) {
    return (
        <Container className='mb-5'>
            <div className='mt-4'>
                <h3 className='fw-bold'>Kênh thông tin Phòng Trọ số 1 Việt Nam</h3>
                <span style={{ color: '#65676b' }}>Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.</span>
            </div>
            <div className='mt-4'>
                <Row>
                    <Col md='8'>
                        <div className='bg-white rounded-2' style={{ border: '1px solid #dedede' }}>
                            <div className='p-3'>
                                <h5 style={{ fontWeight: '600'}}>Danh sách tin đăng</h5>
                                <div className='flex'>
                                    <span>Sắp xếp:</span>
                                    <span className='p-1 rounded-1' style={{ cursor: 'pointer', marginLeft: '15px', background: '#e7f0f7', fontSize: 14 }}>Mặc định</span>
                                    <span className='p-1 rounded-1' style={{ cursor: 'pointer', marginLeft: '15px', background: '#e7f0f7', fontSize: 14 }}>Có video</span>
                                    <span className='p-1 rounded-1' style={{ cursor: 'pointer', marginLeft: '15px', background: '#e7f0f7', fontSize: 14 }}>Mới nhất</span>
                                </div>
                            </div>
                            <div style={{ background: '#fff9f3' }}>
                                <Col className='mx-3' style={{ borderTop: '1px solid #e13427' }}>
                                    <Row style={{ paddingBottom: 10, paddingTop: 10 }}>
                                        <Col md='4'>
                                            <img alt='Anh mau' style={{ maxHeight: 200, width: '100%', height: '100%' }} src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/07/09/z3546833179517-cc0773c8f9916f7c6fdb4913da056445-1_1657340240.jpg' />
                                        </Col>
                                        <Col md='8'>
                                            <h5 style={{ color: '#E13427', fontWeight: 'bold' }}>
                                                Cho thuê phòng trọ tại Quang Trung, Phường 8, Quận Gò Vấp (Công viên làng hoa).
                                            </h5>
                                            <div className='d-flex justify-content-between mt-3'>
                                                <span style={{ fontWeight: 'bold', color: '#16c784', fontSize: '1.2rem' }}>3.5 triệu/tháng</span>
                                                <span>22m²</span>
                                                <span>Quận Gò Vấp, Hồ Chí Minh</span>
                                            </div>
                                            <div className='mt-3'>
                                                <span style={{ color: '#8a8d91', fontSize: 15 }}>06/07/2023 - </span>
                                                <span style={{ color: '#8a8d91', fontSize: 15 }}>
                                                    Bên mình còn phòng trống có thể vào ở liền.(Có hỗ trợ cho khách ở lâu dài)- Giờ giấc tự do.- Có thể nuôi pet- Không giới hạn người ở.- Xe không…
                                                </span>
                                            </div>
                                            <div className='mt-3 d-flex justify-content-between'>
                                                <span className='p-1' style={{ color: '#8a8d91', fontSize: 15 }}>Người đăng: Nguyễn Văn A</span>
                                                <span className='p-1 text-white rounded-2' style={{ cursor: 'pointer', border: '1px solid #1266dd', background: '#1266dd', fontSize: 15 }}>Gọi: 0999999999</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className='bg-white rounded-2 pb-3' style={{ border: '1px solid #dedede' }}>
                            <div className='pt-3 pb-3' style={{ paddingLeft: '1rem'}}>
                                <h5 style={{ fontWeight: '600'}}>Xem theo giá</h5>
                            </div>
                            <ul style={{ color: '#333', marginRight: 40 }}>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Dưới 1 triệu</span>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 1 - 2 triệu</span>
                                </li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 2 - 3 triệu</span>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 3 - 5 triệu</span>
                                </li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 5 - 7 triệu</span>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 7 - 10 triệu</span>
                                </li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 10 - 15 triệu</span>
                                    <span><i className="fa-solid fa-angle-right"></i> Trên 15 triệu</span>
                                </li>
                            </ul>
                        </div>

                        <div className='bg-white rounded-2 pb-3 mt-4' style={{ border: '1px solid #dedede' }}>
                            <div className='pt-3 pb-3' style={{ paddingLeft: '1rem'}}>
                                <h5 style={{ fontWeight: '600'}}>Xem theo diện tích</h5>
                            </div>
                            <ul style={{ color: '#333', marginRight: 40 }}>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Dưới 20m<sup>2</sup></span>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 20m<sup>2</sup> - 30m<sup>2</sup></span>
                                </li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 30m<sup>2</sup> - 50m<sup>2</sup></span>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 50m<sup>2</sup> - 70m<sup>2</sup></span>
                                </li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <span><i className="fa-solid fa-angle-right"></i> Từ 70m<sup>2</sup> - 70m<sup>2</sup></span>
                                    <span><i className="fa-solid fa-angle-right"></i> Trên 90m<sup>2</sup></span>
                                </li>
                            </ul>
                        </div>

                        <div className='bg-white rounded-2 pb-3 mt-4' style={{ border: '1px solid #dedede' }}>
                            <div className='pt-3 pb-3' style={{ paddingLeft: '1rem'}}>
                                <h5 style={{ fontWeight: '600'}}>Tin mới đăng</h5>
                            </div>
                            <ul style={{ color: '#333', marginRight: 30 }}>
                                <li style={{ borderBottom: '1px solid #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <Row className='pb-3'>
                                        <Col md='4'>
                                            <img alt='Anh mau' style={{ width: '100%', height: '100%' }} src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/07/09/z3546833179517-cc0773c8f9916f7c6fdb4913da056445-1_1657340240.jpg' />
                                        </Col>
                                        <Col md='8'>
                                            <span style={{ fontSize: 13, color: '#055699' }}>GÁC LỬNG 28m2, NỘI THẤT ĐẦY ĐỦ, RỘNG RÃI…</span>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span style={{ fontSize: 13, color: '#16c784', fontWeight: 'bold' }}>3.5 triệu/tháng</span>
                                                <span style={{ fontSize: 13, color: '#aaa' }}>06/07/2023</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>

                                <li style={{ borderBottom: '1px solid #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <Row className='pb-3'>
                                        <Col md='4'>
                                            <img alt='Anh mau' style={{ width: '100%', height: '100%' }} src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/07/09/z3546833179517-cc0773c8f9916f7c6fdb4913da056445-1_1657340240.jpg' />
                                        </Col>
                                        <Col md='8'>
                                            <span style={{ fontSize: 13, color: '#055699' }}>GÁC LỬNG 28m2, NỘI THẤT ĐẦY ĐỦ, RỘNG RÃI…</span>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span style={{ fontSize: 13, color: '#16c784', fontWeight: 'bold' }}>3.5 triệu/tháng</span>
                                                <span style={{ fontSize: 13, color: '#aaa' }}>06/07/2023</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>

                                <li style={{ borderBottom: '1px solid #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <Row className='pb-3'>
                                        <Col md='4'>
                                            <img alt='Anh mau' style={{ width: '100%', height: '100%' }} src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/07/09/z3546833179517-cc0773c8f9916f7c6fdb4913da056445-1_1657340240.jpg' />
                                        </Col>
                                        <Col md='8'>
                                            <span style={{ fontSize: 13, color: '#055699' }}>GÁC LỬNG 28m2, NỘI THẤT ĐẦY ĐỦ, RỘNG RÃI…</span>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span style={{ fontSize: 13, color: '#16c784', fontWeight: 'bold' }}>3.5 triệu/tháng</span>
                                                <span style={{ fontSize: 13, color: '#aaa' }}>06/07/2023</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>

                                <li style={{ borderBottom: '1px solid #dedede', fontSize: 15}} className='mb-3 d-flex justify-content-between'>
                                    <Row className='pb-3'>
                                        <Col md='4'>
                                            <img alt='Anh mau' style={{ width: '100%', height: '100%' }} src='https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/07/09/z3546833179517-cc0773c8f9916f7c6fdb4913da056445-1_1657340240.jpg' />
                                        </Col>
                                        <Col md='8'>
                                            <span style={{ fontSize: 13, color: '#055699' }}>GÁC LỬNG 28m2, NỘI THẤT ĐẦY ĐỦ, RỘNG RÃI…</span>
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span style={{ fontSize: 13, color: '#16c784', fontWeight: 'bold' }}>3.5 triệu/tháng</span>
                                                <span style={{ fontSize: 13, color: '#aaa' }}>06/07/2023</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </div>

                        <div className='bg-white rounded-2 pb-3 mt-4' style={{ border: '1px solid #dedede' }}>
                            <div className='pt-3 pb-3' style={{ paddingLeft: '1rem'}}>
                                <h5 style={{ fontWeight: '600'}}>Bài viết mới</h5>
                            </div>
                            <ul style={{ color: '#333', marginRight: 40, listStyle: 'none' }}>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3'><i className="fa-solid fa-angle-right"></i> Khuyến mãi đặc biệt cho thành viên mới</li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3'><i className="fa-solid fa-angle-right"></i> Khuyến mãi đặc biệt cho thành viên mới</li>
                                <li style={{ borderBottom: '1px dotted #dedede', fontSize: 15}} className='mb-3'><i className="fa-solid fa-angle-right"></i> Khuyến mãi đặc biệt cho thành viên mới</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

