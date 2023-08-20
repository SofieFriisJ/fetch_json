let postContainer = document.querySelector('.post-container')


const postTmpl = (post) => 

    `
    <p><b>${post.author}</b></p>
    <p><i>${post.date}</i></p>
    <p>${post.post}</p>
    <br>
    `;




// Nedenstående (udkommenterede) kode var den måde I lærte at fetche .json data i sidste uge

/* 
fetch('../data/posts.json')
.then(response => response.json()).then( (posts) => {

    posts.forEach((post) => {

        postContainer.insertAdjacentHTML('beforeend', postTmpl(post));
    });

})
 */


// Nedenstående kode er en nyere - og for de fleste en mere letlæselig måde at fetche .json data. Læs en forklaring af koden i readme-filen

async function fetchPosts() {
    try {
        const response = await fetch('../data/posts.json');
        const posts = await response.json();

        posts.forEach((post) => {
            postContainer.insertAdjacentHTML('beforeend', postTmpl(post));
        });
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

fetchPosts();
