import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from '@chakra-ui/react';
import React, { Component } from 'react';

interface MyInputIProps {
	numberChange: (s: any) => void;
	value: number;
	className?: string;
}

class MyInput extends Component<MyInputIProps> {
	update(newState: any) {
		this.props.numberChange(newState);
	}
	render() {
		return (
			<NumberInput
				defaultValue={5}
				min={0}
				max={100}
				value={this.props.value}
				onChange={this.update.bind(this)}
				className={this.props.className}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		);
	}
}

export default MyInput;
