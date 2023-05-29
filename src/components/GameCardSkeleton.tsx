import { CardBody } from '@chakra-ui/card'
import { Card } from '@chakra-ui/card'
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card overflow='hidden' borderRadius={10} width={300}>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton