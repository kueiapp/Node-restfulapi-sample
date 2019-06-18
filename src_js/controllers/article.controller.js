// article.controller.js
import articleModule from '../modules/article.module';

const articlePost = (req, res) => {

}

/*  Article GET 取得  */
const articleGet = (req, res) => {
  articleModule.selectArticle().then((result) => {
    res.send(result); // 成功回傳result結果
  })
  .catch((err) => {
    return res.send(err);
  }); // 失敗回傳錯誤訊息
};

export default {
  articleGet,articlePost
};
