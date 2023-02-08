import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import type { Content } from '@prismicio/client'

export function createClient({previewData,req,...config}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('leonardobelilo', config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}