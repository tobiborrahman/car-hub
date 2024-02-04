'use client';

import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	type,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={type || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className="flex-1">{title}</span>
		</button>
	);
};

export default CustomButton;
