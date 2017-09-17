'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')

class DatabaseSeeder {

  * run () {
    yield Factory.model('App/Model/User').create(1)
    yield Factory.model('App/Model/Article').create(50)
  }

}

module.exports = DatabaseSeeder
