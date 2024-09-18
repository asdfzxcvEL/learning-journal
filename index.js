import { blogs } from "./data.js"

const hero = document.getElementById("hero")
const blogList = document.getElementById("blog-list")

let heroArr = []

function getBlogsHtml() {
    return blogs.map((blog, index) => {
        if (index === 0) {
            heroArr = [`
                <div class="container hero-container">
                    <p class="hero-date">${blog.date}</p>
                    <h1 class="hero-title">${blog.title}</h1>
                    <p class="hero-body">${blog.body}</p>
                </div>
                `, blog.image]
        } else {
            return `
                <div class="blog">
                    <img class="blog-image" src="${blog.image}">
                    <p>${blog.date}</p>
                    <h2>${blog.title}</h2>
                    <p>${blog.body}</p>
                </div>
                `
        }
    }).join('')
}

function getHeroHtml() {
    // hero.style.background = `url(${heroArr[1]})`
    return heroArr[0]
}


function render() {
    blogList.innerHTML = getBlogsHtml()
    hero.innerHTML = getHeroHtml()
}
 
render()