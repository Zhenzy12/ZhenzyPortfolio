import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Facebook } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitMessage("Thank you for your message! I'll get back to you soon.");
			setFormData({ name: "", email: "", subject: "", message: "" });

			setTimeout(() => {
				setSubmitMessage("");
			}, 5000);
		}, 2000);
	};

	return (
		<div className="min-h-screen bg-black dark:bg-black text-white pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedSection>
					<div className="text-center mb-16">
						<h1 className="text-4xl lg:text-6xl font-bold mb-6">
							Get In <span className="text-emerald-400">Touch</span>
						</h1>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">Ready to hire me or just want to say hello? I'd love to hear from you!</p>
					</div>
				</AnimatedSection>

				<div className="grid lg:grid-cols-1 gap-16">
					{/* Contact Information */}
					<div className="space-y-8">
						<AnimatedSection delay={200}>
							<div>
								<h2 className="text-3xl font-bold mb-8 text-emerald-400">Let's Connect</h2>
								<p className="text-gray-300 mb-8 text-lg leading-relaxed">I'm always interested in hearing about new opportunities, whether it's a freelance project, full-time position, or just a chat about technology. Don't hesitate to reach out!</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={300}>
							<div className="space-y-6">
								<div className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/30 transition-colors">
									<div className="p-3 bg-emerald-500/10 rounded-lg">
										<Mail className="h-6 w-6 text-emerald-400" />
									</div>
									<div>
										<h3 className="text-white font-semibold">Email</h3>
										<p className="text-gray-400">zumelriezhenzy@example.com</p>
									</div>
								</div>

								<div className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/30 transition-colors">
									<div className="p-3 bg-emerald-500/10 rounded-lg">
										<Phone className="h-6 w-6 text-emerald-400" />
									</div>
									<div>
										<h3 className="text-white font-semibold">Phone</h3>
										<p className="text-gray-400">+63 939 600 1945</p>
									</div>
								</div>

								<div className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/30 transition-colors">
									<div className="p-3 bg-emerald-500/10 rounded-lg">
										<MapPin className="h-6 w-6 text-emerald-400" />
									</div>
									<div>
										<h3 className="text-white font-semibold">Location</h3>
										<p className="text-gray-400">Baguio City, Philippines</p>
									</div>
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={400}>
							<div>
								<h3 className="text-xl font-bold mb-4 text-emerald-400">Follow Me</h3>
								<div className="flex space-x-4">
									<a href="https://github.com/Zhenzy12" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
										<Github className="h-6 w-6 text-gray-400 group-hover:text-white" />
									</a>
									<a href="https://www.facebook.com/rzhenzy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
										<Facebook className="h-6 w-6 text-gray-400 group-hover:text-white" />
									</a>
									<a href="mailto:zumelriezhenzy@gmail.com" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
										<Mail className="h-6 w-6 text-gray-400 group-hover:text-white" />
									</a>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>

				{/* Additional Info */}
				<AnimatedSection delay={600}>
					<div className="mt-16 text-center">
						<h2 className="text-2xl font-bold mb-4 text-emerald-400">Available for Work</h2>
						<p className="text-gray-300 max-w-3xl mx-auto">I'm currently open to new opportunities and exciting projects. Whether you're looking for a full-time developer, freelance work, or just want to collaborate on something amazing, let's talk!</p>
					</div>
				</AnimatedSection>
			</div>
		</div>
	);
};

export default Contact;
