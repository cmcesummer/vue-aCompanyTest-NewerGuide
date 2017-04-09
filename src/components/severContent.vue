<template>
	<div class="content-sever">
		<div class="hadChoose" v-show="hadChoose.length">
			<h4>已选服务：</h4><br>
			<div>
				<div class="sever-box" v-for="(item,index) in hadChoose">
					{{item.name}} <i class="iconfont cursor" :data-num="index" @click="itemRemove">&#xe63c;</i>
				</div>
			</div>
		</div>
		<div class="sever-chose-box">
			<h4>选择需要的服务类型</h4>

			<div class="sever-list-item" v-for="(item,index) in severList" v-show="item.show">
				<span><input type="checkbox" :value="index" v-model="severValue"></span>
				<span>{{item.name}}</span>
				<span>{{item.content}}</span>
			</div>
			
 			<div class="bottomBtn">
 				<button type="button" @click="severSure">确定</button>
 			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	computed:{
		sure() {
			return this.$store.state.sure
		},
		choseList(){
				return this.$store.state.choseList
			},
		severList(){
			return this.$store.state.severList
		}	
	},
	data() {
		return {
			hadChoose:[],
			severValue:[],
			
		}
	},
	watch:{
		severValue:function(val) {
			let item = val[0];
			if(val.length) {
				//this.severList[item].show = false;
				this.$store.commit('falseSeverList', item)
				this.hadChoose.push(this.severList[item]);
				this.severValue = [];
			}
		}
	},
	mounted(){
		if(this.choseList.length !== 0){
			this.hadChoose = this.choseList;
			
		}
	},
	methods:{
		severSure() {
			let _this = this
			!this.hadChoose.length ? alert('请先选择服务') : (function(){
				//_this.$store.commit('changeSure');
				_this.$router.push({ name: 'List' })
				_this.$store.commit('changeList', _this.hadChoose);
			})()
		},
		itemRemove(event) {
			let num = event.target.getAttribute('data-num'),
				arrId = this.hadChoose[num].id;

			this.hadChoose.splice(num,1);
			this.$store.commit('trueSeverList', arrId)
			
		}
	}

	
}
</script>

<style lang="scss" scoped>
	.content-sever {
		padding:20px;
		overflow:auto;
		margin-top:65px;
		h4{
			font-weight:500
		}
		.hadChoose {
			text-align:left;
			padding-bottom:10px;
			width:100%;
			border-bottom:1px solid #c2c2c2;
			.sever-box{
				border:1px solid #2aa7d8;
				display:inline-block;
				padding:2px 5px;
				margin-right:10px;
				margin-bottom:10px;
			}
		}
		.sever-chose-box{
			padding-top:30px;
			text-align:left;
			.sever-list-item{
				padding:10px;
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
			.bottomBtn{
				text-align:center;
				button{
					border:1px solid #33495F;
					cursor:pointer;
					background:#fff;
					padding:5px 10px;
					border-radius:3px;
					&:hover{
						background:#c2c2c2;
					}
				}
			}
		}
	}
</style>