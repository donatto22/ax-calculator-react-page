import { Box, Image } from '@chakra-ui/react'
import Headers from './components/Header'

import { useEffect } from 'react'

// aos js
import AOS from 'aos';
import 'aos/dist/aos.css';

import GitHubButton from 'react-github-btn'

const App = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
        <Headers />

        <Box w='100vw' height='100vh' display='flex' gap='2em' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box w='180px' data-aos="fade-up" data-aos-duration="1000">
                <Image src='./logo.png' alt='logo ax calculator' />
            </Box>

            <Box fontSize='34px' data-aos="fade-up" data-aos-duration="1200">
                4x Calculator
            </Box>

            <Box data-aos="fade-up" data-aos-duration="1400">
                <Box transform='scale(1.2)'>
                    <GitHubButton href="https://github.com/sponsors/donatto22" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @donatto22 on GitHub">Sponsor</GitHubButton>
                </Box>
            </Box>            
        </Box>
        </>
    )
}

export default App
