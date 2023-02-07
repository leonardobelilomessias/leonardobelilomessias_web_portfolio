import { Box, Button, Center, Flex, HStack, Menu, Stack, Text, useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { relative } from "path";
import { ReactNode, Ref, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { TbChevronsUpLeft, TbMenu2 } from "react-icons/tb";
import Logo from '../../../public/Images/Home/logo.svg'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from "react";

interface ItemMenuProps{
    children:ReactNode
    link:string
}
interface DrawerMenuPros {
isOpen:boolean
onOpen:()=>void
onClose:()=>void
}
function ItemMenu({children,link}:ItemMenuProps){
    const {pathname} = useRouter()

    return(
        <Link href={link}>
        <Box width={'80px'} py='2' borderBottom={['1px']}  borderLeft={['1px','0px']}  borderColor={pathname===link ?'pink.900':'transparent'} borderBottomColor={['transparent',pathname===link ?'pink.900':'transparent']}>

                <Text textAlign={['left','center']} paddingLeft={['1rem','0rem']} fontFamily={'Monda'}  color={'white'}>
                    {children}
        
                </Text>
        </Box>
        </Link>
    )
}
function NavMenu(){
    return(
        <>
            <Flex display={['none','flex','flex']} flexDirection={['column','row']}  px={['0','12']}>
                    <ItemMenu link="/" >
                        Inicio
                    </ItemMenu>
                    <ItemMenu link="/about">
                        Sobre
                    </ItemMenu>
                    <ItemMenu link="/projects">
                        Projetos
                    </ItemMenu>
                    <ItemMenu link="/blog">
                        Blog
                    </ItemMenu>
                    <ItemMenu link="/contact">
                        Contato
                    </ItemMenu>
    
            </Flex>
        </>
    )
}

function DrawerMenu({isOpen, onOpen, onClose }:DrawerMenuPros){

    const btnRef = React.useRef()
    return(
        <>
        <Drawer isOpen={isOpen} placement='right'onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent bg={'black'}>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
            <Flex display={['flex','flex']} flexDirection={['column','row']}  px={['0','12']}>
                    <ItemMenu link="/" >
                        Inicio
                    </ItemMenu>
                    <ItemMenu link="/about">
                        Sobre
                    </ItemMenu>
                    <ItemMenu link="/projects">
                        Projetos
                    </ItemMenu>
                    <ItemMenu link="/blog">
                        Blog
                    </ItemMenu>
                    <ItemMenu link="/contact">
                        Contato
                    </ItemMenu>
    
            </Flex>
                        </DrawerBody>

                        </DrawerContent>
                    </Drawer>
        </>
    )
}
export function Header(){
    const {pathname} = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onClose()
    },[pathname])
    
    return(
        <HStack  bgGradient='linear(to-t,black,teal.900)'  align={'center'} justify='space-between'>

            <HStack justify={['space-around','space-between']} pl='12' color={"blue.400"} height={'4rem'} flex='1'>
                <Center>
                    <Box position={'relative'} width={['1.4rem','1.8rem']} height={['1.4rem','1.8rem']} >
                        <Image src={Logo} fill alt='logo'></Image>
                    </Box>
                    <Text as={'span'} pl='1' fontFamily={'Monda'}  fontSize='small' color={'white'}>Web Portfolio</Text>
                </Center>
                <Box onClick={onOpen} display={['block','none']}>
                    <TbMenu2   size={25} color="white" ></TbMenu2>
                    <DrawerMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
                </Box>
            </HStack>

        <NavMenu/>

        </HStack>
        
    )
}