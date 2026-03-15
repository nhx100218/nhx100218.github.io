var posts=["2026/03/15/office/","2026/02/13/pg11/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };