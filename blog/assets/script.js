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
      <div class="tags">${post.tags.map(tag => `<span>${tag}</span>`).join(' ')}</div>
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
        <div style="margin-top: 20px;">
          <button id="like-btn" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 8px;">👍 Like</button>
          <span id="like-count" style="margin-left: 10px;"></span>
          

      `;

      // Reload Cusdis
      if (window.Cusdis) {
        window.Cusdis.renderCusdis();
      }

      setupLikeButton(slug);
      document.getElementById('comment-btn').onclick = () => {
        document.getElementById('cusdis_thread').scrollIntoView({ behavior: 'smooth' });
      };
    });
}

function setupLikeButton(slug) {
  const likeBtn = document.getElementById('like-btn');
  const likeCountSpan = document.getElementById('like-count');

  const storageKey = `blog-like-${slug}`;
  const liked = localStorage.getItem(storageKey) === 'true';

  // Dummy initial count (replace with server-side in future)
  let count = parseInt(localStorage.getItem(`like-count-${slug}`) || '0');
  likeCountSpan.textContent = `${count} like${count !== 1 ? 's' : ''}`;

  if (liked) {
    likeBtn.disabled = true;
    likeBtn.innerText = '✅ Liked';
  }

  likeBtn.addEventListener('click', () => {
    if (!localStorage.getItem(storageKey)) {
      count++;
      likeCountSpan.textContent = `${count} like${count !== 1 ? 's' : ''}`;
      localStorage.setItem(storageKey, 'true');
      localStorage.setItem(`like-count-${slug}`, count);
      likeBtn.disabled = true;
      likeBtn.innerText = '✅ Liked';
    }
  });
}
