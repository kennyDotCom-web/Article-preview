let share = document.querySelector ('.share-icon-box')
let comment = document.querySelector ('.comment-container')

share.addEventListener('click', () => {
    comment.classList.toggle('active')
})