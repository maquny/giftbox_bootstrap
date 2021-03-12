<template>
	<b-container class="mt-md-5 mt-4 mb-md-5 mb-4">
		<b-row>
			<b-col md="7">
				<div class="line_show_box">
					<div class="ma_title"><span class="h3 mr-1 ml-1"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512.002 512.002" height="35" viewBox="0 0 512.002 512.002" width="35"><g><g clip-rule="evenodd" fill-rule="evenodd"><path d="m256.009 50c60.751 0 110 49.248 110 110h-23.291l21.645 31.219 21.645 31.219 21.645-31.219 21.646-31.219h-23.29c0-82.843-67.157-150-150-150s-150 67.157-150 150 67.157 150 150 150v-40c-60.751 0-110-49.249-110-110s49.249-110 110-110z" fill="#ff5d7d"/><path d="m243.965 355.661c-62.531 7.766-196.963-50.303-233.468 123.954-2.557 12.208 5.321 22.387 14.657 22.387h100.639c12.113 0 17.542-5.482 20.028-14.756l9.396-18.285 68.459.759c45.034.499 57.872-2.012 100.028-18.916 58.608-23.501 143.585-61.962 162.523-69.083 27.539-10.674 17.222-50.044-16.915-41.479l-111.81 30.14c1.074-2.619 1.51-5.536 1.102-8.795-1.463-11.691-12.263-20.063-23.999-18.605-11.246 1.397-79.394 11.282-90.64 12.679z" fill="#ffdcd5"/></g><g><path d="m510.543 351.081c-4.466-14.047-20.038-26.467-43.662-20.539-.057.015-.113.029-.169.044l-98.738 26.616c-3.561-15.509-18.438-26.151-34.6-24.145-5.709.709-25.024 3.454-45.475 6.36-19.482 2.769-39.628 5.631-45.166 6.319-12.204 1.517-28.446.232-45.642-1.126-6.073-.479-12.352-.976-18.778-1.381-5.505-.344-10.262 3.839-10.609 9.351-.348 5.512 3.839 10.262 9.351 10.61 6.268.395 12.467.885 18.461 1.358 18.236 1.441 35.463 2.801 49.682 1.036 5.712-.709 25.046-3.457 45.515-6.365 19.465-2.766 39.592-5.626 45.126-6.313 6.29-.785 12.062 3.668 12.845 9.924.248 1.979.906 7.234-12.924 13.574-28.443 13.041-58.754 24.202-83.161 30.623-5.341 1.405-8.532 6.874-7.127 12.215s6.875 8.533 12.215 7.127c25.471-6.7 56.966-18.285 86.409-31.784 10.232-4.691 16.472-10.156 20.114-15.654l107.615-29.009c11.859-2.95 17.933 1.79 19.657 7.218 1.663 5.23-.424 11.965-8.827 15.241-8.379 3.156-28.432 11.879-53.804 22.917-33.631 14.631-75.486 32.839-108.867 46.224-41.069 16.468-52.758 18.683-96.196 18.198l-68.459-.758c-3.772-.056-7.274 2.06-9.005 5.429l-9.396 18.285c-.324.632-.581 1.296-.765 1.982-1.388 5.18-3.136 7.345-10.369 7.345h-100.639c-1.094 0-2.271-.677-3.229-1.856-.817-1.006-2.612-3.846-1.641-8.481 12.043-57.486 35.775-93.097 72.553-108.87 5.076-2.177 7.426-8.056 5.249-13.132-2.176-5.076-8.056-7.427-13.132-5.249-43.21 18.531-70.768 58.813-84.246 123.15-1.924 9.187.15 18.368 5.692 25.191 4.773 5.876 11.609 9.247 18.753 9.247h100.639c15.139 0 25.273-7.279 29.377-21.071l6.116-11.902 62.279.69c45.938.505 60.493-2.244 103.861-19.633 33.649-13.493 75.652-31.766 109.402-46.448 24.172-10.515 45.048-19.597 52.919-22.556.031-.012.063-.024.095-.036 19.525-7.569 25.193-25.835 20.701-39.966z"/><path d="m132.681 343.197c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z"/><path d="m256.009 320c5.523 0 10-4.477 10-10v-40c0-5.523-4.478-10-10-10-55.14 0-100-44.86-100-100s44.86-100 100-100c51.764 0 94.469 39.539 99.504 90h-12.795c-3.721 0-7.134 2.066-8.859 5.362-1.726 3.296-1.479 7.278.642 10.336l43.291 62.438c1.868 2.695 4.938 4.302 8.218 4.302s6.35-1.607 8.218-4.302l43.29-62.438c2.12-3.058 2.367-7.04.642-10.336-1.726-3.296-5.139-5.362-8.859-5.362h-13.6c-5.184-83.582-74.828-150-159.692-150-88.224 0-160 71.776-160 160s71.776 160 160 160zm0-300c77.196 0 140 62.804 140 140 0 5.523 4.478 10 10 10h4.188l-24.188 34.887-24.188-34.887h4.188c2.652 0 5.196-1.054 7.071-2.929s2.929-4.419 2.929-7.071c-.001-66.168-53.833-120-120-120-66.168 0-120 53.832-120 120 0 62.8 48.494 114.488 110 119.587v20.059c-72.544-5.147-130-65.814-130-139.646 0-77.196 62.804-140 140-140z"/><path d="m263.166 134.157c3.904 3.904 10.237 3.905 14.142-.001 3.905-3.905 3.905-10.237-.001-14.142-3.259-3.258-7.159-5.495-11.297-6.711v-3.303c0-5.523-4.478-10-10-10-5.523 0-10 4.477-10 10v5.282c-2.309 1.216-4.476 2.793-6.416 4.732-10.397 10.397-10.397 27.315 0 37.713l18.688 18.688c2.6 2.599 2.6 6.829 0 9.428-1.259 1.259-2.933 1.952-4.713 1.952s-3.456-.693-4.715-1.953c-3.905-3.905-10.237-3.905-14.142 0s-3.905 10.237 0 14.142c3.201 3.2 7.073 5.483 11.297 6.725v3.291c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10v-5.273c2.334-1.234 4.496-2.823 6.415-4.742 10.397-10.397 10.397-27.315 0-37.713l-18.688-18.688c-1.259-1.259-1.953-2.933-1.953-4.714s.693-3.455 1.953-4.714c2.6-2.6 6.83-2.598 9.43.001z"/></g></g></svg></span>실시간 교환현황</div>
					<div class="swiper_box">
			        	<!-- <div class="sell_tbl">
			        		<div class="sell_th" v-for="itemsName in itemsName">{{itemsName}}</div>
			        	</div> -->
			        	<div class="swiper_container_box">
			        		<div class="swiper_blind"></div>
			        		<swiper ref="mySwiper" :options="swiperOptions">
			        			<swiper-slide v-for="item in items" :v-Key="item">
			        				<div class="sell_tbl">
			        					<div class="sell_td" secondary>{{ item.createDateString }}</div>
			        					<div class="sell_td">
			        						<span class="brand">
			        							<img :src="brandCulture" v-if="item.company == 'culture'">
			        							<img :src="BrandHappy" v-else>
			        						</span>
			        						<span class="won">{{item.userName}}</span>
			        						<span class="won">{{numberWithCommas(item.requestPrice)}} 원</span>
			        					</div>
			        					<div class="sell_td">{{item.withdrawCompleteDateString != "" ? item.withdrawCompleteDateString : '-'}}</div>

			        					<div class="sell_td">
			        						<span :class="'state_A'" v-if="item.status == '처리중'">{{item.status}}</span>
			        						<span :class="'state_B'" v-else-if="item.status == '판매완료'">{{item.status}}</span>
			        						<span :class="'state_B'" v-else-if="item.status == '판매완료(일부)'">{{item.status}}</span>
			        						<span :class="'state_A'" v-else-if="item.status == '판매불가'">{{item.status}}</span>
			        					</div>
			        				</div>
			        			</swiper-slide>
			        		</swiper>
			        	</div>
			        </div>
			    </div>
			</b-col>
			<b-col md="5" class="mt-md-0 mt-3">
				<div class="line_show_box">
					<div class="ma_title"><span class="h3 mr-1 ml-1"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35"><g><g clip-rule="evenodd" fill-rule="evenodd"><path d="m116.001 50.001h279.997v200h-279.997zm0 240h99.997 99.997 80.003v171.997h-80.003-99.997-99.997v-85.998zm299.999-280.001h-320.001c-11 0-20 9-20 20v452c0 11 9 20 20 20h320.001c11 0 20-9 20-20v-452c0-11-9-20-20-20z" fill="#6d91ac"/><path d="m116.001 50.001h279.997v200h-279.997z" fill="#cff5fd"/><g fill="#fff"><path d="m116.001 290.001h99.997v85.999h-99.997z"/><path d="m116.001 376h99.997v85.998h-99.997z"/><path d="m215.998 290.001h99.997v85.999h-99.997z"/><path d="m215.998 376h99.997v85.998h-99.997z"/></g><path d="m315.995 376v85.998h80.003v-171.997h-80.003z" fill="#ff5d7d"/></g><g><path d="m416 0h-320.001c-16.542 0-29.999 13.458-29.999 30v452c0 16.542 13.458 30 30 30h320c16.542 0 30-13.458 30-30v-452c0-16.542-13.458-30-30-30zm10 482c0 5.514-4.486 10-10 10h-320.001c-5.514 0-10-4.486-10-10v-452c0-5.514 4.486-10 10-10h320.001c5.514 0 10 4.486 10 10z"/><path d="m395.998 40.001h-279.997c-5.523 0-10 4.477-10 10v200c0 5.523 4.477 10 10 10h95.002c5.523 0 10-4.477 10-10s-4.477-10-10-10h-85.002v-180h259.997v180h-84.995c-5.523 0-10 4.477-10 10s4.477 10 10 10h94.995c5.523 0 10-4.477 10-10v-200c0-5.523-4.477-10-10-10z"/><path d="m246 110.001c0-16.542-13.458-30-30-30s-30 13.458-30 30 13.458 30 30 30 30-13.458 30-30zm-40 0c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10z"/><path d="m296 220.001c16.542 0 30-13.458 30-30s-13.458-30-30-30-30 13.458-30 30 13.458 30 30 30zm0-40c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z"/><path d="m216.359 218.661c1.575.91 3.294 1.342 4.991 1.342 3.456 0 6.817-1.794 8.669-5.002l69.282-120c2.762-4.783 1.123-10.899-3.66-13.66-4.782-2.762-10.899-1.123-13.66 3.66l-69.282 120c-2.762 4.783-1.124 10.899 3.66 13.66z"/><path d="m395.998 280.001h-279.997c-5.523 0-10 4.477-10 10v171.997c0 5.523 4.477 10 10 10h279.997c5.523 0 10-4.477 10-10v-171.997c0-5.523-4.477-10-10-10zm-90.003 171.997h-79.997v-65.998h79.997zm0-85.998h-79.997v-65.999h79.997zm-99.997-65.999v65.999h-79.997v-65.999zm-79.997 85.999h79.997v65.999h-79.997zm259.997 65.998h-60.003v-151.997h60.003z"/><path d="m256.007 240.001h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z"/></g></g></svg></b-icon></span>입금금액 계산기</div>
					<div class="calculator_box">
						<div class="money_btn_cont">
							<div class="money_btn" @click="moneyBtn" :class="selected == 'cultureland' ? 'active': '' " value="cultureland">컬쳐랜드</div>
							<div class="money_btn" @click="moneyBtn" :class="selected == 'happymoney' ? 'active': '' " value="happymoney">해피머니</div>
						</div>
						<div class="calu_moneysum pt-3">
							<div class="line">상품권 금액 합계 :</div>

							<div class="line"><b-form-input id="moneyPrice" v-model="moneyPrice" placeholder="" @blur="inputBlur" @keyup="numberDataCh1" @keydown="numberDataCh" @click="numberDataCh2"></b-form-input></div>
						</div>
						<div class="calu_tbl p-3 bt_co">
							<div class="calu_tr">
								<div class="calu_td">
									<div>판매 요청 금액</div>
									<div>{{numberWithCommas(moneyPrice)}} 원</div>
								</div>
								<div class="calu_td">
									<div>매입 수수료율</div>
									<div>{{numberWithCommas(giftboxFees)}} %</div>
								</div>
								<div class="calu_td">
									<div>계좌이체 수수료</div>
									<div>{{numberWithCommas(bankTransfer)}} 원</div>
								</div>
							</div>
						</div>
						<div class="calu_tbl p-3 bt_co2">
							<div class="calu_tr">
								<div class="calu_td">
									<div>입금 예정 금액</div>
									<div><span class="last_td">{{numberWithCommas(endMoneyPrice)}}</span> 원</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class="mt-md-4">
			<b-col md="5" class="mt-md-0 mt-3">
				<div class="line_show_box">
					<div class="ma_title"><span class="h3 mr-1 ml-1"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="35" height="35" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<path style="fill:#FFBC53;" d="M93.324,386.706h72.835c41.438,0,75.03,33.592,75.03,75.03V502H18.294v-40.264  C18.294,420.298,51.887,386.706,93.324,386.706z"/>
						<polygon style="fill:#FFFFFF;" points="88.167,386.706 129.742,428.28 171.315,386.706 "/>
						<path style="fill:#5CC1FF;" d="M141.447,256H80.704v30.144c0,15.635,12.675,28.309,28.309,28.309h69.764v-21.121  C178.779,272.714,162.064,256,141.447,256z"/>
						<path style="fill:#FFCDAC;" d="M80.704,314.453v23.216c0,27.082,21.955,49.037,49.037,49.037l0,0  c27.082,0,49.037-21.955,49.037-49.037v-23.216H80.704z"/>
						<path style="fill:#FE6663;" d="M378.755,386.706h40.183c41.293,0,74.767,33.474,74.767,74.767V502H303.988v-40.527  C303.988,420.181,337.463,386.706,378.755,386.706z"/>
						<path style="fill:#FFBC53;" d="M398.846,256L398.846,256c31.89-2.44,57.981,21.732,57.981,53.715v15.4l0,0v29.524  c0,17.71-14.357,32.067-32.067,32.067h-51.827c-17.71,0-32.067-14.357-32.067-32.067v-36.053  C340.866,286.603,366.957,258.44,398.846,256z"/>
						<path style="fill:#A5DDFF;" d="M252.118,10H96.652c-20.69,0-37.462,16.772-37.462,37.462v100.21  c0,20.69,16.772,37.462,37.462,37.462h4.058v33.404l33.404-33.404h118.005c20.69,0,37.462-16.772,37.462-37.462V47.462  C289.581,26.772,272.809,10,252.118,10z"/>
						<path style="fill:#95E540;" d="M276.47,47.462h155.467c20.69,0,37.462,16.772,37.462,37.462v100.21  c0,20.69-16.772,37.462-37.462,37.462h-4.058V256l-33.404-33.404H276.47c-20.69,0-37.462-16.772-37.462-37.462V84.924  C239.007,64.234,255.779,47.462,276.47,47.462z"/>
						<path d="M174.018,377.083c-0.101-0.028-0.203-0.049-0.305-0.074c9.36-10.451,15.065-24.24,15.065-39.34v-44.337  c0-26.099-21.233-47.332-47.332-47.332H80.704c-5.522,0-10,4.477-10,10v81.669c0,15.1,5.706,28.889,15.065,39.34  c-0.102,0.025-0.204,0.046-0.305,0.075c-43.213,3.981-77.17,40.419-77.17,84.653V502c0,5.522,4.478,10,10,10h222.895  c5.522,0,10-4.478,10-10v-40.264C251.189,417.501,217.231,381.064,174.018,377.083z M90.704,319.786  c5.443,2.974,11.682,4.667,18.31,4.667h59.765v13.216c0,21.525-17.512,39.037-39.037,39.037s-39.037-17.512-39.037-39.037  L90.704,319.786L90.704,319.786z M147.173,396.706l-17.432,17.432l-17.432-17.432H147.173z M90.704,266h50.742  c15.071,0,27.332,12.261,27.332,27.332v11.121h-59.765c-10.096,0-18.31-8.214-18.31-18.31L90.704,266L90.704,266z M231.189,492  H28.294v-30.264c0-32.906,24.573-60.164,56.33-64.431l38.046,38.046c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929  l38.047-38.047c31.756,4.267,56.33,31.525,56.33,64.431V492H231.189z"/>
						<path d="M454.365,384.493c7.691-7.627,12.463-18.193,12.463-29.854V313.98c0-23.074-11.566-43.488-29.194-55.782  c0.16-0.712,0.245-1.448,0.245-2.198v-23.774c23.378-2.931,41.521-22.932,41.521-47.092V84.924c0-26.17-21.291-47.462-47.462-47.462  H276.469c-26.171,0-47.462,21.292-47.462,47.462v100.21c0,26.17,21.291,47.462,47.462,47.462h113.863l13.615,13.615  c-1.686-0.126-3.383-0.211-5.1-0.211c-37.485,0-67.981,30.496-67.981,67.98v40.658c0,11.662,4.772,22.227,12.463,29.854  c-29.094,13.443-49.341,42.883-49.341,76.98V502c0,5.522,4.478,10,10,10h189.718c5.522,0,10-4.478,10-10v-40.526  C503.706,427.376,483.458,397.936,454.365,384.493z M394.475,212.596H276.469c-15.143,0-27.462-12.319-27.462-27.462V84.924  c0-15.143,12.319-27.462,27.462-27.462h155.468c15.143,0,27.462,12.319,27.462,27.462v0.538h-63.438c-5.522,0-10,4.477-10,10  s4.478,10,10,10h63.438v79.672c0,15.143-12.319,27.462-27.462,27.462h-4.059c-5.522,0-10,4.477-10,10v9.261l-16.332-16.332  C399.67,213.65,397.127,212.596,394.475,212.596z M372.933,376.706c-12.168,0-22.067-9.899-22.067-22.067V313.98  c0-26.456,21.524-47.98,47.981-47.98c26.456,0,47.98,21.524,47.98,47.98v40.658c0,12.168-9.899,22.067-22.067,22.067h-5.821h-40.184  h-5.822V376.706z M483.706,492H313.988v-30.526c0-35.713,29.055-64.768,64.768-64.768h40.184c35.713,0,64.767,29.055,64.767,64.768  V492H483.706z"/>
						<path d="M90.71,194.764v23.774c0,4.044,2.437,7.691,6.173,9.239c1.237,0.513,2.537,0.762,3.825,0.762c2.603,0,5.16-1.017,7.073-2.93  l30.475-30.475h51.967c5.522,0,10-4.477,10-10s-4.478-10-10-10h-56.109c-2.652,0-5.195,1.054-7.071,2.929l-16.332,16.332v-9.261  c0-5.523-4.478-10-10-10h-4.059c-15.143,0-27.462-12.319-27.462-27.462V47.462C69.189,32.319,81.508,20,96.652,20h116.31  c5.522,0,10-4.477,10-10s-4.478-10-10-10H96.652C70.48,0,49.189,21.292,49.189,47.462v100.21  C49.189,171.832,67.333,191.833,90.71,194.764z"/>
						<path d="M252.124,20c2.63,0,5.2-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07  c-1.869-1.86-4.44-2.93-7.069-2.93c-2.641,0-5.221,1.07-7.07,2.93c-1.87,1.86-2.94,4.44-2.94,7.07s1.07,5.21,2.94,7.07  C246.904,18.93,249.483,20,252.124,20z"/>
						<path d="M354.204,85.46c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.07s4.44,2.93,7.07,2.93  s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07C359.415,86.53,356.834,85.46,354.204,85.46z"/>
					</svg></span>이용안내</div>
					<div class="faq_container">
						<div class="list" v-for="list in faqData" :v-Key="list">
							<div>{{list.title}}</div>
							<span class="day">{{list.createDate.split(' ')[0]}}</span>
						</div>
					</div>
				</div>
			</b-col>
			<b-col md="7" class="mt-md-0 mt-3">
				<div class="line_show_box">
					<div class="ma_title">
						<span class="h3 mr-1 ml-1"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="35" height="35" style="enable-background:new 0 0 512 512;" xml:space="preserve">
							<path style="fill:#C7EAFF;" d="M286,184H70c-33.137,0-60,26.863-60,60v154c0,33.137,26.863,60,60,60h64.979l-0.901,0.078L178,502  l0.031-44H286c33.137,0,60-26.863,60-60V244C346,210.863,319.137,184,286,184z"/>
							<path d="M178.002,512c-2.603,0-5.16-1.016-7.073-2.929L129.858,468H70c-38.598,0-70-31.402-70-70V244c0-38.598,31.402-70,70-70h101  c5.522,0,10,4.477,10,10s-4.478,10-10,10H70c-27.57,0-50,22.43-50,50v154c0,27.57,22.43,50,50,50h64.979  c4.09,0,7.626,2.461,9.171,6.008l23.868,23.867l0.014-19.882c0.004-5.52,4.479-9.993,10-9.993H286c27.57,0,50-22.43,50-50v-69  c0-5.523,4.478-10,10-10s10,4.477,10,10v69c0,38.598-31.402,70-70,70h-97.976L188,502.007c-0.003,4.043-2.44,7.687-6.177,9.233  C180.588,511.751,179.289,512,178.002,512z"/>
							<path style="fill:#FFBC53;" d="M366.655,10h-25.309C266.597,10,206,70.596,206,145.346l0,0c0,74.749,60.596,135.346,135.346,135.346  h25.309c13.854,0,27.22-2.086,39.805-5.953L448,316.255v-62.733c32.794-24.699,54-63.96,54-108.177l0,0  C502,70.596,441.404,10,366.655,10z"/>
							<path d="M448.002,326.255c-2.602,0-5.158-1.016-7.071-2.927l-37.387-37.366c-12,3.14-24.381,4.729-36.89,4.729h-25.309  C261.202,290.691,196,225.49,196,145.346S261.202,0,341.346,0h25.309C446.798,0,512,65.202,512,145.346  c0,23.216-5.313,45.405-15.794,65.951c-9.228,18.09-22.377,34.283-38.206,47.102v57.856c0,4.044-2.436,7.69-6.172,9.238  C450.591,326.006,449.291,326.255,448.002,326.255z M406.459,264.738c2.612,0,5.166,1.025,7.07,2.927L438,292.123v-38.6  c0-3.141,1.476-6.099,3.983-7.988C473.77,221.595,492,185.077,492,145.346C492,76.23,435.771,20,366.655,20h-25.309  C272.23,20,216,76.23,216,145.346s56.229,125.346,125.346,125.346h25.309c12.561,0,24.965-1.854,36.868-5.512  C404.489,264.883,405.479,264.738,406.459,264.738z"/>
							<path d="M356.8,186.774c-5.522,0-10-4.477-10-10v-24.025c0-8.957,6.13-16.585,14.908-18.549  c10.834-2.424,18.141-12.266,17.373-23.403c-0.76-11.027-9.649-19.916-20.677-20.676c-6.29-0.434-12.268,1.679-16.842,5.948  c-4.578,4.273-7.1,10.074-7.1,16.333c0,5.523-4.478,10-10,10s-10-4.477-10-10c0-11.691,4.903-22.973,13.453-30.954  c8.669-8.093,19.995-12.096,31.863-11.281c20.936,1.443,37.812,18.319,39.255,39.254c1.435,20.821-12.084,39.259-32.234,44.127  v23.226C366.8,182.297,362.323,186.774,356.8,186.774z"/>
							<path d="M356.8,226.33c-2.63,0-5.21-1.06-7.07-2.92c-1.859-1.86-2.93-4.44-2.93-7.08c0-2.63,1.07-5.21,2.93-7.07  s4.44-2.93,7.07-2.93s5.21,1.07,7.07,2.93c1.859,1.86,2.93,4.44,2.93,7.07c0,2.64-1.07,5.21-2.93,7.08  C362.01,225.27,359.43,226.33,356.8,226.33z"/>
							<path d="M275,330H64c-5.522,0-10-4.477-10-10s4.478-10,10-10h211c5.522,0,10,4.477,10,10S280.523,330,275,330z"/>
							<path d="M275,386c-2.63,0-5.21-1.07-7.07-2.93S265,378.63,265,376s1.069-5.21,2.93-7.07c1.86-1.86,4.44-2.93,7.07-2.93  s5.21,1.07,7.069,2.93c1.86,1.86,2.931,4.44,2.931,7.07c0,2.64-1.07,5.21-2.931,7.07C280.21,384.93,277.63,386,275,386z"/>
							<path d="M235.667,386H64c-5.522,0-10-4.477-10-10s4.478-10,10-10h171.667c5.522,0,10,4.477,10,10S241.19,386,235.667,386z"/>
							<path d="M210,274H64c-5.522,0-10-4.477-10-10s4.478-10,10-10h146c5.522,0,10,4.477,10,10S215.523,274,210,274z"/>
						</svg></span>FAQ
						<router-link to="/board/frequentlyAskedQuestions" class="more"></router-link>
					</div>
					<div class="faq_container">
						<div class="list" v-for="list in faqData" :v-Key="list">
							<div>{{list.title}}</div>
							<span class="day">{{list.createDate.split(' ')[0]}}</span>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>

	</b-container>
