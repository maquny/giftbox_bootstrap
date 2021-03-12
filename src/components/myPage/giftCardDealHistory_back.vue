<template>
	<div>
		<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
			<slot name="header"></slot>
			<div class="mypage_container">
				<b-form-group class="right_btn">
					<b-form-radio-group
					id="btn-radios-2"
					v-model="selected"
					:options="options"
					buttons
					size="sm"
					button-variant="outline-primary"
					name="radio-btn-outline"
					></b-form-radio-group>
				</b-form-group>

				<div class="mypage_container2">

					<div class="boot_tablet">
						<b-table small :fields="fields" :items="items">
							<template #cell(name)="data">
								<b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
							</template>

							<template #cell(nameage)="data">
								{{ data.item.name.first }} is {{ data.item.age }} years old
							</template>

							<template #cell()="data">
								<i>{{ data.value }}</i>
							</template>

							<template #cell(buttons)="data">
								<button>button</button>
							</template>

						</b-table>
					</div>

				</div>

				<div class="sub_tbl">
					<b-table stacked :items="keyitems"></b-table>
				</div>
			</div>

		</b-container>
	</div>
</template>
<script>

	export default{
		name: 'giftCardDealHistory',
		data() {
			return {
				fields: [
					{ key: 'name', label: 'Full Name' },
					'age',
					'sex',
					{ key: 'nameage', label: 'First name and age' },
					{ key: 'buttons', stickyColumn: true, label: 'First name and age', variant: 'info' },
				],
				items: [
					{ name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42, buttons: 'button' },
					{ name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 , buttons: 'button'},
					{ name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73, buttons: 'button' },
					{ name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62, buttons: 'button' }
				],
				keyitems: [
					{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
				],
				selected: 'all',
				options: [
					{ text: '전체', value: 'all' },
					{ text: '3개월', value: '3' },
					{ text: '6개월', value: '6' },
					{ text: '1년', value: '12' }
				]
			}
		},
		created() {
			
		},
		computed: {
       
        },
        mounted() {

        },
        methods: {

        },

        watch: {
			
		}
	}
</script>

<style>
.boot_tablet{width:100%;}
.sub_tbl{}
</style>