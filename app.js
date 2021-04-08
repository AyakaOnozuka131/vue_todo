new Vue({
  el: '#app',
  data: {
    todos: [],
    nextID: 2,
    inputText: '',
    searchText: '',
    isActive: false,
    isError: false
  },
  computed: {
    filteredItems(){
      return this.searchItem(this.todos, this.searchText);
    }
  },
  methods: {
    addToDo : function(){
      let DataInputText = this.inputText;

      if( DataInputText.length === 0 ){
        this.isError = !this.isError;
      }else{
        this.todos.push({
          id: this.nextID++,
          text: DataInputText
        });
        this.inputText = '';
      }
    },
    todoDone : function(){
      this.isActive = !this.isActive;
    },
    todoDelete : function(index){
      let arrayIndex = this.todos[index];
      this.todos.splice(arrayIndex,1);
    },
    searchItem : function(list, key){
      return list.filter(function(item){
        return item.text.indexOf(key) !==  -1 || key === "";
      });
    }
  }
});