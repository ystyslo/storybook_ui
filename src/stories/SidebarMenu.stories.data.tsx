import { MenuItem } from "@/components/SidebarMenu";
import {
  Home,
  User,
  Settings,
  FileText,
  BarChart3,
  Users,
  ShoppingCart,
  CreditCard,
  HelpCircle,
  Bookmark,
  Star,
  Download,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  ClipboardClock,
  Clipboard,
  ClipboardCheck,
  ClipboardX,
  ArrowLeftRight,
  BanknoteArrowDown,
  DollarSign,
  Percent,
  ChartNoAxesCombined,
} from "lucide-react";

export const basicMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home size={20} />,
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User size={20} />,
    onClick: () => console.log("Profile clicked"),
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    onClick: () => console.log("Settings clicked"),
  },
  {
    id: "help",
    label: "Help & Support",
    icon: <HelpCircle size={20} />,
    badge: "3",
    onClick: () => console.log("Help clicked"),
  },
];

export const nestedMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home size={20} />,
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "content",
    label: "Content Management",
    icon: <FileText size={20} />,
    children: [
      {
        id: "posts",
        label: "Posts",
        icon: <Edit size={16} />,
        badge: "12",
        onClick: () => console.log("Posts clicked"),
      },
      {
        id: "pages",
        label: "Pages",
        icon: <FileText size={16} />,
        onClick: () => console.log("Pages clicked"),
      },
      {
        id: "media",
        label: "Media Library",
        icon: <Eye size={16} />,
        children: [
          {
            id: "images",
            label: "Images",
            onClick: () => console.log("Images clicked"),
          },
          {
            id: "videos",
            label: "Videos",
            onClick: () => console.log("Videos clicked"),
          },
          {
            id: "documents",
            label: "Documents",
            onClick: () => console.log("Documents clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <BarChart3 size={20} />,
    children: [
      {
        id: "reports",
        label: "Reports",
        icon: <FileText size={16} />,
        onClick: () => console.log("Reports clicked"),
      },
      {
        id: "traffic",
        label: "Traffic Analysis",
        icon: <ChartNoAxesCombined size={16} />,
        badge: "New",
        onClick: () => console.log("Traffic clicked"),
      },
      {
        id: "conversions",
        label: "Conversions",
        icon: <Star size={16} />,
        onClick: () => console.log("Conversions clicked"),
      },
    ],
  },
  {
    id: "users",
    label: "User Management",
    icon: <Users size={20} />,
    children: [
      {
        id: "all-users",
        label: "All Users",
        badge: "1,234",
        onClick: () => console.log("All Users clicked"),
      },
      {
        id: "roles",
        label: "Roles & Permissions",
        onClick: () => console.log("Roles clicked"),
      },
      {
        id: "invitations",
        label: "Invitations",
        badge: "5",
        onClick: () => console.log("Invitations clicked"),
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    onClick: () => console.log("Settings clicked"),
  },
];

export const ecommerceMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home size={20} />,
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "orders",
    label: "Orders",
    icon: <ShoppingCart size={20} />,
    badge: "23",
    children: [
      {
        id: "all-orders",
        label: "All Orders",
        badge: "156",
        icon: <Clipboard size={16} />,
        onClick: () => console.log("All Orders clicked"),
      },
      {
        id: "pending",
        label: "Pending",
        badge: "12",
        icon: <ClipboardClock size={16} />,
        onClick: () => console.log("Pending clicked"),
      },
      {
        id: "completed",
        label: "Completed",
        icon: <ClipboardCheck size={16} />,
        onClick: () => console.log("Completed clicked"),
      },
      {
        id: "cancelled",
        label: "Cancelled",
        icon: <ClipboardX size={16} />,
        onClick: () => console.log("Cancelled clicked"),
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    icon: <Plus size={20} />,
    children: [
      {
        id: "all-products",
        label: "All Products",
        icon: <Search size={16} />,
        onClick: () => console.log("All Products clicked"),
      },
      {
        id: "add-product",
        label: "Add Product",
        icon: <Plus size={16} />,
        onClick: () => console.log("Add Product clicked"),
      },
      {
        id: "categories",
        label: "Categories",
        icon: <Filter size={16} />,
        children: [
          {
            id: "electronics",
            label: "Electronics",
            onClick: () => console.log("Electronics clicked"),
          },
          {
            id: "clothing",
            label: "Clothing",
            onClick: () => console.log("Clothing clicked"),
          },
          {
            id: "home-garden",
            label: "Home & Garden",
            onClick: () => console.log("Home & Garden clicked"),
          },
          {
            id: "sports",
            label: "Sports & Outdoors",
            onClick: () => console.log("Sports clicked"),
          },
        ],
      },
      {
        id: "inventory",
        label: "Inventory",
        icon: <Bookmark size={16} />,
        onClick: () => console.log("Inventory clicked"),
      },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: <Users size={20} />,
    children: [
      {
        id: "all-customers",
        label: "All Customers",
        badge: "2,456",
        onClick: () => console.log("All Customers clicked"),
      },
      {
        id: "customer-groups",
        label: "Customer Groups",
        onClick: () => console.log("Customer Groups clicked"),
      },
      {
        id: "reviews",
        label: "Reviews",
        icon: <Star size={16} />,
        badge: "45",
        onClick: () => console.log("Reviews clicked"),
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: <CreditCard size={20} />,
    children: [
      {
        id: "transactions",
        label: "Transactions",
        icon: <ArrowLeftRight size={16} />,
        onClick: () => console.log("Transactions clicked"),
      },
      {
        id: "refunds",
        label: "Refunds",
        icon: <BanknoteArrowDown size={16} />,
        badge: "7",
        onClick: () => console.log("Refunds clicked"),
      },
      {
        id: "payment-methods",
        label: "Payment Methods",
        icon: <DollarSign size={16} />,
        onClick: () => console.log("Payment Methods clicked"),
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: <BarChart3 size={20} />,
    children: [
      {
        id: "sales-report",
        label: "Sales Report",
        icon: <Percent size={16} />,
        onClick: () => console.log("Sales Report clicked"),
      },
      {
        id: "product-performance",
        label: "Product Performance",
        icon: <ChartNoAxesCombined size={16} />,
        onClick: () => console.log("Product Performance clicked"),
      },
      {
        id: "export-data",
        label: "Export Data",
        icon: <Download size={16} />,
        onClick: () => console.log("Export clicked"),
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={20} />,
    onClick: () => console.log("Settings clicked"),
  },
];
