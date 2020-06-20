import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
`
const Div = styled.div`
    position: absolute;
    left: 0;
`

const Inpost = (props) => {
    return (
        <Container>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.easyPackAsyncInit = function () {
                            easyPack.init({
                                defaultLocale: 'pl',
                                mapType: 'osm',
                                searchType: 'osm',
                                points: {
                                    types: ['parcel_locker']
                                },
                                map: {
                                    initialTypes: ['parcel_locker']
                                }
                            });
                            var map = easyPack.mapWidget('easypack-map', function(point) {
                            alert(point.name);
                            });
                        };
                            `,
                        }}
                    ></script>
                    <script async src="https://geowidget.easypack24.net/js/sdk-for-javascript.js"></script>
                    <link rel="stylesheet" href="https://geowidget.easypack24.net/css/easypack.css"/>  
                </Head>
                <Div id="easypack-map"></Div>
        </Container>
    )
}

export default Inpost;