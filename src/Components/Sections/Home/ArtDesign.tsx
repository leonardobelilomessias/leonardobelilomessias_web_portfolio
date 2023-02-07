import { VStack ,Text, HStack, Stack, Box} from "@chakra-ui/react";
import Image from "next/image";
import Glass from '../../../../public/Images/Home/grass.svg'
import Grad from '../../../../public/Images/Home/grad.svg'
import Min from '../../../../public/Images/Home/min.svg'
import D3 from '../../../../public/Images/Home/3d.svg'
import Retro from '../../../../public/Images/Home/retro.svg'
import Noise from '../../../../public/Images/Home/noise.svg'

interface BoxContentProps{
    img:string
    name:string
}
function BoxContent({name,img}:BoxContentProps){
    return(
    <>
    <VStack>

        <Box rounded={"3rem"} h={['20rem','23rem']} bg='gray.800' w={['90vw','25rem']} position='relative'>
            <Image src={img} alt='' fill/>
        </Box>

        <Text  fontSize={'4xl'} fontFamily='Inter' fontWeight={'bold'}>{name}</Text>
    </VStack>
    </>
    )
}
export function ArtDesingn(){
    return(
        <>
        <VStack mt='12' p='8' >
                <Box>
                <Text mt='12'  fontFamily={'Monda'} fontSize='6xl'>
                    Art&Design 
                </Text>
                <Box alignSelf={['center','start']} justifySelf='center' width={'8rem'} bg='pink.900' mb='6' height={'2px'}/>
            </Box>
            <Stack align={'center'} pt='12'gap={'8'} direction={['column','row']}>
                
                <BoxContent  name='Ruido' img={Noise}  />
                <BoxContent name='3D' img={D3} />
                <BoxContent name='Minimalista' img={Min} />

            </Stack>
            <Stack pt='12' gap={'8'} direction={['column','row']} >
                <BoxContent  name='Gradiente' img={Grad}  />
                <BoxContent  name='Glassmorfismo' img={Glass}  />
                <BoxContent  name='Retro' img={Retro}  />

            </Stack>
        </VStack>
        </>
    )
}