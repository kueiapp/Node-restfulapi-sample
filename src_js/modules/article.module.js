/**
* by kueiapp.com
*/
// ES6
import setting from '../config/setting.js'
import db from './db.module.js';

const insertArticle = () => {

};

/*  Article GET 取得  */
const selectArticle = () => {
  return new Promise((resolve, reject) => {
    db.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      }
      else {
        connection.query( // Article撈取所有欄位的值組
          `SELECT * FROM news_list`
          , (error, result) => {
            if (error) {
              console.error('SQL error: ', error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            }
            else {
              resolve(result); // 撈取成功回傳 JSON 資料
            }
            connection.release();
          }
        );
      }
    });
  });
};

export default {
  selectArticle,insertArticle
};
