import 'dotenv/config'

export default {
  sign: {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    amoMetadata: "amo-metadata.json"
  },
  sourceDir: "src"
}