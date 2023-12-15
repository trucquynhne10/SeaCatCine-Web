// LOGIC HIỂN THỊ FILMS
const LICHCHIEU = [
    {
        poster: 'images/nvcc_poster.jpg',
        name: 'NGƯỜI VỢ CUỐI CÙNG',
        engName: 'the last wife',
        ngayChieu: [3, 11],
        timeDuration: 132,
        typeofFilm: ['Tâm lý', 'Tình cảm'],
        director: 'Victor Vũ',
        filmTime: [
            '9:25',
            '10:20',
            '12:40',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: '18+'
    },
    {
        poster: 'images/datphuongnam-poster.jpg',
        name: 'ĐẤT RỪNG PHƯƠNG NAM',
        ngayChieu: [20, 10],
        engName: ' Song of the South',
        ngayChieu: [20, 10],
        timeDuration: 132,
        typeofFilm: ['Tâm lý', 'Sử thi', 'Chính kịch'],
        director: 'Trương Quang Dũng',
        filmTime: [
            '9:25',
            '10:20',
            '12:40',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: 'P'
    },
    {
        poster: 'images/yeulaivongau-poster.jpg',
        name: 'YÊU LẠI VỢ NGẦU',
        ngayChieu: [10, 11],
        engName: 'LOVE RESET',
        ngayChieu: [8, 11],
        timeDuration: 119,
        typeofFilm: ['Hài hước', 'Tình cảm'],
        director: 'Nam Dae-jung',
        filmTime: [
            '9:25',
            '10:20',
            '12:40',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: '16+'
    },
    {
        poster: 'images/themarvel-poster.png',
        name: 'THE MARVEL',
        ngayChieu: '10/11/2024',
        engName: 'THE MARVEL',
        ngayChieu: [10, 11],
        timeDuration: 157,
        typeofFilm: ['Hành động'],
        director: 'Nia DaCosta',
        filmTime: [
            '9:25',
            '10:20',
            '12:40',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: 'P'
    },
    {
        poster: 'images/poster-payoff-1-poster.jpg',
        name: 'ĐẤU TRƯỜNG SINH TỬ: KHÚC HÁT CỦA CHIM CA VÀ RẮN ĐỘC',
        ngayChieu: '17/11/2023',
        engName: 'THE HUNGER GAMES: THE BALLAD OF SONGBIRDS AND SNAKES',
        ngayChieu: [3, 11],
        timeDuration: 132,
        typeofFilm: ['Tâm lý', 'Tình cảm'],
        director: 'Victor Vũ',
        filmTime: [
            '9:25',
            '10:20',
            '12:40',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: '16+'
    },
    {
        poster: 'images/posterfilm-quylun.jpg',
        name: 'QUỶ LÙN TINH NGHỊCH: ĐỒNG TÂM HIỆP NHẠC',
        ngayChieu: [17, 11],
        engName: 'TROLLS BAND TOGETHER',
        timeDuration: 132,
        typeofFilm: ['Tâm lý', 'Tình cảm'],
        director: 'Victor Vũ',
        filmTime: [
            '9:25',
            '10:20',
            '11:41',
            '14:30',
            '15:50',
            '17:40',
            '19:10',
            '21:50',
            '23:20'
        ],
        age: 'P'
    }
]

let isTodaySelected = true
const lichfilm_container = document.querySelector('.lichPhim-container')
const getTimeTags = (timeArray, currentHour, currentMinute) => {
    const timeElements = timeArray.map((_time) => {
        const time = _time.split(':')
        const hour = Number(time[0])
        const min = Number(time[1])
        const isPassed =
            currentHour > hour || (currentHour === hour && currentMinute > min)

        return `
        <div class="phimTime-item ${
            isPassed && isTodaySelected ? 'passed' : ''
        }">  <a href="muave.html" style="pointer-events: ${
            isPassed && isTodaySelected ? 'none' : 'auto'
        }">
            ${_time}
            </a>
        </div>
    `
    })
    return timeElements.join('')
}

const renderFilms = (type) => {
    const now = new Date()
    const filmElement = LICHCHIEU.map(
        (film) => `
        <div class="lichPhim-item">
            <div class="film-poster"><img src="${film.poster}"></div>
            <div class="lichPhim-info">
                <div class="film-title">
                    <h2>${film.name}</h2>
                    <span class="title-upercase">${film.engName}</span>
                </div>
                
                <div class="lichPhim-info-icon">
                    <div class="film-duration">
                        <i class="fa-solid fa-clock"></i>
                        <span class="element-item">Thời lượng:</span>
                        <span> ${film.timeDuration}p</span>
                    </div>
                    <div class="theLoai">
                        <i class="fa-solid fa-list"></i>
                        <span class="element-item">Thể loại:</span>
                        <span>${film.typeofFilm.join(', ')}</span>
                    </div>
                    <div class="daodien">
                        <i class="fa-solid fa-user-tie"></i>
                        <span class="element-item"> Đạo diễn:</span>
                        <span>${film.director}</span>
                    </div>
                </div>
                <div class="phimTime">
                    ${getTimeTags(
                        film.filmTime,
                        now.getHours(),
                        now.getMinutes()
                    )}
                </div>
                <div class="age">
                    ${film.age}
                </div>
                <div class="ngaychieu">
                    <span class="ngaychieu-ngay">${film.ngayChieu[0]}</span>
                    <hr>
                    <span>${film.ngayChieu[1]}</span>
                </div>
            </div>
        </div>
    `
    )

    lichfilm_container.innerHTML = filmElement.join('')
}

setInterval(renderFilms, 60000)
renderFilms()

// LOGIC HIỂN THỊ NGÀY
const DATES = {
    0: 'Chủ nhật',
    1: 'Thứ hai',
    2: 'Thứ ba',
    3: 'Thứ tư',
    4: 'Thứ năm',
    5: 'Thứ sáu',
    6: 'Thứ bảy'
}

const renderDate = (_date) => {
    return {
        month: _date.getMonth() + 1,
        date: _date.getDate(),
        year: _date.getFullYear(),
        day: _date.getDay()
    }
}

const today_lich = document.querySelectorAll('.today-item-lich')
today_lich.forEach((item) => {
    item.addEventListener('click', function () {
        today_lich.forEach((_item) => _item.classList.remove('active'))
        this.classList.add('active')
        isTodaySelected = this.dataset.date == '0'
        renderFilms()
    })

    const today = new Date()
    const dateToRender = new Date()
    dateToRender.setDate(today.getDate() + Number(item.dataset.date))
    const dateObj = renderDate(dateToRender)

    const thu = item.querySelector('.Thu')
    const ngay = item.querySelector('.Ngay')
    const thang = item.querySelector('.Thang')

    thu.innerText = item.dataset.label ?? DATES[dateObj.day]
    ngay.innerText = `0${dateObj.date}`.slice(-2)
    thang.innerText = `Tháng ${dateObj.month}`
})
