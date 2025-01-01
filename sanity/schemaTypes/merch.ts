
import { defineField, defineType } from "sanity"

export const merch = defineType({
    name: "merch",
    title: "Merch",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'amazonLink',
            type: 'url'
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number'
        }),
    ],
})