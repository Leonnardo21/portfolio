import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "leosouza1392@hotmail.com",
            href: "mailto:leosouza1392@hotmail.com",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Phone,
            label: "Telefone",
            value: "(85) 99806-7348",
            href: "https://wa.me/5585998067348",
            color: "from-green-500 to-green-600"
        },
        {
            icon: MapPin,
            label: "Localização",
            value: "Fortaleza, CE - Brasil",
            href: "https://maps.google.com/?q=Fortaleza,CE,Brasil",
            color: "from-purple-500 to-purple-600"
        }
    ];

  

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Pronto para transformar suas ideias em realidade? Vamos conversar!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Informações de contato */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <MessageCircle className="mr-3 text-red-400" />
                                Vamos Conversar
                            </h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                                Entre em contato comigo e vamos discutir como posso ajudar a transformar 
                                suas ideias em realidade.
                            </p>
                            
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300"
                                        >
                                            <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                                <IconComponent size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                                                <div className="text-white font-semibold group-hover:text-gray-200 transition-colors">
                                                    {info.value}
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}