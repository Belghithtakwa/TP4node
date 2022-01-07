module.exports = (app)=>{

  app.get('users', (req, res)=>
  res.status(200).send("All Users"))
}

app.get('users/:id', (req, res)=> {
  res.status(200).send(`user id: ${req.params.id}`)
})

app.post('/users', (req, res)=>{
  res.send("Create User");
})

app.delete('/users/:id', (req, res)=>{
  res.status(200).send(`Delete user id : ${req.params.id}`)
})