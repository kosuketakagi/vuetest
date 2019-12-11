<template>
  <ul>
     <li>{{playerName}}</li>
     <li>{{lifeCount}}</li>
  </ul>
</template>

<script>
export default {
  props: ['id'],
  name: 'Lifelist',
  data () {
    return {
      count: 21
    }
  },
  computed: {
    lifeCount () {
      const id = this.id
      const playerData = this.$store.state.players[id]
      return playerData.lifeCount
    },
    playerName () {
      const id = this.id
      const playerData = this.$store.state.players[id]
      return playerData.playerName + (id + 1)
    }
  }
}
</script>

<style scoped>
ul, ol {
  color: #1e366a;
  border: dotted #1e366a 1px;/*ドット 色 太さ*/
  padding: 0.5em 0.5em 0.5em 2em;
}

ul li, ol li {
  line-height: 1.5;
  padding: 0.5em 0;
}
</style>
