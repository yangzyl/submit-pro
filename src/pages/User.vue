<template>
  <div class="poverty-user">
    <img class="poverty-user-banner" src="@/assets/img/banner.png" />
    <div class="poverty-user-info">
      <div class="poverty-user-order-by">
      </div>
      <div class="poverty-user-button-wrapper">
        <el-button
          class="poverty-user-button"
          type="primary"
          @click="
            submitForm(
              'ruleFormOrderByIdentification',
              'ruleFormReciptientIdentification'
            )
          "
          >提交订单</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import agencyMap from "./agencyMap";
import deviceType from "@/utils/deviceType.js";
import PHONE_NUMBER_REG from "@/utils/phoneReg.js";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      agencyList: [],
      agencyTempList: [],
      addressList: [],
      provinceList: [],
      cityList: [],
      areaList: [],
      provinceId: "",
      cityId: "",
      areaId: "",
      agencyId: "",
      showAddressForm: false,
      ruleFormOrderByIdentification: {
        name: "",
        agency: "",
        contactPersonName: "",
        contactPersonPhoneNo: "",
        phoneNo: "",
        type: "0"
      },
      ruleFormReciptientIdentification: {
        name: "",
        phoneNo: "",
        address: "",
        invoice: "不需要发票",
        province: "",
        city: "",
        area: "",
        shpping: ""
      },
      ruleFormInvoice: {
        title: "",
        creditCode: "",
        address: "",
        bank: "",
        account: "",
        telephone: ""
      },
      rulesOrderByIdentification: {
        type: [
          {
            required: true,
            message: "请至少选择一个分类",
            trigger: "change"
          }
        ],
        name: [
          {
            required: true,
            message: "请输入订货人姓名",
            trigger: "blur"
          }
        ],
        agency: [
          {
            required: true,
            message: "请选择机构",
            trigger: "change"
          }
        ],
        phoneNo: [
          {
            required: true,
            message: "请输入电话",
            trigger: "blur"
          },
          {
            pattern: PHONE_NUMBER_REG,
            message: "请输入正确电话",
            trigger: "blur"
          }
        ],

        contactPersonName: [
          {
            required: true,
            message: "请输入联系人姓名",
            trigger: "blur"
          }
        ],
        contactPersonPhoneNo: [
          {
            required: true,
            message: "请输入联系人电话",
            trigger: "blur"
          }
        ]
      },
      rulesReciptientIdentification: {
        name: [
          {
            required: true,
            message: "请输入收货人姓名",
            trigger: "blur"
          }
        ],
        phoneNo: [
          {
            required: true,
            message: "请输入电话",
            trigger: "blur"
          },
          {
            pattern: PHONE_NUMBER_REG,
            message: "请输入正确电话",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur"
          }
        ],
        province: [
          {
            required: true,
            message: "请选择省份",
            trigger: "change"
          }
        ],
        city: [
          {
            required: true,
            message: "请选择城市",
            trigger: "change"
          }
        ],
        area: [
          {
            required: true,
            message: "请选择区域",
            trigger: "change"
          }
        ],
        shipping: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur"
          }
        ],
        invoice: [
          {
            required: true,
            message: "请选择是否需要发票",
            trigger: "change"
          }
        ]
      },
      rulesInvoice: {},
      statistics: {},
      totalPrice: 0,
      $inputs: null,
      hasAddress: false
    };
  },

  created() {
    this.addressList = JSON.parse(localStorage.getItem("address_book")) || [];
    this.startRequest();
  },
  mounted() {
    if (deviceType.isIOS) {
      this.$inputs = document.querySelectorAll("input");
      for (let i = 0; i < this.$inputs.length; i++) {
        this.$inputs[i].addEventListener("blur", this.pageHandler);
      }
    }
  },
  computed: {
    addressListFormat() {
      return [...new Set(this.addressList)].filter(item => item);
    }
  },
  beforeDestroyed() {
    for (let i = 0; i < this.$inputs.length; i++) {
      this.$inputs[i].removeEventListener("blur", this.pageHandler);
    }
  },
  methods: {
    startRequest() {
      const uuid = Cookies.get("uuid");
      // this.$api()
      //   .poverty.getUserList(uuid)
      //   .then(res => {
      //     // const { status, statusInfo, data } = res.getJSON().fields;
          
      //   });
    },
    blurPhone() {
      if (!this.ruleFormReciptientIdentification.phoneNo) {
        this.ruleFormReciptientIdentification.phoneNo = this.ruleFormOrderByIdentification.phoneNo;
      }
    },
    searchUser() {
      //       if (!this.ruleFormReciptientIdentification.name) {
      //         this.ruleFormReciptientIdentification.name = val.name;
      //       }

      if (!this.ruleFormReciptientIdentification.name) {
        this.ruleFormReciptientIdentification.name = this.ruleFormOrderByIdentification.name;
      }
      if (this.ruleFormOrderByIdentification.name) {
        this.$api()
          .poverty.matchUser(
            this.ruleFormOrderByIdentification.name,
            this.ruleFormOrderByIdentification.type
          )
          .then(res => {
            const { status, statusInfo, data } = res.getJSON().fields;
            if (status === 0 && data) {
              this.handleSelect({ value: data.companyName });
              this.ruleFormOrderByIdentification.name = data.customerName;
              this.ruleFormOrderByIdentification.agency = data.companyName;
              this.ruleFormOrderByIdentification.contactPersonName =
                data.companyContact;
              this.ruleFormOrderByIdentification.contactPersonPhoneNo =
                data.companyPhone;
              this.ruleFormOrderByIdentification.phoneNo = data.customerPhone;
              this.ruleFormOrderByIdentification.type = data.type
                ? `${data.type}`
                : this.ruleFormOrderByIdentification.type;

              this.ruleFormReciptientIdentification.name = data.consigneeName;
              this.ruleFormReciptientIdentification.phoneNo =
                data.consigneePhone;
              this.ruleFormReciptientIdentification.address = data.address;
            }
          });
      }
    },
    handleBlur(item) {
      this.handleSelect({ value: item.target.value });
    },

    async getAllProvince() {
      try {
        const res = await this.$api().poverty.getProvinceList();
        const { status, statusInfo, data } = res.getJSON().fields;
        if (status === 0) {
          this.provinceList = data;
        } else {
          this.$message({ message: statusInfo, type: "error" });
        }
      } catch (err) {
        console.error(err);
      }
    },
    selectProvince() {
      this.getAllCity().then(() => {
        this.ruleFormReciptientIdentification.city = "";
        this.ruleFormReciptientIdentification.area = "";
        this.$set(this.ruleFormReciptientIdentification, "shipping", "");
        this.areaList = [];
      });
    },
    async getAllCity() {
      try {
        if (this.ruleFormReciptientIdentification.province.id) {
          const res = await this.$api().poverty.getCityList(
            this.ruleFormReciptientIdentification.province.id
          );
          const { status, statusInfo, data } = res.getJSON().fields;
          if (status === 0) {
            this.cityList = data;
          } else {
            this.$message({ message: statusInfo, type: "error" });
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
    selectCity() {
      this.getAllArea().then(() => {
        this.ruleFormReciptientIdentification.area = "";
        this.$set(this.ruleFormReciptientIdentification, "shipping", "");
        this.areaList = [];
      });
    },
    async getAllArea() {
      try {
        if (this.ruleFormReciptientIdentification.city.id) {
          const res = await this.$api().poverty.getAreaList(
            this.ruleFormReciptientIdentification.province.id,
            this.ruleFormReciptientIdentification.city.id
          );
          const { status, statusInfo, data } = res.getJSON().fields;
          if (status === 0) {
            this.areaList = data;
          } else {
            this.$message({ message: statusInfo, type: "error" });
          }
        }
      } catch (err) {
        console.error(err);
      }
    },


    clearSession() {
      sessionStorage.removeItem("purchased"); 
      sessionStorage.removeItem("statistics");
      sessionStorage.removeItem("qrInfo");
      sessionStorage.removeItem("orderType");
    },
    submitForm(form1, form2) {
      if(this.ruleFormOrderByIdentification.type==='0' && this.ruleFormOrderByIdentification.agency !== "中咨集团外爱心人士") {
        if(!/MicroMessenger/i.test(navigator.userAgent)){
          this.$notify({
            title: "提示",
            message: "更换微信浏览平台，可在线支付订单",
            type: "info",
            position: "bottom-right"
          });
          return;
        }
      }
      const _this = this;
      if (this.hasNoPurchase()) {
        this.$notify({
          title: "提示",
          message: "购物车为空",
          type: "info",
          position: "bottom-right"
        });
        return;
      }
      let trusyTable = [];
      this.$refs[form1].validate(valid1 => {
        this.$refs[form2].validateField(["name", "phoneNo", "address"], err => {
          if (!err) {
            trusyTable.push(true);
          } else {
            trusyTable.push(false);
          }
        });
        if (valid1 && this.canSubmit(trusyTable)) {
          const productQuantityList = [];
          for (let product of this.purchased) {
            let tmp = {
              id: product.id,
              quantity: this.statistics[product.productId]
            };
            productQuantityList.push(tmp);
          }

          const uuid = Cookies.get("uuid");

          const data = {
            productQuantityList,
            uuid,
            customerType: Number(this.ruleFormOrderByIdentification.type),
            customerName: this.ruleFormOrderByIdentification.name,
            companyId: this.agencyId,
            customerPhoneNum: this.ruleFormOrderByIdentification.phoneNo,
            consigneeName: this.ruleFormReciptientIdentification.name,
            consigneeAddress: this.ruleFormReciptientIdentification.address,
            consigneePhone: this.ruleFormReciptientIdentification.phoneNo,
            needInvoice:
              this.ruleFormReciptientIdentification.invoice === "需要发票"
                ? true
                : false,
            accountName: this.ruleFormInvoice.title,
            taxPayerId: this.ruleFormInvoice.creditCode,
            invoiceAddress: this.ruleFormInvoice.address,
            invoicePhone: this.ruleFormInvoice.telephone,
            bankName: this.ruleFormInvoice.bank,
            accountNumber: this.ruleFormInvoice.account
          };
          this.$api()
            .poverty.purchase(data)
            .then(res => {
              const { status, statusInfo, data } = res.getJSON().fields;
              if(status === 0 && _this.ruleFormOrderByIdentification.type==='0' && _this.ruleFormOrderByIdentification.agency !== "中咨集团外爱心人士" && data){
                  this.$router.push({
                    name: 'payCode',
                    params:{ 
                      totalPrice: this.totalPrice,
                      payeeQrCode: data.payeeQrCode, 
                      signature: data.signature
                    }
                  });
                  _this.clearSession();
              } else if (status === 0 && !data) {
                this.$router.push({
                  name: 'success',
                  params: {
                    type: _this.ruleFormOrderByIdentification.type //订货人类型
                  }
                });
                _this.clearSession();
              } else {
                this.$message(statusInfo);
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.poverty-user {
  .el-input.is-disabled .el-input__inner {
    color: #808080;
  }
  .button-group {
    .el-form-item__content {
      display: flex;
      justify-content: space-between;
      button {
        width: 50%;
      }
    }
  }
  .button {
    .el-form-item__content {
      display: flex;
      button {
        width: 100%;
      }
    }
  }
}
.poverty-user-order-item-wrapper {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
@media screen and (min-width: 320px) {
  .poverty-user-banner {
    display: block;
    width: 301px;
    height: auto;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-user-info {
    width: 270px;
    margin: 0 auto;
    padding: 0 16px 20px 16px;
    background-color: #ffffff;
  }
  .poverty-user-order-list {
    font-size: 12px;
    line-height: 16px;
  }
  .poverty-user-order-item-wrapper {
    margin: 10px 0;
    position: relative;
    .quantity {
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .poverty-user-invoice-title,
  .poverty-user-order-by-title,
  .poverty-user-reciptient-title,
  .poverty-user-order-title {
    margin-top: 16px;
    font-size: 14px;
    padding-top: 16px;
    display: flex;
    align-items: center;
    &::before,
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid red;
      flex: 1;
    }
  }
  .rule-form-order-by-identification,
  .rule-form-reciptient-identification,
  .rule-form-invoice {
    margin: 10px 0;
  }
  .poverty-user-tech-support {
    .content,
    .contact {
      color: #778199;
      text-align: center;
      font-size: 10px;
      line-height: 16px;
      margin: 5px 0;
    }
    .support-company {
      color: #0d7eff;
      text-align: center;
      .title {
        width: 400px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        font-size: 10px;
      }
      img {
        width: 20px;
        margin-bottom: -4px;
      }
      .line {
        display: inline-block;
        width: 30px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
  .poverty-user-button-wrapper {
    margin-top: 10px;
  }
  .poverty-user-button {
    display: block !important;
    width: 270px;
    // height: 34px;
    margin: 0 auto !important;
  }
  .poverty-user-order-list-total-price {
    display: flex;
    font-size: 12px;
    line-height: 16px;
    justify-content: space-between;
  }
}
@media screen and (min-width: 360px) {
  .poverty-user-banner {
    display: block;
    width: 339px;
    height: auto;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-user-info {
    width: 302px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0 16px 20px 16px;
  }
  .poverty-user-order-list {
    font-size: 13px;
    line-height: 18px;
  }
  .poverty-user-order-item-wrapper {
    margin: 10px 0;
    position: relative;
    .quantity {
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .poverty-user-invoice-title,
  .poverty-user-order-by-title,
  .poverty-user-reciptient-title,
  .poverty-user-order-title {
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding-top: 16px;
    &::before,
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid red;
      flex: 1;
    }
  }
  .rule-form-order-by-identification,
  .rule-form-order-reciptient-identification .rule-form-invoice {
    margin: 10px 0;
  }
  .poverty-user-tech-support {
    .content,
    .contact {
      color: #778199;
      text-align: center;
      font-size: 12px;
      line-height: 17px;
      margin: 6px 0;
    }
    .support-company {
      color: #0d7eff;
      text-align: center;
      .title {
        width: 400px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 40px;
        margin: 0 5px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
  .poverty-user-button-wrapper {
    margin-top: 12px;
  }
  .poverty-user-button {
    display: block !important;
    width: 303px;
    margin: 0 auto !important;
  }
  .poverty-user-order-list-total-price {
    display: flex;
    font-size: 13px;
    line-height: 18px;
    justify-content: space-between;
  }
}
@media screen and (min-width: 375px) {
  .poverty-user-banner {
    display: block;
    width: 353px;
    height: auto;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-user-info {
    width: 321px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0 16px 20px 16px;
  }
  .poverty-user-order-list {
    font-size: 14px;
    line-height: 19px;
  }
  .poverty-user-order-item-wrapper {
    margin: 10px 0;
    position: relative;
    .quantity {
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .poverty-user-invoice-title,
  .poverty-user-reciptient-title,
  .poverty-user-order-by-title,
  .poverty-user-order-title {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding-top: 16px;
    &::before,
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid red;
      flex: 1;
    }
  }
  .rule-form-order-by-identification,
  .rule-form-reciptient-identification,
  .rule-form-invoice {
    margin: 10px 0;
  }

  .poverty-user-tech-support {
    .content,
    .contact {
      color: #778199;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      margin: 7px 0;
    }
    .support-company {
      color: #0d7eff;
      text-align: center;
      .title {
        width: 400px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 40px;
        margin: 0 5px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
  .poverty-user-button-wrapper {
    margin-top: 13px;
  }
  .poverty-user-button {
    display: block !important;
    width: 316px;
    margin: 0 auto !important;
  }
  .poverty-user-order-list-total-price {
    display: flex;
    font-size: 14px;
    line-height: 19px;
    justify-content: space-between;
  }
}
@media screen and (min-width: 411px) {
  .poverty-user-banner {
    display: block;
    width: 387px;
    height: auto;
    margin: 0 auto;
    padding-top: 11px;
  }
  .poverty-user-info {
    width: 355px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0 16px 20px 16px;
  }
  .poverty-user-order-list {
    font-size: 15px;
    line-height: 21px;
  }
  .poverty-user-order-item-wrapper {
    margin: 10px 0;
    position: relative;
    .quantity {
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .poverty-user-invoice-title,
  .poverty-user-order-by-title,
  .poverty-user-reciptient-title,
  .poverty-user-order-title {
    margin-top: 16px;
    padding-top: 16px;
    font-size: 18px;
    display: flex;
    align-items: center;
    &::before,
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid red;
      flex: 1;
    }
  }
  .rule-form-order-by-identification,
  .rule-form-reciptient-identification,
  .rule-form-invoice {
    margin: 10px 0;
  }
  .poverty-user-tech-support {
    .content,
    .contact {
      color: #778199;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      margin: 9px 0;
    }
    .support-company {
      color: #0d7eff;
      text-align: center;
      .title {
        width: 400px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 70px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
  .poverty-user-button-wrapper {
    margin-top: 15px;
  }
  .poverty-user-button {
    display: block !important;
    width: 346px;
    margin: 0 auto !important;
  }
  .poverty-user-order-list-total-price {
    display: flex;
    font-size: 15px;
    line-height: 21px;
    justify-content: space-between;
  }
}
@media screen and (min-width: 768px) {
  .poverty-user-banner {
    display: block;
    width: 723px;
    height: auto;
    margin: 0 auto;
    padding-top: 20px;
  }
  .poverty-user-info {
    width: 691px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 0 16px 60px 16px;
  }
  .poverty-user-order-list {
    font-size: 29px;
    line-height: 39px;
  }
  .poverty-user-order-item-wrapper {
    margin: 10px 0;
    position: relative;
    .quantity {
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .poverty-user-invoice-title,
  .poverty-user-reciptient-title,
  .poverty-user-order-by-title,
  .poverty-user-order-title {
    margin-top: 16px;
    padding-top: 16px;
    font-size: 33px;
    display: flex;
    align-items: center;
    &::before,
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid red;
      flex: 1;
    }
  }
  .rule-form-order-by-identification,
  .rule-form-reciptient-identification,
  .rule-form-invoice {
    margin: 10px 0;
  }
  .poverty-user-tech-support {
    .content,
    .contact {
      color: #778199;
      text-align: center;
      font-size: 20px;
      line-height: 29px;
      margin: 12px 0;
    }
    .support-company {
      color: #0d7eff;
      text-align: center;
      .title {
        width: 400px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        font-size: 18px;
      }
      img {
        width: 25px;
        margin-bottom: -5px;
      }
      .line {
        display: inline-block;
        width: 140px;
        margin: 0 5px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
  .poverty-user-button-wrapper {
    margin-top: 20px;
  }
  .poverty-user-button {
    display: block !important;
    width: 691px;
    margin: 0 auto !important;
  }
  .poverty-user-order-list-total-price {
    display: flex;
    font-size: 29px;
    line-height: 39px;
    justify-content: space-between;
  }
}
</style>
