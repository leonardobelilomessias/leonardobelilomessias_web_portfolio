import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Robot from '../../../../public/Images/Home/hands2.svg'
import styles from './style.module.css'
export function Hero(){
    const [word,setWord] = useState('Desenvolvedor')
    const words = ["Filosofo","Empreendedor", "Pesquisador","Desenvolvedor","Design"]
    const [letters,setLetters] = useState(word[0])

    /*useEffect(()=>{
        const interval = setInterval(()=>{
            

            setWord((w)=>{
                let index = words.indexOf(w)+1
                if(index>words.length -1 || index < 0) return words[0]
                return words[index] 
                    
            })
            
         
            //setWords(words[words])
        },2000)



        return () => clearInterval(interval);

    },[])
    useEffect(()=>{

        const interval2 = setInterval(()=>{
            
            
            
         
            //setWords(words[words])
        },2000)
        return () => clearInterval(interval2);
    },[])*/
    return(
        <Stack my={'5rem'} minH={'50vh'} boxSizing="border-box" position={'relative'}  w='100vw' direction={'row'}>
            <Box className={styles.shine} display={'flex'} height='50%'  width={'50%'}  justifyContent={'center'}   >
                <Image src={Robot} priority  alt=''/>
            </Box>
            <VStack zIndex={99} width={'40%'} align={'normal'}>
                <Text >Olá eu sou, </Text>
                <Text color={'teal.200'} as={'h1'}  fontSize={'3xl'} fontFamily={'Inter'}>Leonardo Belilo Messias</Text>
                <Text fontSize={['4xl','5xl','7xl']} display={'inline-block'} fontFamily={'Monda'}>{word}</Text>
                <Text textShadow={'dark-lg'} zIndex={99} pb={4} fontSize={24}>
                Acredito que o conhecimento e a tecnologia  pode contribuir para que o ser 
                humano possa atingir o maximo de seu potencial e bem estar e estou trabalhando
                duro para que isso aconteça.
                </Text>
                
                <Box zIndex={99} width={'25rem'} h='1' bg='pink.900'></Box>

                <Box 
                className={styles.teste}
                alignSelf={'end'}
                position='absolute'
                bottom={'-4rem'} 
                right={'-6rem' }
                borderRadius={'20rem'} 
                width={'30rem'} 
                h={'30rem'} 
                bgGradient='radial(circle, rgba(84,187,204,0.5) 0%, rgba(6,8,9,0) 60%)'
                />
            </VStack>
        </Stack>
    )

}