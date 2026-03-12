//server.js

const express=require('express');
const mysql=require('mysql2');
const bodyparse=require('body-parser');
const cors=require('cors');

const app=express();
const port=3001;

//Middleware

app.use(cors());
app.use(bodyparse.json());

//MySQL
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1234',
    database:'radhikabatch',
    socketPath: '/private/tmp/mysql.sock'
})
db.connect((err)=>{
    if(!err)
        console.log('DB Connected..')
    else
        console.log('DB not connected..')
})// Route to create login table
app.get("/createlogintable", (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS login(
            id INT AUTO_INCREMENT,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            password VARCHAR(255),
            role VARCHAR(20) DEFAULT 'user',
            PRIMARY KEY(id)
        )
    `;
    db.query(sql, (err, result) => {
        if(!err) console.log('Login table created');
        else console.log('Error creating login table:', err);
        res.send('Login Table Created');
    });
});


//  INSERT REGISTER + LOGIN HERE 

// Register
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    'INSERT INTO login (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err) => {
      if (err) return res.send('Email already exists');
      res.send('Registered successfully');
    }
  );
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;

 

const sql = "SELECT * FROM login WHERE email = ?";

  db.query(sql, [email], (err, result) => {

    if (err) {
      console.log("DB ERROR IS:", err);   // 👈 VERY IMPORTANT
      return res.status(500).json({ message: "Server error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    const user = result[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    res.status(200).json({ message: "Login successful", user });
  });
});

//crud implementation

// Get all users → admin
app.get('/users', (req, res) => {
  db.query('SELECT id, name, email, role FROM login', (err, results) => {
    if(err) return res.status(500).send(err);
    res.send(results);
  });
});

// Get one user by id → normal user
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT id, name, email, role FROM login WHERE id=?', [id], (err, result) => {
    if(err) return res.status(500).send(err);
    res.send(result[0]);
  });
});




// Update user by id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  // Update only password if provided
  const sql = password
    ? 'UPDATE login SET name=?, email=?, password=? WHERE id=?'
    : 'UPDATE login SET name=?, email=? WHERE id=?';
  
  const params = password ? [name, email, password, id] : [name, email, id];

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('User updated successfully');
  });
});
// Delete user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM login WHERE id = ?', [id], (err, result) => {
        if(err) return res.status(500).send(err);
        res.send('User deleted successfully');
    });
});









app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});