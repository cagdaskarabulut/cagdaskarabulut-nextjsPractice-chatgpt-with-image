const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const body = req.body && JSON.parse(req.body);
    const { description } = body || {};

    const results = await openai.createImage({
      prompt: `Draw a logo image as a cartoon about the compilation and compression of news. Use red, gray,  black and white colors`,
      n: 1,
      size: '512x512',
    });

    console.log(`Results: ${JSON.stringify(results.data)}}`);

    res.status(200).json({
      image: results.data.data[0]
    });
  } catch(e) {
    console.log(`Failed to create image: ${e.message}`);
    res.status(500).json({
      error: e.message
    });
  }
}
