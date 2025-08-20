import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import styles from "./SidebarMenu.module.css";

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
  href?: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  width?: number;
  title?: string;
  showCloseButton?: boolean;
  showOverlay?: boolean;
  slideFrom?: "left" | "right";
  closeOnItemClick?: boolean;
}

interface MenuItemComponentProps {
  item: MenuItem;
  level: number;
  onItemClick: (item: MenuItem) => void;
  expandedItems: Set<string>;
  onToggleExpanded: (itemId: string) => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  item,
  level,
  onItemClick,
  expandedItems,
  onToggleExpanded,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.has(item.id);

  const handleClick = () => {
    if (hasChildren) {
      onToggleExpanded(item.id);
    } else {
      onItemClick(item);
    }
  };

  return (
    <div className={styles.menuItemContainer}>
      <button
        className={clsx(styles.menuItem, styles[`level${Math.min(level, 3)}`], {
          [styles.disabled]: item.disabled,
          [styles.hasChildren]: hasChildren,
          [styles.expanded]: isExpanded,
        })}
        onClick={handleClick}
        disabled={item.disabled}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        <div className={styles.menuItemContent}>
          {item.icon && <div className={styles.menuItemIcon}>{item.icon}</div>}

          <span className={styles.menuItemLabel}>{item.label}</span>

          {item.badge && <div className={styles.badge}>{item.badge}</div>}
        </div>

        {hasChildren && (
          <div
            className={clsx(styles.chevron, { [styles.rotated]: isExpanded })}
          >
            {level === 0 ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>
        )}
      </button>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            className={styles.submenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {item.children?.map((child) => (
              <MenuItemComponent
                key={child.id}
                item={child}
                level={level + 1}
                onItemClick={onItemClick}
                expandedItems={expandedItems}
                onToggleExpanded={onToggleExpanded}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  width = 280,
  title = "Menu",
  showCloseButton = true,
  showOverlay = true,
  slideFrom = "right",
  closeOnItemClick = false,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keyup", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keyup", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }

    if (closeOnItemClick && !item.children?.length) {
      onClose();
    }
  };

  const handleToggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleOverlayClick = () => {
    if (showOverlay) {
      onClose();
    }
  };

  const slideDirection = slideFrom === "left" ? -width : width;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {showOverlay && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
              aria-hidden="true"
            />
          )}

          <motion.aside
            className={clsx(styles.sidebar, styles[slideFrom])}
            style={{ width }}
            initial={{ x: slideDirection }}
            animate={{ x: 0 }}
            exit={{ x: slideDirection }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            role="navigation"
            aria-label={title}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>

              {showCloseButton && (
                <button
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <nav className={styles.menuContainer}>
              {items.map((item) => (
                <MenuItemComponent
                  key={item.id}
                  item={item}
                  level={0}
                  onItemClick={handleItemClick}
                  expandedItems={expandedItems}
                  onToggleExpanded={handleToggleExpanded}
                />
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
