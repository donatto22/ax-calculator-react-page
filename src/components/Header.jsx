import { LuMenu } from 'react-icons/Lu'
import { Box, Image } from "@chakra-ui/react"

import PropTypes from "prop-types";

const Headers = ({ openMenuFunction }) => {
    return (
        <>
        <Box p='.6em 0' position='absolute' zIndex='10'>
            <Box display='flex' alignItems='center' ml='1em'>
                <Box w='50px'>
                    <Image src="./lockerg.webp" alt="Lockerg logo" />
                </Box>

                <Box ml='.2em' fontSize='26px' display='flex' cursor='pointer' onClick={() => { openMenuFunction }} >
                    <LuMenu />
                </Box>
            </Box>
        </Box>
        </>
    )
}

Headers.propTypes = {
    openMenuFunction: PropTypes.func
}

export default Headers