import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export class News extends Component {
 
    constructor(){
        super();
        console.log('Newsitem constructor');
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?language=en&apiKey=61e48a68078e4e88a68f8d157d6e6884&page=1&pagesize=99";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResult:parsedData.totalResults});
    }

    //  handlepre = async() => {
    //     let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=61e48a68078e4e88a68f8d157d6e6884&page=${this.state.page - 1}&pagesize=99`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({page: this.state.page - 1,
    //                       articles: parsedData.articles});

    // }

    //  handlenext = async () => {

      
    //     let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=61e48a68078e4e88a68f8d157d6e6884&page=${this.state.page + 1}&pagesize=99`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({page: this.state.page + 1,
    //                       articles: parsedData.articles});
        
    // }

    render() {
        return (
            <center>
            <div className='container my-3'>
                <h2>DZ-NEWS</h2> 
                
                <div className='row'>
                {this.state.articles.map((element) => {
                return      <div className='col-md-4 my-3' key={element.url}> 
                            <Newsitem  title={element.title?element.title:""} describtion={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                })}    
                  
                   

                </div>


               {/* <div className='container d-flex justify-content-between'>
               <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlepre}>&larr; Privious </button>
               <button type="button" className="btn btn-primary" onClick={this.handlenext} >Next &rarr;</button>
               </div> */}

            </div>
            </center>
        )
    }
}

export default News
