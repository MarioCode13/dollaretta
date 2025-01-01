import { type SchemaTypeDefinition } from 'sanity'
import { issue } from './issue'
import { volume } from './volume'
import { character } from './character'
import { merch } from './merch'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [issue, volume, character, merch],
}
