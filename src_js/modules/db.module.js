/**
* by kueiapp.com
*/
// ES6
import * as mysql from 'mysql';
import setting from '../config/setting.js'

const connectionPool = mysql.createPool({ // 建立一個連線池
  connectionLimit: 10, // 限制池子連線人數
  host: setting.db.MYSQL_HOST, // 主機名稱
  user: setting.db.MYSQL_USER, // 用戶名稱
  password: setting.db.MYSQL_PASS, // 資料庫密碼
  database: setting.db.MYSQL_DATABASE // 資料庫名稱
});

connectionPool.getConnection((err, connection) => { //建立一個連線若錯誤回傳err
  if (err) {
    console.log('連線失敗！');
  }
  else {
    console.log(connection);
  }
});

export default connectionPool;
