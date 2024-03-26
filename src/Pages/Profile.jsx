import ProfileComponent from "../components/ProfileComponent";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
Profile.propTypes = {
    currentUser: PropTypes.func,
    
};
export default function Profile({currentUser}){
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            (!res?.accessToken)? navigate("/"): setLoading(false)
        })
    },[])

    return  loading ? <Loader/> : <ProfileComponent currentUser={currentUser} />
}
