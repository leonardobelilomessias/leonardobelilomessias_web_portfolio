import { Box, Stack ,Text} from "@chakra-ui/react";
import Image from "next/image";
import Product from '../../../../public/Images/Home/launch.svg'

export function Launch(){
    return(
        <Stack  mb={['','12']} px={['1rem','6rem']} my={['5rem','8rem']}>
            <Stack px={['','12']} pt={['','2rem']} gap={['5',5]}>
            <Text fontSize={['3xl','5xl']} fontFamily='Monda'>Lançamentos</Text>
            <Stack >

                <Stack align={['','center']} justify='center' overflow={'hidden'} position={'relative'} width='100%' h={['30vh','80vh']}>
                    <Image src={Product}  fill priority alt=''/>
                </Stack>
            </Stack>
            
            </Stack>
        </Stack>
    )
}