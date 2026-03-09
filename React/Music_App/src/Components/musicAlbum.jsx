import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'


import {getMusicRecords} from "../Redux/actionTypes"
import Interceptormanager from './../../node_modules/axios/lib/adapters'

export const MusicAlbum=()=>{
    const Dispatch=useDispatch()
      const musicData=useSelector(store=>store.MusicRecords)
      console.log('🚀 ~ musicData:', musicData);

      useEffect(()=>{
        Dispatch(getMusicRecords)
      },[])

      return (
        <>
            {
                musicData.length>0 &&musicData.map((album)=>{
                    return <div key ={album.id}>
                    <h3>{album.id}</h3>
                    <h4>{album.name}</h4>
                    <h3>{album.genre}</h3>
                    <img src={album.img} alt={album.name}/>img

                    </div>
                })
            }
        </>
      )
      
}