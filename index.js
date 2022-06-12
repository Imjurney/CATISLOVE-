const $doors = document.querySelector('.doors');
const $btnBox = document.querySelector('.btn-dark');
const $tg = document.getElementById('light');
$doors.addEventListener('click', (e) =>{
   if(e.target.classList.contains('img2')) {
    alert('눈뜨고 자는 고먐미를 우습게 보지 마십시오.');
  }if(e.target.classList.contains('img8')) {
    alert('놀란 고먐미를 우습게 보지 마십시오.');
  }if(e.target.classList.contains('img9')) {
    alert('고먐이도 의사가 될 수 있습니다. 고먐미의 지능은 위대합니다.');
  }if(e.target.classList.contains('img10')) {
    alert('고먐미는 똑똑한 생명체입니다. 화장실도 혼자 잘갑니다.');
  }if(e.target.classList.contains('img6')) {
    alert('고먐미는 사람처럼 누워서 잡니다.');
  }if(e.target.classList.contains('img11')) {
    alert('고먐미 젤리는 극락 그 자체입니다.');
  }if(e.target.classList.contains('img1')) {
    alert('고먐미는 혼자 네일 관리도 가능합니다');
  }if(e.target.classList.contains('img3')) {
    alert('고먐미는 언제 어디서나 당신을 지켜보고있습니다.');
  }if(e.target.classList.contains('img4')) {
    alert('고먐미는 항상 극진한 대접을 받는 생명체입니다. 설령 양떼목장일지라도요.');
  }if(e.target.classList.contains('img5')) {
    alert('가끔 고먐미도 쩍벌 할 줄 압니다!');
  }if(e.target.classList.contains('img7')) {
    alert('고먐미는 변장술에도 능합니다. 토끼로도 변신이 가능합니다! (귀여워..)');
  }if(e.target.classList.contains('img12')) {
    alert('고먐미는 혼자 장보기도 가능합니다.');
  }
});

$btnBox.addEventListener('click', (e)=>{
     if($tg.getAttribute("href") == "style.css"){
      $tg.href = "dark.css";
      $btnBox.innerHTML = "Dark Mode OFF";
    } else{
      $tg.href = "style.css";
      $btnBox.innerHTML = "Dark Mode ON";
     }
  });

