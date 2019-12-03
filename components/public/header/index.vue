<template>
  <div>
    <top-bar class="wrapper"/>
    <search-bar/>
  </div>
</template>

<script>
import topBar from './topBar'
import searchBar from './searchBar'
export default {
  components:{
    topBar,
    searchBar
  }
}
</script>

<style lang="scss" scoped>

</style>
