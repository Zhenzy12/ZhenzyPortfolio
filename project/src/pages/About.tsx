import React from "react";
import { GraduationCap, MapPin, Award, User, Briefcase, Mail, Phone } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const About: React.FC = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-16">
		  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<AnimatedSection>
			  <div className="text-center mb-16">
				<h1 className="text-4xl lg:text-6xl font-bold mb-6">
				  About <span className="text-emerald-500 dark:text-emerald-400">Me</span>
				</h1>
				<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				  Learn more about my journey, education, and passion for technology
				</p>
			  </div>
			</AnimatedSection>
	  
			<div className="grid lg:grid-cols-2 gap-16 items-start">
			  {/* Personal Info */}
			  <div className="space-y-8">
				<AnimatedSection delay={200}>
				  <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-2xl p-8">
					<h2 className="text-2xl font-bold mb-6 text-emerald-500 dark:text-emerald-400">Personal Information</h2>
					<div className="space-y-4 text-gray-700 dark:text-gray-300">
					  <div className="flex items-center space-x-4">
						<User className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>Rie Zhenzy R. Zumel</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<MapPin className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>Baguio City, Philippines</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<Mail className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>zumelriezhenzy@gmail.com</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<Phone className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>+63 939 600 1945</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<Phone className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>+63 926 661 1083</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<Award className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>Computer Science Graduate</span>
					  </div>
					  <div className="flex items-center space-x-4">
						<Briefcase className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
						<span>Available for new opportunities</span>
					  </div>
					</div>
				  </div>
				</AnimatedSection>
	  
				<AnimatedSection delay={400}>
				  <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-2xl p-8">
					<h2 className="text-2xl font-bold mb-6 text-emerald-500 dark:text-emerald-400">Education</h2>
					<div className="space-y-6 text-gray-700 dark:text-gray-300">
					  <div className="flex items-start space-x-4">
						<GraduationCap className="h-6 w-6 text-emerald-500 dark:text-emerald-400 mt-1" />
						<div>
						  <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
						  <p className="text-gray-600 dark:text-gray-400">University of Baguio</p>
						  <p className="text-sm text-gray-500">2020 - 2025</p>
						  <p className="mt-2">
							Graduated with comprehensive knowledge in software development, algorithms, data structures, and modern programming practices.
						  </p>
						</div>
					  </div>
					</div>
				  </div>
				</AnimatedSection>
	  
				<AnimatedSection delay={500}>
				  <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-2xl p-8">
					<h2 className="text-2xl font-bold mb-6 text-emerald-500 dark:text-emerald-400">What I Bring</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
					  {[
						'Full-Stack Development Skills',
						'Problem-Solving Mindset',
						'Cloud & Deployment Knowledge',
						'Attention to Detail',
						'Analytical Thinking',
						'User-Centric Design Approach',
						'Team Collaboration & Communication',
						'Continuous Learning',
					  ].map((item, i) => (
						<div key={i} className="flex items-center space-x-3">
						  <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
						  <span>{item}</span>
						</div>
					  ))}
					</div>
				  </div>
				</AnimatedSection>
			  </div>
	  
			  {/* About Story */}
			  <div className="space-y-8">
						<AnimatedSection delay={300}>
							<div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-2xl p-8">
								<h2 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">My Story</h2>
								<div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
									<p>
										My journey into the tech world kicked off when I decided to study
										<span className="text-emerald-600 dark:text-emerald-400"> Computer Science at the University of Baguio</span>
										. At first, I was just a curious person wondering how all the software and systems around us actually work (I honestly thought coding was just about pressing random buttons!). But as I delved deeper into my studies, that curiosity blossomed into a real passion. I discovered how exciting it is to create useful, meaningful, and impactful solutions through coding, and I can't wait to see where this adventure takes me!
									</p>
									<p>
										During my college years, I was exposed to a variety of technologies and real-world applications that enhanced both my technical abilities and problem-solving skills. One of the most valuable experiences I had was during my internship, where I worked on the
										<span className="text-emerald-600 dark:text-emerald-400"> Baguio City Smart City Command and Control Center Inventory System</span>
										. This project provided me with hands-on experience in developing a full-stack application using
										<span className="text-emerald-600 dark:text-emerald-400"> Vue.js, Laravel, SQL and Tailwind CSS</span>
										. This experience was my first encounter with how technology can improve government processes and daily operations, ultimately making public service more efficient.
									</p>
									<p>
										Another highlight of my college experience was our thesis project called
										<span className="text-emerald-600 dark:text-emerald-400"> AgriTayo</span>, an eCommerce platform designed to connect local farmers directly with buyers. This project not only enhanced my skills in
										<span className="text-emerald-600 dark:text-emerald-400"> React.js, React Native, and Express.js </span>
										but also made me realize the potential of technology to positively impact communities by bridging the gap between producers and consumers in the agricultural sector. We deployed the system using Azure services, and I contributed by leading the whole team and writing the complete technical documentation for the project, which significantly improved my attention to detail and technical writing skills.
									</p>
									<p>
										In addition to my development projects, I delved into the field of
										<span className="text-emerald-600 dark:text-emerald-400"> Artificial Intelligence </span>
										by creating a model that
										<span className="text-emerald-600 dark:text-emerald-400"> predicts student employability </span>
										based on various factors using
										<span className="text-emerald-600 dark:text-emerald-400"> Python and scikit-learn</span>. This research provided me with a deeper understanding of machine learning principles and their applications in the real world.
									</p>
									<p>
										All of these experiences, along with my coursework, hackathons, and personal projects, really helped shape me into a versatile and flexible developer. I learned a lot about teamwork, patience, and the importance of always learning—skills I'll take with me as I dive into the professional world. College wasn't just about picking up technical skills; it was an incredible journey of growth, self-discovery, and building my confidence in creating meaningful
										solutions.
									</p>
								</div>
							</div>
						</AnimatedSection>
			  </div>
			</div>
		  </div>
		</div>
	  );
	  
};

export default About;
