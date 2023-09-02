import { Box, Image } from '@chakra-ui/react'
import Headers from './components/Header'

const App = () => {
    return (
        <>
        <Headers />

        <Box w='100vw' height='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box w='180px' mb='2em'>
                <Image src='./logo.png' alt='logo ax calculator' />
            </Box>

            <Box fontSize='34px'>
                4x Calculator
            </Box>
        </Box>
        </>
    )
}

export default App
