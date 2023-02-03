import { Box, Stack ,Text} from "@chakra-ui/react";
import Image from "next/image";
import Product from '../../../../public/Images/Home/lancamento.svg'

export function Launch(){
    return(
        <Stack px='10' mb='12'>
            <Stack px={'12'} pt='2rem' gap={5}>
            <Text fontSize={'5xl'} fontFamily='Monda'>Lançamentos</Text>
            <Stack >

                <Stack align={'center'} justify='center' rounded='5rem' overflow={'hidden'} position={'relative'} width='100%' h='80vh'>
                    <Image src={Product}  fill priority alt=''/>
                </Stack>
            </Stack>
            
            </Stack>
        </Stack>
    )
}