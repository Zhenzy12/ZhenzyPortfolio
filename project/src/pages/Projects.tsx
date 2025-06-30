import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X, Calendar, Code, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import AgriTayoMobileImage1 from "../assets/Images/AgriTayoMobile/1.png";
import AgriTayoMobileImage2 from "../assets/Images/AgriTayoMobile/2.png";
import AgriTayoMobileImage3 from "../assets/Images/AgriTayoMobile/3.png";
import AgriTayoWebImage1 from "../assets/Images/AgriTayoWeb/1.png";
import AgriTayoWebImage2 from "../assets/Images/AgriTayoWeb/2.png";
import AgriTayoWebImage3 from "../assets/Images/AgriTayoWeb/3.png";
import StdntEmplImg1 from "../assets/Images/StudentEmployability/1.png";
import StdntEmplImg2 from "../assets/Images/StudentEmployability/2.png";
import PortfolioImg1 from "../assets/Images/Portfolio/1.png";
import SCCCInventoryImg1 from "../assets/Images/InventorySystem/1.png";
import SCCCInventoryImg2 from "../assets/Images/InventorySystem/2.png";
import SCCCInventoryImg3 from "../assets/Images/InventorySystem/3.png";

interface Project {
	id: number;
	title: string;
	description: string;
	fullDescription: string;
	technologies: string[];
	images: string[];
	githubUrl: string;
	liveUrl: string;
	category: string[];
	date: string;
	team: string;
	features: string[];
}