</template>

<script>
	import 'swiper/swiper-bundle.css'
	import axios from "axios"

	export default {
		name: 'containerArea',
		props: {
			msg: String
		},
		data() {
			return {
				value: { name: 'Vue.js', language: 'JavaScript' },
				options2: [
				{ name: 'Vue.js', language: 'JavaScript' },
				{ name: 'Rails', language: 'Ruby' },
				{ name: 'Sinatra', language: 'Ruby' },
				{ name: 'Laravel', language: 'PHP' },
				{ name: 'Phoenix', language: 'Elixir' }
				],
				selected: 'cultureland',
				moneyPrice: 0,
				endMoneyPrice: 0,
				cultureFees: null,
				happyFees: null,
				giftboxFees: 0,
				cultureFeesBankTransfer: 0,
				happyFeesBankTransfer: 0,
				bankTransfer: 0,
				alertOpen: false,
				itemsName: ['날짜', '판매자신청정보', '판매요청', '입금완료', '처리상태'],
				brandCulture: require('@/assets/culture.jpg'),
				BrandHappy: require('@/assets/happy.jpg'),
				items: [],
				swiperOptions: {
					slidesPerView: 6,
					loop: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: true
					},
					simulateTouch: false,
					direction: 'vertical',
				},
				faqData: '',
			}
		},
		created() {
			this.purchaseFeePercents();
			this.faqList();
			this.tradingGift();
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			}
		},
		mounted() {

		},
		methods: {
			inputBlur(){
				if(Number(this.moneyPrice) < 10000){
					if(Number(this.moneyPrice) >= 1){
        				// this.showMsgBoxOne('최소 1만원 이상부터 판매요청이가능합니다.')
        				alert('최소 1만원 이상부터 판매요청이가능합니다.')
        			}
        		} else if(Number(this.moneyPrice) > 5000000){
        			this.moneyPrice = 5000000
        			document.getElementById('moneyPrice').value = this.numberWithCommas(5000000)
        		} else {
        			this.moneyPrice = Number(this.moneyPrice.replaceAll(',', ''))
        			document.getElementById('moneyPrice').value = this.numberWithCommas(Number(this.moneyPrice))
        		}
        	},

        	moneyBtn(obj){
        		if(obj.target.innerText == '해피머니'){
        			this.selected = 'happymoney'
        		} else {
        			this.selected = 'cultureland'
        		}
        	},

        	numberDataCh(event){
        		if(event.key.replace(/[^0-9]/g, '') == ''){
        			event.returnValue=false;
        		}
        	},

        	numberDataCh1(event){
        		if(Number(document.getElementById('moneyPrice').value.replaceAll(',', '')) > 5000000){
        			if(this.alertOpen != true) {
        				// this.showMsgBoxOne('1회 요청 시 최대 500백만원까지 판매요청이 가능합니다.')
        				alert('1회 요청 시 최대 500만원까지 판매요청이 가능합니다.')
        			}
        			this.moneyPrice = Number(document.getElementById('moneyPrice').value)
        			event.returnValue=false;
        			document.getElementById('moneyPrice').value = 5000000
        		}
        	},

        	numberDataCh2(){
        		document.getElementById('moneyPrice').value = ''
        		this.moneyPrice = ''
        		this.endMoneyPrice = 0
        	},

        	showMsgBoxOne(text) {
        		this.alertOpen = true
        		this.boxOne = ''
        		this.$bvModal.msgBoxOk(text, {
        			okTitle: '확인',
        			okVariant: 'outline-dark',
        			footerClass: 'p-2 border-top-0',
        			hideHeaderClose: false,
        			centered: true
        		})
        		.then(value => {
        			this.boxOne = value
        			this.alertOpen = false
        		})
        		.catch(err => {

        		})
        	},

        	zeroNum: function(){
				// if(this.moneyPrice == 0) this.moneyPrice = ''
			},

			faqList(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/board/faq/?page=0&size=5', { withCredentials: true })
				.then( res => {
					this.faqData = res.data.content
				})
				.catch( err => {
        			// console.log(err);
        		});
			},

			tradingGift(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/trading/recent/?page=0&size=10&sort=idx,desc', { withCredentials: true })
				.then( res => {
					this.items = res.data.content
				})
				.catch( err => {
        			// console.log(err);
        		});
			},

			purchaseFeePercents(){
				var data = ''
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/fee/')
				.then( res => {
					for(var i=0;res.data.content.length>i;i++){
						if(res.data.content[i].company == "해피머니"){
							this.purchaseFeePercentData("해피머니", res.data.content[i])
						} else if(res.data.content[i].company == "컬처랜드"){
							this.purchaseFeePercentData("컬처랜드", res.data.content[i])
						}
					}
				})
				.catch( err => {
        			// console.log(err);
        		})

			},

			purchaseFeePercentData(obj, data){
				if(obj == "해피머니"){
					this.happyFees = data.purchaseFeePercents
					this.cultureFeesBankTransfer = data.transperFees
				} else if(obj == "컬처랜드"){
					this.cultureFees = data.purchaseFeePercents
					this.happyFeesBankTransfer = data.transperFees
				}
				if(this.selected == 'cultureland'){
					this.bankTransfer = data.transperFees
					this.giftboxFees = data.purchaseFeePercents
				} else if(this.selected == 'happymoney'){
					this.bankTransfer = data.transperFees
					this.giftboxFees = data.purchaseFeePercents
				}
			},

			numberWithCommas(data) {
				return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},

		watch: {
			selected: function (val) {
				if(val == 'cultureland'){
					this.giftboxFees = this.cultureFees
					this.bankTransfer = this.cultureFeesBankTransfer
				} else {
					this.giftboxFees = this.happyFees
					this.bankTransfer = this.happyFeesBankTransfer
				}
				if(this.endMoneyPrice != 0 ){
					this.endMoneyPrice = Math.floor((this.moneyPrice * (1 - this.giftboxFees / 100))-this.bankTransfer)
				}
			},
			moneyPrice: function(val){
				if(Number(val) > 9999){
					this.endMoneyPrice = Math.floor( (val * (1 - this.giftboxFees / 100))-this.bankTransfer )
				}
				// this.moneyPrice = this.numberWithCommas(Number(val.replaceAll(',', '')))
			}
		}
	}
