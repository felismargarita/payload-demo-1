import type { CollectionConfig } from 'payload'

export const DraftTest: CollectionConfig = {
  slug: 'draft_test',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'code',
      type: 'text',
    },
  ],
}
