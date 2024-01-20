/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, Group, Image, Modal, Table, Title, useMantineTheme } from '@mantine/core';
import { useStyles } from "./style";
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'

type CardProps = {
    image: string,
    header: string,
    link?: string
};
const Index: React.FC<CardProps> = (props) => {
    const { image, header, link } = props

    const theme = useMantineTheme();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const navigate = useNavigate()
    const { classes } = useStyles();

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Card
                shadow="sm"
                p={'xl'}
                className={classes.card}
                onClick={() => {
                    link ? navigate(link) : setModalOpen(true)
                }}
            >
                <Card.Section sx={{
                    height: '30%',
                }} >

                    <Image data-aos="zoom-in" data-aos-duration="2000" src={image} alt=""

                        h={250}
                        w={500}
                    />
                </Card.Section>
                <Group position='center' >
                    <Button variant="light" color="cyan" fullWidth mt="md" radius="md" onClick={() => {
                        link ? navigate(link) : setModalOpen(true)
                    }}>
                        {/* <marquee scrollamount="5" direction="right"> */}
                        {header}
                        {/* </marquee> */}

                    </Button>
                </Group>


            </Card>
            <Modal
                closeOnClickOutside={false}
                transition="fade"
                transitionDuration={300}
                transitionTimingFunction="ease"
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size="xl"
                opened={modalOpen}
                onClose={() => {
                    setModalOpen(false)
                }}
                overflow="outside"
                style={{
                    borderRadius: "20px",
                }}
                title={<Title order={4}>Product Details</Title>}
            >
                <Grid>
                    <Grid.Col xs={6}>

                        <Image data-aos="zoom-in" data-aos-duration="2000" src={image} alt="" sx={{

                        }}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <Table
                            striped
                            highlightOnHover
                            withBorder
                            withColumnBorders
                            captionSide="bottom"
                            border={1}
                            p={5}
                        >
                            <tr  >
                                <td style={{ padding: 5 }}>Minimum Order Quantity</td>
                                <td style={{ padding: 5 }}>5</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Power Source	</td>
                                <td style={{ padding: 5 }}>Diesel engine & Electric Motor</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Usage/Application	</td>
                                <td style={{ padding: 5 }}>Construction</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Capacity</td>
                                <td style={{ padding: 5 }}>1bag cement</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Machine Type	</td>
                                <td style={{ padding: 5 }}>Tilting Type
                                </td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Usage/Application	</td>
                                <td style={{ padding: 5 }}>Construction</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Capacity</td>
                                <td style={{ padding: 5 }}>1bag cement</td>
                            </tr>
                            <tr  >
                                <td style={{ padding: 5 }}>Machine Type	</td>
                                <td style={{ padding: 5 }}>Tilting Type
                                </td>
                            </tr>
                        </Table>
                    </Grid.Col>
                </Grid>

            </Modal>
        </>
    );
}

export default Index;
