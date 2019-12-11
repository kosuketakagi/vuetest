<template>
  <div class="lifeboard">
     <p class="name">{{playerName}}</p>
     <p class="life">{{lifeCount}}</p>
     <button @click="plus" class="btn-square-little-rich">+</button>
     <button @click="min" class="btn-square-little-rich minbutton">-</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'LifeBoard',
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
  },
  methods: {
    plus () {
      this.$store.commit('plus', this.id)
    },
    min () {
      this.$store.commit('min', this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lifeboard{
    font-weight: bold;
    background: #FFF;
    color: #6091d3;/*文字色*/
    border: solid 3px #6091d3;/*線*/
    border-radius: 10px;/*角の丸み*/
    width:46%;
    margin:2px;
    display: block;
    height: 150px;
}

.btn-square-little-rich {
  font-size:20px;
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #03A9F4;/*色*/
  border: solid 1px #0f9ada;/*線色*/
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
  margin-left:4px;
  margin-rights:4px;
}

.btn-square-little-rich:active {
  /*押したとき*/
  border: solid 1px #03A9F4;
  box-shadow: none;
  text-shadow: none;
}

.minbutton{
  background:red;
}

p.name{
  font-size:20px;
  margin:3px;
}

p.life{
  font-size:50px;
  margin:2px;
  color: red;/*文字色*/
}

</style>
