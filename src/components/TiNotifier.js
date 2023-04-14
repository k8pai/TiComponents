import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { HiCheck } from 'react-icons/hi2';

export default function TiNotifier({
	Component = HiCheck,
	timer = 3000,
	message = 'Now connectable.',
	style = {},
	animate = {},
}) {
	const [visible, setVisible] = useState(false);
	const [animation, setAnimation] = useState({
		from: 'bottom-0',
		to: 'bottom-10',
		anim: 'transition-all ease-out duration-300',
		...animate,
	});
	const [theme, setTheme] = useState({
		bg: 'bg-gray-700',
		color: 'text-slate-50',
		padding: 'px-4 py-3',
		borderRadius: 'rounded-lg',
		border: 'border-0',
		spacing: 'space-x-3',
		font: ' font-semibold',
		indicator: 'text-green-300',
		...style,
	});

	const showCard = () => {
		if (!visible) {
			setVisible(true);
			setTimeout(() => {
				setVisible(false);
			}, timer);
		}
	};

	return (
		<div>
			<button onClick={showCard}> click me</button>
			<div
				className={`absolute left-1/2 translate-x-[-50%] ${
					animation.from
				} ${animation.anim} ${
					visible
						? `visible ${animation.to} opacity-100`
						: 'invisible opacity-0'
				}`}
			>
				<div
					className={`${theme.padding} ${theme.bg} ${theme.color} ${theme.borderRadius} ${theme.border} ${theme.font} flex h-full items-center ${theme.spacing}`}
				>
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: `global-class-name ${theme.indicator}`,
						}}
					>
						<Component />
					</IconContext.Provider>
					<span>{message}</span>
				</div>
			</div>
		</div>
	);
}
