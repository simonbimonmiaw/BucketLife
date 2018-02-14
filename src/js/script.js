var example1 = new Vue({
  el: '#app',
  data: {
    inspiration: [
      {
        "name":"usa",
        "tagline": "Travel to the USA"
      },
      {
        "name":"ride",
        "tagline": "Ride a horse"
      },
      {
        "name":"drive",
        "tagline": "Learn to drive"
      },
      {
        "name":"paintball",
        "tagline": "Shoot your friend in the ass"
      },
      {
       "name":"ride",
       "tagline": "Ride a horse"
     },
     {
       "name":"ride",
       "tagline": "Ride a horse"
     },
    ]
  },
  methods: {
    add: function (event) {
      console.log("clicked");
      // `event` is the native DOM event

      // The button that was clicked on
      var clickedOn = event.target;

      // The h3 element with the tagline text that comes before the button in HTML
      var tagline = clickedOn.previousElementSibling.innerText;
      console.log(tagline);

      // The article this belongs to
      var parentArticle = clickedOn.parentElement;
      console.log(parentArticle);

      // The entire section
      var section = parentArticle.parentElement;
      console.log(section);

    },
    toggleInspiration: function (event) {
      document.getElementsByClassName('inspiration')[0].classList.toggle("hide");
    }
  }
})

// toggleCompleted: function (event) {
// 	document.getElementsByClassName('completed')[0].classList.toggle("hide");
// }
//make the left toggle menu open and close
