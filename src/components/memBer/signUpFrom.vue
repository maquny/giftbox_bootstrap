<template>
	<div>
		<slot name="header"></slot>

		<div class="checksWrap_type1" id="fregister_chkall">
			<div class="checks">
				<input type="checkbox" @change="toggleAll" v-model="selected" name="chk_all" value="1" id="chk_all">
				<label for="chk_all" :style="'background-image:url('+backgroundImage+')'">모두 동의합니다.</label>
			</div>
		</div>

		<div class="mb_section_box">
			<section class="mb_section" id="fregister_term" v-for="(item, index) in flavours" v-bind:key="item">
				<fieldset class="fregister_agree">
					<div class="checksWrap_type1">
						<div class="checks">
							<input type="checkbox" @click="inputClick" v-model="selected" name="agree" :id="'chk_'+index" :value="item">
							<label :for="'chk_'+index" :style="'background-image:url('+backgroundImage+')'"></label>
							<span @click="modalId(index)" v-if="index != 0">{{item}}</span>
							<span v-else>{{item}}</span>
						</div>
					</div>
				</fieldset>
			</section>


		</div>
		<b-modal id="modal-scrollable1" scrollable title="개인정보처리방침" hide-footer>
			<div class="first_text" style="max-height:300px;">(주)체육시간(이하 회사)는 고객님의 개인정보를 중요시하며, 안전하게 보호하기 위하여 최선의 노력을 다하고 있습니다.회사는 개인정보보호관련 법규 및 정부기관의 가이드 라인을 준수하고 있습니다.개인정보처리 방침은 관련 법규 또는 보다 나은 서비스의 제공을 위해 변경될 수 있으며, 이 경우 회사는 공지사항(또는 개별공지)을 통해 공지하고 있습니다.</div>
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
									<td>(주)세틀뱅크신한은행</td>
								</tr>
								<tr>
									<td>본인인증</td>
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
											<td> cs@makepin.co.kr</td>
										</tr>
										<tr>
											<td>개인정보관리책임자</td>
											<td>공영식</td>
											<td> cs@makepin.co.kr</td>
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
		</b-modal>

		<b-modal id="modal-scrollable2" scrollable title="이용약관" hide-footer>
			<div>
				<div class="line">
					<div class="depth1">
						<div class="title">제1조(목적)</div>
						<div class="cont">
							<p>이 약관은 (주)체육시간(이하 회사)가 제공하는 서비스(이하 서비스)와 관련하여 회사와 이용자 간의 서비스 이용조건 및 절차, 회사와 이용자간의 권리와 의무 및 책임사항 등 기타 필요한 제반 사항을 정하는데 그 목적이 있습니다.<br/>이 약관은 PC 통신, 스마트폰(안드로이드폰, 아이폰 등) 앱, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 준용됩니다.</p>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제2조 (약관의 효력과 변경)</div>
						<div class="depth2">
							<div class="title">1. 이 약관은 회사가 제공하는 모든 인터넷서비스에 게시하여 공시합니다.</div>
							<div class="title">2. 이 약관은 서비스에 가입된 회원을 포함하여 약관에 동의 후 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</div>
							<div class="title">3. 회사는 관련 법령의 변경이나 이용자의 권리 및 의무사항을 개선하기 위해 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령에 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 적용일자 및 변경내용, 변경사유 등을 명시하여 그 적용일 전 7일 이전(다만, 이용자에게 불리한 약관의 개정의 경우에는 그 적용일자 30일전)부터 그 적용일자 경과 후 일정 기간 동안 서비스 내 로그인시 동의창 또는 전자적 수단을 통해 따로 명확히 통지하도록 합니다.</div>
							<div class="title">4. 이용자는 변경된 약관에 대해 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우에는 서비스 이용을 중단하고 탈퇴할 수 있습니다. 다만, 변경약관 공지 시 이용자가 별도의 의사표시를 하지 않으면 승낙한 것으로 간주하겠다는 내용도 함께 공지한 경우에는 이용자가 제3항의 방법 등으로 별도 고지한 바에 따라 변경된 약관의 적용일로부터 15일 이내(약관 시행일까지) 회사에 대해 명시적으로 거부의 의사표시를 하지 아니하는 경우 또는 이용자가 변경된 이용약관의 적용일 이후에도 서비스를 계속 사용하는 경우에는 변경된 약관에 동의한 것으로 간주합니다.</div>
							<div class="title">5. 회사는 필요한 경우 특정 서비스에 관하여 적용될 사항(이하 개별약관이라고 합니다)을 정하여 미리 공지할 수 있습니다. 이용자가 이러한 개별약관에 동의하고 특정 서비스를 이용하는 경우에는 개별약관이 우선적으로 적용되고, 이 약관은 보충적인 효력을 갖습니다. 개별약관의 게시·변경에 관해서는 위 제1항, 제2항, 제3항, 제4항의 내용을 준용합니다.</div>
							<div class="title">6. 이 약관과 개별약관에서 규정된 내용이 회사에서 공지하는 운영정책에서 정한 이용 규정과 충돌하는 경우에는 운영정책의 규정이 우선하여 적용됩니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제3조 (약관의 적용)</div>
						<div class="cont">
							<p>이 약관에 명시되지 아니한 사항에 대하여는 별도의 세부 약관, 운영정책, 회사의 공지, 이용안내, 관계법령에서 정한 바에 따릅니다.</p>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제4조 (회사정보 등의 제공)</div>
						<div class="cont">
							<p>회사는 다음 각 호의 사항을 서비스 초기화면이나 회사 홈페이지에 게시하여 이용자가 이를 쉽게 알 수 있도록 합니다. 다만, 개인정보처리방침과 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
						</div>
						<div class="depth2">
							<div class="title">1. 상호 및 대표자의 성명</div>
							<div class="title">2. 영업소 소재지 주소 및 전자우편주소</div>
							<div class="title">3. 사업자등록번호, 통신판매업 신고번호</div>
							<div class="title">4. 개인정보처리방침</div>
							<div class="title">5. 서비스이용약관</div>
							<div class="title">6. 운영정책</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제5조(용어의 정의)</div>
						<div class="cont">
							<p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
						</div>
						<div class="depth2">
							<div class="title">1. 이용자 : 본 약관에 따라 회사와 이용계약을 체결하고 회사에서 운영하는 서비스를 이용할 수 있는 고객을 의미합니다.</div>
							<div class="title">2. 서비스 : 회사가 지정한 종류의 상품권을 회원으로부터 회사가 구매(매입)하고, 수수료를 제한 매입대금을 지불하는 서비스를 말합니다.</div>
							<div class="title">3. 상품권 : 회사가 지정한 종류의 상품권으로서, 회사의 정책에 따라 그 종류와 범위에 변동이 있을 수 있으며, 세부사항은 공지사항 등을 통해 고지합니다.</div>
							<div class="title">4. 아이디(ID) : 이용자의 식별과 서비스 이용을 위하여 메일 주소를 활용하여 이용자 스스로가 설정하고 회사가 승인합니다. 이때 작성된 이메일에 대해서는 별도의 인증 과정을 거치지 않으며, 작성된 이메일에 오류가 있을 시 회사가 이용자에게 안내하는 중요한 알림이 전송되지 않을 수 있습니다. 이메일 작성 오류로 인한 문제 발생 시, 그 책임은 전적으로 회원 본인에게 있습니다. 아이디로 사용되는 이메일주소는 기존 가입내역을 포함하여 중복되지 않는 메일 주소만 사용이 가능합니다.</div>
							<div class="title">5. 비밀번호 : 이용자의 동일성 확인과 권익 및 비밀보호를 위하여 이용자 스스로가 설정하여 회사에 등록한 영문 대소문자, 숫자, 특수문자의 조합을 말합니다.</div>
							<div class="title">6. 수수료 : 이용자가 서비스를 통해 상품권을 판매할 경우, 회사가 서비스 제공을 위해 취하는 수수료를 뜻합니다. </div>
							<div class="title">7. 이 약관에서 정의되지 않은 용어는 관련법령이 정하는 바에 따릅니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제6조 (개별서비스에 대한 별도약관 및 운영정책)</div>
						<div class="depth2">
							<div class="title">1. 회사는 회사가 운영하는 서비스에 대해 별도의 이용약관 또는 운영정책을 정할 수 있으며, 해당 내용이 이 약관과 상충될 경우에는 별도의 이용약관 또는 운영정책이 우선하여 적용됩니다.</div>
							<div class="title">2. 이 약관에서 정하지 않은 사항이나 해석에 대해서는 제1항의 별도의 이용약관 또는 운영정책 및 관계법령 또는 상관례에 따릅니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제7조 (이용계약의 성립)</div>
						<div class="depth2">
							<div class="title">1. 이용계약은 이용자의 약관동의, 이용신청에 대한 회사의 승낙에 의하여 성립합니다.</div>
							<div class="title">2. 이용자의 이용신청에 대해 회사는 전문기관을 통한 실명확인 및 본인인증 등을 요청할 수 있습니다. </div>
							<div class="title">3. 이용계약은 관련법령에 의거 만 14세 미만이 회원가입이 제한될 수 있습니다.</div>
							<div class="title">4. 회사는 이용자의 가입신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만 회사는 다음 각호에 해당하는 경우, 이용신청을 거부하거나, 사후에 이용계약을 해지할 수 있습니다.</div>
							<div class="cont">
								<p>가. 실명이 아니거나 타인의 명의를 이용한 경우</p>
								<p>나. 이미 가입된 이용자의 이메일주소 등의 정보가 동일한 경우</p>
								<p>다. 타인의 명의를 도용하거나, 기입내용에 허위, 기재누락, 오기가 있는 경우</p>
								<p>라. 부정한 용도 또는 영리를 추구할 목적으로 서비스를 이용하고자 하는 경우</p>
								<p>마. 이전에 동일, 유사한 아이디 또는 다른 아이디를 통해 부정한 사용을 한 이력이 있거나 의심되는 경우</p>
								<p>바. 관련법령에 위배되거나 사회의 안정질서 혹은 미풍양속을 저해할 수 있는 목적으로 신청한 경우</p>
								<p>사. 기타 이 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우 및 회사가 합리적 판단에 의해 필요하다고 인정하는 경우</p>
							</div>
							<div class="title">5. 회사는 서비스 관련 설비의 기술상 또는 업무상 문제가 있거나 설비의 여유가 없는 경우 승낙을 유보할 수 있습니다.</div>
							<div class="title">6. 회사는 이용자에 대해 운영정책에 따라 등급별로 구분하여 이용에 차등을 둘 수 있습니다.</div>
							<div class="title">7. 회사는 이용자에 대해 청소년보호법 등에 따른 등급 및 연령 준수를 위해 이용제한이나 등급별 제한을 할 수 있습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제8조 (서비스 이용시간)</div>
						<div class="cont">
							<p>서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴1일 24시간을 원칙으로 합니다. 다만, 정기점검 등의 필요로 회사가 지정한 날이나 시간은 제외됩니다.</p>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제9조 (이용자의 아이디 및 비밀번호에 대한 의무)</div>
						<div class="depth2">
							<div class="title">1. 아이디와 비밀번호에 관한 관리책임은 이용자에게 있으며, 이를 소홀히 하여 발생한 모든 민형사상의 책임은 이용자 자신에게 있습니다.</div>
							<div class="title">2. 이용자는 자신의 아이디 및 비밀번호를 제3자가 이용하게 해서는 안됩니다.</div>
							<div class="title">3. 이용자가 자신의 아이디 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 회사에 통보하고 회사의 조치가 있는 경우에는 그에 따라야 합니다.</div>
							<div class="title">4. 이용자가 전 항에 따른 통지를 하지 않거나 회사의 조치에 응하지 아니하여 발생하는 모든 불이익에 대한 책임은 이용자 자신에게 있습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제10조 (이용자의 의무)</div>
						<div class="depth2">
							<div class="title">1. 이용자는 관계법령, 이 약관의 규정, 이용안내 등 회사가 통지하는 사항을 준수하여야 하며, 기타 회사 업무에 방해되는 행위를 하여서는 안됩니다.</div>
							<div class="title">2. 이용자는 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.</div>
							<div class="cont">
								<p>가. 서비스 신청 또는 변경 시 허위내용의 등록</p>
								<p>나. 회사가 게시한 정보의 허가 받지 않은 변경</p>
								<p>다. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</p>
								<p>라. 회사 및 기타 제3자의 저작권 등 지식 재산권에 대한 침해</p>
								<p>마. 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
								<p>바. 외설 또는 폭력적인 메시지, 동영상, 음성 기타 공공질서, 미풍양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위</p>
								<p>사. 이용자의 의무 불이행</p>
								<p>아. 기타 관련법령이나 회사에서 정한 규정에 위배되는 행위</p>
							</div>
							<div class="title">3. 이용자는 개인정보 등 이용계약사항이 변경된 경우에는 이를 즉시 회사에 알려야 합니다. 이를 통보하지 않음으로써 발생한 손해나 불이익에 대한 모든 책임은 이용자에게 있습니다.</div>
							<div class="title">4. 이용자는 상기 제2항의 행위를 하는 것으로 의심되는 이용자는 지체없이 이메일, 신고하기 등을 통해 신고를 접수하여야 합니다.</div>
							<div class="title">5. 회사는 서비스의 운영에 관련된 구체적인 유형을 운영정책에서 정할 수 있으며, 이용자는 이를 준수할 의무가 있습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제11조 (회사의 의무)</div>
						<div class="depth2">
							<div class="title">1. 회사는 관련법령과 이 약관이 금지하거나 공공질서, 미풍양속에 반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여야 합니다.</div>
							<div class="title">2. 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.  </div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제12조 (상품권 거래)</div>
						<div class="depth2">
							<div class="title">1. 이용자는 다음의 방법으로 서비스 상에서 상품권을 판매 할 수 있습니다.</div>
							<div class="cont">
								<p>가. 회원가입 및 본인 계좌 인증 완료</p>
								<p>나. 본인 소유의 올바른 상품권 핀번호의 입력</p>
								<p>다. 약관, 개인정보취급방침, 개인정보 제3자 정보제공, 매입서비스 이용조건 및 매입진행 내용에 대한 확인 및 동의</p>
								<p>라. 매입 수수료, 입금금액 등 비용에 대한 내용 확인</p>
								<p>마. 최종 동의 및 매입 신청</p>
							</div>
							<div class="title">2. 회사는 이용자가 상품권 판매 신청을 함에 있어 다음의 각 내용을 알기 쉽게 제공하여야 합니다.</div>
							<div class="cont">
								<p>가. 본 이용약관, 개인정보취급방침, 개인정보 제3자 정보제공, 매입서비스 이용조건 및 진행 내용</p>
								<p>나 . 수수료 및 입금 금액 등 비용에 대한 내용</p>
								<p>다. 거래 내역</p>
							</div>
							<div class="title">3. 회사는 이용자의 판매 요청에 대해 다음의 방법으로 거래를 진행합니다.</div>
							<div class="cont">
								<p>가. 이용자가 판매을 요청한 상품권의 사용여부 확인</p>
								<p>나. 매입 가능 상품권의 판매대금 및 수수료 금액 안내</p>
								<p>다. 이용자 동의 시 상품권 핀번호 매입처리 및 이용자가 인증한 계좌로의 실시간 입금처리</p>
							</div>
							<div class="title">4. 회사는 안전한 거래 등의 안정적 서비스 제공을 위해 이용자별 판매금액 한도 정책을 시행합니다. 판매금액 한도 정책은 회사에서 정의한 규칙에 따르며, 회사의 사정에 따라 변경될 수 있으며, 회사는 서비스를 통해 변경 내용을 고지합니다.</div>
							<div class="title">5. 회사가 제3자에게 구매자 개인정보를 제공∙위탁할 필요가 있는 경우 실제 구매신청 시 구매자의 동의를 받아야 하며, 회원가입 시 미리 포괄적으로 동의를 받지 않습니다. 이 때 회사는 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의 개인정보 이용 목적 및 보유∙이용 기간 등을 구매자에게 명시하여야 합니다. 다만, 정보통신망이용촉진 및 정보보호 등에 관한 법률 제25조 제1항에 의한 개인정보 취급위탁의 경우 등 관련 법령에 달리 정함이 있는 경우에는 그에 따릅니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제14조 (거래내역)</div>
						<div class="depth2">
							<div class="title">1. 이용자의 거래 내역은 이용자가 서비스 로그인 후 개별 확인 할 수 있습니다.</div>
							<div class="title">2. 이용자의 고의 또는 과실로 인해 거래내역이 노출되어 발생하는 모든 문제에 대한 책임은 이용자 본인에게 있으며, 회사는 책임이 없습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제15조 (부정이용 금지)</div>
						<div class="depth2">
							<div class="title">1. 다음 각호에 해당하는 경우 회사는 이를 부정이용으로 판단하고 이용자의 서비스 이용을 정지하거나 제한할 수 있습니다.</div>
							<div class="cont">
								<p>가. 상품권 발행사에서 정상 발행된 핀번호가 아닌, 비정상적인 방식(불법프로그램, 임의생성 등)으로 생성된 핀번호로 거래를 시도하는 행위</p>
								<p>나. 이용자 본인이 정상적인 방법으로 보유하지 않고, 비정상적 또는 불법적인 방식으로 취득한 핀번호로 거래를 시도하는 행위</p>
								<p>다. 거래가 완료되었거나 이미 사용된 핀번호의 유통 등의 거래를 시도하는 행위</p>
								<p>라. 회사가 제공하는 서비스에서 비정상적인 방식으로 핀번호의 판매나 매입을 시도하는 행위</p>
								<p>마. 이용자 자신의 계정 정보 등 회사가 제공하는 서비스를 타인에게 판매, 대여, 양도하는 행위 및 이를 홍보하는 행위</p>
							</div>
							<div class="title">2. 회사는 이용자가 주민등록법, 저작권법 또는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 대한민국 내 제반 법령을 위반한 것으로 의심이 되는 경우 서비스 이용을 제한 할 수 있으며, 수사기간을 통하여 사실관계를 규명할 수 있습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제16조(거래의 취소 및 환불)</div>
						<div class="depth2">
							<div class="title">1. 회사의 취소 및 청약철회 규정은 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령을 준수합니다.</div>
							<div class="title">2. 회사가 매입한 상품권 핀번호는 거래와 동시에 사용완료 처리되므로, 거래된된 상품권의 핀번호는 취소 또는 환불되지 않습니다. 다만 회사는 아래 각 호에 해당하는 경우, 3항의 방법으로 이용자의 요청 또는 회사의 확인을 통해 요청된 매입거래의 취소 또는 환불을 진행할 수 있습니다.</div>
							<div class="cont">
								<p>가. 상품권 판매거래 시 시스템적 장애 또는 Network 문제로 인해 상품권 핀번호 매입만 수행되고 거래금액이 이용자의 계좌에 입금처리 되지 않은 경우</p>
								<p>나. 상품권 발행사의 장애 또는 시스템적 오류로 인해 상품권 핀번호 매입이 정상 수행되지 않고, 사용처리가 된 경우</p>
							</div>
							<div class="title">3. 회사는 2항의 각 호에 해당하는 경우, 매입요청된 상품권 핀번호의 반환이 아닌, 매입거래 금액 기준으로 이용자에게 현금으로 환불을 수행합니다.</div>
							<div class="title">4. 미성년자 또는 미성년자의 법정대리인은 미성년자의 구매를 취소할 수 있으며 구체적인 내용은 민법 상 미성년자의 법률행위 취소 규정에 따릅니다.</div>
							<div class="title">5. 이용자가 타인의 명의 또는 계좌를 도용하는 등 본 약관에서 금지하는 부정한 방법으로 부당한 이익을 편취하였다고 의심되는 경우, 회사는 이용자의 거래를 취소처리하거나 제한할 수 있으며, 이용자가 충분한 소명자료를 제공하기 전까지 환불 및 거래 전체를 보류할 수 있습니다.</div>
							<div class="title">6. 기타 이 약관 및 서비스의 이용안내에 규정되지 않은 취소 및 환불에 대한 사항에 대해서는 소비자 피해보상 규정에서 정한 바에 따릅니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제17조 (서비스의 중단 및 변경)</div>
						<div class="depth2">
							<div class="title">1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</div>
							<div class="title">2. 회사는 운영상, 기술상 상당한 이유가 있는 경우 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.</div>
							<div class="title">3. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.</div>
							<div class="title">4. 본 조 1항과 2항에 따라 서비스가 변경, 중단 될 경우, 회사는 제18조에 정한 방법을 통해 이용자에게 통지합니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제18조 (회원에 대한 통지)</div>
						<div class="depth2">
							<div class="title">1. 회사가 이용자에 대한 통지를 하는 경우 이 약관에 별도 규정이 없는 한 SMS(단문메세지), 이메일 등으로 할 수 있습니다.</div>
							<div class="title">2. 회사는 이용자 전체에 대한 통지의 경우 7일 이상 서비스 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제19조 (개인정보의 보호 및 관리)</div>
						<div class="depth2">
							<div class="title">1. 회사는 이용자의 개인정보 수집 시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.</div>
							<div class="title">2. 회사는 회원가입 시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.</div>
							<div class="title">3. 회사는 이용자의 개인정보를 수집·이용하는 때에는 해당 이용자에게 그 목적을 고지하고 동의를 받습니다.</div>
							<div class="title">4. 회사는 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 해당 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.</div>
							<div class="title">5. 회사가 제2항과 제3항에 의해 "회원"의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제22조 제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.</div>
							<div class="title">6. 이용자는 언제든지 회사에 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 회사는 이에 대해 지체 없이 필요한 조치를 취할 의무가 있습니다. 회사가 오류의 정정을 요구한 경우에는 회사는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. 단, 열람 및 오류 정정의 절차는 회사가 정한 바에 따릅니다.</div>
							<div class="title">7. 회사는 개인정보 보호를 위하여 이용자의 개인정보를 취급하는 자를 최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.</div>
							<div class="title">8. 회사 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제20조 (이용계약의 해지 및 종료)</div>
						<div class="depth2">
							<div class="title">1. 이용자는 언제든지 서비스 내 회원탈퇴를 통하여 이용계약을 해지할 수 있습니다.</div>
							<div class="title">2. 전 항에 따라 해지를 한 이용자 회사가 정하는 규정에 따라 이용자로 다시 가입할 수 있습니다.</div>
							<div class="title">3. 회사는 이용자에게 다음과 같은 사유가 있는 경우 이용계약을 해지할 수 있고, 해당 이용자에 대한 정보의 보유는 개인정보처리방침에 따릅니다.</div>
							<div class="cont">
								<p>가. 회사나 다른 이용자 및 기타 타인의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 대한민국 법령 또는 미풍양속에 위배되는 행위를 한 경우</p>
								<p>나. 회사가 취급하는 콘텐츠 및 서비스에 대해 확인되지 않는 사실로 불신을 조장하는 행위를 한 경우</p>
								<p>다. 회사가 제공하는 서비스의 원활한 진행을 방해하는 행위를 하거나 시도한 경우</p>
								<p>라. 이용자의 행위가 본 약관에서 제한하는 행위에 해당됨이 확인되, 이에 대한 소명자료를 요청했으나 객관적인 자료를 통해 이를 입증하지 못하는 경우 또는 소명자료 요청이 불가한 경우</p>
								<p>마. 기타 회사가 합리적인 판단에 기하여 서비스의 제공을 거부할 필요가 있다고 인정할 경우</p>
							</div>
							<div class="title">4. 이용계약은 회사가 해지의사를 이용자에게 통지한 시점에 종료됩니다. 이 경우 회사는 이용자가 등록한 전자우편 또는 유선, 기타의 방법을 통하여 해지의사를 통지합니다.</div>
							<div class="title">5. 이용계약이 종료되는 경우, 회사가 이용자에게 부여한 기타 혜택 등은 소멸되며, 환불 등의 처리는 이 약관에서 정한 절차에 준용합니다.</div>
							<div class="title">6. 이용계약의 종료와 관련하여 발생한 손해는 이용계약이 종료된 해당 이용자가 책임을 부담하여야 하고 회사는 일체의 책임을 지지 않습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제21조 (기록 보존)</div>
						<div class="depth2">
							<div class="title">1. 회사는 전자상거래 등에서의 소비자보호에 관한 법률에 따라 다음 각 호에 대한 기록은 법령에서 정한 기간 동안 보존합니다.</div>
							<div class="cont">
								<p> 가. 이용계약 또는 청약철회 등에 관한 기록</p>
								<p> 나. 결제 및 충전, 사용에 관한 기록(성명, 주소, 주민등록번호 등 거래의 주체를 식별할 수 있는 정보에 한함)</p>
								<p> 다. 이용자의 불만 또는 분쟁처리에 관한 기록</p>
							</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제22조 (면책 조항)</div>
						<div class="depth2">
							<div class="title">1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</div>
							<div class="title">2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</div>
							<div class="title">3. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</div>
							<div class="title">4. 회사는 이용자가 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관해서는 책임을 지지 않습니다.</div>
							<div class="title">5. 회사는 이용자 간 또는 이용자와 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제23조 (분쟁 해결)</div>
						<div class="depth2">
							<div class="title">1. 회사는 이용자가 제기하는 불만사항 및 의견을 우선적으로 처리합니다. 다만 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">제24조 (준거법 및 관할법원)</div>
						<div class="depth2">
							<div class="title">1. 회사와 이용자 간의 분쟁 및 이 약관의 해석에 대하여는 대한민국의 법령을 준거법으로합니다.</div>
							<div class="title">2. 서비스 이용 중 발생한 분쟁에 대해 소송이 제기될 경우, 민사소송법에 따라 관할법원을 정합니다.</div>
						</div>
					</div>
					<div class="depth1">
						<div class="title">부칙</div>
						<div class="depth2">
							<div class="title">1. 이 약관은 2020년 11월 1일부터 적용됩니다.</div>
						</div>
					</div>
				</div>
			</div>
		</b-modal>

		<button id="nextDeptnBtn" class="btnn bTcont" @click="nextPageBtn">다음</button>
	</div>
