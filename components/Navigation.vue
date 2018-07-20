<template lang="pug">
  header(class="header")
    div(class="header__container")
      div(class="brand")
        img(src="~assets/img/brand.svg" alt="테라펀딩 로고")
      nav(class="nav")
        nuxt-link(to="/" class="nav__route") 대출신청
        nuxt-link(to="/" class="nav__route") 이용안내
        button(class="btn nav__modal-login") 로그인
        button(class="btn nav__modal-join") 회원가입
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>

.flex__center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hide__mobile {
  @media only screen and (max-width: 1100px) {
    display: none;
  }
}

.header {
  @extend .flex__center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  height: 102px;
  padding: 0 30px;
  box-sizing: border-box;
  .header__container {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    .brand {
      @extend .flex__center;
    }
    .nav {
      @extend .flex__center;
      justify-content: flex-end;
      .nav__route {
        color: #fff;
        font-size: 1.3rem;
        margin-right: 30px;
        &:first-child {
          @extend .hide__mobile;
        }
      }
      .btn {
        @extend .flex__center;
        @extend .hide__mobile;
        width: 120px;
        height: 42px;
        color: #fff;
        font-size: 1.3rem;
        &.nav__modal-login {
          border: solid 0.5px #fff;
          margin-right: 20px;
        }
        &.nav__modal-join {
          background-color: #2677cc;
        }
      }
    }
  }
}
</style>
