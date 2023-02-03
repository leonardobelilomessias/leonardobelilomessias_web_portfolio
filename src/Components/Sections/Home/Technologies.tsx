import { Box, Stack,Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import {GrReactjs,GrDocker} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import {DiPostgresql} from 'react-icons/di'
import{SiTypescript} from 'react-icons/si'
import styles from './style.module.css'
interface PropsBox{
    children:ReactNode
}
function BoxContent({children}:PropsBox){
    return(
        <>
        <Box textAlign={'center'} padding={8} borderRadius='3xl' border='1px' borderColor={'teal.200'} >
                {children}
        </Box>
        </>
    )
}
export function Technologies(){
    return(
        <>
            <Stack  my={'20'} mt={'1'} gap={2} justify='space-around' direction={'row'}>
                <BoxContent  >
                    <Text  textShadow={'6px 6px 10px #4FD1C5'} textAlign={'center'} color={'white'}>React</Text>
                    <GrReactjs size={'5rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Avançado</Text>
                </BoxContent>
                <BoxContent >
                    <Text color={'white'}>Nextjs</Text>
                    <TbBrandNextjs size={'4rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Tech</Text>
                </BoxContent>
                <BoxContent >
                    <Text color={'white'}>TypeSctipt</Text>
                    <SiTypescript size={'5rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Avançado</Text>
                </BoxContent>
                <BoxContent >
                    <Text color={'white'}>NodeJs</Text>
                    <FaNodeJs size={'5rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Avançado</Text>
                </BoxContent>
                <BoxContent >
                    <Text color={'white'}>Postgress</Text>
                    <DiPostgresql size={'5rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Avançado</Text>
                </BoxContent>
                <BoxContent >
                    <Text color={'white'}>Docker</Text>
                    <GrDocker size={'5rem'} color='#4FD1C5'/>
                    <Text color={'white'}>Avançado</Text>
                </BoxContent>
            </Stack>
        </>
    )
}