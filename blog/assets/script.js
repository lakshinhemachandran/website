const postsContainer = document.getElementById('posts');
const postContent = document.getElementById('post-content');
const searchInput = document.getElementById('search');

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const url = new URL(window.location.href);
    const slug = url.searchParams.get('post');

    if (slug) {
      loadPost(slug);
    } else {
      renderPosts(posts);

      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.tags.join(' ').toLowerCase().includes(searchTerm) ||
          post.description.toLowerCase().includes(searchTerm)
        );
        renderPosts(filteredPosts);
      });
    }
  });

function renderPosts(posts) {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postCard = document.createElement('a');
    postCard.href = `?post=${post.slug}`;
    postCard.className = 'post';
    postCard.innerHTML = `
      <h2>${post.title}</h2>
      <div class="tags">
        ${post.tags.map(tag => `<span>${tag}</span>`).join(' ')}
      </div>
      <p>${post.description}</p>
      <small>${post.date}</small>
    `;
    postsContainer.appendChild(postCard);
  });
}

function loadPost(slug) {
  postsContainer.style.display = 'none';
  searchInput.style.display = 'none';
  fetch(`posts/${slug}.md`)
    .then(res => res.text())
    .then(markdown => {
      postContent.style.display = 'block';
      postContent.innerHTML = `
        <a id="back" href="/blog/">← Back to blog</a>
        <div>${marked.parse(markdown)}</div>
      `;
    });
}
