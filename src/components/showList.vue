<template>
	<div class="content-sever">
		<div class="sever-chose-box"  >
			<h4>已选服务 <i class="iconfont cursor" @click="backTo">&#xe6ad;</i></h4>

			<draggable v-model="myList" :options="{group:'people'}" @start="drag=true" @end="drag=false">
			    
			        <div class="sever-list-item" v-for="(item,index) in choseList" :key="item.id">
			            <span>{{index + 1}}</span>
						<span>{{item.name}}</span>
						<span>{{item.content}}</span>
			        </div>    
			</draggable>

		</div>
	</div>
	
</template>

<script>
	import draggable from 'vuedraggable';
	export default {
		components:{
	        draggable
        },
		computed:{
			choseList(){
				return this.$store.state.choseList
			},
			myList:{
				 get() {
		            return this.$store.state.choseList
		        },
		        set(value) {
		            this.$store.commit('changeList', value)
		        }
			}
		},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.list = this.choseList
		},
		methods:{
			
			backTo(){
				this.$router.push({name:'Choose'})
			}
		}

	}
</script>

<style lang="scss" scope>
	.content-sever {
		padding:20px;
		overflow:auto;
		margin-top:65px;
		h4{
			font-weight:500
		}
		.sever-chose-box{
			padding-top:30px;
			text-align:left;
			.sever-list-item{
				padding:10px;
				cursor:pointer;
				span{
					display:inline-block;
					margin-right:20px;
					&:last-child{
						color:#c2c2c2
					}
					&:nth-of-type(2){
						width:100px;
					}
				}
			}
		}
	}
</style>