/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d13m1rqoos03v0.cloudfront.net",
				port: "",
			},
		],
	},
}

module.exports = nextConfig
