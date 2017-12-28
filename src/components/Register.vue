<!-- 
  登记框组件 
-->
<template>
  <div class="m-register">
    <Dialog v-show="isShowDialog">
      <div class="register-form">
        <div class="row">
          <span>姓名：</span>
          <input type="text" v-model="info.Name">
        </div>
        <div class="row">
          <span>电话：</span>
          <input type="number" v-model="info.MobilePhone">
        </div>
      </div>
      <div @click="submit" class="register-btn"></div>
    </Dialog>
  </div>
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-28 17:29:20
 */
import Dialog from '@/components/Dialog'

export default {
  name: 'Register',
  components: { Dialog },
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      info: {
        MobilePhone: '',
        Name: '',
        MinigameId: ''
      }
    }
  },
  methods: {
    submit() {
      const emptyReg = /^\s*$/
      const phoneReg = /^0?(13|14|15|17|18)[0-9]{9}$/
      // if (emptyReg.test(this.info.Name)) { return alert('请输入姓名') }
      // if (emptyReg.test(this.info.MobilePhone)) { return alert('请输入手机号') }
      // if (!phoneReg.test(this.info.MobilePhone)) { return alert('请输入有效的手机号') }

      // TODO 发请求

      this.$emit('start-game')

    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    setTimeout(() => this.enter = true, 500)
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped>
.m-register {
  .register-form {
    padding: r(40) 0;
    height: r(220);
    .row {
      padding: r(15) r(20);
      display: flex;
      align-items: center;
      $c: #8a422f;
      @include font(r(20), $c);
      > span {
        flex: 0 0 auto;
        text-align: right;
      }
      > input {
        flex: 1 1 auto;
        width: r(1);
        padding: 0 r(6);
        border: 3px solid rgba($c, 0.6);
        border-radius: r(6);
        @include font($font_big, $c);
        line-height: r(40);
        &:focus {
          border-color: $c;
        }
      }
    }
  }
  .register-btn {
    width: r(135);
    height: r(47);
    margin: r(10) auto;
    @include image("../assets/img/register-btn.png");
    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
