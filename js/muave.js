const availableSeats = document.querySelectorAll('.grid-item:not(.skip)')
const selectedSeatsHolder = document.querySelector('.seat')
const bookBtn = document.querySelector('.button-thanhtoan')
const seatnum = document.querySelector('#seat-num')
const gheThuongcount = document.querySelector('#gheThuong-count')
const gheDoicount = document.querySelector('#gheDoi-count')
const gheThuongprice = document.querySelector('#gheThuong-price')
const gheDoiprice = document.querySelector('#gheDoi-price')
const totalPrice = document.querySelector('#total-price')

// Toggle selected state
availableSeats.forEach((seat) => {
    seat.innerText = seat.dataset.column

    seat.addEventListener('click', function () {
        if (this.classList.contains('booked')) return

        seat.classList.toggle('selected')
        showSelectedSeats()
    })
})

// Book seats
const payment = document.querySelector('.payment-container')
const container_booking = document.querySelector('.container-booking')
const done_payment = document.querySelector('.done-payment')

const currencyFormatter = (money) =>
    new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(money)

const SINGLE_SEAT_PRICE = 50000
const COUPLE_SEAT_PRICE = 105000
let singleSeats = 0
let coupleSeats = 0

const showSelectedSeats = () => {
    singleSeats = 0
    coupleSeats = 0

    let selectedSeatsHTML = ''

    const selectedSeats = document.querySelectorAll(
        '.grid-item.selected:not(.booked)'
    )

    // Render selected seats in form
    selectedSeats.forEach((seat) => {
        selectedSeatsHTML += `<div class="seat-item"><span>${
            seat.dataset.row + seat.dataset.column
        }</span></div>`

        if (seat.dataset.couple === '1') {
            coupleSeats += 1
        } else {
            singleSeats += 1
        }
    })

    selectedSeatsHolder.innerHTML = selectedSeatsHTML
    seatnum.innerText = `${singleSeats + coupleSeats} ghế`
    gheThuongcount.innerText = singleSeats || '-'
    gheDoicount.innerText = coupleSeats || '-'
    gheThuongprice.innerText = currencyFormatter(
        singleSeats * SINGLE_SEAT_PRICE
    )
    gheDoiprice.innerText = currencyFormatter(coupleSeats * COUPLE_SEAT_PRICE)
    totalPrice.innerText = currencyFormatter(
        singleSeats * SINGLE_SEAT_PRICE + coupleSeats * COUPLE_SEAT_PRICE
    )
}

bookBtn.addEventListener('click', function () {
    if (singleSeats == 0 && coupleSeats == 0) {
        confirm('Vui lòng chọn ghế')
    } else {
        const selectedSeats = document.querySelectorAll(
            '.grid-item.selected:not(.booked)'
        )
        const agree = confirm('Bạn đồng ý thanh toán?')
        if (agree) {
            payment.style.display = 'block'
            container_booking.style.display = 'none'
        }
        const ghethuonghd = document.querySelector('.ghethuong_hd')
        const ghedoihd = document.querySelector('.ghedoi_hd')
        const tonghd = document.querySelector('.tong_hd')
        ghethuonghd.innerText = singleSeats
        ghedoihd.innerText = coupleSeats
        tonghd.innerText = currencyFormatter(
            singleSeats * SINGLE_SEAT_PRICE + coupleSeats * COUPLE_SEAT_PRICE
        )
        done_payment.addEventListener('click', function () {
            alert('Mua vé thành công!\nChúng tôi sẽ gửi thông tin vé đã đặt về email của quý khách.\nXin quý khách vui lòng kiểm tra email!')
            container_booking.style.display = 'flex'
            payment.style.display = 'none'
            selectedSeats.forEach((seat) => seat.classList.add('booked'))
            singleSeats = 0
            coupleSeats = 0
            showSelectedSeats()
        })
    }
})
