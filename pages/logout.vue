<template>
  <div></div>
  
</template>

<script>
export default {
  layout:'blank',
  async mounted(){
    let {status,data:{code}} = await this.$axios.get('/users/exit');
    if(status === 200&&code === 0){
      location.href = '/'
    }

  },
  // middleware:async(ctx)=>{
  //   let {status,data:{code}} = await ctx.$axios.get('/users/exit');
  //   if(status === 200&&code === 0){
  //     window.location.href = '/'
  //   }
  // }
}
</script>

<style>

</style>
