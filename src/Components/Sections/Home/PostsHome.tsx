import { Box, Stack, Text } from "@chakra-ui/react";

export function PostsHome(){
    return(
        <Stack  p='12' justify={'center'} >
            <Text fontSize={'6xl'} fontFamily='Monda'> Posts</Text>
        <Stack m='auto' alignSelf={'center'} gap={'5'} flexDirection='row' flexWrap={'wrap'}>
            <Box h={'14rem'} minW='30vw' flex={'1'}  bg={'teal.400'}>boz1</Box>
            <Box h={'14rem'}  minW={'50vw'} flex='1' bg={'teal.400'}>boz1</Box>
            <Box h={'14rem'}  minW={'50vw'} flex='1' bg={'red'}>boz1</Box>
            <Box h={'14rem'}  minW={'40vw'} bg={'teal.400'}>boz1</Box>
            <Box h={'14rem'}  flex='1' bg={'teal.400'}>boz1</Box>
            <Box h={'14rem'}  flex='1' bg={'teal.400'}>boz1</Box>
            <Box h={'14rem'}  flex='1' bg={'teal.400'}>boz1</Box>
            </Stack>
        </Stack>
    )
}