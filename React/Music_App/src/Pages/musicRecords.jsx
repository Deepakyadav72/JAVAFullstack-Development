import React from "react";
import styled from "styled-components";
import {FilterMusicRecords} from "../Components/FiltermusicRecords";
import {MusicAlbum} from "../Components/MusicAlbum";

export const MusicRecords=()=>{
    return(
        <Wrapper>
            <WrapperFilterMusicRecord>
                <FilterMusicRecords/>
            </WrapperFilterMusicRecord>

            <WrapperFilterMusicRecord>
                <MusicAlbum/>
            </WrapperFilterMusicRecord>
        </Wrapper>
    );
};

const WrapperFilterMusicRecord =styled.div`
border:1px solid green;
width:30%;
height:100%;
`;

const WrapperMusicRecord =styled.div`
border:1px dashed pink;
width:70%;
height:100%;
display:grid;
grib-template-columns:repeat(auto-fit,minmax(300px,1fr))
`;