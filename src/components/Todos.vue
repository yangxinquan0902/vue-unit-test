<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input 
    	class="input" 
    	type="text" 
    	placeholder="填写任务"  
    	v-model="todo"
      v-on:keyup.13="addItem"
    />
    <ul class="list">
    	<li v-for="item in list" :key="item.id">
    		<span>{{ item.txt }}</span>
    		<div class="close" @click="closeHandle(item.id)">删除</div>
    	</li>
    </ul>


		<div @click="fn1">111</div>
		<div @click="fn2">111</div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      msg: 'todos',
      todo:'',
      list:[
	      {
	      	id:'111111122222',
	      	txt:999
	      }
			]
    }
  },
  methods:{
		// 只有这种写法才会当成function来测试，对象中的函数简洁表示法不行
		fn1:()=>{
			console.log(5555)
		},
		fn2:()=>{
			if(true){
				console.log(5555)
			}else{
				console.log(5555)
			}
		},

  	addItem(){
  		this.list.unshift({
  			id:(Math.random()+'').slice(2),
  			txt:this.todo
  		});
  		this.todo = '';
  	},
  	closeHandle(id){
  		this.list = this.list.filter((item)=>{
  			return item.id !== id 
  		})
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	input{
		outline:none;
		border:none;
	}
	h1{
		font-size:50px;
		color:#0074D9;
	}
	.input{
		width:100%;
		height:50px;
		border:1px solid #ccc;
		padding-left:30px;
		font-size:26px;
	}
	.list{
		margin-top:20px;
	}
	.list li{
		position: relative;
		height:40px;
		line-height:40px;
		font-size:26px;
		margin-bottom:20px;
	}
	.list li .close{
		position: absolute;
		top:0;
		right:20px;
		padding:0 20px;
		background:#0074D9;
		color:#fff;
		font-size:22px;
		border-radius:20px;
		cursor:pointer;
	}
</style>
