// LOGIC PHẦN HIỂN THỊ NGÀY
let today = document.querySelector('#today')
let tomorrow = document.querySelector('#tomorrow')

const renderDate = function (_date) {
    return {
        month: _date.getMonth() + 1,
        date: _date.getDate(),
        year: _date.getFullYear(),
        day: _date.getDay()
    }
}

const toString = (dateObj, label) => {
    const DATES = {
        0: 'Chủ nhật',
        1: 'Thứ hai',
        2: 'Thứ ba',
        3: 'Thứ tư',
        4: 'Thứ năm',
        5: 'Thứ sáu',
        6: 'Thứ bảy'
    }

    return label
        ? `${label}, ${dateObj.date}/${dateObj.month}`
        : `${DATES[dateObj.day]}, ${dateObj.date}/${dateObj.month}`
}

const _today = new Date()
today.innerText = toString(renderDate(_today), 'Hôm nay')

let _tomorrow = new Date()
_tomorrow.setDate(_today.getDate() + 1)
tomorrow.innerText = toString(renderDate(_tomorrow))

// LOGIC PHẦN HIỂN THỊ GIỜ
const todayAvaibleShowingTimes = document.querySelectorAll(
    '.lichieu-homnay:nth-child(2) .lichchieu-item'
)
const renderItems = () => {
    todayAvaibleShowingTimes.forEach(function (item) {
        const time = item.querySelector('p').innerText.split(':')
        const now = new Date()
        const hour = now.getHours()
        const minute = now.getMinutes()
        if (
            hour > Number(time[0]) ||
            (hour == Number(time[0]) && minute > Number(time[1]))
        ) {
            item.classList.add('passed')
        }
    })
}

// LOGIC PHẦN CHỌN SAO
const starItems = document.querySelectorAll('.star-rank-item')
let currentStar = 10
starItems.forEach((item) => {
    item.addEventListener('click', function () {
        document
            .querySelector('.star-rank-item.active')
            ?.classList.remove('active')
        this.classList.add('active')
        currentStar = Number(this.innerText)
    })
})

// LOGIC PHẦN HIỂN THỊ COMMENTS
const COMMENTS = [
    {
        avatar: 'images/avt-quan.jpg',
        name: 'Tui là Quân nè',
        date: '02/11/2023',
        rating: 10,
        review: 'Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.',
        likes: '2.9k',
        comments: '10'
    },
    {
        avatar: 'images/avt_Ly.jpg',
        name: 'LyLy',
        date: '10/11/2023',
        rating: 5,
        review: 'Cũng được được, ổn ổn, 5đ',
        likes: '5k',
        comments: '100'
    },
    {
        avatar: 'images/avt_todi.jpg',
        name: 'Tô Di',
        date: '02/11/2023',
        rating: 3,
        review: 'Cũng ổn, nhưng hôm nay chị đói chị cộc nên 3 điểm đủ r',
        likes: '7.9k',
        comments: '320'
    },
    {
        avatar: 'images/avt_vu.png',
        name: 'Lươn Vũ',
        date: '07/11/2023',
        rating: 4,
        review: 'Phim hay đó, kịch tính nên a cho 4đ :))',
        likes: '4.7k',
        comments: '69'
    },
    {
        avatar: 'images/avt_quynh.jpg',
        name: 'Quỳnh',
        date: '02/11/2023',
        rating: 8,
        review: 'Mình ít khi xem phim Việt Nam. Trước khi xem mình ko đọc review hay bình luận gì về phim, có nghe ox nói phim này bị chê nhiều. Nhưng sau khi xem xong mình đánh giá đây là 1 bộ phim rất dở.',
        likes: '10.9k',
        comments: '1024'
    },
    {
        avatar: 'images/dv-thuannguyen.webp',
        name: 'Hải Nam',
        date: '11/11/2023',
        rating: 8,
        review: 'Phim như 1 định hải thần trâm mang đầy ý nghĩa và nhân văn giáng vào lòng e. Xem phim xong e chả rút ra đc gì cả :((',
        likes: '3k',
        comments: '120'
    }
]
const EMO = {
    1: 'Phí tiền!',
    2: 'Rất tệ!',
    3: 'Nhạt nhẽo!',
    4: 'Chưa ưng!',
    5: 'Tàm tạm!',
    6: 'Bình thường!',
    7: 'Khá ổn!',
    8: 'Hay!',
    9: 'Xuất sắc!',
    10: 'Cực phẩm!'
}

