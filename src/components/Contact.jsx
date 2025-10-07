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

                <div>
                    {/* Informações de contato */}
                    <div className="lg:col-span-2 space-y-8">
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

                    {/* Formulário
                    <div className="lg:col-span-3">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        <User size={16} className="inline mr-2" />
                                        Nome Completo
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Digite seu nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-4 bg-gray-700/50 text-white rounded-xl border ${
                                            errors.name ? 'border-red-500' : 'border-gray-600'
                                        } focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 transition-all`}
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        <AtSign size={16} className="inline mr-2" />
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-4 bg-gray-700/50 text-white rounded-xl border ${
                                            errors.email ? 'border-red-500' : 'border-gray-600'
                                        } focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 transition-all`}
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    <MessageCircle size={16} className="inline mr-2" />
                                    Assunto
                                </label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Sobre o que você gostaria de falar?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full p-4 bg-gray-700/50 text-white rounded-xl border ${
                                        errors.subject ? 'border-red-500' : 'border-gray-600'
                                    } focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 transition-all`}
                                />
                                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                            </div>
                            
                            <div className="mb-8">
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    <Mail size={16} className="inline mr-2" />
                                    Mensagem
                                </label>
                                <textarea 
                                    name="message"
                                    placeholder="Conte-me sobre seu projeto ou ideia..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full p-4 bg-gray-700/50 text-white rounded-xl border ${
                                        errors.message ? 'border-red-500' : 'border-gray-600'
                                    } focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 transition-all resize-none`}
                                />
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                <div className="text-right text-gray-400 text-sm mt-1">
                                    {formData.message.length} caracteres
                                </div>
                            </div>
                            
                            <button 
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Enviar Mensagem</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}