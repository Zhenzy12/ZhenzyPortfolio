import React, { useState, useEffect } from "react";

interface TypingTextProps {
	texts: string[];
	delay?: number;
	typingSpeed?: number;
	backspaceSpeed?: number;
	className?: string;
	color?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
	texts,
	delay = 0,
	typingSpeed = 100,
	backspaceSpeed = 50,
	className = "",
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const [letterIndex, setLetterIndex] = useState(0);
	const [isWaitingBeforeDelete, setIsWaitingBeforeDelete] = useState(false); // ⏱️ NEW STATE

	useEffect(() => {
		if (delay > 0) {
			const timer = setTimeout(() => {
				setIsTyping(true);
			}, delay);
			return () => clearTimeout(timer);
		}
	}, [delay]);

	useEffect(() => {
		if (isWaitingBeforeDelete) return; // ⛔ Pause here during wait

		if (isTyping) {
			if (letterIndex < texts[currentIndex].length) {
				const timer = setTimeout(() => {
					setCurrentText((prev) => prev + texts[currentIndex][letterIndex]);
					setLetterIndex((prev) => prev + 1);
				}, typingSpeed);
				return () => clearTimeout(timer);
			} else {
				// Finished typing word — wait 2 seconds before deleting
				setIsWaitingBeforeDelete(true);
				setTimeout(() => {
					setIsWaitingBeforeDelete(false);
					setIsTyping(false); // Now begin backspacing
					setLetterIndex(0);
				}, 1000); // ⏱️ 2-second pause
			}
		} else {
			if (letterIndex < currentText.length) {
				const timer = setTimeout(() => {
					setCurrentText((prev) => prev.slice(0, -1));
					setLetterIndex((prev) => prev + 1);
				}, backspaceSpeed);
				return () => clearTimeout(timer);
			} else {
				// Move to next text
				setCurrentText("");
				setIsTyping(true);
				setCurrentIndex((prev) => (prev + 1) % texts.length);
				setLetterIndex(0);
			}
		}
	}, [
		currentIndex,
		currentText,
		isTyping,
		letterIndex,
		texts,
		typingSpeed,
		backspaceSpeed,
		isWaitingBeforeDelete,
	]);

	return (
		<span className={className}>
			<span
				className={`
          ${className} 
          transition-all duration-800
        `}>
				{currentText}
			</span>
			<span className="animate-blink">|</span>
		</span>
	);
};

export default TypingText;
