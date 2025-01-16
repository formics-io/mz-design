import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MZ-Design',

  projectId: 'joxx5irp',
  dataset: 'projects',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
