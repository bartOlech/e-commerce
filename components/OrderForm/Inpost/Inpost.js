import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setParcelLocker } from '../../../redux/actions/Inpost/setParcelLocker';

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

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://geowidget.easypack24.net/js/sdk-for-javascript.js";
        script.async = true;

        document.body.appendChild(script);

        const link = document.createElement('link');

        link.href = "https://geowidget.easypack24.net/css/easypack.css";
        link.rel = 'stylesheet';

        document.body.appendChild(link);

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
                props.setParcelLocker(point.name)
                
            });
        };
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(link);
        }
    }, [])

    return (
        <Container>
            <Div id="easypack-map"></Div>
        </Container>
    )
}

const mapDispatchToProps = {
    setParcelLocker
}

export default connect(null, mapDispatchToProps)(Inpost);