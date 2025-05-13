import React, { useState } from 'react';
import './Pagination.css'; // นำเข้าฟล์ CSS

function Pagination() {
    const totalPages = 400;
    const maxVisiblePages = 5; // จำนวนหน้าที่ต้องการให้แสดง
    const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน

    // สร้างอาเรย์ของหน้าที่ต้องการแสดงใน Pagination (ตั้งแต่หน้าที่ 1 ถึงหน้าที่ 400)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    // คำนวณหน้าที่เริ่มต้นและสิ้นสุดของรายการหน้าที่จะแสดง
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // สร้างอาเรย์ของหน้าที่จะแสดงจริงๆ
    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <nav aria-label="Page navigation example">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                {/* เพิ่มข้อความจำนวนหน้าทั้งหมดทางซ้ายมือของแถบ */}
                <div className="total-pages mb-2 mb-sm-0">
                    <span className="page-link">Total Pages: {totalPages}</span>
                </div>
                <ul className="pagination pagination-md mb-0"> {/* เปลี่ยนจาก pagination-sm เป็น pagination-lg */}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous" onClick={() => handleClick(Math.max(currentPage - 1, 1))}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {/* เพิ่มเงื่อนไขการแสดง "..." หากไม่แสดงหน้าแรก */}
                    {startPage > 1 && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => handleClick(startPage - 1)}>...</a>
                        </li>
                    )}
                    {/* สร้างลิงก์ของหน้าที่แสดงอยู่ */}
                    {visiblePages.map((page, index) => (
                        <li key={index} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                            <a className="page-link" href="#" onClick={() => handleClick(page)}>{page}</a>
                        </li>
                    ))}
                    {/* เพิ่มเงื่อนไขการแสดง "..." หากไม่แสดงหน้าสุดท้าย */}
                    {endPage < totalPages && (
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => handleClick(endPage + 1)}>...</a>
                        </li>
                    )}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next" onClick={() => handleClick(Math.min(currentPage + 1, totalPages))}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Pagination;