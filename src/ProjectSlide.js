import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './index.css'

function ProjectSlide(props) {
    if(props.img) {
        return (
            <div className='m-auto w-10/12'>
                <h1 className='header text-3xl md:text-6xl'>{props.name}</h1>
                <h1 className='mt-16 text-3xl md:text-4xl'>{props.desc}</h1>
                <div style={{backgroundImage:`url(${props.img})`}} className='m-auto mt-20  h-48 md:h-52 sm:h-96 bg-contain lg:w-7/12 2xl:bg-cover bg-no-repeat'></div>
                <Stack sx={{marginTop:'4rem'}} justifyContent='center' spacing={2} direction="row">
                    <Button href={props.github} style={{fontSize:'1.2rem', fontWeight:'bold'}} color='warning' sx={{width:'10rem'}} variant="contained">GITHUB REPO</Button>
                    <Button href={props.url} style={{fontSize:'1.2rem', fontWeight:'bold'}} color='secondary' size='large' sx={{width:'10rem'}} variant="contained">LIVE DEMO</Button>
                </Stack>
            </div>
        )
    } else {
        return (
            <div className='m-auto w-10/12'>
                <h1 className='header text-3xl md:text-6xl'>{props.name}</h1>
                <h1 className='mt-16 text-3xl md:text-4xl'>{props.desc}</h1>
                <Stack sx={{marginTop:'4rem'}} justifyContent='center' spacing={2} direction="row">
                    <Button href={props.github} style={{fontSize:'2rem', padding:'20px', fontWeight:'bold'}} color='warning' sx={{width:'10rem'}} variant="contained">GITHUB</Button>
                </Stack>
            </div>
        )
    }
    
}

export default ProjectSlide
