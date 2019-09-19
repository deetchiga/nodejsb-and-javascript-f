const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'postgres',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM actor', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error}
    else
        {
response.status(200).json(results.rows)
            }
    })
}

const createActor = (request, response) => {
  const { actor_id, first_name,last_name } = request.body

  pool.query('INSERT INTO actor_details (actor_id, first_name,last_name ) VALUES ($1, $2,$3)', [actor_id, first_name,last_name ], (error, results) => {
    if (error) {
      throw error}
	else
	{response.send(results.rows)

	}
    })
}
const updateActor = (request, response) => {
  const actor_id = parseInt(request.params.actor_id)
  const { first_name, last_name } = request.body

  pool.query(
    'UPDATE actor_details SET first_name = $1, last_name = $2 WHERE actor_id = $3',
    [first_name, last_name, actor_id],
    (error, results) => {
      if (error) {
        throw error}
else
{response.status(200).json(results.rows)
}
      }
  )
}



module.exports = {
  getUsers,
  createUser,
  createActor,
  updateActor,
}
