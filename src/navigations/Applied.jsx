import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import JobList from '../component/JobList.component';
import { useDisclosure } from '@chakra-ui/react';

import SkeletonLoader from '../component/SkeletonLoader.component';
import { getAppliedJob } from "../redux/Applied/action";
import Model from "../component/Model.component";
 

function Applied({getAppliedJob,feed}) {
    
    const {appliedJobs:{jobs,isLoading},userAuth:{profile:{uid}}}=feed

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedJob,setSeletedJob]= useState();
  
    useEffect(() => {
        getAppliedJob("LWPqNfL8yqMshLppoowyKJ9uEt02")
    }, [])

  
   
    

    const appliedFeed = <JobList
        feed={jobs}
        isApplied={true}
        onOpen={onOpen} 
        setSeletedJob={setSeletedJob}/>

     return (
        <div>
             {isLoading ? <SkeletonLoader /> : appliedFeed}
             
             {selectedJob && <Model uid={uid}  isOpen={isOpen}  onClose={onClose} selectedJob={selectedJob}/>}

        </div>
    )
}
const mapStateToProps=({appliedJobs,userAuth})=>({
    feed:{appliedJobs,userAuth}
})

export default connect(mapStateToProps,{getAppliedJob})(Applied)