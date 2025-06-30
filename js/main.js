// 파라미터로 받은 파일을 띄우는 함수
function loadPage(page) {
    document.querySelector('#contentFrame').src = page;
}

// html을 다 실행하면 나오는 이벤트
document.addEventListener("DOMContentLoaded", () => {
    // 검색 폼과 입력창 요소를 가져옴
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // 제출될 때 나오는 이벤트
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 공백제거한 입력값 저장
        const keyword = searchInput.value.trim();
        // 입력이 있으면 말함
        // 구현 안할 예정
        if (keyword) {
            alert(`'${keyword}' 검색 기능은 준비 중입니다.`);
        }

        
    });
});

// 현재 화면의 좌표를 저장
const b_left = window.screenX;
const b_top = window.screenY;

// 좌표에서 띄울 거리 저장
const p_left = b_left + 100;
const p_top = b_top + 100;

// 팝업 및 차단 확인
function win() {
    // 팝업창 띄움
    let wini = open("../html/popup.html", "공지", `width=600, height=500, left=${p_left}, top=${p_top}`);

    if (wini == null) {
        alert("팝업이 차단되었습니다.");
    }
}