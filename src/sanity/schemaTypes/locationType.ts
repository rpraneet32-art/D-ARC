import { defineField, defineType } from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Service Area Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Location Description',
      type: 'text',
      description: 'Location specific content with local landmarks and context to differentiate the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coordinates',
      title: 'Geo Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', type: 'number', title: 'Latitude' },
        { name: 'lng', type: 'number', title: 'Longitude' },
      ],
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects in Location',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio' } }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Location Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alternative Text' }
      ]
    })
  ],
})
