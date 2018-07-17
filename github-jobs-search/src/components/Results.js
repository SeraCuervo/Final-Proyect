import React, { Component } from 'react';
import JobResult from './JobResult';

class Results extends Component {
  render() {
    const jobList = this.props.jobs.map((job) => {// Create a jobList with parameters to handle fav event and details event
      <JobResult
        key = {job.id}
        job = {job}
        handleFav = {this.props.handleFav}
        handleDetails = {this.props.handleDetails}
      /> 
    });
  
    return (
      <div className="results-container">
          {jobList}
      </div>
    );
  }
}

export default Results;