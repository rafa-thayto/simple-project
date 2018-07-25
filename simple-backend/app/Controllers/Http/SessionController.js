'use strict'

class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()

    const token = auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
