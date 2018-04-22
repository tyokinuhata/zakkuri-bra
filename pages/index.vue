<template>
  <div class="container mt-4">
    <h1 class="text-center">おっぱいのサイズを、<br>カップ数でざっくり。</h1>
    <div class="text-center">
      <div class="row mt-2">
        <label for="top" class="col-md-2">トップ&nbsp;</label>
        <input type="number" id="top" class="form-control col-md-8" v-model="top" @change="calcCup(top, under)" autofocus>
        <span class="col-md-2">cm</span>
      </div>
      <div class="row mt-2">
        <label for="under" class="col-md-2">アンダー&nbsp;</label>
        <input type="number" id="under" class="form-control col-md-8" v-model="under" @change="calcCup(top, under)">
        <span class="col-md-2">cm</span>
      </div>
      <div class="row">
        <span class="col-md-12 mt-2 h2">あなたのカップ数は{{ cup }}です！</span>
      </div>
    </div>
  </div>
</template>

<script>
  import cups from './cups.json'

  export default {
    data() {
      return {
        top: 0,
        under: 0,
        cup: 'AA',
      }
    },
    methods: {
      calcCup (top, under) {
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
