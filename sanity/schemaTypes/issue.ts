
import { defineField, defineType } from "sanity"

export const issue = defineType({
    name: "issue",
    title: "Issue",
    type: "document",
    fields: [
        defineField({
            name: 'chapter',
            type: 'number'
        }),
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
    ],
})