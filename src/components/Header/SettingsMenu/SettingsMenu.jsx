import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

// iconos
import { BiFullscreen } from "react-icons/Bi"
import { BsInfoLg } from "react-icons/Bs"
import { LuSettings } from "react-icons/Lu"

// opciones de settings
import { handleFullscreen } from "../../../helpers/handleFullscreen"

const SettingsMenu = () => {
    return (
        <Menu>
            <MenuButton bgColor='transparent' border='0' color='var(--default-white)' fontSize='24px'>
                <LuSettings />
            </MenuButton>

            <MenuList m='0 -10px' bgColor='var(--default-white-transparent-menu)' p='10px' borderRadius='10px'>
                <MenuItem className='settingsButton' title='fullscreen' onClick={handleFullscreen}>
                    <BiFullscreen />
                </MenuItem>

                <MenuItem className='settingsButton' title='About this project'>
                    <BsInfoLg />
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SettingsMenu
