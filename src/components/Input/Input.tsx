// src/components/Input/Input.tsx
import React, { useState, forwardRef, InputHTMLAttributes } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  clearable?: boolean;
  showPasswordToggle?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      clearable = false,
      showPasswordToggle = false,
      size = "md",
      disabled = false,
      error = false,
      helperText,
      label,
      value,
      icon,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(value || "");

    const isPasswordType = type === "password";
    const actualType = isPasswordType && showPassword ? "text" : type;
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(event);
    };

    const handleClear = () => {
      const syntheticEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;

      if (value === undefined) {
        setInternalValue("");
      }
      onChange?.(syntheticEvent);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const showClearButton = clearable && currentValue.length > 0 && !disabled;
    const showPasswordButton =
      showPasswordToggle && isPasswordType && !disabled;

    return (
      <div className={clsx(styles.inputContainer, className)}>
        {label && (
          <label
            className={clsx(styles.label, { [styles.disabled]: disabled })}
          >
            {label}
          </label>
        )}

        <div
          className={clsx(styles.inputWrapper, styles[size], {
            [styles.error]: error,
            [styles.disabled]: disabled,
            [styles.withActions]: showClearButton || showPasswordButton,
          })}
        >
          {icon && (
            <div className={clsx(styles.icon, { [styles.disabled]: disabled })}>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={actualType}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            className={styles.input}
            {...props}
          />

          {(showClearButton || showPasswordButton) && (
            <div className={styles.actions}>
              {showClearButton && (
                <button
                  type="button"
                  onClick={handleClear}
                  className={clsx(styles.actionButton, styles.clearButton)}
                  aria-label="Clear input"
                >
                  <X size={16} />
                </button>
              )}

              {showPasswordButton && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={clsx(styles.actionButton, styles.passwordToggle)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )}
            </div>
          )}
        </div>

        {helperText && (
          <div
            className={clsx(styles.helperText, { [styles.errorText]: error })}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);