const commentsHolder = document.querySelector('.danhgia-body-wrapper')
const viewMoreBtn = document.querySelector('.xemthembinhluan')
const postCommentBtn = document.querySelector('.guibinhluan')

const authorAvatar = document.querySelector('.myself-danhgia .avt img')
const authorReview = document.querySelector('#comment-box')

let isViewMore = false
let filteredRate = 0

const renderComments = () => {
    let filteredCmts = COMMENTS.filter((cmt) => {
        if (filteredRate > 0) {
            return cmt.rating === filteredRate
        } else {
            return true
        }
    })
    let commentsToShow = isViewMore ? filteredCmts : filteredCmts.slice(0, 3)

    const commentsHTML = commentsToShow.map(
        (comment) => ` 
        <div class="danhgia-canhan-frame">
            <div class="avt-ten-ngay">
                <div class="avt">
                    <img src="${comment.avatar}" alt="">
                </div>
                <div class="ten-ngay">
                    <span class="ten">${comment.name}</span>
                    <span>${comment.date}</span>
                </div>
            </div>
            <div class="danhgia-canhan">
                <div class="starscore-canhan">
                    <i class="fa-solid fa-star" style="color: #f8d65a;"></i>
                    <p>${comment.rating}/10 ${EMO[comment.rating ?? '']}</p>
                </div>
                <p>${comment.review}</p>
            </div>
            <div class="icon-and-note">
                <div class="icon-danhgia">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <p class="note-icon">${comment.likes} tim, ${
            comment.comments
        } bình luận</p>
            </div>
        </div>
    `
    )

    commentsHolder.innerHTML = commentsHTML.join('')
}

viewMoreBtn.addEventListener('click', function () {
    isViewMore = !isViewMore
    this.innerText = isViewMore ? 'Ẩn bớt' : 'Xem thêm'
    renderComments()
})

postCommentBtn.addEventListener('click', function () {
    if (authorReview.value.trim() === '') return
    const todayDateObj = renderDate(_today)
    const newComment = {
        avatar: authorAvatar.src,
        name: 'LyLy',
        date: `${`0${todayDateObj.date}`.slice(
            -2
        )}/${`0${todayDateObj.month}`.slice(-2)}/${todayDateObj.year}`,
        rating: currentStar,
        review: authorReview.value.trim(),
        likes: '0',
        comments: '0'
    }

    COMMENTS.unshift(newComment)
    authorReview.value = ''
    loadAvailableOptions()
    renderComments()
})

// LOGIC PHẦN LỌC BÌNH LUẬN
const ratePicker = document.querySelector('.filter-danhgia-btn select')

const loadAvailableOptions = () => {
    ratePicker.innerHTML = '<option value="0">Lọc theo điểm</option>'
    const availableOptions = [...new Set(COMMENTS.map((cmt) => cmt.rating))]
    availableOptions.sort((a, b) => a - b)

    availableOptions.forEach((opt) => {
        ratePicker.innerHTML =
            ratePicker.innerHTML + `<option value="${opt}">${opt}</option>`
    })

    filteredRate = 0
}

ratePicker.addEventListener('change', function () {
    const currentPick = Number(this.value)
    filteredRate = currentPick > 0 ? currentPick : 0
    renderComments()
})

window.addEventListener('load', () => {
    renderComments()
    loadAvailableOptions()
    setInterval(renderItems, 60000)
    renderItems()
})
