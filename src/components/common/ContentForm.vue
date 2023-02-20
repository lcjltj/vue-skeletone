<template>
	<div class="contents">
		<div class="contentInner">
			<div class="tabArea">
				<div class="tabWrapper">
					<div class="tabInner">
						<div class="tabBox">
							<span
								class="tabLink active"
								onclick="openTab(event, 'tab01')"
								draggable="true"
								>클래임관리<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab02')"
								draggable="true"
								>클래임 상품현황<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab03')"
								draggable="true"
								>3번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab04')"
								draggable="true"
								>4번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab05')"
								draggable="true"
								>5번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab06')"
								draggable="true"
								>6번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab07')"
								draggable="true"
								>7번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab08')"
								draggable="true"
								>8번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab09')"
								draggable="true"
								>9번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab10')"
								draggable="true"
								>10번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab11')"
								draggable="true"
								>11번째 탭 영역 넓이영역 확인하기<i></i
							></span>
							<span
								class="tabLink"
								onclick="openTab(event, 'tab12')"
								draggable="true"
								>12번째 탭 영역 넓이영역 확인하기<i></i
							></span>
						</div>
					</div>
				</div>
			</div>
			<div id="tab01" class="tabCnt" style="display: block">
				<div class="itemHeader">
					<h3>클래임 관리</h3>
				</div>
				<div class="item">
					<div class="itemCnt">
						<div class="srchTableArea mt20">
							<table>
								<colgroup>
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: 160px" />
									<col style="max-width: auto" />
								</colgroup>
								<tbody>
									<tr>
										<th>기관설정</th>
										<td colspan="9">
											<div class="dateBox flexBox">
												<div class="calWrap">
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
													<span class="inpTxt">~</span>
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
												</div>
												<div class="radioWrap ml40">
													<input
														type="radio"
														name="day"
														id="day"
														class="radioSquare"
													/>
													<label for="day">오늘</label>
													<input
														type="radio"
														name="day"
														id="day7"
														class="radioSquare"
														checked="checked"
													/>
													<label for="day7">1주일</label>
													<input
														type="radio"
														name="day"
														id="day30"
														class="radioSquare"
													/>
													<label for="day30">1개월</label>
													<input
														type="radio"
														name="day"
														id="day90"
														class="radioSquare"
													/>
													<label for="day90">3개월</label>
													<input
														type="radio"
														name="day"
														id="dayAll"
														class="radioSquare"
													/>
													<label for="dayAll">1년</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th>클래임 유형</th>
										<td colspan="4">
											<div class="chkWrap">
												<input
													type="checkbox"
													name="claim"
													id="claimAll"
													class="chkSquare"
												/>
												<label for="claimAll"><span>전체</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt01"
													class="chkSquare"
													checked
												/>
												<label for="claimopt01"><span>취소</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt02"
													class="chkSquare"
												/>
												<label for="claimopt02"><span>반품</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt03"
													class="chkSquare"
												/>
												<label for="claimopt03"><span>교환</span></label>
											</div>
										</td>
										<th>거래 상태</th>
										<td colspan="4">
											<div class="selWrap">
												<select name="" id="" class="wdh_150">
													<option value="전체">전체</option>
													<option value="01">01</option>
													<option value="02">02</option>
													<option value="03">03</option>
												</select>
											</div>
										</td>
									</tr>
									<tr>
										<th>기관설정</th>
										<td colspan="9">
											<div class="dateBox flexBox">
												<div class="calWrap">
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
													<span class="inpTxt">~</span>
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
												</div>
												<div class="radioWrap ml40">
													<input
														type="radio"
														name="day"
														id="day"
														class="radioSquare"
													/>
													<label for="day">오늘</label>
													<input
														type="radio"
														name="day"
														id="day7"
														class="radioSquare"
														checked="checked"
													/>
													<label for="day7">1주일</label>
													<input
														type="radio"
														name="day"
														id="day30"
														class="radioSquare"
													/>
													<label for="day30">1개월</label>
													<input
														type="radio"
														name="day"
														id="day90"
														class="radioSquare"
													/>
													<label for="day90">3개월</label>
													<input
														type="radio"
														name="day"
														id="dayAll"
														class="radioSquare"
													/>
													<label for="dayAll">1년</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th>클래임 유형</th>
										<td colspan="4">
											<div class="chkWrap">
												<input
													type="checkbox"
													name="claim"
													id="claimAll"
													class="chkSquare"
												/>
												<label for="claimAll"><span>전체</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt01"
													class="chkSquare"
													checked
												/>
												<label for="claimopt01"><span>취소</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt02"
													class="chkSquare"
												/>
												<label for="claimopt02"><span>반품</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt03"
													class="chkSquare"
												/>
												<label for="claimopt03"><span>교환</span></label>
											</div>
										</td>
										<th>거래 상태</th>
										<td colspan="4">
											<div class="selWrap">
												<select name="" id="" class="wdh_150">
													<option value="전체">전체</option>
													<option value="01">01</option>
													<option value="02">02</option>
													<option value="03">03</option>
												</select>
											</div>
										</td>
									</tr>
									<tr>
										<th>기관설정</th>
										<td colspan="9">
											<div class="dateBox flexBox">
												<div class="calWrap">
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
													<span class="inpTxt">~</span>
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
												</div>
												<div class="radioWrap ml40">
													<input
														type="radio"
														name="day"
														id="day"
														class="radioSquare"
													/>
													<label for="day">오늘</label>
													<input
														type="radio"
														name="day"
														id="day7"
														class="radioSquare"
														checked="checked"
													/>
													<label for="day7">1주일</label>
													<input
														type="radio"
														name="day"
														id="day30"
														class="radioSquare"
													/>
													<label for="day30">1개월</label>
													<input
														type="radio"
														name="day"
														id="day90"
														class="radioSquare"
													/>
													<label for="day90">3개월</label>
													<input
														type="radio"
														name="day"
														id="dayAll"
														class="radioSquare"
													/>
													<label for="dayAll">1년</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th>클래임 유형</th>
										<td colspan="4">
											<div class="chkWrap">
												<input
													type="checkbox"
													name="claim"
													id="claimAll"
													class="chkSquare"
												/>
												<label for="claimAll"><span>전체</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt01"
													class="chkSquare"
													checked
												/>
												<label for="claimopt01"><span>취소</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt02"
													class="chkSquare"
												/>
												<label for="claimopt02"><span>반품</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt03"
													class="chkSquare"
												/>
												<label for="claimopt03"><span>교환</span></label>
											</div>
										</td>
										<th>거래 상태</th>
										<td colspan="4">
											<div class="selWrap">
												<select name="" id="" class="wdh_150">
													<option value="전체">전체</option>
													<option value="01">01</option>
													<option value="02">02</option>
													<option value="03">03</option>
												</select>
											</div>
										</td>
									</tr>
									<tr>
										<th>기관설정</th>
										<td colspan="9">
											<div class="dateBox flexBox">
												<div class="calWrap">
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
													<span class="inpTxt">~</span>
													<div class="inpWrap">
														<input type="text" class="wdh_150" />
														<i></i>
													</div>
												</div>
												<div class="radioWrap ml40">
													<input
														type="radio"
														name="day"
														id="day"
														class="radioSquare"
													/>
													<label for="day">오늘</label>
													<input
														type="radio"
														name="day"
														id="day7"
														class="radioSquare"
														checked="checked"
													/>
													<label for="day7">1주일</label>
													<input
														type="radio"
														name="day"
														id="day30"
														class="radioSquare"
													/>
													<label for="day30">1개월</label>
													<input
														type="radio"
														name="day"
														id="day90"
														class="radioSquare"
													/>
													<label for="day90">3개월</label>
													<input
														type="radio"
														name="day"
														id="dayAll"
														class="radioSquare"
													/>
													<label for="dayAll">1년</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th>클래임 유형</th>
										<td colspan="4">
											<div class="chkWrap">
												<input
													type="checkbox"
													name="claim"
													id="claimAll"
													class="chkSquare"
												/>
												<label for="claimAll"><span>전체</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt01"
													class="chkSquare"
													checked
												/>
												<label for="claimopt01"><span>취소</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt02"
													class="chkSquare"
												/>
												<label for="claimopt02"><span>반품</span></label>
												<input
													type="checkbox"
													name="claim"
													id="claimopt03"
													class="chkSquare"
												/>
												<label for="claimopt03"><span>교환</span></label>
											</div>
										</td>
										<th>거래 상태</th>
										<td colspan="4">
											<div class="selWrap">
												<select name="" id="" class="wdh_150">
													<option value="전체">전체</option>
													<option value="01">01</option>
													<option value="02">02</option>
													<option value="03">03</option>
												</select>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div id="tab02" class="tabCnt" style="display: none">클래임 상품현황</div>
			<div id="tab03" class="tabCnt" style="display: none">
				3번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab04" class="tabCnt" style="display: none">
				4번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab05" class="tabCnt" style="display: none">
				5번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab06" class="tabCnt" style="display: none">
				6번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab07" class="tabCnt" style="display: none">
				7번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab08" class="tabCnt" style="display: none">
				8번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab09" class="tabCnt" style="display: none">
				9번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab10" class="tabCnt" style="display: none">
				10번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab11" class="tabCnt" style="display: none">
				11번째 탭 영역 넓이영역 확인하기
			</div>
			<div id="tab12" class="tabCnt" style="display: none">
				12번째 탭 영역 넓이영역 확인하기
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContentForm',
};
</script>

<style scoped></style>
