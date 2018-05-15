export default {
  state: {
    testObj: {
      testText: ''
    },
    todoForm: {
      name: '',
      type: '',
      price: ''
    },
    todoTableData: [{
      name: 'aaa',
      type: '诗词',
      price: 40,
      isEdit: false
    }, {
      name: 'bbb',
      type: '科技',
      price: 39,
      isEdit: false
    }, {
      name: 'ccc',
      type: '戏曲',
      price: 50,
      isEdit: false
    }],
  },
  mutations: {
    updateForm(state, val) {
      Object.assign(state.todoForm, val);
      
    },
    addItem(state) {
      state.todoTableData.unshift({
        name: state.todoForm.name,
        type: state.todoForm.type,
        price: state.todoForm.price,
        isEdit: false
      })
    },
    deleteRow(state, index) {
      state.todoTableData.splice(index, 1)
    },
    editRow(state, row) {
      row.isEdit = !row.isEdit;
    }
  }
};
