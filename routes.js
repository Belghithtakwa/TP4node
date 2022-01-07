module.exports = (app)=>{
app.get('/hello-world', async function(req, res){
  res.send({message: "Hello World!"});
});

app.get('/message', async function(req, res){
 let msg = req.query.message
 console.log(msg.length)
if(msg.length > 20) {
return res.status(400).send({message: "bad request"})
} else
 return res.status(200).send({message: msg})
});
app.post('/infos/headers', (req, res) => {
 res.send(req.headers);
});

app.post('/payload', (req, res) => {
 const payload = req.body;

 const date = new Date(payload.birthdate);
 const month = Date.now() - date.getTime();
 const age_diff = new Date(month);
 const year = age_diff.getUTCFullYear();
 const age = Math.abs(year - 1970);

 if (age > 18) {
     res.status(200).json({ message: `Welcome ${payload.firstname}` });
 };
   res.status(403).json({ message: "Forbidden" });
});

app.get('/rick-roll', (req, res) => {
 res.status(200).redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

app.delete('/custom-header', (req, res) => {
 res.set({ message: "Hello world !" }).end();
});

app.get('/params/:id/:key/:slug', (req, res) => {
 res.send(req.params);
});
}