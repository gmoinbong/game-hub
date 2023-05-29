import React from 'react'
import { Genre, } from '../hooks/useGenres'
import { useData } from '../hooks/useData'
import { HStack, List, ListItem, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { getCroppedImageUrl } from '../services/image-url'

const GenreList = () => {
  const { data } = useData<Genre>('/genres')
  return (
    <List >{data.map(genre => <ListItem paddingY='5px' key={genre.id}>
      <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
        <Text fontSize='large'>{genre.name}</Text>
      </HStack>
    </ListItem>)}
    </List>
  )
}

export default GenreList