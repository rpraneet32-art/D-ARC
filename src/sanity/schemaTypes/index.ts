import { type SchemaTypeDefinition } from 'sanity'
import { portfolioType } from './portfolioType'
import { blogType } from './blogType'
import { locationType } from './locationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, blogType, locationType],
}
