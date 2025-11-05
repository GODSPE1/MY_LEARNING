// const fs = require('fs');

// const filepath = 'text.txt';

// const data = fs.readFileSync(filepath, {encoding: 'utf8'});

// console.log(data);

// let sum = 0;
//  for (let i; i < 50; i++) {
//     console.log(i);
    
// //  }
// const posts = [
//    {title: 'Post one', body: 'This is post one'},
//    {title: 'Post two', body: 'This is post two'}
// ]

// function createPost(post, cb) {
//    setTimeout(() => {
//       posts.push(post)
//       cb();
//    }, 1000);
// }

// function  getPost() {
//    setTimeout(() => {
//       posts.forEach((post) => {
//          const div = document.createElement('div');
//          div.innerHTML = `<strong>${post.title} - ${post.body}</strong>`
//          document.querySelector('#posts').appendChild(div);

//       });

//    }, 2000)
// }


// createPost({title: 'Post three', body: 'This is post three'}, getPost);



const xhr = new XMLHttpRequest();

// xhr.open('GET', './movie.json');
xhr.open('GET', 'https://api.github.com/users/GODSPE1/repos');

xhr.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);


      data.forEach((repo) => {
         // const li = document.createElement('li')
         // li.innerHTML = `<strong>${repo.name} - ${repo.description}</strong>`
         // document.querySelector('div').appendChild(li);
      })
   }
}

xhr.send();