</template>
<script>
	export default{
		name: 'signUpFrom',
		data() {
			return {
				show: true,
				flavours: ['만 14세 이상입니다. (필수)', '이용약관 동의 (필수)', '개인정보처리방침 (필수)', '개인정보 제3자 제공 동의 (필수)', '마케팅정보 수신 동의 (필수)'],
				selected: [],
				allSelected: false,
				indeterminate: false,
				informationData:'',
				backgroundImage: require('@/assets/ico_chk.png'),
				boxOne: '',
				agreements: [],
				textdata: 'asdasdasd'
			}
		},
		methods: {
			inputClick(checked) {
				if(checked.target.checked == true){
					checked.target.nextElementSibling.style.backgroundPosition = '0 -20px'
				} else {
					checked.target.nextElementSibling.style.backgroundPosition = '0 0'
				}
			},

			toggleAll(checked) {
				var allInpout = document.querySelectorAll('.mb_section_box input');
				if(this.flavours.length != this.selected.length){
					this.selected = this.flavours
					for(var i=0;this.flavours.length > i;i++){
						allInpout[i].checked = true;
						allInpout[i].nextElementSibling.style.backgroundPosition = '0 -20px'
					}
				} else {
					this.selected = []
					for(var i=0;this.flavours.length > i;i++){
						allInpout[i].checked = false;
						allInpout[i].nextElementSibling.style.backgroundPosition = '0 0'
					}
				}
			},

			modalId(i) {
				if(i == 1){
					this.$bvModal.show('modal-scrollable2');
				} else if(i == 2 || i == 3){
					this.$bvModal.show('modal-scrollable1');
				}
			},

			alertText(target){
				switch (target){
					case 0 :
					return '만 14세 이상입니다.'
					break;
					case 1 :
					return '이용약관 동의'
					break;
					case 2 :
					return '개인정보처리방침'
					break;
					case 3 :
					return '개인정보 제3자 제공 동의'
					break;
					case 4 :
					return '마케팅정보 수신 동의'
					break;
					case 99 :
					return '모든 항목은 필수사항입니다.'
					break;	
					default :
					// console.log('이외 데이터')
				}
			},

			nextPageBtn(){
				if(this.allSelected){
					this.$router.push({name: 'signUpUserFrom', path: 'signUpUserFrom', query: {idx: this.agreements}}, function() {
						// console.log("signUpUserFrom 호출 완료");
					})
				} else if(this.selected.length == 4 && this.selected.indexOf('마케팅정보 수신 동의 (필수)') == -1){
					this.$router.push({name: 'signUpUserFrom', path: 'signUpUserFrom', query: {idx: this.agreements}}, function() {
						// console.log("signUpUserFrom 호출 완료");
					})
				} else {
					this.modalId(99)
					// console.log("모든 항목은 필수사항입니다.");
				}
			}
		},
		watch: {
			selected(newVal) {
				var selectAll = document.getElementById('chk_all');
				document.getElementById('nextDeptnBtn').classList.remove('grd');
				if (newVal.length === 0) {//체크가 0일때
					this.indeterminate = false;
					this.allSelected = false;
					selectAll.checked = false;
					selectAll.nextElementSibling.style.backgroundPosition = '0 0'
				} else if (newVal.length === this.flavours.length) {//전체 체크 됬을때
					this.indeterminate = false;
					this.allSelected = true;
					selectAll.checked = true;
					this.agreements = ['idx1', 'idx2', 'idx3', 'idx4', 'idx5']
					selectAll.nextElementSibling.style.backgroundPosition = '0 -20px'
					document.getElementById('nextDeptnBtn').classList.add('grd')
				} else if(newVal.length == 4 && newVal.indexOf('마케팅정보 수신 동의 (필수)') == -1) {//필수사항만 체크되었을 경우
					this.indeterminate = false;
					this.allSelected = false;
					selectAll.checked = false;
					selectAll.nextElementSibling.style.backgroundPosition = '0 -20px'
					this.agreements = ['idx1', 'idx2', 'idx3', 'idx4']
					document.getElementById('nextDeptnBtn').classList.add('grd')
				} else {//한개 이상 체크되 었을때
					this.indeterminate = true;
					this.allSelected = false;
				}
			}
		}
	}
