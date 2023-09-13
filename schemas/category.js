import { FiTag } from 'react-icons/fi'
export const Category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: FiTag,
    fields: [
        { name: 'title', type: 'string' },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'parent',
            type: 'reference',
            to: [{ type: 'category' }],
            // This ensures we cannot select other "children"
            options: {
                filter: '!defined(parent)',
            },
        },
    ],
    // Customise the preview so parents are visualised in the studio
    preview: {
        select: {
            title: 'title',
            subtitle: 'parent.title',
        },
        prepare: ({ title, subtitle }) => ({
            title,
            subtitle: subtitle ? `– ${subtitle}` : ``,
        }),
    },
}