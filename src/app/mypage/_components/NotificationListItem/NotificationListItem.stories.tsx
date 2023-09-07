import type { Meta, StoryObj } from '@storybook/react';
import { NotificationListItem } from './NotificationListItem';

const meta: Meta<typeof NotificationListItem> = {
	component: NotificationListItem,
	argTypes: {
		
}
	};

export default meta;
type Story = StoryObj<typeof NotificationListItem>;

export const Default: Story = {
	args: {
		
	}
};