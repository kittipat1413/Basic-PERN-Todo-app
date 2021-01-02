const pool = require("../../config/db")

//Routes//

exports.test = async (req, res) => {
  res.json('Test-API');
};


// Add todo
exports.addTodo = async(req,res) => {
  try{
      console.log('AddTodo');
      console.log(req.body);
      const {description} = req.body; // Get data in description key from json request 
      console.log(description);
      const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
      );
      res.json(newTodo.rows[0]);
  }catch(err){
      console.log(err.massage);
  }

};

// Get all todo
exports.getallTodo = async(req,res) => {
  try {
      console.log('GetAllTodo');
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
      
  } catch (err) {
      console.log(err);
      
  }
};

// Get todo from id
exports.getTodoById = async(req,res) => {
  try {
      const {id}= req.params; // id = req.params.id
      console.log('GetTodo ID:',id);
      const allTodos = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
      res.json(allTodos.rows);
      
  } catch (err) {
      console.log(err.massage);
      
  }
};

// Update todo
exports.updateTodo = async(req,res) => {
  try {
      const {id} = req.params;
      const {description} = req.body;
      console.log('UpdateTodo ID:',id);
      console.log('description :',description);
      const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
      res.json("Todo was updated");   
      // console.log(req.body)   

  } catch (error) {
      console.log(err.massage);
      
  }

};

// Delete todo
exports.deleteTodo = async(req,res) => {
  try {
      const {id} = req.params;
      console.log('DeleteTodo ID:',id);
      const deleteTodo = await pool.query("DELETE FROM todo where todo_id = $1",[id]);
      res.json("Todo was deleted")
  } catch (error) {
      console.log(err.massage);
      
  }
};
