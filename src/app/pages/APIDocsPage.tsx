import { motion } from "motion/react";
import { Code, BookOpen, Zap, CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/financial-services",
    description: "Retrieve all available financial services and products",
    parameters: [
      { name: "category", type: "string", required: false, description: "Filter by service category (loans, savings, insurance, etc.)" },
      { name: "provider", type: "string", required: false, description: "Filter by provider name" }
    ],
    response: {
      services: [
        {
          id: "string",
          name: "string",
          category: "string",
          provider: "string",
          interestRate: "number",
          features: ["string"]
        }
      ]
    }
  },
  {
    method: "GET",
    endpoint: "/api/pesadirect",
    description: "Access PesaDirect™ payment infrastructure information",
    parameters: [
      { name: "channel", type: "string", required: false, description: "Payment channel (mpesa, card, qr, etc.)" }
    ],
    response: {
      channels: [
        {
          id: "string",
          name: "string",
          fee: "number",
          supported: "boolean"
        }
      ]
    }
  },
  {
    method: "GET",
    endpoint: "/api/faq",
    description: "Fetch frequently asked questions and answers",
    parameters: [
      { name: "category", type: "string", required: false, description: "FAQ category filter" },
      { name: "search", type: "string", required: false, description: "Search query" }
    ],
    response: {
      faqs: [
        {
          question: "string",
          answer: "string",
          category: "string"
        }
      ]
    }
  }
];

const integrationExamples = [
  {
    name: "ChatGPT Plugin",
    description: "Enable PataPesa in your ChatGPT conversations",
    code: `{
  "schema_version": "v1",
  "name_for_model": "patapesa",
  "api": {
    "type": "openapi",
    "url": "https://patapesa.africa/openapi.yaml"
  }
}`
  },
  {
    name: "JavaScript/TypeScript",
    description: "Fetch financial services using vanilla JS",
    code: `const response = await fetch(
  'https://patapesa.africa/api/financial-services?category=loans'
);
const data = await response.json();
console.log(data.services);`
  },
  {
    name: "Python",
    description: "Access PataPesa API with Python",
    code: `import requests

response = requests.get(
    'https://patapesa.africa/api/financial-services',
    params={'category': 'savings'}
)
data = response.json()
print(data['services'])`
  }
];

export function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">API Documentation</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            PataPesa Public API
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            OpenAPI 3.0 compliant • RESTful • AI Platform Compatible
          </p>
        </motion.div>
      </section>

      {/* API Features */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Real-Time Data", description: "Live financial product information" },
            { icon: BookOpen, title: "Well Documented", description: "Comprehensive guides and examples" },
            { icon: CheckCircle, title: "AI Compatible", description: "Works with ChatGPT, Copilot, LangChain" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#D4A43B] to-yellow-500 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* API Endpoints */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl text-white mb-8 text-center">Available Endpoints</h2>
        <div className="space-y-6 max-w-5xl mx-auto">
          {apiEndpoints.map((endpoint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm font-semibold">
                    {endpoint.method}
                  </span>
                  <code className="text-[#D4A43B] font-mono text-lg">{endpoint.endpoint}</code>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>

                {/* Parameters */}
                {endpoint.parameters.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Parameters</h4>
                    <div className="space-y-2">
                      {endpoint.parameters.map((param, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <code className="text-[#D4A43B]">{param.name}</code>
                            <span className="text-xs text-gray-500">({param.type})</span>
                            {param.required && (
                              <span className="text-xs px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded text-red-400">
                                required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Example Response */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Example Response</h4>
                  <div className="bg-[#111111] rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Examples */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl text-white mb-8 text-center">Integration Examples</h2>
        <div className="space-y-6 max-w-5xl mx-auto">
          {integrationExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-white mb-1">{example.name}</h3>
                    <p className="text-sm text-gray-400">{example.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(example.code, index)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {copiedCode === index ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.button>
                </div>
                <div className="bg-[#111111] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">{example.code}</pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#003366] to-[#003366]/80 rounded-2xl p-12 text-center border border-[#D4A43B]/30 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl text-white mb-4">Ready to Integrate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building with PataPesa API today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D4A43B] to-yellow-500 rounded-full text-white font-semibold shadow-lg"
            >
              View Full Documentation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
            >
              Get API Key
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
