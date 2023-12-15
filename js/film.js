const FILMS = {
    sapChieu: [
        {
            poster: 'images/payoff-poster-wish-poster.jpg',
            name: 'ĐIỀU ƯỚC',
            ngayChieu: '07/12/2023'
        },
        {
            poster: 'images/chiem-doat-poster-poster.jpg',
            name: 'CHIẾM ĐOẠT',
            ngayChieu: '08/12/2023'
        },
        {
            poster: 'images/poster-phim-ke-an-hon-se-ra-mat-vao-dau-thang-12-toi-nguon-skyline-media-1698639658343152522573-poster.jpg',
            name: 'KẺ ĂN HỒN',
            ngayChieu: '08/12/2023'
        },
        {
            poster: 'images/posterfilm-wonda.jpg',
            name: 'WONKA',
            ngayChieu: '08/12/2023'
        },
        {
            poster: 'images/bannhau-banmu - poster.jpg',
            name: 'TRÊN BÀN NHẬU DƯỚI BÀN MƯU',
            ngayChieu: '29/12/2023'
        },
        {
            poster: 'images/nguoimt-poster.jpg',
            name: 'NGƯỜI MẶT TRỜI',
            ngayChieu: '18/12/2023'
        },
        {
            poster: 'images/aquaman-poster.jpg',
            name: 'AQUAMAN 2 VÀ VƯƠNG QUỐC THẤT LẠC',
            ngayChieu: '22/12/2023'
        },
        {
            poster: 'images/rsz-dune-2-poster.jpg',
            name: 'DUNE: HÀNH TINH CÁT 2',
            ngayChieu: '15/03/2024'
        },
        {
            poster: 'images/08-kotpota-teaser-4x5-vietnam-poster.jpg',
            name: 'HÀNH TINH KHỈ: VƯƠNG QUỐC MỚI',
            ngayChieu: '24/05/2024'
        }
    ],
    dangChieu: [
        {
            poster: 'images/nvcc_poster.jpg',
            name: 'NGƯỜI VỢ CUỐI CÙNG',
            ngayChieu: '03/11/2023'
        },
        {
            poster: 'images/datphuongnam-poster.jpg',
            name: 'ĐẤT RỪNG PHƯƠNG NAM',
            ngayChieu: '20/10/2023'
        },
        {
            poster: 'images/yeulaivongau-poster.jpg',
            name: 'YÊU LẠI VỢ NGẦU',
            ngayChieu: '10/11/2024'
        },
        {
            poster: 'images/themarvel-poster.png',
            name: 'THE MARVEL',
            ngayChieu: '10/11/2024'
        },
        {
            poster: 'images/poster-payoff-1-poster.jpg',
            name: 'ĐẤU TRƯỜNG SINH TỬ: KHÚC HÁT CỦA CHIM CA VÀ RẮN ĐỘC',
            ngayChieu: '17/11/2023'
        },
        {
            poster: 'images/posterfilm-quylun.jpg',
            name: 'QUỶ LÙN TINH NGHỊCH: ĐỒNG TÂM HIỆP NHẠC',
            ngayChieu: '17/11/2023'
        }
    ],
    suatChieuDB: [
        {
            poster: 'images/payoff-poster-wish-poster.jpg',
            name: 'ĐIỀU ƯỚC',
            ngayChieu: '02/12/2023'
        },
        {
            poster: 'images/chiem-doat-poster-poster.jpg',
            name: 'CHIẾM ĐOẠT',
            ngayChieu: '02/12/2023'
        },
        {
            poster: 'images/poster-phim-ke-an-hon-se-ra-mat-vao-dau-thang-12-toi-nguon-skyline-media-1698639658343152522573-poster.jpg',
            name: 'KẺ ĂN HỒN',
            ngayChieu: '04/12/2023'
        }
    ]
}

const filmGrid = document.querySelector('.film-grid')
const btnPhimDangChieu = document.querySelector('.phimdangchieu')
const btnPhimSapChieu = document.querySelector('.phimsapchieu')
const btnSuatChieuDB = document.querySelector('.suatchieudb')

const renderFilms = (type) => {
    const filmElements = FILMS[type].map(
        (film) => `
        <div class="film-poster">
            <div class="poster-wrapper">
                <div class="poster-flip">
                    <a href="film-detail.html" class="detail-btn">
                        Chi tiết
                    </a>
                    <a href="muave.html" class="buy-now-btn">
                        Mua vé
                        <img src="images/ticket.png" alt=""/>
                    </a>
                    <p>Thời lượng: <span>90 phút</span></p>
                    <p>
                        Thể loại: <span>Hành động, hài hước</span>
                    </p>
                    <p>Định dạng: <span>2D</span></p>
                </div>
                <img src="${film.poster}" alt="">
            </div>
            <p><a href="film-detail.html">${film.name}</a></p>
            <p>khởi chiếu: ${film.ngayChieu}</p>
        </div>
    `
    )
    filmGrid.innerHTML = filmElements.join('')
}

btnPhimDangChieu.addEventListener('click', () => {
    btnPhimDangChieu.classList.add('active')
    btnPhimSapChieu.classList.remove('active')
    btnSuatChieuDB.classList.remove('active')

    renderFilms('dangChieu')
})

btnPhimSapChieu.addEventListener('click', () => {
    btnPhimSapChieu.classList.add('active')
    btnPhimDangChieu.classList.remove('active')
    btnSuatChieuDB.classList.remove('active')

    renderFilms('sapChieu')
})

btnSuatChieuDB.addEventListener('click', () => {
    btnSuatChieuDB.classList.add('active')
    btnPhimDangChieu.classList.remove('active')
    btnPhimSapChieu.classList.remove('active')

    renderFilms('suatChieuDB')
})

btnPhimDangChieu.click()
