import type { Meta, StoryObj } from '@storybook/react';
import { MyPageTop } from './MyPageTop';

const meta: Meta<typeof MyPageTop> = {
	component: MyPageTop,
	argTypes: {
		
}
	};

export default meta;
type Story = StoryObj<typeof MyPageTop>;

export const Default: Story = {
	args: {
		
	}
};