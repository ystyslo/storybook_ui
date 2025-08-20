import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import clsx from "clsx";
import styles from "./Toast.module.css";

export interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  showCloseButton?: boolean;
  onClose?: () => void;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  title?: string;
  persistent?: boolean;
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
};

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 4000,
  showCloseButton = true,
  onClose,
  position = "bottom-right",
  title,
  persistent = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  const IconComponent = iconMap[type];

  useEffect(() => {
    if (persistent || !duration) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 100 / (duration / 100);
        return Math.max(0, newProgress);
      });
    }, 100);

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, persistent]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const getPositionStyles = () => {
    const positions = {
      "top-right": { top: "16px", right: "16px" },
      "top-left": { top: "16px", left: "16px" },
      "bottom-right": { bottom: "16px", right: "16px" },
      "bottom-left": { bottom: "16px", left: "16px" },
      "top-center": { top: "16px", left: "50%", transform: "translateX(-50%)" },
      "bottom-center": {
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
      },
    };
    return positions[position];
  };

  const getAnimationDirection = () => {
    if (position.includes("right")) return { x: 100 };
    if (position.includes("left")) return { x: -100 };
    if (position.includes("top")) return { y: -100 };
    return { y: 100 };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.toastContainer}
          style={getPositionStyles()}
          initial={{
            opacity: 0,
            scale: 0.8,
            ...getAnimationDirection(),
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            ...getAnimationDirection(),
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          role="alert"
        >
          <div className={clsx(styles.toast, styles[type])}>
            <div className={styles.content}>
              <div className={styles.iconContainer}>
                <IconComponent size={20} style={{ color: colorMap[type] }} />
              </div>

              <div className={styles.textContainer}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.message}>{message}</div>
              </div>

              {showCloseButton && (
                <button
                  onClick={handleClose}
                  className={styles.closeButton}
                  aria-label="Close notification"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {!persistent && duration && (
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  style={{
                    backgroundColor: colorMap[type],
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
