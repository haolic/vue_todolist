<template>
  <div class="todo-list-wrap">
    <div>
      <el-table :data="todoTableData">
        <el-table-column prop="name">
          <template slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.name"></el-input>
            <span v-else>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type">
          <template slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.type"></el-input>
            <span v-else>{{scope.row.type}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="price">
          <template slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.pricee"></el-input>
            <span v-else>{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operation">
          <template slot-scope="scope">
            <el-button v-if="scope.row.isEdit" type="primary" icon="el-icon-edit" circle  @click="editRow(scope.row)">保存</el-button>
            <el-button v-else type="warning" icon="el-icon-check" circle @click="editRow(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteRow(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <p>
      <el-form ref="itemForm" :inline="true" :model="todoForm" class="demo-form-inline">
        <el-form-item label="名称">
          <el-input v-model="name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="type" placeholder="请输入类型"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="price" placeholder="请输入价格"></el-input>
        </el-form-item>
        <el-button type="pramiary" @click="addItem">添加</el-button>
      </el-form>
    </p>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  computed: {
    todoForm() {
      return this.$store.state.todoList.todoForm;
    },
    name: {
      get() {
        return this.$store.state.todoList.todoForm.name;
      },
      set(newValue) {
        this.$store.commit("updateForm", { name: newValue });
      }
    },
    type: {
      get() {
        return this.$store.state.todoList.todoForm.type;
      },
      set(newValue) {
        this.$store.commit("updateForm", { type: newValue });
      }
    },
    price: {
      get() {
        return this.$store.state.todoList.todoForm.price;
      },
      set(newValue) {
        this.$store.commit("updateForm", { price: newValue });
      }
    },
    todoTableData() {
      return this.$store.state.todoList.todoTableData;
    }
  },
  mounted() {},
  methods: {
    addItem() {
      this.$store.commit("addItem");
    },
    deleteRow(index) {
      this.$store.commit('deleteRow', index)
    },
    editRow(row) {
      this.$store.commit('editRow', row)
    }
  }
};
</script>
<style>
.todo-list-wrap {
  padding: 0.5em;
  border: 1px solid #fff;
  overflow: hidden;
  width: 90vw;
  margin: 2.5vh 5vw;
  min-height: 45vh;
  position: fixed;
  left: 0px;
  top: 100px;
  transform: rotateX(-160deg) translateZ(30px);
}
</style>

