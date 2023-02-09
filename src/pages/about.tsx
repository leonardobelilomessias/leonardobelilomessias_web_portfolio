import { Flex,Box,Text, HStack } from "@chakra-ui/react";
import { title } from "@prismicio/helpers/dist/isFilled";


function BoxDescription({subtitle,content}:{subtitle:string, content:string}){
    return(
    <>
        <Box  mb='2rem' px={['','2rem']}  flexDirection={'column'}>
            <Text fontWeight={'bold'} fontSize={['2xl','1.5rem']} my='3' fontFamily={'Inter , sans-serif'}  justifySelf={'flex-end'} >
            {subtitle}
            </Text> 
            <Text fontFamily={'Inter'} pr={['','25rem']}>
                {content}
            </Text>
        </Box>
    </>
    )
}

function BoxContent({title,data}:{title:string,data:{subtitle:string,content:string}[]}){
    return(
    <>
    <Box  pb='2rem'>
            <Text fontFamily={'Monda , sans-serif'}   fontSize={['5xl','3xl']} fontWeight={'bold'} borderBottom={'1px'} borderColor='teal.400'>
                {title}
            </Text>
        {data.map(item=>(
            <BoxDescription subtitle={item.subtitle} content={ item.content} key={item.subtitle}/>
        ))}

    </Box>
    </>
    )
}

export default function About(){
    return(
        <>
        <Flex px={['2rem','25rem' ]} py={['4rem']} justify={'center'} flexDir={'column'}>
    
            <Box px={['','16rem' ]} textAlign='center' >
                
                <Text p={['','2']} display={'inline-block'} fontSize={'4xl'} fontFamily={'Monda,sans-serif'} fontWeight='bold'  borderBottom={'1px'} borderColor='pink.700'>
                    Sobre
                </Text>
            </Box>
            
            <Box pt={['4rem','8rem']}>
                <Box  mb='5rem'  flexDirection={'column'}>
                    <Text  fontSize={['5xl','3xl']} fontWeight={'bold'} fontFamily='Monda' borderBottom={'1px'} borderColor='teal.400'>
                        Background
                    </Text>
                    <Text  fontFamily={'inter'}>
                        Formado em Analise de Dessenvolvimento de Sistemas, estudante de sociologia com experiência na gestão de projetos aplicados ao equilibrio bem estar social. 
                        Pesquisador em comportamento humano relacionado tecnologia, alto desempenho e mercado com ênfase em resultados. Propietario da Cyber Chipset Desenvolvimento de Software LTDA,e empreendedor
                        social pela BaseOutside.
                    </Text>
                </Box>
            </Box>
            <BoxContent data={hardData} title="Hard Skills"/>
            <BoxContent data={softData} title="Soft Skills"/>
        </Flex>
        </>
    )
}

const softData = [
    {
        subtitle:"Empatia",content:'Entender um desejo para atender uma necessiade sempre se colocando no lugar do outro para compreender os diferentes pontos de vista'
    }, 
    {
        subtitle:"Compromisso",content:'Garantir que o projeto,ou tarefa seja executa em tempo estipulado, para que ambas partes interçadas sejam satisfeitas.'
    },
    {
        subtitle:"Comunicação",content:'Comunicar de forma clara e transparente de maneira que reduza os ruidos de informação em dialogos ou em qualquer tipo de comunicação. Garantindo a acertividade nos processos'
    }
]
const hardData = [
    {
        subtitle:"Desenvolvimento de Web",content:'solidos conhecimentos em html e css na produção de paginas responsivas e dinamicas. Dominio na linguagem javascript com a utilização da biblioteca React e  framework next js  para criação de websites com seo avançado.'
    }, 
    {
        subtitle:"Desenvolvimento de Mobile",content:'Desenvolvimento de aplicativos cross platavorm(ios e android) com a tecnologia react native  unida com bibliotecas como styled-componets.'
    },
    {
        subtitle:"Clean Code",content:'Implementação de tecnicas e padrões de escrita de codigo de forma que sejam de facil legibilidade e manutenção . Assim otimizando o processo de construção de software.'

    },
    {
        subtitle:"TDD",content:'Desenvolvimento dirigido por teste de forma que toda a aplicação possa ser gerenciada evitando transtornos em produção.'

    },
    {
        subtitle:"Api  Rest",content:'Desenvolvimento e consumo de apis rest escaláveis implementando metodos e protocolos de forma a extrair o maximo da arquitetura.'

    },
    {
        subtitle:"Ci-CD",content:'Garantia do desenvolvimento com  entrega continua de forma que o contratante tenha em suas mãos as ferramentas mais modernas. '

    }
    
]
const respData = [
    {
        subtitle:"Desenvolvimento de Web",content:'entender uma necessidade é algo importante'
    }, 
    {
        subtitle:"Desenvolvimento de Mobile",content:'entender uma necessidade é algo importante'
    },
    {
        subtitle:"Clean Code",content:'entender uma necessidade é algo importante'

    },
    {
        subtitle:"TDD",content:'entender uma necessidade é algo importante'

    },
    {
        subtitle:"Api  Rest",content:'entender uma necessidade é algo importante'

    },
    {
        subtitle:"Ci-CD",content:'entender uma necessidade é algo importante'

    }
    
]
