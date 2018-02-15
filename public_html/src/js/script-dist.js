//Create a new Vue instance
new Vue({

  //Bind this Vue instance to our main div with an ID of #app
  el: "#app",

  //This is where the data for our application will be held
  data: {
    newGoal: "",
    goalList: []
  },

  //This is where we will register the methods we want to use in our application
  methods: {

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
});