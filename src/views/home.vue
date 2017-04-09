<template>
  <section class="content">
    <side-bar></side-bar>
    <div class="server-area">
    	<header-bar :headerName="headerName"></header-bar>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  import SideBar from '../components/sidebar'
  import HeaderBar from '../components/header'
  import SeverContent from '../components/severContent'
  import ShowList from '../components/showList'
  export default {
      computed:{
        sure() {
          return this.$store.state.sure
        }
      },
      mounted(){
        this.$router.push({ name: 'Choose' })
      },
      data() {
      	return {
      		headerName:'服务'
      	}
      },
      components: {
      	 SideBar,
      	 HeaderBar,
      	 SeverContent,
         ShowList
      }
  }
</script>

<style lang="scss">
	.content{
		display:flex;
		flex-direction: row;
		height:100%;
		.server-area{
			flex:1;
			overflow:auto;
      position:relative;
		}
	}
</style>


