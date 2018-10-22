const model = require('./model');

module.exports={
  images:{
    get : (req,res)=>{
      model.images.get((data)=>{
        res.send(data);
      })
    }
  },
  author:{
    get : (req,res)=>{
      const authorName = req.params.author;
      model.author.get(authorName, (data)=>{
        res.send(data);
      })
    }
  }
}