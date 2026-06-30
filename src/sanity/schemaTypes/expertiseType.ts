import { defineField, defineType } from 'sanity'

export const expertiseType = defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Expertise Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
