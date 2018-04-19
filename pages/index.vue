<template>
  <div class="container mt-4">
    <h1 class="text-center">おっぱいのサイズを、<br>カップ数でざっくり。</h1>
    <div class="text-center">
      <div class="row mt-2">
        <label for="top" class="col-md-2">トップ&nbsp;</label>
        <input type="number" id="top" class="form-control col-md-8" v-model="top" @change="calcCup(top, under)">
        <span class="col-md-2">cm</span>
      </div>
      <div class="row mt-2">
        <label for="under" class="col-md-2">アンダー&nbsp;</label>
        <input type="number" id="under" class="form-control col-md-8" v-model="under" @change="calcCup(top, under)">
        <span class="col-md-2">cm</span>
      </div>
      <div class="row">
        <span class="col-md-12 mt-2">あなたのカップ数は{{ cup }}です！</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top: 0,
        under: 0,
        cup: 'AA'
      }
    },
    methods: {
      calcCup (top, under) {
        const cups = [
          {
            grade: 'AA',
            cm: 7.5
          },
          {
            grade: 'A',
            cm: 10
          },
          {
            grade: 'B',
            cm: 12.5
          },
          {
            grade: 'C',
            cm: 15
          },
          {
            grade: 'D',
            cm: 17.5
          },
          {
            grade: 'E',
            cm: 20
          },
          {
            grade: 'F',
            cm: 22.5
          },
          {
            grade: 'G',
            cm: 25
          },
          {
            grade: 'H',
            cm: 27.5
          },
          {
            grade: 'I',
            cm: 30
          },
          {
            grade: 'J',
            cm: 32.5
          }
        ]

        const diff = top - under
        let min = 999, approx
        for (let cup of cups) {
          if (min > Math.abs(diff - cup.cm)) {
            min = Math.abs(diff - cup.cm)
            approx = cup.grade
          }
        }
        this.cup = approx
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
