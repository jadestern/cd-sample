<template lang="pug">
  section(class="home__section__1" style="background-image: url('home__bg.jpg')")
    div(class="home__section__container__mobile")
      h5(class="text text__1") 업계 최초! 누적대출액 2,000억 돌파
      h1(class="text text__2") 부동산 자금 대출,
        br
        | 왜 테라펀딩 일까요?
      h5(class="text text__3") 기존 금융권에서 진행하기 어려운 중소형 건축사업,
        br
        | 사업계획 단계부터 테라펀딩과 함께하세요!
      button(class="btn modal-login") 로그인
      button(class="btn modal-join") 회원가입
    div(class="home__section__container__desktop")
      h5(class="text text__1") 업계 최초! 누적대출액 2,000억 돌파
      h1(class="text text__2") 부동산 자금 대출, 왜 테라펀딩 일까요?
      h5(class="text text__3") 기존 금융권에서 진행하기 어려운 중소형 건축사업, 사업계획 단계부터 테라펀딩과 함께하세요!
      button(class="btn__route-apply") 대출 신청하기
</template>

<script>
export default {
  name: 'HomeSection1',
};
</script>

<style lang="scss" scoped>
.flex__center__col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.hide__mobile {
  @media only screen and (max-width: 1100px) {
    display: none;
  }
}
.hide__desktop {
  @media only screen and (min-width: 1100px) {
    display: none;
  }
}

.home__section__1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.home__section__container__mobile {
  @extend .flex__center__col;
  @extend .hide__desktop;
  height: 560px;
  color: #fff;
  padding: 0 30px;
  padding-top: 56px;
  .text {
    text-align: center;
    font-weight: lighter;
    margin-bottom: 20px;
    &.text__1 {
      font-size: 1.8rem;
      line-height: 1.67;
    }
    &.text__2 {
      font-size: 2.8rem;
      line-height: 1.43;
    }
    &.text__3 {
      font-size: 1.4rem;
      line-height: 1.86;
      margin-bottom: 90px;
    }
  }
  .btn {
    @extend .flex__center__col;
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 1.4rem;
    &.modal-login {
      border: solid 0.5px #fff;
      margin-bottom: 10px;
    }
    &.modal-join {
      background-color: #2677cc;
    }
  }
}

.home__section__container__desktop {
  @extend .flex__center__col;
  @extend .hide__mobile;
  height: 630px;
  color: #fff;
  padding: 0 30px;
  .text {
    font-weight: lighter;
    &.text__1 {
      font-size: 3.8rem;
      margin-bottom: 20px;
    }
    &.text__2 {
      font-size: 4.61rem;
      margin-bottom: 30px;
    }
    &.text__3 {
      font-size: 1.4rem;
      margin-bottom: 40px;
    }
  }
  .btn__route-apply {
    @extend .flex__center__col;
    width: 160px;
    height: 50px;
    font-size: 1.4rem;
    color: #fff;
    background-color: #2677cc;
  }
}
//   .container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//     height: 616px;
//     margin: 0 auto;
//     color: #FFF;
//     @media screen and (min-width: 1130px) {
//       max-width: 1100px;
//       height: 630px;
//     }
//   }
//   .t1 {
//     font-size: 1.8rem;
//     font-weight: lighter;
//     margin-bottom: 20px;
//     @media screen and (min-width: 1130px) {
//       font-size: 3.8rem;
//     }
//   }
//   .t2 {
//     font-weight: lighter;
//     margin-bottom: 30px;
//     &.m {
//       font-size: 2.8rem;
//       text-align: center;
//       line-height: 1.43;
//       margin-bottom: 20px;
//       @media screen and (min-width: 1130px) {
//         display: none;
//       }
//     }
//     &.d {
//       font-size: 4.6rem;
//       @media screen and (max-width: 1130px) {
//         display: none;
//       }
//     }
//   }
//   .t3 {
//     font-size: 1.4rem;
//     &.m {
//       text-align: center;
//       line-height: 1.86;
//       margin-bottom: 90px;
//       @media screen and (min-width: 1130px){
//         display: none;
//       }
//     }
//     &.d {
//       margin-bottom: 40px;
//       @media screen and (max-width: 1130px) {
//         display: none;
//       }
//     }
//   }
//   .btn-group {
//     display: flex;
//     flex-direction: column;
//     &.m {
//       width: 100%;
//       @media screen and (min-width: 1130px) {
//         display: none;
//       }
//     }
//     &.d {
//       @media screen and (max-width: 1130px) {
//         display: none;
//       }
//     }
//   }
</style>