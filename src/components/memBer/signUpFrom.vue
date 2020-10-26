<template>
	<div class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
		signUpFrom

		<b-form-group>
			<template v-slot:label>
				<b>Choose your flavours:</b><br>
				<b-form-checkbox
				v-model="allSelected"
				:indeterminate="indeterminate"
				aria-describedby="flavours"
				aria-controls="flavours"
				@change="toggleAll"
				>
				{{ allSelected ? '모두 동의 합니다.' : '모두 동의 합니다.' }}
			</b-form-checkbox>
		</template>

		<b-form-checkbox-group
		id="flavors"
		v-model="selected"
		:options="flavours"
		name="flavors"
		class="ml-4"
		aria-label="Individual flavours"
		stacked
		></b-form-checkbox-group>
	</b-form-group>

	</div>
</template>
<script>
	export default{
		name: 'signUpFrom',
		data() {
			return {
				flavours: ['만 14세 이상입니다. (필수)', '이용약관 동의 (필수)', '개인정보처리방침 (필수)', '개인정보 제3자 제공 동의 (필수)', '마케팅정보 수신 동의 (필수)'],
				selected: [],
				allSelected: false,
				indeterminate: false
			}
		},
		methods: {
			toggleAll(checked) {
				this.selected = checked ? this.flavours.slice() : []
			}
		},
		watch: {
			selected(newVal, oldVal) {
				if (newVal.length === 0) {
					this.indeterminate = false
					this.allSelected = false
				} else if (newVal.length === this.flavours.length) {
					this.indeterminate = false
					this.allSelected = true
				} else {
					this.indeterminate = true
					this.allSelected = false
				}
			}
		}
	}
</script>

<style scoped="">
.from_2box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.btn.login_btn{width:100%;border-radius:0;}
.sub_text p{font-size:.75em;margin-bottom:.4rem;}
</style>