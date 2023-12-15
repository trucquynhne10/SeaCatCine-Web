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
bookBtn.addEventListener('click', function () {
    const selectedSeats = document.querySelectorAll(
        '.grid-item.selected:not(.booked)'
    )
    const agree = confirm('Bạn đồng ý thanh toán?')
    if (agree) {
        selectedSeats.forEach((seat) => seat.classList.add('booked'))
        showSelectedSeats()
    }
})

const currencyFormatter = (money) =>
    new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(money)

const SINGLE_SEAT_PRICE = 50000
const COUPLE_SEAT_PRICE = 105000

const showSelectedSeats = () => {
    let selectedSeatsHTML = ''
    let singleSeats = 0
    let coupleSeats = 0

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
