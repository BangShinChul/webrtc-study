'use strict'; // 엄격한 운용 컨텍스트 안에서 실행시킬 수 있도록 설정

// 비디오를 스트리밍 할 수 있도록 설정
const mediaStreamConstraints = {
    video: true,
};

// 스트림이 배치될 비디오 태그
const localVideo = document.querySelector('video');

// 동영상에서 재생될 로컬 스트림 변수
let localStream;

// 비디오 요소에 MediaStream을 추가하여 성공을 처리함
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

// 오류 메시지와 함께 콘솔에 메세지를 로깅하여 오류를 표시하는 함수
function handleLocalMediaStreamError(error) {
   console.log('navigator.getUserMedia error: ',error);
}

// 미디어 스트림을 초기화
// navigator 객체에는 브라우저에 대한 정보가 들어 있습니다.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);