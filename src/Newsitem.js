import React, { Component } from 'react'

export class Newsitem extends Component {
   
    render() {

        let {title,describtion,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                    <div className="card" style={{width: '18rem'}}>
                    <img src={!imageUrl?"https://th.bing.com/th/id/OIP.se6duPKpArNz0YnywnnYHQHaHa?pid=ImgDet&rs=1":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{describtion}...</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">READ MORE</a>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Newsitem
