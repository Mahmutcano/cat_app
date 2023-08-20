/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL

const nextConfig = {
    async rewrites() {
		return [
			{
				source: '/api',
				destination: `${API_URL}`,
			},
		]
	},
}

module.exports = nextConfig
