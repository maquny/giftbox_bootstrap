<template>
	<div>
		<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
            <div class="mb-md-0 mb-4 pb-5 pt-5 container">
                <h3>개인정보처리방침</h3>
                <div></div>
                <div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
            </div>
        </div>

		<b-container class="mt-md-5 mt-4 mb-md-5 mb-4">
			<div class="first_text">(주)체육시간(이하 회사)는 고객님의 개인정보를 중요시하며, 안전하게 보호하기 위하여 최선의 노력을 다하고 있습니다.회사는 개인정보보호관련 법규 및 정부기관의 가이드 라인을 준수하고 있습니다.개인정보처리 방침은 관련 법규 또는 보다 나은 서비스의 제공을 위해 변경될 수 있으며, 이 경우 회사는 공지사항(또는 개별공지)을 통해 공지하고 있습니다.</div>
			<div>
				<div class="line">
					<div class="depth1">
						<div class="title">1. 수집하는 개인정보 항목</div>
						<div class="depth2">
							<div class="title">1) 회원가입 시</div>
							<div class="cont">
								<p>필수등록정보 : 이름(실명), 휴대폰번호, E-Mail, 비밀번호</p>
							</div>
							<div class="title">2) 서비스 이용 시</div>
							<div class="cont">
								<p>회사는 서비스 이용과 관련한 결제, 환불, 환급 등에 필요한 다음 정보 등을 추가로 수집할 수 있습니다.</p>
								<p>회원 본인 명의 계좌의 예금주명, 은행명, 계좌번호 등</p>
							</div>
							<div class="title">3) 기타</div>
							<div class="cont">
								<p>접속로그, 서비스 이용기록, 접속 IP 정보, 매입거래 기록, 쿠키, 방문일시, 불량 이용기록</p>
								<p>상담내역</p>
							</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">2. 수집한 개인정보의 이용목적</div>
						<div class="depth2">
							<div class="title">1) E-mail(아이디), 비밀번호</div>
							<div class="cont">
								<p>개인 식별</p>
							</div>
							<div class="title">2) 이름(실명), 휴대폰번호, 이통사 정보, 생년월일, 성별(별도 저장하지 않음)</div>
							<div class="cont">
								<p>성인인증</p>
							</div>
							<div class="title">3) 이름(실명), 휴대폰번호, 예금주명, 은행명, 계좌번호</div>
							<div class="cont">
								<p>상품권 거래</p>
							</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">3. 개인정보의 보유 및 이용기간</div>
						<div class="cont">
							<p>회사는 원칙적으로 개인정보의 이용목적 달성 후에는 해당 회원의 개인정보를 지체없이 파기합니다.<br/>단, 내부방침 및 관련법령의 규정에 의하여 보존할 필요가 있는 경우, 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관하며, 보관하는 정보를 그 보관의 목적으로서만 이용합니다.</p>
							<p class="p_depth2">
								<span>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</span>
								<span>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</span>
								<span>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</span>
								<span>웹사이트 방문기록 : 3개월 (통신비밀보호법)</span>
							</p>
						</div>
					</div>
					<div class="depth1">
						<div class="title">2. 수집한 개인정보의 이용목적</div>
						<div class="depth2">
							<div class="title">1) 파기절차</div>
							<div class="cont">
								<p>회원의 개인정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부방침 및 기타 관련 법령에 의한 정보보호 사유(개인정보의 보유 및 이용기간 참조)에 따라 일정기간 보관 된 후 파기됩니다.</p>
								<p>별도 DB로 옮겨진 개인정보는 법률에 의한 경우를 제외하고는 다른 목적으로 이용되지 않으며 안전하게 관리되고 있습니다.</p>
							</div>
							<div class="title">2) 파기방법</div>
							<div class="cont">
								<p>전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 안전한 방법을 사용하여 파기합니다.</p>
								<p>종이에 출력된 개인정보는 분쇄기를 이용하여 분쇄하거나 소각을 통하여 파기합니다.</p>
							</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">5. 개인정보의 제3자 제공 및 위탁</div>
						<div class="depth2">
							<div class="title">1) 개인정보 제3자 제공</div>
							<div class="cont">
								<p>회사는 원칙적으로 개인정보의 수집 및 이용목적 외에는 회원의 개인정보를 제3자에게 제공하지 않습니다. 다만 아래의 경우는 예외로 합니다.</p>
								<p>회원이 사전에 동의한 경우</p>
								<p>법령의 규정에 의거하거나, 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
							</div>
							<div class="title">2) 개인정보 위탁</div>
							<div class="cont">
								<p>회사는 서비스의 제공에 있어 반드시 필요한 업무 중 일부를 외부 업체에게 위탁하여 수행하고 있습니다.<br/>
									외부업체에게 위탁 시 관계 법령에 따라 계약서 등을 통하여 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고, 이를 준수하도록 관리감독하고 있습니다.<br/>
								더 나은 서비스 제공을 위하여 회사는 아래와 같은 업무를 외부 업체에 위탁하고 있습니다.</p>
							</div>
						</div>
					</div>
					<div class="depth1 tbl_box">
						<table>
							<thead>
								<tr>
									<th>수탁업체</th>
									<th>위탁업무</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>코리아크레딧뷰로(주)</td>
									<td>본인인증</td>
								</tr>
								<tr>
									<td>(주)세틀뱅크<br/>신한은행, 국민은행</td>
									<td>실시간 계좌이체</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="depth1">
						<div class="title">6. 회원 권리와 그 행사 방법</div>
						<div class="cont">
							<p>회사는 원칙적으로 개인정보의 이용목적 달성 후에는 해당 회원의 개인정보를 지체없이 파기합니다.<br/>단, 내부방침 및 관련법령의 규정에 의하여 보존할 필요가 있는 경우, 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관하며, 보관하는 정보를 그 보관의 목적으로서만 이용합니다.</p>
							<p class="p_depth2">
								<span>회원은 언제든지 본인의 개인정보를 조회, 수정할 수 있으며, 회원탈퇴를 통해 개인정보 이용에 대한 동의 등을 철회할 수 있습니다.</span>
								<span>회원 본인의 개인정보의 수정 및 조회를 위해서는 [마이페이지] 내의 [회원정보수정] 항목에서 확인이 가능하며, 회원 탈퇴는 [마이페이지] 내 [회원정보수정] 항목의 [탈퇴하기]에서 본인 확인 절차를 거친 후 탈퇴가 가능합니다.</span>
								<span>회사의 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하여 개인정보의 열람/수정을 요청할 수 있습니다.</span>
								<span>회원이 개인정보의 오류에 대한 정정 요청을 한 경우, 정정이 완료되기 전까지 해당 개인정보를 이용 또는 제공하지 않으며, 회원의 요청에 의해 삭제된 개인정보는 “3. 개인정보의 보유 및 이용기간” 항목에 명시된 바에 따라 취급하고, 그 외의 용도로는 열람, 이용할 수 없도록 하고 있습니다.</span>
								<span>잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를 제3자에게 지체없이 통지하고 정정이 이루어지도록 하고 있습니다.</span>
								<span>만 14세 이상인 경우에만 회원가입이 가능하며, 만 14세 미만 아동이 개인정보는 원칙적으로 수집하지 않습니다.</span>
							</p>
						</div>
					</div>
					<div class="depth1">
						<div class="title">7. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</div>
						<div class="depth2">
							<div class="title">1) 회사는 더 나은 서비스 제공을 위해 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’를 사용합니다.</div>
							<div class="title">2) 쿠키란 웹사이트를 운영하는데 이용되는 서버가 회원의 컴퓨터로 전송하는 아주 작은 텍스트 파일로서 회원의 컴퓨터 하드디스크에 저장됩니다. 회원은 쿠키 사용여부를 선택할 수 있습니다. 단, 쿠키 사용을 거부하였을 경우, 서비스 제공에 어려움이 있을 수 있습니다.</div>
							<div class="title">3) 쿠키 설정 거부 방법</div>
							<div class="cont">
								<p>사용하는 웹브라우저의 옵션 설정을 통해 모든 쿠키를 허용 또는 쿠키를 저장할 때마다 확인절차를 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부한 경우, 로그인이 필요한 피니의 일부 서비스 이용에 어려움이 있을 수 있습니다.</p>
							</div>
							<div class="title">4) 쿠키 사용 허용여부 설정 방법 (Internet Explorer의 경우)</div>
							<div class="cont">
								<p>브라우저 [도구] 메뉴 -> [인터넷옵션] 선택</p>
								<p>[개인정보] 에서 [고급] 선택</p>
								<p>쿠키 허용여부 선택</p>
							</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">8. 개인정보 보호 책임자</div>
						<div class="cont">
							<p>회사는 개인정보 보호와 관련한 불만 등을 처리하기 위하여 고객서비스 담당 부서 및 개인정보책임자를 지정하고 있습니다.</p>
							<div class="depth2 tbl_box">
								<table>
									<thead>
										<tr>
											<th>구분</th>
											<th>정보</th>
											<th>연락처</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>고객서비스 담당부서</td>
											<td>고객상담실</td>
											<td>help@<</td>
										</tr>
										<tr>
											<td>개인정보관리책임자</td>
											<td>공영식</td>
											<td>help@<</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p>기타 개인정보침해에 대한 신고나 상담이 필요한 경우, 아래 기관에 문의하시기 바랍니다.</p>
							<p class="p_depth2">
								<span>개인정보분쟁조정위원회(www.kopico.go.kr/국번없이 118)</span>
								<span>개인정보보호위원회(www.pipc.go.kr/국번없이 118)</span>
								<span>대검찰청 사이버범죄수사단(www.spo.go.kr/국번없이 1301)</span>
								<span>경찰청 사이버안전국(cyberbureau.police.go.kr/182)</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</b-container>
	</div>
