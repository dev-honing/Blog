/**
 * @file renderTables.js
 * @description 특정 테이블의 아이템들을 출력하는 스크립트
 */

const fetchTableItems = require('./fetchTables');

/**
 * Posts 테이블의 아이템들을 가져와 출력
 * @param {Error|null} err 오류 객체. 성공 시 null
 * @param {Array} items 가져온 테이블 아이템들의 배열
 */
fetchTableItems('Posts', (err, items) => {
  if (err) {
    // 오류가 발생 시, 오류 메시지를 출력
    console.error('테이블을 가져오는 중 오류가 발생했습니다:', err);
  } else {
    // 성공 시, 가져온 아이템들을 콘솔에 출력
    console.log(items);
  }
});

// node renderTables.js로 확인 완료