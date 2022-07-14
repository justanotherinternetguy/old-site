var intro = document.getElementById("intro");

var typewriter_intro = new Typewriter(intro, {
  loop: true,
  cursor: "_",
});

typewriter_intro
  .typeString("Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Designer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Student")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Creator")
  .pauseFor(1000)
  .deleteAll()
  .start();
/****************************************************************/
var projects = document.getElementById("projects");

var typewriter_proj = new Typewriter(projects, {
  cursor: "_",
});

typewriter_proj
  .typeString("Probably copying from stackoverflow again...")
  .start();

/****************************************************************/
var blog = document.getElementById("blog");

var typewriter_blog = new Typewriter(blog, {
  cursor: "_",
});

typewriter_blog.typeString("Listen to my opinion").start();

/****************************************************************/
var list = document.getElementById("list");

var typewriter_list = new Typewriter(list, {
  cursor: "_",
});

typewriter_list.typeString("Cheatsheets 'n stuff'").start();

/****************************************************************/
var arch = document.getElementById("archive");

var typewriter_arch = new Typewriter(arch, {
  cursor: "_",
});

typewriter_arch.typeString("Old stuff").start();

/****************************************************************/

AOS.init();
