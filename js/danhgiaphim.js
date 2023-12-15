const FILMS = [
    {
        title: 'REVIEW PHIM CON LẮC TÀ THUẬT – THE HYPNOSIS',
        content:
            'Vài năm trở lại đây điện ảnh Hàn Quốc ngày càng cho ra đời nhiều bộ phim kinh dị chất lượng, và Con lắc tà thuật – The Hypnosis là tác phẩm mới...',
        img: 'images/reviewpic1.jpg'
    },
    {
        title: 'REVIEW PHIM SEOBOK (NGƯỜI NHÂN BẢN) – VÌ SAO CON NGƯỜI LUÔN SỢ HÃI TRƯỚC CÁI CHẾT?',
        content:
            'Nhiều tuần liền thống trị bảng xếp hạng phòng vé Hàn Quốc, Seobok (Người nhân bản) đang là tác phẩm ăn khách nhất tại xứ sở kim chi thời điểm này. Đến...',
        img: 'images/reviewpic2.jpg'
    },
    {
        title: 'REVIEW PHIM THÁM TỬ LỪNG DANH CONAN: VIÊN ĐẠN ĐỎ - HẤP DẪN MIỄN CHÊ',
        content:
            'Sự trở lại của anh chàng thám tử nhí Conan khiến các tín đồ của bộ manga này vô cùng phấn khích. Đặc biệt hơn trong Thám tử lừng danh Conan:...',
        img: 'images/reviewpic4.png'
    },
    {
        title: 'REVIEW PHIM LẬT MẶT: 48H - LÝ HẢI "ĐỈNH CỦA CHÓP" LUÔN',
        content:
            'Ngày ra mắt đầu tiên của Lật mặt: 48h đã chính thức có mặt tại Touch Cinema vào ngày 14/4. Chỉ sau những suất chiếu đầu tiên, khán giả đã dành...',
        img: 'images/reviewpic5.jpg'
    },
    {
        title: 'REVIEW PHIM NÀO MÌNH CÙNG MƠ – VUI VẺ, NHẸ NHÀNG',
        content:
            'Trong số những bộ phim đang có mặt tại Touch Cinema thời điểm này,  chỉ có duy nhất Nào mình cùng mơ (Dreambuilders) là dành cho các bạn nhỏ tuổi.',
        img: 'images/reviewpic6.png'
    }
]

const danhgia_sub = document.querySelector('.danhgia-dashed')
const renderFilms = (type) => {
    const filmElement = FILMS.map(
        (film) => `
        <div class="danhgia-sub">
            <div class="danhgia-phimposter">
                <img src="${film.img}" alt="">
            </div>
            <div class="danhgia-nd">
                <p class = "title">${film.title}</p>
                ${film.content}
            </div>
        </div>
    `
    )

    danhgia_sub.innerHTML = filmElement.join('')
}
renderFilms()
