const express = require('express')
const cors = require('cors')
const app = express()

// Define the data model
const behaviors = [
  { id: 1, name: 'Pollination', description: 'Gathering nectar and pollen to pollinate flowers.' },
  { id: 2, name: 'Honey Production', description: 'Collecting nectar to make honey.' },
  { id: 3, name: 'Nest Building', description: 'Building nests to lay eggs and raise young.' },
  { id: 4, name: 'Wax Production', description: 'Producing beeswax for construction and storage.' },
  { id: 5, name: 'Guarding', description: 'Protecting the hive from intruders.' },
  { id: 6, name: 'Foraging', description: 'Searching for food sources outside the hive.' },
  { id: 7, name: 'Temperature Regulation', description: 'Maintaining optimal temperature within the hive.' },
  { id: 8, name: 'Communication', description: 'Using dances and pheromones to communicate with other bees.' },
  { id: 9, name: 'Reproduction', description: 'Mating and ensuring the survival of the colony.' }
];


//activating cors (to link with the frontend)
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