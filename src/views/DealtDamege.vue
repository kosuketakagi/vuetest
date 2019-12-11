<template>
 <div>
 <Lifelist v-for="(player, id) in players" :id="id" :key="id" />
 </div>
</template>

<script>
import Lifelist from '@/components/Lifelist.vue'

export default {
  name: 'DealtDamege',
  components: {
    Lifelist
  },
  computed: {
    players () {
      return this.$store.state.players
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
