import React from 'react'
import { Tr, Th, Td, Box, Table, TableContainer, Thead, Tbody } from "@chakra-ui/react"
import MyuserContext from '../Context/Context'
import { useContext } from 'react'


const User = () => {
    let { user} = useContext(MyuserContext)
  
    return (
        <>
            <div>


            </div>
            <Box>

                <TableContainer mt={5} p="1rem"  >
                    <Table variant='simple' colorScheme='red' boxShadow='dark-lg' p='6' rounded='md' bg='white'  >
                        <Thead bg="black" height="4rem">
                            <Tr textColor="white">
                                <Th>Image</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Gender</Th>
                            </Tr>
                        </Thead>

                        {

                            user.map((item) => {

                                return <Tbody>
                                    <Tr>
                                        <Td>
                                            <img src={item.picture.medium
                                            } alt="" />
                                        </Td>
                                        <Td>{item.name.first
                                        }</Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.gender
                                        }</Td>


                                    </Tr>

                                </Tbody>

                            })
                        }


                    </Table>
                </TableContainer>
            </Box>


        </>
    )
}

export default User