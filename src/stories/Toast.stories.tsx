import { Toast } from "@/components/Toast/Toast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A toast notification component that appears at various positions with auto-dismiss functionality and smooth animations.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    position: {
      control: { type: "select" },
      options: [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ],
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    persistent: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: "success",
    message: "Operation completed successfully!",
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Something went wrong. Please try again.",
    duration: 5000,
    position: "top-center",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Please review your input before proceeding.",
    duration: 6000,
  },
};

export const Info: Story = {
  args: {
    type: "info",
    message: "New features are available in the dashboard.",
    duration: 4000,
  },
};

export const WithTitle: Story = {
  args: {
    type: "success",
    title: "Profile Updated",
    message: "Your profile information has been saved successfully.",
    duration: 4000,
  },
};

export const LongMessage: Story = {
  args: {
    type: "info",
    title: "System Update",
    message:
      "We will be performing scheduled maintenance on our servers tonight from 2:00 AM to 4:00 AM EST. During this time, some features may be temporarily unavailable.",
    duration: 6000,
  },
};

export const Persistent: Story = {
  args: {
    type: "error",
    title: "Action Required",
    message: "Your session will expire soon. Please save your work.",
    persistent: true,
    showCloseButton: true,
  },
};

export const NoCloseButton: Story = {
  args: {
    type: "info",
    message: "Auto-dismissing notification without close button.",
    showCloseButton: false,
    duration: 3000,
  },
};
