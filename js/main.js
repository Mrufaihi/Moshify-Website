// var collaspsibles : refrence currect page and select all css classes with ".collapsible"
const collapsibles = document.querySelectorAll(".collapsible");
// iterate each item in collapsibles css class
collapsibles.forEach((item) =>
  // check each item if a "click" happens and then add a function
  item.addEventListener("click", function () {
    /* this function toggles each time "click" occurs, 
    and adds the class "collapsible--expanded" to each item clicked */
    this.classList.toggle("collapsible--extended");
  })
);
