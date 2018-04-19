<template>
  <div class="container">
    <h1>おっぱいのサイズを、<br>カップ数でざっくり。</h1>
    <div>
      <label for="top">トップ</label>
      <input type="number" id="top" v-model="top" @change="calcCup(top, under)">&nbsp;cm
      <label for="under">アンダー</label>
      <input type="number" id="under" v-model="under" @change="calcCup(top, under)">&nbsp;cm
      <div>
        <span>あなたのカップ数は{{ cup }}です！</span>
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
