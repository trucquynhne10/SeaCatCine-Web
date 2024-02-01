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

const redirectUserIfChoseAll = () => {
    const isFull = [...document.querySelectorAll('.picker')].every(
        (el) => el.dataset.choice != undefined
    )
    const submitButton = document.getElementById('submitbtn');
    if (isFull) submitButton.addEventListener('click', () => {
        window.location.href = 'muave-book.html';
    });
}