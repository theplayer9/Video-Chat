import React from "react";
import { useState, useEffect, useRef, createContext} from "react";
import Peer from 'simple-peer'
import {io} from 'socket.io-client'


const SocketContext = createContext()

const socket = io('http://localhost:5000')
 
const ContextProvider = ({children})=>{

    useEffect(()=>{

    },[])

    const answerCall =()=>{

    }

    const callUser =()=>{

    }

    const leaveCall =()=>{

    }
}
