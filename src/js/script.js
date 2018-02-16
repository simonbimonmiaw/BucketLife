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
   ],
   newGoal: "",
   goalList: []
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
    },
    addGoal: function() {
      //trim() is used to remove whitespace from both ends of a string
      var goal = this.newGoal.trim();
      //if goal is not an empty string
      if (goal) {
        //Push an object containing the goal to the goalList array
        this.goalList.push({
          text: goal,
          checked: false
        });
        //Reset newGoal to an empty string so the input field is cleared
        this.newGoal = "";
      }
    },

    removeGoal: function(goal) {
      var index = this.goalList.indexOf(goal);
      this.goalList.splice(index, 1);
    }
  }
})

// toggleCompleted: function (event) {
// 	document.getElementsByClassName('completed')[0].classList.toggle("hide");
// }
//make the left toggle menu open and close
