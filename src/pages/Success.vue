<template>
  <div class="poverty-success">
    <img class="poverty-success-banner" src="@/assets/img/banner.png" />
    <div class="poverty-success-body">
      <div class="poverty-success-body-info">
        <img class="success-logo" src="@/assets/img/success.png" alt />
        <div class="line-1">成功下单</div>
        <div class="line-2">
          <span v-show="orderType==0">扶贫办会联络供货商，尽快发货。</span>
          <span v-show="orderType==1"> 扶贫专员会联络供货商 </span>  
        </div>
      </div>
      <div class="poverty-success-tech-support">
        <div class="content">
          感谢您对扶贫事业的支持，如有疑问或建议请及时联系并反馈。
        </div>
        <div class="contact" style="margin-top: 8px">
          <pre style="font-family: none;">客服联系人： 曹瑞佳 18813069553</pre>
        </div>
        <!-- <div class="contact"><pre style="font-family: none;">技术联系人： 刘    晟 13682060729</pre></div> -->
        <div class="support-company">
          <span class="line"></span>
          <span class="title"
            ><img
              class="ccccit-logo"
              src="@/assets/img/ccccitLogo.png"
            />由中交智运有限公司提供技术支持</span
          >
          <span class="line"></span>
        </div>
      </div>
    </div>
    <!-- <div class="poverty-success-button-wrapper">
      <el-button class="poverty-success-button" type="primary" @click="back"
        >返回</el-button
      >
    </div> -->
    <div class="poverty-success-button-wrapper">
      <el-button class="history-success-button" @click="toHistory"
        >历史订单</el-button
      >
      <el-button class="poverty-success-button" type="primary" @click="toProducts"
        >继续购物</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderType : null
    };
  },
  created() {
    this.orderType = this.$route.params.type;
    if(this.orderType) {
      sessionStorage.setItem('orderType', this.orderType)
    } else {
      this.orderType = sessionStorage.getItem('orderType');
    }
    console.log(this.orderType)
  },
  methods: {
    toHistory() {
      this.$router.push("/orderHistory");
    },
    toProducts() {
      this.$router.push("/products");
    }
  }
};
</script>

