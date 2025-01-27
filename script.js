const username = '5ee5'; // Replace with your GitHub username
const repoList1 = document.getElementById('repo-list-1');
const repoList2 = document.getElementById('repo-list-2');

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const half = Math.ceil(repos.length / 2);
    const firstHalf = repos.slice(0, half);
    const secondHalf = repos.slice(half);

    firstHalf.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      link.textContent = repo.name;
      listItem.appendChild(link);
      repoList1.appendChild(listItem);
    });

    secondHalf.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      link.textContent = repo.name;
      listItem.appendChild(link);
      repoList2.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching repos:', error));