import React, { useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import kimiPng from '../../Image/kimi-ni-todoke-1920.png'; // นำเข้าไฟล์ภาพ
import elementPng from '../../Image/element-hunter.png'; // นำเข้าไฟล์ภาพ
import chiPng from '../../Image/togainu-no-chi.png'; // นำเข้าไฟล์ภาพ
//import playPng from '../../Image/play.png';// // นำเข้าไฟล์ภาพ
import './ImageSlide.css';

const ImageSlide = ({ onPlay }) => {
    const carouselRef = useRef(null);
    const bootstrapCarouselRef = useRef(null);

    const handlers = useSwipeable({
        onSwipedLeft: () => bootstrapCarouselRef.current?.next(),
        onSwipedRight: () => bootstrapCarouselRef.current?.prev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        if (carouselRef.current) {
            bootstrapCarouselRef.current = new window.bootstrap.Carousel(carouselRef.current, {
                interval: 5000,
                wrap: true,
                touch: true,
            });

            return () => bootstrapCarouselRef.current?.dispose();
        }
    }, []);

    const images = [
        {
            src: kimiPng,
            title: 'ฝากใจไปถึงเธอ',
            description: 'คุโรนูมะ ซาวาโกะ หญิงสาวที่ถูกหาว่าเป็นผีทั้งๆที่ยังมีชีวืตอยู่ ด้วยรูปโฉมภายนอกเหมือน “ซาดาโกะ” ใสชุดนักเรียน และนิสัยที่ประหม่าขี้อายเวลาต้องคุยกับคนอื่นๆ ทำให้ไม่ค่อยมีใครกล้าเข้าใกล้เธอ แต่ว่าตัวซาดาโกะนั้นมีความตั้งใจจะเป็นเพื่อนกับ “คาเซฮายะ โชวตะ” ชายหนุ่มสดใสอารมณ์ดีที่เป็นศูนย์กลางของห้อง นี่คืออนิเมะแนวรักสดใส',
        },
        {
            src: elementPng,
            title: 'Element Hunters',
            description: 'ในปี ค.ศ. 2029 ได้เกิดการทรุดตัวครั้งใหญ่ของพื้นดินบริเวณทะเลเมดิเตอร์เรเนียน ธาตุเคมีที่สำคัญอย่างออกซิเจน คาร์บอน ทอง โมลิบดีนัม และโคบอลต์ ได้หายไปจากเปลือกโลกอย่างฉับพลัน ส่งผลให้ประชากรโลกลดลงถึง 90% ภายในเวลา 60 ปี นักวิจัยค้นพบว่า ธาตุที่หายไปเหล่านั้นได้ถูกดูดเข้าไปยังดาวเคราะห์อีกดวงหนึ่งที่มีชื่อว่า "Nega Earth" ซึ่งอยู่ในมิติอีกมิติหนึ่ง เพื่อปกป้องโลกจากหายนะครั้งนี้ จึงได้มีการก่อตั้งทีมพิเศษที่เรียกว่า "Element Hunters" ขึ้นมา สมาชิกทั้งหมดของทีมนี้มีอายุต่ำกว่า 13 ปี เพราะสมองของเด็กที่ยังอ่อนวัยและยืดหยุ่น คือกุญแจสำคัญที่สามารถเข้าถึง Nega Earth ได้',
        },
        {
            src: chiPng,
            title: 'Togainu no chi',
            description: 'หลังจากเกิดสงครามครั้งที่ 3 ซึ่งทำให้ญี่ปุ่นตกอยู่ในซากปรักหักพัง Togainu no Chi ซับไทย บริษัท ที่เรียกว่า Vischio ได้ยึดอำนาจการปกครองของโตเกียวและเปลี่ยนชื่อเป็น Toshima เหตุการณ์ที่เกิดขึ้นในตรอกซอกซอยด้านหลังเป็นเกมการต่อสู้ที่เรียกว่า Igura ซึ่งดูแลโดย Vischio ในระหว่างที่ผู้เข้าแข่งขันต่อสู้และอาบเลือดของกัน และกันเพื่อรับโอกาสที่จะเดินทางไปกับ Il-re ซึ่งเป็นราชาของทัวร์นาเมนต์',
        },
    ];

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide image-slide"
            data-bs-ride="carousel"
            ref={carouselRef}
            {...handlers}
        >
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image.src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        <div className="carousel-caption">
                            <div className="caption-bg">
                            <div className="text-content">
                                <h5>{image.title}</h5>
                                <p>{image.description}</p>
                            </div>
                                <button
                                    className="btn btn-light play-button"
                                    onClick={() => onPlay(image)}
                                >
                                    <i className="bi bi-play-fill me-1"></i> Play
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageSlide;