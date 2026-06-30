import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolioType'
import { blogType } from './blogType'
import { locationType } from './locationType'
import { serviceType } from './serviceType'
import { expertiseType } from './expertiseType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, blogType, locationType, serviceType, expertiseType],
}