<style lang="scss">
.poverty-success {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.poverty-success-body {
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
   .poverty-success-tech-support {
     order: 0;
   }
  .poverty-success-body-info {
    order: 1;
    .line-1,
    .line-2 {
      text-align: center;
    }
  }
}
.poverty-success-button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  .history-success-button {
    width: 30%;
    background: rgba(112, 145, 227, 1) !important;
    border: none;
    color: #ffffff;
  }
  .history-success-button:hover {
    color: #ffffff !important;
  }
}
@media screen and (min-width: 320px){
  .poverty-success-banner {
    display: block;
    width: 301px;
    height: 105px;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-success-body {
    width: 301px;
    margin: 0 auto;
    background-color: #ffffff;
    .success-logo {
      display: block;
      width: 81px;
      margin: 0 auto;
      padding-top: 27px;
    }
    .poverty-success-body-info {
      margin-bottom: 20px;
      .line-1 {
        font-size: 24px;
        line-height: 34px;
        margin-top: 9px;
      }
      .line-2 {
        font-size: 12px;
        line-height: 16px;
        margin-top: 16px;
        color: #999999;
      }
    }
  }
  .poverty-success-button-wrapper {
    background-color: rgba(249, 224, 223, 1);
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .history-success-button {
      height: 34px;
    }
    .poverty-success-button {
      display: block !important;
      width: 60%;
      height: 34px;
    }
  }


  .poverty-success-tech-support {
    text-align: center;
    color: #778199;
    bottom: 0;
    padding-top: 20px;
    .content,
    .contact {
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
        width: 40px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
}
@media screen and (min-width: 360px) {
  .poverty-success-banner {
    display: block;
    width: 339px;
    height: 119px;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-success-body {
    width: 339px;
    margin: 0 auto;
    background-color: #ffffff;
    .success-logo {
      display: block;
      width: 125px;
      margin: 0 auto;
      padding-top: 77px;
    }
    .poverty-success-body-info {
      margin-bottom: 20%;
      .line-1 {
        font-size: 27px;
        line-height: 38px;
        margin-top: 11px;
      }
      .line-2 {
        font-size: 13px;
        line-height: 18px;
        margin-top: 18px;
        color: #999999;
      }
    }
  }

  .poverty-success-button-wrapper {
    background-color: rgba(249, 224, 223, 1);
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .history-success-button {
      height: 38px;
    }
    .poverty-success-button {
      display: block !important;
      width: 60%;
      height: 38px;
    }
  }
  .poverty-success-tech-support {
    text-align: center;
    color: #778199;
    bottom: 0;
    padding-top: 20px;
    .content,
    .contact {
      font-size: 12px;
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
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 40px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
}
@media screen and (min-width: 375px) {
  .poverty-success-banner {
    display: block;
    width: 353px;
    height: 124px;
    margin: 0 auto;
    padding-top: 9px;
  }
  .poverty-success-body {
    width: 353px;
    margin: 0 auto;
    background-color: #ffffff;
    .success-logo {
      display: block;
      width: 130px;
      margin: 0 auto;
      padding-top: 90px;
    }
    .poverty-success-body-info {
      margin-bottom: 18%;
      .line-1 {
        font-size: 28px;
        line-height: 40px;
        margin-top: 11px;
      }
      .line-2 {
        font-size: 14px;
        line-height: 19px;
        margin-top: 19px;
        color: #999999;
      }
    }
  }

  .poverty-success-button-wrapper {
    background-color: rgba(249, 224, 223, 1);
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .history-success-button {
      height: 38px;
    }
    .poverty-success-button {
      display: block !important;
      width: 60%;
      height: 38px;
    }
  }

  .poverty-success-tech-support {
    text-align: center;
    color: #778199;
    bottom: 0;
    padding-top: 20px;
    .content,
    .contact {
      font-size: 12px;
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
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 40px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
}
@media screen and (min-width: 411px) {
  .poverty-success-banner {
    display: block;
    width: 387px;
    height: 135px;
    margin: 0 auto;
    padding-top: 11px;
  }
  .poverty-success-body {
    width: 387px;
    margin: 0 auto;
    background-color: #ffffff;
    .success-logo {
      display: block;
      width: 142px;
      margin: 0 auto;
      padding-top: 99px;
    }
    .line-1 {
      font-size: 31px;
      line-height: 44px;
      margin-top: 12px;
    }
    .line-2 {
      font-size: 15px;
      line-height: 21px;
      margin-top: 21px;
      color: #999999;
    }
  }

  .poverty-success-button-wrapper {
    background-color: rgba(249, 224, 223, 1);
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .history-success-button {
      height: 38px;
    }
    .poverty-success-button {
      display: block !important;
      width: 60%;
      height: 38px;
    }
  }
  .poverty-success-tech-support {
    text-align: center;
    color: #778199;
    bottom: 0;
    padding-top: 20px;
    .content,
    .contact {
      font-size: 12px;
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
        font-size: 12px;
      }
      .line {
        display: inline-block;
        width: 40px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .poverty-success-banner {
    display: block;
    width: 723px;
    height: 253px;
    margin: 0 auto;
    padding-top: 20px;
  }
  .poverty-success-body {
    width: 723px;
    margin: 0 auto;
    background-color: #ffffff;
    .success-logo {
      display: block;
      width: 168px;
      margin: 0 auto;
    }
    .poverty-success-body-info {
      margin-bottom: 20px;
      .line-1 {
        font-size: 50px;
        line-height: 82px;
        margin-top: 23px;
      }
      .line-2 {
        font-size: 29px;
        line-height: 39px;
        margin-top: 39px;
        color: #999999;
      }
    }
  }

  .poverty-success-button-wrapper {
    background-color: rgba(249, 224, 223, 1);
    margin: 0 auto;
    padding-top: 35px;
    padding-bottom: 35px;
    .history-success-button {
      height: 82px;
    }
    .poverty-success-button {
      display: block !important;
      width: 60%;
      height: 82px;
    }
  }
  .poverty-success-tech-support {
    text-align: center;
    color: #778199;
    bottom: 0;
    padding-top: 20px;
    .content,
    .contact {
      font-size: 20px;
      line-height: 26px;
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
        font-size: 18px;
      }
      img {
        width: 25px;
        margin-bottom: -5px;
      }
      .line {
        display: inline-block;
        width: 140px;
        margin: 0 2px;
        border-top: 1px solid #0d7eff;
        vertical-align: 5px;
      }
    }
  }
}
</style>