const Projects: React.FC = () => {
	useEffect(() => {
		// Add scrollbar styles
		const style = document.createElement("style");
		style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: ${
					document.documentElement.classList.contains("dark")
						? "rgba(255,255,255,0.05)"
						: "rgba(0,0,0,0.05)"
				};
        border-radius: 4px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: ${
					document.documentElement.classList.contains("dark")
						? "rgba(255,255,255,0.2)"
						: "rgba(0,0,0,0.2)"
				};
        border-radius: 4px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${
					document.documentElement.classList.contains("dark")
						? "rgba(255,255,255,0.3)"
						: "rgba(0,0,0,0.3)"
				};
    }
    `;
		document.head.appendChild(style);

		// Update scrollbar colors on theme change
		const themeObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === "class") {
					style.textContent = `
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: ${
								document.documentElement.classList.contains("dark")
									? "rgba(255,255,255,0.05)"
									: "rgba(0,0,0,0.05)"
							};
              border-radius: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: ${
								document.documentElement.classList.contains("dark")
									? "rgba(255,255,255,0.2)"
									: "rgba(0,0,0,0.2)"
							};
              border-radius: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: ${
								document.documentElement.classList.contains("dark")
									? "rgba(255,255,255,0.3)"
									: "rgba(0,0,0,0.3)"
							};
            }
          `;
				}
			});
		});

		themeObserver.observe(document.documentElement, { attributes: true });

		return () => {
			themeObserver.disconnect();
			document.head.removeChild(style);
		};
	}, []);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [filter, setFilter] = useState("All");
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const projects: Project[] = [
		{
			id: 1,
			title: "SCCC Inventory System",
			description:
				"A web app inventory system built for Baguio City’s Smart City Command and Control Center.",
			fullDescription:
				"The SCCC Inventory System is a inventory management solution developed for the Baguio City Smart City Command and Control Center. It enables real-time logging and monitoring of borrowed office equipment and supplies. Built with Vue.js for the web interface, the system ensures accessibility, responsiveness, and efficient record-keeping. Laravel powers the backend, while MySQL manages the data layer. This project was created as part of an internship experience, addressing actual administrative needs within a government setting.",
			technologies: [
				"Vue.js",
				"Laravel",
				"Tailwind CSS",
				"Node.js",
				"Pinia",
				"Axios",
				"MySQL",
			],
			images: [SCCCInventoryImg3, SCCCInventoryImg1, SCCCInventoryImg2],
			githubUrl: "https://github.com/Zhenzy12/SmartCity-InventorySystem-Demo",
			liveUrl: "https://smartcity-inventorysystem.onrender.com/login",
			category: ["Web App", "Full Stack"],
			date: "2025",
			team: "Internship Team",
			features: [
				"Office Equipment Borrowing Logs",
				"Vue.js Frontend",
				"Laravel Backend with API Integration",
				"Tailwind CSS for UI Design",
				"MySQL Database",
				"Real-time Inventory Updates",
			],
		},
		{
			id: 2,
			title: "AgriTayo Mobile",
			description:
				"A mobile platform that empowers farmers and consumers to connect and trade agricultural products online.",
			fullDescription:
				"AgriTayo Mobile is the mobile version of the AgriTayo ecosystem, built using React Native and Expo. It enables farmers to register, list their products, and manage sales directly from their smartphones. Consumers can browse fresh farm goods, communicate with sellers, and place secure orders. Integrated with Supabase for database management and deployed via Azure services, the app promotes sustainable agriculture by enhancing direct communication and accessibility for users anywhere.",
			technologies: [
				"React Native",
				"Expo",
				"Node.js",
				"Express.js",
				"Tailwind CSS",
				"Supabase",
				"Azure DevOps",
				"Azure Web Services",
			],
			images: [
				AgriTayoMobileImage1,
				AgriTayoMobileImage2,
				AgriTayoMobileImage3,
			],
			githubUrl: "https://github.com/Zhenzy12/AgriTayo-Demo",
			liveUrl:
				"https://drive.google.com/file/d/1vP5R97cfUEBRtP9adEWpdzUVj2DFvBXk/view?usp=sharing",
			category: ["Mobile App", "Full Stack"],
			date: "2024",
			team: "5 Developers",
			features: [
				"Mobile-first UI for farmers and consumers",
				"Farmer and Buyer Registration",
				"Product Listings and Order Management",
				"Push Notifications",
				"Secure Ordering System",
				"Direct Messaging",
				"Azure-based Deployment",
			],
		},
		{
			id: 3,
			title: "AgriTayo Web App",
			description:
				"A admin dashboard web application for managing AgriTayo's products and transactions.",
			fullDescription:
				"AgriTayo Web is the desktop/web version of the AgriTayo project. Developed using React.js and Tailwind CSS, it offers users a seamless experience in browsing agricultural products, contacting sellers, and managing transactions. This platform supports administrative tools, secure ordering, and real-time updates powered by Web Socket and Supabase. The application emphasizes transparency and efficiency in agricultural commerce while supporting sustainable practices through direct farmer-to-consumer interaction.",
			technologies: [
				"React.js",
				"Node.js",
				"Express.js",
				"Tailwind CSS",
				"Supabase",
				"Azure DevOps",
				"Azure Web Services",
			],
			images: [AgriTayoWebImage1, AgriTayoWebImage2, AgriTayoWebImage3],
			githubUrl: "https://github.com/Zhenzy12/AgriTayo-Demo",
			liveUrl: "https://agritayo-demo.onrender.com/login",
			category: ["Web App", "Full Stack"],
			date: "2024",
			team: "5 Developers",
			features: [
				"Farmer and Buyer Registration",
				"Product Browsing and Filtering",
				"Responsive Web UI",
				"Direct Messaging System",
				"Admin Dashboard",
				"Secure Ordering System",
				"Azure Deployment",
			],
		},
		{
			id: 4,
			title: "Student Employability Predictor AI",
			description:
				"An AI tool that predicts student employability based on soft skills and performance metrics.",
			fullDescription:
				"The Student Employability Predictor AI is a machine learning project designed to assess and predict a student's employability using key attributes such as communication skills, confidence, general appearance, and performance ratings. Developed in Python, it uses a Decision Tree algorithm and scikit-learn to classify students as either 'Employable' or 'Less Employable'. The model was trained on labeled data and achieved a 90% accuracy rate. This tool aims to assist career counselors and educational institutions in identifying areas for student development.",
			technologies: [
				"Python",
				"scikit-learn",
				"pandas",
				"Decision Tree Algorithm",
			],
			images: [StdntEmplImg1, StdntEmplImg2],
			githubUrl: "https://github.com/Zhenzy12/StudentEmployability",
			liveUrl: "https://studentemployability.onrender.com/",
			category: ["AI/ML", "Web App", ],
			date: "2024",
			team: "Individual Project",
			features: [
				"Employability Prediction",
				"Soft Skill and Performance Factor Analysis",
				"Decision Tree Classifier",
				"90% Accuracy",
				"Python-based Implementation",
				"Feature Importance Evaluation",
			],
		},
		{
			id: 5,
			title: "Rie Zhenzy's Personal Portfolio Website",
			description:
				"A modern, responsive portfolio website showcasing my skills and projects on a static website.",
			fullDescription:
				"This portfolio website is built using React, TypeScript, and Tailwind CSS. It features a clean, modern design with smooth animations and responsive layouts. The website includes sections for showcasing projects, skills, and contact information. It's fully responsive and works well on both desktop and mobile devices.",
			technologies: [
				"React",
				"TypeScript",
				"Tailwind CSS",
				"Framer Motion",
				"React Icons",
				"Vite",
			],
			images: [PortfolioImg1],
			githubUrl: "https://github.com/Zhenzy12/ZhenzyPortfolio",
			liveUrl: "https://zhenzyportfolio.onrender.com/",
			category: ["Web App"],
			date: "2025",
			team: "Individual Project",
			features: [
				"Responsive Design",
				"Modern UI/UX",
				"Smooth Animations",
				"TypeScript Implementation",
				"Vite Build System",
				"Portfolio Showcase",
			],
		},
	];

	const categories = ["All", "Full Stack", "Web App", "Mobile App", "AI/ML"];

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category.includes(filter));

	return (
		<div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedSection>
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-6xl font-bold mb-6">
							My{" "}
							<span className="text-emerald-500 dark:text-emerald-400">
								Projects
							</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							A showcase of my development work and technical achievements
						</p>
					</div>
				</AnimatedSection>

				{/* Filter Buttons */}
				<AnimatedSection delay={200}>
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-6 py-3 rounded-lg font-medium transition-all ${
									filter === category
										? "bg-emerald-500 text-white"
										: "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
								}`}>
								{category}
							</button>
						))}
					</div>
				</AnimatedSection>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<AnimatedSection key={project.id} delay={index * 100}>
							<div
								onClick={() => setSelectedProject(project)}
								className="bg-gray-100 dark:bg-gray-900/50 border-2 border-gray-300 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-300 group cursor-pointer">
								<div className="relative overflow-hidden">
									<img
										src={project.images[0]}
										alt={project.title}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>

								<div className="p-6">
									<div className="flex items-center justify-between mb-3 flex-wrap gap-y-2">
										<div className="flex flex-wrap gap-2">
											{project.category.map((cat) => (
												<span
													key={cat}
													className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm rounded-full">
													{cat}
												</span>
											))}
										</div>

										<span className="text-gray-500 dark:text-gray-400 text-sm">
											{project.date}
										</span>
									</div>

									<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
										{project.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs rounded">
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs rounded">
												+{project.technologies.length - 3} more
											</span>
										)}
									</div>

									{/* Buttons */}
									<div className="flex space-x-4">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg transition-colors">
											<Github className="h-4 w-4" />
											<span className="text-sm font-medium">Code</span>
										</a>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
											<ExternalLink className="h-4 w-4" />
											<span className="text-sm font-medium">Demo</span>
										</a>
									</div>
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>

				{/* Project Modal */}
				{selectedProject && (
					<div
						onClick={() => setSelectedProject(null)}
						className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 z-50">
						<div
							className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}>
							<div className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 p-6 flex justify-between items-center">
								<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
									{selectedProject.title}
								</h2>
								<button
									onClick={() => setSelectedProject(null)}
									className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
									<X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
								</button>
							</div>

							<div className="py-6 px-8">
								{/* Image with navigation */}
								<div className="relative w-full mb-6">
									<img
										src={selectedProject.images[selectedImageIndex]}
										alt={selectedProject.title}
										className="w-full h-80 object-cover rounded-lg"
									/>
									{selectedProject.images.length > 1 && (
										<>
											<button
												onClick={() =>
													setSelectedImageIndex((prev) =>
														prev === 0
															? selectedProject.images.length - 1
															: prev - 1
													)
												}
												className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/70 rounded-full transition-all duration-200">
												<svg
													className="w-6 h-6 text-gray-700 dark:text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 19l-7-7 7-7"
													/>
												</svg>
											</button>

											<button
												onClick={() =>
													setSelectedImageIndex((prev) =>
														prev === selectedProject.images.length - 1
															? 0
															: prev + 1
													)
												}
												className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/70 rounded-full transition-all duration-200">
												<svg
													className="w-6 h-6 text-gray-700 dark:text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</button>
										</>
									)}
								</div>

								{/* Metadata */}
								<div className="grid md:grid-cols-3 gap-6 mb-6">
									<div className="flex items-center space-x-3">
										<Calendar className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
										<div>
											<div className="text-sm text-gray-500 dark:text-gray-400">
												Year
											</div>
											<div className="text-gray-800 dark:text-white">
												{selectedProject.date}
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
										<div>
											<div className="text-sm text-gray-500 dark:text-gray-400">
												Team
											</div>
											<div className="text-gray-800 dark:text-white">
												{selectedProject.team}
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Code className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
										<div>
											<div className="text-sm text-gray-500 dark:text-gray-400">
												Category
											</div>
											<div className="text-gray-800 dark:text-white">
												{selectedProject.category.join(", ")}
											</div>
										</div>
									</div>
								</div>

								{/* Description */}
								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400">
										Description
									</h3>
									<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
										{selectedProject.fullDescription}
									</p>
								</div>

								{/* Key Features */}
								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400">
										Key Features
									</h3>
									<ul className="space-y-2">
										{selectedProject.features.map((feature, index) => (
											<li key={index} className="flex items-start space-x-3">
												<div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-gray-700 dark:text-gray-300">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-2">
										{selectedProject.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg">
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links */}
								<div className="flex space-x-4">
									<a
										href={selectedProject.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg transition-colors">
										<Github className="h-5 w-5" />
										<span>View Code</span>
									</a>
									<a
										href={selectedProject.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
										<ExternalLink className="h-5 w-5" />
										<span>Live Demo</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
