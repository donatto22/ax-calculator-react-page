import { LuMenu } from 'react-icons/Lu'
import { Box, Image } from "@chakra-ui/react"

import PropTypes from "prop-types"

import './../../css/styles/header.css'

import SettingsMenu from './SettingsMenu/SettingsMenu'
import LeftSideMenu from './LeftSideMenu/LeftsideMenu'
import { useState } from 'react'

const Headers = () => {
    // activar y desactivar el menu
    const [activeMenu, setActiveMenu] = useState(false)

    const openMenuFunction = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <>
        <Box p='.6em 0' position='fixed' zIndex='10' top='0'
        width='100vw' display='flex' justifyContent='space-between' alignItems='center'>
            <Box display='flex' alignItems='center' ml='1em'>
                <Box w='40px'>
                    <Image src="./lockerg.webp" alt="Lockerg logo" />
                </Box>

                <Box ml='.2em' fontSize='24px' display='flex' cursor='pointer' onClick={ openMenuFunction } >
                    <LuMenu />
                </Box>
            </Box>

            <Box mr='2em'>
                <SettingsMenu />
            </Box>
        </Box>

        <Box className={activeMenu ? 'leftSideMenu activeMenu' : 'leftSideMenu'}>
            <LeftSideMenu />
        </Box>
        </>
    )
}

Headers.propTypes = {
    openMenuFunction: PropTypes.func
}

export default Headers