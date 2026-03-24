export const savePosts = (posts) => {
    localStorage.setItem('gaur-posts', JSON.stringify(posts))
}

//posts loading from local storage

export const loadPosts = () => {
    const saved = localStorage.getItem('gaur-posts')
    return saved ? JSON.parse(saved) : null
}