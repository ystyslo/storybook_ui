import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { User, Mail, Lock, Search } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile input component with support for different types, password visibility toggle, and clearable functionality.",
      },
    },
  },
  argTypes: {
    onChange: { action: "changed" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    icon: <User />,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    showPasswordToggle: true,
  },
};

export const Clearable: Story = {
  args: {
    placeholder: "Search...",
    clearable: true,
    defaultValue: "Clear me!",
    icon: <Search />,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    clearable: true,
    icon: <Mail />,
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    error: true,
    helperText: "This field is required",
    defaultValue: "invalid@",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit this",
    disabled: true,
    defaultValue: "Disabled value",
    icon: <Lock />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col w-100 gap-4">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Registration: Story = {
  render: () => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
    });

    const handleChange =
      (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
      };

    return (
      <div className="flex flex-col w-100 gap-4">
        <h3 className="text-lg font-semibold">Registration Form</h3>
        <Input
          label="Username"
          placeholder="Choose a username"
          value={values.username}
          onChange={handleChange("username")}
          clearable
        />
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          value={values.email}
          onChange={handleChange("email")}
          clearable
        />
        <Input
          type="password"
          label="Password"
          placeholder="Create a password"
          value={values.password}
          onChange={handleChange("password")}
          showPasswordToggle
          helperText="At least 8 characters"
        />
        <div className="text-sm p-4 bg-[#f3f4f6] rounded-md">
          <strong>Values:</strong>
          <br />
          Username: {values.username}
          <br />
          Email: {values.email}
          <br />
          Password: {values.password ? "•".repeat(values.password.length) : ""}
        </div>
      </div>
    );
  },
};
