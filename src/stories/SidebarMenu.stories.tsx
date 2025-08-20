import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "@/components/SidebarMenu";
import { useArgs } from "storybook/preview-api";
import {
  basicMenuItems,
  ecommerceMenuItems,
  nestedMenuItems,
} from "./SidebarMenu.stories.data";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A sliding sidebar menu component with nested navigation, animations, and responsive design.",
      },
    },
  },
  argTypes: {
    width: {
      control: { type: "number", min: 200, max: 500, step: 20 },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Main Navigation",
  },
  render: (args) => {
    const [{ isOpen, title }, updateArgs] = useArgs();
    return (
      <div
        style={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#f3f4f6",
        }}
      >
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => updateArgs({ isOpen: !isOpen })}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {isOpen ? "Close" : "Open"} Sidebar
          </button>
        </div>

        <SidebarMenu
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
          items={basicMenuItems}
          title={title}
        />
      </div>
    );
  },
};

export const NestedMenu: Story = {
  args: {
    isOpen: true,
    title: "CMS Navigation",
  },
  render: (args) => {
    const [{ isOpen, title }, updateArgs] = useArgs();
    return (
      <div
        style={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#f3f4f6",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3 style={{ margin: "0 0 16px 0" }}>Content Management System</h3>
          <button
            onClick={() => updateArgs({ isOpen: !isOpen })}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {isOpen ? "Close" : "Open"} Navigation
          </button>
        </div>

        <SidebarMenu
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
          items={nestedMenuItems}
          title={title}
        />
      </div>
    );
  },
};

export const EcommerceDashboard: Story = {
  args: {
    isOpen: true,
    title: "Store Management",
  },
  render: (args) => {
    const [{ isOpen, title }, updateArgs] = useArgs();

    return (
      <div
        style={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#f9fafb",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#111827" }}>
            E-commerce Dashboard
          </h3>
          <p style={{ margin: "0 0 16px 0", color: "#6b7280" }}>
            Complete navigation with deep nesting and badges
          </p>
          <button
            onClick={() => updateArgs({ isOpen: !isOpen })}
            style={{
              padding: "12px 24px",
              backgroundColor: "#059669",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            {isOpen ? "Close" : "Open"} Menu
          </button>
        </div>

        <SidebarMenu
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
          items={ecommerceMenuItems}
          title={title}
          width={320}
          closeOnItemClick={false}
        />
      </div>
    );
  },
};
