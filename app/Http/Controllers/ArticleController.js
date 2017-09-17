const ArticleModel = use('App/Model/Article')
const Validator = use('Validator')

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

  * store(req,res) {
    const data = req.all()
    const v = yield Validator.validate(data,{
      content: 'required',
    })

    if (v.fails()) {
      res.json(v.messages())
      return false
    }

    const article = yield ArticleModel.create({
      title: data.title,
      content: data.content
    })

    res.json({article})
  }

  * update(req,res) {
    const id = req.param('id')
    const data = req.all()
    const v = yield Validator.validate(data,{
      content: 'required',
    })

    if (v.fails()) {
      res.json(v.messages())
      return false
    }

    const article = yield ArticleModel.find(id)
    article.fill({title: data.title,content: data.content})
    yield article.save()

    res.json({article})
  }

  * destroy(req,res) {
    const id = req.param('id')
    try {

      const article = yield ArticleModel.find(id)
      yield article.delete()

      res.json({status: 200,article})

    } catch (error) {
      res.json({status: 404})
      throw error
    }
  }

}

module.exports = ArticleController
