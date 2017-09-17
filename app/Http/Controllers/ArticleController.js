const ArticleModel = use('App/Model/Article')

class ArticleController {

  * index(req, res) {
    const users = yield ArticleModel.all()
    res.json({users})
  }

  * show(req,res) {
    const id = req.param('id')
    const user = yield ArticleModel.find(id)
    res.json({user})
  }

}

module.exports = ArticleController
