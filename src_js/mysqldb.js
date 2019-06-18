/**
* by kueiapp.com
*/

import * as http from 'http';
import * as fs from 'fs';
import * as mysql from 'mysql';

const server = http.createServer((req, res)=>{
    res.end('Hello Node!');
});

// default framework without Express
http.createServer(function(request, response) {

  fs.readFile(__dirname + '/public/manifest.json', (err,file) => {
    if(err){
      response.writeHead(500)
      response.end("Error")
      return
    }
    else{
      response.writeHead(200,{
        "Content-Type": "application/json; charset=utf-8"
      })
      response.end(file, 'utf8')
    }
  })

})
// .listen(8000,function(){
//   console.log("listening to port 8000")
// });

// ES5 requires are workable
const express = require('express');
const bodyParser = require('body-parser');
// import * as express from 'express';
// import * as bodyParser from 'body-parser';

// Express
const app = express();
app.use(express.static(__dirname + '/public'));


// create application/json parser to support json encoded bodies
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }) )// false:string, true:all types

const port = process.env.PORT || 3000;

/** node.js main **/
app.listen(port, function() {
  console.log("Listening on ",port);
});

const NODE_ENV = "development"
const MYSQL_HOST = "localhost"
const MYSQL_PORT = 3306
const MYSQL_USER = "root"
const MYSQL_PASS = "1234"
const MYSQL_DATABASE = "lifelab_nhk"

/** URI */
app.get('/mysql',function(res,resp){
  const connectionPool = mysql.createPool({ // 建立一個連線池
    connectionLimit: 10, // 限制池子連線人數
    host: MYSQL_HOST, // 主機名稱
    user: MYSQL_USER, // 用戶名稱
    password: MYSQL_PASS, // 資料庫密碼
    database: MYSQL_DATABASE // 資料庫名稱
  });

  var resp2 = resp;
  connectionPool.getConnection((err, connection) => { //建立一個連線若錯誤回傳err
    if (err) {
      resp2.send(err);
      console.log('連線失敗！');
    }
    else {
      resp2.send('連線成功！');
      console.log(connection);
    }
  });
});

// app.get('/books',apis.findAll);
// app.get('/books/:id',apis.findByID);
// app.post('/books',apis.post);
// app.put('/books/:id',apis.updates);
// app.del('/books/:id',apis.removeByID);

