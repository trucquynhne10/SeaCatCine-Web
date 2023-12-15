$(document).ready(function () {
    $('.danh-sach-phim').slick({
        slidesToShow: 4,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow'></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow'></button>"
    })
})

$(document).ready(function () {
    $('.phim-hot').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true
    })
})

$(document).ready(function () {
    $('.khuyen-mai').slick({
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true
    })
})

const listItems_chonphim = document.querySelectorAll('.dat-ve-01 li')

listItems_chonphim.forEach((item) => {
    item.addEventListener('click', () => {
        const clickedContent = item.innerHTML

        // Gán nội dung vào phần tử <p> trong .datve-item-sub
        const output = document.querySelector('.chonphim')
        output.textContent = clickedContent
        output.dataset.choice = clickedContent
        redirectUserIfChoseAll()
    })
})

const listItems_chonngay = document.querySelectorAll('.dat-ve-02 li')

listItems_chonngay.forEach((item) => {
    item.addEventListener('click', () => {
        const clickedContent = item.innerHTML

        // Gán nội dung vào phần tử <p> trong .datve-item-sub
        const output = document.querySelector('.chonngay')
        output.textContent = clickedContent
        output.dataset.choice = clickedContent
        redirectUserIfChoseAll()
    })
})

const listItems_chonrap = document.querySelectorAll('.dat-ve-03 li')

listItems_chonrap.forEach((item) => {
    item.addEventListener('click', () => {
        const clickedContent = item.innerHTML

        // Gán nội dung vào phần tử <p> trong .datve-item-sub
        const output = document.querySelector('.chonrap')
        output.textContent = clickedContent
        output.dataset.choice = clickedContent
        redirectUserIfChoseAll()
    })
})

const listItems_chonsuatchieu = document.querySelectorAll('.dat-ve-04 li')

listItems_chonsuatchieu.forEach((item) => {
    item.addEventListener('click', () => {
        const clickedContent = item.innerHTML

        // Gán nội dung vào phần tử <p> trong .datve-item-sub
        const output = document.querySelector('.chonsuatchieu')
        output.textContent = clickedContent
        output.dataset.choice = clickedContent
        redirectUserIfChoseAll()
    })
})

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
    }
]

const danhgia_sub = document.querySelector('.danh-gia-phim')
const renderFilms = (type) => {
    const filmElement = FILMS.map(
        (film) => `
        <div class="danh-gia-phim-item">
            <div>
                <img src="${film.img}" alt="">
            </div>
            <div class = "danhgiaphim-content-read ">
            <a href="danhgiaphim.html"><p class = "title">${film.title}</p></a>
            <span>${film.content}</span>
            </div>
        </div>
    `
    )

    danhgia_sub.innerHTML = filmElement.join('')
}
renderFilms()

const redirectUserIfChoseAll = () => {
    const isFull = [...document.querySelectorAll('.picker')].every(
        (el) => el.dataset.choice != undefined
    )
    if (isFull) window.location.href = 'muave.html'
}


const khuyenmai = document.querySelectorAll('.khuyen-mai-item')

khuyenmai.forEach((item) => {
    item.addEventListener('click', () => {
        window.location.href = 'khuyenmai.html'
    })
})