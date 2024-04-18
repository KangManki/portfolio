// const axios = require('axios');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

let test = document.getElementById('test');

async function fetchOpenGraphData(url) {
  try {
    // URL에서 HTML 가져오기
    const { data } = await axios.get(url);

    // HTML을 DOM 객체로 변환
    const dom = new JSDOM(data);
    const { document } = dom.window;

    // Open Graph 정보 추출
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    // 결과 출력
    console.log('Title:', ogTitle ? ogTitle.content : 'Not Found');
    console.log('Description:', ogDescription ? ogDescription.content : 'Not Found');
    console.log('Image:', ogImage ? ogImage.content : 'Not Found');
  } catch (error) {
    console.error('Error fetching Open Graph data:', error);
  }
}


test.addEventListener('click', () =>  {
  fetchOpenGraphData("https://info-gateway.com");


});