<template>
	<header>{{headerName}}</header>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:['headerName']
	}
</script>

<style lang="scss">
	header{
		height:65px;
		border-bottom:1px solid #c2c2c2;
		font-size:18px;
		text-align:left;
		padding:28px 0 0 15px;
		width:100%;
		position:fixed;
		background:#fff;
	}
</style>