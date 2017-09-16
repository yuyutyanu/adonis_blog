class UserController {

    * greet (request, response) {
      const id = request.param('user')
      yield response.sendView('greet',  { id })
    }

  }