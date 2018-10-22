import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    usingData: [],
  }

  componentDidMount(){
    axios.get('http://18.191.188.52:3000/images/')
    // axios.get('https://picsum.photos/list')
    .then(res => {
      var tempData = [];
      for(var i = 25; i < 75; i++){
        tempData.push(res.data[i])
      }
      this.setState({
        data: res.data,
        usingData: tempData
      })
    })
    .catch(err => console.log('err:',err ))
  }

  
  
  render() {
    // console.log('this.state in before render', this.state);
  
    const style = {
      padding: "5px"
    }

    return (
      <div className="App">
      {/* hello world!! */}
      <ul>
        {this.state.usingData.length ? this.state.usingData.map((data, idx)=>{
          // console.log(data)
          // return <li id={data.idx}>{data.author}</li>
            return <span key={idx}><img style={style} src={`https://picsum.photos/${data.width/10}/300?image=${data.id}`} alt={`${data.author}: ${data.filename}`}/></span>
        })
        :
        'Loading ....'}
      </ul>
      </div>
    );
  }
}

export default App;
