<!-- 
  登记框组件 
-->
<template>
  <div class="m-register">
    <Dialog v-show="isShowDialog">
      <div class="register-form">
        <div class="row">
          <span>姓名：</span>
          <input type="text" v-model="info.name">
        </div>
        <div class="row">
          <span>电话：</span>
          <input type="number" v-model="info.mobilePhone">
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
 * @Last Modified time: 2018-01-02 10:25:45
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
        mobilePhone: '',
        name: ''
      }
    }
  },
  methods: {
    /**
     * 提交信息
     * @method submit
     */
    submit() {
      if(this.isLoading) return 
      const emptyReg = /^\s*$/
      const phoneReg = /^0?(13|14|15|17|18)[0-9]{9}$/
      if (emptyReg.test(this.info.name)) { return alert('请输入姓名') }
      if (emptyReg.test(this.info.mobilePhone)) { return alert('请输入手机号') }
      if (!phoneReg.test(this.info.mobilePhone)) { return alert('请输入有效的手机号') }
      this.isLoading = true
      // TODO 发请求
      this.$axios.post('/Game/Commons/Signup', {
        MobilePhone: this.info.mobilePhone,
        Name: this.info.name,
        MinigameId: this.$store.state.minigameId,
        PlayCount: 1
      }).then(res => {
        console.log(res)
        let { data } = res
        if (data && data.Errors) {
          this.isLoading = false
          return alert(data.Errors)
        }
        this.$store.commit('registered')
        this.$emit('start-game')
      }).catch(err => {
        console.log(err)
        setTimeout(() => {
          alert('网络请求失败')
          this.isLoading = false
        }, 400)
      })
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => this.enter = true, 500)
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
