const express = require('express')
const cors = require('cors')
const app = express()

// Define the data model
const behaviors = [
  { id: 1, name: 'Pollination', description: 'Gathering nectar and pollen to pollinate flowers.' },
  { id: 2, name: 'Honey Production', description: 'Collecting nectar to make honey.' },
  { id: 3, name: 'Nest Building', description: 'Building nests to lay eggs and raise young.' }
];

//activating cors
app.use(cors())


// Define the endpoints
app.get('/behaviors', (req, res) => {
    res.json(behaviors);
  });
  
  app.get('/behaviors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const behavior = behaviors.find(b => b.id === id);
    
    if (behavior) {
      res.json(behavior);
    } else {
      res.status(404).send('Behavior not found');
    }
  });


// port of the server
app.listen(3500,()=>{
    console.log('Server is live on port 3500');
})