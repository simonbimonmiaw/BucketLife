var bucketList = new Vue({
  el: '#app',
  data: {
    goals: [
      'Bestig et bjerg', 'Punkt nr 2'
    ],
    completeGoal: []
  },

  methods: {
    addGoal() {
      var input = this.$refs.my_input.value;
      if (input == '') {
        return '';
      } else {
        this.goals.push(input);
        this.$refs.my_input.value = '';
      }
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
    },
  }
})
