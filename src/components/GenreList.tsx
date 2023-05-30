import React from 'react'
import { Genre, useGenres, } from '../hooks/useGenres'
import { useData } from '../hooks/useData'
import { HStack, List, ListItem, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { getCroppedImageUrl } from '../services/image-url'
import { Button, Heading, Spinner } from '@chakra-ui/react'

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List >{data.map(genre => <ListItem paddingY='5px' key={genre.id}>
        <HStack>
          <Image boxSize='32px' borderRadius={8} objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)} />
          <Button fontSize='large' textAlign='left' whiteSpace='normal' cursor='pointer'
            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} >{genre.name}</Button>
        </HStack>
      </ListItem>)
      }
      </List >
    </>
  )
}

export default GenreList

