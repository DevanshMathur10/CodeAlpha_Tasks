document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-menu");
    const navList = document.getElementById("nav-list");

    toggleButton.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const addPostButton = document.getElementById("add-post");
//     const blogPostsContainer = document.getElementById("blog-posts");

//     addPostButton.addEventListener("click", function () {
//         addNewBlogPost();
//     });

//     function addNewBlogPost() {
//         const newPost = document.createElement("section");
//         newPost.classList.add("blog-post");
//         newPost.innerHTML = `
//             <h2>New Blog Post Title</h2>
//             <p>Published on <span class="publish-date">${getCurrentDate()}</span></p>
//             <p>This is the content of the new blog post...</p>
//             <button class="remove-post">Remove</button>
//         `;
        
//         const removeButton = newPost.querySelector(".remove-post");
//         removeButton.addEventListener("click", function () {
//             blogPostsContainer.removeChild(newPost);
//         });

//         blogPostsContainer.appendChild(newPost);
//     }

//     function getCurrentDate() {
//         const now = new Date();
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return now.toLocaleDateString(undefined, options);
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const addPostButton = document.getElementById("add-post");
    const blogPostsContainer = document.getElementById("blog-posts");

    addPostButton.addEventListener("click", function () {
        const postTitle = prompt("Enter the title for the new blog post:");
        const postContent = prompt("Enter the content for the new blog post:");
        
        if (postTitle && postContent) {
            addNewBlogPost(postTitle, postContent);
        }
    });

    function addNewBlogPost(title, content) {
        const newPost = document.createElement("section");
        newPost.classList.add("blog-post");
        newPost.innerHTML = `
            <h2>${title}</h2>
            <p>Published on <span class="publish-date">${getCurrentDate()}</span></p>
            <p>${content}</p>
            <button class="remove-post">Remove</button>
        `;
        
        const removeButton = newPost.querySelector(".remove-post");
        removeButton.addEventListener("click", function () {
            blogPostsContainer.removeChild(newPost);
        });

        blogPostsContainer.appendChild(newPost);
    }

    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString(undefined, options);
    }
});
