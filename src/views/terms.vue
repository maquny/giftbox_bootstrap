<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name: 'terms',
	}
</script>
<style scoped="">
body{color:#444;}
.depth1:after,
.depth2:after{content:'';display:block;clear:both;}
.first_text{font-size:1.1rem;line-height:2rem;font-weight:700;padding:2rem;}
.depth1{font-size:1.1rem;margin-top:2rem;}
.depth1 > .cont{font-size:1rem;margin:.5rem;}
.depth1 > .cont > p{font-size:.875rem;}
.depth1 > .cont > .p_depth2{margin:.5rem;}
​
.depth2 > .cont > p,
.depth1 > .cont .p_depth2 span{position:relative;}
.depth2 > .cont > p:before,
.depth1 > .cont .p_depth2 span:before{content:'-';display:block;position:absolute;top:0;left:-10px;}
​
.depth2{font-size:.9rem;margin:.7rem;}
.depth2 > .title{font-weight:500;line-height:1.5rem;}
.depth2 > .cont{margin:.5rem;}
.depth2 > .cont > p{font-size:.875rem;margin:.5rem;line-height:1.1rem;}
​
.depth1.tbl_box{padding:2rem 1rem;}
.depth2.tbl_box{padding:.5rem 1rem;}
.tbl_box{}
.tbl_box table{float:left;width:100%;border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;font-size:.85rem;}
.tbl_box table th{text-align:left;background-color:#ededed;padding:10px;border-left:solid 1px #ddd;}
.tbl_box table td{text-align:left;padding:1rem;border-top:solid 1px #ddd;border-left:solid 1px #ddd;}
.tbl_box table tr:first-child td{}
.tbl_box table th:first-child,
.tbl_box table td:first-child{border-left:none;}
</style>​