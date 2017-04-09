<template>
	<div class="sidebar">
		<div class="title">
			<img src="https://www.lgstatic.com/thumbnail_160x160/i/image/M00/7F/53/Cgp3O1hOC2KAJmfgAAAMhQ_rUMs506.jpg">
			<span>新手入门指南</span>
		</div>
		<div class="project-name">
			<div class="head">
				<i class="iconfont">&#xe619;</i>
				<span>对话场景</span>
				<i class="iconfont right">&#xe635;</i>
			</div>
			<ul class="body">
				<li v-for="(item,index) in dialogue" :class="{bgColor:index == 2}">{{item}}</li>
			</ul>
		</div>
		<div class="gear">
			<i class="iconfont">&#xe624;</i>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogue:['词典','消息','服务','试试']
			}
		}
	}
</script>

<style lang="scss">
	
	.sidebar{
		flex:0 1 250px;
		border-right:1px solid #c2c2c2;
		height:100%;
		.title{
			width:100%;
			height:65px;
			padding:11px 15px;
			text-align:left;
			border-bottom:1px solid #c2c2c2;
			img{
				height:40px;
				widht:40px;
				display:inline-block;
				margin-right:10px;
				border-radius:20px;
				vertical-align:middle
			}

		}
		.project-name{
			padding:18px 0;
			text-align:left;
			.head{
				padding:0 18px;
			}
			.right{
				float:right;
				font-size:20px;
			}
			.body{
				padding: 10px 0;
				li{
					padding:10px 38px;
				}
				.bgColor{
					background:#00abff;
					color:#fff
				}
			}
		}
		.gear{
			position: absolute;
		    bottom: 10px;
		    left: 220px;
		}
	}
</style>