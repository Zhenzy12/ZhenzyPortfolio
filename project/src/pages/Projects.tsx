import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X, Calendar, Code, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

interface Project {
	id: number;
	title: string;
	description: string;
	fullDescription: string;
	technologies: string[];
	images: string[];
	githubUrl: string;
	liveUrl: string;
	category: string;
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
        background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"};
        border-radius: 4px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"};
        border-radius: 4px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"};
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
              background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"};
              border-radius: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"};
              border-radius: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: ${document.documentElement.classList.contains("dark") ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"};
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
			title: "E-Commerce Platform",
			description: "A full-stack e-commerce solution with modern design and secure payment integration.",
			fullDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing through Stripe integration.",
			technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
			images: ["https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"],
			githubUrl: "https://github.com",
			liveUrl: "https://example.com",
			category: "Full Stack",
			date: "2024",
			team: "Solo Project",
			features: ["User authentication and authorization", "Product catalog with search and filtering", "Shopping cart and checkout process", "Admin dashboard for inventory management", "Secure payment processing", "Order tracking and history"],
		},
		{
			id: 1,
			title: "AgriTayo",
			description: "A digital marketplace connecting local farmers directly with consumers to streamline agricultural trade.",
			fullDescription:
				"AgriTayo is an eCommerce platform designed to bridge the gap between farmers and consumers, making the buying and selling of agricultural products simple, transparent, and efficient. The system offers both web and mobile applications, allowing users to browse available farm products, communicate directly with sellers, and place orders securely. Built using React.js, React Native, Node.js, and Tailwind CSS, the platform is backed by Supabase for database management and deployed via Azure services, ensuring reliability and scalability. The project focuses on empowering local farmers, reducing middlemen, and promoting sustainable agriculture through technology.",
			technologies: ["React.js", "React Native", "Node.js", "Express.js", "Tailwind CSS", "Supabase", "Azure DevOps", "Azure Web Services"],
			images: ["https://images.pexels.com/photos/4911693/pexels-photo-4911693.jpeg?auto=compress&cs=tinysrgb&w=800"], // sample placeholder image
			githubUrl: "https://github.com/Zhenzy12/AgriTayo-Demo", // replace with actual if available
			liveUrl: "https://agritayo-demo.onrender.com", // replace with actual if available
			category: "Full Stack",
			date: "2024",
			team: "5 Developers",
			features: ["Farmer and Buyer Registration", "Product Listing and Browsing", "Secure Ordering System", "Direct Messaging between Buyers and Sellers", "Responsive Web and Mobile Apps", "Cloud Deployment via Azure", "Admin Management Dashboard"],
		},
		{
			id: 3,
			title: "Weather Dashboard",
			description: "A responsive weather application with location-based forecasts and interactive maps.",
			fullDescription: "A comprehensive weather dashboard that provides current conditions, forecasts, and weather maps with a beautiful, intuitive interface.",
			technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
			images: ["https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"],
			githubUrl: "https://github.com",
			liveUrl: "https://example.com",
			category: "Frontend",
			date: "2023",
			team: "Solo Project",
			features: ["Current weather conditions", "7-day weather forecast", "Interactive weather maps", "Location search and geolocation", "Weather alerts and notifications", "Historical weather data"],
		},
		{
			id: 4,
			title: "API Gateway Service",
			description: "A scalable microservices API gateway with authentication and rate limiting.",
			fullDescription: "A robust API gateway service designed to handle microservices communication with built-in security, monitoring, and performance optimization features.",
			technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
			images: ["https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"],
			githubUrl: "https://github.com",
			liveUrl: "https://example.com",
			category: "Backend",
			date: "2023",
			team: "3 Developers",
			features: ["API routing and load balancing", "Authentication and authorization", "Rate limiting and throttling", "Request/response transformation", "Monitoring and analytics", "Circuit breaker pattern"],
		},
		{
			id: 5,
			title: "Mobile Fitness App",
			description: "A React Native fitness tracking app with workout plans and progress monitoring.",
			fullDescription: "A comprehensive mobile fitness application that helps users track workouts, monitor progress, and achieve their fitness goals with personalized workout plans.",
			technologies: ["React Native", "Firebase", "Redux", "Expo"],
			images: ["https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"],
			githubUrl: "https://github.com",
			liveUrl: "https://example.com",
			category: "Mobile",
			date: "2023",
			team: "Solo Project",
			features: ["Workout tracking and logging", "Personalized workout plans", "Progress photos and measurements", "Exercise library with instructions", "Social features and challenges", "Nutrition tracking integration"],
		},
		{
			id: 6,
			title: "Data Analytics Dashboard",
			description: "A comprehensive analytics platform with interactive charts and real-time data visualization.",
			fullDescription: "An advanced data analytics dashboard that provides insights through interactive visualizations, real-time data processing, and customizable reporting features.",
			technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
			images: ["https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"],
			githubUrl: "https://github.com",
			liveUrl: "https://example.com",
			category: "Full Stack",
			date: "2024",
			team: "4 Developers",
			features: ["Interactive data visualizations", "Real-time data processing", "Custom dashboard creation", "Automated report generation", "Data export and sharing", "User role management"],
		},
	];

	const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

	const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

	return (
		<div className="min-h-screen bg-black dark:bg-black text-white pt-24 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedSection>
					<div className="text-center mb-16">
						<h1 className="text-4xl lg:text-6xl font-bold mb-6">
							My <span className="text-emerald-400">Projects</span>
						</h1>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">A showcase of my development work and technical achievements</p>
					</div>
				</AnimatedSection>

				{/* Filter Buttons */}
				<AnimatedSection delay={200}>
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{categories.map((category) => (
							<button key={category} onClick={() => setFilter(category)} className={`px-6 py-3 rounded-lg font-medium transition-all ${filter === category ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
								{category}
							</button>
						))}
					</div>
				</AnimatedSection>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<AnimatedSection key={project.id} delay={index * 100}>
							<div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
								<div className="relative overflow-hidden">
									<img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<button onClick={() => setSelectedProject(project)} className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium">
											View Details
										</button>
									</div>
								</div>

								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full">{project.category}</span>
										<span className="text-gray-400 text-sm">{project.date}</span>
									</div>

									<h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>

									<p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.slice(0, 3).map((tech) => (
											<span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">+{project.technologies.length - 3} more</span>}
									</div>

									<div className="flex space-x-4">
										<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
											<Github className="h-4 w-4" />
											<span className="text-sm">Code</span>
										</a>
										<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors">
											<ExternalLink className="h-4 w-4" />
											<span className="text-sm">Demo</span>
										</a>
									</div>
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>

				{/* Project Modal */}
				{selectedProject && (
					<div onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
						<div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
							<div className="sticky top-0 z-20 bg-gray-900 border-b border-gray-800 p-6 flex justify-between items-center">
								<h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
								<button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
									<X className="h-6 w-6 text-gray-400" />
								</button>
							</div>

							<div className="p-6">
								<div className="relative w-full mb-6">
									<img src={selectedProject.images[selectedImageIndex]} alt={selectedProject.title} className="w-full h-80 object-cover rounded-lg" />
									{selectedProject.images.length > 1 && (
										<>
											{/* Left button */}
											<button onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 rounded-full transition-all duration-200">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
												</svg>
											</button>

											{/* Right button */}
											<button onClick={() => setSelectedImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 rounded-full transition-all duration-200">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
												</svg>
											</button>
										</>
									)}
								</div>

								<div className="grid md:grid-cols-3 gap-6 mb-6">
									<div className="flex items-center space-x-3">
										<Calendar className="h-5 w-5 text-emerald-400" />
										<div>
											<div className="text-sm text-gray-400">Year</div>
											<div className="text-white">{selectedProject.date}</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="h-5 w-5 text-emerald-400" />
										<div>
											<div className="text-sm text-gray-400">Team</div>
											<div className="text-white">{selectedProject.team}</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Code className="h-5 w-5 text-emerald-400" />
										<div>
											<div className="text-sm text-gray-400">Category</div>
											<div className="text-white">{selectedProject.category}</div>
										</div>
									</div>
								</div>

								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-400">Description</h3>
									<p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
								</div>

								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-400">Key Features</h3>
									<ul className="space-y-2">
										{selectedProject.features.map((feature, index) => (
											<li key={index} className="flex items-start space-x-3">
												<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-gray-300">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3 text-emerald-400">Technologies Used</h3>
									<div className="flex flex-wrap gap-2">
										{selectedProject.technologies.map((tech) => (
											<span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg">
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="flex space-x-4">
									<a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
										<Github className="h-5 w-5" />
										<span>View Code</span>
									</a>
									<a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
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
