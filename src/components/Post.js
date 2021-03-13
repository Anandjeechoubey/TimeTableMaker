import React, { Component } from 'react';
import PDF from './PDF';

class Post extends Component {
    state = {
        title: '',
        content: '',
        mon1: '-/-',
        mon2: '-/-',
        mon3: '-/-',
        mon4: '-/-',
        mon5: '-/-',
        mon6: '-/-',
        mon7: '-/-',
        mon8: '-/-',
        tue1: '-/-',
        tue2: '-/-',
        tue3: '-/-',
        tue4: '-/-',
        tue5: '-/-',
        tue6: '-/-',
        tue7: '-/-',
        tue8: '-/-',
        wed1: '-/-',
        wed2: '-/-',
        wed3: '-/-',
        wed4: '-/-',
        wed5: '-/-',
        wed6: '-/-',
        wed7: '-/-',
        wed8: '-/-',
        thu1: '-/-',
        thu2: '-/-',
        thu3: '-/-',
        thu4: '-/-',
        thu5: '-/-',
        thu6: '-/-',
        thu7: '-/-',
        thu8: '-/-',
        fri1: '-/-',
        fri2: '-/-',
        fri3: '-/-',
        fri4: '-/-',
        fri5: '-/-',
        fri6: '-/-',
        fri7: '-/-',
        fri8: '-/-',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container-fluid">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Enter Time Table</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Title" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('mon1')} name="mon1" type="text" placeholder="Mon 9.00" className="form-control" />
                                                    <input onChange={this.onChange('mon2')} name="mon2" type="text" placeholder="Mon 10.00" className="form-control" />
                                                    <input onChange={this.onChange('mon3')} name="mon3" type="text" placeholder="Mon 11.00" className="form-control" />
                                                    <input onChange={this.onChange('mon4')} name="mon4" type="text" placeholder="Mon 12.00" className="form-control" />
                                                    <input onChange={this.onChange('mon5')} name="mon5" type="text" placeholder="Mon 14.00" className="form-control" />
                                                    <input onChange={this.onChange('mon6')} name="mon6" type="text" placeholder="Mon 15.00" className="form-control" />
                                                    <input onChange={this.onChange('mon7')} name="mon7" type="text" placeholder="Mon 16.00" className="form-control" />
                                                    <input onChange={this.onChange('mon8')} name="mon8" type="text" placeholder="Mon 17.00" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('tue1')} name="tue1" type="text" placeholder="Tue 9.00" className="form-control" />
                                                    <input onChange={this.onChange('tue2')} name="tue2" type="text" placeholder="Tue 10.00" className="form-control" />
                                                    <input onChange={this.onChange('tue3')} name="tue3" type="text" placeholder="Tue 11.00" className="form-control" />
                                                    <input onChange={this.onChange('tue4')} name="tue4" type="text" placeholder="Tue 12.00" className="form-control" />
                                                    <input onChange={this.onChange('tue5')} name="tue5" type="text" placeholder="Tue 14.00" className="form-control" />
                                                    <input onChange={this.onChange('tue6')} name="tue6" type="text" placeholder="Tue 15.00" className="form-control" />
                                                    <input onChange={this.onChange('tue7')} name="tue7" type="text" placeholder="Tue 16.00" className="form-control" />
                                                    <input onChange={this.onChange('tue8')} name="tue8" type="text" placeholder="Tue 17.00" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('wed1')} name="wed1" type="text" placeholder="Wed 9.00" className="form-control" />
                                                    <input onChange={this.onChange('wed2')} name="wed2" type="text" placeholder="Wed 10.00" className="form-control" />
                                                    <input onChange={this.onChange('wed3')} name="wed3" type="text" placeholder="Wed 11.00" className="form-control" />
                                                    <input onChange={this.onChange('wed4')} name="wed4" type="text" placeholder="Wed 12.00" className="form-control" />
                                                    <input onChange={this.onChange('wed5')} name="wed5" type="text" placeholder="Wed 14.00" className="form-control" />
                                                    <input onChange={this.onChange('wed6')} name="wed6" type="text" placeholder="Wed 15.00" className="form-control" />
                                                    <input onChange={this.onChange('wed7')} name="wed7" type="text" placeholder="Wed 16.00" className="form-control" />
                                                    <input onChange={this.onChange('wed8')} name="wed8" type="text" placeholder="Wed 17.00" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('thu1')} name="thu1" type="text" placeholder="Thu 9.00" className="form-control" />
                                                    <input onChange={this.onChange('thu2')} name="thu2" type="text" placeholder="Thu 10.00" className="form-control" />
                                                    <input onChange={this.onChange('thu3')} name="thu3" type="text" placeholder="Thu 11.00" className="form-control" />
                                                    <input onChange={this.onChange('thu4')} name="thu4" type="text" placeholder="Thu 12.00" className="form-control" />
                                                    <input onChange={this.onChange('thu5')} name="thu5" type="text" placeholder="Thu 14.00" className="form-control" />
                                                    <input onChange={this.onChange('thu6')} name="thu6" type="text" placeholder="Thu 15.00" className="form-control" />
                                                    <input onChange={this.onChange('thu7')} name="thu7" type="text" placeholder="Thu 16.00" className="form-control" />
                                                    <input onChange={this.onChange('thu8')} name="thu8" type="text" placeholder="Thu 17.00" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('fri1')} name="fri1" type="text" placeholder="Fri 9.00" className="form-control" />
                                                    <input onChange={this.onChange('fri2')} name="fri2" type="text" placeholder="Fri 10.00" className="form-control" />
                                                    <input onChange={this.onChange('fri3')} name="fri3" type="text" placeholder="Fri 11.00" className="form-control" />
                                                    <input onChange={this.onChange('fri4')} name="fri4" type="text" placeholder="Fri 12.00" className="form-control" />
                                                    <input onChange={this.onChange('fri5')} name="fri5" type="text" placeholder="Fri 14.00" className="form-control" />
                                                    <input onChange={this.onChange('fri6')} name="fri6" type="text" placeholder="Fri 15.00" className="form-control" />
                                                    <input onChange={this.onChange('fri7')} name="fri7" type="text" placeholder="Fri 16.00" className="form-control" />
                                                    <input onChange={this.onChange('fri8')} name="fri8" type="text" placeholder="Fri 17.00" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('content')} className="form-control" name="content" placeholder="Comments..."></input>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} 
                        mon1={this.state.mon1}
                        mon2={this.state.mon2}
                        mon3={this.state.mon3}
                        mon4={this.state.mon4}
                        mon5={this.state.mon5}
                        mon6={this.state.mon6}
                        mon7={this.state.mon7}
                        mon8={this.state.mon8}
                        tue1={this.state.tue1}
                        tue2={this.state.tue2}
                        tue3={this.state.tue3}
                        tue4={this.state.tue4}
                        tue5={this.state.tue5}
                        tue6={this.state.tue6}
                        tue7={this.state.tue7}
                        tue8={this.state.tue8}
                        wed1={this.state.wed1}
                        wed2={this.state.wed2}
                        wed3={this.state.wed3}
                        wed4={this.state.wed4}
                        wed5={this.state.wed5}
                        wed6={this.state.wed6}
                        wed7={this.state.wed7}
                        wed8={this.state.wed8}
                        thu1={this.state.thu1}
                        thu2={this.state.thu2}
                        thu3={this.state.thu3}
                        thu4={this.state.thu4}
                        thu5={this.state.thu5}
                        thu6={this.state.thu6}
                        thu7={this.state.thu7}
                        thu8={this.state.thu8}
                        fri1={this.state.fri1}
                        fri2={this.state.fri2}
                        fri3={this.state.fri3}
                        fri4={this.state.fri4}
                        fri5={this.state.fri5}
                        fri6={this.state.fri6}
                        fri7={this.state.fri7}
                        fri8={this.state.fri8} />
                    )
                }
            </>
        );
    }
}

export default Post;