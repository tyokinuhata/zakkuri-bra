<template>
  <div>
    <h1>おっぱいのサイズを、<br>カップ数でざっくり。</h1>
    <div>
      <label for="top">トップ</label>
      <input type="number" id="top" v-model="top" @change="calcCup(top, under)">&nbsp;cm
      <label for="under">アンダー</label>
      <input type="number" id="under" v-model="under" @change="calcCup(top, under)">&nbsp;cm
      <div>
        <span>{{ diff }}</span>
        <span>{{ cup }}</span>
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
        cup: 0
      }
    },
    computed: {
      diff () {
        return this.top - this.under
      }
    },
    methods: {
      calcCup (top, under) {
        const cups = [ 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5 ]

        const diff = top - under
        let min = 999, approx
        for (let cup of cups) {
          if (min > Math.abs(diff - cup)) {
            min = Math.abs(diff - cup)
            approx = cup
          }
        }
        this.cup = approx
      }
    }
  }
</script>
