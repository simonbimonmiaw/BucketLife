var bucketList = new Vue({
  el: '#app',
  data: {
    goals: [
      'Bestig et bjerg'
    ]
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
    completeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
})