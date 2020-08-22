<template>
<div class="price">
    <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" width="80%" height="80%" title="出入金协议" :visible.sync="dialogFormVisible">
     
    </el-dialog>
      <el-form
          :model="ruleUserForm"
          :rules="rulesUser"
          label-width="80px"
          ref="ruleUserForm"
        >
          <el-form-item label="交易账户" prop="account">
            <el-input  placeholder="请输入交易账户信息" v-model.trim="ruleUserForm.account"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名" prop="username">
            <el-input placeholder="客户自己输入姓名" v-model.trim="ruleUserForm.username"></el-input>
          </el-form-item>
           <el-form-item label="业务选择" prop="workChoice">
            <el-radio-group  v-model="ruleUserForm.workChoice">
              <el-radio label="线下入金">线下入金</el-radio>
              <el-radio label="账户出金">账户出金</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-button type="text" @click="dialogFormVisible = true">出入金须知</el-button>

          <div v-if="ruleUserForm.workChoice === '线下入金'">
            <div class="payType" >支付方式</div>
            <el-card class="box-card">
              <div slot="header" class="cardTitle">
                {{'银联支付'}}
              </div>
              <div class="cardText">
                公司出入金账户：
              </div>
              <div class="cardText">
                户名：黄安
              </div>
              <div class="cardText">
                开户银行:光大银行上海松江支行
              </div>
              <div class="cardText">
                账号:6231 5606 0156 7689
              </div>
            </el-card>
            <el-form-item label="订单金额" prop="orderCount">
              <el-input placeholder="请输入金额" type="number" v-model.trim="ruleUserForm.orderCount"></el-input>
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item label="银行账户" prop="bankcount">
              <el-input placeholder="银行账户" v-model.trim="ruleUserForm.bankcount"></el-input>
            </el-form-item>           
            <el-form-item label="支行信息" prop="bankinfo">
              <el-input placeholder="支行信息"  v-model.trim="ruleUserForm.bankinfo"></el-input>
            </el-form-item>            
            <el-form-item label="订单金额" prop="orderCount">
              <el-input placeholder="请输入金额" type="number" v-model.trim="ruleUserForm.orderCount"></el-input>
            </el-form-item>
          </div>
          <div class="description-text">入金时间：周一至周五 9:00-12:00, 13:30-15:00, 20:30-22:00</div>
          <div class="description-text">出金时间：周一至周五 9:00-12:00, 13:30-15:00</div>
          <el-button type="primary" class="submitButton" @click="submitForm('ruleUserForm')">提交</el-button>
        </el-form>
</div>

</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      ruleUserForm:{
        account: '',
        username: '',
        workChoice: '线下入金',
        orderCount: '',
        bankcount: '',
        bankinfo: '',
      },
      rulesUser: {
        account: [
          { required: true, message: "请输入交易账户", trigger: "blur" },
        ],
        username: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
        ],
        workChoice: [
          { required: true, message: "请进行业务选择", trigger: "blur" },
        ],
        orderCount: [
          { required: true, message: "请输入订单金额", trigger: "blur" },
        ],
        bankcount: [
          { required: true, message: "请输入银行账户", trigger: "blur" },
        ],
        bankinfo: [
          { required: true, message: "请输入支行信息", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    async submitRequest() {
      try {
        const result = await this.$api().poverty.sendAccount(this.ruleUserForm);
        if (result.fields.status) {
           this.$message.error(result.fields.statusText);
        } else {
          this.ruleUserForm = {
            account: '',
            username: '',
            workChoice: '线下入金',
            orderCount: '',
            bankcount: '',
            bankinfo: '',
          }
        }
      } catch (error) {
        this.$message.error('服务器出错了');
      }
    },
    submitForm() {
      this.$refs['ruleUserForm'].validate(valid => {
        if (valid) {
           this.submitRequest()
        } else {
          console.log("error submit!!");
        }
      });
    },
  }

}
</script>

<style lang="scss">
.price {
  padding: 0 20px;
  .box-card {
    margin: .32rem 0;
  }
  .cardTitle {
    text-align: center;
  }
  .cardText {
    line-height: .42rem;
  }
  .center {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .description-text {
      font-family: PingFang SC;
      font-style: normal;
      font-weight: normal;
      font-size: .24rem;
      line-height: .40rem;
      color: #778199;
  }
  .submitButton {
      margin-bottom: .8rem;
      width: 100%;
      margin-top: .4rem;
      background-color: #057AFF;
      height: 1rem;
      font-family: PingFang SC;
      font-style: normal;
      font-weight: 600;
      font-size: .32rem;
      line-height: .44rem;
      text-align: center;
      text-transform: capitalize;

      color: #FFFFFF;
    }
    .el-dialog {
      height: 70%;
      overflow: auto;
      display: flex;
      flex-direction: column;
      .el-dialog__body {
        // height: 60%;
        padding: 0.3rem;
        overflow: auto;
      }
    }
}

</style>