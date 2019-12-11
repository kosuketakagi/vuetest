<template>
  <div class="outer">
    <div class="Lifeboad-all">
      <LifeBoard v-for="(player, id) in players" :id="id" :key="id" />
    </div>
  </div>
</template>

<script>
import LifeBoard from '@/components/LifeBoard.vue'

export default {
  name: 'DealDamege',
  components: {
    LifeBoard
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style scoped>

.Lifeboad-all{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
}

</style>
