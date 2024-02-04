import { manufacturers } from './../constants/index';
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string;
	type?: 'button' | 'submit';
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}