</template>
<script>
	export default{
		name: 'privacyStateMent',
		data() {
			return {
                itemImg: require('@/assets/sub_top_bg.png'),
			}
		},
		created() {
			document.documentElement.scrollTop = 0;
		},
	}
</script>
​
<style scoped="">
body{color:#444;}
.depth1:after,
.depth2:after{content:'';display:block;clear:both;}
.first_text{font-size:.875rem;line-height:1rem;padding:2rem;background-color:#f9f9f9;}
.depth1{font-size:.875rem;margin-top:2rem;}
.depth1 p{line-height:1rem;}
.depth1 > .title{line-height:1rem;}
.depth1 > .cont{font-size:.875rem;margin:.5rem;}
.depth1 > .cont > p{font-size:.875rem;}
.depth1 > .cont > .p_depth2{margin:.5rem;}
​
.depth2 > .cont > p,
.depth1 > .cont .p_depth2 span{position:relative;}
.depth2 > .cont > p:before,
.depth1 > .cont .p_depth2 span:before{content:'-';display:block;position:absolute;top:0;left:-10px;}
​
.depth2{font-size:.875rem;margin:.7rem;}
.depth2 > .title{line-height:1rem;}
.depth2 > .cont{margin:.5rem;}
.depth2 > .cont > p{font-size:.875rem;margin:.5rem;line-height:1rem;}
​
.depth1.tbl_box{padding:2rem 1rem;}
.depth2.tbl_box{padding:.5rem 1rem;}
.tbl_box{}
.tbl_box table{float:left;width:100%;border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;font-size:.85rem;}
.tbl_box table th{width:50%;text-align:left;background-color:#ededed;padding:10px;border-left:solid 1px #ddd;}
.tbl_box table td{text-align:left;padding:1rem;border-top:solid 1px #ddd;border-left:solid 1px #ddd;}
.tbl_box table tr:first-child td{}
.tbl_box table th:first-child,
.tbl_box table td:first-child{border-left:none;}
</style>​