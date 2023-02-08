import { Box, Button, Center, Stack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Robot from '../../../../public/Images/Home/hands2.svg'
import styles from './style.module.css'
export function Hero(){
    const [word,setWord] = useState('Desenvolvedor')
    const words = ["Desenvolvedor","Design","Empreendedor","Pensador","Estrategista", "Pesquisador","Analista"]
    const [letters,setLetters] = useState(word[0])

    useEffect(()=>{
        const interval = setInterval(()=>{

            setWord((w)=>{
                let index = words.indexOf(w)+1
                if(index>words.length -1 || index < 0) return words[0]
                return words[index] 
                    
            })
            

        },2000)



        return () => clearInterval(interval);

    },[words])
    useEffect(()=>{

        const interval2 = setInterval(()=>{
            
            
            
         
            //setWords(words[words])
        },2000)
        return () => clearInterval(interval2);
    },[])
    return(
        <Stack flexDirection={['column','row']} my={['0','5rem']} minH={'50vh'} boxSizing="border-box" position={'relative'}  w='100vw' align={'center'}  direction={'row'}>
            <Center className={styles.shine} zIndex={'overlay'} display={'flex'} height={['80%','50%' ]} width={['80%','50%']} alignItems='center'  justifyContent={'center'}   >
                <Image src={Robot} priority  alt=''/>
            </Center>
            <VStack zIndex={99} width={['100%','40%']} align={'normal'}>
                <Text  textAlign={['center','left']} >Olá eu sou, </Text>
                <Text color={'teal.500'} as={'h1'} fontWeight='bold' textAlign={['center','left']}  fontSize={['1.2rem','3xl']}  zIndex='banner' fontFamily={'Inter'}>Leonardo Belilo Messias</Text>
                <Text textAlign={['center','left']}  fontSize={['5xl','5xl','7xl']} display={'inline-block'} fontFamily={'Monda'}>{word}</Text>
                <Text textShadow={'dark-lg'} zIndex={99} pb={4} px='5' textAlign={['center','left']}  fontSize={['md','md','x-large']}>
                Acredito que o conhecimento e a tecnologia  pode contribuir para que o ser 
                humano possa atingir o maximo de seu potencial e bem estar e estou trabalhando
                duro para que isso aconteça.
                </Text>
                
                <Box zIndex={99} display={['none','block']} width={'25rem'} h='1' bg='pink.900'></Box>

                <Box filter='auto' brightness={['0.3','0.6']}
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