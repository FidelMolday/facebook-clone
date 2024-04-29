let markReadBtn = document.getElementById('mark-read-btn')
let cards = document.querySelectorAll('.notification-card')
let notificationCount = document.getElementById('notification-count').querySelector('h2').querySelector('span')
let notifications = document.getElementById('notifications')

let filteredCards = []
let unreadNotiCount = document.getElementById('notification-count').querySelector('h2').querySelector('span').innerText
unreadNotiCount = Number(unreadNotiCount)

cards.forEach((card) => {
    if(card.classList.contains('unread')) {
        filteredCards.push(card)
    }
})

markReadBtn.addEventListener('click', () => {
    notificationCount.innerText = 0
    filteredCards.forEach((card) => {
        if(card.classList.contains('unread')) {
            card.classList.remove('unread')
        }
    })
})

filteredCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.remove('unread')
        unreadNotiCount--
        notificationCount.innerText = unreadNotiCount
    })
})
 // Function to toggle the dropdown menu
 function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
  }