</script>

<style scoped="">
.mb_cont_tit{padding-bottom:10px;margin-bottom:20px;border-bottom:2px solid #222}
.mb_cont_tit p{padding:0;margin:0;color:#666;}
#fregister_chkall{border-bottom:1px solid #e4e4e4;padding-bottom:16px;margin-bottom:20px;}
#fregister_chkall label{font-size:18px}
.checksWrap_type1{position:relative;text-align:left}
.checksWrap_type1 .checks{position:relative;line-height:20px;display:inline-block;overflow:hidden;margin:5px 0}
.checksWrap_type1 input[type=checkbox]{position:absolute;top:0;left:0;margin:0;padding:0;z-index:-1;width:12px;height:12px;-webkit-appearance:none;opacity:0;-moz-opacity:0}
.checksWrap_type1 label{float:left;position:relative;top:0;left:0;height:20px;line-height:20px;font-size:16px;color:#222;background:#fff;padding:0 0 0 28px;background-repeat:no-repeat;background-size:20px;margin:0;z-index:10}
.checksWrap_type1 .checks.on label{background-position:0 -20px}
.checksWrap_type1 .checks label.on{background-position:0 -20px}
.checksWrap_type1 label:before{content:'';display:inline-block;width:20px;height:20px;border-radius:50%;-webkit-background-size:20px 40px;background-size:20px 40px;position:absolute;left:0;top:0}
.checksWrap_type1 a{display:inline-block;font-size:13px;line-height:24px;padding:0 12px;background:#fff;border:1px solid #eaeaea;color:#999;border-radius:2px;position:absolute;right:0;top:0}
.checksWrap_type1 a:hover{background:#f9f9f9}
.mb_section{margin-top:10px;padding-left:20px;}
.mb_section:first-child{margin-top:25px}
fieldset{border:0}

.depth1:after,
.depth2:after{content:'';display:block;clear:both;}
.first_text{font-size:.75rem;line-height:1rem;font-weight:700;padding:2rem;background-color:#f9f9f9;}
.depth1{font-size:.9rem;margin-top:2rem;}
.depth1 p{line-height:.9rem;}
.depth1 > .title{font-weight:700;line-height:1rem;}
.depth1 > .cont{font-size:.85rem;margin:.5rem;}
.depth1 > .cont > p{font-size:.7rem;}
.depth1 > .cont > .p_depth2{margin:.5rem;}
.depth2 > .cont > p,
.depth1 > .cont .p_depth2 span{position:relative;}
.depth2 > .cont > p:before,
.depth1 > .cont .p_depth2 span:before{content:'-';display:block;position:absolute;top:0;left:-10px;}
.depth2{font-size:.85rem;margin:.7rem;}
.depth2 > .title{font-weight:500;line-height:1rem;}
.depth2 > .cont{margin:.5rem;}
.depth2 > .cont > p{font-size:.7rem;margin:.5rem;line-height:.9rem;}
.depth1.tbl_box{padding:2rem 1rem;}
.depth2.tbl_box{padding:.5rem 1rem;}
.tbl_box{}
.tbl_box table{float:left;width:100%;border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;font-size:.7rem;}
.tbl_box table th{text-align:left;background-color:#ededed;padding:10px;border-left:solid 1px #ddd;}
.tbl_box table td{text-align:left;padding:1rem;border-top:solid 1px #ddd;border-left:solid 1px #ddd;}
.tbl_box table tr:first-child td{}
.tbl_box table th:first-child,
.tbl_box table td:first-child{border-left:none;}

</style>