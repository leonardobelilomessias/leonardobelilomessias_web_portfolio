import { Box, Stack,Text,Flex, Center } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import {GrReactjs,GrDocker} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import {DiPostgresql} from 'react-icons/di'
import{SiTypescript} from 'react-icons/si'
import styles from './style.module.css'
import { useBreakpointValue } from '@chakra-ui/react'
interface PropsBox{
    children:ReactNode
    technology:string
    area:string

}
function BoxContent({children,technology,area}:PropsBox){
    return(
        <>
        <Stack width={['8rem','10rem']} justify={'center'}  align='center' textAlign={'center'} padding={6} fontSize={'sm'} borderRadius='3xl' border='1px' borderColor={'teal.200'} >
        <Text color={'white'} minW='3rem'>{technology}</Text>
                {children}
        <Text display={['none','flex']}  color={'white'}>{area}</Text>
        </Stack>
        </>
    )
}

export function Technologies(){
    const mobile = useBreakpointValue({
        base:true,
        lg:false,

    })
    return(
        <Flex flexDirection={'column'} px={['1rem','6rem']} my={['5rem','8rem']}>

            <Text flex={1} fontFamily={'Monda'} textAlign={['center','left']} mb='2' fontSize={['2xl','3xl']}  >
                Principais Tecnologias
            </Text>
                <Box alignSelf={['center','start']} justifySelf='center' width={'8rem'} bg='pink.900' mb='6' height={'2px'}/>

            <Flex wrap={'wrap'} my={'20'} mt={'1'} gap={['2','8']} justify={['space-around','space-between']} direction={'row'} px={['8','']}>
                <BoxContent technology="React" area="FrontEnd"  >
                    <GrReactjs size={mobile?'3rem':'5rem'} color='#4FD1C5'/>
                </BoxContent>
                <BoxContent  technology="Nextjs" area="FrontEnd">
                    <TbBrandNextjs size={mobile?'3rem':'5rem'} color='#4FD1C5'/>
                </BoxContent>
                <BoxContent technology="TypeScript" area="FullStack" >
                    <SiTypescript size={mobile?'3rem':'5rem'} color='#4FD1C5'/>

                </BoxContent>
                <BoxContent  technology="NodeJs" area="BackEnd">
                    <FaNodeJs size={mobile?'3rem':'5rem'}  color='#4FD1C5'/>
                </BoxContent>
                <BoxContent technology="Postgress" area="BackEnd" >
                    <DiPostgresql size={mobile?'3rem':'5rem'}  color='#4FD1C5'/>
                </BoxContent>
                <BoxContent technology="Docker" area="Devops" >
                    <GrDocker size={mobile?'3rem':'5rem'} color='#4FD1C5'/>
                </BoxContent>
            </Flex>
        </Flex>
    )
}