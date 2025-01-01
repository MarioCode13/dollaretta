
import { defineField, defineType } from "sanity"

export const character = defineType({
    name: "character",
    title: "Character",
    type: "document",
    fields: [
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Name is required'),
        }),
        defineField({
            name: 'nickname',
            type: 'string',

        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'nickname'
            },
            validation: (Rule) => Rule.required().error('Slug is required'),
        }),
        // defineField({
        //     name: 'description',
        //     type: 'text'
        // }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required().error('Image is required'),
        }),
        defineField({
            name: 'descriptionImage',
            title: 'Description Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})