</script>

<style>
.line_show_box{border: solid 1px #ededed;
	box-shadow: 0 7px 13px 0 rgba(0,0,0,0.06);
	border-radius: 15px;overflow:hidden;}
	.container_box{}
	.ma_title{padding:1rem 1rem 0 1rem;font-size: 1.1rem;color:#444;font-weight:700;position:relative;}
	.ma_title .more{position:absolute;top:50%;right:1rem;width:21px;height:21px;margin-top:-2px;border:solid 1px #999;}
	.ma_title .more:before{top:9px;right:5px;width:9px;height:1px;}
	.ma_title .more:after{top:5px;right:9px;width:1px;height:9px;}
	.ma_title .more:before,
	.ma_title .more:after{content:'';display:block;clear:both;position:absolute;background-color:#444;}
.swiper_box{/*border:solid 1px #ededed;border-top:none;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);*/}
.swiper_container_box{height:350px;/*box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);*/position:relative;}
.swiper_blind{position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;z-index:10;}
.swiper-container {width:100%;height:100%;}
.swiper-slide{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}
.calculator_box{/*border:solid 1px #ededed;border-top:none;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06)*/;}
.calculator_box .form-group{margin-bottom:0;}
.custom-control-label{padding:2px 0;font-size:.8em;}

.money_btn_cont{padding:.7rem;}
.money_btn_cont:after{content:'';display:block;clear:both;}
.money_btn.active{background-color:#498dec;color:#fff;}
.money_btn {
	cursor:pointer;
	float: left;
	border-radius: 20px;
	/* height: 30px; */
	padding: 10px 20px;
	background-color: #eee;
	font-size: .87rem;
}
.money_btn + .money_btn{margin-left:1rem;}

.bt_co{border-top:solid 1px #ededed;margin-top:1rem;}
.bt_co2{border-top:solid 1px #ededed;}
.calu_radio{}
.calu_radio > div{text-align:center;padding:8px 0}
.calu_radio > div >.custom-control{display:inline-block;margin:0 10px;text-align:center;}

.calu_moneysum{padding:0 15px;}
.calu_moneysum:after{content:'';display:block;clear:both;}
.calu_moneysum .line{float:left;width:50%;text-align:left;line-height:34px;font-size:1em;}
.calu_moneysum .line:first-child + .line{text-align:right;}
.calu_moneysum .line .form-control{font-size:1em;text-align:right;border:none;background-color:#ededed;border-radius:7px;}
.calu_tbl{}
.calu_tbl:after,
.calu_tbl .calu_tr:after{content:'';display:block;clear:both;}
.calu_tbl .calu_tr{}
.calu_tbl .calu_td{float:left;width:100%;padding:7px;}
.calu_tbl .calu_td > div{float:left;width:50%;text-align:left;font-size:1em;}
.calu_tbl .calu_td > div:first-child + div{text-align:right;}
.calu_tbl .calu_td > div > div{float:left;}
.calu_tbl .calu_td.last_td{margin-top:10px;border-top:solid 1px #eee;padding:7px;background-color: #fff;}
.calu_tbl .calu_td.last_td div:first-child + div{}
.calu_tbl .calu_td.last_td div:first-child + div span{color:#4384f3;font-weight:700;}
span.last_td{color:#4384f3;font-weight:700;}
.sell_tbl{width:100%;font-size:.8em;}
.sell_tbl:after{content:'';display:block;clear:both;}
.sell_tbl .sell_th{float:left;width:20%;line-height:40px;text-align:center;border-bottom:solid 1px #ededed;background-color:#000;color:#fff;font-weight:700;}
/*.sell_tbl .sell_td:first-child{width:10%;}*/
.sell_tbl .sell_td{float:left;width:20%;text-align:center;color:#777;line-height:30px;}
.sell_tbl .sell_td .brand{float:left;height:30px;margin-right:10px;}
.sell_tbl .sell_td .brand img{float:left;height:100%;}
.sell_tbl .sell_td .won{padding-left:5px;}

.sell_tbl .sell_td.time_num span{/*font-weight:700;*/}
.sell_tbl .sell_td:first-child + .sell_td{text-align:left;}
.sell_tbl .sell_th:first-child + .sell_th,
.sell_tbl .sell_td:first-child + .sell_td{width:40%;}
.state_A{content:'';background-color:#ccc;}
.state_B{background-image:linear-gradient(45deg,#498dec,#6729a7 95%);}
.state_A,
.state_B{width:80px;padding:0;text-align:center;color:#fff;font-size:.8em;border-radius:18px;display:inline-block}
.state_A:after,
.state_B:after{content:'';display:block;clear:both;}


.faq_container{padding:20px;border-top:none;}
.faq_container:after{content:'';display:block;clear:both}
.faq_container .list{float:left;width:100%;position:relative;padding-right:90px;font-size:1em;line-height:30px;color:#444;border-top:solid 1px #ededed;padding:.4rem;}
.faq_container .list:first-child{border-top:none}
.faq_container .list div{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
.faq_container .list .day{position:absolute;top:.4rem;right:.4rem}

@media screen and (max-width: 760px){
	.ma_title{font-size:.92rem;}
	.ma_title .h3{font-size:.92rem;}
	.swiper_container_box{}
	.custom-control-label,
	.calu_moneysum .line .form-control,
	.calu_tbl .calu_td div,
	.sell_tbl,
	.faq_container .list,
	.state_A:after,
	.state_B:after,
	.calu_moneysum .line{font-size:.9em;}

	.sell_tbl .sell_th:first-child + .sell_th + .sell_th + .sell_th + .sell_th,
	.sell_td.time_num  + .sell_th{width:22%;}
	.sell_tbl .sell_th:first-child + .sell_th + .sell_th + .sell_th,
	.sell_td.time_num{width:14%;}
	.sell_tbl .sell_th:first-child,
	.sell_tbl .sell_td:first-child{width:15%;}

	.sell_tbl .sell_th, 
	.sell_tbl .sell_td{font-size:.8rem;}
	.state_A:after,
	.state_B:after{width:50px;}
}
</style>
