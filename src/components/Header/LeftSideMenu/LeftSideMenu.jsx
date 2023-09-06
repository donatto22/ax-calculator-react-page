import { Box } from "@chakra-ui/react"

import './leftSideMenu.css'

const LeftSideMenu = () => {
    return (
        <Box>
            <Box className="styleLink">Empezar a usar</Box>
            <Box className="styleLink">Ejemplos</Box>
            <Box className="styleLink">Discord Bots</Box>
            <Box className="styleLink">Otras herramientas</Box>
        </Box>
    )
}

export default LeftSideMenu
