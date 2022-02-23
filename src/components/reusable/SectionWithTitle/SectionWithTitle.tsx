import React from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';
import Label from '../Label/Label';

const SectionWithTitle: React.FC<{
	title?: string;
	leftContent?: React.ReactElement;
	rotate?: boolean;
}> = ({ title, leftContent, children, rotate = false }) => {
	return (
		<Section>
			<TitleSection>
				<Label weight={'700'} size={'1.5rem'}>
					{title}
				</Label>
				<LeftContent rotate={rotate}>{leftContent}</LeftContent>
			</TitleSection>
			{children}
		</Section>
	);
};

const TitleSection = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const LeftContent = styled.div<{ rotate: boolean }>`
	height: 1.5rem;
	min-width: 1.5rem;
	width: fit-content;
	svg {
		transform: rotate(${(props) => (props.rotate ? '90deg' : '0')});
	}
`;

export default SectionWithTitle;
