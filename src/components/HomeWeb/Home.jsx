import React from 'react';
import './Home.css';
import ImageSlide from '../ImageSlide/ImageSlide';
import Container from 'react-bootstrap/Container';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    const images = [
        'https://via.placeholder.com/1920x600?text=Slide+1',
        'https://via.placeholder.com/1920x600?text=Slide+2',
        'https://via.placeholder.com/1920x600?text=Slide+3'
    ];

    const recommendedAnime = [
        { id: 1, title: 'The Irregular at Magic High School: The Girl Who Calls the Stars', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+1' },
        { id: 2, title: 'เส้นทางพลิกผันของราชันย์อมตะ', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+2' },
        { id: 3, title: 'คนห่ามพ้นนรก', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+3' },
        { id: 4, title: 'The Grim Variations', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+4' },
        { id: 5, title: 'Campfire Cooking in Another World with My Absurd Skill', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+5' },
        { id: 6, title: 'Shangri-La Frontier', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+6' },
    ];

    const trendingAnime = [
        { id: 1, title: 'แรดเกรซเดล', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+9' },
        { id: 2, title: 'Naruto', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+10' },
        { id: 3, title: 'เผื่อว่าฉันจะไม่ได้บอกว่า', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+11' },
        { id: 4, title: 'The B Siku', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+12' },
        { id: 5, title: 'เกมรักเลือดแห่งจันทร์', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+13' },
        { id: 6, title: 'ดวงใจพ่อพระหมอ', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+14' },
        { id: 7, title: 'Anime 15', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+15' },
        { id: 8, title: 'Anime 16', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+16' },
        { id: 9, title: 'Anime 17', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+17' },
        { id: 10, title: 'Anime 18', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+18' },
        { id: 11, title: 'Anime 19', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+19' },
        { id: 12, title: 'Anime 20', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+20' },
        { id: 13, title: 'Anime 21', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+21' },
        { id: 14, title: 'Anime 22', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+22' },
        { id: 15, title: 'Anime 23', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+23' },
        { id: 16, title: 'Anime 24', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+24' },
        { id: 17, title: 'Anime 25', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+25' },
        { id: 18, title: 'Anime 26', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+26' },
        { id: 19, title: 'Anime 27', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+27' },
        { id: 20, title: 'Anime 28', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+28' },
        { id: 21, title: 'Anime 29', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+29' },
        { id: 22, title: 'Anime 30', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+30' },
        { id: 23, title: 'Anime 31', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+31' },
        { id: 24, title: 'Anime 32', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+32' },
        { id: 25, title: 'Anime 33', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+33' },
        { id: 26, title: 'Anime 34', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+34' },
        { id: 27, title: 'Anime 35', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+35' },
        { id: 28, title: 'Anime 36', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+36' },
        { id: 29, title: 'Anime 37', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+37' },
        { id: 30, title: 'Anime 38', imageUrl: 'https://via.placeholder.com/150x220?text=Anime+38' },
    ];

    return (
        <Container fluid className="p-0">
            <ImageSlide images={images} />
            <section className="recommendations">
                <h2>ดูต่อสำหรับคุณ</h2>
                <div className="anime-list recommended">
                    {recommendedAnime.map((anime) => (
                        <div key={anime.id} className="anime-item">
                            <img src={anime.imageUrl} alt={anime.title} />
                            <p>{anime.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="trending">
                <h2>รายการอนิเมะทั้งหมด</h2>
                <div className="anime-list trending">
                    {trendingAnime.map((anime) => (
                        <div key={anime.id} className="anime-item">
                            <img src={anime.imageUrl} alt={anime.title} />
                            <p>{anime.title}</p>
                        </div>
                    ))}
                </div>
                <Pagination />
            </section>
        </Container>
    );
};

export default Home;