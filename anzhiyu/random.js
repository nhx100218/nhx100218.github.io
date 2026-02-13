var posts=["2025/06/06/zkandby/","2026/02/13/hello-world/","2025/12/21/This program cannot be run in DOS mode./","2025/06/19/2/","2025/06/14/zkzk/","2025/06/08/Level ML-33 只是钢管大厦而已/","2025/06/04/n3/","2025/06/04/n2/","2025/05/18/xiao/","2025/05/02/2025/","2025/05/01/汪五一生日快乐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };