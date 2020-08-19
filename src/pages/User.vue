<template>
  <div class="user-wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="tabItem" label="我要开户" name="create">
        <create v-if="activeName === 'create'" />
      </el-tab-pane>
      <el-tab-pane class="tabItem" label="我要充值" name="price">
        <price v-if="activeName === 'price'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import create from './common/create'
import price from './common/price'
export default {
  components: {
    create,
    price
  },
  data() {
    return {
      activeName: 'price'
    };
  },
  created() {

  },
  methods: {
    handleClick(e) {
      this.activeName = e.name
    }
  }
};
</script>

<style lang="scss">
.user-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .el-tabs__nav  {
    width: 100%;
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
  }
}
</style>
