/* config.js
*
* global config
*/


const config = {
  version: '1.0.0',
  env: 'development',
  port: 3000
};

const db = {
 "MYSQL_HOST" : "localhost",
 "MYSQL_PORT" : 3306,
 "MYSQL_USER" : "root",
 "MYSQL_PASS" : "wrong_pw",
 "MYSQL_DATABASE" : "wrong_db_name"
}

// ES6
export default {config,db}

// ES5
// module.exports = config;
// module.exports = db;
