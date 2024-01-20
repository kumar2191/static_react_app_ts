import { Grid } from '@mantine/core';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
// import Images from '../../../public/assets/Rani/01.jpg'
const Slider = () => {
    const Image = [
        {
            image: 'https://res.cloudinary.com/dpwzvqanp/image/upload/v1705660084/02_v0iprw.jpg'
        },

        {
            image: 'https://res.cloudinary.com/dpwzvqanp/image/upload/v1705660078/01_nsipl7.jpg'
        },
        {
            image: 'https://res.cloudinary.com/dpwzvqanp/image/upload/v1705660082/03_ewjssx.jpg'
        },
        {
            image: 'https://res.cloudinary.com/dpwzvqanp/image/upload/v1705660084/04edit_tuxyw6.jpg'
        },
        {
            image: 'https://res.cloudinary.com/dpwzvqanp/image/upload/v1705660088/010_vebali.jpg'
        },
    ]
    return (
        <div>
            <Grid sx={{
                // background: 'black'
            }} >
                <Grid.Col xs={12}>

                    <Carousel
                        infiniteLoop
                        autoPlay
                        interval={1000}
                        swipeable
                        showThumbs={false}
                    >


                        {
                            Image?.map((item: any, i: number) => {
                                return (
                                    <div key={i} >
                                        <img style={{
                                            height: '500px',
                                            width: '90%'
                                        }} src={item?.image} alt="not" />

                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </Grid.Col>

            </Grid>
        </div>
    )
}

export default Slider