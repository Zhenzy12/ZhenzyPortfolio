import React from "react";
import { Mail, Phone, MapPin, Github, Facebook, Linkedin } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import OnlineJobsLogo from "../assets/Images/online-jobs-ph-logo.png";

const Contact: React.FC = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedSection>
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-6xl font-bold mb-6">
							Get In{" "}
							<span className="text-emerald-600 dark:text-emerald-400">
								Touch
							</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Ready to hire me or just want to say hello? I'd love to hear from
							you!
						</p>
					</div>
				</AnimatedSection>

				<div className="grid lg:grid-cols-1 gap-16">
					{/* Contact Information */}
					<div className="space-y-8">
						<AnimatedSection delay={200}>
							<div>
								<h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
									Let's Connect
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
									I'm always interested in hearing about new opportunities,
									whether it's a freelance project, full-time position, or just
									a chat about technology. Don't hesitate to reach out!
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={300}>
							<div className="space-y-6">
								{[
									{
										icon: (
											<Mail className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
										),
										title: "Email",
										value: "zumelriezhenzy@gmail.com",
									},
									{
										icon: (
											<Phone className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
										),
										title: "Phone #1",
										value: "+63 939 600 1945",
									},
									{
										icon: (
											<Phone className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
										),
										title: "Phone #2",
										value: "+63 926 661 1083",
									},
									{
										icon: (
											<Linkedin className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
										),
										title: "LinkedIn",
										value:
											"https://www.linkedin.com/in/rie-zhenzy-zumel-45307936b",
										isLink: true,
									},
									{
										icon: <img className="h-9 w-9" src={OnlineJobsLogo} />,
										title: "OnlineJobs.ph",
										value: "https://www.onlinejobs.ph/jobseekers/info/4236083",
										isLink: true,
									},
									{
										icon: (
											<MapPin className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
										),
										title: "Location",
										value: "Baguio City, Philippines",
									},
								].map(({ icon, title, value, isLink }, i) => (
									<div
										key={i}
										className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg hover:border-emerald-500/30 transition-colors">
										<div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg">
											{icon}
										</div>
										<div>
											<h3 className="text-gray-900 dark:text-white font-semibold">
												{title}
											</h3>
											{isLink ? (
												<a
													href={value}
													className="text-emerald-600 dark:text-gray-400"
													target="_blank"
													rel="noopener noreferrer">
													{value}
												</a>
											) : (
												<p className="text-gray-600 dark:text-gray-400">
													{value}
												</p>
											)}
										</div>
									</div>
								))}
							</div>
						</AnimatedSection>

						<AnimatedSection delay={400}>
							<div>
								<h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
									Follow Me
								</h3>
								<div className="flex space-x-3">
									{[
										{
											href: "https://github.com/Zhenzy12",
											icon: <Github className="h-8 w-8" />,
										},
										{
											href: "https://www.facebook.com/rzhenzy/",
											icon: <Facebook className="h-8 w-8" />,
										},
										{
											href: "mailto:zhenzyzumel@gmail.com",
											icon: <Mail className="h-8 w-8" />,
										},
										{
											href: "https://www.linkedin.com/in/rie-zhenzy-zumel-45307936b",
											icon: <Linkedin className="h-8 w-8" />,
										},
										{
											href: "https://www.onlinejobs.ph/jobseekers/info/4236083",
											icon: <img className="h-9 w-9" src={OnlineJobsLogo} />,
										},
									].map(({ href, icon }, i) => (
										<a
											key={i}
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center text-center p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors group">
											<div className="text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white">
												{icon}
											</div>
										</a>
									))}
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>

				{/* Additional Info */}
				<AnimatedSection delay={200}>
					<div className="mt-16 text-center">
						<h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
							Available for Work
						</h2>
						<p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
							I'm currently open to new opportunities and exciting projects.
							Whether you're looking for a full-time developer, freelance work,
							or just want to collaborate on something amazing, let's talk!
						</p>
					</div>
				</AnimatedSection>
			</div>
		</div>
	);
};

export default Contact;
